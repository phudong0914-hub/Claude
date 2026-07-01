-- SQL SCRIPT: CẬP NHẬT NỘI DUNG OCR SẠCH CHO CÁC BÀI HỌC PREMIUM
-- Đường dẫn chạy: Chạy trực tiếp trong Supabase SQL Editor (https://supabase.com/dashboard/project/jnqmfghlnyvrlqiepfac/sql)

-- Tạo bảng premium_lessons nếu chưa có
CREATE TABLE IF NOT EXISTS public.premium_lessons (
    lesson_id TEXT PRIMARY KEY,
    ocr_content TEXT,
    bonus_agent_content TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('01', 'TỰ HỌC CLAUDE A-Z TRONG 50 POSTER
Học Claude toàn diện – Ứng dụng thực tế – Hiệu quả vượt trội

PHÂN BỔ NỘI DUNG:
- 30 POSTER CLAUDE: Trực chiến toàn năng các khía cạnh và tính năng Claude.
- 10 POSTER COWORK: Phối hợp hiệu quả, tăng năng suất vượt trội.
- 10 POSTER CODE: Trực chiến cùng Claude, tối ưu và ứng dụng thực tế.

TIÊU CHÍ THIẾT KẾ:
- DỄ HIỂU: Cô đọng & súc tích, dễ tiếp cận.
- THỰC HÀNH: Ví dụ thực tế, dễ áp dụng.
- ỨNG DỤNG NGAY: Áp dụng vào công việc và cuộc sống.
- TIẾN BỘ TỐI ĐA: Nâng cao kỹ năng, nâng cấp tư duy.

VIBE CODING MODE:
> LEARN.CLAUDE();
> APPLY.KNOWLEDGE();
> BUILD.PROJECT();
> GROW.EVERYDAY();
> LEVEL.UP();
// YOU CAN DO IT!

CAM KẾT LỘ TRÌNH:
- Từ cơ bản → nâng cao
- Từ lý thuyết → dễ áp dụng
- Hướng dẫn chi tiết, từng bước
- Bài tập thực hành phong phú
- Tối ưu hiệu quả công việc & học tập

TỔNG KẾT:
50 POSTER - KIẾN THỨC TINH GỌN - ỨNG DỤNG TỐI ĐA
// VIBE CODING // BUILD FUTURE')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('02', 'TỰ HỌC CLAUDE A-Z TRONG 50 POSTER
Học Claude toàn diện – Ứng dụng thực tế – Hiệu quả vượt trội

PHÂN BỔ NỘI DUNG:
- 30 POSTER CLAUDE:
  - Hiểu và làm chủ Claude từ cơ bản đến nâng cao
  - Nhiều ví dụ thực tế, dễ áp dụng
  - Tối ưu hiệu quả công việc và học tập
- 10 POSTER COWORK:
  - Phối hợp hiệu quả với Claude
  - Xây dựng quy trình làm việc thông minh
  - Tăng năng suất vượt trội
- 10 POSTER CODE:
  - Viết code cùng Claude
  - Tối ưu, kiểm tra và refactor code
  - Ứng dụng thực tế cho developer

TIÊU CHÍ THIẾT KẾ:
- DỄ HIỂU: Cô đọng & súc tích, dễ tiếp cận
- THỰC HÀNH: Ví dụ thực tế, dễ áp dụng
- ỨNG DỤNG NGAY: Áp dụng vào công việc & cuộc sống
- TIẾT KIỆM THỜI GIAN: Học nhanh, hiểu sâu, không dài dòng

GHI CHÚ:
"Làm chủ AI không khó. Điều quan trọng là bắt đầu đúng cách!"

TÀI NGUYÊN HỮU ÍCH:
- Khóa học & Webinar miễn phí
- Tài liệu & Template độc quyền
- Cộng đồng hỗ trợ 24/7
- Ưu đãi đặc biệt cho học viên

VÌ SAO NÊN CHỌN BỘ 50 POSTER?
- Từ cơ bản → nâng cao
- Từ lý thuyết → dễ áp dụng
- Hướng dẫn chi tiết, từng bước
- Bài tập thực hành phong phú
- Tối ưu hiệu quả công việc & học tập

TỔNG KẾT:
GIÁ TRỊ THỰC - CHI PHÍ HỢP LÝ: 199.000đ (Đầu tư một lần – Giá trị trọn đời!)
Cám ơn bạn đã tin tưởng và lựa chọn Alpha Ai của Trungvt!')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('03', 'KHÓA HỌC CLAUDE TỪ A-Z: LỘ TRÌNH HỌC MỖI NGÀY 1 POSTER

TIẾN ĐỘ THỰC TẾ:
- ĐÁ CÓ: 3 BUỔI – 3 POSTER
  - Poster 1: Giới thiệu về Claude
  - Poster 2: Ứng dụng chính của Claude
  - Poster 3: Các thành tố trong ứng dụng Claude

GỢI Ý LỘ TRÌNH:
- Tổng số buổi học (poster): 30 buổi
- Đã có: 3 buổi
- Cần thêm: 27 buổi – 27 poster nữa
- TỔNG CỘNG: 30 BUỔI – 30 POSTER

OUTLINE 30 BUỔI (MỖI NGÀY 1 POSTER):
- GIAI ĐOẠN 1: LÀM QUEN & NỀN TẢNG
  - 01. Giới thiệu về Claude (Đã có)
  - 02. Ứng dụng chính của Claude (Đã có)
  - 03. Các thành tố trong ứng dụng Claude (Đã có)
  - 04. Đăng ký & đăng nhập Claude
  - 05. Giao diện tổng quan
  - 06. Cài đặt & tùy chỉnh cá nhân
  - 07. Các mô hình Claude & cách chọn
  - 08. Hiểu cách Claude hoạt động
  - 09. Viết prompt hiệu quả – Nguyên tắc cơ bản
  - 10. Các loại prompt thường dùng
- GIAI ĐOẠN 2: KỸ NĂNG SỬ DỤNG CƠ BẢN
  - 11. Hỏi đáp & tìm kiếm thông tin
  - 12. Tóm tắt văn bản nhanh chóng
  - 13. Giải thích kiến thức & học tập
  - 14. Dịch thuật đa ngôn ngữ
  - 15. Viết lại & cải thiện nội dung
  - 16. Brainstorming / ý tưởng sáng tạo
  - 17. Lập dàn ý & cấu trúc nội dung
  - 18. Viết email chuyên nghiệp
  - 19. Viết bài blog/bài viết chuẩn SEO
  - 20. Kiểm tra & sửa lỗi văn bản
- GIAI ĐOẠN 3: NÂNG CAO NĂNG SUẤT
  - 21. Phân tích & trích xuất dữ liệu
  - 22. Tạo bảng biểu & báo cáo
  - 23. Hỗ trợ Excel & công thức
  - 24. Tạo kế hoạch & quản lý công việc
  - 25. Viết tài liệu nghiên cứu
  - 26. Phân tích tài liệu & báo cáo dài
  - 27. Tạo slide & nội dung thuyết trình
  - 28. Tư duy phản biện & phản hồi
  - 29. Kết hợp Claude với các công cụ khác
  - 30. Tổng kết: Làm chủ Claude từ A-Z

TIÊU CHÍ HỌC TẬP:
- DỄ HIỂU: Cô đọng & súc tích, dễ tiếp cận
- THỰC HÀNH: Ví dụ thực tế, dễ áp dụng
- ỨNG DỤNG NGAY: Áp dụng vào công việc & cuộc sống
- TIẾT KIỆM THỜI GIAN: Học nhanh, hiểu sâu, không dài dòng

GHI CHÚ:
"Làm chủ AI không khó. Điều quan trọng là bắt đầu đúng cách!"

KẾT QUẢ SAU 30 NGÀY:
- Hiểu & sử dụng thành thạo Claude trong công việc và học tập
- Tối ưu thời gian, tăng năng suất vượt trội
- Tự tin ứng dụng Claude cho nhiều lĩnh vực khác nhau
- Xây dựng quy trình làm việc thông minh với AI

HÌNH THỨC KHÓA HỌC:
- Mỗi ngày 1 poster – ngắn gọn, dễ hiểu, dễ áp dụng
- Video thực tế – Minh họa rõ ràng
- Bài tập thực hành – Ứng dụng ngay
- Lộ trình logic – Từ cơ bản đến nâng cao')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('04', 'EE N ota E › N )
3 | | GIỚI THIỆU z t N
⁄⁄Z Tro ly Al thông minh từ Anthropic ⁄⁄Z .
Claude là mô hình AI tiên tiến được phát triển Ba || |
bởi Anthropic, giúp ban hiếu, suy luận va hỗ : 0.0
trợ trong moi tac vu với su an toan, minh bach : ee 4
va hiéu qua tdi da. ee a
i = NHỮNG DIEM NOI BAT -—— =A |
(--) í . \I /` cỔ | g |
v / , Sy, \ Ể
N : N / \ — ⁄ |
HIEU VA TRA LO! XỬ LY VAN BAN SUY LUAN VA ! AN TOÀN
| TU NHIEN | HIEU QUA GIAI QUYET VAN ĐỀ | VA DANG TIN CAY
|
| Trò chuyén mượt ma, Tom tat, viết nội dung, Hỗtrợtưduylogic, - Được thiết kế để
thấu hiếu ngữ cảnh và phan tich va giải thích dua ra ý tưởng sang tao uu tién su an toàn,
tra lời chính xác. rõ ràng. và phân tích sâu. minh bach va tôn trong |
S người dùng.
⁄ CLAUDE CO THE GIUP Gi CHO BAN? -—— —
ofl
VIET LACH Hoc TAP CONG VIỆC LAP TRINH NHIEU NGON NGỮ
TROI CHAY
Hỗtrợviếtbài,emai, Giải thich kiến thức, Tóm tắt báo cáo, Hỗ trợ viét code, Hỗ trợ đa ngôn ngữ,
kịchbản,nộidung  làmbàitập,nghiêncứu  phân tích dir liệu, giải lỗi, tối uu va hiểu và giao tiếp
| sang tao. vahoc moi linh vuc. . lập ké hoạch va quan ly giải thích code tláu toàn cau.
ự : dự án. dễ hiếu.
© 3 Claude - Al thấu hiểu, an toàn va đồng hành cùng bạn. - Ò')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('05', '- GIỚI THIỆU VỀ n n ze
| : \
=-. Trợ ly Al thông minh từ Anthropic -— yy |
me a ⁄ 2
Claude là mô hình AI tiên tiến được phát triển i Í
bởi Anthropic, giúp bạn hiểu, suy luận và hỗ ; \\ =
trợ trong mọi tác vụ với sự an toàn, minh bạch l a \ \ é
va hiệu qua tdi da. SS ae, :
» ¬ --=204É
e ee Ẻ al
| ole = a ae iy
gSgimi m a
| AN TOAN CONG BANG MINH BACH BAO MAT 5 - aug J
Thiết kế để ưu tiên Giám thiểu thiên vi, Giải thích rõ rang, Dir liệu được bao vé NK V4 r ¬ /
Koes ''& mình bach bao vệ người ding dé hiểu và mã hóa — / O =
aa —z CLAUDE CÚ THỂ GIÚP BAN xxw`———
(>) LVIẾT & SOAN THẢO `f 7 2. LAP TRINH & DEBUG ¡
¡ | V4 Viết bai, email, bao cdo, nội dung </> | Viết code, giải thích lỗi, tối uu
ỉ JJ sáng tạo và chuyên nghiệp. & y va hỗ trợ da ngôn ngữ.
| ( F~X `\ 3. TÚM TAT & PHAN TÍCH Ế. _ 4,). .4.Hỗ TRỢ MARKETING & SANG TAO
| | Tóm tắt văn bản dài, phân tích j ads Ý tưởng chiến dich, nội dung mang xa hội,
| ie _) dữ liệu va trích xuất théng tin ie „J tagline, mô ta san phẩm va hon thé nữa.
& BY) quan trong. . ii )
( — 2 5. HOC TAP & NGHIÊN CUU | ( gp) 8. DICH THUẬT & BA NGÔN NGU
l S .. Giải thích khái niệm, hỗ tro lam bai tap, ! ổ j Dich van ban mượt ma, ty nhiên
i 2) nghién cau tai liguva hoc moilinh vuc. - („ 7) giữa nhiều ngôn ngữ, giữ nguyên |
re c sì ~ — ngữcảnh. |
(9) 7. PHAN TicH & ĐỀ XUẤT | ( ZZ\ À. 8.TƯVẤN & HO TRO QUYẾT BINH
aul Phan tích xu hướng, dữ liệu, thi trường „ Đưara góc nhìn, phân tích ưu nhược điểm
we _) và dua ra dé xuất chiến luge. Pele _) và hỗ trợ ra quyết dinh hiệu qua.
# —“ VÌ SAO NEN CHON CLAUDE? vvw——
‘a lar “mia riế O ¬
| | - |
Í l @a -ê |
ỄỔ í/ Ù (=
UU TIEN AN TOÀN HIỂU NGỮ CANH SAU . THONG MINH & LINH HOẠT _.. NHANH CHONG & HIỆU QUA DE SỬ DUNG
Thiét ké dé giám thiểu Xt ly ngữ cảnh dai, Suy luận tốt, linh hoạt. Phan hồi nhanh, tiết kiém Giao diên thân thiện,
rũi ro va bao vệ hiểu sâu va tra lời trong nhiều loại tác vụ thời gian, nâng cao dé tiếp can với moi
người ding. chính xác hon. phức tạp. nang suất. déi tượng.
L - —
—=== N
3K Claude - Al thấu hiểu, an toan va đồng hành cùng ban. .')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('06', 'Hiểu rõ giao diện - Téi uu trai nghiệm - Lam việc hiệu qua hon () 7
TỔNG QUAN GIAO DIỆN . n ‘
= ® Chon mé hinh @ Khu vực tro chuyện.
Lựa chon mô hình Al phù hop Nol tao đối cing Al theo giao
v6i nhu cầu của ban. dién trd chuyện ty nhiên.
% than = =
Thanh bén ||, @® Claude Claude 3 Sonnet - Tiemann 20
TuyÄpmam - ¬ GST =e 5 iS)
| các cuộc trd chuyện, 3É Good afternoon, ban! Ngoc cảnh dy én
dyn, tép tin va © Chats Ô n n Chuyển đối nhanh giữa
cai dat cd nhan. 65 Projects © Bio cáo t chịnhquý | các dy an, tai liệu hoặc.
© artifacts © Ÿ tưởng cho sin phim me ‘eude trd chuyén
liên quan.
@ © Fies © 00080khách hingesy
C Goi bit du +
New chat hme H H ©
mS Tômtát94UEG —_Wtenaehyingtitp - Lậpkếhoychdựễn
én mới vớ Tệp &tin da
henna) © Upgade plan Brainstorm jtudng Hoc hai kin the Gai thich ki nid 2 ÿ
Carta Cho phép quan lý va
Alps) truy cặp các tập dinh
— kem, lich si. |
@ Ô nhập nội dung Gợi ý cuộc đối thoại. © 6øý mam
Noi ban nhập cau hỏi, Các thao téc nhanh, giúp ban Các gợi ý giúp ban bat dau
yêu cu, dinh kém tệp, bat dau dé dang với Claude ''nhanh chéng một chi dé
nhân @Claude & hơn thé, phi hợp với nu cầu. hoặc dy an phé biến.
=
CAC THÀNH TO CHÍNH VA CHỨC NANG 3
(D Gợi ý nhanh
= Thanh bên (Sidebar) Ngọc cảnh dy én (Project) XA ic thao ti thuéng ding chi vi
| | Oem - Quảnlý cuộc trd chuyén, dy án, tai liệu im * Tố chức các dự án, tai iu một cham:
— H + Gom nhôm các chat, tép lién quan + Tôm tất van bản
- Projects: Quản ly dy én ++ Lam việc có hệ thống, khoa hoc va hiệu quả :> Viết email chuyên nghigp
s wie wa uu trữ nội dung Claude tao 1* Chuyền đối nhanh giữa các dự án 1* Brainstorm y tưởng.
* Files: Guan ly tệp s a
:+ Giải thich khái niệm, công thức, vv.
+ Settings: Cai dit ti khoản và thy chinh Tệp đính kem (Files)
ñg n Tai én va quan ly tệp tin để sử dụng G@ Céng cu đính kèm
S) Tao cuộc tr chuyện mới {rong các cuộc trô chuyện, phan tích, Dah kém tệp, hinh anh hoặc file csv, xix,
với AI chi bằng một click. tra cửu, hỗ trợ nội dung. Claude có thé:
1* Đọc va phan tich dữ liệu
| Chats mdi z Ô nhập nội dung 1* Tim kiếm & trích xuất thong tin
Danh sách nhanh cuộc chat gan day, Nhập cau hỏi, yêu cu, nội dung cin ++ Hỗ trợ viết, tom tat, gợi y dua trên dữ liệu
dé ban dé dang quay lai lam việc. xử lý. Công cy hé trợ: Binh kèm tệp, — %
lạ (@AI, biểu tượng chic nang. z
— 77Ƒ {TINH NANG NỔI BẶT /
Hiểu ngữ cảnh sau Xử lý đa dạng | Bao mat va đáng tin Phù hgp nhiều lĩnh vực
Claude ghi nhd va hiểu EEE Hỗ trợ van ban, bang biểu, Dit của ben duge ma hóa gy Hỗ trợ công việc, hoc tap,
ngữ cảnh tốt trong cdc file PDF, CSV, hình ảnh, vatuan thi tiêu chuẩn bảo mật - Ố nghién cửu, sang tao nội dung,
cuộc tro chuyện dai. liên kết web... cao cấp. phan tích va lap trinh.
- x
MEO SU DUNG HIỆU QUA =
(⁄ Patesundirorang, (2ý Cungedpngucanh GF Binhkemauigu (FF Sửdụngggiÿnhamh C7} Theodöi&lưutữ (Yj Banh gis & chinh sta
cy thé day da khi cn thiết 6 tiết kiệm thi gian bang Projects kết qua J
7 PNG. r - n 777 7 YS m NN
ÁC * Claude - Al đồng hanh dang tin cay, giúp ban lam viéc thong minh hon mỗi ngay. » y)')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('07', '. „ KHÓA HỌC CLAUDE TỪ A -Z +. hy ‘ K Ñ
; =| ee eS H NH sS \\ L S
@ Tạo tai khoản Claude nhanh chéng (Bat dau hành trinh cùng Claude chi trong vai bước don giản! ) ~ \ = \ \
© Đăng nhập & bao mat an toan Ầ
— — —
@ Quản ty tai khoản tiện toi : CLAUDE LA Gi? go &@ Q a )
© km pha ttc toh ning - Gare See a | | |
hiếu sảu, sing tao va giải. Antoản Suyluận Giao tiếp Bảo mật
SL quyết vin 46 hiệu qua. & ding tin cậy manh mé tựnhiên nang cao
2 - b n G GG e 09972 NgƯỜẠ 6 N đ N c l n 2
/ = - — m—R —Á N
⁄4 ¬|
Truy cập trang chủ Chọn phương thức Xác thực tai khoân Nhập thông tin Bat dau sir dung
dang ky Claude
| :
Claude = Good afternoon!
simplified —d., Verify your email
(Geese) || (i ceeevmeet] || vre/oortye eee ©
linkto youreml. |
am) (Cemms )
. Vào website chính thức * Bang ky bang: + Chao mimg! Ban da dang ky
claude.ai © Google © Mé email & nhẩn link + Nhập tên hiển thi thành céng & sẵn sang tro
| xác thực tai khoản chuyện cũng Claude.
''® Nhấn “Get started” ® Apple 4 ''* Chon mat khấu (tùy chon) é
để bat đấu fo Ena de Hoan tất dang ky a .. :+ Khám pha tinh nang
- thanh công J dé bat đầu!
- ee ar WAG R — A A -
: ~ CACH DANG NHẬP - | Í - QUẢN LÝ TAIKHOAN CO BAN - —- -
a Ề — a —
=) 0) @ B . @ Truy cập https://claude.ai Q er ec sửa ỀnỄ tin 3 Claude x
es } ¿ )Ị ®& Nhập email/Google/Apple (Avatar, email, tén hiển thi) Wok
. 3 : . Quan ly gói sir dung
Gd ) B chon L n d (ga (Pro, Max, Team) ( Projects
| / Nh&n dang nhập & bat dau = .
ea d * L Ko i Déng chat & lich sir © Artifacts
À N⁄4 : Bạn có thé trên (Luu & quan ly dé dang) en
== = _\'' riba thểt H Ubu aug Song bs hs. ¿ i setings i)
| - VETRUNG CAP & CAC DICH VỤ - ^ - &BAON _——
- ——4 ——
OS C N T N
l Dingweb/tigmich - .. TUU n Kếtnổi & API Bao mat tai khoan Saolưulchsử tga >
Kết nối web, tra citu | aa L t Ty dong hóa với Không chia sé mật khẩu Xuấtchat,projeet - +. /
đhốngtinreaLtime, . cS Claude API. A vöïngười khác. - đ lưu tris. oe
Bao mat 2lớp eee ee Tay chỉnh “A, Tin dyng tinh ning _
| a Xie minh 2 bude, S s Ail is ¬ iestesa cho ae) w Pactacetead * Khám phá & họchỏi , lls |
momỳ _ ¬vJ ats C ngén ngữ... (hông Gản Ô nổ: ) rnb ntl Very (o
-À --êe‹"“ởS]=s›s Vee Ce
— n = = Rest
1] GIAO DIEN TONG QUAN “ =
<i Mối bước dau nhỏ hôm nay,
= Khám pha tống quan các tinh nang của Claude mỡ ra những kha năng lớn cling Claude! 99
a ity va bat dau ciộc ding hiệu qua nhất. >
SS m wy) SS')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('08', 'BAI 5 3 KHOA HOC CLAUDE TU A - Z
ia
J
rN x
= GIAO DIỆN TONG QUAN / \''Z
U ZANS
@ MỤC TIÊU BÀI HỌC
© Hiéu giao dién lam viée chinh -. + :
trên Claude | C ]
O e | Lam quen va nam vững cdc thành phan giao diện .
trong tung khu vực dé str dụng Claude hiệu qua hon mỗi ngày. Ñ
© Tối ưu trai nghiệm sử dung a — XN X +o
© Lam việc nhanh chóng va hiệu qua CLAUDE LA TRG LY Al THONG MINH }
~ © Hiếu & trả lời a Xử lý thong tin I) An toàn & Bao mat & 5
tự nhiên i ‘manh mé dang tin cậy. riêng tu .
CÁC KHU VỰC CHÍNH TRÊN GIAO DIỆN CLAUDE
@ THANH BEN (SIDEBAR) © DANH SÁCH FILE
Truy cap nhanh các tinh năng Claude Claude 3.5 Sonnet ~ + Dạ Noi lưu trữ và truy cập lai
chính chí với 1 cú nhấp. l các tai liệu da ding.
+ hts De at & Good afternoon! ane
+ File dãtạo bởi Claude
+ Projects: Quin ý dưán © chats L I ¬
E * Dé dang tim kiểm, mở lại.
: Artifacts: Các ni dung sing tạo © Projects B Knncokstripgeex
«les: Qué i file How can |help you today? * Sắp xép & quan ly khoa hoe
N " đ
— m # Artfact ( 008phintchsis, ‘Show all: xem tất cả
D Files : B S05 quy tinh drawio
@ KHU vuc TRO CHUYỆN eeu ®
(CHAT WINDOW) S Settings B itguthaminiopat @ HộP DAN Gt
Noi ban trao déi với Claude. Manin cbalbon| J | ‘Show all } Nhap cau hỏi hoặc yéu cầu
. œ NH an t tho Claude dé bat da
q COE aia Tom tét tilde Viếtemlchuyênnghiệp | | Lênkếhoạch du lich be h l
: A Ặ J ) trò chuyện.
‘+ Phin nhập ni dung của ban > ‹5 2 .
c b an ie T n n © Templates - | Phântehdtlệu | | Hgptic&nghênciu | Giảtchkhdnim y dang anh dong
© DE xuất gợi ÿ hỗ trợ lam việc @ Profile yi * Tốiưu trải nghiệm Al
hiệu quả H G II ‘+ Nut gửi nhanh gon & tién loi
k * Hỗ trợ markdown
@ GgtYRAroš - ⁄ ⁄ @ TEMPLATES MẪU SOẠN () Hồ SƠ & NÀNG cẤP
Các gợi ý nhanh giúp ban Chọn nhanh template Quan lý tai khoản va tiện ch,
bat dau dé dang. tiết kiệm thời gian. 3
+ Profile: Théng tin t khoản
+ Tom ti gunanh + Vigt bio cáo § kế hoach „ Ÿ w T
+  Viết email chuyên nghiệp. ‘+ Phan tích, so sánh, dinh gid ¬ Dog
+ Phin tich dữ igu chuyén sâu + Nghién cứu, brainstorming * Cai dt & thanh toán, quyén Ia
* Hợp tác nghién cou *  Hỗ trợ hoc tap & giáng day
ˆ A Lá ˆ èì
1 NGƯỜI CAC BIỂU TƯỢNG TRONG KHU VỰC NHẬP LIEU MẸO SỬ DỤNG HIỆU QUẢ ĩ |
v I
@ ae ht QO Bit đầu bằng 1 cu diều dẫn rõ rang dé Al hiéu ding nhu cd. A ⁄
5 n ự
INH KEM TEP | - ĐÍNHKẼMHÌNHẢNH ARTIFACTS DU LIEU / BIỀU BO © Dinh kèm file dé Claude hiéu ngữ cảnh tốt hon,
Tai len tai liệu, Upload anh chup  Tạo nội dung dang Dan dữ liệu, tạo ˆ c Ễ
inh inh, filePDF, | mảnhinh,biếudŠ  băng,code,sơđố,  bảng,biếu đố © at câuhỏi ngắn gon, mach lọ 6 rang
Excel, Code. so d6, ban vẽ. text.tương tic | trực quan | @Neren ss Mew vila
8 Claude doc & Claude phan tích trực tiếp, dep mat nhanh chéng | tọn tig nơ i velqusn l Khoa hee:
phan tích. nội dung chitiét. &dếdinglgL - vàchinh c. | © Thuong xuyên khăm phá các tinh năng mới
INH DANG TEP CLAUDE HO TRO Í * TOM TAT
à | . ` | Giao diện Claude được thiết ké don giản,
SJ J trực quan va tối ưu cho người dung.
Nam 16 các kh õ ban lam vig
PDF,DOCX, XLSX,CS, JSON,XML, PNG, JPG, cove csv, LOG, OE Anal ORES OPA RO A
PPTX,TXT Google Sheets. YAML_ | WebP (PY, JS, HTML, MD, ANH ee ee ©
| | aaa rates sức manh của Claude mỗi ngày! J
iS 4
TIẾP THEO KHÁM PHA CAC TINH NANG NOI BAT CUA CLAUDE
BAI 6 Cùng tim hiểu những tinh nang giúp Claude trờ thành trợ ly Al manh mé nhất!')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('09', 'm < KHÓA HỌC CLAUDE TỪA -Z > m N
_ G a n
zo⁄ss w w CÀI ĐẠT & TUY CHINH CA NHAN
7
x¬ ” ˆ :
© Hiếu các tiét tp quan trong trong Claude Ñ L
© Toy ction pao dện hành theo nhc Tối wu trai nghiém Claude theo cach của ban -
@ Quản Ij tai khoản, thông bao & bảo mat vi SAO NEN TÙY CHINH CLAUDE? `
© por trang im vie tha tin hse G S @ ® ì
3 Tối ưu higu suat ‘Trai nghiệm phủ hop Nang cao hiệu qua Tang cưỡng bao mat r.
'' u — à tốc độ phan hi ‘di phong cách của ban và độ chinh xác va kiểm soat :
⁄ = G ~ - we x
í r HUONG DAN CAI DAT & TUY CHỈNH
Truy cap cai dat menu - theme &sidebar artifacts - giao diện preferences - hành vi account & privacy - bao mat
Vao Settings để tùy chinh Quản l thông tin, chủ 68 Tuy chinh giao diện Quan l các thy chon hành vi Kiém soát thông tin tai khoản
trai nghiệm của ban. ‘va giao diện. cc artifact (ndi dung Al tao). va phan hii va bao mat Claude.
Í claude ‘Appearance Artifacts Preferences ‘Account & Privacy |
® Profle Theme wa Asosnnsieoss - C@ None |
lan © vat ark Inter e ˆ - |
Ø Pt — ‘Suggest follow-up c all
® Biting © Spm Smal || Medium || Large acne e trungyt@examplecom Verified
© sady sidebar em t ce Two-fctr auth c
n os ¬<+ Comput | antrobe (Space Websearch c m a F
® n © Proets c — i Manage your data &pivacy
esponse leg 3
| © Arter c code theme n XH E
© neei c Claude Dark = Language Download your data |
| © pe @ Seared c Tiéng viet = Delete account
‘+ Nhấn vao avatar géc tráidưới - » Chon giao diện sáng/tổi/hệ thống. -. = Chon phõng chữ & kich thước. * Bật/tất tinh nang phan hoi * Quan ly tai khoản & xác minh email
|= Chon “Settings” (Cai dat) - + B§Vtất mục hin thio sidebar + Điều chinh mat a hin th + Chon độ di câu tr i + Bat xéc thực 2 bước (2FA)
| * Truy cap tat ca tùy chon 1* Sp xếp myc uu tién hiến thi * Chon chi dé cho code & nội dung . « Chon ngôn ngữ mac định. 1+ Xuất hoặc xóa dif liệu tai khoan J
u 2 2 L aX .
Lia
CAC THIET LAP NOI BAT KHAC MEO TUY CHỈNH HIEU QUA
Language - Ngôn ngữ. .XY Á at .
N n N u NH H QO U tiên chế độ Tei (dark) ban đêm để giảm mai mat
- Keyboard shortcuts - Phim tat LỄ . - N N |
) .? Poe n n T agtary ffs thas ts near © Bật tinh nang gợi y tidp theo (follow-ups) dé có trợ ly thong minh hon.
Beta features - Tinh nang thử nghiệm. ` - - ˆ F - |
A Ea ae a ế (@) Sử dụng mau prompt (templates) cho công việc & học tap thường xuyên |
Integrations - Tích hop E E L |
ge Kết nối với các công cu khác: Google Drive, Notion, (  Thường xuyên sao lưu (export) dữ iệu quan trong |
i) Security - Bao mat n N. AN L K i
(8) s xh © Bao mat 2 lớp (2FA) va kiểm soát dữ liệu cá nhân chat ché.
⁄ vi DU TÙY CHINH THEO NHU CAU s
NHÀ NGHIÊN CỨU / SINH VIÊN NHÂN VIÊN VĂN PHÒNG CONTENT CREATOR / CHU DOANH NGHIỆP.
© Chế độ Tối | © Chế độ: Theo he thống Ay © Bah do: Tối „
Ss @ Sidebar: Projects, Chats, Artifacts | rz] @ Sidebar: Recent, Projects -(_ )-S sidebar: starred, Artifacts 74
@ Tinh năng: Web search, Citations @ Tinh nang: File Upload, gợi ý “ Xg @ Tinh nang: SEO mode, POF, Tools 1
@ Ngôn ngữ: Tiếng Viet + English © Phim tat: Bat @ Mẫu tra loi: Chuyên sau
Pi : , @ Ngôn ngữ: Tiếng viet @ Bẽta features: Bat
Tối ưu cho học tập, nghién cứu & trich din Tối wu cho công việc, báo cáo & xử lý nhanh chóng Tối vu sáng tao nội dung & quan lý dự én hiệu quá
— = — ~ = = . — ¬ — E GE ⁄
7 T H “ n T m £35
PHÍM TẮT HỮU ÍCH Í GỢI NHỚ <5 CHECKLIST CAI DAT NHANH
@ +{K) Mở Quick search se * Banh dau quan trong (Star) cho chat E Bera
ế 17 ] \ © 0ã chon ngôn ngữ & giao dién phi hop
®z[7) - Xemtấtcả phim tat M v S
(aes oe + Kiểm tra dinh kj các cap nhật mới © Đã kích hoạt 2FA dé bảo mat.
Reza) Ma Command palette l © a tht lập dữ iệu export & quyền riéng tu
TIẾP THEO CAC MO HÌNH CLAUDE & CACH CHON -
BÀI 7 Tim hiểu các mô hình của Claude va cách chon mô hình phù hợp với nhiệm vu.')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('10', 'BAI 7 | | TƯ Hoc GLAUDE A-Z TRONG 50 POSTER ` Gz = /*, a)
Á ⁄ La al
#07/50_ ¬ (Za) a
.„  CACH CHON B...zs.
| ai. anthropic
` q = ÀẦ
| PHU HOP CHO TUNG CONG VIEC - CLAUDE 2Y
@ ĐÚNG MODEL - ĐÚNG VIEC - HIỆU QUA GAP BỘI - sv vv J
G s- .. ( II VẸ N H"Ự W N a Ứ T « N
4 ¬...(... 3 DONG MODEL CLAUDE - CHỌN NHANH THEO NOI DUNG & BASE È
Claude Haiku | Claude Sonnet | Claude Opus |
Ẩ |
@ Xử lý nhanh, phan hai tức thi © HiểungUcảnh tốttrảlờichínhxác | Ø Lap luận phức tap, suy luận sâu
''© Tom tat & tra lời ngan gon @ Viết content, email, bai blog ''© Nghiên cứu chuyên sau
''© Viết nội dung co ban @ Phan tích dữ liệu, lap kế hoach @ Phan tích dif liệu lớn, da chiéu
@ Hỗ trợ automation, chatbot don giản @ Lap trình, debug, viết code !© Chién luge, tu van cấp cao
| „ @ Tao tai ligu, bao cao chuyên nghiệp . @ Gidi quyét van dé khó, phức tap
W IC .T/rụtcttntnt II
l PHU HOP VỚI: | PHU HOP VỚI: | PHU HOP VỚI:
Céng việc hang ngay, can tốc độ | Hau hết công việc hang ngày || Céng việc quan trong, can chat lượng
va tiết kiệm chi phi in da nang & chuyén sau \ cao nhất & chiéu sâu
Ñ — 4 == SSS
— See LÚNGIDỤNG/HỨC TẾ ee
wena fe. Ø Ø?
Zlsimw e @ |G
CONTENT CODING PHAN TICH AI AGENT AUTOMATION RESEARCH
DỮ LIỆU
* Bai viết, blog s Viếtcode ’ * TrolAl © Tự động hóa _ Nghién cứu thi tường
. _ Phan tích số liệu t Á
| © Caption, idea © Debug L » Tự động tra lời * Make, n8n » Phan tich doi thủ
.W ¿ & ! » Bao cdo, biểu dd 4 ` n
I Ữ1nỂảmd * Giithicncode c | signs dyhdo | | * H50gkhde hang | | * Sig , ye loc tài igu
‘ich ban video * Tailiguthuat ton | ban weal © Quan tr thang minh © Tích hop công cy © Đóng Report
| SONNET / HAIKU Ị ‘SONNET / m>usJ Ị\SI]NNET| OPUS | I" HAIKU / SONNET — HAIKU / SONNET Ụ S0NNET / 0PUS J
(sont ( / 0P\ ONNET / 0PU: KU / SON! ($0 3
a MEO CHON MODEL Bae ế ¬ z `
SS Ñ 7 = A
®n , : ` - NGUYEN TAC VANG :
’n nhanh, don giản — Chon Haiku a rl b
⁄ * .. Không có model tốt nhất -
® Céng việc da nang, quan trong — Chon Sonnet Ể ) É chiee madell phi hop nhất!
N n G Tee eee NH CHON ĐÚNG CLAUDE - TANG NANG SUẤT 5
Pepa fo bat dau Sonnet TIET KIEM THỮI GIAN - TAO GIA TRI LON
(da nang va tối ưu nhất) J ee dese a . 4
88% HOC Al - LAM CHU CONG NGHỆ - DAN BAU TƯƠNG LAI i CAC POSTER TIEP THEO >> „')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('11', 'À >> KHOA HOC CLAUDE TỪ A - Z <<
BAI 8 ¬ P
søs .. HIEU CACH CLAUDE
^
MỤC TIEU BAI HOC Ù
| @ Hiếu cách Claude xử lý yéu cẩu - = s
| © Biếtcách viết prompt dé Claude hiểu ding Nam được cach Claude xử ly yéu cau dé áp dung hiéu qua hon - x
Ä @ Năndượcnguyentctivohonkếtapd - i = .. - A
Ø à s CLAUDE HOẠT DONG NHỰ THE NAO?
| ''® Taoméi trường lim việc hiệu qua voi Claude :
= ©36@®3Qszfss+QO .
=
- — 1. Nhận yêu cầu 2.Hiểu nội dung 3.Tìm kiếm & suy luận 4, Sinh phan hỗi. 5.Trả kết qua if
b . Claodephintchyểucẩu - Claudetimkiểmtrong  Xửlý thông tin,suyluận, - Tạo phan hỏi ty nhiên, dé Ted kết qua 6 rang,
s bạngửiđếhiếubóicảnh  kiến the & kinh nghiệm liên kết các dữ liệu hiểu va phi hợp voi dé áp dụng và hữu ich
— 8 xc doh dip n Wién quan ange teu của ban cho ban
S 7 © QS chat lượng đầu vào (prompt) quyét dinh 80% chat lượng đầu ra.
EY rx G T GF . Aa =)
NGỮ CANH (CONTEXT) LA Gi? CAC LOAI YEU CAU CLAUDE HIEU TOT
Claude ghi nhở va dựa vào ngữ cảnh dé hiểu chính xác va , —
dua ra cau tra lời phú hop. g Oe > . VD: “Claude la gi va
¬ = i Giải thich, tu van, 6 thé lam gi?”
Claude › ) . | gra hapa tl \ |
đã nối trước đó trong cing . 4
Vit oman hued dn oat schon. | I c tọ ĐỂ g I NVietgGX: nội dũng ện VD: “Viết bai blog về hướng
| ve oe y a kich ban, in prompt”
Rất hay 86 sung mục teu dy. | ke sa aeo diy i Phan tích & tống hợp _ VD: “So sánh wu nhược
‘Tom t&t, phan tich dữ liệu, điểm của 2 giải pháp nay”
so sánh, dánh giá.
Dut diy bảncập ant ema D Mỡ đầu đấy đủ giip Claude - -
hiếunhanhvàkhông cin Lap trình & ky thuật. 7a ‘
¬ hi lại nhiều lan || |</3⁄| viếtcode debug, gii thich Voy Rey ut . Ủ…"°" -
Tayi vl Ci on a | i ce lọc file Excel
— G= 4 vy) Lên ké hoạch & tu vấn Te
ee: Chiban vin cin hd Claude tom | 9 | Lạp kế hoạch, chiến lược, ND:Piệp kố hoạch S ngày.
L nội dung chính dé giữ ngữ cảnh gon gang va hiệu qua. k l ivinjoa ¥ ÿ tường.. eglees/Điuuiàsgibhgr )
( = m —*. QUY TRINH XH#LY YEU CAU BEN TRONG CLAUDE + — —- )
@ PHAN TICH YEU CAU @ HIEU & LAP KE HOACH ® TRIEN KHAI SUY LUẬN © TAO KET QUA 6) TỐI UU & HOÀN THIEN
ue inh fs tieu re Hiểu sâu ngữ cảnh. , - Timm kiến thie phi hop 15) paoae » mỦ tratoàn diện : |
EA - Higu bối cin (=) - Xác doh hướng xy + Ltn tay in EA - Kếntatrhdng mae ig) + Toi wwhéa ngõn ngữ
—\ - tichnadthing in quan tong 2) - Len kế hoạch phan hôi * Tao nội dung phan hai = @ - chusn hóa ngôn ngữ = Cung cấp cau trả lời
tốt nhất
= =- =
Z . X I N Oa N r) B A oN @
0 HO TRO THOẠI CUA CLAUDE CACH CLAUDE HIEU BAN HON -Q: MẸ0 VÀNG
n c T e | G Rõ rang & cu thé .
¡ S S thuộc vào chat lượng prompt,
& Cung cấp ngữ cảnh : a ngữ cảnh va cách ban
Duy tri mach hội thoại. Chia sé bối cảnh dự án, mục tiêu, đối tượng mong muốn.. đặt cau hoi rõ rang.
=} Hei them để tam rõ khi cần Bualvi dự Claude cang hiếu ban,
i) Vi du giúp Claude hiéu phong cach va ky vọng của ban. cang giúp ban tốt hon!
Quan ly ngữ cảnh tốt L T Á ⁄
Phan hồi & sửa chữa 7 À
Ẩ Ê ⁄
Tenet na . m ( Cp
để tranh qua tải bộ nhớ.
. Ton trong & kién nhắn. Ga o —
Tiger evte nl tang Sse gation | \ ves
_ N N L , ay
@ —* CAC YEU T6 ANH HUONG BEN KET QUA + — - À
c QR chứttợng prompt E xesmeya EB Mach noi thosi Bil] % ¢8i nei dung 1g) Cách ban đặt cau
| Prompt càng rõ rang, | Cung cp đủ thông tin, Cuộc trò chuyện lién tuc giúp. Cau dai, nhiều dữ liệu | Cau hi rõ rang, đúng cach
kết qua càng chính xác. Claude hiểu sau hon. Claude trả lời mach lac hon. giúp két qua chi tiét hon. giúp Claude hiểu nhanh.
TIẾP THEO VIẾT PROMPT HIỆU QUA — NGIUYEN TAC CO BAN
BAIS Tim hiểu các nguyên tc vist prompt dé Claude hiểu đúng va tra lời xuất sắc!')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('12', '20 NGUYÊN TẮC KỸ THUẬT PROMPT VỚI CLAUDE
TỐI ƯU HÓA AI - NÂNG TẦM HIỆU QUẢ - DẪN ĐẦU TƯƠNG LAI

SỨ MỆNH CỦA CHÚNG TÔI: AI HÔM NAY - LỢI THẾ NGÀY MAI
- Prompt tốt hơn.
- Câu trả lời chính xác hơn.
- Kết quả vượt trội hơn.

--- GIAI ĐOẠN 1 – TRƯỚC KHI RA PROMPT (CHẤT LƯỢNG ĐẦU VÀO) ---
Xây nền tảng. Cho Claude mọi thứ cần thiết để thành công.

1. RÕ RÀNG & TRỰC TIẾP
Nói chính xác điều bạn muốn. Không vòng vo.
- Prompt yếu (✗): Giúp tôi với vấn đề này.
- Prompt mạnh (✓): Viết tóm tắt 5 ý chính của báo cáo về xu hướng AI trong năm 2024.

2. CUNG CẤP NGỮ CẢNH
Đưa bối cảnh, ràng buộc và mục tiêu ngay từ đầu.
- Prompt yếu (✗): Viết một kế hoạch marketing.
- Prompt mạnh (✓): Tôi là giám đốc marketing của công ty EdTech. Hãy lập kế hoạch marketing ra mắt khóa học AI trong 3 tháng tới.

3. DỰA TRÊN DỮ LIỆU THỰC
Cung cấp dữ liệu, tài liệu, ví dụ, số liệu.
- Prompt yếu (✗): Phân tích xu hướng thị trường.
- Prompt mạnh (✓): Dựa trên dữ liệu đính kèm (file, bảng số liệu), hãy phân tích xu hướng và nêu 3 insight quan trọng.

4. ĐẶT RANH GIỚI RÕ RÀNG
Xác định phạm vi, độ dài, định dạng, điều cần loại trừ.
- Prompt yếu (✗): Viết về AI trong giáo dục.
- Prompt mạnh (✓): Viết bài 800 chữ, theo cấu trúc: Mở bài – Thân bài – Kết luận. Không đề cập về robot.

5. CÁ NHÂN HÓA YÊU CẦU
Nêu mục tiêu, sở thích, ưu tiên hoặc tình huống.
- Prompt yếu (✗): Cho tôi lời khuyên.
- Prompt mạnh (✓): Tôi là người bận rộn, cần lời khuyên quản lý thời gian để học AI hiệu quả mỗi ngày.

6. BAO GỒM NHỮNG GÌ BẠN ĐÃ THỬ
Giúp Claude hiểu bạn đã thử gì để tránh lặp lại.
- Prompt yếu (✗): Nó không hoạt động.
- Prompt mạnh (✓): Tôi đã thử X, Y và Z (chi tiết) nhưng chưa hiệu quả. Giúp tôi tìm nguyên nhân và cách khắc phục.

--- GIAI ĐOẠN 2 – CẤU TRÚC PROMPT (KIỂM SOÁT ĐẦU RA) ---
Định hình phản hồi. Hướng dẫn Claude suy nghĩ và trả lời đúng trọng tâm.

7. YÊU CẦU VÍ DỤ & TRƯỜNG HỢP
Yêu cầu ví dụ cụ thể để minh họa rõ hơn.
- Prompt yếu (✗): Ưu nhược điểm là gì?
- Prompt mạnh (✓): Nêu ưu nhược điểm của chiến lược SEO, kèm ví dụ thực tế cho mỗi điểm.

8. SỬ DỤNG CÔNG CỤ & DỮ LIỆU
Yêu cầu bảng, code, công thức hoặc định dạng đầu ra cụ thể.
- Prompt yếu (✗): Tóm tắt dữ liệu này.
- Prompt mạnh (✓): Tóm tắt dữ liệu trong bảng thành biểu đồ và nhận xét xu hướng chính.

9. KIỂM SOÁT ĐỊNH DẠNG
Chỉ định rõ định dạng bạn cần.
- Prompt yếu (✗): Lập kế hoạch cho tôi.
- Prompt mạnh (✓): Lập kế hoạch theo dạng bảng với các cột: Mục tiêu – Hành động – Thời gian – Người phụ trách.

10. ĐÓNG VAI NHÂN VẬT
Để Claude nhập vai chuyên gia phù hợp.
- Prompt yếu (✗): Giải thích chủ đề này.
- Prompt mạnh (✓): Đóng vai chuyên gia chiến lược AI với 10 năm kinh nghiệm. Hãy tư vấn cho tôi.

11. HƯỚNG DẪN GIỌNG VĂN
Chỉ định giọng văn, phong cách: ngắn gọn, thân thiện, thuyết phục, chuyên nghiệp...
- Prompt yếu (✗): Viết về chủ đề này.
- Prompt mạnh (✓): Viết với giọng chuyên nghiệp, dễ hiểu, dành cho người không chuyên.

12. TRÁNH XUNG ĐỘT TRONG PROMPT
Không yêu cầu mâu thuẫn hoặc quá rộng.
- Prompt yếu (✗): Viết ngắn gọn nhưng chi tiết mọi thứ.
- Prompt mạnh (✓): Chọn 3 điểm quan trọng nhất và giải thích chi tiết.

--- GIAI ĐOẠN 3 – SAU KHI NHẬN PHẢN HỒI (VÒNG LẶP TINH CHỈNH) ---
Tinh chỉnh, thử thách và đào sâu kết quả.

13. THỬ THÁCH & TINH CHỈNH
Hỏi lại: còn gì thiếu? có thể cải thiện? điều chỉnh gì?
- Prompt yếu (✗): Đây đã là tốt chưa?
- Prompt mạnh (✓): Còn thiếu gì quan trọng? Làm sao để cải thiện hơn? Gợi ý 3 cách khác nhau.

14. LẬP LẠI THEO LỚP
Đi sâu hơn từng bước, không hỏi tất cả cùng lúc.
- Prompt yếu (✗): Cho tôi mọi thứ về AI.
- Prompt mạnh (✓): Trước tiên, giải thích tổng quan về AI. Sau đó, đi sâu vào ứng dụng trong doanh nghiệp.

15. MỜI PHẢN BIỆN (PUSHBACK)
Yêu cầu Claude đặt câu hỏi hoặc phản biện lại bạn.
- Prompt yếu (✗): Đồng ý với kế hoạch này nhé.
- Prompt mạnh (✓): Phản biện kế hoạch này. Những rủi ro, điểm yếu và giả định sai là gì?

16. XÁC MINH & KIỂM TRA LẠI
Yêu cầu nguồn, độ tin cậy và kiểm tra thông tin.
- Prompt yếu (✗): Thông tin có chính xác không?
- Prompt mạnh (✓): Xác minh thông tin và cung cấp nguồn tham khảo đáng tin cậy.

--- GIAI ĐOẠN 4 – TƯ DUY HỆ THỐNG (TỐI ĐA NĂNG LỰC CLAUDE) ---
Nghĩ lớn hơn. Xây hệ thống. Tạo đột phá.

17. SO SÁNH & ĐÁNH GIÁ PHƯƠNG ÁN
Học từ nhiều phương án để chọn lựa tối ưu.
- Prompt yếu (✗): Cách nào tốt nhất?
- Prompt mạnh (✓): So sánh 3 phương án A, B, C về chi phí, hiệu quả và rủi ro. Đề xuất phương án tối ưu.

18. SỬ DỤNG RÀNG BUỘC NHƯ ĐỘNG LỰC SÁNG TẠO
Ràng buộc giúp tạo ra kết quả sáng tạo hơn.
- Prompt yếu (✗): Hãy sáng tạo.
- Prompt mạnh (✓): Với ngân sách dưới 100 triệu VND, hãy đề xuất 3 chiến dịch marketing sáng tạo cho sản phẩm SaaS.

19. TƯ DUY TÁCH BIỆT VS TỔNG HỢP
Tách để phân tích sâu, tổng hợp để kết luận mạnh.
- Prompt yếu (✗): Kết luận giúp tôi.
- Prompt mạnh (✓): Bước 1: Phân tích vấn đề. Bước 2: Tổng hợp giải pháp. Bước 3: Kết luận & đề xuất.

20. QUẢN LÝ NGỮ CẢNH HIỆU QUẢ
Claude nhớ giới hạn. Bạn kiểm soát chất lượng.
- Prompt yếu (✗): Tiếp tục từ trước đi.
- Prompt mạnh (✓): Tóm tắt ngắn gọn nội dung đã trao đổi và tiếp tục với 5 điểm quan trọng tiếp theo.

--- TƯ DUY CHUYÊN GIA KẾT QUẢ VƯỢT TRỘI ---
- Rõ ràng trong yêu cầu
- Chi tiết trong ngữ cảnh
- Thông minh trong cấu trúc
- Linh hoạt trong điều chỉnh
- Hệ thống trong tư duy
KỸ LUẬT HỎI - CHẤT LƯỢNG TRẢ LỜI')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('13', '~ Ñ KHOA HOC CLAUDE TU A - Z Á
Í BÀI 10 - € Claude
x" ` .
v l HUONG DUNG J
@ Hiéu các loại prompt phổ biến f & 00 4 een =
v me dich sir dong . Sit dung đúng loại prompt giúp Claude hiểu rõ yêu cu = i
© Chon ding tsi prompt cho va tra lời chính xác, hữu ich hon. ĩ - ° ‘
từng tinh huống m
@ Viết prompt hiệu qua, tiết kiệm PROMPT LA GI? . l
thời gian và tối ưu kết quả Prompt la yêu cầu, câu lệnh hoặc hướng dan ban gửi cho Claude | J
Al nhằm tao ra phan hồi phủ hợn. Ỹ
: “3 oa À Chon đúng loai prompt = Nhan ding kết qua ban muốn! É
Y . 10 LOAI PROMPT THUONG DUNG & CÁCH SỬ DỤNG: - Ề
1. CAU HOI CO BAN 2. TOM TAT 3. VIET NOI DUNG 4. PHAN TÍCH 5. SO SANH
® 2 a 5]
Dung dé hỏi thông tin Dung dé rit gon nội dung Ding dé tao bai viết, email, Ding để phan tích dữ liệu, Dung dé so sanh 2 hoặc.
chung, kiến thức, dinh nghĩa, dai thanh y chính ngan gon. bai dang, kich ban, mo ta. vn dé, tinh huống. nhiéu déi tượng, lựa chon.
hi ai thich.
ysis teh: vo: VO: Vo: vo:
“Tom tat bai viết sau “Viết một bai blog “Phan tich diém manh, . Pr -
“Claude, marketing thanh 5 ý chính về cách hoc Al hiệu qué điểm yếu cba chiến dich Ề“"ƯỀ“g² Bale,
la gi?” (max 250 chữ)” cho người mới bat dau” marketing nay (SWOT)” onnet và G Puss
Mục dich: Tim hiểu nhanh Mục dich: Tiết kiệm thời gian, | | Mục dich: Tao nội dung Mục dich: Hiểu sau, Mục đích: Đưa ra quyết định
kiến thức cơ bản. nm nhanh thông tin. nhanh, chat lượng.. dua ra insight. dya trén so sánh..
6. HUONG DAN 7. BRAINSTORM 8. SUAB6I&CAITHIEN | | 9. LAP KE HOACH 10. HO TRO & TU VAN
TUNG BUGC ris %
g= Ye % pA
Ding để yéu cdu hướng din Ding dé goi ý ý tưởng, Dung để chinh stra, cai thiện Ding để lập kế hoạch Dung để nhận lời khuyên,
chi tiết, tun ty. sng tao, mở rộng tư duy. nội dung có sẵn. công việc, chiến lược, hé tra giải quyết van dé.
lộ trinh, checklist.
vor vo: vo: bas vo:

“Hướng dẫn ting bước “Goi ý 10 ý tưởng video “Sia lai đoạn van sau “Lap kế hoach 30 ngáy “Tôi da ban tối chuyên
cach lên ké hoạch TikTok về chi để. cho dé hiếu hon va thuyết E gual marketing, hay tư van
marketing cho startup! hoc tap” phục hon (giữ nguyên ÿ)” mới bat đầu” giải pháp tang hiệu qua”
Muc dich: Lam theo quy tinh | | Mục dich: Khơi nguồn sáng tao,| | Mục dich: Nang cao chat lượng | | Mục aich: Tố chức công việc, Mye dich: Nhận tu van chuyên

16 rang, khong bỏ sot. mé rộng góc nhin. van ban. dat muc tiêu. mén, hé trợ ra quyết định.
CACH CHON LOẠI PROMPT PHU HOP MAU PROMPT NHANH CHO TU LOẠI TEMPLATE PROMPT THAM KHAO
® Ban cén thing tin? > Ding Cav hỏicơ bản | | (1,) “Hãy giảithích [chủ đề] một cách don giản, đễ hiéu. [VAT TRO]: AT chuyên gia ...
Ồ Bancin it gon n6i dung? > Ding Tom tit (2) “Tom tất nội dung sau thành [số ÿ chinh}/{s6 tử] ngảgọn” [NHIỆM VU]: Viết, phan tich... E
A nae ed ee he S| | CB) “vie v (haa tenaVna đ via SiGe ts
n EE > B n n [MỤC TIÊU]: Mục tiêu cuối cùng
F 4) “Phan tich [vấn đẽ)/dữ liêu)/kế hoạch] theo [góc nin)”
‘SB Ban cin so sánh,lựa chọn? x —» Ding So sinh ig Ne . Ö : [ĐỊNH DANG): Bảng, bullet...
IB soncinhuig dnc ss? > ing bain | (S “So sto (AaB ee ce chi, 2,3. tn aches bn.
"Ban cin j tưởng sing tao? - — Ding Brainstorm (©) “Hướng din timg bước cách (lam vie gi (ees ic Oop atta
2  Bạn cin chinh sửa, caithién? —> Ding Sita dai & Cải hn | | (7.) “Gợi y [số lượng) ÿ tưởng về [chủ đề]” [8ỐI TUONG): Người moi bat đẫu...
(Ban cấn kế hoach, 6 trnh? x —> Ding Lip kế hoach ““Sửa lai Indi dung text] theo yéu cu: [cụ thé yêu câu)'' [YẾU CÀU]: Yêu cầu cy thé...
Q Ban cin oi khuyén, tevin? —> Ding HO trợ& Tư ấn. “Lap kế hoạch [mục iêu] trong [thoi gian” [RANG BUỘC]: Những điều cần lw y...
=< R (40), “Tư vấn gsi pháp cho {vn đề] vai các bước cu thé” [VÍ DỤ]: Néu c ví dy minh hoa...
we wuy &@ soly GHI NHỨ
* Cung cấp day đủ ngữ cảnh va chi tiết. ding 1 loại prompt & dp dung linh hoạt Prompt tốt = Hiệu qué cao ''
ghar iby e y t cal Sos n = Tiết kiệm thai gian & nang cao nang suat!
- Thứ nghiệm & digu chỉnh dé tối ưu kết qua.
pert
r ˆ e ¬
TIẾP THE0 ì N N N aaa Ê T H À an = =
BÀI TỊ THANH THẠD 10 LOAI PROMPT - LAM VIEC THONG MINH, HIỆU QUA VƯỢT TRO! . ~ E
x m')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('14', '. . KHÓA HỌC CLAUDE TỪ A -Z ” Claud
BAI 11 2 z ˆ ~ X* Claude
m . HOI DAP & TIM KIEM \
ˆ 6
Sete THONGTIN ..
@ Hiểu cách Claude tim va tổng — — í
A : Cách dat cu hỏi đúng dé Claude hiểu rõ, tim ding théngtin | ì IE
C PsesieatilXpn,d va tra lời chính xác, day đủ, hữu ich nhất. a HH |
@ Nhận được cau trả lời chính xác,
day đủ, có dar lồi ˆ Á . ¬ .. “
- A n HỎI ĐÁP & TÌM KIẾM THÔNG TIN LÀ GÌ? |
4 ểễẸỀf'' Sanya nenaicao La việc ban dat câu hỏi hoặc yéu cau thông tin cho Claude.
Claude sé tim kiém trong dữ liệu đã hoc va thông hiểu dé tra lời ban J
k - một cách rõ rng, logic va hữu ich nhất.
= ⁄ - ( XÉ Hỏi aang cach = Nhận ding kết quit } :
-$ VISAO CAN NOI DUNG CÁCH? = *
ĩ
v
Claude hiểu đúng Thông tin chính xác Tiết kiệm thời gian, Nhận được góc nhìn,
ý ban & nội dung trong tam. va day du han. tránh héi, nghién cứu lai cấu tric gợi ý hữu ich,
( cÁCH ĐẶT CÂU HOI HIỆU QUA ) Á CÔNG THỨC 5W1H ĐỂ HỎI HIỆU QUẢ
Renee U | 40 Thông tin liên quan đến ai?
Nêu rõ đối tượng, mục tiêu, ngữ cảnh, soe s ; .
vo: "Phan tích ‘Chién lược marketing của Apple 2024." SVB!’ Boanhinghigp,siohivien,jhoc sinh, nhaldau t
== Cung cấp chi tiết WHAT Ban muốn biét gi?
c coo claudelbolicanb jad leu, yeurcaulcutne, (CÁI GÌ) — VD: Chiến luge, cách lam, lợi ich, vi du.
vo: “Viết bai phan tích marketing của Tesla theo mé hình 3C.” = = M M
Hỏi một cau hỏi WHY Tai sao cần/do mục dich?
Ban muốn Claude giai quyét điều gi trước, so sánh, ligt kê.. ? | ¬ VD: Ly do, nguyên nhan, tim quan trong...
‘vo: “Gợi ý 5 y tướng nội dung TikTok về Al cho sinh viên.”
=9— _ Xác định định dang mong muốn l`; EI presley
= Muốn bai viết, bang, danh sách, bao cdo, hướng dn... ? _ (KHINẢO, > VD: Hiện tai, năm 2024, trong 3 thang tới.
vo: “Trinh bay dưỡi dang bang so sanh.”
a n n WHERE Bối cảnh, lĩnh vực, dia điểm?
sung dif liệu quan trong (Ở DAU) Vie ằ
® Cung cấp sé liệu, tai liệu tham khảo, yéu cu bé sung. L NDAD In ENG Mg) On
vo: “Thông tin năm 2024-2025, ưu tiên sé liệu méi.” — u H N =
¡ Í HOW | Cách thitc, bước thực hiện?
N Yêu cau tối ưu (NHƯ THẾ NÀO) | . — VD: Hướng dan, quy trình, phương pháp...
J - Nếu chưa rõ, hay hỏi lai dé Claude giài thích ky han.
Ạ vo: “Có vi dy thực tế giúp tôi hiểu hon.”
7 VÍ DỤ MINH HỌA S0 SÁNH MEO NHỎ. N
CAU HOI CHUA TOT CAU HOI TOT HON i€UCHi Í HOI CHUA TOT HOI TOT 7 ~
- n T H f * Luôn dat câu hỏi rõ rang,
Marketing a g r n b poring | @ Mons chngchug| @ cuthé bring 6 bối cảnh & mục tiêu cu thé.
á ất Viết 5 bước viết content thu hut, ù
Céch viétcontenthay? Hề c n eno fanpage bn hing, Théng tin @& Thiguthang tin ( Đây di, ch tết @) ae Gen
Reiman ‘Al có lợi ich gi cho doanh nghiệp. Bing ae - :
AlegL Taine) ® visava ohd tg Vit Nam? trọmgtâm - Odi dong ‘Bing mye tiêu A This nghiệm & điều chinh câu héi
, để tối wu kết qua.
c Phan tích chiến luge marketing : ane H
Phan ch Apple. mp T t n , DB rà lời - @ Khó hidu @ Dé hiếu dé trả ĩ -
n ona, Nếu chưa hai lòng, hay yêu cau
Cáchdáutrchứngkhoá? mp HưỚngđổndãut/chứngkhoáncho  Kếtquả 9 Ítứng dung @ ee Ga Claude giải thích thêm hoặc
người mới bat du trong 2024. hữu ich adhd ira
Á KẾT LUẬN
: :R á Dat câu hỏi đúng la chia khóa dé khai thác tdi da sức manh của Claude. u
n Hỏi đúng - Claude hiểu đúng - Tra lời chính xác = Công việc hiệu qua! B 3
Cy s ˆ ˆ - 3 “ 4 — -4 A :
4 DAT CAU HOI THONG MINH - NHẬN CÂU TRẢ LỜI XỨNG DANG! - * „ +')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('15', 'Ế. . KHOA HOC CLAUDE TU A - Z 1
BAI 12 z i ¬ ~ Claude
«00 ) TOM TAT VAN BAN !
N
z
->`NHANH CHONG: |=
@ Hiếu cach Claude tóm tắt B =;
vn ban hiệu qua Biến van ban dai, tai liệu phức tap thanh các ý chinh ngắn gon, =
© Nhận đ / 0 a dé hiểu chi trong vai giây với Claude. N
‘tém tat phd hop Fa
@ Biết cach yéu cau tom tắt ế A AT LA GÌ?
theo mục dich cu thé POMMAT A IE . „ , m
© ngdyngtón ee a wt ‘Tom tat là qua trinh rut gon nội dung dai thanh các ý chinh quan trong nhat, 4
res ae ea ry giữ nguyên thông tin cốt lõi, loại bỏ chi tiết thừa va trinh bay ngắn gon, n J
mach lac, dé hiéu.
ợ : | cor Claude giúp ban tóm tat tai ligu, bai viết, báo cáo, sch, video... |
- - ˆS nhanh hon va theo đúng yêu cau.
KHI NÀO NÊN TÓM TẮT?
Khi ban căn nắm nhanh Khi nghiên cứu nhiều Khi chuẩn bi bao cáo, Khi cần trich xuất ý quan trong Khi ban cần hệ théng
nội dung chính tài liệu thuyết trinh để ra quyết định hóa kiến thức
= a 4
\ CÁC MỨC ĐỘ TOM TAT PHỔ BIẾN 2 CONG THỨC TOM TAT HIỆU QUẢ _)
@ Siêu ngắn gon Rút ra ÿ chính cốt lõi, phi hop dé nắm. Ban muốn tóm tat dé lam gi?
(-3cau) Ô bat ÿ quat nhanh Ñ (Hiểu nhanh, học, báo cáo, ra quyết định...)
( ‘VD: Tom tắt báo co trong 1 cau.
— a m T N i XÁC ĐỊNH Muốn tom tt ngắn gon, trung inh
(3-5 gach đầu dong) yp. tom tat bai vidt trong 5 ý chính. =
‘Tap trung vào phần du, thong điệp chính,
@ Trung binh ‘Tom tat thanh một đoạn van mach lac, kết luận, số liệu hay toàn bo?
day du ý chinh.
(1 đoạn van) VD: Tém tat T 1 doan. CHI ĐỊNH. Nêu rõ phong cách va dinh dang
— ˆ DAU RA ban muốn nhận.
. Chỉ tiết ‘Tém tắt có chon loc theo chủ dé, me
đối tượng hoặc yêu cau cu thé, ‘ua ra yêu cầu cu thé cho Claude
(theo muc tiêu X 5 te K f y
( ) ''VD: Chi tóm tat phan liên quan đến ‘YEU CAU BO SUNG (hin mạnh ÿ nào, bỏ chi tit gh.)
\ marketing. S
Ví dụ công thức prompt:
IL + * “Tóm tat bai viét dưới day thanh 5 ý chính,
: — trinh bay dang bullet, tap trung vào sé liệu va kết luận quan trong.”
CÁCHVIẾTPROMPTTÓMTẮT&VÍDỤMINHHĐA — N
MỤC DICH CÁCH VIET PROMPT KET QUA MONG HỢI. vi DU AP DUNG
A “Tom tat tai liệu dưới day Hiểu ngay ý chinh trong ‘Tom tat bai bao, email dai,
G Năm nhanh nội dung thành 1 câu ngắn gon nha.” vai giây. thông báo...
— "Tom tat tai liệu dưới day Ghi nhớ nhanh, ôn tap ‘Tom tat chương sách,
EME GN) thành 5 y chính dé nhé.” hiệu qua. slide bai giảng, van ban hoe thuật...
Chuẩn bj báo cáo “Tom tat tai liệu dưới day Doan van tóm tat mach lac, Báo cao thang, kết luận dự én,
thành 1 doan van mach lac, logic.” ‘sn sang dura vào bao cáo. ban tóm tat nghiên cứu...
@ m . “Tom tat thành các ý chinh (bullet) Danh sách ý chính rõ rang, ‘Tom tat phan marketing trong
[2] Trình thuyết trinh để trình bay slide thuyết trình.” dể dua vào slide. chiến lược, kế hoach
Bo sánh nhiều ta eu "So sánh va tom tắt diém giống, Bang/bullet so sánh —
khác chính giữa các tai liệu.” rõ rang, trực quan, 2 phương an...
MEO DE TOM TAT TOT HON UNG DUNG THUC TE TOM GON - HIEU QUA - VƯỢT TRỘI
Truyền muc tiéu rõ rang, nhat quán Doc nhanh sách, bao cáo dai s
ory . \ ae. t A Ĩ ~ We Tém gon ý chính, không bỏ sót trong tam .
@ Cung cấp ngữ cảnh va phạm vi cẩn tóm tắt v u „ Tổng hợp bao cáo nhanh cho sếp, khách hang :
@ Yêu cầu dé dai & dinh dang cu thé à \_| | GQ Tóm tat hội hop, buổi tam việc We DE hiểu, dé áp dung, tiết kiệm thời gian
@ Úu tien số liệu, kết luận, thong điệp chính ^ ` | | 03 Hoc, n tập, chuẩn bi thi TN Giúp ban xử lý thong tn nhanh hon / Ố
(@ Sau khi tóm tat, kiếm tra và yêu cầu ® Trịch xuất thông tin quan trong va dua ra quyét định tt hơn! . ˆ
Claude tinh chinh nếu cin dé ra quyét dinh ee
đ TÓM GỌN - HIỆU NHANH - NHỚ LÂU - LÀM TỐT HƠN l ⁄ J ="
Khai thác sức manh của Claude dé bién thông tin dai thành gid tri ngắn gon, súc tich! — ⁄')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('16', '= \Q. KHÓA HỌC CLAUDE TỪA -Z ⁄
BAI 13 %* Claude
GIAI THÍCH KHAI NIỆM
: TÂP . S>.
MỤCTIÊUBÀIHỌC  ~ ) & HOC AP .. w"
iểu cách giải thich niệm. ái - T CN r == eo) |
S Gouge ae - _.. Biến Claude thành gia su Al giúp ban hiểu sau kién thức, —4 m
ì Š học nhanh, nhớ lâu và áp dụng hiệu quả. Ñ - N
© Nam duge các mite độ. SS ee
tóm tất phi hop Ag r @ Š D
CLAUDE LA Gi KHI HOC TAP? — 5
@ Bist cách Claude hỗ tro hiểu -. ì : ÀẦ"S
sâu va hoe nhanh Claude không chi trả lời câu hỏi, ma con giúp ban hiểu ban chat van đề, -. ˆ
I giải thích theo nhiều cách, dua vi du dé hiểu va gợi ý cach hoc hiệu qua. . :
gidnn va higu qua 24/7 |.” ae, A a n n n N ee `
Q Hoi đúng cach - Claude sé day ban đúng trong tam! B
4 CÁC CÁCH GIẢI THÍCH KHÁI NIỆM PHỔ BIẾN
| 1. Giải thích don gin | 2. Giải thích chi tiết 3.Giảithích bing vidu 4.So sánh & tương phan 5. Ung dung thực té 6. Giải thich theo clip d
© BE ru ðJs @ U
Giảithíchngắngọn w Giảithíchdâydủ,cóhệ | Dũng vi dy thực tế dé So sảnh với khái niệm. | Giải thich cách áp dung Giải thích từ cơ bản
8 hiếu cho nguéi thống va chuyén su minh hoa dễ hiéu. khác để làm rõ sự khác . vào công việc, cube sống. ến nang cao.
ee Phihợpthiben muốn _| | - Phũ ợp kh bạn học per | | Phi hgp khi ban muốn || Phi hop khi ban muốn
Phù hợp khi ban clin hiểu sâu va nám chắc bang thực tế, dé hình Phù hợp khi bạn dễ biết “ding vào dau.” hoe có lộ trinh.
hiều nhanh khái niệm. kiến thức. dung van dé. hiểu qua so sánh.
‘co ban.
CACH YEU CAU CLAUDE GIAI THICH HIEU QUA MAU PROMPT GIẢI THÍCH KHÁI NIỆM
K n Hy nói rõ ben muốn hiểu khai niệm gi. Hay giải thích [KHÁI NIEM] cho [ĐỐI TƯỢNG) theo cach [CÁCH GIẢI THÍCH),
S u VD: *Gi thích khải niệm SWOT" kém vi dụ thực tế va cach ap dụng vào [MỤC TIÊU]. Cuối cing, tóm tất
= = lai các ý chính giúp toi dé ghi nhớ.
485 Chọncách giảlthích Chon eich ban muốn laude git heh ic l
VD: "Giá thịch don gin, có vi dy ñ VÍDỤ PROMPT À
|MÃ (Xácinhdốitượng - - Cho Claude biết ban học cho a hoặc nén tng hin te. | @ _ Litithicn khái niệm Al gi cho người mới bắt dbu theo cách dan giản,
VD: “Giả thịch cho người mới bat du học” kêm vi dy thực tế và ing dung trong cube sống. Tém tat 3 ÿ chính.
ÍØ Newmuctisuhge Ban muốn hiểu dé lam gi (thi ci, ng dung nghién cu.) ¡ @ Gñãi thích khi nióm Lai kép trong tai chính cho hoe sinh lap 10,
VD: “Tôi cn hiểu để dp dung vào marketing” | kêm vi dy va công thức áp dung,
Yéu clu ví dụ & mỉnh họa . Nhờ Claude dua vi dy, hinh anh hoặc sơ đỗ minh hoa. \ @ Gñải thích swor ta gi cho ngườilàm marketing, so sánh với các
E VD: "Cho vi dy thực té va cách dp dung” | ‘céng cy phan tich khac va néu cach 4p dung thuc té.
|
S : H G T ợ a H Giải thích khai niệm Blockchain cho người không chuyên công nghệ,
— e
ĩ . Giải thích khái niệm KPI trong quan tri doanh nghiệp, kèm vi dy
G thực tế va cách ứng dung KPI hiệu qua. J
7 v - CLAUDE H6 TRO HOC TAP NHƯTHẾNÀO? _ ——¬
) | =)
s ® 2 = ka
Giảithích dễ hiểu Họctheocáchcủaban - Vidụthựctếphongphú - Hỗ trợ ôn tap Lộ trình học cá nhân hóa
biến kiến thức khó. đều chinh theo trình độ, giúp ban hiểu sau tao checklist, bai tap, gợi ý kế hoạch hoc tap
thành don gin myc tiéu va s6 thich vn d6 phức tap flashcard, d8 thi higu qua
Í . SO SÁNH: HOC VỚI CLAUDE VS TU HOC THONG THUONG MEO HOC HIEU QUA VỚI CLAUDE Wis là n
TIÊU CHÍ Hoc VOI CLAUDE TY HOC THONG THUONG A @  Đặt cau hỏi rõ rang, cu thé. -~<Z \ A
.. Giải thích Dễhiểu,nhiềucách,theoyêucäu  Khỏ higu nếutảiliệuphứctạp __ @ Yêu cầu vi dy va hinh anh thyc tế. ¬ \V ~ Ẩm
: . z `
|_ Vidụminhhọa _ Phong phi, thực tế, gn gti Ítvidụ hoặc vi dy ly thuyết ) Yêu câu tém tất & ghỉ chú ngắn gon. l /
Tuong tac Hỏi dip ngay, giải dip thác méc Phải tim kiếm ahiéu nguén =
= — eS ~ T S © Ôntậpdịnhkÿvớicảuhỏitrắcnghiệm. - =
Cảnhinhóa - Điềuchnh theo myc tiéu& tình độ - Một lộ trình chung cho tất cả — — n
- Tốndộhee Códnhhưởng§lậvinhröràng Olan man, mitthéigian | @) ÁẤP dung Kiến thức vào bàitập hoặc dy én thực tế. -
© BAI TAP THỰC HANH | KET LUẬN a
Ce re ean ee Claude là gia su Al tuyệt voi giúp ban hiểu sâu, hoc nhanh, nhớ lâu +
3. Yéu cầu Claude giải thích theo 2 cach khác nhau. va 4p dụng hiệu qua kiến thức trong hoc tap va công việc.
4, Tom tấtlại 3 ÿ chinh ban hoe duge. i ee ee Í l
. Ap dung vào một tinh huống thực tế. Hỏi ding - Học ding - Hiểu sâu - Ung dung giới! ⁄4
- Ế HOC MOI THU NHANH HON, HIỂU SAU HON VỚI CLAUDE - GIA SU Al CUA BAN! SZ :')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('17', '— F
BAI 3 KHOA HOC CLAUDE TU A - Z Me Claude
] ` ˆ Zz È uae
LAM VIEC VOI /;
— = Ƒ N H YS asain : H =I
2 „ Luu trữ - trich loc - tom tat - hiéu sau | = Ạ
~ - sisudédang ss Le Y
4 N Claude có thể đọc hiểu, phân tích và Ñ Tas
lam việc với cdc van ban dai như sách, _ Á ;
bdo cáo, tai liệu nghién cứu, hop déng... ˆ Á ⁄ im,
giúp ban tiết kiệm thời gian va hiểu sâu l. L í
vấn đề nhanh chóng. ; x =]H„:"7 ( *
a ae Ñ s ie n
@ Banco THE LAM Gi? ie @: MEO .
TÓM TẮT VĂN BẢN DÀI NHANH CHÓNG | a) Chia van ban lớn thanh
| Rut gon nội dung chinh, nam bat ý cốt lõi các phan nhỏ dé Claude
| trong vai phút. xử ly hiệu qua hon.
| TRÍCH XUẤT THONG TIN QUAN TRỌNG a) KEW 090006 CuBr Mets
| Tim kiém dữ liệu, số liệu, ý tưởng hoặc Tielalee, Pika teal - .
| luận diém quan trong. so sánh dé nhận kết qua
| s chính xác.
=) PHÂN TÍcH, ew THICH NOI DUNG e Cung cấp bối cảnh va
ee ate eplvan m guonhệ câu hỏi cụ thể để Claude
9 E Ể | hiểu đúng nhu cau. |
HOI DAP THEO New CANH - - © Yêu cầu định dạng !
l Pog Sul về vat ban va nhan cau tra Idi kết qua: bang, gach đầu
. chính xác theo nội dung. : V dòng, sơ đồ... để dễ đọc | |
- x yar } i va sử dung.
SO SÁNH GIỮA CAC PHẦN/NỘI DUNG R .
Đối chiếu, so sánh các ý tưởng, on i J
S quan điểm hoặc số liệu. N - | M”
ØØ vípuPRoMPT — C .
— :
> "Hay tóm tat tai liệu nay trong 5 ý chính.” —_— | Ể
l > “Trích xuất các sé liệu quan trong trong báo cáo nay.” Sa B
> "Phan tích luận điểm chính va bing chứng duoc dua ra trong bai viết.” — :
> “So sánh quan điểm của tac giả ở phdn 1 va phan 2.” Ú
> “Dua trên nội dung trên, hay tra lời cau hỏi: ...”
G HIỂU NHANH = NHỚ LAU - ỨNG DUNG NGAY! ñ \
@ CLAUDE GIUP BAN LAM CHU MOI VAN BAN DAI! > đ')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('18', '- ì À. Š KHOA HOC CLAUDE TỪ A - Ự
B Al \ eee a 5 ee HỞ G *& Claude
ˆ z ~ n
| PHAN TICH DU LIEU _ -
Ễ ` z z ế Se $ JÄ
_; . VA BAO CAO. sail ||.
Bién dữ liệu thành thông tin gia tri r.. . m
Claude giúp ban doc hiểu, phan tích, trực quan hóa T 1 ee @& N =
| dif liệu va tao bao cao chuyên nghiép, hỗ trợ ra quyết \ N —
IE định chính xác và hiệu quả. —\ L- |
x ) . . 7 _
š if úcó T : AS -
on w rTN
on ˆ .. 1 u ⁄ Á ¬ A, 2 - Z
@ _ BAN co THE LAM Gi? CACH DUNG CLAUDE HIEU QUA
= — — |
ĐỌC HIỂU BẰNG SỐ LIỆU @ ~ CUNG CAP DỮ LIEU RÕ RANG
( Giải thich y nghĩa dữ liệu, các cột, hang, < (@ dvafie az igu (Excel/CSV/Google Sheet)
chi số quan trong. | hoặc dan bang số liệu.
. PHÂN TÍCH XU HƯỚNG & SO SÁNH @ eS) * Pie ue 7 a Lg n
\= .. A À ĩ 98 - Nêu rd ban muốn Claude phan tích điều gi:
7 Phat hiện xu hướng, điểm tăng/giám, Ị -. doanh thu, hiệu suat, hành vi khách hang...
so sánh theo thời gian, nhóm, khu vực.. ¡
5 @ DAT CÂU HOI CY THE
Gs TIM INSIGHT & CO HO! h Hoi từng Khia cạnh: xu hướng, nguyên nhân,
²ỆỄ Rut ra insight quan trong, co hội cai ¡ so sánh, insight, khuyến nghị...
9 9 d IG Qtj ZZ] Yeu cAU TRỰC QUAN HOA
y oN a K ế - |f0Y] | - Nhờ Claude tao bang biểu, biểu đồ, infographic
T l _ VIET BAO CAO CHUYÊN NGHIEP i hoặc tóm tắt trực quan.
all Tao báo cáo rõ rang, logic, có luận điểm A : X !
— ® 47s . YÊU CẦU BAO CAO HOÀN CHỈNH
m ĩ Yeu cầu viết bao cdo day du: tóm tắt, phan tích,
a DUA RA KHUYẾN NGHỊ HANH DONG eg uaa neyo Gone
@9 8 xuất giải phap, hành dong cu thé @) KIỂM TRA & TINH CHỈNH
x dựa trén phan tích. Q Ra soát kết qua, yêu cau điều chính hoặc
N u đào sau thêm khi cin :
7= > f§ TT, C n n ~ a
⁄ @ vi du PROMPT HIỆU QUA
(xis) anal] S @=
DOC & TOM TAT DỮ LIEU PHAN TÍCH XU HƯỚNG. SO SANH & INSIGHT VIẾT BAO CÁO
“Hay doc file doanh số.xIsx. “Phan tích xu hướng doanh thu “So sánh hiệu suất giữa các. | “Viết bao cao hoàn chính dựa trên
va tóm tat những điểm chính, theo tháng, chỉ ra điểm tăng, khu vue, rit ra insight quan trong phan tích, bao gồm tom tat,
chi số quan trong.” giảm va nguyên nhân có thé.” va co hội cai thién.” kết luận va khuyén nghi.”
t MẸO © KET QUA BAN NHAN DUGC ˆ : À
⁄ =>
© Dữ liệu càng sach, két qua cang chính xác. : fF) Bảng tom tét dữ liu õ rang lR .
@  Đặt câu hỏi rõ rang, từng bước dé có phan tich su. C ư U - ] I == — II
@ Yeu céu minh hoa bing bang, biếu đồ dé dễ hiểu. {in Biéu 4 trực quan, dễ hiểu =
@ Luén yêu cdu khuyến nghi hành dong cu thé, (insight sau sắc & kết luận logic —
© Kiém tra sé liệu quan trong trước khi ra quyết định. È | ) Khuyến nghị hành dong cy thé, khả thi - ( aaa J |
= — Z — — =
ˆ . BIẾN DU’ LIEU THÀNH LOI THE CẠNH TRANH CÙNG CLAUDE! ©, .
. Hiếu ding - Phan tích sau - Quyết dinh nhanh - Hanh động hiệu quả” u eat')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('19', 'e BAI È % KHOA HOC CLAUDE TỪ A- Z 2 ˆ : 2 Claude
4 2 nw Cs
| l | — |
| Ị ——7-0~ /
— J
ik a — |
“~~ CHUAN CHỈNH ”9 = =) 7?
coy . =~ 4
’ E
7 „ - ” ˆ =n 17
: Tạo nội dung hấp dẫn, đúng mục tiêu T n
Claude giúp bạn viết content chất lượng cao - / = 9%
cho blog, bài PR, landing page, email marketing, - _
mang xa hội... thu hut người doc va dat mục tiêu - S — J
ề truyền thông. - - ‘ij . ⁄
@ BẠNCÓTHỂLÀM GÌ? Ì - ¬ Ö quy TRINH VIET CONTENT VỚI CLAUDE x
— c C x C đ 0 n - ˆ } Ỗ m=-=—=: —
VIET BAI BLOG, BAI PR : io) G A IN Q
A Ha . N H Ban viết cho ai? Mục tiêu la gi?
0 K N eee: Ị (Tang nhận diện, ban hang, giáo duc...)
nội dung gia tri. : | Ị
ư IP E I| || ® CUNG CAP THONG TIN DAU VÀO
VIET CAPTION, CONTENT MANG XA HOI (=) Chù đề, sản phẩm/dịch vu, đối tượng, +
Ngan gon, thu hut, ph hợp từng nền tang. | thông điệp chinh, yêu cau dac biệt.
¬ . iS) = _LENDANY & CẤU TRÚC
VIET EMAIL MARKETING THUYET PHUC | | . 9 2 Claude dé xuất outline phù hop véi Ặ
.. Tăng ty lệ mở email va kích thich hành động. | myc tiêu va người doc. ồ
ˆ Ä QD V4 VIET NOI DUNG CHI TIET [
¡ VIET KỊCH BAN VIDEO, PODCAST ] Claude viết content day di, mach lac, l
Kịch bản mạch lạc, giữ chân người xem/người nghe. | thu hut. ;
ĩ : x | iG) CHINH SUA & TỐI UU
GIU GIONG VAN THUONG HIEU | Yêu cau Claude điều chinh giọng van,
Đúng tone & style, nhất quan với thương hiệu. .. l độ dai, từ ngữ, CTA. AT
| i J iG) LZ KIEM TRA & HOAN THIEN :
Ỹ _ = Doc lai, kiểm tra logic, chính ta, tối wu |
É trước khi xuất bản. SK
ĩ x
XX MEO HAY a) (PROMPT MAU." —" .-
` À ˆ ũ LC .
@ Nói rõ d6i tượng & mục tiêu ngay tidy. à Ạ  “Viết một bai blog khoảng 1200 chữ vẻ chủ dé / yy
@ Cung cấp vid về giong văn ban mong muốn, „ ‘Lol ich cua việc thién mỗi ngày, i j/
s - ‘eo ee x đối tượng la người mdi bat dau, /
@ Yêu cầu tiêu đề hấp dan trước khi viết nội dung. L giọng văn thân thiện, truyền cảm hứng, | bd Í
@ Diung tir khóa chính nếu can SEO. Le có cau tric gồm: mỡ bai, lợi ich chinh, > |
@  Luôn yêu cầu CTA rõ rang ở cuối bai. ¬ hướng dan bat dau, két luận va CTA.” Ầ - a
ET" E- ® KET QUA BAN NHAN ĐƯỢC -
4 | C |
Se % đi © S
Nội dung chất lượng cao, Thuht&giữchân -. | Tang tuong tac, Tiết kiệm thời gian, . Giữ giọng van thương hiệu
ding mục tiêu độc giả | chuyén đối | nâng suất cao nhất quán
NOI DUNG CHAT - TRUYỀN THONG MẠNH = KET QUA BEN VỮNG! { ÿ
Š ÿ
- Claude đồng hành cùng bạn tạo ra content đỉnh cao mỗi ngày. ¬ DO')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('20', 'BAI 3K KHOA HOC CLAUDE TU A-Z 7 2 Claude
| \ 7 sÁN6TẠO
. 2 (
. Ý TƯỞNG \ I ro
b Ặ E> DOT PHA if
5 .... Khai phá su sang tao - Không giới hạn. GIẢIPHÁP. x yy
WAGE. S
Claude là người bạn đồng hành lý tưởng E AS << Sy \
đề bạn nghĩ khác, nghĩ rộng và tạo ra — Ểd''—z> )
. ` .. những ý tưởng đột pha cho công việc, N c H n
Ế. ¬* ợ N 2
du an hay cuộc sống. - Sy =
@ BAN co THE LAM GÌ? {OF QUY TRINH BRAINSTORM VỚI CLAUDE
Ý TƯỞNG KINH DOANH, SAN PHAM @ Hy XÁC BINH CHU DE
Tim ý tưởng mới cho san phẩm, dich vy hoặc mô hình T O Ban muốn brainstorm về van dé, du án
kinh doanh tiém nang. H hay lĩnh vực nao?
Ý TƯỞNG NOI DUNG, CHIEN DICH @ CUNG CAP THONG TIN BOI CẢNH
Lén y tuéng cho bai viét, video, podcast, chién dich ¡ Mô tả ngắn gon mục tiêu, đổi tượng, yêu cau,
marketing, social media... ¡ nguồn luc, pham vi.
¬ ˆ whe . r
ĐẶT CÂU HỎI GỢI MỞ SÁNG TẠO @ sO) YEU CAU CLAUDE DUA RA Ý TƯỞNG
Dé Claude dua ra nhiều géc nhìn va hướng di mdi ; Yéu cau số lượng ý tưởng da dang,
bạn chưa nghĩ tới. ¡ không giới hạn sáng tạo.
he ons, nr eu À. A n
pe Be ae tưởng khác nhau để tạo ra giải pháp ì n n
, - IY ® Vf LOC & BANH GIA |
LỌC & CHỌN Ý TƯỞNG TỐT NHẤT : —
Đánh gid, so sánh va chon ra ý tưởng kha thi, ¡ kha thi va chon ý tưởng tốt nhất. |
hiệu quả nhất. -
@ HÀNH ĐỘNG & TRIỂN KHAI
5 - - — ee <5 Chọn ý tưởng, lap kể hoạch va bat dau
— . hiện thực hóa.
S MEO HAY DE BRAINSTORM HIỆU QUA @ pro .K
PROMPT GOI Ý
© Không giới han ý tưởng - càng nhiều càng tốt. Z l i ae ểở n
@ Đửng đánh gid khi dang brainstorm. \ a, a ad oa ach 3 l n |
ẳ being a a ra Sok eS | © Bua ra 16 ý tưởng content hap dẫn cho kênh TikTok
Str dung cau hỏi "Néu... thi sao?” dé mở rộng. dành cho người mới bat dau dau tu.
@ Yéu cầu Claude dua ra ý tưởng dam né - táo bao. TA © Gợi ý 10 ý tưởng sản phẩm thién nhiên va môi trường
@ Sau dé mới loc va chon ý tưởng thực tế. ó tiém năng tai Việt Nam. :
© Nếu ban là chuyên gia marketing, hay dura ra 15 ý tưởng
= chiến dich quảng ba cho một ting dung hoc ngoại ngữ.
® KET QUA BAN NHẬN ĐƯỢC
@ 4 atl © 4
Nhiều ý tưởng sang tao, Giải pháp mới mẻ, Tiết kiệm thời gian, DE dang chon loc Tang hiệu nang thanh công
độc dao ! khác biệt L nghi da chiéu ý tưởng kha thi 1 cho dự án
HÃY ĐỂ CLAUDE TRỞ THÀNH ĐỐI TÁC SÁNG TẠO CỦA BẠN! Se:
y Ý TƯỞNG HAY HOM NAY - THANH CONG NGAY MAI! we')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('21', 'BAI 3 Í 3 KHOA HOC CLAUDE TU A - Z » * Claude
A - '' ae af A
i) LAP KE HOACH ae
rN 2 == |
la |
l ư v 7
. le) | WA
ấ —- ° a Ê X =
Pa - Kế hoạch rõ ràng - Hành động dễ dàng —z a
- - n ư — `
v= vf Claude giúp ban xây dung kế hoạch chi tiét, z
— (Ø khoa hoe va kha thi dé dat myc tiêu nhanh _.. = wy ;
E : hon, dé dang hon. 4S s ¬ ⁄
f =¬ Ñ \ ˆ r\ fe
@ BAN CÓ THE LAM Gi? Ì Í 2 uy TRINH LAP KẾ HOẠCH VỚI CLAUDE
GB KẾ HOẠCH NGÀY / TUẦN / THANG @ 4 XÁC ĐỊNH MUC TIÊU |
[HE] Xây dyng lich trinh lam việc va học tap phu hop ©) neuro mục teu cin aat dược,
với muc tiêu va thời gian của ban. i (Myc tiêu càng cu thé, kế hoach càng hiệu qua)
7] KẾ HOACH DỰ AN, SU KIỆN ® =| PHAN TICH HIEN TRANG \
5~@) \ Lập kế hoạch chi tiết từ A-Z, phan công nhiệm vy, H `Q Đánh gid nguồn lực, thời gian, ky nang,
theo dõi tiến độ. ¡ khó khăn và cơ hội hiện có.
x ae . |. P
yn LO TRINH HOC TAP, PHAT TRIEN BAN THAN ® eam XÂY DUNG KE HOACH :
alll | Thiết kế lộ trinh hoc tap, rén luyén ky nang ro rang, l ®-®° . Claude dé xuất kể hoạch chỉ tiết: công việc, |
do lường duge. h thời gian, nguồn lực, người phụ trach.
l e a
(=) PHAN CHIA CONG VIEC CHI TIET @) THỰC HIEN & THEO DOI
\e== / Chia nhỏ công việc thành cdc bước cu thé, l Triển khai theo kế hoạch, cap nhật tiến độ
đễ thực hiện va theo doi H thường xuyên.
~ THEO DOI TIEN ĐỘ & ĐIỀU CHINH @) X - ĐÁNH GIÁ & ĐIỀU CHỈNH
Review tiến độ, phat hiện điểm nghẽn va dé xuất FA - ánh gia kết qua, rit kinh nghiệm va Ị
điều chinh hiệu qua điều chinh kế hoạch khi cẩn.
X MEO HAY Q . @ vi vv prompt aol Ý
© Muc tiêu nén SMART: Cu thé, Bo lường được, > — ''® “Hay lap kế hoạch hoc tiếng Anh trong 3 thang cho người mdi bat dau.”
ie g ] cy pee K v a © “Lap kế hoạch tổ chức một sy kiện offline 100 người trong 2 thang.”
© Uutiên việc quan trong - tap trung vao kết qua. - ⁄Z A ˆ \
© Chia nhỏ công việc dé dé bat dau va duy trì động lực. ˆ . © “Xây dung kế hoach phat triển kênh YouTube chu dé công nghệ.”.
© Luôn dy phòng rũi ro va phương án thay thể. - ¢ 7 . “Hay lap ké hoạch kinh doanh shop 3D online trong 1 nam.”
fo Peat ints) = caller ier auc SX © "Tao ké hoạch kinh doanh online với vốn 10 triệu đồng.”
of = ® Ket QUA BAN NHẬN “a =
© ail sS
© © aul “ul =
Ké hoach ré rang, Tiết kiệm thời gian, Theo dõi tiến độ dé dang, Tang kha nang hoàn thành Ty tin va chủ dong
khoa hoc, dé thực hiện tang hiệu suat kiểm soát tốt muc tiêu trong moi việc.
. ˆ „ CÔNG THỨC THUYẾT TRÌNH5P ˆ -
s®s = ĩ 1
@ ‘ai Ee ca) iff
PURPOSE - MUC DICH PEOPLE - NGƯỜI NGHE PLAN - KẾ HOẠCH PRESENT - TRINH BAY PERSUADE - THUYẾT PHUC
Ban trình bay dé lam gi? Hiểu ho dé nói ding điều ho cn. Nội dung rõ rang, logic. Tự tin, rõ rang, cuốn hit. Truyén cảm hứng, tao hành dong.
KE HOACH TOT HOM NAY - THANH CONG NGAY MAI! w › =
.n.r Claude luôn đồng hanh cùng ban trên hành trình chinh phục mục tiêu. u , n ~')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('22', ', BAI ì 3 KHOA HOC CLAUDE TU A - Z “a %* Claude
1 ra 4 yv v
TOM TAT VAN BAN | :
=— |
⁄ NHANH CHONG | =e |
B 7 ah 4 oe Uy ƯN A
. Se (ee
⁄ Hiểu nhanh - Nắm gọn - Ứng dụng ngay — ⁄
d ái ai — %A :
Claude giúp ban tóm tắt moi loai van ban = Ss 7 )
như bai viết, bao cdo, tai liệu, sách... — — //
thành những ý chính súc tich, dé hiểu, E -. —- > Z OF á
_ tiết kiệm thời gian va nang cao hiệu suất.
40 Quy TRINH TOM TAT VỚI CLAUDE
G Banco THE LÀM GÌ? - n I :
— — a a CUNG CAP VAN BAN
‘y TOM TAT BAT KY LOẠI VĂN BAN Dan van ban hose tai lên file (PDF, DOCX,
| .*. Ú x : TXT...) cắn tom tat.
=] Bai viet, bao cáo, nghién cứu, hợp đồng, :
_ email, sch, tin tức.. XÁC BINH YEU CAU TOM TAT
H XN * Độ dai: ngắn / trung binh / chi tiết
TÓM TẮT THEO ĐỘ DÀI MONG MUỐN 3600g T hở kmuốn
Tóm tat ngắn (3-5 ý), trung binh hoặc chi tiết N 00/ 00108018
theo nhu cầu. + Tap trung vào nội dung nao (nếu có)
XÁC ĐỊNH Ý CHÍNH & LUẬN ĐIỂM CLAUDE PHAN TÍCH VA XỬ LY
yy Lam néi bat thông điệp cốt Idi, luận điểm a Claude doc hiéu toàn bộ van ban, xác định
— quan trong va bang chứng. ý chính, thông tin quan trong.
\ \ . TRÍCH XUẤT DU LIEU QUAN TRONG (a TAO BAN TOM TAT
(Oy ) Tim thông tin, số liệu, tên, ngày thang, sự kiện... Er) Trinh sy Rom tay 9 rang, mach lac, dung
- —“ một cách nhanh chóng. a myc tiêu ban yêu cau.
(Be TOM TAT DA NGÔN NGỮ © oS à emote
By | Tom tat van ban tiếng nước ngoài va chuyển. 2 C et G 6eba t u
H nga Sanguidegviewnose iougo lel) ~ — đạt chat lượng tốt nhất. :
Ổ (ỳ MEO HAY + @ Ví DỤ PROMPT HIỆU QUA
———ÃÚ © "Tom tat bai viét sau day thành 5 ý chính ngắn gon.” .
@ Yéu cau Claude liệt kê theo gach đầu dang dé dé theo déi. | - a Bubs ceo ney trong] khcởng 200tư,đập unaven)
cết qua va khuyến nghị.
@ Vợới tai liệu dai, hay tom tat từng phan rồi tổng hợp lai. | @ “Hay tóm tat chương 3 của cuốn sách nay, néu rõ luận điểm.
''® Dùng câu lệnh: "Tom tat với 5 ý chính, mỗi ý không qué 20 tu”. n à i m n
4 se" es © “Tom tat tai liệu sau va trích xuất các sé liệu quan trong.”
@ Nếu can, yéu cầu Claude tao thém bang biểu hoặc so dé. i =Tém edt nội Buổn cude hop sau Gal thant cdcihanh dong
chính can thực hiện.”
''$› KET QUA BAN NHẬN ĐƯỢC
CỘ G eB anal ig)
Tiết kiệm thời gian Nam nhanh ý chính Tăng khả năng Nang cao hiéu suất Dua ra quyết định
đọc hiểu và thông tin quan trọng ghi nhớ học tập & làm việc chính xác hơn
- SO SANH: HOC VỚI CLAUDE VS TU HOC THONG THUONG ) + MEO HOC HIEU QUA VỚI CLAUDE
TIÊU CHÍ HỌC VỚI CLAUDE | _ TỰ HỌC THONG THUONG © Dat cau hdir6 rang, cu thé.
- Giithich Ei machln, tho yduchs | Kho hibunfutailbu pc to | | @ Yêu cẩu vi du kêm theo thựp t6
Vidụ minh hoa Phong phd, thực tế, gin gũi Ít vi dy hoặc qué ly thuyết. r s 4
Twang tae png. dp te méo_—| Philim kến nhiệ nguôn c Menem veiginigue n l - :
Cá nhần hóa Điều chỉnh theo mụctiểu & rnh độ - Một nội dung cho tat ca © On tập dinh ky với câu hỏi trắc nghiệm. c
Tiến độ hoe Có định hướng 8 lộ tein rõ rằng DB lan man, mat thei gian - - \ @Ý Ap dung kiến thức vào bai tập hoc dự án thực tế.
0 BAI TAP THUC HANH KET LUAN aa Pa ae
1.. Chon một bai viết ban dang muốn hidu. ạ ñ A
2, Vist prompt yu obs tom eat Claude a gia s Al tuyét vai gdp ban hiểu sãu, hoc nhanh, nhớ lâu
U 5. Ap đụng vào moe tinh huớng the 6 x .. Hồi dling - Học ding - Hiểu său ~ Ung dung giới!
⁄Ø HỌC MỌI THỨ NHANH HON, HIỂU SAU HON VOI CLAUDE ~ GIA SU Al CUA BAN! :')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('23', 'á BAI Ñ Q|ẹ KHÓA HỌC CLAUDE TỪ A - Z d 2& Claude
2 THUYẾT TRÌNH T —
0 Ấ 1 @ s
="
"/ TỰ TIN & AN TUONG /F call
Truyền tai rõ rang - Kết nối cam xúc - Tao anh hưởng —
(i N N T : 5 J
l 1 Claude giúp bạn chuẩn bị nội dung, cấu trúc slide, )? B r»
ES _uyén tap va cai thiện ky nang thuyét trình dé | ì ,
WP) thuyết phục va tao ain tượng mạnh mẽ. iS /
| J 3 a s
(Ø BAN CO THE LAM Gi? . .Ở qUY TRINH THUYẾT TRINH VOI CLAUDE :
F Wie. x "Ta ee ee w
( XÂY DUNG NGI DUNG THUYET TRINH @ Sf XÁC BINH MUCTIEU & ĐỐI TUNG
=A Tao dan y, bố cục logic, thông điệp rõ rang, T CJ Bạn muốn đạt điều gì? Người nghe là ai?
\ = đúng trong tam. i Théng điệp chinh cẩn truyền tai?
l (fe) TAO SLIDE AN TƯỢNG @) ‹m G U
\ =) Goi y thiết ké slide dep, tối giản, dé nhìn, ¡ =q andỆWỂ° Ge sey cin
— hỗ tro truyền dat hiệu qua. H ý phụ, dan chung, sé liệu.
-X ˆ @ fale] THIET KE SLIDE
(®» LUYEN TAP & KICH BAN ĩ Đề xuất bố cục, tiêu đề, hình ảnh, biểu đồ,
4 _ / Teo kich bin nói câu mỡ du - kết thức, ¡ mau sắc phi hgp.
—“. luyện tap Q&A. =, = m
@, woven TẬP & HOÀN THIEN
| “ầÌ). KỂ CHUYỆN & DAN DAT ¡ 2 ac vaiautnan’lce ven aver tan
al Biến dữ liệu, ý tưởng thành cau chuyén ¡ nhận góp ý và chỉnh sửa.
— ® (2) CHUAN BI Q&A
¬ a ¡ Dy đoán cau hỏi thường gap va gợi ý
| (ges) XỬ LÝ TINH HUONG i ca tral thuyết phe.
\ MMM | chuẩn bi câu tra lời cho câu hỏi khó, 6) ars, Ạ i
— s * TRINH BAY & TAO ANH HUONG
È ⁄ Ty tin trình bay, kết nổi cảm xúc, truyền cảm hing
ê - va kêu gọi hành động.. 2
X MEO HAY N @ ví DỤ prompt HIỆU QUA
Q n ge N IE i n H d a c H ” W R
© Giữ thông điệp don gidn: 1 ý chinh = 1 slide. iN ¬ z H <.. .
m ã ;_ VY —Ä
— SW ee ie ae Cit Bt
ough dbs Lh; © “Gợi ý thiết kế 10 slide cho bai thuyết trinh vé sản phẩm mới." „ :
© Cian sit, tung th và dặ bu ht ể ht nổ người gh. a= © - “Đóng vai khan gid va dat 10 cau hoi khó, toi sé tra lời.”
(© ‘etn ngh me Thm et hog tp vu ei hie dtog, rt Se ‘© "Gop ý cách trinh bay để thuyết trình thuyết phục hon.” —
— L n CON GATTI TU EU TEINUIED EE —ccm n
cN i ai
L all
PURPOSE - MỤC DICH PEOPLE - NGƯỜI NGHE. PLAN - KE HOẠCH. PRESENT - TRINH BAY PERSUADE - THUYẾT PHUC
Ban trinh bay dé lam gi? Hiếu ho dé néi ding điều ho cản. Nội dung rõ rang, logic. Tự tin, rõ rang, cuốn hút. Truyền cam hing, tạo hành dong.
“SO SANH: HOC VỚI CLAUDE VS TU HOC THONG THUONG ) ˆ. MẸO HOC HIỆU QUA VOI CLAUDE . E
TIEU CHÍ. HỌC VỚI CLAUDE TY HOC THONG THUONG @ Đặt cau hỏi rõ rang, cu thé. \p
Gii thich Deri machi heyevcév Kron kis pc tap c { ;
Vidụ minh hea Phong pha, thực tế, gần gbi Ít vi dy hoặc qua ly thuyết c. ee ee ` —
Tương tác Hoi đáp ngay, gii dip thác méc Phai tim kiếm nhigu nguồn Ch ae eae l n
Cánhánhóa _ Điểuchinhtheo ve tiê & tinh db Một nộ dung cho tt cd © Sn tanidinhky với cấu Bội tráoñghiậm <ai>
_ Tiến độ hoc Có định hudng 8 lộ trình rõ rang Dé lan man, mất thai gian © Ap dung kién thức vao bai tap hoặc dy án thực tế. L
2s BAI TAP THUC HANH | KET LUẬN
Petre ae Claude la gia s Al tuyệt vời giúp ban hiểu sâu, hoc nhanh, nhớ lau
0-7] 3. Yeu chu Claude gid tich theo 2 cách khác nou [ae va áp dung hiệu qua kiến thức trong hoc tap va công việc
4, Tém tắt lai bang sơ dé tu duy. | rà A A . ai if .
5. Ap dung vào bai thayét tinh thye tế 2 Hiểu ding - Hoc ding - Hiểu sau - Ung dung giới! )
THUYẾT TRÌNH HAY KHÔNG CHỈ LÀ NÓI GIỎI, x .
4 MÀ LA TRUYỀN DAT DUNG - CHẠM CẢM XÚC-TẠOẢNH HƯỚNG! . S C')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('24', 'B Al = 3 KHOA HOC CLAUDE TU A - Z ; 23 Claude
. 4 . ñ
-————
21 NGHIENCUU& |@ —
==
J ˆ z ~ ^ l J A
a — |
; Hiểu sâu - Phan tích chuẩn - Quyét dinh ding % * 525 Y
Claude giúp ban nghiên cứu thông tn nhanh — ‹ “OR -
ull chóng, phan tích dữ liệu chính xác, rut ra ý s —= x b
insight và hỗ trợ ra quyết định dựa trên dữ liệu. M ˆ 4 }⁄4
= —Z
@ BAN CO THE LAM Gi? Ở QUY TRINH NGHIÊN CỨU & PHAN TÍCH VỚI CLAUDE
4 4 ˆ - “ ˆ s . SÀ
(Q) TIM KIẾM & TONG HOP THONG TIN a af XÁC BINH MUC TIEU NGHIÊN cứu -
Nghiên cứu chủ dé, tng hop thông tin từ nhiều ñ CJ Ban cần tim hiểu van dé gi? 1
“© nguồn, trich xuất y chính. i Cau héi nghiên cứu là gi?
Fav A, Ws : . -T |
i PHAN TICH DỮ LIEU @) THU THẬP & CUNG CAP DỮ LIEU
oll Phan tích bang sé liéu, phat hiện xu hướng, ĩ Cung cấp dif liệu, tài liệu, link hoặc mô tả nguén
¬ so sánh, tim toán va giải thích kết qua. dữ liệu cn phan tích.
fì) TRỰC QUAN HÓA DỮ LIỆU G) PHÂN TÍCH & XỬ LÝ DỮ LIỆU
N ⁄ Tao bang biéu, biếu dé (cột, tron, đưỡng...) Claude lam sach, phan loại, tinh toán, so sánh,
aa rõ rang, dé hiểu. Ũ phát hiện xu hướng và điểm nổi bật.
;Ộ''_ RÚT RA INSIGHT & ĐỀ XUẤT @) TRUC QUAN HOA KET QUA
.. Tim ra điểm quan trong, co hội, rủi ro va dé xuất al Tao bang biéu, biểu dé, infographic dé trinh bay
~~ giải php phù hợp. kết quả rõ ràng, dễ hiểu.
SOAN BAO CAO NGHIEN CUU ® ỳ ˆ Ý-. RUT RA INSIGHT & DE XUẤT
EI) Viết báo cáo, tom tat nghiên cứu chuyên ,Q` Giải thích ý nghĩa kết qua, rit ra insight quan trong
| - — nghiệp, có cau tric. va dé xuất giải pháp/chiến luge.
) w BÁO & KỊCH BẢN © v—)| BAO CAO & HANH DONG
À<. Dự đoán xu hướng, phân tích kich bin Ý= | - Tom tat thành bdo cdo hoàn chỉnh va dé xuất
_.. và đánh gid tac động \ bước hành động tiếp theo. o
XĐ MEO HAY : A @® Ví DỤ prompt HIỆU QUA b
© Dit cau hỏi cu thé, rõ rang va dữ liệu/ mục tiêu. @ “Phan tích bang dữ liệu doanh thu theo thang va chi ra xu huéng.”
© Cung cấp dữ liệu cing day đủ - kết qua cang chính xát ''® "So sánh hiệu suất ban hang giữa 3 khu vực trong quý 1.” ¢
@ Yêu cầu Claude giải thich “vi sao” dang sau kết qua. @ “Tao biểu dé thé hiện co cấu chi phi của công ty nam 2024.”
@ Sừ dụng biểu dé dé phat hién xu hướng nhanh hon. a @ “Dya trên dữ liệu, hay dé xuất 3 giải pháp tang trudng doanh thu.”
G Deseret ate urge © “Viết bao cáo nghiên cứu thi trường ngành F&B tai Việt Nam.” J
Mu lalicac inelart quan t ong đá api 010 Goữà © “Dy bdo doanh thu 6 thang tdi dựa trên dữ liệu hiện tai.”
® kẾT Qud BAN NHAN ĐƯỢC : :
Oo wf 6 . E . .Ø
Hiểusâuvấnđể Phân tích chính xác, Dữliệutrực quan, - Insight gid tri, Bao cáo chuyén nghiệp, _.. Tăng hiệu suất,
thông tin day đủ phat hiện xu hướng dé hiểu để xuất thiết thực ra quyết định nhanh tao lợi thé cạnh tranh
DU LIEU NOI = CLAUDE GIÚP BAN HIỂU - HANH DONG DAN LOI THANH CONG! Ne
„ Ñ s me . ¬ BY V4
⁄ CLAUDE GIÚP BẠN LÀM CHỦ MỌI VẤN ĐỀ VỚI DỮ LIỆU! . ;..a')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('25', 'BAI 3 KHOA HOC CLAUDE TU A - Z * Claude
` ` — — —
RI N H BAY & —" ‘.,
! ø'' 7
—
; Ấ =n
⁄ TAOSLIDEANTUONG; ˆ @- “2
—S ˆ. .. Rõ ràng - Hap dan - Thuyết phục : a 9
frum “eee ;
j Claude giúp ban tao slide chuyên nghiệp, - ] Ss
| bố cục dep mat, nội dung súc tích va truyền tai : è
\ thông điệp hiệu qua trong moi bai thuyết trinh. s N A . _% lhì
= - S è ⁄
& / .
@ BANCO THE LAM Gi? à 40 QUY TRINH TAO SLIDE VỚI CLAUDE ~
- s N
| LEN DAN Y & CAU TRUC BAI TRINH BAY @ (ee XÁC BINH MỤC TIÊU & ĐỐI TƯỢNG |
Xay dung cấu trúc theo logic, bam sat mục tiêu va = G ), Bạn mmuốn truyén tai diéu gi?
thông điệp chính. i —
ố THIET KE NOI DUNG SLIDE | Q (B) LEN DAN Y & CAU TRUC
© | Viết nội dung ngắn gon, súc tích, dé hiểu, T vE=Ì/ Claude giúp ban xày dung dan ý,
phù hợp từng slide. | ~~~ chia nhỏ theo luận điểm & luồng chuyển.
Pay) CA CUOR sear @) 2) son NOI DUNG TUNG SLIDE
Đề xuất bố cuc slide, vi t tiêu đề, hình nh, : Vit nl ding hah g@n lam Bồi baeychinn,
e . E plies H ding bullet, số liệu, vi dy.
Ga)) cHoN& or Ý HÌNH ANH, BIEU ĐỒ @ T IN N I ĐỒ
Gợi ý hình anh minh hoa, biéu dd phù hợp . [Pa ca nines ae, hbo
Sens tayo. dé minh hoa va tang sức thuyét phục.
DE XUAT FONT CHU & MAU SAC i
(Aa) Tu vấn font chữ, mau sic hai hda, dễ doc, ® Gp) HETKEBO cục & Phone cÁch
phù hợp chủ đề. h Lựa chon bé cục hợp ly, khoảng mau sac
- ¬ ! hài hòa, hiệu ứng phù hợp.
4) TAO HIEU UNG & CHUYỂN SLIDE ¡
7 Cobden Pigs fis © () KAMARA eOANGTIEN |
inh tế, chuyên nghiệp. =
- nese Ra soat ky, tối uu nội dung va hiệu ung.
@ KIỂM TRA & TOI UU iW Mh Xuất file PowerPoint/Google Slides. (~)
= Kiếm tra tinh nhất quan, chinh sửa va tối uu s
N nội dung, bổ cuc. ; //J \ = =-—XXÐP=””“S“Pv——<
Ö MEO Hay — (Ø ví DỤ prompt HIỆU QUẢ - v
''® Mi slide nên hướng về 1 ý chính. Ý q @ “Tao dan ý bai thuyết trình 10 phút vé Al trong doanh nghiép.” |
@ Dũng tiêu d8 ngắn gon, an tượng. ;1 ẵ . “Viết nội dung cho slide 2: Thực trang ting dung Al tai Việt Nam.”
CO Seg thie Ege ety b E Gà \ | "Goi bS cue va mau séo phi hop cho bai thuyéttrinh sin phim.”
SP ae eee ea © “Tao bi acts sim doa thy 3 mg"
@ Ding maut a4 a bas nde chad’, 4 2 @  “Viết tiêu dé an tượng va rút gon thông diệp chính tung ý.” Ss !
@ Kếtthúc bang slide tóm tt hoặc kêu gọihành dong. - n 19 “Tối wu nội dung slide nay cho ngắn gon va thuyết phục han.” a)
⁄ = 3# 5 NGUYEN TAC SLIDE AN TƯỢNG
eo
1.RÔ RANG 2. TRUC QUAN 3. NGAN GON 4, NHẤT QUAN 5. THUYẾT PHUC. |
Théng điệp rõ rang, Hinh anh, biếu dé Nội dung ngắn gon Font, mau, bố cục Nội dung cham cảm xúc,
dé hiéu ngay. minh họa sinh dng. méi slide 1 ý chinh. thống nhất. kêu gọi hanh động.
;ìg SLIDE ĐẸP KHÔNG CHỈ Ở HÌNH THỨC - MÀ Ở THÔNG ĐIỆP BẠN TRUYỀN TẢI! ỔTằ
7 CLAUDE - TRO LY DONG HANH TAO NEN NHỮNG BAI THUYẾT TRINH XUẤT SAC! . èS =)')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('26', '- \ 3& KHOA HOC CLAUDE TU A - Z & Claude
BAI | — —S
DUNG Y & VIETNOIDUNG | T==—.
T —
~ ~ x G n G NẠ /
THUYET PHỤC & HAP DAN | 22 RV
h | = |
„ Logic - Thuyét phục - Cham cam xúc - Giữ chân người doc = S N l
Claude giúp ban xây dung dan ý mach lac, SSS
viết nội dung hap dn, thuyét phục va phù hợp 4 à b — .
myc tiêu cia ban, mau sấc tượng người doc. “Ne — y. +
@ BANCO THỂ LÀM Gi? 483 QUY TRINH DUNG Ý & VIET NOI DUNG VỚI CLAUDE
DUNG DAN Y CHI TIET Í td XÁC ĐỊNH MỤC TIEU & BOC GIẢ
Xây dung dan ý logic, day đủ ý chính - ý phy, @ ( G ) Ban viết để làm gi? (thông tin, persuade, ban hang...)
mach lac va dé hiéu. Ai la người doc mục tiéu?
XÁC DINH THONG ĐIỆP CHÍNH (2 NGHIEN CỨU & THU THẬP Ý TUGNG
Lua chon thông điệp cốt lôi va muc tiêu của bai m Claude gợi ý chủ dé, định hướng, góc nhìn
dé tap trung nội dung, i va dif liệu liên quan.
5 „ u s m % C =
HIỂU ĐỐI TƯỢNG ĐỘC GIẢ 3) ch DUNG DAN Ý CHI TIẾT
Phan tich nhu cau, nỗi dau - pain point SF Chia bố cục: mé bai - than bai - két bai
để viết đúng “điểm cham". i = và các ý chính - ý phụ.
TAO HOOK AN TƯƠNG 4 ¬ VIẾT BẢN THẢO NỘI DUNG
Goi mé van dé hấp dan, thu hut va giữ chan 4 ¬= pay icenieing phan theo dan ý: viết rõ rang,
người doc ngay tir đâu ¡ logie va thuyết phục.
@ ) VIẾT NộI DUNG THUYẾT Phuc 5) ) VDC e ar
Ầ Phat triển ý, lập luận chat chẽ, dẫn chung i Be d c chien yea l hình annie
thilyet prvclolallighsti 6 tang độ tin cay va cham cam xúc.
CC THEM CAM XÚC & CAU CHUYỆN | Q) Key . ủbTõ''_ƯUầ ae
hence 1 dụ thực tế để ta ¡ laude giúp bạn rà soát logic, ngữ pháp
. I ư T n 7 GỊD độ mạch lạc và mức thuyết phục.
— H à A s „ R
KET LAI MẠNH ME - KÊU GOI HANH DONG è Fee U N
Téng két én tượng va dua ra CTA rõ rang, 8 Hoan thién ban viet, tối wu tiêu dé, meta, CTA
thie edyhartidongingay: va sẵn sang xuất ban.
* MEO HAY : „ ) ÍÍ @ Vví DỤ PROMPT HIỆU QUA = B
© ất dâu bing một cảu hd, con số hose cdu chuyén gay toma. \ I / ‘© “Viết dan ý chi tiết cho bai blog chủ dé “ lợi ich của théi quen doc sách''
@ Sử dung cấu trúc “van dé - giài pháp - lợi ich”. FF > . ‘© "Vist bai giới thiệu san phẩm gidp tang doanh sé ban hang,
@ Ding ngôn ngữ don giản, gan gùi va tap trung vào loi ich. WY r. ‘© "Scan email thuyết phục khách hang sử dung dich vy cua công ty.”
.. doan mat y chinh r6 rang. “ . ..
@ va ra bing ching: sé liệu, nghién cứu, vi du thực tế. _= ®. “Viết kịch bin video ngắn 60s cho chủ dé [chủ dé ban muốn)."
< ==
@ Kết lại bang thong điệp mạnh mé va kéu gọi hành động. Ẻ`ì © "Tao Linkedin post chuyén nghiệp về thanh tựu của doanh nghiệp ” F- z
: 5 › CAC YEU TỐ TAO NEN NỘI DUNG HAP DAN - ã
Thu hot từ tiêu đề, Mạchlạc,tươngthíh ©  Nộidung gi tri Cham cam xúc & kết nối Bang chứng thuyét phuc CTA rõ rang
thông tin gay to mo vadingmyctitu |  &cótinhtincậy '' với người doc ¡ (vidy, số liệu,casestudy) | thúc day hành động
- NỘI DUNG HAY KHONG CHỈ Ở HÌNH THỨC - MÀ Ở THONG ĐIỆP BAN TRUYEN TẢI! „ b
CLAUDE - TRỢ LY DONG HANH TAO NEN NHỮNG BAI THUYẾT TRINH XUẤT SAC! Š X ,')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('27', 'ee 3 KHOA HOC CLAUDE TU A -Z > Claude
BAI —
? 2 x ^ i
CHINH SUA & HOAN THIEN | — |
BAI VIET CHUYEN NGHIEP | == =| | 6
G Rõ rang - Mach lac - Thuyết phục - Dung mục tiéu = oe / NA
⁄ . See af,
.- Claude giúp bạn nâng cấp bài viết từ bản nháp . a=
Ị =2 thanh nội dung hoàn chinh, mach lac, thuyét phục Ễ \ o> ~..
L —Ø va phù hợp với mục tiêu sử dung. : : Ziff ese
@ BAN CO THE LAM Gi? {2} QUY TRINH CHINH SUA & HOÀN THIEN VỚI CLAUDE
CHINH SUA NOI DUNG & CHINH TA @ G XÁC BINH MỤC TIÊU & BOC GIA
Phat hiện va sửa lỗi ngữ pháp, chinh ta, - * Bai viết nhằm mục dich gi?
du cau, lỗi dung từ. ¡ * Đối tượng người doc là ai?
| ¡ * Giọng van & phong cách mong muốn?.
LÀM RÕ & RÚT GỌN | A
Diễn dat lai cho rõ rang, mach lac hon ©) Pun BAN My) G0 ee UCE
r. s .. ae H * Cung cấp nội dung hiện có.
no 0008001 n T N H | ¡ 1 Nêu rd yêu cầu cân chinh sửa & tối wu.
| H
- A G Q) Priors nan oen an of
SiềU ba tang sức thuyét ie u 5 + Claude phan tích edu trúc, logic, ngôn ngữ.
| H * Xác định điểm mạnh & diém cn cai thiện.
DIEU CHỈNH GIỌNG VAN & PHONG CACH @ CHINH SUA & CẢI THIEN NOI DUNG
Viết theo giọng chuyên nghiệp, than thién, l T a honed
l n A L „ ngữ pháp, dién dat.
thuyết trình, hoc thuật, marketing... ¡ sp N. N GI
DIEU CHỈNH THEO DOI TƯỢNG i * Bổ sung, sắp xếp, tinh gon khi c&n.
Tuy chinh nội dung phù hợp với độc gia, GJ TANG TINH THUYẾT PHỤC
ngành nghề, mục tiéu truyền thông. : * Bố sung luận diém, dẫn chứng, sé liệu,
Fe ¡ í du, kêu gọi hành động (nểu cn).
AM BAO MỤC TIÊU BAI VIET : .
@) Kiếm tra va tối ưu dé bai viết dat ding © DIEU CHỈNH THEO ĐỐI TƯỢNG & MUC TIÊU
mục tiêu: thuyết phục, thuyết phục, hanh động... ¡ + Tay vào ngành nghề, myc tiêu & độc gid.
| * Dam bao phù hợp dé dat hiệu qu:ả cao nhất.
KIỂM TRA TONG THE -
© _.. @ RA SOÁT & HOAN THIEN CUỐI
\ bao tinh hoan thiện cuối cùng. ÿ H * Kiếm tra tng thé: logic, mach lac, nhất quan.
⁄ * DE xuất phién ban tdi wu nhất dé str dung,
y MEO HAY bint @ ví DỤ prompt HIỆU QUA
& Nêu rõ myc tiêu: cải thiện gi, ding phong cách nao. > , a © “Chỉnh sửa bai viết sau cho rõ rang, mach lac va chuyên nghiệp han.”
sir dung câu enh “vai tr "Ba a bién tp ven.” — m
Ø Yeu céu phin hi chi tiét vB logic & machlac. S Ñ s “Viếtlại theo phong cach thuyết trình, phil hop với slide.”
c n n n ina we icin am % + “Điều chinh giọng van than thiện, để hiểu han cho khách hang.”
@ Chia nhỏ yêu cau: từng phan ¬ dé kiém soát. = an điế . ke thành 66 1h mé hon.” ĩ
''Ø Dua vi du (nếu có) dé Claude hiếu bối cảnh tốt hon. K< >», > pene fe pes ig ee ee X ae fa =
Ø Đọclại&hiệuchinhcuốicùng dé cánhảnhóa, | s “Kiếm tra toàn bộ lỗi ngữ pháp, chính ta va để xuất phiên ban tối u s
đã 6 NGUYÊN TẮC BÀI VIẾT CHUYÊN NGHIỆP N
1.RÕ RANG 2.MẠCH LẠC 3. PHU HOP 4, THUYET PHUC 5. NHAT QUAN 6. DUNG MUC TIEU
Thong điệp rõ rang, Cấu tric logic, Phi hợp đối tượng, Luận điểm mạnh, Giọng van, phong cách. Nội dung dat mục tiêu,
8 hiểu, khong mo hi. liên mach va hop lý. agit cảnh & mục tiêu. dain ching thuyết phục.. thống nhất xuyên suốt. thúc déy hành dong,
ẩ BAI VIET TOT KHONG CHỈ TRUYỀN DAT - MÀ CON TAO ANH HƯỞNG! SZ
a A Ẩ ¬ A . z ˆ S ,
CLAUDE GIÚP BAN HOÀN THIEN TUNG CAU CHU DE CHAM DEN NGƯỜI DOC!')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('28', 'f BAI ) 3€ KHOA HOC CLAUDE TU A-Z > Claude
| x ˆ ;¬ l
. lẠ Ạ
: LAM VIỆC VỚI FILE& '' — ||,
| | i z ~ ˆ | ==
= 2 TRÍCH XUẤT THONG TIN | E +)-— ự
* 1 lâ a wat, 5 x < . 2 ae
: Tai lên - Phan tích - Trích xuất - Tom tắt - Xuất kết qua == he WZ
_ — SS
Claude giúp ban lam việc hiệu qua với nhiều | = ZA
loại file: doc, hiéu, phan tich, trich xudt dữliệu | ˆ - ế i N N
và tạo kết quả giá trị từ nội dung. - 3
{@ BAN CO THE LAM Gi? Quy TRINH LAM VIỆC VỚI FILE TREN CLAUDE
TAI LEN NHIỂU LOẠI FILE ©) TAI FILE LEN CLAUDE
Hỗ tro PDF, DOCX, TXT, CSV, Excel, L + Kéo tha file vào khung chat hoặc chon biểu tượng @
PPTX, hinh ảnh (JPG, PNG) va nhiều hon. ] + Claude sẽ doc va xử lý nội dung file
ĐỌC & HIỂU NỘI DUNG Cầ XÁC ĐỊNH MỤC TIÊU
Hiểu nhanh nội dung file, nam được ý chinh, T * Ban cần thông tin gi từ file?
c v r n n . ¡ H * Trích xuất dif liệu, tom tắt, phan tich hay
a 4 ¡ ¡ so sánh?
TRÍCH XUẤT DỮ LIỆU ©) DUA YEU CAU RO RANG
(sy gi es Bin Cstncea tne : + Nêu cu thé nội dung cin tim hoặc phan tích.
can thiết theo yêu cau. l l * Chi định định dang kết qua mong muốn.
: 5 7 : ¡ ¡ (VD: bang, bullet, báo cáo, tom tắt 5 ý,..)
PHÂN TÍCH & SO SÁNH ¡ i _= - -
Phân tích nội dung, so sánh các thông tin, GD CLAUDE PHÂN TÍCH & TRÍCH XUẤT
phat hiện xu hướng va điểm nổi bat. T * Claude doc file, hiểu ngữ cảnh va xử ly di liệu.
- 5 ¡ * Trích xuất thông tin chính xác theo yêu cau,
TOM TAT NOI DUNG i X ee:
— 6) NHAN KET QUA & RA SOAT
ban mong muén. ñ * Xem kết qua, kim tra độ chính xác.
- : ¡ + Yeu cu điểu chình nếu cn thiết.
TRẢ LỜI CÂU HÔI TỪ FILE _ r -A
(@) Tra lới cau hôi chi tiết dua trên nội dung 6) TINH CHINH & MỞ RONG
4 ĩ * Yêu cầu chỉnh sửa, cập nhật, bé sung,
5 ¡ l so sánh, liên kết nội dung.
CỒ TỔNG HỢP & VIẾT LẠI ¡ ¡ « Claude tiếp tục tối uu kết qua,
Viết lai, diển dat lai nội dung theo phong cách 2 - ries A
L u v CỦ XUẤT & UNG DUNG KET QUA
.. : + Xuất file dưới định dang phù hop,
XUẤT KẾT QUẢ TIỆN LỢI + Sử dung cho bao cáo, thuyét trình, kể hoach,
L Xuất ra dang bang, bullet, bao cáo, email, | 4 email, tai liệu.
kế hoạch, slide va nhiều dinh dang khác. N =
“Qe MEO Hay way, @ ví DỤ PROMPT HIỆU QUA
''@ Đặt mục tiêu rõ rang trước khi yêu cầu Claude. . „ _ . © "Tém tat nội dung chính của file nay trong 10 ý ngắn gon.”
@ Nêu yêu céu cy thé về nội dung, dinh dang va phong cách. . — © “Trich xuất bang dữ liệu va xuất ra file Excel.” F
@ Sử dụng định dang file phù hop dé dat hiệu qua tét nhat. . oa © “So sánh số liệu giữa 2 khu vực trong bio cdo.” 1
@ Uu tiên file van ban, bang biéu rõ rang. if cl fe. © “Phan tích xu hướng tir dữ liệu trong file va dua ra nhận định.”
@ Luôn kiém tra va đối chiếu thông tin quan trong. - => © “Viét email bao cdo kết qua từ file nay.” peal |
|@ Đọc li và yêu cBu điều chính nếu cắn tối uu kết quả, ˆ Š XZ 2 (© “Chuyến bing dữ liệu thành infographic,”
CÁC LOẠI FILE CLAUDE HỒ TRỢ
PDF Docx XLSX/CSV PPTX ¡ TXT HINH ANH KHAC
Tai liệu PDF | Word document . Excel, CSV „ PowerPoint , Vănbảnthuẩn . JPG,PNG,WebP . Nhiếu fflh dang
= EE Ee s hae
, CLAUDE - TRỢ LÝ ĐẮC LỰC GIÚP BẠN LÀM CHỦ MỌI LOẠI FILE NS
Ể BOC NHANH - HIỂU SAU - TRÍCH XUẤT CHÍNH XÁC - UNG DUNG HIỆU QUA! z Se')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('29', 'BAI . | ( 3 KHOA HOC CLAUDE TỪ A -Z ” % Claude
1 ˆ ~ ˆ z (= as
/ — I
26 NGHIÊN CUU & PHAN TÍCH @ . —— |
3
ˆ ry ˆ | =
N ⁄ THU THẬP & TONG HOP THONG TIN j —- ofl ACY
Tim kiém - Danh gia - Phan tích - Tổng hợp - Trinh bay — n n N
ˆ FED Claude giúp ban thu thập, phan tich, đánh giá va = = Sy rj
=Q, tổng hop thông tin tir nhiều nguồn dé hỗ trợ hoc tap, Q—=— _—  Ác⁄c 2
hiên cứu va ra quyết định hiệu qua. eZ > S
` no 2 / >
@ BANCO THE LAM Gi? { 83 QUY TRINH NGHIÊN CỨU & PHAN TÍCH VOI CLAUDE
4 ” A A 5 4
TIM KIẾM & THU THẬP THONG TIN @) , . XÁC BINH MỤC TIÊU NGHIEN CỨU
Tim kiém thông tin từ nhiều nguồn đáng tin cậy . (G) \ * Ban can tim hiểu điều gi?
và chủ đề bạn quan tâm. * Câu hỏi nghiên cứu là gì?
| |
ĐÁNH GIA NGUỒN THONG TIN ©) THU THAP THONG TIN
| Xác định độ tin cay, tinh chinh xác va mức dO a Q * Tim kiém tir nhiều nguồn trước nhau.
cap nhật của nguồn. | + Uv tién nguồn uy tin, cập nhật.
PHAN TÍCH & SO SÁNH (3) ĐÁNH GIA NGUỒN
Phan tích dữ liệu, số liệu, quan điểm khác nhau. Ĩ * Nguồn có đâng tin cậy không?
So sánh điểm ging va khác biệt. | * Thông tin có chính xác, khách quan không?
| XÁC ĐỊNH XU HƯỚNG & MỐI LIÊN HỆ (4) {}) Genet :
Nhận điện xu hướng, nguyên nhân, tác dong if L n ch ipo GÚ G go peu, quan Giếmg
va mối quan hé gia các yéu td. | * So sánh, đổi chiéu các gidng va khác.
í TỔNG HỢP & RÚT RA KẾT LUẬN G) ) TONG HOP THONG TIN
Tổng hợp thông tin quan trong va rut ra T S eng lọc thong inven ogg:
nhận dinh, quyết định | + Tổng hợp theo chủ dé, ý chính.
LAP BAO CAO & TOM TAT ©) IB X eee
u n S Ỹ + Trả lời cau hoi nghiên cứu.
lạo bao cdo, bao cdo tóm tat gon, súc tích, | Fa. A A -
n | + Nêu két luận dua trén bang chứng.
dé hiểu. J
Ọ ĐƯA RA GỢI Ý & GIẢI PHÁP ©) Za.) ee ¬
n T Y I I i —* Viết bdo cáo, tóm tat, hoặc thuyết trình.
ề xuất giải pháp, khuyến nghị dua trér | i ea AM, OK
phan tich dữ liệu. | c Trích dan va ghi nguồn day du.
TRÍCH DAN & GHI NGUỒN (8) By) 5 A SÀT aoe THIEN UU
Hồ trợ trích dần theo chuẩn các nguồn gw Kem tra logic, tinh nha quan, chính xác.
l tham khảo chính (APA, MLA, Harvard..). J n ev u ện rà Chuẩn b d Š sở longs
Ö MEO HAY r ì 7) vi DY PROMPT HIEU QUA .
ehƒƒ{ƒ”ƒƒÐÐ”ƒƒTTƒJƒƒỂ”Ể , dye, tng hop tu 5 nguén uy tn.”
@ Sir dung tir khóa chính xác, kết hợp bộ loc nang cao. — L © “So sánh lợi ich va han chế của nang lượng mat trời va gid.” ¡
— .- 9 “Phân tich xu hướng thi rường thương mai diện ti tại Việt Nam.”
@ Ưu tién nguồn chính thống, bao cáo, nghién cứu hoc thuật. © \ ‘© “Téng hợp cdc nghién cứu về tic động của mang xã hội đến giới tré.”
Ø Ghi chi co hệ thống dé dé tổng hop va déi chiểu. SS (© “Viết báo cáo tóm tắt vé biển déi khi hậu va giải pháp Ung phd.”
v ÿ Bling quên trịch dẫn nguồn dé dam bio tith hoc thuật, - — ˆ | , ọ "Tao slide thuyét trìn tóm tit kết qué nghiên cứu nay.” ;
Í CONG CU HO TRO NGHIÊN CỨU HỨU ÍCH
H qum (= ⁄ `
S Publfled arXiv Scopus > ] | W Z
Google Scholar PubMed | arXiv Scopus Web of Science | Wikipedia Zotero
Tim kiếm hoc thuat Co sédisliguy sinh  Kho luv trữ khoa hoc ''CSDL hoc thuat lớn, CSDL hoc thuật: | Tống quan nhanh, Quan ly tai liệu,
miễn phi, hiệu qua. uy tin, da dang. mở, miễn phi. da lĩnh vue. uy tin toàn cầu. Ũ tham khảo ban iu, trich din chuyên nghiệp.
& ) DN YX WIN S JI A ?
& NGHIEN CỨU THONG MINH - PHAN TICH SAU SAC - QUYET ĐỊNH CHÍNH XAC! Ne
ụ. : .. CLAUDE DONG HANH CUNG BAN TRONG MỌI HÀNH TRINH TRI THỨC! . Š, À')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('30', 'ˆ BÀI è 3 KHOA HOC CLAUDE TU A -Z > Claude
` ` † —
27 TAO & TRINH BAY . .. —
⁄ Ê Ê = =
- . ⁄2 PRESENTATION CHUYEN NGHIEP [= @ [hl]
Ạ $ ” ae ñ ra Ñ .iU=< t
‘ 4 Ý tưởng - Cấu trate - Ndi dung - Thiét ké- Trinh bay |Ủ = K all My
⁄ == n =⁄
== Claude giúp ban tao slideấntượng,nộidunglogic, - ì — . aN
thiết ké dep mat va trình bay thuyét phục với déi tượng. : IP
IQ Từ ý tưởng đến bai trình bay hoàn chỉnh. 2 7 é LO „
@ BANCO THE LAM Gi? {6} QUY TRINH TAO PRESENTATION VOI CLAUDE
LEN Ý TUONG & XÁC BINH CHU BE 7 XAC BINH MỤC TIÊU & ĐỐI TƯỢNG
Goi ý chủ dé hấp dan, phù hợp mục tiêu ũ)- N ttn n m T I
m C : / jan muốn truyén tai thông điệp gi?
] * Đối tượng người xem la ai?
XÂY DỰNG DÀN Ý & CẤU TRÚC H
Tao dan ý logic: mé dau - nội dung - két luận, (2) C= LEN Ý TƯỞNG & DAN Ý
Cm nese LO Ey: _——_—" ggiy cht 8, ¥ tutng chinh,
SOAN NOI DUNG SLIDE | * Xây dung dan ý tống thé cho bai trình bay.
Viết nội dung ngắn gon, súc tich, : ˆ n
trong tam, dé hiéu cho ting slide. (3) SOAN NOI DUNG CHI TIET
¬ ã St + Viết nội dung cho từng phan / slide.
(al) TAO BIEU ĐỒ & MINH HOẠ Ị + Dam bao ngắn gon, rò rang, logic.
Gợi ý loại biếu dé phù hợp, mô ta cách l
: thiết lap va thiết kế trực quan ndi bat. (4) 1 THIET KE SLIDE
GỢI Ý HÌNH ANH & ICON a N * Ggiý bố cye; mau sc, font chữ.
é xuất hinh anh, biểu tượng phù hợp | © Tối wu hình anh, biếu dé, hiệu ung phù hop.
chủ dé va thông điệp. J
@) Ineressecorsn: (5) Cc KỊCH BAN THUYẾT TRINH
Gợi ý bố cục, mau sac, font chit, phong cach l » Viét lời thuyết trình cho từng slide.
hiện đại chuyên nghiệp. Ị * Goi ý cách mở dau, kết nối va tương tac.
ẩ1.D KỊCHBẢN THUYẾT TRINH (6) C) RA SOAT & HOAN THIEN
Met speakentpotes | (hichUigguelinc))) : © Kiếm tra tinh logic) nhdtquén, chính xác.
cau dan va kết thúc ấn tượng. i ` ñ 5 A
| » Tối uu thông điệp va thiét ké.
CHINH SUA & HOAN THIEN l s a ;
Conti E N E N n n (7) 4.) XUẤT FILE & TRINH BAY
va tinh thuyết phục cua bai trinh by. - ( * Xuất PPTX, POF hoặc Google Slides.
XUẤT FILE & CHIA SẺ \ * Trinh bay ty tin va chuyên nghiép.
Hướng dan xuất file PowerPoint, PDF
Ñ hoc Google Slides, chia sé hiệu qua.
Qe MEO HAY matey @® ví DỤ PROMPT HIỆU QUA —
@ Xác định mye tiêu rõ rang ngay từ du. ee ¬% © "Tao dan ¥/ 10 slide vé presentation Al marketing cho nha ban lé."
@ Nội dung ngần gon - du ý - dung trong tam. . Á @ “Viết nội dung cho slide 3: Loi ich của Al trong giáoọc.”
''@ Sirdung visual (biểu dé, icon) dé tầng suc thuyết phục. \/ © "So sinh chién lược A va B bang bang biéu va infographic.”
@ Uu tiên bố cục don giản, mau sắc hai hoa. : WÐn ]
@ Kiếm tra Idi chính ta & logic trước khi trình bay. > i - — a © “Viết speaker notes cho bai thuyết trình vé du an X.”
@ Thực hành trước khi trinh bay dé ty tin hon. << > © “Gợi ý slide mở dau ấn tượng cho buổi workshop nội bé.”
( CONG CU HO TRO TAO & TRINH BAY = Ì
ot, ea
Ø R @ b ím Go .
PowerPoint Google Slides Canva Beautiful.ai Prezi Tome Figma Slides
Thiết ké chuyén nghiép, D8 chia sẽ, tam viée Khomấudadạng,  Tựđộngtốiưubốcục, Trình bay phi tuyến tinh, Tạo slide storytelling, Thiết ké linh host,
higucrgmarh me) nhômlnh host thit ế nhan slide thong minh - tạouinghikmthiebit - - hiệndạ,thuhdt dng bộ 48 nhóm
í fh Ý TƯỞNG RO RANG - SLIDE AN TƯỢNG - TRINH BAY TU TIN - THÀNH CONG THUYẾT PHUC! ®
. CLAUDE DONG HANH CÙNG BAN TAO NEN NHỮNG BAI PRESENTATION BINH CAO! > @')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('31', 'BAI \ _k KHÓA HỌC CLAUDE TỪ A - Z & Claude
2 —
QUAN LY DU AN & CONG VIEC J -. =:
G pee * [ưuTam] l .
LAP KE HOACH & THEO DŨI TIEN DO; — == ø
, ˆI : ñ . 2 - Ñ : = WWW
Kế hoach - Phan công - Theo dõi — Điều chỉnh - Hoan thành = = N VA
— m .. \
Claudegiúpbanlậpkếhoạchdựán,phâncha ] = :- ⁄ I 22 =
8® céng việc, theo dõi tiến độ, phan tích rủi ro va : = — XZ -
L đưa ra giải pháp để dự án thành công. —X — 2 N
(Ø BANCO THE LAM Gi? {2} qUY TRINH QUAN LY DU AN VỚI CLAUDE
# -. hh Sa ne Venn. Ẩ ˆ Fe nes: .
Í LẬP KẾ HOẠCH DỰ ÁN Spy XÁC ĐỊNH MỤC TIEU DY AN
| Xác dinh muc tiéu, phạm vi, thời gian, @ © + Dự án nham dat được điều gi?
nguồn lực va các mốc quan trong. [ = » Tiêu chi thành công la gi?
- ¡ Tig E X s l , x 4 r
PHÂN CHIA CÔNG VIỆC ỘD LẬP KẾ HOẠCH TỔNG THỂ
Chia nhỏ công việc, giao nhiệm vu cho \ 2 + Xác định phạm vi, thời gian, ngân sách.
thành viên phù hợp, xác dinh thai han, ¡ — * Liệt ké cdc giai đoạn va mốc quan trong.
- ¡
TẠO LỘ TRÌNH & TIẾN ĐỘ @) 22) PHAN CHIA & GIAO VIEC
Xây dung timeline, Gantt chart, : @, l Chia nhỏ công việc theo giai đoạn.
kanban hoac checklist chi tiét. ! kấi * Giao người phù hợp và theo dôi.
Ặ 4 5
THEO DÕI & CẬP NHẶT TIẾN ĐỘ @) XÂY DUNG LO TRINH & CONG CỤ
Kiểm tra tinh trang công việc, r `x\j * Tạo timeline / Gantt / Kanban / Checklist.
cap nhật kết qua va % hoan thành. ¡ ~ * Chon công cu phù hợp dé theo déi.
: ¡
PHAN TÍCH RỦI RO | 6) C) THEO DOI & CẬP NHẬT
Nhận diện rủi ro, đánh giá tác động T `⁄ _ * Theo dai tiến độ, % hoàn thành công việc.
và để xuất biện pháp giảm thiểu. i * Cập nhật va hoan thanh các giai doan.
BAO CAO & DASHBOARD | 6) A) NHAN DIEN & QUAN LY RUI RO
Tao báo cáo tiến dé, biéu dé truc quan, | T 2 + Xác dinh rủi ro có thể xảy ra.
tổng hợp số liệu nhanh chóng. i * Dé xuất giai pháp phòng ngừa/khắc phục.
GIAO TIẾP & PHỐI HỢP @ (ul) BAO CAO & TRUYEN THONG
Soan email, thông bdo, bién ban hop, T x ⁄ * Tao bao cáo tiến dé dinh ky.
cap nhật cho nhóm. . * Cap nhật va thông báo cho các bên liên quan.
ĐIỀU CHỈNH & TỐI ƯU (3) ĐIỀU CHỈNH KE HOACH
Dé xuất điều chỉnh kế hoach, tối ưu T "J/ * So sánh kết hoạch & thực tế.
nguồn lực và thời gian. | H * Điều chỉnh nguồn lực, thời gian khi can.
ĐÁNH GIÁ & TỔNG KẾT G;J Qe) HOAN THANH & TONG KET
‘Anh gid kết qua, bai hoc kinh nghiệm, I Ø _ . Danh gid két qua va so sánh với mục tiêu.
N dua ra dé xuất cho dy an tiếp theo. 7 ! - * Rút kinh nghiệm và lên kể hoạch tiếp theo.
-Q: MEO HAY n @® vÍ DỤ PROMPT HIỆU QUA
''® Mỏi kế hoạch nên có mục tiêu r6 rang & do lường được. > 1 á » “Lap kế hoạch chi tiết cho dy án marketing trong 3 thang.”
!® Sử dung công cụ trực quan dé dé theo déi tiến độ. Bo » “Tao timeline va phan công công việc cho dy án website.”
© Cap nhật tién độ thưỡng xuyên, t6i thiểu mỗi tuần. ˆ \l ⁄ » "Theo dõi tiến độ dy án va cập nhật bang tiển dé.”
@ Uu tién việc quan trong, tap trung nguồn lực chinh. al » “Phan tich rủi ro dy án va dé xuất biện pháp giám thiéu.”
@ Dy phéng rit nindt 10-20% thei gian & ngan sich. È== >» "Tao báo cáo tiến độ tuần nay dang dashboard.”
@ Luôn giao tiếp minh bach va kip thời với đội nhóm. ea 2 » "Banh gid kết qua dy án va rút kinh nghiệm cho lan sau.”
_ CÔNG CU HO TRO QUAN LY DU AN
#EW trello Se Asana - Notion S Clickup (Pa) (ene M wet 3 Slack
Quan lý công viée Lap ké hoạch & Quan lý dy an & Quan lý dy dn. Lap ké hoach & Lam việc, chia sé Giao tiếp & phối hợp
bing Kenton - phẩncôngcôngviệc - - tàiiệu ình hoạt toàn én theo dsichuyén stu |  &oạngtốconine nhóm hiệu au
í QUAN LY HIỆU QUA - THEO DOI CHAT CHE - HOÀN THÀNH XUẤT SAC! . 7
l CLAUDE ĐỒNG HÀNH CÙNG BẠN TRONG MỌI DỰ ÁN! I')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('32', '( BAI ì 4ỂKH(''JA HỌC CLAUDE WA-zJ = 3Claude
„ MARKETING & TRUYEN THONG J @) — —
I 2 Gg) Ê Ế ô Ê Ả ‘5 —s ""
| 57) LÊN KE HOACH & TAO NOI DUNG HIEU QUA | ;= - alll): 6
= Nghiên cứu - Chiến lược - Nội dung - Kênh - Bo lường ~ Tối uu N | WA
Claude giúp ban nghiên cứu thi trường, xây dung a N —
- : (N SN
chiến lược marketing, tạo nội dung sáng tạo, N = ¡ > 7 ì
lên kế hoạch truyền thông và đo lường hiệu quả, : \ Ề ⁄ Nay
Ñ để dat myc tiêu kinh doanh. a _ X = - m
{ŠØ BANCO THE LAM Gi? # QUY TRINH MARKETING VỚI CLAUDE
NGHIÊN CỨU TH] TRUONG ] XÁC ĐỊNH MỤC TIÊU
Phân tích thị trường, xu hướng, đối thủ, | * Mục tiéu chién dich la gi?
khách hang muc tiêu. ¡ * KPI quan trong nhất la gi?
PHAN TÍCH KHACH HANG @) NGHIEN CỨU & PHAN TÍCH
Xay dung chan dung khách hang (persona), -. s * Nghién cứu thi trường, đối thd, xu hướng.
insight, nhu cầu, hành vi. * Phân tích khách hàng mục tiêu.
XÂY DỰNG CHIẾN LƯỢC G>D XÂY DỰNG CHIẾN LƯỢC
Đẻ xuất chiển lược tổng thé: mục tiêu, - * Xác định thông điệp, định vị thương hiệu.
thông điệp, định vi, ké hoạch hanh động. Ị * Chon chiến luge phù hop mục tiêu.
LÊN KẾ HOẠCH MARKETING @) LEN KE HOACH TONG THE
Lap ké hoach theo giai đoạn, phan bé ngân sách, T [3] + Lap timeline, hoat động, ngan sách.
nguồn luc va timeline. 4 * Phan công công việc, nguồn luc.
TAO NOI DUNG SANG TAO 6) TAO NOI DUNG & Ý TƯỞNG
Viết bai, slogan, kich ban, idea bai viết, H * Tạo nội dung sáng tạo cho từng kênh.
email, thông cáo, quảng cáo... ¡ * Thiết kể thông điệp, kịch bản, CTA.
LEN Ý TƯỞNG CAMPAIGN 6) TRIEN KHAI & PHAN PHỐI
Dé xuất ý tưởng chiến dich độc đáo, | T + Bang tai nội dung dung kênh, đúng thời điểm.
chủ dé, hoạt động, thông điệp. * Chay quảng cáo, hop tac KOL, PR...
CHỌN KÊNH & PHÂN PHỐI © DO LƯỜNG & BAO CAO
Tu van kênh phù hgp: Facebook, TikTok, 3 * Theo déi KPI, phan tích số liệu.
Email, SEO, PR, KOLs, Ads... 4 * Bao cdo két qua chiến dich.
LAP LICH NOI DUNG TỐI UU & DIEU CHỈNH
Lap content calendar, ké hoach dang bai | ? * Banh gia điểm mạnh, điểm yếu.
theo ngay/tuan/thang. } * Điều chinh chién lược va nội dung.
o) DO LƯỜNG & PHAN TÍCH ©) RUT KINH NGHIEM & NHAN RONG
Phan tich KPI, hiệu suất chiến dich, . n b c h c n T G
c à | ¡ * Mé rộng quy mô hoặc nhân ron
TỐI ƯU & CẢI TIẾN | : eed .
‘Dé xuất gidi pháp tổi uu, điều chỉnh KPI /
- - vànãng cao hiệu qua. ee
%gØ‹ MEO HAY uly, @ vi DỤ PROMPT HIỆU QUA
© Mỗi kế hoạch cén rõ thong điệp va gis tr c6t I 2 Ae > “Lập ké hoạch marketing 3 thing cho sản phẩm mới.
@ Can cứ trên di liệu & insight thực té. —& = > "Phan tich SWOT cho thương hiệu [tén thương hiệu).”
@ Uu tin kénh pha hợp với khách hang myc tiéu, CN c > Viết content ý tưởng cho chiến dich ra mat san phẩm.”.
@ Dat KPI SMART: Cy thé - Bo lưỡng - Kha thi - Liên quan - Thời han. . > "Tao content calendar thang 6 cho fanpage Facebook.”
@ Theo dõi, phan tich & tối ưu lién tục. > “Viét kịch ban video quảng cao 30s cho TikTok.”
''® Kết hợp sang tao nội dung & phan tich dữ liệu.. > "Phan tich hiệu qua chiến dich dựa trén dữ liệu KPI.”
CONG CU H6 TRO MARKETING & TRUYỀN THONG „

œ F | ^~ © @ B IN
Meta I Google Analytics Google Trends Canva Mailchimp Hootsuite Notion
pusiness[ouite) Phan tich website Nghién cứu xu huéng - Thiết ké hinh anh, Email marketing Quan lý mang xa hội Quan ly du an &
Quin prin eh g hành v ngườidùng tim kiém poster, banner 1 automation da kênh kế hoạch nội dung
( i CHIEN LƯỢC RO RANG ~ NOI DUNG AN TƯỢNG — TRIỂN KHAI HIEU QUA - KET QUA VƯỢT TRỘI! "Ỹ"''

.. CLAUDE ĐỒNG HÀNH CÙNG BẠN TRONG MỌI CHIẾN DỊCH MARKETING! ma? Si')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('33', 'Á KHOA HOC CLAUDE TU A - Zz) % Claude
CHAM SOC KHACH HANG & CRM | =~
ae n
1248 Dye ts
ˆ 2 ¬ “ Ñ Pa 467
XÂY DUNG TRAI NGHIỆM KHÁCH HANG XUẤT SẮC J „ n
THẤU HIỂU — KẾT NỐI — HỖ TRỢ — GIỮ CHÂN — PHÁT TRIỂN ||H V2
⁄ — l K = N-
Claude giúp bạn xãy dựng quy trình chăm sóc Zz_—.S ix |
khách hang chuyén nghiép, quan ly thông tin hiệu qua ˆ E X XO
à tao trai nghiệm vượt trội dé git chan & phat triển ix — » “t
khách hang lau dai. gel NN
2 . é SS 7 R H n mes , N
@ BANCO THE LAM Gi? 1 QUY TRINH CHAM SOC KHACH HANG VỚI CLAUDE
QUAN LY THONG TIN KHACH HANG THU THAP & LUU TRU THONG TIN
Luu & quan ly toàn bộ thông tin khách hang + Thu thập thong tin từ nhiều kênh.
day du, chinh xác. " * Luu trữ vào CRM an toan, day du.
THAU HIEU & PHAN LOAI KHACH HANG @) PHAN TICH & PHAN LOAI
Hiéu nhu cau, hanh vi, mức độ & wu tiên hỗ tro * Phan tich hành vi, nhu cầu, mức độ hai lòng.
cla khách hang. : + Phan loại theo nhóm, nhu cầu, gia tri.
HO TRO & GIẢI QUYET VAN DE ©) KET NOI & TU VAN :
Phan hồi nhanh chóng, gidi quyết triệt dé = fenaisongienhey one hoi, ih :
x h + Lang nghe & hiểu rõ van dé/nhu cau hỗ trợ.
GIAO TIEP BA KENH . @) HO TRO & xv LÝ YEU chu
Email, dign thoại, chat, mang xã hội... ĩ e n yêu ã n Ch n
đồng bộ & nhắt quan. Ú * Giải quyết tận tâm, đúng cam kết. :
XÂY DUNG CHƯƠNG TRINH KHACH HANG 6) ) ee: ies ney pe pe ñ
Teo diém, uu dai, qua tang dé khuyến khích ; . ae Rata sa ae ae a
SAL mote ¡ - Tạo trai nghiệm dé nhớ & hai long Ñ
n ae (7) THEO DÕI & DUY TRI MỐI QUAN HE
DO LUONG & ĐÁNH GIA HIỆU QUA © () + Theo dôi sau ban hang, nhác lich chim sóc.
Theo dõi KPI, CSAT, NPS & các chi số H * Gui nội dung hữu ich & Idi chic.
hiéu qua CSKH & CRM. J
7 . 7 @) GIỮ CHAN & KHEN THUONG
CHAM SOC SAU BAN HANG * Tri an, tang qua, uu dai đặc biét.
Theo dõi sau mua, hướng dẫn sử dung, : + Khuyến khích khách hang gan bó & mua thêm.
thu thap phan héi. :
EE ï C BO LƯỜNG & PHAN TÍCH
GIỮ CHÂN & NÂNG GIÁ TRỊ KHÁCH HÀNG * Do luéng sy hai long & CSAT, NPS.
Tang tan suất mua, nang giá tri vong đới ¡ + Phan tích du liệu dé cai tiến dich vu.
khách hang (CLV). - . - -
3 = : @) 161 UU & PHÁT TRIEN
@) BAO CAO & PHAN TÍCH DU LIEU + Cai tiến quy trinh & trai nghiém.
n Cent Cut Aine ns ln ieee ¡ + Phat triển san phẩm/dịch vy & gid tri mới.
dé ra quyét định. - : - r
TỐI ƯU & CẢI TIẾN KHÔNG NGỪNG RUT KINHINGHIEM & NHÂN RỘNG
Đề xuất nang cao chat lượng dich vụ ; pecgbalhocebachiewidichisau
9 g 4 : - A
À dựa trên dữ liệu & phan hỏi. ⁄ b n rong m inh i GG n Gẻ
@ˆ MEO HAY vt) Í Ø Vví DỤ PROMPT HIỆU QUA N
© Phin hồinhanh <5 phit dé năngcaotriinghiệm. à ⁄ 4 © Viết email chim sóc khách hang sau khi mua hang. i
@ Cá nhan hóa theo tén, lich sử & nhu cầu khách hang, \ ) @ Tao kịch ban tu van & xử ly khiéu nai chuyên nghiệp.
@ Sử dung template & automation dé tiét kiệm thời gian. . @ Phan tich dữ liệu khách hang dé phan nhóm & dé xuất. ]
@ Do lường dinh ky & tối uu lién tục. . ''® Goi ý chương trình khách hang than thiết hiệu qua.
@ Luôn giữ lời hứa & minh bach trong moi giao tiếp. sS @ Tao bao cdo CSKH theo tuần/tháng với biéu dé trực quan.
@ Bién khách hang hai long thành khách hang trung thành. ''® Viết tin nhan ty dong cham sóc khách hang dip lễ.
CONG CU HO TRO CHAM SOC KHÁCH HANG
U iS) @ a> VÁ € Ø Lf)
HubSpot Zoho CRM Freshdesk Salesforce Zendesk Mailchimp Chatfuel Social Media
CRM & CSKH Quan lý & ty dong Hỗ trợ da kẽnh. ‘CRM mạnh mẽ Hỗ tra khách hing, Email marketing Chatbot Al cho Quan lý & cham sốc.
toàn din hóa quy tinh 4 tt ‘moron E ‘automation Messenger do kênh
( ;ỷ CHIEN LƯỢC TAN TAM - KET NOI BEN VUNG - GIỮ CHAN KHÁCH HANG ~ PHÁT TRIỂN DAI LAU! ®
7 CLAUDE ĐỒNG HÀNH CÙNG BẠN TẠO TRẢI NGHIỆM KHÁCH HÀNG XUẤT SẮC! QE? |')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('34', 'i - an U
| -CLAUDE CO-WORK: - . Jat
. Ù, x ¡
LÀM VIỆC THÔNG MINH - TĂNG NĂNG SUẤT - TẠO GIÁ TRỊ VƯỢT TRỘI Ý vf)
Claude. Ể Ạ 1vượr TRO! \ \ OSS NZ
— Jk 10 TRANG TINH GON - UNG DUNG THỰC CHIEN - DE HOC DE LAM \ - ~ we
(1) CLAUDE C0-WORK LA Gi? (2) CLAUDE HO TRO ĐƯỢC Gi? (3) WORKFLOW LAM VIEC VỚI CLAUDE
sci i liếc: khiều | } - .W . —] _X
© Claude Co-Work là cách ban Viết & soạn thao: email, bao cáo, bai viết, ^ ® ‘AT MUC TIÊU
làm việc cing Claude như ‘content, kịch bản.. ac dinh rõ ban cần gi, kết quả mong muốn..
= một đồng nghiệp Al thông minh, B ‘Tom tat & phan tich: tai igu, bai hep, ) @ suo ViỆc cho cLAuDE
aN © Claude hiểu ngữ cảnh, phan ich (=I thông tin, dỡ liệu... Mô ta yêu cầu rõ rang, cung cấp ngữ cảnh.
“iq n trong nhiều công vi Nghiên cứu & tim kiếm: thi truéng, đốithủ,
J pe đ x n | | A- i b u u (=) @)_NHAN KET QUA & KIỂM TRA
(9) wtesctnhanh ching va cio 1d . @\ oc, đánh gid va chon phan phủ hợp.
N - eS [SE] tớp kếhneeha ene: cng vie, aan, ;
.. TEETER IE H3 E3 marketing, nội dung.. ey (@) YÊU cAu ĐIÊU CHỈNH
äY i Ĩ
A Ả. .X a ee Brainstorm & sáng tao: ÿ tưởng, giải pháp, 4 foe ho ate 08 eae b
.. z Y Giãm sai sốt chiến luge dt phá. (@) HOÀN THIEN & UNG DUNG ;
1 Tip trung vio việc quan trong BR) TY động hóa: tạo checklist, SOP, bidu mẫu, Sử dung kết qua va tiếp tục cdi tin
= - ) template, công thức. :
Claude không thay ban ~ Claude giúp ban lam tốt han! Lap lai quy trình - Kết qua ngay cang chat lượng!
(4) PROMPT HIEU QUA CHO CONG VIEC (5) CLAUDE CHO DAN VAN PHONG (6) CLAUDE CHO MARKETING & CONTENT
— - c 24 cola ial dhhùn y N u b n c 4
CONG THỨC PROMPT VÀNG Í VÍ DU EMAIL: soạn email chuyên nghiệp, lich suf, CONTENT SOCIAL: bai ding Facebook, Zalo,
Rao l i gatas thuyết phục Linkedin, TikTok
cy (Claude déng vai ai2) với 10 năm kinh nghiệm.. MEETING NOTE: tém tat cuộc hop, BLOG & SEO: viét bai chuẩn SEO,
@ MỤC TIỂU Hãy viét bi quing cáo trích xuất ÿ chính, action items. ©) outline, meta description...
(8ạn cần 9i2) sin phẩm nước ép detox ¢ | , oe
2 poten aaa, Ta BAO cho: tạo báo cáo nhanh, rõ rang, QUANG CAO: tiêu dé, mô ta, nội dung ads
B®) NGỮ CẢNH day dé dữ liệu.. Facebook, Google, TikTok.
@ Thóng tn én quan) thuyết phe, kêu og inh dng
e % KE HOACH: lap kế hoạch tuần/tháng/dự án, D KICH BAN VIDEO: script YouTube, TikTok,
@ YÊU CAU CHI TIET ĩ c chi tiết. video ngén, livestream... ie
AE (Nei dung, 6 nh li
(Nội dung, u MEO NHO SOP & CHECKLIST: xay quy trình, checklist Ý TƯỞNG: tao concept, campaign, nội dung iz
@ Pa RA MONG MUON : Ea Bai i? >) céng việc chudn chinh. J theo chi dé, trend. m
omeat gọng dtu, v d fray =
cing chinh xác! Van phòng nhẹ nhang - Céng việc trôi chảy! Tao nội dung nhanh — Hay - Bing insight!
(7) CLAUDE CHO SALES & CSKH (8) CLAUDE PHAN TÍCH DU LIEU 20 PROMPT MANH NHAT (GOI Ý)
KICH BAN SALE: kich ban tu vấn, chốt sale, fea) XỬ LY EXCEL/CSV: doc, phan tich, © Viết bai quảng cáo © Viết báo cáo KPI
xử ly objection. tam sach di liệu. © Viết content bin hang © Phan tich di liệu Excel
CHAM SOC KHACH HANG: trả Idi khách, PHAN TICH KPI: doanh số, traffic, hiệu suất, © Viết email chốt don © Tạo slide nội dung
‘email follow-up, tin nhần. chi phi, lợi nhuận. © Kich ban tu vấn \ Viết mo taisin phim
(CRM & DATA KH: phan loại khách hang, BAO CAO TY BONG: tao bao cáo nhanh, © Tóm tắt tai liệu dai @ Vist quing cao Facebook Ads
ghi chú, lich sữ tương tac. biểu dé, nhận xét. © Lap ké hoach marketing  ® Kich ban video ngan
(® FOLLOW-UP: nhắc lich, chăm sóc sau mua, & INSIGHT: phát hiện xu hướng, van dé, © Phan tich d6i tha © Brainstorm ý tưởng
NGưồi n be c E seen © Ý tưởng bai viết © Viết bai SEO
XỬ Ế yee phan hồi khéo léo, DE XUẤT HANH BONG: gợi ý giải pháp © Viết SOP / Quy tinh © Trả lời khách hing khó
Shuvenigeliknach hang : pee a n 42 . © Tao checklist céng việc @ Viết plan contenttháng -
Hiểu khách hang - Tang chuyển đối ~ Giữ chan lau dai! Dữ liệu không chỉ là số - Dữ liệu là cơ hội! Ding ding prompt - Claude trả lời như ban mong muốn!
(10) XÂY HE THONG AI CO-WORK CA NHÂN . - N —
1. XÂY HI ASSISTANT RIENG 2. TỰ BONG HOA CONG VIEC 3. QUAN LÝ CONG VIỆC THONG MINH 4, LIEN KET CONG CU 5. LO TRINH NANG CAO.
+ Huấn luyện Claude hiểu ban + Tự động soan email - Lap kế hoạch - Claude + Google Sheets + + Hoc mỗi ngày
+ Ngãnh nghề, myc tiéu + Tự động bảo cho o + Theo dõi tiến độ. v= Docs + Gmail + Calendar + # Thực hành liên tue
* Giọng vin, phong cách. + Tự động theo dồi KPI fo} + Us tién céng vide v= Notion + Trello + CRM. # Tổi wu prompt A)
+ Quy tinh, titauriing À ovata ro; Ố | 18wegge YY BRMB % Xây hệ théng A ing PA
LJ ¬ = Teo gid triton hon 4
v m mane
= ~ CONG CỤ HỖ TRO CRM & CHAM SOc KHÁCH HÀNG - ` ee ae
Hubspot Zoho CRM Freshdesk Salesforce wey Zendesk Mailchimp Chotfuel ¬ Google Forms
(@® Siren CT e, (v ee | @ cminoinne | 35 iiivornsensing r Ổ coassees | ©) craeraicho FF itoat ow ny
Marketing Sls, tobn dg, bat itn eke, est, call Mot mo nnn cyt ooh tw dbo9 hse Facebook stagram iu nhaoh eng
So _ — a GY ee -. — = Be ee
oF ¬ CHIEN LƯỢC TAN TAM - KET NOI BEN VUNG - GIỮ CHAN KHACH HANG - PHÁT TRIEN DAI LÂU! „ —- n
T CLAUDE BONG HANH CÙNG BAN TAO TRẢI NGHIỆM KHÁCH HANG XUẤT SAC! 2')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('35', '1|10] 9 CLAUDE CO-WORK SERIES Ì 0 .„ 3XClaude
: ® là 5 f
m 6 (9
TRO LY Al DONG HANH CUNG BAN x
TRONG MỌICÔNGVIỆC - % bẠ ee
= =
Q | cLAUDE C0-WORK LA Gi? = ˆ¬ Al ) A
L | 55 .
Claude Co-Work la cach ban lam việc cling Y pwn R ˆ Ƒ
Claude - Al thông minh, hiểu ngữ cảnh va Q VI SAO NEN CO-WORK VOI CLAUDE?
đồng hanh như một cộng su thực thu. - S N XN E N ISN mame
Claude không chi tra loi, ma con phan tích, TIẾT KIEM THO! GIAN |
dé xuất, sáng tao va giúp ban hoàn thanh Tang tốc công việc gấp nhiéu lan với Al.
công việc nhanh hơn, tốt hơn. C 2
TANG NANG SUẤT
N B Xử lý nhiều việc hơn, chất lượng hơn.
ry CLAUDE PHU HOP VỚI Al? : :
N T n n N , ~ H „ ˆ ˆ
| Ø Nhân vién van phòng, quan ly | “Y- SANG TAO KHONG GIGI HAN
- | > Dua ra y tưởng mdi, góc nhìn da chiéu.
qd Marketer, Content Creator z +
fii. Sales, Cham sóc khách hang CHINH XAC & DANG TIN CAY
- Phan tích dif liệu, lap luận logic, rõ rang.
i Sinh viên, Giang viên, Nha nghién cứu : ai
& Freelancer, Chủ doanh nghiép PHAT TRIEN BAN THAN :
z s T N.Nm Ñ Học nhanh hơn, hiểu sâu hơn mỗi ngày.
f Bất kỳ ai muốn làm việc thông minh hơn! = 2
/Zr«& - %* R đ
* CLAUDE CO THE GIUP BAN LAM Gi? Ễ = 5
x ⁄ - ˆ \ ¢ n oOo
9)
á| =ull
VIẾT&SÁNGTẠO  PHÂNTÍCH&  EMAIL&GIAOTIẾP  QUẢNLÝ& | NGHIÊNCỨU& =» TỰ BONG HOA
Bai vit, kich ban, Bo A Soan email, tra lai | LAP KE HOACH HOGTAE Toi vu quy trình,
content, ý tudng... Dữ liệu, biểu dé, dé xuất, follow-up... Ké hoach, timeline,  Tóm tat, tra cứu, workflow, template...
insight, báo cáo... | checklist, SOP... hoc nhanh, hiểu sau. |
Ñ K n N #x. A VĂN
Claude không thay ban - Claude giúp ban lam tốt hon! = z
{ Lam việc théng minh hon hôm nay, dé có kết qua vượt trội ngày mai. 4 Ễ t')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('36', '2/10 S& CLAUDE CO-WORK SERIES : Claude
all \
x ` # ; &
2 .(n¬ÿ)p È
H 1~ /
D s `
ñ a aE aA = .T
Trợ lý AI đa năng - Hỗ trợ bạn trong mọi khía cạnh công việc — I''A
inn ih ( f
4 thẩ ax ˆ ˆ ^ L X. x 2g , J - °
ỄỀ Claude có thé đồng hanh cùng ban ở hau hết các nhiệm vu % N / x WỞ
- u /
trong công việc hang ngay | \ Aa i MY
— — ama
= {al )?
- PHÂN TÍCH & NGHIEN CỨU & LAP KE
VIET & SOAN THẢO (02) rÝ nh (03) 4 pPAKE HOADH S Ế
: XỬ LÝ DỮ LIỆU TỔNG HỢP QUAN LY CONG VIỆC (05) Cee
: HỖ TRỢ KHÁCH HANG
=— = a
= l = —
= = v=
= ol = ¬ Jo
~ . a
+ Viết bai, email, báo cáo + Phan tich chi số, sé liệu * Tim kiém, nghiên củu thông tin «+ Lap kế hoạch, timeline + Soan email, tin nhắn
* Soan thao van ban + Tao biểu dé, bang biéu + Tổng hgp tai ligu, báo cáo + Tao checklist, SOP + Tra lời khách hang
ehinyenigoniae «Tom tit, rat r insight + Tom tét nội dung dai + Giao việc, theo dõi tign d6 chuyên nghiệp
* Viết nội dung sang tao + Xử lý tinh huống, khiểu nai
Vídụ: Vidụ: Vidụ: Vi du: Vi du:
“Viết email xin hợp tac “Phan tich file Excel doanh “Tóm tat 20 trang tai liéu “Lap kế hoạch trién khai “Soan tin nhắn phan héi
voi déi téc về dy án mới.” số va dua ra nhận xét.” thành 1 trang ngắn gon.” sy kiện trong 2 tuần.” khách hang không hai long.”
SANG TAO MARKETING & HO TRO SALES HOP & LAM VIEC TY BONG HOA &
NOI DUNG QUANG CÁO l NHÓM TÍCH HỢP
1
ae ⁄ Í flỉJ ;
K g s ÊÌj ogee) @ › xa
= aan)
+ Brainstorm y tưởng * Viết quang cdo, mô ta SP * Viét kich ban ban hang * Tóm tat cuộc hop * Tao template, quy trinh
+ Viết content, kich ban + Lên chiến dich marketing + Xử lý tir chối, phan đối + Ghi chi, action items + Hỗ trợ tich hop công cu
+ Bat tén, slogan, concept gữconi y n 0 * Tao tai ligu chao hang + Chuẩn bi slide, tai ligu + Tang hiệu suất lam việc
thi trudng
Vi du: Vi du: Vidu: Vidụ: Vidụ:
“Gợi ý 10 ý tưởng content “Viét mẫu quảng cdo Facebook “Viét kịch ban CSKH “Tom tat cuộc hop va liệt ké “Tao quy trinh onboarding
‘cho san phẩm mdi.” cho san phẩm skincare.” qua điện thoai.” các việc can lam.” nhan sự mdi.”
u CLAUDE CO-WORK DANH CHO AI? - @ Lol ÍCH KHI LAM VIỆC VỚI CLAUDE
© NHÂN VIÊN VAN PHONG = - < TIET KIỆM THO! GIAN Sp CHÍNH XÁC & TIN CAY
> . Tối ưu công việc hành chinh, bo cáo, email, kế hoach.. | EX) Flos thinh cong viée Gl Ti@hatin raktana/(onic
fod MARKETER & CONTENT CREATOR nhanh hon gp nhiều ln. dé kiểm chung.
‘Sang tao nội dung, chạy chiến dich, phân tích hiệu qua... = -ˆ
ĩ Ä TĂNG NĂNG SUẤT yA\__ KÍCH THÍCH SANG TAO
2 Se ee eG Rae cH Be it di Lam được nhiều việc hon | “wy ‘Bua ra nhiều ý tudng mới,
ut vấn, chốt dan, cham sóc va giữ chan khách hang. ñ đ u E | đ 1
*R- QUAN LÝ & LANH DAO = / =
Ta quyét inh nhanh, theo dõi KPI quảntrị độ nhóm GIẢM sal SOT Í TIẾT KIỆM CHI PHI
FREELANCER & CHU DOANH NGHIEP Pours O Gg I N 9 U
Ề N - A „ ee i dam bao chat lượng. tối ưu ngân sách.
Tiết kiệm thời gian, giảm chi phi, tang nang suất vượt trội. z
66 Claude khéng thay ban - Claude giúp ban lam tốt hon!
Hay dé Al trở thành “đồng nghiệp” dang tin cay của ban mỗi ngày. . ”
/')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('37', 'GRO) ( X‹ CLAUDE CO-WOR SERIES = _ Claude
WORKFLOW LAM VIỆC . « ñ 2
: Ne )

- @; BƯỚC BON GIAN - HIEU QUA - TIẾT KIỆM THỜI GIAN ZZ =

| Lam viéc cling Claude giống như có một céng su thông minh. =A : |! Al Q =

Quy trình 5 bước dưới day giúp ban dat kết qua tốt nhất! = — v

N A - Ầ
ĐẶT MỤC TIÊU ® GIAO VIỆC NHẬN KẾT QUẢ YÊUCÄU (5 ) HOÀN THIEN &
RÕ RÀNG CHO CLAUDE & KIEM TRA DIEU CHỈNH UNG DUNG
TỊ ọ | Ị : & MỞ RỘNG - ũ
=9
4 » == we -

L | — -. I n 4

i c đ onc giz ° Mist promptrö rùng 1 Doc ky kết qua Claude tra về +» Yeu cẫu chỉnh sta chi tiét «Hoan thiện nộ dung/tai liệu

1+ Kết qua mong muốn la gi? * Cung cấp bối cảnh, .+ Kiếm tra tinh chinh xác :+ Bổ sung thông tin néu cắn * Ung dung vào công việc

+ Đối tượng, ngữ cảnh, E U 3 E n S HÊ © Mỡ rộng, đào sau them  Lưu kại để tai sử dyn

thời gian? + Nêu format mong muốn spi ad , ee

(Myc tiêu: Myc tiêu: Muc tiêu: Mục tiêu: Mục tiêu:

Claude hiéu ding Claude thực hiện ‘Bam bao kết qua chat lượng. Két qua ngay càng tốt hon, ‘Dua kết qua vào thực tế,
van dé cua ban __diing huéng . va sat với nhu cau day du hon. J tao gia tri

- x MEO LAM VIỆC HIỆU QUA VỚI CLAUDE | {- ® VÍ DU MINH HOA: LEN KE HOACH CONTENT
RO RANG & CU THE a DAT MỤC TIEU . “Tôi muốn lên kế hoạch content
Cang rõ rang, Claude càng hiểu sau Ban muén lên ké hoach > 30 ngày dé ra mat san phẩm A
va tra Idi chinh xác. content cho san phẩm A. cho khách hang trên Facebook.”
CUNG CAP ĐỦ NGỮ CẢNH (2) GIAO VIEC CHO CLAUDE “San phẩm A là kem dưỡng da
‘Du cảnh cang day dủ, kết qua cng chat lượng. Cung cấp thông tin: san phim, —> | cho nit 25-36 tuổi, thién nhiên,

đối tượng, khách hang, mục tiéu.. mirian lan da. Mục tiêu tang
YEU CAU THEO TUNG BƯỚC _ L D40GD 0050604
Chia nhỏ yêu cầu giúp Claude xử lý tốt hon. 3) NHAN KETQUA & KIEM TRA {~ “Claude dưa ra 30 chủ để theo
Claude tra vé ké hoạch chi tiét, — gay, gợi ÿ nội dung, hinh anh,
e PHAN HOI & TINH CHỈNH ban doc va danh gid. caption từng bai.”
- 2 à CORE tetas un (4) YEU CẤU DIEU CHỈNH - _2 “Tay him aj vido gn, ros
Al cit Ban muốn thay đối: nội dung dai chudi bai ngay 5, 12, 18 theo
() LƯU LAI & TAI SU DUNG hon bố sung thm dnh dang vdeo. | _ hướng review.”
Luu prompt tốt, kết qua tốt dé ding cho lan sau. ) A
HOAN THIEN & UNG DỤNG _ Í “Ban final: ké hoach, timeline,

[ : Nhận ké hoach hoan chinh, “3 | - hình ảnh,hashtag va chi sé

triển khai va theo dõi hiệu qua. uu tién.”

P NGUYEN TAC VANG KHI LAM VIEC VOI CLAUDE ⁄ -
l H u . m
a| 8 [

CLAUDE LA CONG SU BAT DAU NHO, a Aaa

KHONG PHẢI MAY MỐC TRAO ĐỔI LIEN Tuc TU DUY PHAN BIEN TỐI UU DAN DO LƯỜNG & CAI TIEN

Hay trao déi như cách Dat câu hỏi, phan hồi, Luôn kiếm tra, đánh giá Bat dau với yéu cầu don giản, Theo dõi hiệu qua,

baniam viselverinee yéu cầu bổ sung dé co và chon lọc thông tin eafebmaoieo r rat kinh nghiệm va cai thiện

đồng nghiệp giỏi. kết quả tốt nhất. phù hợp. l n quy trình lam viée.

__ ĩ "i @ S

x „ re & ⁄ ˆ A x ⁄ €

66 ax «Quy trinh đúng - Kết qua chat lượng - Công việc nhe nhang! .

a ,X Claude luôn san sang đồng hành cùng ban trén moi nhiém vu. Z# 99

L + i d')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('38', '4/10 3# CLAUDE CO-WORK SERIES } — Ả. —m
- fl lal 7 N 1 ooo
ˆ 2 -. eye
rN LI ˆ Ƒ L .
CHOCONG VIỆC —“—
,
m .
VIET DUNG PROMPT = NHẬN DUNG KET QUA! ‘& 4 ) laVa
ˆ _ - 1
Claude rat thông minh, nhung chat lugng dau ra phy thuộc 80%. eS b =
vao cach ban giao việc. =< —ùùợa L Z
CONG THỨC PROMPTVÀNG . = E y
VAI TRO Muc TIEU NGỮ CẢNH YEU CAU CHI TIET DAU RA MONG MUỐN
© Benmuén Claude | Chi Ban can Claude = Cung cấp théng tin, | -Ƒ | +— Format, độ dai, + ÊJ Kết qua ban mong
CQ đóng vai ai? @ gilip gi? | =) bối cảnh liên quan 3 — định dang, tiêu chi. đợi như thé nao?
` ˆC yp &
Ce MEO NHO: Prompt càng rõ rang - cu thé - day du bối cảnh, Claude càng tra lời chính xác va hữu ich. 2
P a E . Oe N
Q\ VÍ DỤ MINH HOA @ PROMPT MAU HOÀN CHỈNH * KET QUA CLAUDE TRA VE :
⁄ N h l ar l
(v TRÒ ‹ Ban l& gia Marketing 10 nam kinh nghiém. Tuần  Chủđểchính  Kânh  Địnhdạng Myc tiéu
(Gy) Bon ta chuyên gia à u ye Mya |
| Ổ Marketing 10 nam n G n Tan eS
| s Hãy viết kế hoạch content 30 ngáy cho san phẩm. Tuin 1 | Gidlthenvé ice | [Đ)@} | C6 vie ii
| = Ê m ằ hinh anh, thu hit su chú ý
(@) H nude ép detox. (9) reels
| @ / Viết kế hoạch content = =
| ccho san phim mới. bee hàng myc tiêu là nữ ti 25-36 tuổi, Tuổn2 - Detoxcơthể - Baivist, c Giáodục&
= Ữ CẢ quan tam sức khỏe, an uống lành manh. (8-14) Lgiich sic khỏe video ngẩn,  xảy niém tin
đ B) pel can »>— —S (9) - mogaphe
\ ‘San phim: Nước ép detox i - a
N. ich hang mye tie nar Kế hoach cn có theo thứ ty, bao gồm:
25-35 tuổi, quan tm sức khée, * Chi để chính | Tuan 3 E ve ie Cae ®o Be ha pon tac,
Ẹ = Ễ : (15-21) Cau chuyén Reels, tạo két ni
> Yeu cau cui TIẾT Kénh dang (Facebook, Instagram, TikTok) iG aie |
| (22) cents hosch 30 ng, + Dinh dang nội dung (bai viết, hinh ảnh, video, reels. I
— + Myc tiéu từng bai Tuin 4 Revew-Feedback- (GG) Videorevew, Tang chuyén di,
cchi để, dinh dang nội dung - - = 0230 0sd8debg Ợ Livestream, thie đấy mua hing
N m |
BAU RA MONG MUON Trinh bay dưới dang bang rõ rang, dé theo dõi, (2) Email
QD) sing kế hoạch cN tếu, sing tao, thu hút va ¢6 tinh Ung dung cao, ì
~~ gai ý bai ding nổi bat, A ) . va con nhiều nội dung chi tiết khác! )
\ timetine & KPI cu thé. Ề -
ie 5 NGUYÊN TẮC VIET PROMPT HIỆU QUA. . ;
⁄ - @ Q =) | @ z ®
@ Ñ . | © | (S) .
RO RANG & CU THE CUNGCẤP ĐỦ CẢNH | YEU CAU CHI TIẾT KIỂM TRA & TINH CHINH THU NHIỀU CACH HOI |
Nồi rõ ban muén gi, Cung cp thông tin, bối cảnh, Nêu rõ: format, độ dai, Nhận cau trả l6i, danh gia va Thay đối góc nhin, vai tré,
tránh mơ hô, chung chung. kết qua cảng gn nhu câu, địnhdạng,tiêuchíeuthể. | Claude chỉnh sửa, bé sung. _ cách hi đ có kết qua tot nha.
Í VD: "Viết 5 ý tưởng VD: nêu rõ đối tượng, ÍÍ V0:dạng bang, 10 y, Í Vos "Rat gon hon", VD: đổi cach dat,
content vé detox” gan sách, myc tiêu, | 00 tu, markdown, “Viết theo tone vui về , góc độ khác nhau,
thay v "Viết content về detox’ ngữ cảnh, hạn chế. | thân thiện chuyên nghệp..ịø | "Thêm vi dy thực tố” để cai thiện prompt.
X CÁCLOẠIPROMPTPHỔBIẾN - n
Ñ ~ z Ñ \ 7
_&> PROMPT HUONG DAN 2G@y- PROMPT Ý TƯỞNG Q PROMPT PHAN TÍCH PROMPT TOM TAT < /> PROMPT SANG TAO.
Ua (INSTRUCTION) (BRAINSTORM) (ANALYSIS) (SUMMARY) (CREATIVE)
‘Yeu cầu Claude thực hién Yéu cau Claude dua Yêu cầu phan tich, đánh gia, ‘Yéu cau tm tat nội dung Yeu cầu viết sang tao,
mét nhiệm vy cy thé. | ray tưởng mới.. so sánh, phan tich. dai, rit gon thang tin. viết lai, ké chuyan.
VD:Viếtemai,tómtấ | | Í VŨ:Ÿ tưởng content, ( VDPhântehthitưởng, - VD:Tôm tat bai vi, VD: Kịch bản video,
lap kế hoạch... .\ campaign, tên sin phẩm... đối thd, dữ liệu... bdo cáo, cuộc họp... cau chuyén, slogam.
ử E J = J = ) = ở
wy PROMPT TOT - KET QUA TOT — CONG VIEC NHE NHANG HON! +
Hay luyén tap mỗi ngay dé trở thanh “PRO” trong giao viéc cho Al. + +')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('39', 'Z <
5/10 * CLAUDE CO-WORK SERIES - _ > Claude
r4 - n .Ị .
Trg ly Al đắc luc giúp ban lam việc nhanh hon - Gon gang hon - Chuyên nghiệp hon ¢ f ag IN P
ầXỄ Ò q ANY J
ú Claude giúp ban xử ly các công việc van phòng hang ngày: s — zl S || WA
? viết email, ghi chu cuộc hop, xây SOP, lap ké hoach, tao checklist... C = (Gaye ie e
XØ . Tiết kiệm thời gian, giảm sai sót va nang cao hiệu suất. —
\ J hời gan, g 9 / = =< | JEN
G ợ . :
| EMAIL (2) GHI CHU (3) TAO SOP & LAP KE HOACH (5) CHECKLIST
CHUYEN NGHIEP CUỘC HOP QUY TRINH CONG VIEC & TO-DO LIST
=n hed 85. =
P2 74 Ợ oe
= v =
4
Claude giúp ban: Claude giúp ban: Claude giúp ban: Claude giúp ban: Claude giúp ban:
+ Soạn email nhanh + Tóm tt nb dung cuộc hop + Xây SOP từng bước + LapkEhoach ngầy/tuánháng | | + Tao checklist chi it
+ Viết email ich sy 18 rang + Ghia quyétdinhchinh + Chuẩn hóa quy trình + Ưu tin công vibe + Tord ist theo dy án
«rd i email theo tông + Phan công công việc + DE hu, đễ ap dung + Phin bố that gian hợp lý + Cheehtistquy trình, công việc
+ Email xin vie, đề xuất + Theo di tiến độ + Nhất quén trong ng vie + Theo d6i & danh gid + Dim bảo không bé sốt
thông bho, cm an,
Prompt gợi ý: Prompt gợi ý: Prompt gợi ý: Prompt gợi ý: Prompt gợi ý:
“Vit email myc dich] at gến “Tm tit và gh chi cuộc hap “Tạo SOP cho [iên quy trnhy “Lip kế hoạch công vite cho “a0 checklist cho [công vite!
86 tượngl, gọng tang vong/ {chi 98 vö1eie ye quyế inh c w ngay/uin) Danh sách vee, uy tình). C8 lưu ý quan trong
finn boat, nội dung 96m (ogi chieh, ng phy tóch deadine, Fa ied eat n tin theo mức độ quan trong cho từng bude thực hiện
dụng chính à các gi chi khác J
| Kết qua ban nhận được: Kết qua ban nhận duge: Kết qua ban nhận duge: Kết qua ban nhận duge: Két qua ban nhận được:
Email’ rang, ding trong tim © Tom tất súc tich, dễ hiếu © SOP rô rang ting bước © Kếhoạchkhoahoc,dếtheodö  (2} Checklist day di, logic
) Giọng điệu phishop hodn cảnh. @ Danh sách việc cin lam rõ rang © Dé lưuÿ & tránh lồi sai © Biét việc wu tiên & quan trong —
le Tiết kệm thai gian xử by @ Dé đăng theo d6i & lưu trữ @ Dé dio tao & ban giao © Tới wu thoi gian hiệu qua © Giám sai sót & bỏ sót vide
X VÍ DU MINH HOA THỰC TE —
— a - n TW
`- Tình huống: @ @ Tìnhhuống: Os Tinh huống: ] . Tình huống: Tinh huống: B Tinh huống:
9mong2esiioe | GON) eneereomeos 9mdasysoriortg | 225) each cig vic an cin cece. yn Bancinbio coi bp
yn tới sp shin cg. shi in mố, twins. ign kh. hing thing
Prompt mau: Prompt mau: Prompt mẫu: Prompt mau: Prompt mẫu: Prompt mau: |
Aiếtemalkếhoschdưán | Tômtftngidungcuộchop | Tạo SOP onboording nh vin | “Lap ế hoach céng vibe tuấn | Tạo checklist 30 vite cy thé | Tao báo cáo tng két công
{ABCI git sép, tom tét 3 | [chi] va phan cdng việc | met cho phng Marketing chí | tổi anh sáchvệc, A,8,C,0,€ | triển khaiđự án Digital vibe thing (MM/YYYY]
mục chín và đề xuất cho ting thành vin tiếttừng bước Yà u tảntheomúc 6} quan wong. | Marketing em số iu và nhận wat, |
Két qui: “Ket qua: Ket qua: Noo Kế ud | ét qui:
Thu 18 răng, néu trong tdm Tôm tit cuộc hop. ‘SOP ONBOAROING NHAN VIÊN MỚI || KE HOẠCH TUAN (18/05 - 19/08) ||| CHECKLIST DY AN (20 VIỆC) || BAO CAO THANG 04/2024
wan dé và đề xuất. * Quyết định chinh 1. Trướcngáy div nhan việc | | TT | Côngvệc | Uatin | Khao sat nhu cấu khách hỏng . Téng quan kết qua
0 E) + Phin céng:ténvigeheng| | 2. Noy dau tid onboaring) | 1 |A | cao @ Xy dung chin dung KH + So sánh voi thing trước
“= Nghiệm thu: 30710 3. Tuần dầu tim vige c Í Trungbinh} ] Lẽnkếhogch + Dinh gid hiệu suất
Em mong nhận được phản bối 4 Sau thing tha vide 1410 | Tangbmh] | || EI Sánxuấtnôdmg - 98 xuất fi thién
thuận in ante Vic cin ti n r. í m
Tran cảm ont!  Thiết kế mockup: Lan ~ 16/05 m l ad 2 ral ae
F W……………j Luu j: Luba theo d8i& hỗ rợ || hi ch: Uu ita hoàn thônh. Eien s
-hpdeomeimZ00S @@ || tong30ngiydi, ^kowmbos - đạ)| | Q90992992 r| l
an boy) EU EA =
——1]7-M= A s ) €E
X. MẸO SU DUNG CLAUDE HIEU QUA CHO CONG VIỆC VAN PHONG
. = == == —- P , — — ~
| 24 RO myc ru CUNG CẤP DU THONG TIN YEUCAU FORMAT /Z^ KIẾMTRA & TINH CHỈNH LƯU & TAI SỬ DUNG
| kết quả mong muốn vice yêu cl lien quan bing, checklist, email hod thién trước ki 48 sử dụng i cho |
l nại J và ô rang chỉ tt. đã dé áp dung dung, lần sau
oe ee eee ee .
t CÁC LOẠI PROMPT PHỔ BIEN =
2 = = i aN ]
pronernuowcoin | cy. erowrryutne || ( ) rrowerewanrics | [Ch) esowersowrhr | ¢ › PROMPT sno Ho ì
(INSTRUCTION) \ (BRAINSTORM) (ANALYSIS) (SUMMARY) | (CREATIVE)
Yêu câu Claude thye hiện Yeu edu Claude dva Yêu cấu phin tich, diah giá, Yeu cấ tém tất ng dung Yêu céu viết sing tạo,
| - mộtnhệm vụ ov thé ra ÿ tưởng mới so sánh, phn tch di, rot gọn thông tn viế li, kế chuyện
VO: Vit email, mt, Vb: ¥ twang content VD: Phin ch th tưởng, VD: Tém tt bi it, VO: Kich bin video,
hots hoeh onpagntinsbnphion. | || đốih0,đ0 N W đ †n
tY s Lam viéc thông minh hon - Không phải cham chi hon. „ N )
Ñ Claude là trợ lý giúp bạn tối ưu mỗi ngày! _ ‹ ÿ
a —_ ee oe 2')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('40', '6/10 | Í 3 CLAUDE c0-WORK SERIES ) a > Claude
= rŒ
ˆ z = à >À & ỉ
PHAN TICH & OCA”
: lm ¬ (@ =
2 z ~ na É Q . í .t_Ệ ]
4 A —
: ¡ a
Biến dữ liệu thành thông tin gid tri - Ra quyết định chinh xác hon S ) q Ồ\Ở
l Claude giúp ban thu thập, lam sạch, phan tích va trực quan hóa dữ liệu s \ = | a ¬ Ĩ 4
ODL  để tim ca insight, xu hướng va co hội cai thiện hiệu quá công việc. le 2
J .
Z QUY TRINH 5 BƯỚC LAM VIỆC VỚI DỮ LIEU CÙNG CLAUDE : ZEN
1] THU THAP @ LAM SACH 3) PHAN TICH í 4 TRỰC QUAN HOA 5 DIỄN GIẢI &
DỮ LIỆU DỮ LIỆU 9 do LIỆU * # DỮ LIỆU ĐỀ XUẤT
ñ
=¬ 4 n
=.. > > 4 -G:
~ t ⁄ Ñ
= Y =
+ Xác định nguồn dữ liệu * Loại bò dữ liệu trùng lap. * Thống ké mô ta * Biểu dé, bang biểu » Diễn giải insight
* Thu thập tis file, form, * Xử lý gid tri thiếu * Phan tích xu hướng * Dashboard tổng quan * Dé xuất giải pháp
‘web, API... + Chuẩn hóa định dang + Tim mối tương quan * Báo cáo trực quan * Hỗ trợ ra quyết định
* Kiếm tra độ đảy dt,
a N b —Z X i ^4
Po SS oe. x A Se - HƯN n N n I .
(So CLAUDE CÓ THE GIÚP Gi? ) vi DU CLAUDE PHAN TÍCH DU LIỆU (fe LOẠI DỮ LIEU CLAUDE HO TRO
eee —hRâđ
PHÂN TÍCH NHANH DỮ LIEU BAU VÀO (vi DU) KET QUA CLAUDE PHAN TÍCH | Excel / Google Sheets
Xử ly dữ liệu lớn, dua ra két qua f r J (xlsx, .csv, google sheet link)
r 20% mỗi thang. Ss ơ sở dữ liệu
Q ine, I n a aay qeo 3 sỞ l (SQL, MySQL, PostgreSQL...)
hat him xu hướng, mố inh và [ Real E đ 1Z Tăng 62% so với thing 1 va 91%
các diém bat thưởng. tng 92% 5 vi thing 1
“13 800089 89 - HH Ệ Dữ liệu web
SO SÁNH & ĐÁNH GIA 14 210000000 520 105 ¥_S6dan hang va khách hing mới (Bang gia, tin tức, bo cdo...)
So sánh hiệu suất, do Vỡng KPI ting én inh
ee mie 15 29000000 50 Ô H
để đánh giá hiệu quả. ~ Eị] Dữ liệu khảo sát
A 99860 D8 xuất © BIẾU 06 DOANH THU _ Đề sua: Tap trung chién dich =) (Forms, Survey, Feedback...)
GAOL] \ Dự báo xu hướng, dé xuất hành ding 2509 ‘marketing va tối uu trai nghiệm c
dựa trên dữ liệu. 200m để duy trì d& tng trating. yp Dữ liệu kinh doanh
150M. o (Ban hang, Marketing, CSKH...)
TAO BAO CAO TU DONG 100M
‘Tom t&t dữ ligu,bign bio cáo rõ rang, som =| Van ban & PDF
dé hiểu. H t T N T] L ie (Bao cao, hóa don, hợp ding...)
@ MẸ0 LAM VIỆC HIỆU QUA VỚI DỮ LIEU @® prompt col Ý HỮU ícH
) Xác định mục tiêu & gid thuyét trước khi bat dau. “Phan tích dữ liệu nay va cho tôi kết qua những diénzaian trong nhất.” 4ä |
(cng cấp dữ iệu dy 6, rõ rang, đúng dinh dang, “Tim 3 insight quan trong nhấttừ bằng dữ liệu ny va gi thi.” Q
| Yêu cau Claude giải thich két qua bang ngôn ngữ đơn giản. | So sin higu susie cde sin phim vb db ut sin phim témning” SIS. |
GF Kết hợp phan tich ịnh ượng va dinh tinh. “Tao biéu dé va tém tat béo céo ngan gon ty di liu nay.” œ
© Lưu tai các prompt hiệu qué để sử dung cho lan sau. "Dy báo doanh thu tháng tới dựa trên dữ liệu hiện tai.” z
⁄ à%
. Dữ liệu không biết nói, . CN
s iP Ề See r .
: „ * nhưng Claude giúp ban lang nghe va hiéu chung! all I | ..')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('41', 'H - ñ
7/10 |  3&GOLAUDECO-WORKSERIES | -. ® „ „ %Claude
MARKETING&.... ® ( !
Tạo thông điệp ấn tượng - Tiếp cận đúng khách hàng - Tăng trường bền vững ‘Ke Ñ A I Ỹ 4
s nuin : J _) .
©) Claude giúp ban lên y tưởng, viết nội dung, phan tích thi trường =< = a — N. j
- 7 vatéi wu chiến dich marketing hiệu qua, tiết kiệm thai gian va chi phi. | —- — x IỀ/ S
>> 5BƯỚC MARKETING HIEU QUA VỚI CLAUDE a ầ - ˆ — =)
Nears Ế F I (4 A A A r s
ũj NGHIEN CỨU (2) XÁC BINH CHIEN LƯỢC (3) SANG TAO NOI DUNG (4) TRIỂN KHAI KENH (5) DO LƯỜNG &
THỊ TRƯỜNG & THONG ĐIỆP QUANG CAO & CHIEN DICH TỐI UU HOA
Sin i wn
* Ø * » We cil
ũ
“+ Phan tich thi rung, di thi + Xác dinh phan khúc myc tiêu - Tiêu đề hấp din + Chon kênh phi hop + Theo dối hiệu suất (KPI) |
_ Nhu cầu & han vi khách hang + Dinh vi thương hiệu - Nội dung quảng cáo. * Lên kế hoạch chiến dich * Phân tich kết qua
 Xu hưởng ngành, cơ hội. + Thông điệp cốt lõi. : Kich ban video, bai ding + Lich ding & ngân sach * Tối wu va mở rong
Prompt gợi ý: L Prompt gợi : Prompt ggi ý: ( Prompt goi ý: ]
“Phan tich thị trường [ngành), "Xây dựngthông điệp dink vi - “Viết 5 tiêu dé quảng céo “Lap ké hoạch chiến dich quang “Phân tich hiệu qua chiến dich
xu hưởng & cơ hội ndi bat thương hiệu [san phấm/dịch vy} ‘thu hit cho (san phẩm) cáo Facebook trong 30 ngay [.). Đưa ra gọi ÿ tối uu dé tang
trong nim 2024." cho khach hang (myc tiêu)” | nhấm đến [khách hàng).” ‘véi ngain sách 20 triệu đồng.” hiệu qua & giảm chi phi.”
eee ee) | J , w 1 |u n
& x x<<- w
& CÁC LOẠI NOI DUNG CLAUDE HO TRO 3k VÍ DU NỘI DUNG QUANG CÁO Œ KHUNG AIDA - VIET NOI DUNG THUYẾT PHỤC
BÀI VIẾT MẠNG XÃ HỘI ‘Sn phim: May loc khéng khi ATTENTION Tiêu dé, câu mé dau
Bãi ding Facebook, LinkedIn, Instagram, : vl | | ư ấ thu hat, dinh tring
c n Tiêu đề: Hit tha tronglãnh - Sống khỏe mỗi ngày! Ny | | x N n
rau
Nộidụng Miy lo không kh XZ vi cbng nghệ HEPA \ của khách hina, |
AP ARE TING: lọc sạch bụi min PM2.5, khd mdi & vi khuẩn hiệu qué. l Í
x"o ae hak 0 t Pastas, ] INTEREST ung cấp thông tin hữuích,
khuyến mãi, bản tin. Ñ (Khơisựquantảm) _ lợi ích nối bat, ké cau
LANDING PAGE & WEBSITE |
==! Tidvdé, môtảlgich, CTA, nộ dung trang | J
| Dj w: Tn eign ợc Marketing ) m OPN eR ea |
(Keh oat mong mun) kết qua khách hang dat dug,
| @ KICHBAN VIDEO - Tu ã Tag trường doonh thu ban wing rth iota!
Kịch ban quảng cáo, review sản phẩm, või chiến luge marketing ding hung |
video oii thiệu, hậu truang |
| Ni ing: Ching tin ashy dng ctén ie HH ACTION ara li kêu gl r8 rng:
! C''9'' QUANG CÁO TRA PHi marketing bai bn, t6 vu chi piv ting tưởng doar thu | m...
| C.) Google Ads, Facebook Ads, TKTOk Ads, Dich vy: Ph ich ti trudng~ Lp chién luge - E a x |
| ‘YouTube Ads... Triến khai & tối uu A » v !
enna "Ee ;
1 MEO MARKETING CUNG CLAUDE ‘ ¬ : ẨÌ
4 ~ . z Ñ Ạ
THẤU HIỂU KHACH HANG THONG ĐIỆP RO RANG gy TEU OE HAP AN [AAA POLENGLIENTUC | ay THU NGHIEM 8 TOL UU
dung khách hang & hành vi đễ hiểu,tập trung vào hiệu qua quảng cáo. Ue tp, cPC,Comerson, khác nhau (4/8 test).
đề tao thong điệp cham dung. lợi ich & giá tri mang lai Check nhiều góc nhin & OAS... vi t6i vu dụa trên. Liên tục cải thiện dé dem ra
K pain point. ‘cho khách hang. thi thách chung kich bént dữ liệu thực té. higu qua tốt nhất.
K . Ẵ \ )
K Ạ A a ==
4 CONG CU KET HOP HIỆU QUA ũ đ 5 2 a ey, ae ™
= —“ sae n . | a. ||
Claude Al Canva Meta Ads Manager Google Analytics Google Ads
phn tic, tus cin dich, | infographic, video Facebook, Instagram. ãdolưỡnghiệusuếtvebste. | tim kiém hin th, YouTube.
N C 4 .. ⁄
Marketing hiệu qua không phải la nói về ban, ma [a giải quyết van dé của khách hang. 1
LN Claude giúp ban truyén tai đúng thông diép - dén đúng người - tao ra kết qua thực su. Bt')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('42', 'Z
8/10 | ÍÍ 3€ CLAUDE C0-WORK SERIES ) — Claude
Ẩ 7 Á e z Ề A 7)
722 z ) 20,
s
` aN . ~ Ề Ú 2 .
on eS SS
Nef
Ầ
s ũ
Phối hop hiệu qua - Theo dõi tiến độ - Dat mục tiêu chung * ® A
( @@ ) Claude giúp ban lap kế hoach, phan công, theo déi va báo cdo dự án - > @Y
\ Œ&W '' một cách thông minh, giúp cả nhóm làm việc ân ý va đúng han. : — l dD) \ j
| % 5 BƯỚC QUAN LY DU AN VỚI CLAUDE
XÁC BINH MỤC TIEU LAP KE HOACH PHAN CONG & THEO DOI & ĐÁNH GIA &
DỰÁN CHITIẾT PHỐI HỢP KIẾM SOÁT RUT KINH NGHIỆM
C °
4 ; = —
h = ¬ ceo
aaa
+ Xée dinh myc tiéu SMART - Chia nhd công vige (WBS) | | Phin công nhiệm vụ rõ rang + Theo déitién d6céng vige || - Dinh giá kết quả dat duge
(Cu thé, Bo lưỡng, Khả ti + Xác dinh mốc thời gian - Tht lp kẽnh trao đối - Quan l ri ro & vin đế. + Rit kinh nghiệm cho dự án sau
Liên quan, Théi hen) + Dy kiến ngudn lực - Quan lý & duy te riuin i việc | | + Điều chin kip thei + Luu trữ tai liệu, bai hoc:
+ Hiếu rõ yêu cầu & ky vọng
.- aS wh Neda
Prompt gợi ÿ: 1 Promptgợi ý: Prompt gợi ý: Prompt gợi ý: | | Í Promptggiý:

"Hay giúp xác định mục tiêu “Lap kế hoạch chỉ ế cho dyn “Phan công nhiệm vu cho nhóm. “Theo dai tiến độ dự án ““Tổng két & rut kinh nghiệm cho
‘SMART cho dự an [tên dy dn] [ten dự án] bao gồm các hang, 13 người để duy t tiến độ dyn {ten dy án] theo mau ngắn gon, dy 4n [tên dự dn) - những diém
‘trong năm 2024." mục công việc va timetine.” {ten dy an)” ê theo di.” mạnh & điểm clin cai thién.”

=
3 CONG CU & MAU HO TRO (8 Au KẾ HOẠCH DU AN (TOM TAT) #2 VAI TRO TRONG NHOM
— BANG KE HOẠCH DỰ AN (Ten dyn: | Website git thu sin phim ABC c Rice
Trello,ClickUp, Asana. Phạm vis | Thiét kế U/UX, Lp tin, Kim th, Trin kai tién độ, béo cáo
LƯU TRU & CHIA SẼ TAI LIEU Troi gin: | 0105/2025 - 30/08/2025 O THÀNH VIÊN
| @ Google Drive, Dropbox, OneDrive, | Ngắn sich: | 120,000,000 vino F (CXL) Thực hiện công việc được giao cặp
| Notion, GitHub, tién tợi đồng bộ. Thanh vién: | § người (PM, Dev, Designer, Content, Tester) nhật tiến độ day du, kip thai
a ‘TRAO ĐỔI & NHAN TIN BANG SACH CONG VIỆC CHÍNH Q NGƯỜI KIEM TRA (QA)
Slack, Microsoft Teams, Zalo, . N m Kiếm tra chất lượng, báo lỗi,
Telegram, giúp lién lac nhanh chong ee oo ee ee dm bao san phim dat yêu cau
| | || nineties (pa g annie
QUAN LY CONG VIỆC 2 | Thiếk€UAX Designer 08/09-1905 @ oangiim a KHÁCH HANG/STAKEHOLDER,
J Trello, Asana, ClickUp, Notion 3 UiptinhFrontend | Dey - |16/05-05/08 | @ Banglim | (Cung cépiyeu cA phan nb
(Quan ly task, deadline, workflow) 4 | LopvinhGackend ||  0œv - 16/05-03/09 E Ovabkdu ] K đănh giá kết qué .
5 Ý Kiém nd Tester - 0906-12/05 E09nhé,
E HỌP TRỰC TUYẾN We Geers paca are 208 | Roma] NGUYÊN TAC LAM VIỆC NHÓM.
Google Meet, Zoom, Microsoft Teams | | 2 U U U se ae
(Hop, chia sé man hình, ghi cha) | TIEN ĐỘ CHUNG © Giao tiếp rõ rang - kip thai
S Ton trong - hỗ trợ ~ tin tưởng
Ệ © Minh bach - trách nhiệm - cam két
l © Tap trung vào mục tiêu chung
; ows 565 Ố 9/06 Ô 09 S 3996
- ) = — Bea) J J
(@ PROMPT HỮU ÍCH CHO QUAN LY DU AN (#]  BÁO CÁO TIEN ĐỘ NGẮN GON (MAU) 3= KPIGOIY ]
©) “Hãy gidp tối ậ kế hoạch chi tếtcho dyn [tén dyn} vỡ timeline 2 thing. Hang myc Tiến 46 chiens - || Í đ % hoàn thành cing vige
(G), “Phan tich ri ro & a8 xuất giải pháp dy phòng cho dy an phn mềm ^ Hetiepohue Phin ech Grid a © $6 deadine đúng han
Thit kế U/UX 70% | 9mguêngg || |
© “Teo bang theo dõitiến độ dy dn voi cdc KPI ct 6 quan trong” i ile So IN Binge | 3 Sốtðïphát sinh
“Vie mai thong bao cập nhậttến dộ dng cho nh.” Liptinn Backend | «30% - Đinkhkh || | spade độ hdi tong khách hang
“Đề wut céchc8ithibn quy tinh lm việc của đội để tng iu suất” gu - =< || || ®e L uátlàm vite nhím
) Tin kai & bin giao 0% Chuva bit aia |
n — —S u
. NY egies Một du an thanh công không chi nhờ ké hoach tốt, n -
⁄ .+ ĩ .ưn x . ''W #i A H s a N H
B . t :. mà còn nhờ đội ngũ tuyệt voi va sy đồng hành đúng cách. .. ⁄ .
- a : Claude ~ Tro ly dang tin cay cla ban trong moi du an! › toe')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('43', '9/10 | ( 3& CLAUDE CO-WORK SERIES . > Claude
TỰĐỘNGHÚA& =. | (rfp &
= ¬ Eas L Ể f
uv w we ˆ v= 2
<= ~ all
Lam nhiéu việc hon với ít thoi gian hon 4 ˆ. Ề
ae Sea * -. ..
Claude giúp ban ty động hóa các tác vu lap lai, lie —
t6i ưu quy trình va tap trung vào những việc quan trong nhét. | — = =) Ề3 r:
5 A A s E —C n =
x 5 BƯỚC TU DONG HOA CONG VIỆC VOICLAUDE ~
a) XÁC BINH TAC VU (2) XÂY DUNG | (3) TAO PROMPT (4) CHAY & | (5) TICH HOP &
LAP LẠI Quy TRINH & MAU | KIEM TRA MỠ RONG
Cri + Bs @& + B
L1 iC)
+ Nhận din các công việc tn + Mõ tả quy trình từng bude + Viết prompt chuẩn hóa. * Chay thử voi dữ liệu mau. * Tích hợp vào công cy khác.
thời gian & lập lại. rõ rang & dé hiểu. + Tao mẫu dữ liu dau vào. + Kiếm tra kết qua. (Notion, Sheets, Zapier....
* Ước tinh thời gian & tắn suất + Quy định tiéu chi hoàn thành. - Thiết lap kiểm tra & xác nhận. + Tối wu prompt & quy trình. + Nhân ban & mở rong,
thựchiệ.
¬I - DOSAẼDPÐOrOrO-C/$3¬ HHrmm
Prompt gợi ý: || | Promptggiý: Prompt gợi ý: || | Promptggiý: || |) Promptggi:
“Liệt ké các c6ng việc lịp lai “Hy giúp tối xây dung quy trinh “Tao prompt mau dé ty ding Kiém tra va tdi uu prompt nay | "Gợi ý cách tich hợp quy trình
trong [vj tri] va ước tinh tan cho [công việc] bao g6m các bước. (vie vu] va các biéu may liệu với dữ liệu cy thé: [...], day là |] || svw [céng cy] va mở rộng.
suất & thai gian thực hin." | | cụ thé, công cu và đữ lieu két qua.” vén dé & mong muén." ‘cho các trường hop khác.”.
) cấn thiét.” J
——"''Ỷừ vOXYMXN YQ H
H] VÍ DỤ TU BONG HOA VỚI CLAUDE -? MAU PROMPT TU DONG HOA ¡ Í l CÔNG CỤ KET HOP TỰ DONG HOA
TONG HOP EMAIL HANG NGAY | (f . r! E - Zapier
ợ : .. Tém tất ce nội dung quan trong ti [nguốn] _ — Á
M Bical philoso un or n9 AAP alt hie cấn làm theo mức độ u tin” ỂẸỂẸmịảẸ² engi
b "Phan tich di liệu sau: [dữ liệu]. Tao báo cdo. Make (Integromat)
Bio céo
B BÁO cho TY BONG : — ANN „ Xy dung Kien bin tự động hóa phúc tap,
G Thụ hịp dữ i phân deh, tre quan hóa Pat - t
‘va tao bao cáo dinh ky. Lich & nhấc vid “Tao lich tử [danh sách việc] theo [tiéu chi], BS coc si
ich Bh wp việc & cd i i oogle Sheets
LICH LAM VIỆC & NHẮC VIỆC Reyes a a] ..
Tạo lịch họp, nhắc việc tự động “Chuẩn hóa va làm sach dữ liệu sau: ty động.
‘cho nhân viên & nhém. Lam sach di ligu [liu]. Loại bé trùng lap, din thiếu ra ING
J va dioh dạng lai” [IN] I n
Q  TRALOI KHÁCH HANG | Quản l dự án, teu va quy tinh
C) Tạo câu trả tei mẫu, phan loại yêu cầu, han tich xpi Phảntíc KPI (4a liệu va gợi de yếu tố eng tel
cap nhật CRM ty động. - giúp gia tăng & cp tél vu.” illo Slack / Email
{ || | SSS - Nhân thông báo, git bao cáo va cap nhật
X _ eee — — tự động.
ÁỬ T ‹
Í . 7 MEO TANG NANG SUAT VỚI CLAUDE — Á — G _= )
Ø 2 |\|2 ø
= | oo
UUTIENRO RANG | LẬP KẾHOẠCH NGÀY | CHIA VIỆC THÔNG MINH | - TIẾT KIỆM THON GIAN THEO DOITINDO  HỌCHỎILIẾNTỤC | GIỮ NANG LƯỢNG
Xácdnhvệcquantong  NhờClaudelipkếhoạch  Chianhönhiệmvulớn | Ty dong héa tac wy lap lai, | Caprhattién d6théng myén | Claude hé trphochailién |- Nghingoi hop lý, duy tri
nhất & tap trung vào ngảy, phan bé théi gian than các bước nhỏ sữ dung mẫu & công oy — cp nhgtkién thiie _théi quen tét dé lam vig
đếutgoragấvics. | hoply& theo dtién db. | & iaovie phuop. | đểrứtngấn thi gin. hoàn thénh mục tis mớiâkýnõngmới - | hiệu quả & bén vững. |
(62 VÍ DU QUY TRINH TU BONG HOA HOÀN CHỈNH Lot ich
| WG © Giảm 30-60% thai gian lam việc
| I™|] > ‘a8 > (> > al > Ma © Giám sai sót & tng độ chính xác
. | 7 Tối ưu quy trình & nguồn luc.
| Nhận dữ liệu Xu với Claude Luu trữ Thông báo Báo céo a ii T. ka .
ean) clause phn tic, Luu kétquivao - Gửithôngbáodến - - Tạobáo cáo tw động n n x à GD
| | m ỹ''wffl,l a trich xuất théng tin. Notion/Sheet/Drive. nhóm / cá nhản. theo KPI. [o} Tang nang suất & hiệu qua vượt trdi
|e guõn & cc kênh. J\
m .„ ˆ . .. Tu động hóa không phải dé thay thé ban, = ii
rere 4 . rA a : .
me. ¬ Ba ma dé ban lam những diéu ý nghia hon! ane . i,
-. Claude - Trg ly dang tin cay cla ban trong moi du adn! 477 . .')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('44', 'N =
10/10 J | X* CLAUDE CO-WORK SERIES - S X* Claude
- . — al —
Z^ í _
TONG KET & LO TRINH oJ)
S a 5 D ẳ - A)
_ =_
LAM VIEC CUNG CLAUDE vy
Hanh trinh 10 trang = Ứng dung Al dé lam viéc thông minh hon mỗi ngay \ - ầÍ @
T T n N đ - my n .< X
Chúc mừng ban da hoàn thành hành trình 10 trang! c * ane
(@) Bay gid la lúc dp dung nhiing kién thức nay vao công việc thực té iF = SS * Dp) 1 So
L dé tao ra kết qua vượt trội. <Ả = D
⁄ m er ea n n at
10 TRANG - 10 CHU DE CHÍNH - 1 MỤC TIEU: LAM VIEC THONG MINH HON
(a) GIGI THIEU (2) CHAT & HOI BAP 3 VIẾT LÁCH & ( 4 XỬ LY CONG VIỆC | | 5 PHAN TÍCH &
CLAUDE HIỆU QUA SOAN THAO VAN PHONG ! XỬ LÝ DU LIEU
=)
Iw . › Z r3 C
| eS
* Claude là ai? + Cách dat cau hỏi tốt - Viét email, bio cáo, dé xuất - XU lý email & cuộc hop + Thu thập & lam sạch dữ liệu
+ Tai sao nén ding Claude? + Meo giao tiếp hiệu qua + Viết bai, nội dung marketing + Tao SOP, quy trinh + Phan tích & trực quan hóa
+ Những việc Claude có thé + Ví dụ hoi dap thực tế. * Chinh sữa & tdi uu nội dung + Ké hoạch céng việc, checklist * Diễn giải & dé xuất
giúp ban
E E G m T T N = : \ T n
(6) MARKETING & QUAN LY DY AN & TU BONG HOA & f Q case stuoy & ) TONG KET &
QUANG CAO LAM VIEC NHÓM. TANG NANG SUAT ONG DUNG THỰC TE LO TRINH
gp 928 o E3 Ợ
) tv We
* Nghiên cứu thi trường | + Lap ké hoạch dy én + Tự động héa tac vụ + Ví dụ theo ngành nghé + Tổng hợp kiến thức
| | + Noidung marketing quảngcáo | | - Phin cing & theodối n độ | | + T6i ưu quy tinh làm việc + Tinh huống thực té + Lộ trinh ting dung Al
| | + Kéhoach & toi uu chign dich - | | - Lam việc nhóm hiệu qué - Tiết kiệm thời gian - Kết qua & bai hoc + Duy tri & phat triển
| _
W LỘ TRINH 30 NGAY LAM VIỆC CÙNG CLAUDE à
Í GIAI DOAN‘: LAM QUEN - Í GIALDOAN 2: NG DUNG») | [AVA BIAI ĐOẠN 3: NANG cao) Sy GIAIDOAN4:TOLUU
Fe] (Ngay 1-7) > ob (Ngày 8-15) > doo (Ngày 16-23) > G (Ngày 24 - 30)
* Làm quen với Claude + Ung dung vào công việc hang ngày. * Phan tích chuyén sau, lam bao cáo. * Tối ưu quy trinh lam việc.
+ Thực hành các eau hỏi hiệu qua - Viết email, báo cáo, kế hoach + Tự dộng hóa quy trinh + Xây dung hé thống cả nhan
+ Ung dung ngay các tac vu don gian + Xily & phan tích dữ liệu + Ung dung nang cao All trong marketing, | + Banh gid & cai tiến liên tục
+ Myc tiéu: Higu & thanh thạo cơ ban - - Mycttiéu: Tang hiệu suất rö rét_ «== Mụp tiéu: Lam việc thông minh hon | | + Mục tiêu: Đạt kết qua vượt trội
= =< 4 ĂN = AN 24
@ NGUYEN TAC VANG KHI LÀM VIỆC VỚI CLAUDE Ì { % CAC LĨNH VỰC CLAUDE HO TRO TOT | CONG THUC PROMPT HIEU QUA
6 rang: ất ica au cu thé Bối cảnh
© Rõ rang Cungcấp ang bối a N n 2 al “A + pale ã n
© Chitiét: Cang cy thé, Claude càng hiếuvà trảlồi tốt - - viết tach Phan tich Kế hoạch Aes ã |
s s . ệt iết Nhiệm vi
© Ngan gon: Trinh bay mach lac, ding trong tam || Ssomthdo J — &DữMg: & Chin luge (Gon ude Claude tam oi?) |
© Kigm ra: udn review & xe nhin hg tingventorg || gah [ S 4 â â chit
© Phan hil: Bua phan hdi dé Claude ngày cng tốt hon, Mecketing qQuảng dy én hiếcn‡ (Thông tin, dinh dang, vi du)
''@ Bao mat: Không chia sé théng tin nhay cam. & Nội dung & Cong việc. & Hoc tap +. Két qué mong muốn
@ Sang tao: Thử nghiệm nhiều cach hỏi va góc. Q Foy y (Kỹ vọng cuối cùng)
khác nhau. 4 .. . Red = .
Nghiêncửu Tưduyphảnbiện  Sáng tao. = Prompthoàn hảo
&Tổnghợp - &Quy trnh 8 Ÿ twang y
- z E x ¬ i 2
# HANH DONG NGAY HOM Nay! Ye CAU NHAC NHỞ CUỐI CÙNG . = N
Ï) 6mes - (23) vqasee - (3) eamktsẻ | AI không thay thé ban AM wy :
ban can lam và nhờ Claude va đánh gia IÊ H x Z
n aa > 4 > L nhưng người biết sir dung Al n ] ⁄ Mig
19 ngày mai. 8 tợ. >) hiệu qui i ee be . : Ws
(3 sé thay thé người không biết! a — ee
L È : Claude uén sin sing déng hanheingban ESS
Batdaunhé > Nghilén > Hanh động ngay! trên hanh trinh chinh phuc higu suất dinh cao! ˆ — —
—==— ⁄á TS F ee — eK
=— : Lam việc thông minh hon - Không phải chăm chi hon. - l
= = Claude là trợ lý đáng tin cậy của bạn! —')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('45', ') E G ˆ 4đ HIỂU AI
5 == N | Lal 5
T . a GIAO VIỆC DUNG
= - XÂY WORKFLOW |
¬ TĂNG NĂNG SUẤT J
¬ a Claude — if
^. aude — ¡
Al Co-Work \
⁄ x
CHO CONG VIEC VA KINH DOANH = | (@ Ầ
⁄Ø Làm chủ Claude Al dé tang nang suất Glia ⁄ / .
77 - tối uu công việc - butt pha kinh doanh 37 <4 —< Ẩ ì
l x n 52 m s ¬= N AT DA H
ZØ LÀMCHỦCLAUDEA! | G@ ĐẾTÃNGNĂNGSUẤT |  (Ï BỨT PHAKINH DOANH | BẮT ĐẦUNGAY > | |
Ạ ;
CĨ`, GIGI THIỆU KHOA HOC. &) 2 KHOA HOC NAY DANH CHO Al?
Khóa hoe thực chiến giúp ban hiểu cách phối hgp giữa con người BBs Chi doanh nghiệp SME, CEO, Founder muốn img dung Al vào van hanh,
i . . + Marketing, Sales va quén lý d6i nhóm
va Al dé xay dung mé hinh "Al Co-Work" trong công việc va kinh doanh.
= ~ || (GB nhânvănMtetng Comet crestr nuốn an te sin at ni dng,
ot „ s a = B Xe . research, lập ké hoach va triển khai chiến dich.
© 0 a al ©, Nhân ự Saos, C9KH tlsaes mun ng dng A vào uv, |
. ñ ‘cham sóc khách hang va tối vu hiệu suất ban hang
DEHIEU  THỰCCHIẾN ÚNGDỤNGNGAY KHONG QUA BAM SÁT NHU CẤU : 4 r
ay estos TÂY . Qué van han, quin jd sn, tưởng phòng mun tp kếhoạch
xy SOP, quan lý công việc va tối wu workflow đội nhém
Thông qua lộ trình 6 bước, hoc viên sé nám ving tu duy Al, viết Prompt ding, Nhan sự văn phòng, trợ lý, admin muốn giảm thời gian xử lý.
xây workflow lam việc cing Al va ung dung Claude Al vào nhiều céng việc cõng việc lập lai, tang hiệu qua céng việc hang ngay
thực tế: Content, Sales, CSKH, Research, phan tich dữ lệu, lập kế hoạch, 7 Fresancer, Agency, KOCIKOL, nhà sángtạonội dung muốn 6 v
xây SOP, giao việc va tối ưu công việc van phỏng.  quy trình lam việc va tang hiệu qua cả nhãn.
= } 2 Người mdi bat đầu tim hiểu Al, muốn hoc thực chiến, dé hiếu
va Ung dung duge ngay
(3 HOC XONG BAN CO THE LAM ĐƯỢC Gi? iy. 07 nate mun xây dung minh Al Co-ork” a ning cso
= L @ nang suất va kha nang cạnh tranh trong thời dai Al y)
v_ Hiếu rõ tu duy Al Productivity & Al Co-Work N x
v_ Sit dụng hiệu quả Claude Al trong công việc hang ngay Ị n A ợ b .
Vit Prompt ba ban theo nhiều myc teu công việc | Í (i SIEM KHÁC BIET CUA KHOA Học ˆ
l n n ấ s n a t u Thay vi chi "gờithiệu too!” hay "viết Prompt cn Ie", khóa học tai ì
` Vinalink tép trung vao:
1, Ung dung Claude Al vào nhiều hoạt dong: - - n=
IE đ W Nhế i fm WORKFLOW LAM VIỆC THỰC TẾ CÙNG AI Jam
| ZA & Q aol] B Hoe vign khéng chi hoe “Al la gi2” ma sé hoc ]
Content — — Tôm tất eal c GI v b n n i
| Mette est | titan “ai tiiệu ‘Al giúp giải quyết công việc như thé nao
- Khóa hoc được xay dung theo tu duy:
lên ~ — ¬ ~ >) mS ⁄ — ~
Í í || # is
lie X8yS0P& - Quảng - Tạosideg Brainstorm & n » Gy?
shown || cheodet || cônvie - blocdo - Fung) |
| n XN NH HIẾU at ino ViỆc XÂY TANG x
vy Tang tốc xử lý céng việc tir 2-5 lấn nhờ Al ` ‘DUNG WORKFLOW NANG SUẤT Z _/
vy Kết hợp Claude với các công cu Al khác (ChatGPT, Canva Al, MOT SỐ WORKFLOW Al THỰC TE SẼ ĐƯỢC HOC
Gemini, Google Sheet Al, Notion Al...) 3 Ñ
1 Từng bude xãy dựng hệ thống “Al Co-Work" cho cá nhân Š ĨrIgL^'' L t me Sook AS crit ACTA
hoặc doanh nghiệ « ontent ¬ Repurpose i ]
Ñ n Ñ © ALOFPCE “Meeting Summary ¬ SOP KPI-> Report
— = L UỮ MARKETING Al Ressarch ¬ Content ¬ Campaign ¬ CRM ¬ Report
(4) OUTLINE CHI TIẾT 6 BƯỚI 4
sưới1 ỉ sưới 2 al sướI 3 í sưới 4 ì BƯỚI 5 BƯỚI6
HIẾUCLAUDEAl8 PROMPTENGINEERNG8 | UNGDUNGCLAUDEAI UNG DUNG CLAUDE Al CLAUDE AI TRONG TỔI ƯU NANG SUẤT &
TUDUY AI CO-WORK LAM VIỆC VỚI FILE TRONG CONTENT & TRONG SALES & VAN HANH & QUAN LY XÂY HE THONG
‘DUNG NGAY TỪ DAU THONG MINH MARKETING | cskH CONG VIỆC ‘Al CO-WORK
* Tổng quan Claude Al + Prompt Engineering + Research & insight khach hing - Timkiém & phẩntichkháchbảng - | - Lap ké hoạch & phản công việc. ++ Tổi uu workflow cá nhân.
-AleoWeksAiPedrity | + Céngthde Prompthiduqus | | = Vitnddungdd,estem | + Goiykicnbintwvdn,tolow-up | - Xây$OP-chodkis,quytinh || + K6t hop Claude vei
+ Céen Claude oat diag - | | - Cáclegi Prompt thve chiế, + VếtbiiĐngenpage,emel | -Vitemai,tnnhinpeposl || « Taobio cto, ting hep dUigu | | công cy & A khắc
+ các monn Case - Lam vie vl POF, xee, toning page - Xuý phn 96 cht le + Meeting summary, action pln | | + XAy Al Workspace hệ thống
+ Wodkflow im ve S bute | Does, Web +S60comentStốiuutUkhóa | | - Csr chim ste. ay khiéuna, | | „ Quin''y dy dn & theo dBi KP || + TỰ động hóa céng vib lp oi
- Hg lo ha St - Tom ti, phn ich, ich xuất | | - Lậpkếhogch content etn eh ing + 840 oo & quin toh hướng
insight wu - Phan eh t
(Z) THỰCHÀNH: || ly THUC HANH THUG HANH THYC HÃNH: THỰC HANH THỰC HANH:
E oeioncemn | E tnesPoreymnm | | Braye vc Ổ xykenwnwin ỏ ete TỔ XN neevmtievl
viet Promote, Tn ii Vit content hain cian Ema follow-up Tạo báo cto ty động. Hoàn tn A Co.Wok
TowerowAlcobla Tien xu tng bid LUpoantentncto thing enbin Cori yet | n N _ —X nu
incase diWeogece | S dy Pompeo cing ite ø a )
Gj'' THỰC CHIẾN 4 UNG DUNG rt TAI LIEU BOC QUYEN pty HO TRO SAU KHOA HOC 5
100% NGAY WORKFLOW MAU CONG DONG HOC VIEN - -')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('46', '——4 —»

1/10 3 CLAUDE CODE CO-WORK SERIES = = -
CLAUDE CODE = = Ô x<
- - —" ¬ ¡ á

— = lr =
LAGI? . ) @ Ỷ
ly lap trình Al - Hiểu code, viết code, sửa code cling ban. N Ẵ | l 1 0
A)
—_ = .N i s NIZA
( ~ Claude Code la trợ ly lap trình Al được phat triển bởi Anthropic. % \ = ENA
fai} Nó hoat động trong terminal / IDE, giúp ban hiéu codebase, L e x
an 7” Viết code, sửa lỗi, refactor va tang tốc moi công việc lập trình. - fe > E4 ie) i
i ~ aS z —
>> CLAUDE CODE CÓ THỂ LÀM 6Ì? > ! I ]*š“Œ
—Z ~~
5 “D> @\|: 5 | |{= ¡ ¡ = i
> > >» Ị Y=ÿ ‘=
HIEU CODE VIET CODE SUA LOI & DEBUG REFACTOR VIET TEST TANG NANG SUAT
Doc & giải thích Tao code mới theo Tim lỗi, giải thích Tốiưu code, cai thién | | Tao unit test, test case | | Tự động hóa tac vu,
codebase, logic yéu cau: function, nguyén nhân va cấu trúc, hiệu nang | và giúp tang độ bao ¬
chuong trình component, API, dé xuất cách và khả năng phủ kiểm thử cho script va hỗ tro
nhanh chong. script, module... khắc phục. dé bao tri. du an. L workflow hang ngày.
3S Vi SAO/NÊN|DÙNG CLAUDE CODE? -=——$<$<
. NHANHHƠN Ú ⁄ „ CHÍNH XÁC HON HIỂU SAU RONG ANTOAN HON © HO TRO 24/7
Đọc va hanh động Cif Hiểu ngữ cảnh tat, Xi  nhiều ngôn ngữ, g Đã xuất giải pháp ® @ iusasinsing aéng
{ap trinh nhanh hon dua ra gợi ÿ framework va kiến tric ‘an toan, tuan thi, (‘Q» hành cing ban trong
nhiều lần. ) chinh xác. dy án khác nhau.. best practice. moi dy án.
2} CLAUDE CODE HOẠT BONG NHƯ THẾ NÀ0? - ) Ứ ; E CODE | INGGIZ is
@ h Ban dua yêu cdu (cco laude )) | ( 3s} JavaScript ( React) ( Node js
Qua terminal hoặc IDE EY /TypeScript /Nextjs / Express
+ (VS Code, JetBrains...) | Ban: uA ham tinh téng == X=;ÃẨẼm x a
| cae phan từ trong mang. (AR) Django
() Claude Code phan tich os n coe: @ oo dj / Flask A na
N Code, fle, NT] r: mỂĩẮonỊuẮnay<ươ R — . —B —,
= ae Bak return arr.reduce( © C/C++ V Vue / Nuxt Be HIML/ 8S /SCSS
(sum, num) => sum + num, / =
(©) = Đưa ra kết qua H | = = ==
Viết code, sửa lỗi, ñ | hp)
giái thich & dé xuất giai phap We | a Eo g SOL n a PHP
+ - ư Giái thích: Hàm sử dụng ~ —
xe dé co dén tat ca à tt ir:
Ù tích hợp vao dy an \ Độ phic tap: 0(n) |: W=====ama —=x—
= —
E T = — » CLAUDE CODE KHONG THAY THẾ BẠN! >
@ or vi DỤ THỰC TẾ oe] . ;
a : : e “| Claude Code la trợ ly — không phải người thay thé. m‹
m
nT.g. 4 va chịu trách nhiệm với san phẩm cuối cing. s
@ Tao route GET /api/users T al Nec „ Z⁄ — E
!©  Kết nổi MongoDB va query di liệu a ee et 5 ila ty ca a +
@  Xừ lý phan trang, loc, sắp xép s E —< = 4
@ Tra vé két qua JSON chudn - Ê Ban din dat AI hỗ tro Kết quả tuyệt vời
ƒ 9 Claude Code ~ Trợ lý lập trình AI thông minh, a an Ce +)
Le — giúp ban tap trung vào diéu quan trong nhất: _ — a ae. |
= x ¬ 2 ;-S * ZN
Z3”17⁄4ú —~ XÂY DUNG SAN PHAM TUYET VOI! =. <=>
- L E —')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('47', 'N EE b
2/10 | 3 CLAUDE CODE CO-WORK SERIES yg > Claude
` z w — m
G —
PHU HOP VOI Al? ate
Danh cho moi lap trinh vién - Từ người mdi dén chuyén gia S I | NA
Claude Code là trợ ly lap trình Al linh hoạt, - ae) -¥)
giúp ban téi uu hiệu suất coding va nhu cau khác nhau. << —Z %x IDK 5
% AIPHU HOP VỚI AI?
o Ce |(S) 12 6 |S„e
.89e ~ & o2o
ate Oe CO
| LAP TRINH VIENCANHAN  NGƯỜIHỌCLẬP TRINH || FOUNDER / STARTUP FREELANCER / FULL-STACK TEAM / DOANH NGHIEP
* Viết code nhanh hon || + Gidi thich kign thue d8 higu | + Xay dung MVP nhanh chéng - Nhénvige-lamnhanh-dinghan |» Chuẩn hóa code & quy trinh
- Giái thích logic dé hiểu -Vidụthựetế,dểápdụng - Tao tinh năng, API, script + HB trg da ngén ngtr& framework || + Review code, dé xust cdi thién
+ Tim va sửa lỗi hiệu qua - Hỗ trglam bai tap, project | - Ty động héa công việc + Tang chat lượng sin phẩm + Tạo tai ligu, test, checklist
+ Téi wu va refactor code + Hoe nhanh qua thychanh | - Tiét kigm chi phi phat tién | | + Dễ dang mở rộng kỹ nang + Tang hiệu suất cả đội nhóm |
Tiết kiém thời gian, Hiếusâuhơn-Họcnhanhhơn- || Biếný tưởng thành san phẩm | Lam nhiều dy an hon, Pháttriển sảnphẩmổnđịnh, - |
l a cng) ( u n d a] Eưởng t rà wy Sn bền ving va chuyên nghiệp. ||
— 1 —CÁ“S”u=_ Ắ ———— )
X LOI ÍCH CHUNG KHI DUNG CLAUDE CODE
| NHANH HON ad CHÍNH XÁC HON - HIỂU SAU HON AN TOAN HON yy NANG SUAT! CAOHON, HOC HOI LIEN TỤC
Viết code, tim lỗi. CG ‘D8 xuất giải pháp Giái thịch cn ké Đề xuất cách xử l. aol Ty dong hóa tac vy Q ‘Claude Code luôn sin
| và hoàn thành dúng ngữ cảnh, logic, thuật toãn an toàn, tun thi code, tập trung vào ‘sing h rợ đónghành
cõng việc nhanh hon giảm sai sót va lỗi và cách hoạt dong best practice những việc quan trong ‘cing ban trong svt
| nhiều lan. khó phat hiện. cla code. và bao mat. và sang tao hon. ‘hanh trinh lap trình..
we SO SÁNH TRƯỚC VA SAU KHI DUNG CLAUDE CODE W Al SẼ HỖ TRO Gi CHO BAN?
CÔNG VIỆC TRƯỚC KHI DUNG ‘SAU KH! DUNG HIEU & PHAN TÍCH CODE
pe bus | a: Ga </: > Doc toan bé codebase, gidi thich logic, ludng hoat déng,
‡/2 Viet code Tim kiém, gõ nhiều, Đề xuất thông minh, cfaliaoeocoiohurri
dễ sai viết nhanh & đúng hon ( vz TAO & CHINH SUA CODE |
iE. Tmi@ebu) Mi GI ian, Khe Phân tich nhanh, chi rõ ủ…Ề° ¬ "Ề" eel ono thh bống theo vêu cầu
dinh nguyên nhan nguyên nhan & hướng sửa n |
ea ae 1 .. E ỮgJ TIM LOI & BE XUẤT SUA |
(1) Hoc kin thac mai 9c tai leu dai, khó g-kườn: apm, KJ Phat hiện lỗi, phan tích nguyên nhân va đưa ra giải php
hiểu va ap dung c6 ví dụ thực té rấ v ancin
 Fetectorende Lam t công, dB sót, Ể ma wy sạch code, fs) REFACTOR & TỐI UU
| ge 22001 Ñ Lam code gon hon, dé doc hon, nhanh hon va dé bao tri hon.
| Vittest Tốn thời gian viết test Tao test nhanh, day di (vem VIET TEST & KIEM THU
| thủ công va phủ hợp —......
[E] T8E&uabiooi  Vittay, tốn nhiều Tự tạo docs, README, ⁄4-`. TAO TÀI LIỆU
aie Greeny n ph B Sinh README, API docs, hướng dan str dung, comment
ai Higu suat lam vigc D8 qua tai, mệt mỏi, Nhe nhang hon, tap trung aw Syed |
gap khó khan vào gia tri cốt lồi /''\ TU DONG HOA |
E 2% Tao script, workflow, CI/CD, cron job va nhiều tac vy lập Iai.
KET LUẬN Durban là ai, 6 trình độ nao, Claude Code Ñ s ˆ
| Amẽ: L a n ia F BAT BAU CUNG CLAUDE CODE NGAY HOM NAY
Cg đều có thé trở thành tro lý lập trinh dang tin cậy, “Gi ty a ee .
C -. giúp ban viết code tốt han, nhanh hon va thông minh hon! yy) . va nang cap kỹ nang lập trinh của ban! |')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('48', '3/10 | Í 3# CLAUDE CODE C0-WORK SERIES | . =. / * Claude
- K ¬ - :

a K b R \ if N œ= 3
CAI DAT & BAT DAU oy UE

~ R HN . | Claude Code
VOl CLAUDE CODE Á Y đ@ —
Hướng dẫn từng bước để sẵn sàng làm việc với trợ lý lập trình AI. * N — (,

Chi vai phút cai dat, ban đã có một Al developer = r= | p)

Y) luén sẵn sang hỗ tro ban 24/7 trong terminal cia minh. | — I =¬ | * P ;
@ CHUẨN BI TRƯỚC KHI CAI DAT SS
HE DIEU HANH N0DE.JS | KET NOI INTERNET © _TAIKHOAN ANTHROPIC
= * mac0S 12+ s Phiên ban 18.x trở lên | C&n két nối ồn định dé IŒ. Đăng ký/đăng nhập tai:

+ Windows 10/11 (khuyén ding LTS) Claude Code hoạt động console.anthropic.com
* Ubuntu 20.04+ © Kiém tra bang: va d6ng b6 ngircanh, để lấy API key (nếu céin),
(hoặc distro tương dudng) node -v i} |
Ø CAI DAT CLAUDE CODE N —- —- =
A. CÀI BẰNG NPM (BON GIẢN NHAT) | B. CAI BANG NPM + NXP (KHUYENNGH) .“ 0 CAI BAT THU CONG
@® Mở terminal @ Cai dat npx (nếu chưa có): | @ Truy cap GitHub: github.com/anthropic-ai/claude-code |
@ Chay lệnh: | npa install -g npx @ Tai ban phù hgp với hệ điều hành của ban. |
npm install -g @anthropic-ai/clauée-code - @ Chay Claude Code: eyed
@ Kiếm tra cai dat: npx claude @ Kiémtra:
C A n ''@ Uv điểm: luôn ding phiên ban mới nhất claude --version
@ Nếu thay phiên ban hiện ra ma không cẩn cai dat lai. Y
la cai dat thành công! js? (2) | ()
TỞ Luu ý: Nếu gap lỗi quyền truy cp, thử chạy lai lệnh với sudo (macOS/Linux) hoặc mỡ terminal với quyền Administrator (Windows).
CHẠY LẦN ĐẦU & ĐĂNG NHẬP © CẤU HÌNH co BAN (TÙY CHỌN)
Toy chỉnh để ri nghiệm tt
@® Méterminal $ claude ì d A Tey
. Thiết lập API Key (nếu dùng key cá nhân)
@® Chay lệnh: Welcome to Claude Code! Ø S awe config set api-key YOUR_API_KEY
aug Sign in to continue m Thiết lập thu mục lam việc mac định
) Đăng nhập bang tai khoản 7 Open the following URL in your claude config set workdir ~/projects
Ce U (eA ge fe ce aed Chon giao diện mau (light/dark)
s A mice 7 claude config set theme dark
(nếu duge hỏi) @ Successfully signed in!
© Bắt dau phiên lam việc Claude Code is ready to help you code. z egnie suing iblerica!
với Claude Code! 4 .] =9 claude config list
@ avy TRINH BAT BAU LAM VIEC v NH EN aE
ra — — - G »
1. Mở dy án ==] 2 Khởichạy Claude Code :3. Dat câu héi / Yêu cdu 4, Nhận kết qua 5. Lap lai & Tối vu
Se > c 2 : i
Di:hyêndntưmp ~ (2==] claude Hỗi Claude về code Clade hin ch it ce, Kiến va, choh ava
dự án của ban, Claude sé đọc va hiểu yêu clu tạo tinh nang, giả thich va đề xuất. Uap lai dé dat kết quá.
alent n feodelies® cialben: sia lỗi, refactor. cách tốt nhất. tối ưu nhất.
*Ở Meo HOU ÍCH Q 161 THUONG GAP =| 2Ø BAN DA SAN SANG! X
© Dũng claude --help dé xem tất cả lệnh có sẵn. | @ “command not found: claude” ¬ Chua cdihodc chva them PATH. gi ty u C
@ Dũng/help tr hit cht 6 xem Wong dn nhanh. - | | @ “Authentication failed” Kim tral dng ir AP ky. Bay gi hay để Claude Code - 4
© Cie Cadidvngg cindy in nn Sdingtrmedtée | | đ Rae lnitecede + BondbwntyamsshbyBObisM te thanh trgly tp tinh =F
@ Gia terminal ngin gor host bing /exit hoặc Crt +b Œ Kết n6i mang yếu ¬ Ảnh hưởng đếntếc 45 va phin WS. | inh cao của ban!
; L i
. + CAI DAT XONG - CHỈ CÒN BƯỚC VAO CODE! . .
~ . = Claude Code luôn sẵn sang đồng hanh cling ban. : — l')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('49', '4/10 | | > CLAUDE CODE CO-WORK SERIES - p ˆ Claude
2 . Hề Ể `
T ~ z z
@ Claude Code
6) é rã
z _ . Analyzing
VOI CLAUDE CODE ‘|: m rA à ..
— =I ® Reading files
Dé Claude Code hỗ tro ban hiệu qua, 3 — Be © Understanding
nó can hiéu rõ codebase, luồng logic va ngữ canh du an. f= n ÿ @ Building context
[=] *& Va 11 | @ Ready to help!
QQ _ Claude Code doc, phan tich va xãy dung bức tranh tổng thé của dy an >> T
@®? đẻ dưa ra gợi ÿ chính xác, thông ngữ cảnh va phù hop nhất. > = | |) „
{Ø GLAUDE cove ĐỌC DỰ AN NHU THE NAO?) { ÍE} CẤU TRÚC DU AN THƯỜNG GAP CLAUDE CODE TÌM KIẾM DIEU Gi?
ae : B sre/ @ File cấu hình
— my-project/ A N
= aver DẤU TRÚC THU MỤC y-proj: Mã nguên chin của dng ung (package.json, tsconfig.json,
Rani các i ae file L sres components/ .env, vite.config.js...)
an trong và mối iên hệ x
a 9 pa  Các component tai sử dung. © Điểm bat đầu của ung dung
. jeagares & features/ (index.js, main.tsx, App.jsx...)
DOC NOI DUNG FILE services/ Cac tinh nang theo domain. . i
| Doc code, config, docs dé utils/ l i © Cac module, service chính
hiểu logic va mục tiéu. App. jsx Xử ly API, data, business logic. @ Luồng dữ liệu va dependencies
main. jsx i Fae _ @ Quy usc dat tên va cấu tric code
XAY DUNG NGỮ CẢNH public/ s © Tà liệu & comment quan trong
„ . 4 tests/ E tests/ x
Hiểu mục tiêu du án, luồng ae 7”TP”1¬171
Oo docs/ Kiến thủ don v interation tet.
chinh, dependencies, . #Ƒ F fi =
va cách các phẩn liên kết A env/ a U BAN CO THE KIEM TRA BANG LENH
N. N + m A package. json x
m nee B tesmtig son pacane. jn r Sy ich fh n u
B Jo depenceces ci
Giữ ngữ cảnh trong suốt phién EB) READHE.nd - ats a, b # Đọc file cụ thé
lam việc dé hỗ trợ ban tốt han. I .gitignore Gá i ign hah | /read sre/App.jsx
ST FL #Timkiếm trong dự án
/search "authh"
CACH GIUP CLAUDE CODE HIỂU DU AN NHANH & CHÍNH XÁC HON
1 Cau trúc rõ rang 2. README day di 3. Comment hợp ly 4,Tach module nhd  5.Fileconfigchuẩn 8.Loại trừ fle khang cẩn thiết
| = |
Tổ chic thư muc, dat tên Môtảmuctiêudựán, Gidithich logic phic tap, Chia nhỏ chức năng, Cấu hinh rõ rang, ‘Su dụng .gitignore dé
file, folder theo quy ước cách setup, cSu tric, - luông xis lý va quyết giảm phy thuộc, tránh custom qué nhiều, loại bỏ file build, log,
nhất quan. cong nghệ sử dung. dinh quan trong. . tăng tinh tai sử dung. giữ don giản. node_modules...
ke Càng rd rang - Claude Code càng hiểu nhanh - Hé trợ ban càng chính xác!
@ ví DỤ: CLAUDE CODE PHAN TÍCH DY AN @ LỆNH HỮU ÍCH KHI LAM VIEC VỚI CODEBASE
ị 2:fflư Gợi ý tiếp theo: LỆNH MỤC ĐÍCH vi DỤ
> Dang phan tich dy an... > Xem luõng dif liệu chinh /1s (path) Liệt ké file & thu mục. /1s src/components
ee cee 02 I n ] Doe ni dung fle eae Sie oe
> Điển vào chinh: sre/main. jsx > Xem API endpoints ; : E 5
> Router: sre/routes /index.jsx > Hướng din chay dy an Jsearch [keyword] Tim kiểm trong dy an Jsearch “useEffect
> API elient:. sre/services/epi.Js rep (patter Tim theo pattem (egex Jarep "T000"
> State mangement: Zustand (sre/store/)  > Viet tinh nang moi dsp? lose) 5 u oe
> Database: Supabase (src/1ib/supabase. js) analyze Phan tich toàn bộ dự án. /analyze
“Pitre wae Á [tree [path] Hién thị cay thy mục. [tree src
Updates 90 to Supabase Ne | | . E
77 ˆ. Meo: Hay bat dau bing /analyze dé Claude Code nắm tổng quan dy án!
Ẩ I rN
TRANG NOY i HIỂU DU AN KY - LAM VIỆC HIEU QUA GAP BOL ©
© Claude Code doc va hiểu dy dn của ban. An xe w xv Z=VZ
—] © céutric 5 ring gidp Al hiếu nhanh hem, Hay dé Claude Code trở thành "ban dé’ Bay
Z | 9 s cô thể ding các inh dé khim phí codebase m Y
@ Hiếu dy án tốt = Gai ÿ tốt hon, dung ngữ cánh hon. > m
2G Tếp theo: Viét code mới bằng Claude Code Tao chức năng, > # BAT DAU CUNG CLAUDE CODE NGAY HOM NAY |
Ụ “¥> component, API theo yêu cau của ban! | va nang cap ky nang lập trình của ban!')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('50', '5/10 | | 3€ CLAUDE CODE CO-WORK SERIES > Claude
=. ¬ „ ⁄ à
eS / ‘ny A @ Claude Code
NAO BR | >
s ° - = Ø Connecting APT....
l @ Processing data..
A i - ầ © Success!
Tích hop API dé dang dé mở réng sức manh cho dy an của ban. % y | WwW
Zz.. WZ
(AP!) Claude Code giúp ban kết néi, goi va xử lý API nhanh chéng, antoàn .. . — M Ỉp
va hiệu qua - từ REST API phé biến dén các dich vy Al mạnh mẽ : =< = J
Ø APILÀ 6Ì? CAC LOẠI API PHO BIEN QUY TRINH LAM VIEC VỚI API
s Yêucấu REST API G Xác định API cần ding
[o==| (Request) B Phổ biến nhất, sử dung HTTP. 9Ø oc taillzubien endpoint
ee a § > ¡ - và tham số.
(GET, POST, PUT, DELETE). Ũ
= ‹ — i
ã rT API F e £ Lay API Key (nếu có)
Ung dung gene, Dich vu / GraphQL API Đăng ky tai khoản va lay
cia ban Server Truy vấn dữ liệu inh hoạt | ÿ APikeytoken
và hiệu quả hơn. i a H ..
API (Application Programming Interface) la cầu nối cho ° & Gửi request (yêu cau)
phép ứng dung của ban giao tiép với các dich vy, hệ thống khác. SOAP API | ‘SU dung Claude Code dé goi
| APL với phương thức phi hop.
Vidu: Giao thức cổ hon, ding XML, | Ũ
độ dinh, bao mat cao. © GS Xửlýresponse (phan hoi)
gies ) u Nhan va xử lý dữ liệu trả vé
5 ove nae
Gy e (By we) AI API eee es
trode Secs Ye GONG i Ci APAinyh mh © (O) Ladina vo yin
‘APL ''OpenAl, Anthropic, Hugging Face... Luu tris, hiển thị hoặc kết hop
với logic nghiệp vụ.
@ GI REST API VOI CLAUDE CODE ~ vi DY THỰC TE
“A. GOI API (GET) - LAY DU LIEU THO! TIẾT ) Response (vi du)
$ claude t
// Goi API thoi tiết (0penWeather) “coord”: { "lon": 105.85, "lat": 21.02 },
const apiKey = "YOUR_API_KEY"; weather” iL wi ae ay"
const city = "Hanoi"; (main": "Clouds", “description”: "dam may",
const url = ‘https: //api.openweathermap.org/ ee oe n }
data/2.5/weather?q=$(city}ñapp1d=9(apiKey}&units=metric'' ; "main": {
“temp”: 28.6,
const response = avait fetch(url); “feels Like": 31.2,
const data = await response. json(); humidity": 74
console.log(" i Thời tiết tai $(city)}'', $(data.main.temp}°C) ; x
P — U L
B. GOI API (POST) - GUI DU LIEU
$ claude -Q¢ MEO KHI LAM VIỆC VỚI API
—
const response = avait feteh("hetps://api.exomple.con/tasks'', { © Doc kj tai ligu API (Documentation).
headers: { ae ae © Giữ an toàn API Key, khong commit lên Git.
"Content-Type": ‘application/ json’,
‘Authorization’: ‘Bearer YOUR_TOKEN'' ''® Xt ly lỗi (error handling) cần than.
+ „
body: 2S0N.stringify({ © Giới han sé lan goi API (rate limit).
Se kh Loe © Ding biển môi trường dé lưu API Key.
 dueBate: "2024-05-20" — nr”7”T ¬
Wi const apiKey = process.env.MY_API_KEY;
const result = await response. json(); 77 Lưu terong: .env: MY_API_KEY=your_key’
console. log(''M Tao task thành céng:'', result);
CAC API HOU {CH BAN CO THE THU KIEM TRA API NHANH
APL Mô tả Website Ñ „ [P8kuth
EH EE E S QG reve Dwi Fo http
AnthropicAPl - Si/dung Claude qua API —_‘hitos/consoleanthopiccom Gui request, Giao didn dep, Ding dang nh, —_CLithn thién,
kiém tra va test API dé ding nhẹ & nhanh cú phap don gian
© Google Maps API Bin d8, di diém, dinh vi https 7ldevelopers google.com/maps.
Vi du kiém tra nhanh với curl:
18 veeesin tad aad Se ope et) curl -X GET "https://api.github.com/users/octocat" \
© GiSbRESTAP —Quénty repo fle, isue,.._psi/éoce. github convenes -H "Accept: application/vnd. githubejson” 2
+ ; API MO - TIỀM NANG MG RONG! + H
i -. Với Claude Code, ban có thé kết nối thé giới va xây dựng những ung dung mạnh mẽ hon bao giờ hét. ˆ')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('51', 'L :
(6/10 9 CLAUDE CODE CO-WORK SERIES con > Claude
A i ¬ iA Claude Code
LAM VIEC VOI DATABASE (9) , (n^ ) ......
` = „ | ® Truyvấnthôngminh
CUNG CLAUDE CODE ís Ÿ Aw A oe
Ả à ro r Sy C
& Két néi, truy van va quan ly dữliệudễ dàng,antoàn.. ———- ‹ l
— t o mat dữ liệu
—< Len :
> Claude Code giúp ban kết nối database, viết truy van, ⁄Z2 ², E ‹
È— phan tích dữ liệu va tối uu hiệu suất nhanh chóng. —S —X — ek
CAC DATABASE PHO BIEN ì KẾT NỐI DATABASE VỚI CLAUDE C0DE
= | DATABASE_URL="postgresq1://user:password@localhost:5432/dbname”.
# Hodc sit dung file .env
# DATABASE_URL=mysq1://user:password@localhost:3366/dbname. ủ’tnõi
MySQL PostgreSQL SQLServer SQLite CMongoDB - H
Quanhệ  Mạnhmẽ, TíĨchhợptốt Nhẹ,nhúng  NoS0L Tae a ấ c H i
mãnguốnmở mởrộngtốt vớihệsinhthái phùhợp mobile, linhhoạt, import { Client } from ''pg'';
Microsoft lo dữ liệu JSON const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
Ạ console.1og(''@ Kết nối thành công!'');
VIET & TOI UU TRUY VAN VỚI CLAUDE CODE
‘A. TRUY VAN CO BAN B. JOIN TABLE C. AGGREGATION D. Tối UU HIEU SUẤT
| — Lấy tat cả người ding SELECT status, | QB sizdung INDEX hop lý
SELECT id, name, email ia PK) idk) COUNT(*) AS total_users , i
FROM users; st ath FROM users ® Trành SELECT *
êt Ễ á GROUP BY status
ak hae m n ORDER BY total_users DESC; â
SELECT name, email | status created at pe) | Phan trang (LIMIT, OFFSET)
FROM users. = = s + G | | ¬
WHERE status = ''active'' Í sELECT u.name, p.title, p.created_at ; Œoeorgagos Il [4 Sử dụng EXPLAIN để phan tich
ORDER BY created_at DESC - FR0M users u @ Viét truy van phức tap a eB:
LIMT 10; JOIN posts = ON u.id = p.user_id aimee?
ee v a I @ Tốiuuhiu sult (index, EXPLAIN) 4 Cache kết qua truy van
| | ORDER BY p.created_at DESC; | @ Chuyén đổi giữa các dialect SQL
PHAN TICH & XU LY DU LIEU @ THỰC HIỆN CÁC THAO TÁC DỮ LIEU
X Tích xuất dữ liệu ( ''Ví dy: Théng ké người ding theo thang col INSERT INSERT INTO users (name, email)
2s xuôơnieseS.0kEed. u Thêmdữlệumð | VALUES (''An'', ''angéxample.com'');
Thống ké & Báo cdo 800 UPDATE UPDATE users SET status = ‘inactive’
alla. dé, ting ho, bigs , .v A ae pie
pair Pal Ổ cậpmgtdriệu | WHERE id = 1 ld .
Làm sạch dữ liệu 200 - l DELETE DELETE FROM users WHERE id = 1;
4. Logi bỏ di iệu tring lập, 0 - x Xóa dữ liệu J
thiếu, sai dịnh dang TN 72 T T Tổ 7 aE
¬ . a Ae a TRANSACTION - . :
Phân tích xu hướng Claude Code có thé giúp ban: ẨỶ bambao tinh toan ven - Thực hiện các thao tác
R Phan tích theo thdi gian, — COMMIT; -- hoặc ROLLBACK; J
hành vi, higu suất @ Tao bio cáo trực quan
@ Phat hién dữ liệu bat thường Luôn sử dung transaction cho các thao tac quan trong!
\ | a
l \O MAT & BEST PRI ¬
‘Sir dụng biến mai trường Parameterized Query Phan quyền hợp ly Sao lưu dữ liệu Giám sát & Log Kiểm tra & Tối ưu
a không hard-code Ig) Trinh SQL Injection. & Chi cấp quyền (A) Backup dah kj, <OD Theo dei host dong, G Dinh kj t6i wu index,
thông tin kết nối.. \Vi du: WHERE id = $1 can thiét. kiếm tra phục hỏi.. phat hiện bat thưởng. truy vấn chim,
=
7 - L : GHI NHớ Ø
+ — : + : FP: NHớ Ÿ
. Ả N I n ee : ia |
+t-+ DỮ LIỆU LÀ TAISANQUYGIA! - , Ory vent ]
. ũ l B Yvan théng minh |
¬ > ” 4721Ä 4 rane Ky Phan tic i 3
Với CLAUDE CODE, ban lam chủ dữ liệu - Bứt pha hiệu suat! + han tích hiệu qua !
a + a = ( Bdo mit tuyệt 464')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('52', '7/10 || 3& CLAUDE CODE CO-WORK SERIES) __ : X Olaude
XÂY DỰNG API & BACKEND ba] » eee
= ¡ m > Connecting 08.
com Ú | > eunning server.
-. © Ready!
Biến y tưởng thành hé théng backend mạnh mé, sn sang mé rộng. Ầ J N ) ÿ
. m r T : - I N.v / ⁄ SS aN
J Claude Code giúp ban thiết kế, viết code va tối uu backend * S = - IZ Ố
3. nhanh chóng, chuẩn cấu trúc va dé bao tri. 3 — Siz ai w
s = —- .
@ KIẾN TRÚC BACKEND PHG BIEN CHON STACK VỚI CLAUDE CODE QUY TRINH XÂY DUNG API
: Xác định yêu cầu
egal n @ đ uty edn ordpot cn ti
Nhanh ph bin, hệ sin thin ee
i
8 Chọn phươngthúc (GET, POST, PUT, DELETE),
Monolithic Layered - Microservices @ l ial ad c n E n
‘on gin, phahep - Phẩnkprồràng, - Línhoạt dễ mởrộng, ự động tao docs —
Sing dung ns 48 bio ti phùhợphệ théng in  Y Nests | enw, config, router, model -
Cu tric mạnh mẽ, ‘i
m Pci vì s Kết nối Database
Business Logic Service ¬ Go (Gin) Vist logic & API
Data Access Repository AL lý đồng thời tốt @ amitgeie
Detebes Detabe Java + Spring Boot Kiém thử API, tich hợp test, Swagger/OpenAPI
== - ~ 6n dinh, bio mit, @ Tires!
enterprise-ready Deploy lên server/cloud, giám sat & tối vu
Vi DU XÂY DUNG API VỚI NODE.JS + EXPRESS
‘A. CAU TRUC PROJECT B, ĐỊNH NGHĨA MODEL (MONG0DB). C. ROUTES (EXAMPLE) D. CONTROLLER (EXAMPLE)
ae, nodels/oser.model.Js routes/user.routes.js controllers/user.controller. js
ee » | : { type: String, required: true, t router = express.Router() ie
[+ midd1ewares/ || I''oser''eerevin''], default: tueer!) + Èi x x đ x n E raed ere ara
ms — K n a N I I
ư Pa port default n0n90096.500) CUseF , users . getuserty
export default routers
"2 ì
@ KẾT NGI DATABASE | (Ø VALIDATION & ERROR HANDLING DOCUMENT API VỚI SWAGGER (0PENAPI)
— —Ơ F = X — — = ]—“o ,
M0NG0D8 (MONGOOSE) VALIDATION (Joi EXAMPLE) .Ví dụ khai bảo (YAML).
| @ swagger
77 en039/0.35 — T
Inport wongoose from ‘mongoese"; export const createUserSchena = Joi .object({ sete: ar Tự dong sinh docs
sE ak ee a > have: dot. string ).min(2)-required(), poe E .
t catch (err) { = =) bond 6
console.error(''X Connection error’, err); ERROR HANDLING (MIDDLEWARE) a ers a sey aul
n export const errorHandler = (err, req, res, next) => { requestiogy u t
P ¬| || console.error(err); Foquted: true aoe Se ding
POST SRES CC ERISA) const status = err.status || 500; "yea SeationySnon © swaggerui-express
model User { res.status(status). json({ ‘components: Qe
...ỀỀ K il oe © enestps. swagger
ee | nessage weet © fastept.operept
3 createdkt DateTine edeFault(nox()) 5 ype: integer
@ BEST PRACTICES
‘Sir dyng biến mỗi trường. Parameterized Query QO __ Phan quyén hợp ty, D Sao lưu dữ liệu G)> Giám sat & Log ® Kiếm tra & Toi ưu
Không hard-code Trinh SQL injection. Cf) Chieấpquyen AD Backup dion, ‘Theo d6i hoạt ding, Dinh kj tổi uu index,
‘thong tin két nối. Vi dy: WHERE id = $1 can thiết. kiếm tra phục hồi. phat hiện bat thưởng. truy vin chim.
GHINHỚ A = r
2 pacend t= AP ring Dotan ohn Ht ingcoo. L XÂY DUNG BACKEND VUNG CHAC ;
Claude Code Ia trợ ly dấc lye giúp ban xây dựng nhanh, i CUNG CLAUDE CODE! - TÀ x .
l u C u n n : Manh mé - An toàn - San sang mé rng! = 5')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('53', '8/10 | | 3 CLAUDE CODE CO-WORK SERIES - ~ 3XXClaude
oO z z A A @ coo
)
XU LY XÁC THỰC & - @ v t
¬ s |
A ¬ ĩ >> > Authenticating
PHAN QUYEN API 7
Ả y ì Yam) | > Access granted Ø
VOICLAUDE CODE | x g S =
s _ .
Bao vệ API của ban - Đúng người, dung quyén, dung dif liệu. = l N p :
fa) Claude Code giúp ban tich hop xác thực & phan quyén - \ BEES we -
dé dang nhập API an toàn va tuân thủ nguyén tấc bao mat. - ~ = eo /.
@ CÁC PHƯƠNG THỨC XÁC THYC | LUỒNG XÁC THỰC JWT VỚI CLAUDE CODE
APIKey E E=—¬
ge... ¬m¬Ạô¬m¬-ém
Phi hợp cho hệ thống nội bd. [=] S eS
Client API Server Tao JWT Client API Server
JWT (JSON Web Token) ‘Bang nhap Kiếm tra théng tin Tra vé token Gif token trong Kiém tra token
Token chia thang tin người ding. ativeatest a u
Bao mat, mở rộng tốt..
Vi dy tao & xác thực JWT (Node.js + Express):
pau 20 // Middleware xác thyc token
Xác thực qua bên thứ ba / Tạo token (ding nhập) function authenticateToken(req, res, next) {
(Google, Github...). const jwt = require(''jsnokbotion''); const token = req.headers{ ‘authorization’ };
L j const token = jwt.sign( Af (token) return res.sendStatus (401);
@ _ Session / Cookie x jwt.verify(token, process.env.JNT_SECRET,
én ding nhập trô 7 H (err, user) = (
~ Eins prea Shoo anderen) ees Process.env.JNT_SECRET, if (err) return res.sendStatus (483);
Phù hgp Ung dung web truyén thống. {Cexpiresin: ‘1h’ 3 req.user = user;
l next);
»
PHAN QUYEN (AUTHORIZATION) @ BẢo VỆ API - NHỮNG LỚP PHONG THU
{ MO HINH RBAC (Role-Based Access Control) | Vi dy kiếm tra quyén (Node.js + Express): [v) HTTPS.
| Quin t function suthorizeCroles = (1) { Mã de tan bộ GỦ Hau ruyễn i
người ding return (req, res, next) => { API Key / JWT
const userRole = req. user.role; Xác thực danh tinh người ding
L m Quan lý if (troles.includes(userRole)) { .
a nội dung | return res.status(403).Json({ - ee B iii
(ay | message: ‘Ban không c6 quyền truy cặp! @®_Chicho phép hanh dng hop lệ.
[viewer + Chi xem | vi Rate Limiting
5 |
fj H An thông tin nhạy cam
pouyen te: Ñ Ổ Khong trả vé dữ liệu khong cn thiết.
© Mõiustr thuộc về một hoặc nhiều role 77 Si dung
Ø Méi role có tập hop quyền (permissions). ‘app.get(*/admin/users*, authenticateToken, =] Logging & Monitoring
— khicho phép truy cp téinguyén. | authorice({‘adnin’, ‘editor’})); Ghi log, cảnh bao hành vi bất thường
@ LƯU TRU TOKEN AN TOÀN {Ø MIDDLEWARE BẢO MAT CAN THIET vi DU KET HOP HOAN CHỈNH
Nena aa helmet () Thiết lập các HTTP header 11 bang nhập => Nhận MT
a Pee K t I n 2 Gui 2MT trong header
rateLimit() Ô Giới han số request 3. Server xác thực token
theo IP. (authenticateToken)
ing shoved token Dé token qué bu
T 0 ee 5 0 n | | evra d 41 n t 20 ht n E
5 Xi ly request nếu hop lệ
7%, Làm mei token bing Trả về thing n nhạy cn const heleet © requíre(''helmet''); 6 Trả kết qué hoặc 16i phi hop
c- rabatlnt t aE etprecorte int’ © 200 0K - Thanh cing
anp.ox0(heleet()); © 401 Unauthorized - Chua xác thực
. N © 403 Forbidden - Không có quyền
Sain n m (Bg t SO E E
@ BEST PRACTICES
Thiết ké Bao mat | Tach biét Xử ly lối Logging Viết Test Tai liệu hóa
a RESTful (Vv) API | A logic A chuẩn hóa (uh & Monitor 4 cho API BA day da
Design Validate input, ding  Contrdler-Servee- Trảvẽ lỗinhátquản, - Ghilog, theo dõi Unit test, integration Does rõ rang giúp team.
JWT/OAuth, gidi han Repository rõ rang, dé hiếu cho client. ang va lỗi hộ thống, - test dé dim bảo 6 sd dung & mờ rng.
tate, HTTPS. | dé bao tri chat lượng..
Eioceaesdiea: ont cpa BAO MAT VUNG CHAC - HE THONG BEN LAU! ° :
ion ctl ete cae bry voce Với Claude Code, ban kiém soat ai được truy cap Ñ G
+ vaho được lam gi.')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('54', '9/10 | 3 CLAUDE CODE CO-WORK SERIES | a X* Claude
TEST & TOI UU HIEU SUAT ey? FEE
ae
= ; > Passed: 28
( | .
„ ie E a ˆ . > Coverage: 92%
Kiểm thir ky lưỡng - Bo lường & tối ưu - Ung dung ổn định, nhanh, tin cay. i TU i H
Claude Code giúp ban viết test, do hiệu suất, tim bottleneck Ề * = _ .
va tối uu hệ thống dé ứng dung luôn én định & hiệu qua. S \/ < è =
Vi SAO CAN TEST & TOI UU? PHAN LOAI TEST THUONG DUNG VIET TEST VỚI CLAUDE CODE
Be a eae ae | ae G
o Dam bao chat lượng Loai Test Mục dich Vidu Vi dụ: Unit Test với Jest (Node,js) ie Code
Phat hiện bug sdm, tang độ tin cay. Unit Test Kiém tra tung Kiếm tra him tinh // sum.test.js .
ham, module toán, validate.. export function sun(a, b) { W@W; Tao test case
Hiệu suất vượt trội return a + bị
„ r Kiếm tra sy API goi DB, service L T k dat:
“người ding hon. ieee Kim tra endpoint GET /users test(''cộng hai số dương", () => { đấu vào
T . = API POST /login. expect(sun(2, 3)).toBe(5); ee.
Tiết kiệm chi phi - » (Ø Đẽ xuấttest
Giảm lỗi, giảm downtime, tối ưu tai E2ETest Ion rang) I T E mnie cop this
an 0 ư người ding 2 Tao dữ liệu test(''cộng hải sé Sm’, () => { @ 9o độ bao phù
guyê expect (sum(-1, 1)).toBe(®); 1
T. . Kiếm tra hiệu suất =- 100, 1000, 10.000 (coverage)
Trai nghiệm tốt hon dưỡi tải ca0 request/giiy b @ Refactor code
Phan héi nhanh, ổn dinh, user hai long. Security Test ea e lề hống ee em Auth, pes bine a Cae y a6 guest
b;
@ 90 LƯỜNG & PHAN TÍCH HIỆU SUẤT
‘A. CAC CHI SO QUAN TRONG 8. CONG CỤ HỮU ÍCH C. BO HIỆU SUẤT VỚI K6 (Vi DU) D. PHAN TÍCH KET QUA
© Response Time & Postman / Insomnia import http from *ké/netp"; Requests
Thổi gan phan hai trang bin, Test API thi công fmport ( check, slepp 3 from *k6"s 42.5K read
Ø Throushout &% k6 / JMeter / Locust CE ACEO | 2) ‘Aug. Response Time
Sé lượng request xi / iy. Load Test — — 220 ms
Error Rate Lighthouse { duration: ''1n'', target: 260 }, | P95 Response Time
Si W Om
CPU/ Memory. New Relic / Datadog thresholds: { Ecrodrtate)
Database Query Time Prometheus + Grafana h Throughput
© saoyewvnm ® Metrics & Dashboard ee x | @ i ars
ches E ..g Tet res = hetp.get(etps://yourdonaincon/sers’); |
J x x s n —À AJ n T.
b Hiệu suất én định!
er, ˆ z ˆ
@ TỐI vu HIỆU SUẤT voi CLAUDE CODE @ KIỂM TRA Ty BONG (CI/CD)

TOI UU C0DE TỐI UU DATABASE CACHING TỐI UU HE THONG ) Rà @ &; ® c @
© toạibỏ code tia Ø Index phi hop © Cache dữ liệutinh © CON cho static assets È= l l Dae
(Ø Srdmgthuktoint§u © TrwyvincinSELecTentti& | © Redis/Memeached C Nén dtu (zip, Brot) |g hay Unit Test & Integration Test
© Giảm độ phic tap (Big-0) Phan trang (pagination) © Cache theo từng © Rete limiting BB Kiếm tra Coverage 2 80%
© Tảis0dụngcschekếtqud (Ø Tránhjoinhhông edn thiết - @ TIL hop iy Horizontal scaling © Lint, Security Scan
''© Tranh N+1 query Connection pooling ( cache maidation dingcich C) Queve chotéc wining _|- Load Test co bin

Ø Deploy khi tát ci pass lØ
== ee eee |
CHECKLIST TRƯỚC KHI DEPLOY @ Best PRACTICES ¡ Ý GB CLAUDE cove LUÔN ĐỒNG HANH
a @ Tat ca test pass |Ø Viết test nhanh chong:
LZ] # osesoeotyis Ụ` 19 Phat ign vind sém
ZL] & Không 6 18 bio mst nghiém tong t 1Ø Đẽ xuấttối u hiệu suất
Vittetvôe Đoköntường | Timboteneck Tiwi ty, PhổiNpteam < tv Ẹ
© Hiệu suất dap ang mong muốn atc songstng||noar ing! bing cfu, | tng dng pt | Dev = OA ZOps k Ø Ty dong hỏa quy tra
© Đã c6 Monitoring & cảnh bảo | — @ ° | !Ø Giúp ban build sin phim
Ø Rollback plan sin sing = .- mạnh mẽ & bén vững.
GHI NHỚ : m m : h ĩ

— ÿ „ TEST KY - TOI UU HAY - UNG DUNG CHẠY MƯỢT MA! :
Es n s ee 0 vô n a 77 + +  Với Claude Code, ban xây dung hệ thống chat lượng cao, -. +
Eun doing asc nin! —‹ hiệu suất cao, sẵn sàng mở rộng! —z')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();

INSERT INTO public.premium_lessons (lesson_id, ocr_content)
VALUES ('55', '10/10| | CLAUDE CODE CO-WORK SERIES| - ~ . —
a “a i} À , `
À 2 ¥
~ Pa a @ ® @ >- Claude Code
TONG KET & TRIEN KHAI S ⁄ c.....
U 4 Ứ =) Se A All Systems Green
DU AN VŨI CLAUDE CODE _"4 Se
Biến ý tưởng thanh san phẩm thực tế - Nhanh hon, thong minh hon! > v —,
@@M_. Với Claude Code, ban có thé xây dung, test, tdi uu va deploy a eP ð
- B ting dung hoàn chinh chi trong vai bước. — — z ẽÀ Ỉ |- -
N =-- — — >
E HÀNH TRINH 10 BƯỚC CUNG CLAUDE C0DE KIẾN TRUC DỰ AN MAU KET QUA BAT ĐƯỢC
®) 1 Lamvige voi APL Ồ ©& Xay dung API hoàn chình
2 Phan tích yêu cầu . —› Kap ¬ ủ°““W°W²Ế®Ủ°W
iia Š —
3 Kếtnối&quảnlýDatabase -© | Frontend Backend Database @ Hiệu suất cao
Ề (UI/UX) (API Server) (PostgreSQL) 4 Tối uu tốc dé & tai nguyên.
@~9 4 Thiết kế kién trúc =-. + ˆ
| as we d aie
. H H Bao mat tuyệt đối
Xây dựng Backend |
@ 5) Xây dựng Backen ! Ỉ H al Xéc thyc, phn quyén, ma hoa
8 Viếtcode&cáuhnh - -9--; Ù i RA) Ị ==
1 ) i Z i Dé dang mở rội
@ 7 wwwariew | Auth Cache Monitoring
! (UWT/OAuth) (Redis) (Prometheus) Deploy nhanh chóng
® 9 Test&tốiưuhiệusuất œ....⁄ a) CI/CD ty dong,
10) Trién khsi & Deploy ⁄ sn sng production - - = =
@ CÔNG cy Hỗ Tro @ qUY TRINH TRIỂN KHAI NHANH @ MẸ0 & BEST PRACTICES
Claude Code + Chuẩn bi ôn quan ly 5
®:2. .@|0 oe... i
a | dependencies ˆ raw te
(er Node.js / Python / Go - f Q Viết code module hóa, dé bao tri
Backend Frameworks, - * | || (2) Cau hinh .
=J † Thiétlap.env& - ì - Sử dung | &
PostgreSQL / MongoDB SS) È kétndi database ! @ Sử đụng logging & monitoring
Datab: = | - i
eel 5 @ 9œwsrs - , @® Tối ưu query & cache dit liệu
‘Swagger / 0penAPI > . > T Runtests &kiém - Ý
Tôi liệu APL > & Í tai a ( kiém tra ky trước khideploy v 1 /
v v Deploy — ⁄ Ạ 3
Bs Docker / CI-CD &: ⁄ @ Deploy lên server P `
®D Triên knai & Devops (Cloud/vPs) — Wr
UNG DUNG THUC TE © TÀI NGUYÊN & Hoc TAP
poe — ¬_
al a p > o®o
= T L ồ | Ø
eR a) © fp oe & (
— = = S =S S
Web App REST API Dashboard Al Agent  Mobile Backend Docs Examples Community - Updates
Quan ly dirligu Tíchhgphệthống  Phântich&thốngkê  Tự dng héa H6 trợ da nén tang Tailiguchinh thc Dựánmẫu  Cộngđốnghổ rợ  Cập nhat mới
* - CHUC MUNG BAN ĐÃ HOAN THÀNH SERIES 10/10!
- y + - Với Claude Code, moi y tưởng đều có thé trở thành hiện thực. ‡ Ể
S . Hay tiếp tục sáng tao - xây dung những san phẩm tuyét voi! — =')
ON CONFLICT (lesson_id) 
DO UPDATE SET ocr_content = EXCLUDED.ocr_content, updated_at = now();
