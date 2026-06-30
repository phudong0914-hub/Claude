from __future__ import annotations

from collections import Counter, defaultdict
from itertools import combinations
from pathlib import Path
import html
import json
import math
import re


SOURCE = Path("Sách Claude Toàn tập OCR.txt")
OUT_JSON = Path("knowledge_graph.json")
OUT_HTML = Path("knowledge_graph.html")
OUT_NODES = Path("knowledge_graph_nodes.csv")
OUT_EDGES = Path("knowledge_graph_edges.csv")

TOKEN_RE = re.compile(r"[0-9A-Za-zÀ-ỹ]+(?:[-_/][0-9A-Za-zÀ-ỹ]+)*")
PAGE_RE = re.compile(r"--- Trang (\d+) ---")

STOPWORDS = {
    "a", "ai", "an", "anh", "bao", "bạn", "bằng", "bị", "biết", "bộ", "các", "cách",
    "cái", "cần", "chỉ", "cho", "chọn", "chúng", "có", "còn", "của", "cùng", "cũng",
    "đã", "đang", "đây", "để", "đến", "đi", "được", "dưới", "gì", "hay", "hơn",
    "khi", "không", "là", "lại", "làm", "lên", "mà", "mình", "một", "này", "nên",
    "nếu", "ngay", "như", "những", "nó", "ở", "ra", "rất", "sau", "sẽ", "sử", "ta",
    "tại", "the", "thể", "theo", "thì", "trên", "trong", "từ", "và", "vào", "với",
    "về", "việc", "you", "your", "to", "of", "in", "for", "and", "or", "with", "is",
}

ALIASES = {
    "claude ai": "Claude",
    "claude": "Claude",
    "artifact": "Artifacts",
    "artifacts": "Artifacts",
    "prompt": "Prompt",
    "prompts": "Prompt",
    "project": "Projects",
    "projects": "Projects",
    "code": "Code",
    "cowork": "Cowork",
    "mcp": "MCP",
    "api": "API",
    "context": "Context",
    "markdown": "Markdown",
    "pdf": "PDF",
}

STOPWORDS.update(
    {
        "ap", "bi", "chi", "chinh", "cong", "de", "ding", "dung", "giai",
        "giup", "hieu", "hoach", "khac", "lieu", "phan", "quan", "thuc",
        "tich", "tiet", "trinh", "xuat", "yeu",
    }
)

ALIASES.update(
    {
        "git": "Git",
        "debug": "Debug",
        "refactor": "Refactor",
        "workflow": "Workflow",
        "quy trinh": "Workflow",
        "du lieu": "Data",
        "noi dung": "Content",
        "tai lieu": "Document",
        "tu dong": "Automation",
        "ung dung": "Application",
        "phan tich": "Analysis",
        "ke hoach": "Plan",
        "kiem tra": "Testing",
    }
)

DOMAIN_TERMS = {
    "API", "Application", "Artifacts", "Automation", "Claude", "Code",
    "Content", "Context", "Cowork", "Data", "Debug", "Document", "Git",
    "MCP", "PDF", "Plan", "Projects", "Prompt", "Refactor", "Testing",
    "Workflow",
}


def normalize_term(term: str) -> str:
    cleaned = re.sub(r"\s+", " ", term.strip(" -_:/.,;()[]{}\"'`")).lower()
    if cleaned in ALIASES:
        return ALIASES[cleaned]
    if len(cleaned) <= 3 and cleaned.isascii():
        return cleaned.upper()
    return " ".join(part.capitalize() if part.isascii() else part for part in cleaned.split())


def split_pages(text: str) -> list[tuple[int, str]]:
    matches = list(PAGE_RE.finditer(text))
    pages: list[tuple[int, str]] = []
    for idx, match in enumerate(matches):
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(text)
        pages.append((int(match.group(1)), text[start:end].strip()))
    return pages


def candidate_terms(line: str) -> list[str]:
    words = [w.lower() for w in TOKEN_RE.findall(line)]
    filtered = [w for w in words if w not in STOPWORDS and not w.isdigit() and len(w) > 1]
    terms: list[str] = []

    line_lower = " ".join(words)
    for raw, canonical in ALIASES.items():
        if " " in raw and raw in line_lower:
            terms.append(canonical)

    for size in (3, 2):
        for i in range(0, max(0, len(filtered) - size + 1)):
            phrase = " ".join(filtered[i : i + size])
            if any(len(part) > 2 for part in phrase.split()):
                terms.append(normalize_term(phrase))

    for word in filtered:
        normalized = normalize_term(word)
        if normalized in DOMAIN_TERMS or word in ALIASES:
            terms.append(normalized)

    return terms


