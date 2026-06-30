# Claude Learning Web

Ứng dụng tĩnh để học 55 bài Claude từ ảnh OCR, có lộ trình theo vai trò, tiến độ local và bộ prompt để dùng với Codex / Antigravity / Claude.

## Chạy local

```powershell
.\start-local.ps1
```

Hoặc chạy thủ công:

```powershell
python -m http.server 8080 --bind 127.0.0.1
```

Mở:

```text
http://127.0.0.1:8080/claude-learning-web/
```

## Cách dùng

1. Chọn lộ trình học theo vai trò.
2. Chọn bài trong sơ đồ cây.
3. Copy prompt ở phần `AI Agent Toolkit` hoặc trong từng bài.
4. Dán prompt vào Codex, Antigravity, Claude hoặc ChatGPT.
5. Làm đầu ra, kiểm tra bằng rubric, rồi đánh dấu xong.

## Lưu ý an toàn

- Không đưa dữ liệu nhạy cảm, hồ sơ cá nhân, token, mật khẩu hoặc file nội bộ chưa ẩn danh vào AI.
- Khi dùng Agent chạy terminal, đọc kỹ lệnh xóa file, đổi quyền, reset database hoặc deploy.
- Với nội dung pháp lý/số liệu, xem AI là bản nháp và phải kiểm chứng bằng nguồn chính thức.
