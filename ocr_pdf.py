from pathlib import Path
import subprocess
import sys

import fitz


PDF_PATH = Path("Sách Claude Toàn tập.pdf.pdf")
OUT_DIR = Path("ocr_pages")
TEXT_DIR = Path("ocr_text_pages")
OUT_TEXT = Path("Sách Claude Toàn tập OCR.txt")
TESSERACT = Path(r"C:\Program Files\Tesseract-OCR\tesseract.exe")
TESSDATA = Path("tessdata")


def main() -> int:
    if not PDF_PATH.exists():
        print(f"Missing PDF: {PDF_PATH}", file=sys.stderr)
        return 1
    if not TESSERACT.exists():
        print(f"Missing Tesseract: {TESSERACT}", file=sys.stderr)
        return 1

    OUT_DIR.mkdir(exist_ok=True)
    TEXT_DIR.mkdir(exist_ok=True)
    doc = fitz.open(PDF_PATH)

    for index, page in enumerate(doc, start=1):
        image_path = OUT_DIR / f"page_{index:03}.png"
        page_text_path = TEXT_DIR / f"page_{index:03}.txt"
        if page_text_path.exists() and page_text_path.stat().st_size > 0:
            print(f"Skip page {index}/{len(doc)}", flush=True)
            continue

        if not image_path.exists():
            pix = page.get_pixmap(matrix=fitz.Matrix(2.5, 2.5), alpha=False)
            pix.save(image_path)

        print(f"OCR page {index}/{len(doc)}", flush=True)
        result = subprocess.run(
            [
                str(TESSERACT),
                str(image_path),
                "stdout",
                "--tessdata-dir",
                str(TESSDATA),
                "-l",
                "vie+eng",
                "--psm",
                "6",
            ],
            check=False,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            encoding="utf-8",
            errors="replace",
        )
        if result.returncode != 0:
            text = f"--- Trang {index} ---\n[OCR lỗi]\n{result.stderr.strip()}\n"
            page_text_path.write_text(text, encoding="utf-8")
            continue
        text = f"--- Trang {index} ---\n{result.stdout.strip()}\n"
        page_text_path.write_text(text, encoding="utf-8")

    chunks = [
        (TEXT_DIR / f"page_{index:03}.txt").read_text(encoding="utf-8")
        for index in range(1, len(doc) + 1)
        if (TEXT_DIR / f"page_{index:03}.txt").exists()
    ]
    OUT_TEXT.write_text("\n\n".join(chunks), encoding="utf-8")
    print(f"Wrote OCR text ({OUT_TEXT.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
