from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent
APP = ROOT / "claude-learning-web" / "app.js"
OUT = ROOT / "notebooklm-video-prompts-55-bai.md"


TYPE_FOCUS = {
    "overview": "định hướng tổng quan, bản đồ năng lực, cách học và cách ứng dụng vào công việc thật",
    "concept": "giải thích khái niệm, giới hạn sử dụng, ví dụ đúng/sai và nguyên tắc an toàn",
    "tool": "thao tác giao diện/công cụ, quy trình sử dụng, lỗi thường gặp và mẹo tối ưu",
    "prompt": "cấu trúc prompt, cách đặt bối cảnh, ràng buộc đầu ra và vòng lặp cải thiện kết quả",
    "task": "chuyển bài học thành một tác vụ văn phòng cụ thể, có đầu vào, đầu ra và tiêu chí nghiệm thu",
    "analysis": "phân tích dữ liệu/thông tin, tách dữ kiện với giả định, rút insight và khuyến nghị hành động",
    "writing": "dàn ý, giọng văn, cấu trúc lập luận, chỉnh sửa và hoàn thiện nội dung chuyên nghiệp",
    "creative": "mở rộng ý tưởng, nhóm phương án, chấm điểm tác động/độ khó và chọn hướng thử nghiệm",
    "workflow": "thiết kế SOP, owner, bước xử lý, điều kiện dừng, rủi ro và KPI vận hành",
    "business": "ứng dụng vào marketing, CRM, dự án, vận hành, chỉ số kinh doanh và trải nghiệm khách hàng",
    "code": "làm việc với codebase, phạm vi thay đổi nhỏ, test, bảo mật, hiệu năng và triển khai",
    "plan": "lập lộ trình, mốc hoàn thành, ưu tiên, phụ thuộc và kế hoạch hành động",
}

VISUAL_STYLE = {
    "overview": "poster mở đầu cao cấp, bản đồ khóa học dạng dashboard, neon xanh-cam trên nền tối, có số thứ tự bài rõ ràng",
    "concept": "infographic giải thích khái niệm, biểu tượng đơn giản, tương phản cao, bố cục 3 tầng: khái niệm - ví dụ - ứng dụng",
    "tool": "ảnh giao diện sản phẩm, callout rõ khu vực thao tác, phong cách tech clean, không rối chữ",
    "prompt": "canvas prompt engineering, khối vai trò/bối cảnh/dữ liệu/đầu ra, ký hiệu mũi tên và checklist",
    "task": "workflow văn phòng thực tế, tài liệu, email, slide, bảng việc, icon chuyên nghiệp, ánh sáng cyan",
    "analysis": "dashboard dữ liệu, chart, insight cards, bảng phân tích, điểm nhấn số liệu và khuyến nghị",
    "writing": "bàn làm việc nội dung, outline, bản nháp, biên tập, tone chuyên nghiệp, màu xanh đậm và vàng nhấn",
    "creative": "mindmap ý tưởng, nhiều nhánh lựa chọn, thẻ chấm điểm, hiệu ứng năng lượng sáng tạo",
    "workflow": "sơ đồ quy trình 5 bước, owner, deadline, kiểm duyệt, KPI, phong cách operation dashboard",
    "business": "bảng chiến lược kinh doanh, marketing/CRM/project cards, KPI và customer journey",
    "code": "terminal/IDE hiện đại, code panels, API/database/test badges, robot kỹ sư AI, neon xanh-tím",
    "plan": "timeline học tập, milestones, checklist, calendar và progress bar cao cấp",
}