def build_graph(pages: list[tuple[int, str]]) -> tuple[list[dict], list[dict]]:
    counts: Counter[str] = Counter()
    page_hits: defaultdict[str, set[int]] = defaultdict(set)
    edge_weights: Counter[tuple[str, str]] = Counter()

    for page_number, body in pages:
        page_terms: Counter[str] = Counter()
        for line in body.splitlines():
            if not line.strip():
                continue
            for term in candidate_terms(line):
                page_terms[term] += 1

        top_page_terms = [term for term, _ in page_terms.most_common(18)]
        for term, count in page_terms.items():
            counts[term] += count
            page_hits[term].add(page_number)

        for left, right in combinations(sorted(set(top_page_terms)), 2):
            if left != right:
                edge_weights[(left, right)] += 1

    selected = set()
    for term, count in counts.most_common(180):
        is_phrase = " " in term
        is_domain = term in DOMAIN_TERMS
        if count >= 2 and (is_phrase or is_domain) and len(term) > 2:
            selected.add(term)
        if len(selected) >= 90:
            break

    nodes = [
        {
            "id": term,
            "label": term,
            "weight": counts[term],
            "pages": sorted(page_hits[term]),
        }
        for term in sorted(selected, key=lambda item: (-counts[item], item.lower()))
    ]

    edges = [
        {"source": left, "target": right, "weight": weight}
        for (left, right), weight in edge_weights.items()
        if left in selected and right in selected and weight >= 2
    ]
    edges.sort(key=lambda item: (-item["weight"], item["source"], item["target"]))
    return nodes, edges[:220]


def write_csv(nodes: list[dict], edges: list[dict]) -> None:
    OUT_NODES.write_text(
        "id,label,weight,pages\n"
        + "\n".join(
            f"{json.dumps(n['id'], ensure_ascii=False)},{json.dumps(n['label'], ensure_ascii=False)},{n['weight']},{json.dumps(n['pages'])}"
            for n in nodes
        ),
        encoding="utf-8",
    )
    OUT_EDGES.write_text(
        "source,target,weight\n"
        + "\n".join(
            f"{json.dumps(e['source'], ensure_ascii=False)},{json.dumps(e['target'], ensure_ascii=False)},{e['weight']}"
            for e in edges
        ),
        encoding="utf-8",
    )


