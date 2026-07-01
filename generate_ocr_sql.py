import os
from pathlib import Path

TEXT_DIR = Path("ocr_text_pages")
OUT_SQL = Path("update_premium_lessons.sql")

def generate_sql():
    if not TEXT_DIR.exists():
        print("Directory ocr_text_pages does not exist!")
        return

    sql_statements = []
    
    # Header comment
    sql_statements.append("-- SQL SCRIPT: CẬP NHẬT NỘI DUNG OCR SẠCH CHO CÁC BÀI HỌC PREMIUM")
    sql_statements.append("-- Đường dẫn chạy: Chạy trực tiếp trong Supabase SQL Editor (https://supabase.com/dashboard/project/jnqmfghlnyvrlqiepfac/sql)")
    sql_statements.append("")
    
    # Ensure table structure exists
    sql_statements.append("""-- Tạo bảng premium_lessons nếu chưa có
CREATE TABLE IF NOT EXISTS public.premium_lessons (
    lesson_id TEXT PRIMARY KEY,
    ocr_content TEXT,
    bonus_agent_content TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);""")
    sql_statements.append("")

    for index in range(1, 56):
        lesson_id = f"{index:02}" # ID is "01", "02", etc. matching lesson.id in app.js
        file_path = TEXT_DIR / f"page_{index:03}.txt"
        
        if not file_path.exists():
            print(f"Skipping page {index} (file not found)")
            continue
            
        text = file_path.read_text(encoding="utf-8").strip()
        
        # Remove header marker if exists
        marker = f"--- Trang {index} ---"
        if text.startswith(marker):
            text = text[len(marker):].strip()
            
        # Escape single quotes for SQL
        escaped_text = text.replace("'", "''")
        
        statement = f"""INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('{lesson_id}', '{escaped_text}')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();"""
        sql_statements.append(statement)
        sql_statements.append("")

    OUT_SQL.write_text("\n".join(sql_statements), encoding="utf-8")
    print(f"Successfully generated {OUT_SQL} with 55 page updates!")

if __name__ == "__main__":
    generate_sql()