def parse_modules():
    lines = APP.read_text(encoding="utf-8").splitlines()
    modules = []
    lesson_pattern = re.compile(
        r'\["(?P<id>\d+)",\s*(?P<page>\d+),\s*"(?P<title>[^"]+)",\s*"(?P<type>[^"]+)",\s*"(?P<summary>[^"]+)"\]'
    )
    current = None
    in_modules = False
    in_lessons = False

    for line in lines:
        stripped = line.strip()
        if stripped == "const modules = [":
            in_modules = True
            continue
        if in_modules and stripped == "];":
            if current:
                modules.append(current)
            break
        if not in_modules:
            continue

        if stripped == "{":
            current = {"id": "", "title": "", "range": "", "lessons": []}
            in_lessons = False
            continue
        if current and stripped.startswith("id: "):
            current["id"] = stripped.split('"')[1]
            continue
        if current and stripped.startswith("title: "):
            current["title"] = stripped.split('"')[1]
            continue
        if current and stripped.startswith("range: "):
            current["range"] = stripped.split('"')[1]
            continue
        if current and stripped.startswith("lessons: ["):
            in_lessons = True
            continue
        if current and in_lessons and stripped == "],":
            in_lessons = False
            continue
        if current and stripped == "},":
            if current["lessons"]:
                modules.append(current)
            current = None
            in_lessons = False
            continue
        if current and in_lessons:
            lesson = lesson_pattern.search(stripped)
            if lesson:
                current["lessons"].append(
                    {
                        "id": lesson.group("id"),
                        "page": int(lesson.group("page")),
                        "title": lesson.group("title"),
                        "type": lesson.group("type"),
                        "summary": lesson.group("summary"),
                    }
                )

    total = sum(len(module["lessons"]) for module in modules)
    if total != 55:
        raise RuntimeError(f"Expected 55 lessons, got {total}")
    return modules