def write_html(nodes: list[dict], edges: list[dict]) -> None:
    data = json.dumps({"nodes": nodes, "edges": edges}, ensure_ascii=False)
    max_weight = max((n["weight"] for n in nodes), default=1)
    html_doc = f"""<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Knowledge Graph - Sach Claude Toan tap</title>
<style>
body {{ margin: 0; font-family: Arial, sans-serif; background: #0f1216; color: #e8edf3; }}
header {{ padding: 14px 18px; border-bottom: 1px solid #27313d; }}
h1 {{ font-size: 18px; margin: 0; }}
#graph {{ width: 100vw; height: calc(100vh - 54px); display: block; }}
.tip {{ position: fixed; display: none; max-width: 320px; padding: 8px 10px; background: #202936; border: 1px solid #415166; border-radius: 6px; font-size: 13px; pointer-events: none; }}
</style>
</head>
<body>
<header><h1>Knowledge Graph - Sách Claude Toàn tập OCR</h1></header>
<canvas id="graph"></canvas>
<div id="tip" class="tip"></div>
<script>
const data = {data};
const maxWeight = {max_weight};
const canvas = document.getElementById('graph');
const ctx = canvas.getContext('2d');
const tip = document.getElementById('tip');
let width, height, hover = null;

function resize() {{
  width = canvas.width = window.innerWidth * devicePixelRatio;
  height = canvas.height = (window.innerHeight - 54) * devicePixelRatio;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = (window.innerHeight - 54) + 'px';
}}
resize();
window.addEventListener('resize', resize);

const nodes = data.nodes.map((n, i) => {{
  const angle = (Math.PI * 2 * i) / data.nodes.length;
  const ring = Math.min(width, height) * (0.18 + (i % 7) * 0.035);
  return {{...n, x: width / 2 + Math.cos(angle) * ring, y: height / 2 + Math.sin(angle) * ring, vx: 0, vy: 0}};
}});
const byId = Object.fromEntries(nodes.map(n => [n.id, n]));
const edges = data.edges.map(e => ({{...e, source: byId[e.source], target: byId[e.target]}})).filter(e => e.source && e.target);

function radius(n) {{ return (5 + 17 * Math.sqrt(n.weight / maxWeight)) * devicePixelRatio; }}
function tick() {{
  for (const e of edges) {{
    const dx = e.target.x - e.source.x, dy = e.target.y - e.source.y;
    const dist = Math.max(1, Math.hypot(dx, dy));
    const force = (dist - 190 * devicePixelRatio) * 0.0009 * e.weight;
    const fx = dx / dist * force, fy = dy / dist * force;
    e.source.vx += fx; e.source.vy += fy; e.target.vx -= fx; e.target.vy -= fy;
  }}
  for (let i = 0; i < nodes.length; i++) {{
    for (let j = i + 1; j < nodes.length; j++) {{
      const a = nodes[i], b = nodes[j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist2 = Math.max(80, dx * dx + dy * dy);
      const force = 7500 * devicePixelRatio / dist2;
      a.vx -= dx * force; a.vy -= dy * force; b.vx += dx * force; b.vy += dy * force;
    }}
  }}
  for (const n of nodes) {{
    n.vx += (width / 2 - n.x) * 0.0009;
    n.vy += (height / 2 - n.y) * 0.0009;
    n.vx *= 0.88; n.vy *= 0.88;
    n.x = Math.max(radius(n), Math.min(width - radius(n), n.x + n.vx));
    n.y = Math.max(radius(n), Math.min(height - radius(n), n.y + n.vy));
  }}
}}
function draw() {{
  ctx.clearRect(0, 0, width, height);
  ctx.lineCap = 'round';
  for (const e of edges) {{
    ctx.strokeStyle = 'rgba(120, 184, 255, 0.16)';
    ctx.lineWidth = Math.min(5, 0.65 + e.weight * 0.35) * devicePixelRatio;
    ctx.beginPath(); ctx.moveTo(e.source.x, e.source.y); ctx.lineTo(e.target.x, e.target.y); ctx.stroke();
  }}
  for (const n of nodes) {{
    const r = radius(n);
    ctx.fillStyle = n === hover ? '#ffcf5a' : '#4bd6c8';
    ctx.beginPath(); ctx.arc(n.x, n.y, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#e8edf3';
    ctx.font = `${{Math.max(10, Math.min(15, 8 + r / devicePixelRatio * 0.35)) * devicePixelRatio}}px Arial`;
    ctx.fillText(n.label, n.x + r + 4 * devicePixelRatio, n.y + 4 * devicePixelRatio);
  }}
}}
function animate() {{ for (let i = 0; i < 3; i++) tick(); draw(); requestAnimationFrame(animate); }}
animate();
canvas.addEventListener('mousemove', event => {{
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * devicePixelRatio;
  const y = (event.clientY - rect.top) * devicePixelRatio;
  hover = nodes.find(n => Math.hypot(n.x - x, n.y - y) <= radius(n) + 4 * devicePixelRatio);
  if (hover) {{
    tip.style.display = 'block';
    tip.style.left = event.clientX + 14 + 'px';
    tip.style.top = event.clientY + 14 + 'px';
    tip.innerHTML = `<strong>${{hover.label}}</strong><br>Tan suat: ${{hover.weight}}<br>Trang: ${{hover.pages.slice(0, 18).join(', ')}}${{hover.pages.length > 18 ? '...' : ''}}`;
  }} else {{
    tip.style.display = 'none';
  }}
}});
</script>
</body>
</html>"""
    OUT_HTML.write_text(html_doc, encoding="utf-8")


def main() -> int:
    if not SOURCE.exists():
        raise SystemExit(f"Missing source file: {SOURCE}")
    pages = split_pages(SOURCE.read_text(encoding="utf-8"))
    nodes, edges = build_graph(pages)
    OUT_JSON.write_text(json.dumps({"nodes": nodes, "edges": edges}, ensure_ascii=False, indent=2), encoding="utf-8")
    write_csv(nodes, edges)
    write_html(nodes, edges)
    print(f"pages={len(pages)} nodes={len(nodes)} edges={len(edges)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
