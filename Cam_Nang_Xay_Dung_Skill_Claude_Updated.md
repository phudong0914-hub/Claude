# Cẩm nang đầy đủ xây dựng Skill cho Claude (Bản Cập Nhật & Bổ Sung 2026)
*Phiên bản tiếng Việt · Biên dịch, Việt hóa & Cập nhật kỹ thuật  Trợ lý AI*

---

## Giới thiệu & Điểm cập nhật mới
Một **Skill** (Kỹ năng) là một tập hợp hướng dẫn được đóng gói dưới dạng một thư mục đơn giản chứa file `SKILL.md` (và các script/tài liệu đi kèm) nhằm hướng dẫn Claude cách xử lý các tác vụ hoặc quy trình cụ thể một cách nhất quán.

> [!IMPORTANT]
> **Cập nhật kỹ thuật (Tháng 6/2026):** 
> Kể từ phiên bản mới nhất của **Claude Code** và **Claude Agent SDK**, đặc tả của Agent Skills đã hỗ trợ thêm các tính năng điều phối nâng cao bao gồm:
> 1. **Chế độ Fork Context (`context: fork`):** Cho phép chạy skill trong một subagent cô lập để bảo vệ token và dung lượng bộ nhớ của cửa sổ chat chính.
> 2. **Kiểm soát kích hoạt nâng cao (`disable-model-invocation`, `user-invocable`):** Tránh lãng phí tài nguyên và kiểm soát việc gọi skill tự động hoặc thủ công bằng lệnh `/`.
> 3. **Cú pháp `allowed-tools` chuẩn hóa:** Sửa lỗi cú pháp phân tách bằng khoảng trắng sang phân tách bằng dấu phẩy (comma-separated list) hoặc danh sách mảng YAML để hệ thống phân quyền của Claude Code không bị lỗi parse.

---