def main():
    modules = parse_modules()
    lines = [
        "# NotebookLM Video Production Pack - Claude Mastery 55 bài",
        "",
        "Tài liệu này dùng làm nguồn chính trong NotebookLM để tạo chuỗi video/audio cho toàn bộ khóa học 55 bài. Mục tiêu là giữ mạch xuyên suốt như một khóa học chuyên nghiệp: mỗi bài có vai trò riêng, nhưng tất cả cùng dẫn người học từ nền tảng Claude đến Co-work và Claude Code.",
        "",
        "## Cách dùng trong NotebookLM",
        "",
        "1. Upload file Markdown này vào NotebookLM như một nguồn tài nguyên.",
        "2. Upload thêm ảnh `page_001.png` đến `page_055.png` nếu muốn NotebookLM bám sát hình gốc từng bài.",
        "3. Khi tạo từng video, copy prompt của bài tương ứng trong tài liệu này.",
        "4. Giữ cùng giọng dẫn, cùng cấu trúc và cùng tiêu chuẩn kiểm chứng để toàn khóa học liền mạch.",
        "5. Với dữ liệu pháp lý, số liệu, hồ sơ hoặc tài liệu nội bộ: yêu cầu NotebookLM nhắc người học kiểm chứng trước khi dùng thật.",
        "",
        "## Prompt tổng đạo diễn cho toàn khóa",
        "",
        "```text",
        'Bạn là đạo diễn nội dung, instructional designer và AI narrator cho khóa học "Claude Mastery - 55 bài ứng dụng thực chiến".',
        "Hãy tạo video/audio theo phong cách cao cấp, thực tế, không lan man. Mỗi bài phải có: hook mở đầu, mục tiêu học, giải thích trọng tâm, ví dụ ứng dụng cho hành chính nhà nước / dân văn phòng / lãnh đạo SME AI-first, bài tập thực hành, checklist nghiệm thu và cầu nối sang bài kế tiếp.",
        "Giọng đọc: chuyên nghiệp, rõ ràng, có năng lượng, phù hợp người đi làm. Không thổi phồng AI. Luôn nhắc nguyên tắc: AI tạo bản nháp, con người kiểm chứng và chịu trách nhiệm cuối cùng.",
        "Phong cách hình ảnh chung: công nghệ hiện đại, neon xanh-cyan/cam/vàng, bố cục infographic rõ ràng, icon trực quan, chữ lớn dễ đọc, có số bài, có module, có ví dụ thực tế.",
        "```",
        "",
    ]

    for module_index, module in enumerate(modules, start=1):
        lines.extend(
            [
                f'## Module {module_index}: {module["title"]} ({module["range"]})',
                "",
                "**Mạch module:** "
                + ", ".join(f'{lesson["id"]}. {lesson["title"]}' for lesson in module["lessons"])
                + ".",
                "",
                "### Prompt tạo video tổng quan module",
                "",
                "```text",
                f'Hãy tạo một video/audio tổng quan cho Module {module_index}: "{module["title"]}" trong khóa Claude Mastery.',
                f'Phạm vi bài: {module["range"]}.',
                "Mục tiêu: giúp người học hiểu vì sao module này quan trọng, các bài trong module liên kết với nhau thế nào, và sau module người học làm được gì trong công việc thật.",
                "Cấu trúc đầu ra:",
                "1. Hook 20 giây mở đầu.",
                "2. Bản đồ các bài trong module.",
                "3. 3 năng lực chính người học sẽ đạt được.",
                "4. Ví dụ ứng dụng cho hành chính nhà nước, dân văn phòng, lãnh đạo SME AI-first.",
                "5. Checklist hoàn thành module.",
                "6. Cầu nối sang module kế tiếp.",
                "Phong cách hình ảnh: dashboard module cao cấp, timeline bài học, icon theo từng bài, tone neon công nghệ, chữ lớn dễ đọc.",
                "```",
                "",
            ]
        )

        for lesson in module["lessons"]:
            focus = TYPE_FOCUS.get(lesson["type"], "ứng dụng thực tế, kiểm chứng đầu ra và chuyển thành bài tập làm được ngay")
            style = VISUAL_STYLE.get(lesson["type"], "infographic công nghệ cao, rõ ràng, có icon và checklist")
            lines.extend(
                [
                    f'### Bài {lesson["id"]}: {lesson["title"]}',
                    "",
                    f'- **Module:** {module["title"]}',
                    f'- **Trang ảnh:** `page_{lesson["page"]:03}.png`',
                    f'- **Mục tiêu bài:** {lesson["summary"]}',
                    f"- **Trọng tâm AI narrator/server:** {focus}.",
                    f"- **Phong cách ảnh/video tùy chỉnh:** {style}.",
                    "",
                    "```text",
                    f'Hãy tạo kịch bản video/audio chuyên nghiệp cho Bài {lesson["id"]}: "{lesson["title"]}" trong khóa Claude Mastery.',
                    f'Module: {module["title"]}.',
                    f'Ảnh nguồn cần bám: page_{lesson["page"]:03}.png.',
                    f'Mục tiêu bài: {lesson["summary"]}',
                    "",
                    "Yêu cầu nội dung:",
                    "1. Mở đầu bằng một tình huống thật trong công việc để người học thấy bài này cần thiết.",
                    "2. Giải thích trọng tâm bài bằng ngôn ngữ dễ hiểu, không dùng thuật ngữ mơ hồ.",
                    "3. Tạo 3 nhánh ứng dụng:",
                    "   - Hành chính nhà nước: văn bản, hồ sơ, báo cáo, họp, quy trình, kiểm chứng căn cứ.",
                    "   - Dân văn phòng: email, họp, tài liệu, CRM, marketing, dữ liệu, quản lý việc.",
                    "   - Lãnh đạo SME AI-first: workflow, owner, KPI, chi phí, rủi ro, pilot 7-14 ngày.",
                    "4. Đưa một prompt mẫu để người học copy dùng ngay.",
                    "5. Đưa một bài tập thực hành có đầu vào, đầu ra và tiêu chí nghiệm thu.",
                    "6. Nêu lỗi thường gặp khi áp dụng bài này và cách tránh.",
                    "7. Kết thúc bằng cầu nối sang bài tiếp theo, giữ cảm giác đây là một khóa học liên tục.",
                    "",
                    "Yêu cầu hình ảnh/video:",
                    f"- Phong cách chính: {style}",
                    "- Tạo 3-5 cảnh: hook, khái niệm/trọng tâm, quy trình áp dụng, ví dụ thực tế, checklist cuối bài.",
                    "- Mỗi cảnh có chữ ngắn, rõ, không nhồi quá nhiều văn bản.",
                    "- Dùng màu chủ đạo xanh-cyan/cam/vàng, cảm giác hiện đại, cao cấp, thực chiến.",
                    "",
                    "Trọng tâm AI narrator/server:",
                    f"- Tập trung vào: {focus}",
                    "- Không bịa nguồn pháp lý, số liệu hoặc tên công cụ nếu tài liệu không cung cấp.",
                    "- Luôn nhấn mạnh: người học phải kiểm chứng dữ liệu nhạy cảm, số liệu, căn cứ pháp lý và quyết định cuối cùng.",
                    "",
                    "Định dạng đầu ra mong muốn:",
                    "- Tiêu đề video.",
                    "- Mô tả video 2-3 câu.",
                    "- Script voice-over theo từng cảnh.",
                    "- Shot list hình ảnh.",
                    "- Prompt ảnh/video cho từng cảnh.",
                    "- Bài tập thực hành.",
                    "- Checklist nghiệm thu.",
                    "```",
                    "",
                ]
            )

    OUT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
