from pathlib import Path
import json


TEXT_DIR = Path("ocr_text_pages")
OUT = Path("claude-learning-web/source-pages.js")


def main() -> int:
    pages = {}
    for index in range(1, 56):
        path = TEXT_DIR / f"page_{index:03}.txt"
        text = path.read_text(encoding="utf-8").strip()
        marker = f"--- Trang {index} ---"
        if text.startswith(marker):
            text = text[len(marker):].strip()
        pages[str(index)] = text

    OUT.write_text(
        "window.sourcePages = "
        + json.dumps(pages, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )
    print(f"wrote {OUT} with {len(pages)} pages")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