## Mục lục
1. [Nền tảng & Nguyên tắc Thiết kế](#chương-1-nền-tảng)
2. [Lên kế hoạch và thiết kế (Cập nhật YAML Frontmatter)](#chương-2-lên-kế-hoạch-và-thiết-kế)
3. [Kiểm thử và cải tiến](#chương-3-kiểm-thử-và-cải-tiến)
4. [Phân phối, tích hợp & CLI Commands](#chương-4-phân-phối-và-chia-sẻ)
5. [Các mẫu thiết kế và xử lý sự cố](#chương-5-các-mẫu-thiết- kế-và-xử-lý-sự-cố)
6. [Tài nguyên tham khảo & Phụ lục YAML chuẩn](#phụ-lục-b-yaml-frontmatter)

---

## Chương 1: Nền tảng
### Cấu trúc một Skill
Một thư mục skill có thể chứa các thành phần sau:
* `SKILL.md` (Bắt buộc): File chứa YAML frontmatter và hướng dẫn bằng Markdown.
* `scripts/` (Tùy chọn): Mã nguồn thực thi (Python, Bash, Node.js...) giúp thực hiện các logic tự động hóa hoặc kiểm thử.
* `references/` (Tùy chọn): Tài liệu chuyên ngành, API guide được nạp bổ sung khi cần.
* `assets/` (Tùy chọn): Các template báo cáo, font, hình ảnh hoặc tài sản tĩnh.

### Nguyên tắc Progressive Disclosure (Tiết lộ tuần tự)
Skill sử dụng hệ thống 3 cấp để tối ưu dung lượng context window:
1. **Cấp 1 (YAML Frontmatter):** Luôn được nạp vào system prompt ban đầu. Claude chỉ đọc `name` và `description` để quyết định khi nào nên gọi skill.
2. **Cấp 2 (Thân `SKILL.md`):** Chỉ được nạp hoàn toàn vào context khi Claude kích hoạt skill đó.
3. **Cấp 3 (Các file liên kết trong `references/`):** Chỉ được Claude đọc khi có chỉ thị cụ thể hoặc khi logic của bước yêu cầu khám phá thêm.

---

## Chương 2: Lên kế hoạch và thiết kế

### Thiết kế YAML Frontmatter (Cập nhật 2026)
YAML Frontmatter đặt ở đầu file `SKILL.md`, kẹp giữa cặp ký tự `---`. 

#### 1. Các trường bắt buộc
* **`name`**: Định dạng `kebab-case` (ví dụ: `notion-project-setup`). Phải trùng khớp với tên thư mục chứa skill. Không được chứa chữ hoa, khoảng trắng hay tiền tố dành riêng như `claude` hoặc `anthropic`.
* **`description`**: Mô tả ngắn gọn (tối đa 1024 ký tự) giải thích skill làm gì và **khi nào sử dụng** (trigger conditions). Phải bao gồm các từ khóa/cụm từ mà người dùng có khả năng gõ (ví dụ: *"Use when the user asks to plan a sprint or create Linear tasks"*).

#### 2. Các trường kiểm soát quyền và hành vi (Mới bổ sung)
* **`allowed-tools`**: Danh sách các công cụ mà skill này được phép sử dụng mà không cần nhắc hỏi người dùng phê duyệt liên tục (ví dụ: `[Read, Grep, Bash]`).
  > [!WARNING]
  > **Sửa lỗi cú pháp:** Không dùng khoảng trắng để phân tách các công cụ như `"Bash(python:*) Bash(npm:*)"`. Hãy dùng dấu phẩy hoặc danh sách YAML chuẩn:
  > ```yaml
  > allowed-tools:
  >   - "Bash(python:*)"
  >   - "Bash(npm:*)"
  >   - "WebFetch"
  > ```
* **`disable-model-invocation`**: (Boolean) Nếu đặt là `true`, Claude sẽ **không bao giờ tự động kích hoạt** skill này dựa trên description. Người dùng bắt buộc phải gọi thủ công qua slash command (ví dụ: `/notion-project-setup`). Rất hữu ích cho các tác vụ nguy hiểm hoặc tốn tài nguyên.
* **`user-invocable`**: (Boolean) Nếu đặt là `false`, skill này sẽ ẩn đi trong menu gợi ý của người dùng và chỉ được Claude tự động kích hoạt ngầm khi cần thiết.
* **`argument-hint`**: (String) Gợi ý đối số hiển thị cho người dùng khi họ gõ lệnh thủ công (ví dụ: `"[project_id] [sprint_number]"`).
* **`context`**: Nếu đặt là `"fork"`, Claude sẽ khởi chạy skill này trong một **Subagent** độc lập. Toàn bộ tiến trình chạy thử, sinh code, chạy terminal phụ sẽ diễn ra trong subagent đó, giúp cửa sổ chat chính luôn gọn gàng và không bị tràn context.
* **`agent`**: Chỉ định loại agent/profile của subagent khi dùng chế độ `context: fork`.

---

## Chương 3: Kiểm thử và cải tiến
Quy trình kiểm thử chất lượng bao gồm:
1. **Kiểm thử kích hoạt (Triggering):** Đảm bảo Claude tự động nạp skill khi có yêu cầu liên quan và **không** tự nạp sai ngữ cảnh (Overtriggering).
2. **Kiểm thử chức năng (Functional):** Đảm bảo các script chạy chính xác, công cụ MCP được gọi đúng thứ tự, và kết quả đầu ra đạt tiêu chuẩn chất lượng.
3. **So sánh hiệu năng:** Đo lường tổng số token tiêu thụ và số lượt gọi công cụ khi bật và tắt skill.

---

## Chương 4: Phân phối và chia sẻ

### Tích hợp Skill vào Claude Code
Để cài đặt và sử dụng skill cục bộ trên máy tính của bạn:
1. **Thư mục cài đặt:** Đặt thư mục chứa skill vào đường dẫn `.claude/skills/` trong project hoặc thư mục cấu hình toàn cục của Claude Code.
2. **Quản lý quyền bằng CLI:** Bạn có thể chạy lệnh `/permissions` trong Claude Code để quản lý quyền chạy tool của các skill, hoặc chạy:
   ```bash
   claude --allowedTools "Bash(npm test),Read" -p "run target skill"
   ```
3. **Phân phối qua GitHub:** 
   * Host thư mục skill trên repo công khai.
   * Viết file `README.md` ở cấp gốc của repo để hướng dẫn người dùng cách tải và cài đặt (lưu ý: không đặt `README.md` bên trong thư mục skill để tránh xung đột với `SKILL.md`).

---

## Chương 5: Các mẫu thiết kế và xử lý sự cố

### 5 Mẫu thiết kế phổ biến (Design Patterns)
1. **Điều phối tuần tự (Sequential Workflow):** Khai báo các bước rõ ràng từ Step 1 đến Step N, quy định rõ output của bước trước là input của bước sau.
2. **Phối hợp đa MCP (Multi-MCP Coordination):** Lấy dữ liệu từ MCP này (ví dụ: Figma) và chuyển tiếp xử lý sang MCP khác (ví dụ: Linear, Slack).
3. **Vòng lặp tinh chỉnh (Iterative Refinement):** Cho phép chạy một script kiểm tra chất lượng đầu ra, nếu lỗi thì quay lại bước chỉnh sửa cho đến khi đạt tiêu chuẩn.
4. **Quyết định theo ngữ cảnh (Contextual Tool Selection):** Dựa trên định dạng file hoặc dung lượng để chọn công cụ lưu trữ/xử lý phù hợp.
5. **Trí tuệ chuyên môn (Domain Intelligence):** Nhúng trực tiếp các checklist tuân thủ pháp lý, quy tắc an toàn hoặc style guide vào hướng dẫn để Claude tự kiểm soát hành vi.

### Xử lý sự cố thường gặp
* **Lỗi `Could not find SKILL.md`:** Hãy đảm bảo viết đúng hoa thường tên file là `SKILL.md`.
* **Lỗi parser YAML:** Đảm bảo sử dụng dấu nháy đôi cho các chuỗi có chứa ký tự đặc biệt hoặc dấu hai chấm (`:`).
* **Skill kích hoạt quá mức (Overtriggering):** Thêm phần loại trừ vào description (ví dụ: *"Do NOT use for general queries..."*) hoặc cấu hình `disable-model-invocation: true` để chuyển sang chế độ gọi thủ công.

---

## Phụ lục B: YAML frontmatter chuẩn hóa 2026
Dưới đây là một template YAML frontmatter đầy đủ chứa tất cả các tham số mới nhất:

```yaml
---
name: backend-validator
description: Validates backend API endpoint structures and configurations. Use when testing routes, inspecting payload formats, or running diagnostic checks on endpoints.
license: MIT
allowed-tools:
  - "Bash(npm run test:api)"
  - "Read"
  - "Grep"
disable-model-invocation: false
user-invocable: true
argument-hint: "[endpoint_path] [env]"
context: fork
agent: backend-engineer-subagent
metadata:
  author: "Alpha AI Development Team"
  version: "1.2.0"
  mcp-server: "api-broker"
  category: "development-tools"
  tags: [api, validation, testing]
  documentation: "https://github.com/your-org/backend-validator/docs"
  support: "dev-support@yourcompany.com"
---
```
