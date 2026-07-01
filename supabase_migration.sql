-- MIGRATION SCRIPT: TẠO BẢNG ĐỒNG BỘ TIẾN ĐỘ HỌC TẬP & GHI CHÚ
-- Đường dẫn chạy: Chạy trực tiếp trong Supabase SQL Editor (https://supabase.com/dashboard/project/jnqmfghlnyvrlqiepfac/sql)

-- 1. Tạo bảng user_progress để lưu tiến độ và ghi chú
CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    notes TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, lesson_id)
);

-- 2. Kích hoạt Row Level Security (RLS) để bảo vệ dữ liệu người dùng
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- 3. Tạo các chính sách bảo mật (Policies)
-- Người dùng chỉ được xem dữ liệu của chính mình
CREATE POLICY "Cho phép người dùng xem ghi chép/tiến độ cá nhân" 
ON public.user_progress 
FOR SELECT 
USING (auth.uid() = user_id);

-- Người dùng chỉ được chèn mới ghi chép/tiến độ cá nhân
CREATE POLICY "Cho phép người dùng chèn mới ghi chép/tiến độ cá nhân" 
ON public.user_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Người dùng chỉ được sửa ghi chép/tiến độ cá nhân
CREATE POLICY "Cho phép người dùng cập nhật ghi chép/tiến độ cá nhân" 
ON public.user_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

-- Người dùng chỉ được xóa ghi chép/tiến độ cá nhân
CREATE POLICY "Cho phép người dùng xóa ghi chép/tiến độ cá nhân" 
ON public.user_progress 
FOR DELETE 
USING (auth.uid() = user_id);

-- 4. Thêm index để tối ưu hóa tốc độ truy vấn
CREATE INDEX IF NOT EXISTS idx_user_progress_user_lesson 
ON public.user_progress(user_id, lesson_id);

-- 5. Cấu hình quyền truy cập (Grants) cho role authenticated
GRANT ALL ON public.user_progress TO authenticated;
