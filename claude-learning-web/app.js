const modules = [
  {
    id: "foundation",
    title: "Nền tảng Claude",
    range: "01-11",
    lessons: [
      ["01", 1, "[Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster", "overview", "Nắm bức tranh toàn khóa: 30 poster Claude, 10 poster Co-work và 10 poster Code."],
      ["02", 2, "[Định hướng] Tự học Claude A-Z trong 50 poster", "overview", "Hiểu cấu trúc bộ poster, nhóm năng lực và cách học theo từng trang."],
      ["03", 3, "[Định hướng] Lộ trình học mỗi ngày 1 poster", "plan", "Xác định thứ tự học theo ngày, mốc hoàn thành và cách dùng poster như checklist."],
      ["04", 4, "Bài 01: Giới thiệu Claude", "concept", "Hiểu Claude là trợ lý AI thông minh từ Anthropic và các điểm nổi bật."],
      ["05", 5, "Bài 02: Claude có thể giúp gì cho bạn", "concept", "Nhận diện các nhóm ứng dụng chính của Claude trong viết, học tập, phân tích, lập trình, marketing và dịch thuật."],
      ["06", 6, "Bài 03: Các thành tố trong ứng dụng", "tool", "Nắm các khu vực chính trên giao diện Claude để thao tác nhanh và làm việc hiệu quả hơn."],
      ["07", 7, "Bài 04: Đăng ký, đăng nhập và bảo mật tài khoản Claude", "tool", "Tạo tài khoản, đăng nhập an toàn, quản lý tài khoản và bắt đầu sử dụng Claude."],
      ["08", 8, "Bài 05: Giao diện tổng quan Claude", "tool", "Nắm bố cục giao diện Claude, khu vực chat, sidebar, project, artifact, file đính kèm và điều hướng chính."],
      ["09", 9, "Bài 06: Cài đặt và tùy chỉnh cá nhân", "tool", "Tùy chỉnh giao diện, hành vi, thông báo, bảo mật và môi trường làm việc theo nhu cầu."],
      ["10", 10, "Bài 07: Cách chọn Claude phù hợp cho từng công việc", "tool", "Chọn đúng model Claude theo nội dung, độ khó, tốc độ và mục tiêu công việc. Cập nhật: Fable 5, Mythos 5 và cơ chế Safety Fallback Routing."],
      ["11", 11, "Bài 08: Hiểu cách Claude hoạt động", "concept", "Hiểu cách Claude xử lý yêu cầu, dùng ngữ cảnh, suy luận và tạo kết quả."],
    ],
  },
  {
    id: "prompt-application",
    title: "Prompt và ứng dụng",
    range: "12-23",
    lessons: [
      ["12", 12, "Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức", "prompt", "Dùng nguyên tắc và công thức prompt để giao tiếp rõ ràng, tạo kết quả tốt hơn."],
      ["13", 13, "Bài 10: Các loại prompt và cách sử dụng", "prompt", "Phân biệt các loại prompt phổ biến và chọn đúng kiểu prompt cho từng tình huống."],
      ["14", 14, "Bài 11: Hỏi đáp và tìm kiếm thông tin", "prompt", "Đặt câu hỏi đúng để Claude tìm, tổng hợp và trả lời thông tin chính xác, hữu ích."],
      ["15", 15, "Bài 12: Tóm tắt văn bản nhanh chóng", "task", "Biến văn bản dài và tài liệu phức tạp thành các ý chính ngắn gọn, dễ hiểu."],
      ["16", 16, "Bài 13: Giải thích khái niệm", "task", "Dùng Claude như gia sư AI để giải thích kiến thức theo nhiều mức độ và ví dụ."],
      ["17", 17, "Bài 14: Làm việc với văn bản", "task", "Đọc hiểu, phân tích, tóm tắt và xử lý văn bản dài như sách, báo cáo, hợp đồng."],
      ["18", 18, "Bài 15: Phân tích dữ liệu và báo cáo", "analysis", "Biến dữ liệu thành thông tin giá trị, trực quan hóa và tạo báo cáo hỗ trợ quyết định."],
      ["19", 19, "Bài 16: Viết content chuẩn chỉnh", "writing", "Tạo nội dung hấp dẫn, đúng mục tiêu, đúng đối tượng và có thể dùng cho nhiều kênh."],
      ["20", 20, "Bài 17: Brainstorm ý tưởng và giải pháp", "creative", "Khai phá ý tưởng đột phá, mở rộng lựa chọn và phát triển phương án khả thi."],
      ["21", 21, "Bài 18: Lập kế hoạch", "plan", "Xây dựng kế hoạch chi tiết, phân chia việc, timeline, rủi ro và bước hành động."],
      ["22", 22, "Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay", "task", "Tóm tắt mọi loại văn bản như bài viết, báo cáo, tài liệu, sách thành thông tin dễ dùng."],
      ["23", 23, "Bài 20: Thuyết trình tự tin và ấn tượng", "task", "Chuẩn bị nội dung, cấu trúc slide, luyện tập và cải thiện khả năng thuyết trình."],
    ],
  },
  {
    id: "data-business",
    title: "Dữ liệu và nghiệp vụ",
    range: "24-33",
    lessons: [
      ["24", 24, "Bài 21: Nghiên cứu và phân tích", "analysis", "Nghiên cứu thông tin, phân tích dữ liệu, rút insight và hỗ trợ ra quyết định."],
      ["25", 25, "Bài 22: Trình bày và tạo slide ấn tượng", "task", "Tạo slide chuyên nghiệp, bố cục đẹp, nội dung súc tích và truyền tải thuyết phục."],
      ["26", 26, "Bài 23: Dựng ý và viết nội dung thuyết phục", "writing", "Xây dựng dàn ý mạch lạc và viết nội dung hấp dẫn, thuyết phục, đúng mục tiêu."],
      ["27", 27, "Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp", "writing", "Nâng cấp bản nháp thành nội dung hoàn chỉnh, rõ ràng, mạch lạc và đúng mục tiêu."],
      ["28", 28, "Bài 25: Làm việc với file và trích xuất thông tin", "tool", "Tải lên, đọc hiểu, phân tích, trích xuất, tóm tắt và xuất kết quả từ nhiều loại file."],
      ["29", 29, "Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin", "analysis", "Thu thập, đánh giá, phân tích và tổng hợp thông tin từ nhiều nguồn."],
      ["30", 30, "Bài 27: Tạo và trình bày presentation chuyên nghiệp", "task", "Biến ý tưởng thành bài trình bày hoàn chỉnh có cấu trúc, nội dung, thiết kế và thông điệp rõ."],
      ["31", 31, "Bài 28: Quản lý dự án và công việc", "workflow", "Lập kế hoạch, phân công, theo dõi tiến độ, phân tích rủi ro và điều chỉnh dự án."],
      ["32", 32, "Bài 29: Marketing và truyền thông", "business", "Nghiên cứu thị trường, xây chiến lược, tạo nội dung, lên kế hoạch truyền thông và đo lường."],
      ["33", 33, "Bài 30: Chăm sóc khách hàng và CRM", "business", "Xây dựng quy trình chăm sóc khách hàng, quản lý thông tin và tạo trải nghiệm khách hàng tốt hơn."],
    ],
  },
  {
    id: "cowork",
    title: "Claude Co-work",
    range: "34-45",
    lessons: [
      ["34", 34, "[Co-work Định hướng] Claude Co-work tổng quan", "overview", "Hiểu cách làm việc cùng Claude như một cộng sự AI để tăng năng suất và tạo giá trị."],
      ["35", 35, "Bài 31: Claude Co-work là gì", "overview", "Nắm mô hình Claude Co-work và lý do nên làm việc cùng Claude như một cộng sự thực thụ."],
      ["36", 36, "Bài 32: Trợ lý AI đa năng", "tool", "Dùng Claude như trợ lý AI đa năng hỗ trợ nhiều khía cạnh công việc."],
      ["37", 37, "Bài 33: Workflow làm việc với Claude", "workflow", "Áp dụng quy trình 5 bước để giao việc, nhận kết quả, kiểm tra, điều chỉnh và hoàn thiện."],
      ["38", 38, "Bài 34: Giao việc đúng cho Claude", "prompt", "Viết prompt và giao việc rõ ràng để nhận đúng kết quả, đúng mục tiêu."],
      ["39", 39, "Bài 35: Công việc văn phòng", "task", "Xử lý email, ghi chú họp, SOP, kế hoạch và checklist trong công việc hằng ngày."],
      ["40", 40, "Bài 36: Phân tích và xử lý dữ liệu", "analysis", "Thu thập, làm sạch, phân tích, trực quan hóa dữ liệu và rút insight hành động."],
      ["41", 41, "Bài 37: Marketing cùng Claude", "business", "Lên ý tưởng, viết nội dung, phân tích thị trường và tối ưu chiến dịch marketing."],
      ["42", 42, "Bài 38: Quản lý dự án và làm việc nhóm", "business", "Lập kế hoạch, phân công, theo dõi, báo cáo dự án và phối hợp nhóm hiệu quả."],
      ["43", 43, "Bài 39: Tự động hóa và tối ưu quy trình", "workflow", "Tự động hóa tác vụ lặp lại, tối ưu quy trình và tập trung vào việc quan trọng."],
      ["44", 44, "Bài 40: Tổng kết và lộ trình làm việc cùng Claude", "task", "Tổng kết hành trình Co-work và xây lộ trình ứng dụng AI vào công việc mỗi ngày."],
      ["45", 45, "[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh", "workflow", "Làm chủ Claude AI để giao việc đúng, xây workflow và tăng năng suất trong công việc, kinh doanh."],
    ],
  },
  {
    id: "code",
    title: "Claude Code",
    range: "46-55",
    lessons: [
      ["46", 46, "Bài 41: Claude Code là gì", "code", "Hiểu Claude Code là tác tử lập trình AI (Agentic Coding Tool) hỗ trợ đọc, viết, sửa và hiểu codebase. Cập nhật: benchmark FrontierCode và case study Stripe."],
      ["47", 47, "Bài 42: Ai phù hợp với Claude Code", "code", "Xác định nhóm người dùng và tình huống phù hợp để dùng Claude Code hiệu quả."],
      ["48", 48, "Bài 43: Cài đặt và bắt đầu với Claude Code", "code", "Chuẩn bị môi trường và bắt đầu làm việc với Claude Code trong terminal hoặc IDE."],
      ["49", 49, "Bài 44: Đọc hiểu dự án với Claude Code", "code", "Giúp Claude Code hiểu codebase, luồng logic và ngữ cảnh dự án trước khi sửa."],
      ["50", 50, "Bài 45: Kết nối API với Claude Code", "code", "Thiết kế, gọi, xử lý và kiểm tra API an toàn, hiệu quả trong dự án."],
      ["51", 51, "Bài 46: Làm việc với database cùng Claude Code", "code", "Kết nối, truy vấn và quản lý dữ liệu an toàn, rõ ràng với Claude Code."],
      ["52", 52, "Bài 47: Xây dựng API và backend", "code", "Thiết kế, viết code và tối ưu backend có cấu trúc, dễ bảo trì và sẵn sàng mở rộng."],
      ["53", 53, "Bài 48: Xử lý xác thực và phân quyền API", "code", "Bảo vệ API, kiểm tra đúng người, đúng quyền và đúng dữ liệu."],
      ["54", 54, "Bài 49: Test và tối ưu hiệu suất", "code", "Viết test, đo hiệu suất, tìm bottleneck và tối ưu hệ thống."],
      ["55", 55, "Bài 50: Tổng kết và triển khai dự án với Claude Code", "code", "Đóng gói, test, tối ưu và deploy ứng dụng hoàn chỉnh với Claude Code."],
    ],
  },
];

const lessonFlow = [
  "Đọc mục tiêu bài học, xác định nhánh năng lực và đầu ra phải hoàn thành.",
  "Xem ảnh trang gốc, đọc phần OCR từ sách và ghi lại 3 ý chính.",
  "Chọn bối cảnh áp dụng: hành chính nhà nước hoặc dân văn phòng.",
  "Chạy prompt thực hành, tạo bản nháp đầu ra và rà lại bằng checklist.",
  "Hiệu chỉnh đầu ra để dùng được trong công việc thật, sau đó đánh dấu hoàn thành.",
];

const flowByType = {
  overview: ["Đọc toàn cảnh bài học và xác định bài này nằm ở đâu trong lộ trình.", "Gạch ra 3 năng lực hoặc tác vụ bạn muốn đạt sau khi học.", "Chọn lộ trình phù hợp với vai trò hiện tại của bạn.", "Tạo checklist học cá nhân từ các module liên quan.", "Đánh dấu bài này là mốc định hướng và chuyển sang bài nền tảng tiếp theo."],
  concept: ["Đọc khái niệm chính và viết lại bằng ngôn ngữ của bạn.", "Tìm một ví dụ thật trong cơ quan hoặc văn phòng liên quan đến khái niệm này.", "Hỏi Claude giải thích lại theo 3 mức: dễ hiểu, nghiệp vụ, chuyên sâu.", "So sánh câu trả lời với bản đọc sạch và ảnh trang gốc.", "Chốt phần hiểu đúng, phần cần kiểm chứng và phần có thể áp dụng ngay."],
  tool: ["Mở công cụ hoặc giao diện tương ứng và xác định vị trí thao tác.", "Thiết lập theo checklist an toàn: tài khoản, dữ liệu, file, lịch sử làm việc.", "Thử một thao tác nhỏ để kiểm tra công cụ hoạt động đúng.", "Ghi lại lỗi, điểm gây nhầm lẫn và cách xử lý.", "Tạo quy tắc sử dụng công cụ cho lần làm việc tiếp theo."],
  prompt: ["Chuyển yêu cầu thật thành prompt có vai trò, bối cảnh, dữ liệu và đầu ra.", "Chạy prompt lần 1 để lấy bản nháp.", "Phân tích lỗi của bản nháp: thiếu bối cảnh, sai định dạng, quá chung chung.", "Viết lại prompt lần 2 với tiêu chí kiểm tra rõ hơn.", "Lưu phiên bản prompt tốt nhất vào thư viện cá nhân."],
  task: ["Chọn một tài liệu, email, biên bản hoặc nhiệm vụ thật để xử lý.", "Xác định đầu ra cần nhận: tóm tắt, bảng việc, bản nháp, checklist hoặc báo cáo.", "Dùng Claude tạo bản nháp theo format yêu cầu.", "Rà lại số liệu, tên riêng, deadline và phần cần người thật quyết định.", "Chỉnh bản nháp thành đầu ra có thể gửi hoặc sử dụng nội bộ."],
  workflow: ["Mô tả công việc lặp lại bằng đầu vào, đầu ra và người liên quan.", "Tách quy trình thành 5-7 bước có điều kiện bắt đầu/kết thúc rõ.", "Yêu cầu Claude tạo SOP hoặc checklist vận hành.", "Kiểm tra điểm nghẽn, rủi ro dữ liệu và trách nhiệm phê duyệt.", "Chốt phiên bản workflow có thể dùng lại cho lần sau."],
  analysis: ["Xác định câu hỏi phân tích trước khi đưa dữ liệu vào Claude.", "Chuẩn bị dữ liệu đã làm sạch hoặc đã ẩm danh.", "Yêu cầu Claude phân nhóm, tìm xu hướng, bất thường và giả thuyết nguyên nhân.", "Tách rõ dữ kiện, suy luận và khuyến nghị.", "Chọn 1-3 hành động tiếp theo có căn cứ để đưa vào báo cáo."],
  writing: ["Xác định người đọc, mục đích và giọng văn của tài liệu.", "Dựng dàn ý trước khi viết bản nháp.", "Yêu cầu Claude viết từng phần theo cấu trúc đã chốt.", "Biên tập lại độ rõ, mạch logic, độ dài và cách diễn đạt.", "Tạo bản cuối cùng kèm ghi chú phần cần bổ sung số liệu/căn cứ."],
  business: ["Xác định mục tiêu nghiệp vụ và người nhận kết quả.", "Thu thập bối cảnh: khách hàng, chiến dịch, quy trình, chỉ số hoặc vấn đề.", "Dùng Claude tạo phương án, kịch bản hoặc kế hoạch triển khai.", "Chấm điểm phương án theo tác động, chi phí, rủi ro và khả năng thực hiện.", "Chọn phương án ưu tiên và viết bước hành động tiếp theo."],
  creative: ["Đặt tiêu chí ý tưởng trước khi brainstorm.", "Yêu cầu Claude tạo nhiều hướng khác nhau, không chỉ một đáp án.", "Nhóm ý tưởng theo chủ đề, mức độ khả thi và tác động.", "Chọn 1 ý tưởng để phát triển thành thử nghiệm nhỏ.", "Viết kế hoạch thử nghiệm gồm thời gian, đầu ra và tiêu chí đánh giá."],
  code: ["Đọc yêu cầu kỹ thuật và xác định phạm vi thay đổi nhỏ nhất.", "Yêu cầu Claude khảo sát file, luồng dữ liệu hoặc API liên quan trước khi sửa.", "Tạo hoặc cập nhật code theo từng bước nhỏ.", "Chạy checklist kiểm thử: dữ liệu đúng, dữ liệu sai, lỗi biên, bảo mật, hiệu năng.", "Ghi lại thay đổi, rủi ro còn lại và bước triển khai tiếp theo."],
  plan: ["Xác định mục tiêu cuối cùng và mốc thời gian cần đạt.", "Chia mục tiêu thành các chặng học hoặc chặng triển khai.", "Gắn mỗi chặng với bài học, đầu ra và tiêu chí hoàn thành.", "Dùng Claude rà lại rủi ro, phụ thuộc và phần cần chuẩn bị.", "Chốt lịch học/lịch làm và bắt đầu từ bài ưu tiên đầu tiên."],
};

const typeGoals = {
  overview: ["Nắm phạm vi bài học trong toàn bộ lộ trình.", "Biết bài này liên kết với module nào.", "Xác định việc cần thực hành sau khi đọc."],
  concept: ["Hiểu khái niệm cốt lõi.", "Nhận diện giới hạn và trường hợp dùng đúng.", "Diễn giải lại bằng ví dụ của riêng bạn."],
  tool: ["Biết vị trí thao tác trong công cụ.", "Thiết lập môi trường hoặc giao diện đúng.", "Giảm lỗi do thao tác thiếu bước."],
  prompt: ["Viết yêu cầu rõ vai trò, dữ liệu và đầu ra.", "Bổ sung ràng buộc để Claude trả lời đúng chuẩn.", "Kiểm tra và lặp lại prompt sau phản hồi đầu tiên."],
  task: ["Biến một nhiệm vụ thật thành đầu vào cho Claude.", "Tạo bản nháp có cấu trúc.", "Rà lại chất lượng trước khi dùng."],
  workflow: ["Chuẩn hóa chuỗi bước làm việc.", "Xác định đầu vào, đầu ra và người chịu trách nhiệm.", "Tạo checklist có thể lặp lại."],
  analysis: ["Đặt câu hỏi phân tích đúng.", "Tách dữ kiện, giả định và kết luận.", "Chuyển insight thành khuyến nghị hành động."],
  writing: ["Dựng dàn ý trước khi viết.", "Giữ giọng văn và mục tiêu đọc thống nhất.", "Biên tập theo tiêu chí rõ ràng."],
  business: ["Áp dụng Claude vào tình huống nghiệp vụ.", "Tạo tài liệu hoặc kế hoạch có thể triển khai.", "Đánh giá rủi ro và bước tiếp theo."],
  creative: ["Mở rộng số lượng ý tưởng.", "Nhóm, chấm điểm và chọn phương án.", "Biến ý tưởng tốt thành kế hoạch thử nghiệm."],
  code: ["Đọc bối cảnh kỹ thuật trước khi sửa.", "Yêu cầu thay đổi nhỏ, có tiêu chí kiểm thử.", "Xác minh bằng test hoặc review thủ công."],
  plan: ["Biến mục tiêu lớn thành lộ trình.", "Xác định thứ tự học hợp lý.", "Theo dõi tiến độ bằng checklist."],
};

const lessonSpecificGoals = {
  "01": ["Nắm bức tranh tổng thể của khóa Claude A-Z.", "Phân biệt 3 nhánh học chính: Claude, Co-work và Code.", "Biết cách dùng cây sơ đồ để chọn lộ trình học cá nhân."],
  "02": ["Hiểu cấu trúc 50 poster và lý do chia thành 30 bài Claude, 10 bài Co-work, 10 bài Code.", "Xác định nhóm bài phù hợp với nhu cầu hiện tại.", "Tạo kế hoạch học nhanh trong 7 ngày hoặc 14 ngày."],
  "03": ["Nắm thứ tự học theo ngày và theo giai đoạn.", "Xác định đầu ra cần đạt sau từng cụm bài.", "Biết dùng poster như checklist theo dõi tiến độ."],
  "04": ["Hiểu Claude là gì và vai trò của Claude như trợ lý AI an toàn.", "Nhận diện các năng lực nổi bật: hiểu ngữ cảnh, xử lý văn bản, suy luận và bảo mật.", "Nêu được 3 trường hợp nên dùng Claude trong cơ quan hoặc văn phòng.", "⚡ BONUS Thế hệ 5: Biết Claude hiện có hai phiên bản thế hệ 5 — Fable 5 (thương mại, có rào chắn an toàn) và Mythos 5 (chuyên dụng quốc phòng qua Project Glasswing)."],
  "05": ["Phân loại các nhóm việc Claude có thể hỗ trợ: viết, học tập, công việc, lập trình, đa ngôn ngữ.", "Biết khi nào Claude chỉ hỗ trợ và khi nào cần người dùng kiểm chứng.", "Viết được mô tả ngắn về cách dùng Claude trong vị trí của mình."],
  "06": ["Nhận diện các thành tố chính trong ứng dụng Claude.", "Biết chức năng của sidebar, new chat, project, file, ô nhập, gợi ý nhanh và chọn model.", "Thiết lập quy ước sử dụng giao diện để tránh thất lạc nội dung."],
  "07": ["Nắm các bước đăng ký và đăng nhập Claude.", "Biết kiểm tra tài khoản đã sẵn sàng cho học tập và làm việc.", "Tạo checklist bảo mật cơ bản khi sử dụng tài khoản AI."],
  "08": ["Tùy chỉnh giao diện, sidebar, artifacts, preferences và tài khoản.", "Thiết lập thói quen lưu prompt, file và kết quả quan trọng.", "Tạo quy tắc cá nhân hóa không làm lộ dữ liệu nhạy cảm.", "⚡ BONUS Thế hệ 5: Biết cách cấu hình model string chính thức khi gọi API — claude-fable-5, claude-opus-4-8, claude-sonnet-4-6, claude-haiku-4-5-20251001."],
  "09": ["Phân biệt các dòng model Claude theo tốc độ, độ sâu và chi phí (nhập môn với Haiku, đa năng với Sonnet 3.5, phân tích chuyên sâu với Claude Opus 4.8 và mới nhất là Claude Fable 5 / Mythos 5).", "Chọn model phù hợp cho content, coding, phân tích dữ liệu, automation và research.", "Tạo quy tắc chọn model cho công việc cá nhân hoặc đội nhóm.", "⚡ BONUS Thế hệ 5: Hiểu cơ chế Safety Fallback Routing — Fable 5 tự chuyển yêu cầu sang Opus 4.8 khi chạm vùng nhạy cảm (an ninh mạng, sinh hóa) thay vì từ chối thẳng; 95% phiên bình thường chạy trực tiếp trên Fable 5."],
  "10": ["Hiểu quy trình Claude xử lý yêu cầu từ prompt đến kết quả.", "Nhận diện vai trò của ngữ cảnh, chất lượng prompt và mạch hội thoại.", "Biết cách hỏi lại và yêu cầu Claude tự kiểm tra câu trả lời.", "⚡ BONUS Thế hệ 5: Nắm kiến trúc 'Một nền tảng, hai phiên bản' — Fable 5 có bộ định tuyến an toàn tự phân loại câu hỏi nhạy cảm và chuyển hướng xử lý, giúp trải nghiệm mượt mà hơn so với cơ chế từ chối cứng nhắc của các thế hệ trước."],
  "11": ["Nắm công thức prompt chuẩn 5W1H.", "Tránh lỗi prompt thường gặp như quá mơ hồ, thiếu thông tin, không chỉ định đầu ra.", "Tạo prompt mẫu rõ vai trò, bối cảnh, dữ liệu, ràng buộc và định dạng.", "⚡ BONUS Thế hệ 5: Áp dụng nguyên tắc Prompt Engineering của Fable 5 — tối ưu token (không giải thích dài dòng bước cơ bản), tránh lạm dụng bullet points/tiêu đề phụ, ưu tiên văn xuôi tự nhiên (prose), từ chối lịch thiệp bằng văn xuôi thay vì danh sách."],
  "12": ["Hiểu và áp dụng 20 Nguyên tắc Kỹ thuật Prompt với Claude chia làm 4 Giai đoạn từ chuẩn bị đến thiết lập hệ thống.", "Làm chủ công thức viết prompt mạnh (Rõ ràng & Trực tiếp, Ngữ cảnh, Ranh giới rõ ràng, Ràng buộc dữ liệu thực).", "Biết cách tối ưu hóa phản hồi qua vòng lặp tinh chỉnh, phản biện (Pushback), so sánh và phân tích tổng hợp.", "⚡ BONUS Thế hệ 5: Áp dụng nguyên tắc Prompt Engineering của Fable 5 — tối ưu token, tránh lạm dụng bullet points, ưu tiên văn xuôi tự nhiên (prose), từ chối lịch thiệp bằng văn xuôi."],
  "13": ["Phân biệt các nhóm prompt: hỏi đáp, phân tích, sáng tạo, chỉnh sửa, quy trình.", "Chọn đúng loại prompt theo mục tiêu công việc.", "Xây dựng thư viện 5 prompt mẫu theo nhu cầu cá nhân."],
  "14": ["Dùng Claude để hỏi đáp và tìm kiếm thông tin theo hướng có kiểm chứng.", "Biết đặt câu hỏi tiếp nối để đào sâu vấn đề.", "Tạo mẫu hỏi đáp cho văn bản hành chính hoặc tài liệu nội bộ."],
  "15": ["Tóm tắt văn bản theo đúng đối tượng đọc và mục tiêu sử dụng.", "Tách ý chính, số liệu, việc cần làm và kiến nghị.", "Tạo mẫu tóm tắt 1 trang cho họp, email hoặc báo cáo."],
  "16": ["Yêu cầu Claude giải thích khái niệm theo nhiều mức độ.", "Biến thuật ngữ khó thành ví dụ dễ hiểu.", "Tạo bản giải thích dùng được cho người mới hoặc đồng nghiệp."],
  "17": ["Biên tập và tái cấu trúc văn bản bằng Claude.", "Điều chỉnh giọng văn theo đối tượng đọc.", "Tạo quy trình sửa văn bản gồm bản nháp, góp ý và bản hoàn thiện."],
  "18": ["Đặt câu hỏi phân tích dữ liệu rõ mục tiêu.", "Yêu cầu Claude tìm mẫu, bất thường và insight.", "Tạo bảng phân tích có kết luận, căn cứ và khuyến nghị."],
  "19": ["Viết content có đối tượng, thông điệp và kênh sử dụng rõ ràng.", "Tạo nhiều phiên bản nội dung theo giọng văn khác nhau.", "Xây dựng checklist kiểm tra content trước khi đăng/gửi."],
  "20": ["Dùng Claude để brainstorm nhiều hướng giải pháp.", "Nhóm và chấm điểm ý tưởng theo tác động và độ khó.", "Chọn một ý tưởng để chuyển thành kế hoạch thử nghiệm."],
  "21": ["Chuyển mục tiêu thành kế hoạch có timeline, nhiệm vụ và người phụ trách.", "Xác định rủi ro và điểm cần kiểm tra.", "Tạo mẫu kế hoạch dùng cho công việc tuần hoặc dự án nhỏ."],
  "22": ["Biến công việc lặp lại thành quy trình chuẩn.", "Mô tả đầu vào, đầu ra, điều kiện dừng và trách nhiệm từng bước.", "Tạo SOP mẫu cho một quy trình hành chính hoặc văn phòng."],
  "23": ["Tạo cấu trúc thuyết trình rõ thông điệp chính.", "Chia nội dung thành slide, luận điểm và phần nói.", "Tạo outline thuyết trình cho họp giao ban hoặc trình bày nội bộ."],
  "24": ["Nghiên cứu và phân tích dữ liệu/tài liệu theo câu hỏi cụ thể.", "Tổng hợp thông tin từ nhiều nguồn thành kết luận có căn cứ.", "Tạo bảng insight và khuyến nghị cho người ra quyết định."],
  "25": ["Trình bày kết quả phân tích thành báo cáo dễ đọc.", "Sắp xếp luận điểm, bằng chứng và khuyến nghị theo thứ tự logic.", "Tạo mẫu báo cáo ngắn dùng trong cơ quan hoặc doanh nghiệp."],
  "26": ["Dựng ý trước khi viết nội dung dài.", "Phát triển luận điểm thành đoạn văn có cấu trúc.", "Tạo dàn ý và bản nháp đầu tiên cho một tài liệu thật."],
  "27": ["Chỉnh sửa văn bản để rõ, gọn và nhất quán hơn.", "Phát hiện lỗi logic, lỗi diễn đạt và phần còn thiếu.", "Tạo bản hoàn thiện có ghi chú các điểm đã sửa."],
  "28": ["Làm việc với file và trích xuất thông tin quan trọng.", "Yêu cầu Claude chuyển nội dung file thành bảng, tóm tắt hoặc checklist.", "Tạo quy trình xử lý file an toàn trước khi dùng AI."],
  "29": ["Tổng hợp thông tin từ nhiều nguồn mà không mất ý chính.", "So sánh điểm giống, khác và mâu thuẫn giữa các nguồn.", "Tạo bản tổng hợp có kết luận và phần cần kiểm chứng thêm."],
  "30": ["Tạo tài liệu có bố cục, tiêu đề và mục tiêu đọc rõ ràng.", "Trình bày nội dung thành format dễ dùng lại.", "Tạo một mẫu tài liệu nội bộ hoặc hướng dẫn công việc."],
  "31": ["Quản lý dự án/công việc bằng danh sách nhiệm vụ và tiến độ.", "Theo dõi người phụ trách, hạn xử lý và rủi ro.", "Tạo bảng quản lý việc tuần hoặc kế hoạch triển khai nhỏ."],
  "32": ["Lập kế hoạch marketing/truyền thông bằng Claude.", "Xác định thông điệp, đối tượng, kênh và lịch đăng.", "Tạo kế hoạch truyền thông ngắn cho một chiến dịch cụ thể."],
  "33": ["Chuẩn hóa phản hồi chăm sóc khách hàng hoặc CRM.", "Phân loại vấn đề, mức độ ưu tiên và kịch bản xử lý.", "Tạo bộ mẫu phản hồi cho tình huống khách hàng thường gặp."],
  "34": ["Hiểu Claude Co-work như mô hình làm việc với đồng nghiệp AI.", "Xác định việc nào nên giao Claude trong ngày làm việc.", "Thiết kế nguyên tắc phối hợp để tăng năng suất mà vẫn kiểm soát chất lượng."],
  "35": ["Thiết lập cách giao việc cho Claude theo vai trò và tiêu chuẩn đầu ra.", "Tạo khuôn mẫu brief công việc cho Claude.", "Định nghĩa tiêu chí nghiệm thu khi Claude trả kết quả.", "⚡ BONUS Thế hệ 5: Hiểu hệ sinh thái Claude Cowork — ứng dụng desktop tác tử cho nhân sự phi kỹ thuật, điều phối từ xa qua mobile, tích hợp các Beta Agents: Claude in Chrome (duyệt web), Claude in Excel (bảng tính), Claude in PowerPoint (slide)."],
  "36": ["Dùng Claude như trợ lý đa năng cho nhiều mảng công việc.", "Biết tách việc lớn thành yêu cầu nhỏ, rõ ràng.", "Tạo danh sách 10 tác vụ có thể ủy quyền cho Claude."],
  "37": ["Thiết kế workflow làm việc với Claude từ nhận việc đến hoàn thiện.", "Kết hợp bước tạo nháp, phản biện, chỉnh sửa và chốt kết quả.", "Tạo workflow cá nhân cho một công việc lặp lại hằng tuần.", "⚡ BONUS Thế hệ 5: Tận dụng Claude Cowork để xây workflow tác tử — giao việc qua desktop/mobile, Cowork tự gọi Chrome Agent duyệt web, Excel Agent xử lý bảng tính và PPT Agent thiết kế slide, tạo quy trình tự động hóa xuyên suốt."],
  "38": ["Giữ mạch giao tiếp và ngữ cảnh khi phối hợp với Claude.", "Ghi lại quyết định, giả định và yêu cầu thay đổi trong cùng phiên làm việc.", "Tạo mẫu cập nhật tiến độ hoặc yêu cầu chỉnh sửa cho Claude."],
  "39": ["Ứng dụng Claude vào công việc văn phòng hằng ngày.", "Xử lý email, ghi chú họp, biên bản và tài liệu nội bộ.", "Tạo bộ workflow văn phòng gồm nhận việc, xử lý, gửi kết quả."],
  "40": ["Phân tích và xử lý dữ liệu bằng Claude trong bối cảnh công việc.", "Chuyển dữ liệu thô thành thông tin có giá trị.", "Tạo báo cáo phân tích ngắn kèm khuyến nghị hành động."],
  "41": ["Dùng Claude để hỗ trợ marketing và truyền thông.", "Tạo thông điệp, nội dung và kế hoạch tiếp cận đúng đối tượng.", "Xây dựng một mini campaign có lịch nội dung và tiêu chí đo lường."],
  "42": ["Quản lý dự án cùng Claude qua kế hoạch, deadline và trạng thái.", "Phân rã dự án thành nhiệm vụ có người phụ trách.", "Tạo bảng theo dõi dự án có rủi ro và bước tiếp theo."],
  "43": ["Tìm điểm nghẽn trong quy trình vận hành.", "Đề xuất cải tiến giúp giảm thao tác thủ công.", "Tạo kế hoạch tối ưu một quy trình cụ thể trong đội nhóm."],
  "44": ["Tổng hợp thông tin và viết báo cáo nhanh với Claude.", "Chuyển ghi chú rời rạc thành báo cáo có cấu trúc.", "Tạo mẫu báo cáo tuần/tháng dùng lại cho đội nhóm."],
  "45": ["Giao việc đúng cho Claude bằng bối cảnh, dữ liệu, tiêu chí và định dạng.", "Tránh yêu cầu quá chung chung hoặc thiếu căn cứ.", "Tạo mẫu brief giao việc áp dụng cho cơ quan/văn phòng."],
  "46": ["Hiểu vai trò của Claude Code trong hỗ trợ lập trình.", "Xác định tác vụ code phù hợp: đọc hiểu, sửa lỗi, refactor, test.", "Biết giới hạn và trách nhiệm kiểm tra của người dùng khi dùng AI viết code.", "⚡ BONUS Thế hệ 5: Claude Code là tác tử lập trình tự động (Agentic Coding Tool) — hỗ trợ CLI, desktop và mobile. Fable 5 đạt điểm FrontierCode benchmark cao nhất, di trú 50 triệu dòng Ruby codebase Stripe trong 1 ngày (thay vì 2 tháng)."],
  "47": ["Thiết lập tư duy làm việc với code theo phạm vi nhỏ và kiểm chứng được.", "Viết yêu cầu kỹ thuật rõ file, hành vi và tiêu chí hoàn thành.", "Tạo checklist trước khi yêu cầu Claude sửa code."],
  "48": ["Chuẩn bị môi trường làm việc với trợ lý lập trình AI.", "Biết các bước cài đặt/cấu hình cần kiểm tra.", "Tạo hướng dẫn khởi động dự án cho người mới."],
  "49": ["Dùng Claude để đọc hiểu cấu trúc dự án.", "Yêu cầu giải thích luồng dữ liệu, module và điểm rủi ro.", "Tạo bản ghi chú kiến trúc ngắn trước khi sửa code."],
  "50": ["Thiết kế và kết nối API có payload, lỗi và tiêu chí test rõ ràng.", "Yêu cầu Claude tạo hoặc rà soát luồng API.", "Tạo checklist kiểm tra endpoint trước khi triển khai."],
  "51": ["Kết nối web an toàn khi làm việc với dữ liệu và biến môi trường.", "Nhận diện rủi ro lộ khóa, token hoặc thông tin nhạy cảm.", "Tạo checklist bảo mật tối thiểu cho tích hợp web."],
  "52": ["Xử lý dữ liệu trong code bằng schema và validate input.", "Thiết kế chuyển đổi dữ liệu có kiểm soát lỗi.", "Tạo test case cho dữ liệu hợp lệ, thiếu trường và sai định dạng."],
  "53": ["Hiểu yêu cầu xác thực và phân quyền trong ứng dụng.", "Thiết kế luồng kiểm tra quyền và xử lý lỗi truy cập.", "Tạo checklist rà soát bảo mật cho chức năng đăng nhập/phân quyền."],
  "54": ["Viết test trọng điểm trước khi tối ưu hoặc refactor.", "Đo và xác định điểm nghẽn hiệu suất.", "Tạo kế hoạch tối ưu có tiêu chí so sánh trước/sau.", "⚡ BONUS Thế hệ 5: Tận dụng chế độ cô lập context: fork của Claude Code để Fable 5 chạy sub-agent tự động viết test, chạy thử và kiểm tra mã nguồn độc lập — tăng tốc kiểm thử song song."],
  "55": ["Tổng kết quy trình dùng Claude Code từ yêu cầu đến triển khai.", "Chuẩn bị checklist đóng gói và kiểm tra cuối.", "Tạo kế hoạch triển khai an toàn cho một prototype hoặc công cụ nhỏ.", "⚡ BONUS Thế hệ 5: Áp dụng case study thực tế — Stripe dùng Fable 5 di trú toàn bộ codebase Ruby 50 triệu dòng trong 1 ngày. Chuẩn bị prompt dự phòng cho Fallback Routing khi xây Skill liên quan bảo mật."],
};

const branchLabels = {
  overview: "Định hướng",
  concept: "Nền tảng",
  tool: "Công cụ",
  prompt: "Prompt",
  task: "Tác vụ",
  workflow: "Quy trình",
  analysis: "Phân tích",
  writing: "Soạn thảo",
  business: "Nghiệp vụ",
  creative: "Sáng tạo",
  code: "Kỹ thuật",
  plan: "Kế hoạch",
};

const typeApplications = {
  overview: [
    ["Hành chính nhà nước", "Chuẩn hóa năng lực dùng AI trong phòng ban", "Thống nhất cách dùng Claude để đọc văn bản, tổng hợp báo cáo và chuẩn bị nội dung họp.", "Bản khung năng lực, danh mục việc nên/không nên giao cho AI, checklist bảo mật dữ liệu."],
    ["Dân văn phòng", "Thiết lập trợ lý làm việc cá nhân", "Gom email, tài liệu, kế hoạch tuần và biên bản thành một quy trình dùng Claude.", "Bộ prompt khởi động, quy tắc đặt tên file, checklist giao việc cho Claude."],
  ],
  concept: [
    ["Hành chính nhà nước", "Giải thích văn bản chính sách cho người mới", "Cán bộ mới cần hiểu nhanh một khái niệm trong nghị định, thông tư hoặc quy trình nội bộ.", "Bản giải thích 3 tầng: dễ hiểu, nghiệp vụ, ví dụ áp dụng tại đơn vị."],
    ["Dân văn phòng", "Làm rõ thuật ngữ trong tài liệu dự án", "Nhóm vận hành dùng nhiều thuật ngữ khác nhau khi trao đổi với kinh doanh và kỹ thuật.", "Glossary ngắn, ví dụ đúng/sai, câu hỏi kiểm tra hiểu biết."],
  ],
  tool: [
    ["Hành chính nhà nước", "Thiết lập môi trường xử lý tài liệu an toàn", "Dùng Claude để soạn nháp nhưng tránh đưa thông tin cá nhân hoặc hồ sơ mật.", "Quy trình ẩn danh dữ liệu, checklist trước khi upload file, mẫu ghi chú phiên làm việc."],
    ["Dân văn phòng", "Tối ưu thao tác hằng ngày", "Nhân viên mở nhiều cuộc hội thoại rời rạc và khó tìm lại kết quả.", "Cấu trúc workspace, cách đặt tên đề hội thoại, mẫu lưu prompt hay dùng."],
  ],
  prompt: [
    ["Hành chính nhà nước", "Prompt rà soát công văn dự thảo", "Kiểm tra công văn trước khi trình ký: mục đích, căn cứ, giọng văn, thiếu sót và tính rõ ràng.", "Bảng góp ý gồm lỗi, mức độ ảnh hưởng, đề xuất sửa và phiên bản câu chữ thay thế."],
    ["Dân văn phòng", "Prompt viết email chuyên nghiệp", "Phản hồi khách hàng hoặc đối tác rõ ràng, lịch sự, đúng trọng tâm.", "Email hoàn chỉnh, tiêu đề, phiên bản ngắn và checklist tone-of-voice."],
  ],
  task: [
    ["Hành chính nhà nước", "Tóm tắt hồ sơ phục vụ họp giao ban", "Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.", "Bản tóm tắt 1 trang: bối cảnh, số liệu, vướng mắc, đề xuất, việc cần quyết."],
    ["Dân văn phòng", "Xử lý biên bản họp thành action items", "Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.", "Danh sách việc, người phụ trách, deadline, rủi ro, nội dung cần xác nhận lại."],
  ],
  workflow: [
    ["Hành chính nhà nước", "SOP xử lý văn bản đến", "Văn bản đến cần được phân loại, tóm tắt, gợi ý đơn vị xử lý và theo dõi hạn trả lời.", "Quy trình 6 bước, bảng phân luồng, mẫu phiếu giao việc và checklist theo dõi."],
    ["Dân văn phòng", "Workflow báo cáo tuần", "Tổng hợp tiến độ từ nhiều nguồn và gửi báo cáo đều đặn.", "Mẫu thu thập dữ liệu, prompt tổng hợp, khung báo cáo và bước kiểm tra cuối."],
  ],
  analysis: [
    ["Hành chính nhà nước", "Phân tích phản ánh/kiến nghị của người dân", "Nhiều phản ánh cần phân nhóm chủ đề, mức độ ưu tiên và đề xuất hướng xử lý.", "Bảng phân loại, nhóm nguyên nhân, mức độ khẩn, đề xuất phản hồi và đơn vị phụ trách."],
    ["Dân văn phòng", "Phân tích dữ liệu vận hành", "Dữ liệu ticket, doanh số hoặc tiến độ cần biến thành insight dễ hành động.", "Điểm bất thường, xu hướng, giả thuyết nguyên nhân, đề xuất thử nghiệm."],
  ],
  writing: [
    ["Hành chính nhà nước", "Soạn dự thảo báo cáo hành chính", "Biến ghi chú rời rạc thành báo cáo có căn cứ, kết quả, khó khăn và kiến nghị.", "Dàn ý báo cáo, bản nháp, bảng phần cần bổ sung số liệu."],
    ["Dân văn phòng", "Soạn tài liệu nội bộ", "Viết hướng dẫn, memo, đề xuất hoặc tài liệu onboarding cho đội nhóm.", "Tài liệu có mục tiêu đọc, bố cục, ví dụ, checklist áp dụng."],
  ],
  business: [
    ["Hành chính nhà nước", "Kế hoạch truyền thông chính sách", "Một chính sách mới cần được truyền đạt dễ hiểu cho người dân/doanh nghiệp.", "Thông điệp chính, FAQ, kịch bản bài đăng, rủi ro hiểu sai và phương án phản hồi."],
    ["Dân văn phòng", "Kế hoạch chăm sóc khách hàng", "Chuẩn hóa phản hồi, phân loại yêu cầu và theo dõi mức độ hài lòng.", "Kịch bản phản hồi, ma trận phân loại, SLA, mẫu tổng hợp cuối tuần."],
  ],
  creative: [
    ["Hành chính nhà nước", "Brainstorm cải tiến thủ tục", "Giảm bước, giảm thời gian chờ và tăng tính minh bạch trong quy trình.", "Danh sách ý tưởng, điểm tác động, độ khó, thí điểm 2 tuần."],
    ["Dân văn phòng", "Brainstorm chiến dịch nội bộ", "Cần ý tưởng cho truyền thông nội bộ, đào tạo hoặc cải tiến văn hóa làm việc.", "10 ý tưởng, tiêu chí chọn, kế hoạch thử nghiệm nhanh."],
  ],
  code: [
    ["Hành chính nhà nước", "Prototype công cụ tra cứu nội bộ", "Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.", "Yêu cầu chức năng, luồng dữ liệu, test case, rủi ro bảo mật."],
    ["Dân văn phòng", "Tự động hóa báo cáo bằng script", "Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.", "Script mẫu, hướng dẫn chạy, test case và checklist triển khai."],
  ],
  plan: [
    ["Hành chính nhà nước", "Lộ trình đào tạo AI nội bộ", "Phòng ban cần đào tạo theo cấp độ từ nhận thức đến ứng dụng có kiểm soát.", "Kế hoạch buổi học, tiêu chí đánh giá và danh sách bài thực hành."],
    ["Dân văn phòng", "Lộ trình nâng năng suất cá nhân", "Áp dụng Claude vào lịch làm việc, email, tài liệu và báo cáo.", "Kế hoạch 4 tuần, checklist kỹ năng, bài tập theo ngày."],
  ],
};

const workflowTemplates = {
  publicAdmin: ["Tiếp nhận tài liệu/vấn đề", "Ẩn danh dữ liệu nhạy cảm", "Yêu cầu Claude tóm tắt và phân loại", "Kiểm chứng căn cứ, số liệu, trách nhiệm", "Chốt bản nháp để trình lãnh đạo hoặc chuyển xử lý"],
  office: ["Xác định đầu ra cần gửi", "Thu thập dữ liệu từ email/file/họp", "Dùng Claude tạo bản nháp theo mẫu", "Rà giọng văn, số liệu, người phụ trách", "Gửi, lưu lại prompt và cập nhật checklist"],
  smeLeader: ["Xác định mục tiêu kinh doanh cần AI hóa", "Chọn 1 quy trình có tác động doanh thu/chi phí/thời gian", "Giao Claude tạo bản đồ quy trình và cơ hội tự động hóa", "Đánh giá ROI, rủi ro dữ liệu và người chịu trách nhiệm", "Chốt pilot 7-14 ngày, đo chỉ số và chuẩn hóa thành playbook"],
};

const smeApplicationsByType = {
  overview: ["Thiết kế bản đồ chuyển đổi AI-first cho SME", "Chủ doanh nghiệp cần nhìn toàn cảnh các năng lực Claude có thể tác động đến bán hàng, vận hành, chăm sóc khách hàng và quản trị.", "AI adoption map, danh sách quick wins, nguyên tắc dùng AI trong đội ngũ."],
  concept: ["Xây dựng tư duy AI-first cho đội ngũ quản lý", "Lãnh đạo cần giải thích khái niệm AI/Claude theo ngôn ngữ kinh doanh để đội nhóm hiểu và dùng đúng.", "Bản giải thích cho nội bộ, ví dụ ứng dụng theo phòng ban, câu hỏi kiểm tra nhận thức."],
  tool: ["Thiết lập workspace AI an toàn cho SME", "Doanh nghiệp cần quy định nơi lưu prompt, file, kết quả, quyền truy cập và dữ liệu không được đưa vào AI.", "AI workspace guideline, checklist bảo mật, quy tắc đặt tên và lưu tri thức."],
  prompt: ["Chuẩn hóa prompt điều hành", "Lãnh đạo cần prompt mẫu để yêu cầu báo cáo, phân tích, kế hoạch, phản biện phương án và giao việc cho đội ngũ.", "Bộ executive prompts, tiêu chí đầu ra và mẫu phản biện quyết định."],
  task: ["Tự động hóa tác vụ quản trị hằng ngày", "CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up.", "Bộ task automation prompt, bảng action items, mẫu báo cáo điều hành."],
  workflow: ["Thiết kế operating playbook AI-first", "SME cần biến quy trình lặp lại thành playbook có người phụ trách, chỉ số, điểm dùng AI và điểm cần người duyệt.", "AI-first SOP, ma trận trách nhiệm, checklist pilot."],
  analysis: ["Phân tích dữ liệu để ra quyết định nhanh", "Lãnh đạo cần dùng Claude để đọc báo cáo bán hàng, phản hồi khách hàng, chi phí hoặc tiến độ và rút ra quyết định.", "Executive insight brief, 3 khuyến nghị ưu tiên, danh sách rủi ro cần kiểm chứng."],
  writing: ["Tăng tốc soạn tài liệu lãnh đạo", "Cần soạn memo, thông báo nội bộ, đề xuất, tài liệu đào tạo hoặc quy định vận hành nhanh nhưng rõ.", "Executive memo, bản nháp truyền thông nội bộ, checklist giọng văn lãnh đạo."],
  business: ["Tạo growth playbook bằng AI", "Lãnh đạo SME muốn dùng Claude cho marketing, sales, CSKH, CRM và tối ưu vận hành tăng trưởng.", "Growth plan, kịch bản bán hàng/CSKH, dashboard chỉ số cần theo dõi."],
  creative: ["Brainstorm chiến lược và sản phẩm mới", "Doanh nghiệp cần mở rộng ý tưởng sản phẩm, dịch vụ, chiến dịch hoặc mô hình doanh thu với chi phí thử nghiệm thấp.", "Danh sách ý tưởng đã chấm điểm, 1 pilot được chọn, kế hoạch kiểm chứng thị trường."],
  code: ["Prototype công cụ nội bộ bằng AI", "SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn.", "Prototype brief, user flow, test case, rủi ro kỹ thuật và dữ liệu."],
  plan: ["Lộ trình AI-first 30-60-90 ngày", "Lãnh đạo cần biến định hướng AI thành kế hoạch triển khai có người chịu trách nhiệm, ngân sách và chỉ số.", "Roadmap 30-60-90, danh sách pilot, KPI và governance tối thiểu."],
};

const deliverablesByType = {
  overview: ["Bản ghi chú 1 trang về phạm vi bài học.", "Danh sách 3 việc có thể giao Claude ngay.", "Quy tắc sử dụng AI an toàn cho cá nhân/đơn vị."],
  concept: ["Bản giải thích khái niệm bằng ngôn ngữ dễ hiểu.", "Ví dụ đúng/sai trong bối cảnh công việc.", "3 câu hỏi kiểm tra lại mức độ hiểu."],
  tool: ["Checklist thao tác hoặc thiết lập công cụ.", "Mẫu đặt tên hội thoại/file để dễ truy xuất.", "Quy tắc không đưa dữ liệu nhạy cảm vào AI."],
  prompt: ["Một prompt chuẩn có vai trò, bối cảnh, dữ liệu, đầu ra.", "Một phiên bản prompt rút gọn để dùng nhanh.", "Bảng lỗi thường gặp khi prompt chưa đủ rõ."],
  task: ["Bản nháp đầu ra theo đúng định dạng yêu cầu.", "Bản tóm tắt quyết định/việc cần làm.", "Checklist rà lỗi trước khi gửi cho người khác."],
  workflow: ["SOP 5-7 bước cho công việc lặp lại.", "Bảng đầu vào, đầu ra, người phụ trách, hạn xử lý.", "Mẫu prompt tái sử dụng cho lần sau."],
  analysis: ["Bảng phân loại dữ liệu/vấn đề.", "Danh sách insight có bằng chứng đi kèm.", "Khuyến nghị hành động và rủi ro cần kiểm chứng."],
  writing: ["Dàn ý nội dung.", "Bản nháp hoàn chỉnh.", "Phiên bản đã biên tập theo giọng văn và người đọc."],
  business: ["Kế hoạch triển khai ngắn gọn.", "Thông điệp chính hoặc kịch bản phản hồi.", "Chỉ số theo dõi và rủi ro truyền thông/vận hành."],
  creative: ["Danh sách ý tưởng đã nhóm chủ đề.", "Ma trận chấm điểm tác động/độ khó.", "Kế hoạch thử nghiệm ý tưởng được chọn."],
  code: ["Yêu cầu kỹ thuật rõ phạm vi.", "Test case hoặc checklist kiểm thử.", "Ghi chú rủi ro bảo mật, dữ liệu, triển khai."],
  plan: ["Lộ trình học/triển khai theo tuần.", "Tiêu chí hoàn thành từng mốc.", "Danh sách bài thực hành cần nộp."],
};

const qualityGates = [
  ["Nguồn", "Phân biệt rõ nội dung lấy từ sách/OCR và phần biên soạn ứng dụng."],
  ["Dữ liệu", "Không đưa thông tin cá nhân, hồ sơ mật, số định danh hoặc dữ liệu chưa được phép xử lý vào prompt."],
  ["Kiểm chứng", "Mọi căn cứ pháp lý, số liệu, tên đơn vị, deadline phải được người học kiểm tra lại trước khi dùng."],
  ["Đầu ra", "Kết quả phải có người phụ trách, định dạng rõ, tiêu chí nghiệm thu và bước tiếp theo."],
];

const learningPaths = [
  {
    id: "all",
    title: "Toàn bộ khóa học",
    audience: "Người học muốn đi đủ 55 bài",
    lessons: null,
    outcomes: ["Làm chủ Claude từ nền tảng đến ứng dụng.", "Có bộ prompt và workflow dùng được trong công việc.", "Biết dùng Claude Code ở mức nhập môn."],
  },
  {
    id: "public-admin",
    title: "Hành chính nhà nước",
    audience: "Chuyên viên tổng hợp, văn thư, tham mưu, lãnh đạo phòng",
    lessons: ["01", "02", "04", "05", "06", "10", "11", "12", "14", "15", "18", "21", "22", "24", "25", "28", "29", "31", "34", "37", "39", "40", "42", "44", "45"],
    outcomes: ["Tóm tắt và phân luồng văn bản/hồ sơ.", "Soạn báo cáo, công văn, nội dung họp có kiểm soát.", "Thiết lập SOP xử lý việc lặp lại và theo dõi tiến độ."],
  },
  {
    id: "office",
    title: "Dân văn phòng",
    audience: "Nhân sự, trợ lý, marketing, sales admin, vận hành",
    lessons: ["01", "02", "06", "08", "09", "10", "12", "13", "15", "17", "19", "20", "21", "23", "26", "27", "30", "31", "32", "33", "34", "36", "37", "39", "41", "44", "45"],
    outcomes: ["Viết email, báo cáo, tài liệu nội bộ nhanh hơn.", "Chuyển họp và dữ liệu rời rạc thành action items.", "Tạo workflow cá nhân để tăng năng suất hằng tuần."],
  },
  {
    id: "sme-ai-first",
    title: "Lãnh đạo SME AI-first",
    audience: "Chủ doanh nghiệp, quản lý vận hành, trưởng nhóm tăng trưởng",
    lessons: ["01", "02", "04", "05", "10", "11", "12", "18", "20", "21", "22", "24", "25", "29", "31", "32", "33", "34", "35", "37", "40", "41", "42", "43", "44", "45", "46", "47", "49", "50", "51", "54", "55"],
    outcomes: ["Thiết kế workflow AI-first cho vận hành và tăng trưởng.", "Biết chọn việc nên tự động hóa, việc cần người phê duyệt.", "Có KPI, rủi ro, owner và kế hoạch pilot rõ ràng."],
  },
  {
    id: "code",
    title: "Claude Code",
    audience: "Người học muốn dùng AI cho lập trình và tự động hóa",
    lessons: ["01", "02", "10", "11", "12", "18", "21", "22", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55"],
    outcomes: ["Biết giao việc kỹ thuật cho Claude rõ phạm vi.", "Có checklist đọc hiểu, sửa, test và triển khai.", "Tạo prototype/tự động hóa nhỏ phục vụ công việc."],
  },
];

const roleProfiles = {
  all: {
    title: "Toàn bộ khóa học",
    goal: "Liên kết khái niệm, prompt, workflow và kiểm chứng đầu ra thành một năng lực dùng AI hoàn chỉnh.",
    flow: "Ghi lại phiên bản prompt tốt nhất, lỗi gặp phải và cách sửa để xây thư viện dùng lại.",
    output: "Bộ ghi chú học tập gồm prompt mẫu, checklist kiểm tra và ví dụ áp dụng cho ít nhất một tình huống thật.",
    input: "Vai trò người học, bối cảnh công việc và mục tiêu cá nhân khi học bài này.",
    process: "So sánh cách áp dụng bài học trong ít nhất một bối cảnh thật trước khi chốt đầu ra.",
    outcome: "Người học biết chuyển bài học thành một hành động cụ thể, có tiêu chí hoàn thành.",
  },
  "public-admin": {
    title: "Hành chính nhà nước",
    goal: "Áp dụng bài học vào văn bản, hồ sơ, báo cáo, lịch họp hoặc quy trình xử lý việc có yêu cầu kiểm chứng cao.",
    flow: "Trước khi dùng AI, ẩn danh dữ liệu và tách rõ phần thông tin gốc, phần AI gợi ý, phần người phụ trách phê duyệt.",
    output: "Sản phẩm hành chính có cấu trúc: mục đích, căn cứ cần kiểm chứng, nội dung xử lý, người phụ trách và bước trình/duyệt tiếp theo.",
    input: "Văn bản, hồ sơ, biên bản, email hoặc yêu cầu công việc đã loại bỏ thông tin cá nhân/nhạy cảm.",
    process: "Rà soát theo 4 lớp: đúng nguồn, đúng thẩm quyền, đúng giọng văn hành chính, đúng bước phê duyệt.",
    outcome: "Người học tạo được bản nháp hỗ trợ tham mưu hoặc xử lý nội bộ nhưng vẫn giữ nguyên trách nhiệm kiểm chứng của con người.",
  },
  office: {
    title: "Dân văn phòng",
    goal: "Biến bài học thành thao tác tăng năng suất cho email, họp, báo cáo, tài liệu, CRM, marketing hoặc vận hành hằng ngày.",
    flow: "Chọn một việc đang lặp lại trong tuần, đo thời gian hiện tại, dùng AI tạo bản nháp, rồi chuẩn hóa thành template dùng lại.",
    output: "Template công việc có thể dùng ngay: prompt, mẫu đầu ra, checklist gửi đi và tiêu chí chất lượng.",
    input: "Email, ghi chú họp, brief, dữ liệu khách hàng đã lọc, bảng việc hoặc tài liệu nội bộ cần xử lý.",
    process: "Tạo bản nháp nhanh, kiểm tra tone-of-voice, deadline, người nhận, số liệu và action items trước khi gửi.",
    outcome: "Người học giảm thao tác lặp lại và tạo đầu ra đủ rõ để gửi cho đồng nghiệp, khách hàng hoặc quản lý.",
  },
  "sme-ai-first": {
    title: "Lãnh đạo SME AI-first",
    goal: "Dùng bài học để thiết kế workflow AI-first cho doanh nghiệp nhỏ: tăng doanh thu, giảm chi phí, kiểm soát rủi ro và đo KPI.",
    flow: "Chọn một quy trình có tác động kinh doanh, xác định owner, dữ liệu đầu vào, điểm phê duyệt, KPI và kế hoạch pilot 7-14 ngày.",
    output: "Bản triển khai AI-first gồm business case, workflow trước/sau, vai trò con người, KPI, rủi ro và quyết định tiếp theo.",
    input: "Mục tiêu kinh doanh, quy trình hiện tại, dữ liệu vận hành, chi phí/thời gian đang mất và người chịu trách nhiệm.",
    process: "Đánh giá theo tác động, độ khó, rủi ro dữ liệu, khả năng đo lường và mức độ cần con người phê duyệt.",
    outcome: "Người học ra được quyết định có nên pilot AI cho quy trình này không, pilot bằng gì và đo thành công ra sao.",
  },
  code: {
    title: "Claude Code",
    goal: "Chuyển bài học thành quy trình làm việc với code có phạm vi nhỏ, kiểm thử được và tránh rủi ro dữ liệu/bảo mật.",
    flow: "Đọc cấu trúc project trước, xác định file liên quan, sửa từng bước nhỏ, chạy kiểm tra và ghi lại rủi ro còn lại.",
    output: "Task kỹ thuật rõ ràng gồm yêu cầu, file liên quan, thay đổi dự kiến, test case, kết quả kiểm tra và bước triển khai.",
    input: "Repo/workspace, yêu cầu kỹ thuật, lỗi cần sửa, log liên quan và giới hạn không được thay đổi.",
    process: "Sửa theo vòng lặp đọc hiểu, chỉnh nhỏ, test, review diff và chỉ mở rộng phạm vi khi có lý do rõ.",
    outcome: "Người học biết giao việc kỹ thuật cho AI agent mà vẫn kiểm soát được chất lượng và an toàn.",
  },
};

const proTools = [
  {
    id: "superpowers",
    index: "1",
    icon: "⚡",
    name: "Superpowers",
    label: "Khuyến nghị bắt đầu",
    githubUrl: "https://github.com/obra/superpowers",
    tagline: "Biến Claude Code từ người chạy lệnh thành agent biết hỏi, lập kế hoạch và viết spec trước khi code.",
    strengths: [
      "Tập trung vào quy trình: clarify yêu cầu, tạo plan, chia task, rồi mới sửa code.",
      "Hợp với bài học về prompt, kế hoạch, workflow, review và Claude Code.",
      "Giúp người học hình thành thói quen làm việc có kiểm soát thay vì giao việc mơ hồ.",
    ],
    useFor: "Lên kế hoạch dự án, chia việc cho sub-agent, tạo spec files và kiểm tra trước/sau khi sửa.",
    install: "/plugin install superpowers@claude-plugins-official",
    proOutcome: "Một task kỹ thuật có brief, plan, checklist, diff và tiêu chí nghiệm thu rõ ràng.",
    caution: "Kiểm tra nguồn plugin, quyền truy cập file và lệnh cài trước khi chạy trên repo thật.",
  },
  {
    id: "everything",
    index: "2",
    icon: "👥",
    name: "ECC / Everything Claude Code",
    label: "Bộ kỹ năng tổng hợp",
    githubUrl: "https://github.com/affaan-m/ECC",
    tagline: "Một bộ mẫu rộng để chuẩn hóa cách giao việc, tối ưu lệnh và giữ chất lượng qua nhiều phiên làm việc.",
    strengths: [
      "Phù hợp người mới muốn có nhiều template và câu lệnh sẵn.",
      "Hỗ trợ tối ưu prompt, giảm chi phí thử sai và tạo thói quen làm việc có cấu trúc.",
      "Dùng tốt cho dân văn phòng kỹ thuật, quản lý dự án và người học Claude Code.",
    ],
    useFor: "Tạo thư viện prompt, lệnh kiểm tra, mẫu review, checklist debug và quy trình làm việc hằng ngày.",
    install: "/plugin marketplace add https://github.com/affaan-m/ECC\n/plugin install ecc@ecc",
    proOutcome: "Một playbook cá nhân gồm prompt chuẩn, lệnh hay dùng, checklist lỗi và workflow tái sử dụng.",
    caution: "Tên plugin có thể khác theo marketplace; xác minh lại trước khi cài.",
  },
  {
    id: "metaswarm",
    index: "3",
    icon: "◎",
    name: "Metaswarm",
    label: "Multi-agent nâng cao",
    githubUrl: "https://github.com/dsifry/metaswarm",
    tagline: "Cho phép tổ chức nhiều agent hoặc nhiều luồng xử lý khi một phiên làm việc không còn đủ.",
    strengths: [
      "Hợp với project nhiều nhánh: research, code, test, docs, security, cost tracking.",
      "Giúp mô phỏng nhóm kỹ sư nhỏ với vai trò rõ ràng.",
      "Có giá trị cho lãnh đạo SME AI-first khi thiết kế đội hình AI vận hành.",
    ],
    useFor: "Chia agent theo vai trò, chạy song song phân tích, triển khai, review và tổng hợp quyết định.",
    install: "claude plugin marketplace add dsifry/metaswarm-marketplace\nclaude plugin install metaswarm",
    proOutcome: "Một workflow nhiều vai trò: planner, builder, reviewer, tester và reporter.",
    caution: "Dễ tăng chi phí/token nếu không giới hạn phạm vi, ngân sách và điều kiện dừng.",
  },
  {
    id: "open-design",
    index: "4",
    icon: "✎",
    name: "Open Design",
    label: "Thiết kế UI/UX",
    githubUrl: "https://github.com/nexu-io/open-design",
    tagline: "Thêm năng lực thiết kế giao diện, prototype và hệ thống thiết kế cho Claude Code.",
    strengths: [
      "Hỗ trợ chuyển yêu cầu sản phẩm thành wireframe, component và UI spec.",
      "Hữu ích khi xây dashboard, landing page, app nội bộ hoặc prototype SME.",
      "Giúp agent không chỉ code chạy được mà còn tạo trải nghiệm dùng được.",
    ],
    useFor: "Thiết kế màn hình, audit UX, tạo design brief, checklist responsive và tiêu chí nghiệm thu UI.",
    install: "git clone https://github.com/nexu-io/open-design.git",
    proOutcome: "Một UI brief có user flow, component list, trạng thái màn hình và tiêu chuẩn responsive.",
    caution: "Không để agent thay đổi toàn bộ design system nếu chưa có phạm vi rõ.",
  },
  {
    id: "obsidian",
    index: "5",
    icon: "▧",
    name: "Obsidian Skills",
    label: "Bộ não thứ 2",
    githubUrl: "https://github.com/kepano/obsidian-skills",
    tagline: "Kết nối ghi chú, markdown, wiki links và tri thức cá nhân để agent nhớ bối cảnh tốt hơn.",
    strengths: [
      "Hợp với người học cần lưu prompt, lesson notes, quyết định và kinh nghiệm triển khai.",
      "Tạo cầu nối giữa học tập, tài liệu nội bộ và thực hành công việc.",
      "Giúp xây knowledge base thay vì để kiến thức nằm rải rác trong chat.",
    ],
    useFor: "Tạo vault ghi chú, lesson log, prompt library, project memory và decision record.",
    install: "/plugin marketplace add kepano/obsidian-skills\n/plugin install obsidian@obsidian-skills",
    proOutcome: "Một hệ thống ghi nhớ gồm notes, tags, liên kết bài học, prompt và bài nộp.",
    caution: "Không đồng bộ dữ liệu nhạy cảm hoặc tài liệu nội bộ lên dịch vụ ngoài nếu chưa được phép.",
  },
  {
    id: "karpathy",
    index: "6",
    icon: "☑",
    name: "Karpathy Skills",
    label: "Kỷ luật code gọn",
    githubUrl: "https://github.com/multica-ai/andrej-karpathy-skills",
    tagline: "Đưa các nguyên tắc viết code rõ, nhỏ, dễ hiểu và dễ review vào cách làm việc với LLM.",
    strengths: [
      "Nhấn mạnh code đơn giản, thay đổi nhỏ, đặt tên rõ và test được.",
      "Phù hợp khi học bài Claude Code, test, tối ưu hiệu suất và triển khai.",
      "Giúp agent tránh viết quá nhiều code hoặc sửa lan sang phần không liên quan.",
    ],
    useFor: "Chuẩn hóa code style, review trước khi merge, chia task nhỏ và tạo checklist chất lượng.",
    install: "git clone https://github.com/multica-ai/andrej-karpathy-skills.git",
    proOutcome: "Một bộ rule làm việc gồm phạm vi, naming, test, review diff và định nghĩa hoàn thành.",
    caution: "Xem rule như tiêu chuẩn làm việc, không phải lý do để refactor toàn bộ codebase.",
  },
];

const skillsHandbook = [
  {
    id: "chap1",
    index: "1",
    icon: "📖",
    name: "Nền tảng Skill",
    label: "Giới thiệu & Triết lý",
    tagline: "Một skill là một tập hợp hướng dẫn (đóng gói trong thư mục chứa file SKILL.md) dạy Claude cách xử lý các quy trình cụ thể một cách nhất quán.",
    content: `
      <h4>Skill là gì?</h4>
      <p>Skill là lớp tri thức và quy trình nghiệp vụ được nhúng trực tiếp lên trên các công cụ thô của bạn. Thay vì giải thích lại bối cảnh trong mỗi cuộc chat, bạn định nghĩa Skill một lần và Claude sẽ tự động áp dụng khi cần.</p>
      
      <h4>Nguyên tắc thiết kế cốt lõi</h4>
      <ul>
        <li><strong>Progressive Disclosure (Tiết lộ tuần tự):</strong> YAML frontmatter (Cấp 1) luôn được nạp vào system prompt ban đầu để kích hoạt. Thân <code>SKILL.md</code> (Cấp 2) và các tệp trong <code>references/</code> (Cấp 3) chỉ được nạp khi Claude phát hiện tác vụ liên quan. Điều này giúp giảm thiểu 90% lượng token tiêu thụ.</li>
        <li><strong>Composability (Khả năng kết hợp):</strong> Các skill nên được thiết kế độc lập, bổ trợ lẫn nhau và hoạt động hòa hợp khi người dùng bật nhiều skill cùng lúc.</li>
        <li><strong>Portability (Tính di động):</strong> Một skill viết theo chuẩn mở sẽ chạy tương thích trên Claude.ai, Claude Code CLI và API.</li>
      </ul>

      <div class="info-card">
        <strong>💡 Tương tác MCP + Skills:</strong>
        <p><strong>MCP (Model Context Protocol)</strong> cung cấp <i>căn bếp chuyên nghiệp</i> (quyền truy cập công cụ, dữ liệu thô, API). <strong>Skills</strong> cung cấp <i>công thức nấu ăn</i> (quy trình thực thi chuẩn SOP, tri thức nghiệp vụ).</p>
      </div>
    `,
    summaryItems: [
      { title: "Progressive Disclosure", desc: "Tối ưu hóa token bằng hệ thống 3 cấp nạp dữ liệu thông minh." },
      { title: "Composability", desc: "Không tự nhận mình là duy nhất; hoạt động song song với các skill khác." },
      { title: "Portability", desc: "Chạy đồng nhất trên Web, CLI và API." }
    ]
  },
  {
    id: "chap2",
    index: "2",
    icon: "✍️",
    name: "Thiết kế & YAML",
    label: "Cấu trúc & Cú pháp",
    tagline: "YAML Frontmatter là phần quan trọng nhất giúp Claude nhận biết khi nào nên nạp và kích hoạt skill.",
    content: `
      <h4>YAML Frontmatter Spec (Cập nhật 2026)</h4>
      <p>Đặt ở đầu file <code>SKILL.md</code>, được kẹp bởi cặp ký tự <code>---</code>.</p>
      
      <h4>Các trường bắt buộc</h4>
      <ul>
        <li><code>name</code>: kebab-case định danh (ví dụ: <code>notion-project-setup</code>). Trùng tên thư mục.</li>
        <li><code>description</code>: Mô tả ngắn gọn làm gì và khi nào dùng (Trigger phrases).</li>
      </ul>

      <h4>Các trường kiểm soát nâng cao (Mới cập nhật)</h4>
      <ul>
        <li><code>allowed-tools</code>: Danh sách các công cụ được chạy tự động không cần hỏi ý kiến (ví dụ: <code>[Read, Grep, Bash]</code>). Sử dụng mảng hoặc dấu phẩy phân tách (không dùng khoảng trắng).</li>
        <li><code>disable-model-invocation: true</code>: Khóa tự động kích hoạt. Chỉ cho phép kích hoạt thủ công qua slash command (ví dụ: <code>/setup-project</code>).</li>
        <li><code>user-invocable: false</code>: Ẩn skill khỏi danh sách thủ công, chỉ chạy ngầm khi Claude thấy cần.</li>
        <li><code>context: fork</code>: Cực kỳ quan trọng. Cho phép chạy skill trong một <strong>Subagent cô lập</strong>, giữ sạch context window của cửa sổ chat chính.</li>
      </ul>

      <div class="info-card">
        <strong>⚠️ Hạn chế bảo mật:</strong>
        <p>Không sử dụng các thẻ XML (&lt; hoặc &gt;) trong frontmatter để tránh rủi ro prompt injection. Không đặt tên skill chứa từ khóa 'claude' hoặc 'anthropic'.</p>
      </div>
    `,
    summaryItems: [
      { title: "Allowed Tools Cú pháp chuẩn", desc: "Dùng dấu phẩy hoặc mảng YAML. Tránh dùng khoảng trắng." },
      { title: "Disable Model Invocation", desc: "Chỉ cho phép chạy thủ công để tiết kiệm token." },
      { title: "Context Forking", desc: "Cô lập phiên làm việc vào subagent để tránh tràn bộ nhớ chat." }
    ]
  },
  {
    id: "chap3",
    index: "3",
    icon: "🧪",
    name: "Kiểm thử & Tinh chỉnh",
    label: "Success Criteria & Debug",
    tagline: "Quy trình kiểm thử nghiêm ngặt giúp nâng cao độ chính xác và độ ổn định của Skill trước khi đưa vào sản xuất.",
    content: `
      <h4>Quy trình kiểm thử 3 lớp</h4>
      <ol>
        <li><strong>Kiểm thử kích hoạt (Triggering):</strong> Đảm bảo skill kích hoạt &gt; 90% trên các truy vấn đúng, và không kích hoạt nhầm trên các truy vấn không liên quan (Overtriggering).</li>
        <li><strong>Kiểm thử chức năng (Functional):</strong> Xác minh kết quả tạo ra hợp lệ, các API/MCP chạy thông suốt không lỗi, xử lý lỗi biên tốt.</li>
        <li><strong>So sánh hiệu năng:</strong> Đếm số lượt gọi API và tổng token tiêu thụ trước/sau khi bật skill. Mục tiêu là giảm số lượt hỏi/chỉnh sửa và giảm dung lượng token.</li>
      </ol>

      <h4>Sử dụng skill-creator để hỗ trợ</h4>
      <p>Sử dụng skill <code>skill-creator</code> tích hợp sẵn để tự động phát hiện các vấn đề thường gặp như mô tả mơ hồ, thiếu trigger words hoặc lỗi cấu trúc.</p>

      <div class="info-card">
        <strong>💡 Pro Tip - Cải tiến trên 1 tác vụ khó:</strong>
        <p>Nên thử nghiệm và cải tiến trên 1 tác vụ khó cụ thể cho đến khi Claude làm tốt hoàn toàn, sau đó mới rút ra kinh nghiệm để đóng gói thành Skill chung.</p>
      </div>
    `,
    summaryItems: [
      { title: "Triggering Test", desc: "Hỏi Claude để biết lý do nạp: 'When would you use this skill?'" },
      { title: "Overtriggering & Undertriggering", desc: "Khắc phục bằng cách thêm các trigger phủ định vào mô tả." },
      { title: "Vòng lặp tinh chỉnh", desc: "Thu thập log lỗi thực tế từ cuộc chat để cải tiến hướng dẫn." }
    ]
  },
  {
    id: "chap4",
    index: "4",
    icon: "🚀",
    name: "Phân phối & CLI",
    label: "Deploy & API",
    tagline: "Tích hợp và phân phối Skill một cách an toàn trên các môi trường Web, Claude Code CLI và hệ thống lập trình API.",
    content: `
      <h4>Cách cài đặt trên các nền tảng</h4>
      <ul>
        <li><strong>Claude.ai (Cá nhân):</strong> Nén thư mục thành file ZIP và upload qua <em>Settings &gt; Capabilities &gt; Skills</em>.</li>
        <li><strong>Claude Code (Cục bộ):</strong> Đặt thư mục skill vào đường dẫn <code>.claude/skills/</code> trong project hoặc thư mục cấu hình toàn cục.</li>
        <li><strong>API (Doanh nghiệp):</strong> Truy cập qua endpoint <code>/v1/skills</code> hoặc đính kèm vào request Message API thông qua tham số <code>container.skills</code>.</li>
      </ul>

      <h4>Quản lý quyền với Claude Code CLI</h4>
      <p>Dùng lệnh <code>/permissions</code> trong giao diện tương tác để cấu hình chi tiết hoặc chạy cờ CLI để tự động phê duyệt các tool được chỉ định:</p>
      <pre><code>claude --allowedTools "Bash(npm run test),Read" -p "Run task"</code><button class="copy-code-btn" data-copy='claude --allowedTools "Bash(npm run test),Read" -p "Run task"'>Copy</button></pre>

      <div class="info-card">
        <strong>📦 Host mã nguồn mở:</strong>
        <p>Host thư mục skill trên GitHub, tạo file <code>README.md</code> ở thư mục gốc chứa hướng dẫn cài đặt. Tránh để file <code>README.md</code> bên trong thư mục con của skill (chỉ dùng <code>SKILL.md</code>).</p>
      </div>
    `,
    summaryItems: [
      { title: "API Integration", desc: "Nạp động qua Messages API sử dụng tham số container.skills." },
      { title: "Local Deployment", desc: "Cài đặt đơn giản bằng cách copy vào thư mục .claude/skills/." },
      { title: "Marketplace & CLI", desc: "Quản lý cài đặt, cập nhật và cấp quyền nhanh chóng bằng lệnh CLI." }
    ]
  },
  {
    id: "chap5",
    index: "5",
    icon: "🛠️",
    name: "Design Patterns",
    label: "Best Practices",
    tagline: "5 mẫu thiết kế thực tế giúp lập trình viên giải quyết các tác vụ phức tạp một cách tối ưu nhất.",
    content: `
      <h4>5 Mẫu thiết kế cốt lõi</h4>
      <ol>
        <li><strong>Sequential Workflow (Quy trình tuần tự):</strong> Quy định thứ tự thực thi rõ ràng, truyền kết quả đầu ra của bước trước làm tham số đầu vào cho bước sau.</li>
        <li><strong>Multi-MCP (Phối hợp đa dịch vụ):</strong> Trải rộng quy trình qua nhiều MCP server (ví dụ: xuất thiết kế Figma -&gt; lưu Drive -&gt; tạo task Linear -&gt; gửi Slack).</li>
        <li><strong>Iterative Refinement (Lặp và tinh chỉnh):</strong> Sinh bản nháp -&gt; Chạy script validation kiểm tra -&gt; Sửa lỗi -&gt; Lặp lại đến khi đạt chất lượng.</li>
        <li><strong>Contextual Selection (Lọc công cụ theo ngữ cảnh):</strong> Tự động quyết định công cụ dựa trên thuộc tính dữ liệu (ví dụ: file lớn lưu Cloud, file code lưu GitHub).</li>
        <li><strong>Domain Intelligence (Trí tuệ chuyên môn):</strong> Nhúng trực tiếp các checklist tuân thủ nghiệp vụ, bảo mật hoặc thiết kế vào logic hướng dẫn.</li>
      </ol>

      <div class="info-card">
        <strong>🛠️ Hướng dẫn Rollback:</strong>
        <p>Luôn cung cấp kịch bản xử lý lỗi hoặc Rollback khi các bước công cụ MCP thất bại để tránh làm hỏng trạng thái hệ thống.</p>
      </div>
    `,
    summaryItems: [
      { title: "Sequential Workflow", desc: "Kiểm soát chặt chẽ quy trình đa bước bằng checkpoint." },
      { title: "Iterative Refinement", desc: "Dùng code tất định để kiểm tra kết quả ngôn ngữ tự nhiên." },
      { title: "Domain Compliance", desc: "Chốt chặn an toàn và tối ưu trước khi thực hiện giao dịch." }
    ]
  },
  {
    id: "chap6",
    index: "6",
    icon: "📋",
    name: "Checklist & Template",
    label: "YAML Full Template",
    tagline: "Checklist kiểm tra nhanh trước khi xuất bản và mẫu YAML Frontmatter đầy đủ để copy sử dụng ngay.",
    content: `
      <h4>Checklist xuất bản nhanh</h4>
      <ul>
        <li>⬜ Thư mục đặt tên <code>kebab-case</code> và file chính tên chính xác là <code>SKILL.md</code>.</li>
        <li>⬜ YAML frontmatter được bọc bằng <code>---</code> và không chứa thẻ XML <code>&lt; &gt;</code>.</li>
        <li>⬜ Description chứa đầy đủ mục đích (WHAT) và điều kiện kích hoạt (WHEN).</li>
        <li>⬜ Các công cụ trong <code>allowed-tools</code> được phân tách bằng dấu phẩy hoặc mảng YAML.</li>
        <li>⬜ Đã kiểm tra không kích hoạt nhầm (Overtriggering) và kiểm thử chức năng thành công.</li>
      </ul>

      <h4>Mẫu YAML Frontmatter đầy đủ 2026</h4>
      <pre><code>---
name: production-deployer
description: Deploys code build to production. Use when project is ready for deploy, release script is validated, or when user asks to "deploy to production".
license: MIT
allowed-tools:
  - "Bash(npm run deploy)"
  - "Read"
  - "Grep"
disable-model-invocation: true
user-invocable: true
argument-hint: "[release_version]"
context: fork
agent: deployment-specialist
metadata:
  author: "Alpha Devops Team"
  version: "2.1.0"
  mcp-server: "k8s-deployer"
  category: "operations"
  tags: [deploy, k8s, devops]
---</code><button class="copy-code-btn" data-copy='---
name: production-deployer
description: Deploys code build to production. Use when project is ready for deploy, release script is validated, or when user asks to "deploy to production".
license: MIT
allowed-tools:
  - "Bash(npm run deploy)"
  - "Read"
  - "Grep"
disable-model-invocation: true
user-invocable: true
argument-hint: "[release_version]"
context: fork
agent: deployment-specialist
metadata:
  author: "Alpha Devops Team"
  version: "2.1.0"
  mcp-server: "k8s-deployer"
  category: "operations"
  tags: [deploy, k8s, devops]
---'>Copy Template</button></pre>
    `,
    summaryItems: [
      { title: "YAML Validation", desc: "Đảm bảo định dạng chuẩn, tránh lỗi parser khi tải lên." },
      { title: "Deployment Checklist", desc: "Các bước tối thiểu để xuất bản một skill ổn định." },
      { title: "Standard Template", desc: "Copy làm khung sườn để phát triển mọi skill mới." }
    ]
  },
  {
    id: "chap7",
    index: "7",
    icon: "🤖",
    name: "Cowork Plugins",
    label: "Tác tử & Hệ sinh thái",
    tagline: "Claude Cowork Plugins kết hợp skill, sub-agent và MCP connectors để tự động hóa quy trình phức tạp xuyên ứng dụng.",
    content: `
      <h4>Cấu trúc một Cowork Plugin</h4>
      <p>Một plugin là một thư mục chứa:</p>
      <ul>
        <li><code>SKILL.md</code>: Hướng dẫn cốt lõi và YAML Frontmatter định nghĩa điều kiện chạy.</li>
        <li><code>manifest.json</code> hoặc Frontmatter: Khai báo các MCP connectors cần thiết (Slack, Gmail, Google Drive, Asana...).</li>
        <li>Các sub-agents: Định nghĩa các profile trợ lý chuyên dụng (ví dụ: PowerPoint Agent, Excel Agent).</li>
      </ul>

      <h4>3 Tác tử Beta tích hợp sẵn</h4>
      <ol>
        <li><strong>Claude in Chrome:</strong> Duyệt web, thu thập dữ liệu, phân loại thông tin trên trình duyệt.</li>
        <li><strong>Excel Agent:</strong> Ghi công thức, đọc bảng tính, phân tích tài chính tự động.</li>
        <li><strong>PowerPoint Agent:</strong> Dựng layout slide, thiết kế visual concept, tạo Speaker Notes.</li>
      </ol>

      <div class="info-card">
        <strong>💡 Triết lý Cowork:</strong>
        <p>Không chỉ là trả lời hội thoại. Tác tử Cowork đọc ghi file cục bộ, gọi Chrome Agent lấy dữ liệu, đổ vào Excel phân tích, và dựng PowerPoint slide thuyết trình trong cùng một phiên làm việc dài.</p>
      </div>
    `,
    summaryItems: [
      { title: "Workspace Integration", desc: "Đọc/ghi tệp cục bộ và kết nối đám mây thông qua các MCP connectors." },
      { title: "Beta Agents Stack", desc: "Chrome, Excel, và PowerPoint Agents giúp điều phối dữ liệu xuyên suốt." },
      { title: "Long-running Tasks", desc: "Lên kế hoạch và thực thi ngầm cho các công việc chạy dài hoặc theo lịch." }
    ]
  }
];

const quizData = {
  overview: [
    {
      q: "Nội dung tổng quan lộ trình (Overview) tập trung vào vai trò nào chính?",
      options: [
        "Xây dựng bối cảnh học tập, nhóm năng lực và phương pháp học.",
        "Viết mã code chi tiết để giải các bài toán khó.",
        "Thiết lập cơ sở dữ liệu trên cloud."
      ],
      answer: 0,
      explain: "Bài định hướng giúp người học nắm chắc khung năng lực, sơ đồ cây và phương pháp học tập khoa học."
    },
    {
      q: "Nguyên tắc an toàn dữ liệu cơ bản khi học cùng Claude là gì?",
      options: [
        "Đưa toàn bộ thông tin mật và danh sách khách hàng chưa ẩn danh lên AI.",
        "Ẩn danh toàn bộ dữ liệu nhạy cảm, thông tin cá nhân và tài liệu nội bộ trước khi giao việc.",
        "Chia sẻ tài khoản Claude cho nhiều người dùng chung bên ngoài."
      ],
      answer: 1,
      explain: "Luôn bảo mật tuyệt đối dữ liệu nhạy cảm bằng cách ẩn danh trước khi đưa lên prompt."
    }
  ],
  concept: [
    {
      q: "Khi học một khái niệm (Concept) mới trên Claude, cách tiếp cận chuẩn Pro là gì?",
      options: [
        "Hỏi Claude giải thích lại theo 3 mức độ (dễ hiểu, thực chiến, chuyên sâu) và đối chiếu bối cảnh thật.",
        "Chỉ ghi nhớ máy móc định nghĩa trên slide.",
        "Bỏ qua phần ví dụ minh họa vì quá dài."
      ],
      answer: 0,
      explain: "Giải thích 3 cấp độ giúp người học thấu suốt khái niệm từ cơ bản đến chuyên sâu thực tế."
    },
    {
      q: "Tại sao nên xem AI là một 'bản nháp' khi làm việc với thông tin chính sách/số liệu?",
      options: [
        "Vì AI luôn luôn đúng 100% không cần kiểm tra lại.",
        "Vì AI có thể tạo ảo giác (hallucination) hoặc bịa số liệu, con người phải chịu trách nhiệm kiểm chứng.",
        "Vì AI không hỗ trợ tiếng Việt tốt."
      ],
      answer: 1,
      explain: "AI chỉ tạo bản nháp; con người luôn là chốt chặn cuối cùng kiểm chứng thông tin trước khi dùng."
    },
    {
      q: "⚡ BONUS: Claude Fable 5 xử lý thế nào khi người dùng hỏi về chủ đề nhạy cảm (an ninh mạng, sinh hóa)?",
      options: [
        "Từ chối thẳng và không trả lời gì.",
        "Tự động chuyển tiếp yêu cầu sang Claude Opus 4.8 (model an toàn hơn) qua cơ chế Safety Fallback Routing, thay vì từ chối cứng nhắc.",
        "Trả lời bình thường không có rào chắn nào."
      ],
      answer: 1,
      explain: "Fable 5 dùng cơ chế Điều hướng dự phòng thông minh (Fallback Routing): tự chuyển sang Opus 4.8 khi chạm vùng nhạy cảm, đảm bảo trải nghiệm mượt mà cho 95% phiên bình thường."
    }
  ],
  tool: [
    {
      q: "Khi cài đặt và thiết lập công cụ (Tool), bước an toàn quan trọng nhất là gì?",
      options: [
        "Đồng bộ tất cả các biến môi trường nhạy cảm, mật khẩu hoặc API Key lên chat.",
        "Thiết lập môi trường an toàn, kiểm tra quyền truy cập và tránh đưa dữ liệu bảo mật lên lịch sử chat.",
        "Bỏ qua các cảnh báo bảo mật để cài nhanh hơn."
      ],
      answer: 1,
      explain: "Tuyệt đối bảo vệ API keys, biến môi trường và tài liệu nội bộ khi tích hợp công cụ AI."
    },
    {
      q: "Khi Claude xuất kết quả dạng bảng biểu/file, làm thế nào để lưu trữ khoa học?",
      options: [
        "Để các phiên chat lộn xộn không đặt tên.",
        "Xây dựng cấu trúc thư mục, đặt tên file rõ ràng và sử dụng Workspace/Project để gom nhóm.",
        "Chụp ảnh màn hình thay vì tải file."
      ],
      answer: 1,
      explain: "Tổ chức Projects và đặt tên hội thoại giúp bạn lưu trữ tri thức và tiếp nối ngữ cảnh làm việc lâu dài."
    },
    {
      q: "⚡ BONUS: Khi gọi API Claude thế hệ 5, model string chính thức của phiên bản mạnh nhất là gì?",
      options: [
        "claude-5-pro",
        "claude-fable-5",
        "claude-mythos-5-max"
      ],
      answer: 1,
      explain: "Model string chính thức của phiên bản thương mại mạnh nhất thế hệ 5 là claude-fable-5. Các model string khác: claude-opus-4-8, claude-sonnet-4-6, claude-haiku-4-5-20251001."
    }
  ],
  prompt: [
    {
      q: "Công thức viết prompt chuẩn chỉnh 5W1H bao gồm những thành phần nào?",
      options: [
        "Chỉ cần viết yêu cầu ngắn gọn: làm cái gì và khi nào.",
        "Vai trò (Who), Nhiệm vụ (What), Mục đích (Why), Cách làm (How), Bối cảnh (When/Where), Ràng buộc (How much).",
        "Chỉ cần chép một prompt có sẵn trên mạng mà không cần sửa bối cảnh."
      ],
      answer: 1,
      explain: "5W1H giúp Claude nhận diện toàn bộ ngữ cảnh, tạo kết quả chính xác, giảm thiểu thử sai."
    },
    {
      q: "Nếu kết quả Claude trả về quá chung chung, bạn nên tối ưu prompt như thế nào?",
      options: [
        "Từ bỏ và không dùng nữa.",
        "Bổ sung bối cảnh cụ thể, thêm ví dụ mẫu (Few-shot) và đặt các ràng buộc đầu ra rõ ràng.",
        "Hỏi lặp lại câu hỏi cũ nhiều lần."
      ],
      answer: 1,
      explain: "Bổ sung bối cảnh, ví dụ mẫu (Few-shot) và ràng buộc đầu ra giúp nâng cao chất lượng kết quả nhanh chóng."
    },
    {
      q: "⚡ BONUS: Theo nguyên tắc Prompt Engineering của Fable 5, khi viết system prompt nên làm gì?",
      options: [
        "Giải thích chi tiết từng bước cơ bản và dùng nhiều bullet points để rõ ràng.",
        "Tập trung vào mô tả cấu trúc đầu ra (Output Schema) và bối cảnh nghiệp vụ, hạn chế lạm dụng formatting và ưu tiên văn xuôi tự nhiên.",
        "Viết càng ngắn càng tốt, chỉ cần 1 câu lệnh."
      ],
      answer: 1,
      explain: "Fable 5 có khả năng suy luận sâu hơn nên không cần giải thích dài dòng. Hãy tập trung vào Output Schema, bối cảnh nghiệp vụ và dùng văn xuôi tự nhiên (prose) thay vì bullet points."
    }
  ],
  task: [
    {
      q: "Quy trình tóm tắt một văn bản dài bằng Claude thế nào để đạt hiệu quả tối đa?",
      options: [
        "Yêu cầu AI tóm tắt chung chung không định dạng.",
        "Xác định rõ đối tượng đọc, mục tiêu sử dụng, định dạng (bullet/đoạn văn) và yêu cầu trích xuất số liệu quan trọng.",
        "Copy từng đoạn ngắn để tóm tắt rời rạc."
      ],
      answer: 1,
      explain: "Chỉ định định dạng và trọng tâm giúp tóm tắt phục vụ đúng mục đích họp, báo cáo của bạn."
    },
    {
      q: "Khi chuyển biên bản họp thành action items, yếu tố nào bắt buộc phải có trong kết quả?",
      options: [
        "Chỉ cần tóm tắt nội dung thảo luận chung.",
        "Phân rõ: việc cần làm, người phụ trách, hạn xử lý (deadline) và rủi ro/phụ thuộc liên quan.",
        "Lục lại toàn bộ transcript cuộc họp."
      ],
      answer: 1,
      explain: "Action items có giá trị hành động cao khi xác định rõ đầu việc, người làm, thời hạn và rủi ro."
    }
  ],
  workflow: [
    {
      q: "Thiết kế một quy trình (Workflow) làm việc cùng AI-first hướng tới điều gì?",
      options: [
        "Loại bỏ hoàn toàn con người khỏi tất cả các bước phê duyệt.",
        "Phân rã quy trình thành các bước rõ ràng, chỉ định điểm AI hỗ trợ tạo nháp và điểm con người kiểm soát chất lượng.",
        "Làm thủ công hoàn toàn như cũ."
      ],
      answer: 1,
      explain: "Quy trình AI-first tối ưu năng suất bằng cách kết hợp sức mạnh tạo nháp của AI và kiểm chứng của con người."
    },
    {
      q: "Tài liệu SOP (Quy trình vận hành chuẩn) viết cho AI cần có yếu tố nào?",
      options: [
        "Đầu vào rõ ràng, đầu ra mong đợi, các bước chạy prompt và checklist kiểm soát chất lượng.",
        "Chỉ cần viết vài dòng mô tả chung về nhiệm vụ.",
        "Chỉ cần các bước cài đặt phần mềm."
      ],
      answer: 0,
      explain: "SOP cho AI giúp chuẩn hóa quy trình chạy prompt, đảm bảo chất lượng đầu ra đồng đều giữa các lần chạy."
    },
    {
      q: "⚡ BONUS: Hệ sinh thái tác tử mới của Anthropic gồm những công cụ nào?",
      options: [
        "Chỉ có Claude chat và API.",
        "Claude Code (lập trình), Claude Cowork (desktop tri thức), và các Beta Agents: Claude in Chrome, Claude in Excel, Claude in PowerPoint.",
        "Chỉ có Claude Code và một plugin cho VS Code."
      ],
      answer: 1,
      explain: "Hệ sinh thái Agentic mới gồm Claude Code (coding agent), Claude Cowork (ứng dụng desktop tác tử cho nhân sự phi kỹ thuật) và các Agents ứng dụng: Chrome, Excel, PowerPoint."
    }
  ],
  analysis: [
    {
      q: "Trước khi đưa dữ liệu vào Claude để phân tích (Analysis), việc quan trọng đầu tiên là gì?",
      options: [
        "Xác định rõ câu hỏi nghiên cứu, giả thuyết cần chứng minh và ẩn danh dữ liệu nhạy cảm.",
        "Upload toàn bộ dữ liệu thô chưa làm sạch và chưa lọc thông tin mật.",
        "Yêu cầu AI tự bịa số liệu nếu thiếu."
      ],
      answer: 0,
      explain: "Xác định câu hỏi rõ ràng và bảo mật dữ liệu là nguyên tắc cốt lõi trước khi phân tích."
    },
    {
      q: "Làm thế nào để phân biệt dữ kiện thực tế và suy luận trong báo cáo phân tích của Claude?",
      options: [
        "Tin tưởng tất cả các suy luận của Claude như dữ kiện thật.",
        "Yêu cầu Claude trích xuất số liệu/bằng chứng đi kèm cho mỗi kết luận và đánh dấu các giả định/suy luận.",
        "Bỏ qua phần kết luận và chỉ lấy số liệu thô."
      ],
      answer: 1,
      explain: "Luôn yêu cầu AI đưa bằng chứng đi kèm kết luận để tách biệt dữ kiện thật và suy đoán."
    }
  ],
  writing: [
    {
      q: "Quy trình Pro khi viết nội dung dài (Writing) cùng Claude là gì?",
      options: [
        "Yêu cầu Claude viết một bài dài 2000 chữ ngay lập tức từ một câu lệnh ngắn.",
        "Dựng dàn ý chi tiết -> Duyệt dàn ý -> Viết từng phần nhỏ -> Hiệu chỉnh giọng văn -> Kiểm chứng số liệu.",
        "Chép nguyên bản nháp đầu tiên của Claude gửi đi."
      ],
      answer: 1,
      explain: "Viết theo từng bước nhỏ giúp kiểm soát cấu trúc bài viết chặt chẽ và đạt chất lượng văn phong tốt nhất."
    },
    {
      q: "Làm thế nào để duy trì giọng văn (Tone-of-Voice) nhất quán khi viết bằng AI?",
      options: [
        "Không cần thiết lập gì, để Claude tự chọn giọng văn ngẫu nhiên.",
        "Cung cấp cho Claude 1-2 bài viết mẫu tốt nhất và mô tả rõ tính cách thương hiệu/giọng văn mong muốn.",
        "Sử dụng nhiều model khác nhau cho cùng một bài."
      ],
      answer: 1,
      explain: "Cung cấp mẫu (Few-shot learning) là cách hiệu quả nhất để AI bắt chước đúng giọng văn của bạn."
    }
  ],
  business: [
    {
      q: "Khi lập kế hoạch nghiệp vụ/kinh doanh (Business), làm sao để Claude đưa ra giải pháp khả thi?",
      options: [
        "Cung cấp bối cảnh chi tiết: mục tiêu kinh doanh, ngân sách, nhân sự, khách hàng mục tiêu và rủi ro hiện tại.",
        "Chỉ hỏi chung chung: Làm sao để tăng doanh số bán hàng?",
        "Yêu cầu Claude lập kế hoạch cho một sản phẩm không có thật."
      ],
      answer: 0,
      explain: "Bối cảnh thực tế (mục tiêu, nguồn lực, rủi ro) giúp AI đề xuất phương án sát thực tế và triển khai được."
    },
    {
      q: "Một kế hoạch truyền thông/marketing tốt tạo bởi AI cần có chỉ số nào?",
      options: [
        "Chỉ cần danh sách bài đăng.",
        "Thông điệp chính, đối tượng, lịch đăng, kịch bản xử lý rủi ro và các chỉ số đo lường hiệu quả (KPI).",
        "Chỉ cần ngân sách dự kiến."
      ],
      answer: 1,
      explain: "Kế hoạch hoàn chỉnh phải tích hợp thông điệp, kịch bản dự phòng rủi ro và tiêu chí đo lường KPI cụ thể."
    }
  ],
  creative: [
    {
      q: "Quy trình brainstorm ý tưởng sáng tạo (Creative) hiệu quả cùng AI là gì?",
      options: [
        "Yêu cầu Claude đưa ra duy nhất 1 ý tưởng tốt nhất.",
        "Thiết lập tiêu chí -> Yêu cầu tạo ít nhất 10-15 hướng ý tưởng khác biệt -> Nhóm -> Chấm điểm và chọn 1 thử nghiệm.",
        "Chọn ý tưởng đầu tiên xuất hiện mà không cần so sánh."
      ],
      answer: 1,
      explain: "Brainstorm sáng tạo cần mở rộng số lượng và góc nhìn trước khi tiến hành chấm điểm, sàng lọc."
    },
    {
      q: "Làm thế nào để đánh giá và lựa chọn ý tưởng sáng tạo khả thi nhất?",
      options: [
        "Chọn ý tưởng dễ làm nhất dù không có tác động.",
        "Sử dụng ma trận đánh giá theo hai chiều: Tác động (Impact) và Độ khó/Chi phí thực hiện (Effort).",
        "Chọn ngẫu nhiên."
      ],
      answer: 1,
      explain: "Ma trận Impact/Effort giúp bạn xác định được các 'Quick Wins' (Tác động lớn, chi phí nhỏ) để làm trước."
    }
  ],
  code: [
    {
      q: "Quy tắc làm việc an toàn và kỷ luật nhất khi sửa code (Code) cùng AI là gì?",
      options: [
        "Yêu cầu AI sửa cùng lúc nhiều file lớn mà không chạy test.",
        "Khảo sát cấu trúc codebase -> Viết yêu cầu kỹ thuật nhỏ -> Sửa từng file -> Chạy test kiểm thử -> Review diff.",
        "Xóa toàn bộ code cũ để viết lại từ đầu."
      ],
      answer: 1,
      explain: "Sửa từng bước nhỏ, kiểm thử liên tục và review diff giúp bạn kiểm soát hoàn toàn codebase, tránh bug lan rộng."
    },
    {
      q: "Yếu tố nào quan trọng nhất trước khi yêu cầu AI tích hợp API hoặc database?",
      options: [
        "Đưa thông tin xác thực, mật khẩu thật hoặc khóa kết nối lên prompt.",
        "Tạo Spec kỹ thuật chi tiết gồm schema dữ liệu, mã lỗi dự kiến, biến môi trường mẫu và test cases.",
        "Chạy code trực tiếp trên hệ thống production."
      ],
      answer: 1,
      explain: "Tạo tài liệu Spec và biến mẫu giúp tích hợp an toàn, chính xác và dễ bảo trì."
    },
    {
      q: "⚡ BONUS: Claude Fable 5 đạt thành tích gì trong thử nghiệm di trú code với Stripe?",
      options: [
        "Sửa được 100 lỗi nhỏ trong 1 tuần.",
        "Nâng cấp và di trú thư viện trên toàn bộ codebase Ruby 50 triệu dòng trong 1 ngày — thay vì 2 tháng với đội kỹ sư cao cấp.",
        "Chỉ viết được test cho 10 module nhỏ."
      ],
      answer: 1,
      explain: "Trong thử nghiệm với Stripe, Fable 5 di trú thành công 50 triệu dòng Ruby chuyên nghiệp chỉ trong 1 ngày. Fable 5 cũng đạt điểm FrontierCode benchmark (của Cognition) cao nhất."
    }
  ],
  plan: [
    {
      q: "Biến một lộ trình học tập/triển khai lớn thành hiện thực (Plan) bằng cách nào?",
      options: [
        "Bắt đầu ngay lập tức mà không cần chia chặng.",
        "Phân rã lộ trình thành các chặng (Milestones) tuần/tháng, gắn mỗi chặng với đầu ra cụ thể và bài thực hành.",
        "Chỉ lập kế hoạch và không bao giờ theo dõi tiến độ."
      ],
      answer: 1,
      explain: "Chia nhỏ chặng đường và đo lường bằng sản phẩm thực hành là cách tốt nhất để hoàn thành mục tiêu lớn."
    },
    {
      q: "Tiêu chí để đánh giá một kế hoạch học tập cá nhân khả thi là gì?",
      options: [
        "Đặt lịch học 8 tiếng mỗi ngày không nghỉ.",
        "Kế hoạch có thời gian cụ thể hằng ngày, tài nguyên sẵn sàng, checklist bài nộp rõ ràng và có bước rà soát rủi ro.",
        "Không cần đặt lịch, khi nào rảnh thì học."
      ],
      answer: 1,
      explain: "Kỷ luật thời gian nhỏ, bài tập rõ ràng và kiểm soát rủi ro giúp duy trì thói quen học tập bền vững."
    }
  ]
};

const rubricRows = [
  ["Bám nguồn", "Có đối chiếu trang gốc/OCR, không bóp méo ý chính."],
  ["Tính ứng dụng", "Đầu ra giải quyết được một việc thật trong bối cảnh đã chọn."],
  ["Rõ cấu trúc", "Có mục tiêu, dữ liệu đầu vào, bước làm, người phụ trách và định dạng đầu ra."],
  ["An toàn dữ liệu", "Không chứa thông tin nhạy cảm, có bước ẩn danh/kiểm chứng khi cần."],
];

const flatLessons = modules.flatMap((module) =>
  module.lessons.map(([id, page, title, type, summary]) => ({
    id,
    page,
    title,
    type,
    summary,
    moduleId: module.id,
    moduleTitle: module.title,
    image: `../ocr_pages/page_${String(page).padStart(3, "0")}.png?v=20260528-140729`,
  }))
);

// Safe localStorage helper wrappers to prevent crashes on file:/// protocol or private mode
function safeGetLocalStorage(key, defaultValue = "") {
  try {
    return localStorage.getItem(key) || defaultValue;
  } catch (e) {
    console.warn("localStorage get failed for key " + key + ":", e);
    return defaultValue;
  }
}

function safeSetLocalStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch (e) {
    console.warn("localStorage set failed for key " + key + ":", e);
    return false;
  }
}

function safeRemoveLocalStorage(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (e) {
    console.warn("localStorage remove failed for key " + key + ":", e);
    return false;
  }
}

// Admin Mode & Public NotebookLM link configuration
const urlParams = new URLSearchParams(window.location.search);
let isAdminMode = true; // Enabled by default for active content administration locally

if (urlParams.has("admin")) {
  isAdminMode = urlParams.get("admin") === "true";
  safeSetLocalStorage("claude-admin-mode", isAdminMode ? "true" : "false");
} else {
  const savedAdminState = safeGetLocalStorage("claude-admin-mode", null);
  if (savedAdminState !== null) {
    isAdminMode = savedAdminState === "true";
  }
}

// Preset NotebookLM shared links for public users (Hardcoded database)
const defaultNotebooklmUrls = {
  "01": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/e0495235-46d2-4ea7-9c58-ac1b3f6899ed?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "02": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/d304446a-fa96-47c6-a9e7-6ad828049cb0?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "03": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/0811bb29-d519-4264-89ac-93801600c835?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "04": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/15fa3def-20ba-4eeb-b40e-77c71a8429d8?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "05": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/0e32c741-0cbe-45b2-8126-6cb30907bc68?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "06": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/47012119-6456-44e9-ab63-3936b86e6468?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "07": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/b1cfac8e-8a28-4770-a0c7-0469da2221de?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "08": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/f8b481ab-5e97-47fe-941b-fac4eb95c67d?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "09": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/b48c5a08-42cc-453b-8702-de791e9b2ccf?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "10": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/d94fba1b-d3e8-4700-8efe-387b11ec90ec?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "11": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/5f62b5a7-1612-4982-a1d8-df332433d90b?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "12": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196/artifact/e8c980b1-cce2-4785-b326-45fab2ca997e?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
  "13": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "14": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "15": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "16": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "17": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "18": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "19": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "20": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "21": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "22": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "23": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "24": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "25": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "26": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "27": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "28": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "29": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "30": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "31": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "32": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "33": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "34": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "35": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "36": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "37": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "38": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "39": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "40": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "41": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "42": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "43": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "44": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "45": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "46": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "47": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "48": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "49": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "50": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "51": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "52": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "53": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "54": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196",
  "55": "https://notebooklm.google.com/notebook/0ff63890-4749-4846-b48f-4475d0625196"
};

const customVideoScripts = {
  "01": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài DH1: [Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster

1. Tiêu đề video
Bài DH1: [Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster

2. Mô tả video
Tìm hiểu trọng tâm bài học '[Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài DH1. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học '[Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster' để giúp bạn nắm bức tranh toàn khóa: 30 poster claude, 10 poster co-work và 10 poster code. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson '[Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài DH1: [Định hướng] Tổng quan khóa học Claude A-Z trong 50 poster - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Nắm bức tranh tổng thể của khóa Claude A-Z., Phân biệt 3 nhánh học chính: Claude, Co-work và Code., Biết cách dùng cây sơ đồ để chọn lộ trình học cá nhân.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Nắm bức tranh tổng thể của khóa Claude A-Z. · Phân biệt 3 nhánh học chính: Claude, Co-work và Code..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Thống nhất cách dùng Claude để đọc văn bản, tổng hợp báo cáo và chuẩn bị nội dung họp.. Với nhân sự văn phòng, nó giúp Gom email, tài liệu, kế hoạch tuần và biên bản thành một quy trình dùng Claude.. Và đối với lãnh đạo SME, đây là chìa khóa để Chủ doanh nghiệp cần nhìn toàn cảnh các năng lực Claude có thể tác động đến bán hàng, vận hành, chăm sóc khách hàng và quản trị..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Chuẩn hóa năng lực dùng AI trong phòng ban | Văn phòng: Thiết lập trợ lý làm việc cá nhân | SME: Thiết kế bản đồ chuyển đổi AI-first cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là học tràn lan, cố nhớ mọi chi tiết ngay lập tức mà không có lộ trình.. Thay vào đó, tư duy đúng đắn là nắm vững sơ đồ tổng quan, chọn nhánh năng lực phù hợp và học theo ngày.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Học tràn lan, cố nhớ mọi chi t... | Đúng: Nắm vững sơ đồ tổng quan, chọn...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài DH2 ngay bây giờ để khám phá '[Định hướng] Tự học Claude A-Z trong 50 poster' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài DH1. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson DH1 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: [Định hướng] Tự học Claude A-Z trong 50 poster'. Dark tech background.
Caption overlay: Hoàn thành Bài DH1 -> Xem tiếp Bài DH2: [Định hướng] Tự học Claude A-Z trong 50 poster.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài DH1.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài DH2 ngay bây giờ để khám phá '[Định hướng] Tự học Claude A-Z trong 50 poster' nhé. Click vào video tiếp theo!`,

  "02": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài DH2: [Định hướng] Tự học Claude A-Z trong 50 poster

1. Tiêu đề video
Bài DH2: [Định hướng] Tự học Claude A-Z trong 50 poster

2. Mô tả video
Tìm hiểu trọng tâm bài học '[Định hướng] Tự học Claude A-Z trong 50 poster'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài DH2. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học '[Định hướng] Tự học Claude A-Z trong 50 poster' để giúp bạn hiểu cấu trúc bộ poster, nhóm năng lực và cách học theo từng trang. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson '[Định hướng] Tự học Claude A-Z trong 50 poster' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài DH2: [Định hướng] Tự học Claude A-Z trong 50 poster - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Hiểu cấu trúc 50 poster và lý do chia thành 30 bài Claude, 10 bài Co-work, 10 bài Code., Xác định nhóm bài phù hợp với nhu cầu hiện tại., Tạo kế hoạch học nhanh trong 7 ngày hoặc 14 ngày.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Hiểu cấu trúc 50 poster và lý do chia thành 30 bài Claude, 10 bài Co-work, 10 bài Code. · Xác định nhóm bài phù hợp với nhu cầu hiện tại..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Thống nhất cách dùng Claude để đọc văn bản, tổng hợp báo cáo và chuẩn bị nội dung họp.. Với nhân sự văn phòng, nó giúp Gom email, tài liệu, kế hoạch tuần và biên bản thành một quy trình dùng Claude.. Và đối với lãnh đạo SME, đây là chìa khóa để Chủ doanh nghiệp cần nhìn toàn cảnh các năng lực Claude có thể tác động đến bán hàng, vận hành, chăm sóc khách hàng và quản trị..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Chuẩn hóa năng lực dùng AI trong phòng ban | Văn phòng: Thiết lập trợ lý làm việc cá nhân | SME: Thiết kế bản đồ chuyển đổi AI-first cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là học tràn lan, cố nhớ mọi chi tiết ngay lập tức mà không có lộ trình.. Thay vào đó, tư duy đúng đắn là nắm vững sơ đồ tổng quan, chọn nhánh năng lực phù hợp và học theo ngày.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Học tràn lan, cố nhớ mọi chi t... | Đúng: Nắm vững sơ đồ tổng quan, chọn...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài DH3 ngay bây giờ để khám phá '[Định hướng] Lộ trình học mỗi ngày 1 poster' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài DH2. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson DH2 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: [Định hướng] Lộ trình học mỗi ngày 1 poster'. Dark tech background.
Caption overlay: Hoàn thành Bài DH2 -> Xem tiếp Bài DH3: [Định hướng] Lộ trình học mỗi ngày 1 poster.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài DH2.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài DH3 ngay bây giờ để khám phá '[Định hướng] Lộ trình học mỗi ngày 1 poster' nhé. Click vào video tiếp theo!`,

  "03": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài DH3: [Định hướng] Lộ trình học mỗi ngày 1 poster

1. Tiêu đề video
Bài DH3: [Định hướng] Lộ trình học mỗi ngày 1 poster

2. Mô tả video
Tìm hiểu trọng tâm bài học '[Định hướng] Lộ trình học mỗi ngày 1 poster'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài DH3. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học '[Định hướng] Lộ trình học mỗi ngày 1 poster' để giúp bạn xác định thứ tự học theo ngày, mốc hoàn thành và cách dùng poster như checklist. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson '[Định hướng] Lộ trình học mỗi ngày 1 poster' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài DH3: [Định hướng] Lộ trình học mỗi ngày 1 poster - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Nắm thứ tự học theo ngày và theo giai đoạn., Xác định đầu ra cần đạt sau từng cụm bài., Biết dùng poster như checklist theo dõi tiến độ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Nắm thứ tự học theo ngày và theo giai đoạn. · Xác định đầu ra cần đạt sau từng cụm bài..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Xử lý văn thư. Với nhân sự văn phòng, nó giúp Xử lý văn phòng. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần biến định hướng AI thành kế hoạch triển khai có người chịu trách nhiệm, ngân sách và chỉ số..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Soạn thảo văn bản | Văn phòng: Soạn email | SME: Lộ trình AI-first 30-60-90 ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là lập lộ trình chung chung, thiếu mốc hoàn thành hoặc rủi ro phụ thuộc.. Thay vào đó, tư duy đúng đắn là chia chặng chi tiết, xác định hạn hoàn thành và checklist nghiệm thu từng mốc.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Lập lộ trình chung chung, thiế... | Đúng: Chia chặng chi tiết, xác định ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 01 ngay bây giờ để khám phá 'Bài 01: Giới thiệu Claude' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài DH3. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson DH3 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 01: Giới thiệu Claude'. Dark tech background.
Caption overlay: Hoàn thành Bài DH3 -> Xem tiếp Bài 01: Bài 01: Giới thiệu Claude.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài DH3.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 01 ngay bây giờ để khám phá 'Bài 01: Giới thiệu Claude' nhé. Click vào video tiếp theo!`,

  "04": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 01: Giới thiệu Claude - Trợ Lý Công Nghệ An Toàn Từ Anthropic

1. Tiêu đề video
Bài 01: Giới thiệu Claude - Trợ Lý Công Nghệ An Toàn Từ Anthropic

2. Mô tả video
Khám phá Claude - mô hình AI tiên tiến từ Anthropic. Khác với các công cụ chat thông thường, Claude được thiết kế để trở thành một cộng sự thấu hiểu sâu sắc, suy luận logic và đặt tính an toàn, minh bạch lên hàng đầu.

3. Tổng thời lượng đề xuất
2 phút 10 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Sự khác biệt của Claude
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Giai đoạn 1. Bạn có thể đã nghe nhiều về AI, nhưng hôm nay chúng ta sẽ làm quen với Claude - một mô hình AI tiên tiến được phát triển bởi Anthropic. Điểm khác biệt? Claude không chỉ là một cỗ máy trả lời tự động, mà là một cộng sự được thiết kế để thấu hiểu, suy luận logic và làm việc với sự an toàn, minh bạch tối đa.
Shot list: Biểu tượng một bộ não công nghệ (AI Brain) sáng lên giữa màn hình. Các luồng dữ liệu nhiễu loạn xung quanh bị đẩy lùi, nhường chỗ cho một không gian làm việc số gọn gàng, an toàn.
Prompt tạo hình/video: A glowing high-tech brain icon symbolizing AI intelligence, surrounded by a subtle, secure energy shield. The background transitions from chaotic data streams to a clean, organized digital workspace. Dark mode, neon cyan and orange accents, premium 3D render. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Claude = Trợ lý AI thông minh & An toàn từ Anthropic.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, mang tính khám phá.
Hiệu ứng: Hiệu ứng "khiên bảo vệ" (shield) mờ nhạt xuất hiện khi nhắc đến chữ "an toàn".

Cảnh 2: Bốn trụ cột sức mạnh của Claude
Thời lượng: 25s
Voice-over: Sức mạnh của Claude xoay quanh 4 điểm nổi bật. Thứ nhất: Khả năng hiểu và trò chuyện cực kỳ tự nhiên theo ngữ cảnh. Thứ hai: Sức mạnh xử lý văn bản khổng lồ, giúp tóm tắt tài liệu siêu tốc. Thứ ba: Năng lực suy luận và giải quyết vấn đề sâu sắc. Và thứ tư: Độ an toàn, đáng tin cậy cao, luôn tôn trọng người dùng.
Shot list: Đồ họa Infographic với bố cục 3 tầng. Tầng giữa hiện 4 biểu tượng (Icon): Khung chat, Trang giấy, Bóng đèn, và Chiếc khiên bảo vệ. Các icon lần lượt sáng lên.
Prompt tạo hình/video: Clean infographic dashboard with a 3-tier layout. The middle tier features 4 glowing minimalist icons: a chat bubble, a document file, a lightbulb, and a security shield. High contrast, neon yellow and cyan on a sleek dark background. Professional corporate UI. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Giao tiếp tự nhiên - Xử lý văn bản - Suy luận logic - An toàn & Đáng tin.
Ghi chú dựng video:
Âm thanh: Tiếng "Ping" công nghệ thanh thoát mỗi khi một trụ cột/icon sáng lên.

Cảnh 3: Ứng dụng thực tế cho người đi làm
Thời lượng: 25s
Voice-over: Với những thế mạnh đó, Claude có thể giúp gì cho bạn? Nếu bạn làm hành chính, Claude sẽ là chuyên gia xử lý hàng chục trang công văn. Với dân văn phòng, nó giúp viết lách, lập kế hoạch trôi chảy. Nó cũng hỗ trợ học tập đa lĩnh vực, dịch thuật đa ngôn ngữ và thậm chí là giải thích code cho các dự án IT.
Shot list: Màn hình trượt ngang hiển thị các thẻ công việc: Một lá thư email đang tự động hoàn thiện (Viết lách), Một cuốn sách ảo mở ra (Học tập), Một bảng kế hoạch dự án (Công việc).
Prompt tạo hình/video: A dynamic horizontal scrolling UI showing futuristic work cards. Card 1: A glowing digital pen drafting an email. Card 2: A holographic book. Card 3: A minimalist project management dashboard. Deep blue and neon cyan colors, glassmorphism. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Viết lách - Công việc - Học tập - Đa ngôn ngữ.
Ghi chú dựng video:
Hiệu ứng: Slide thẻ bài mượt mà, đồng bộ với nhịp Voice-over đọc đến từng ứng dụng.

Cảnh 4: Tư duy đúng/sai khi dùng Claude
Thời lượng: 20s
Voice-over: Tuy nhiên, cần lưu ý ranh giới đúng/sai khi sử dụng. Sai lầm phổ biến là dùng Claude như một công cụ tìm kiếm Google. Cách dùng đúng là coi Claude như một "thực tập sinh xuất sắc" – bạn cần giao việc rõ ràng, cung cấp đủ bối cảnh, và để nó suy luận thay vì chỉ trích xuất thông tin khô khan.
Shot list: Cán cân đồ họa. Một bên là biểu tượng "kính lúp" (Tìm kiếm - đánh dấu X đỏ). Một bên là biểu tượng hai người (Cộng sự - đánh dấu Tick xanh).
Prompt tạo hình/video: A digital balancing scale graphic. On one side, a glowing magnifying glass with a subtle red 'X'. On the other side, a futuristic icon of two interlocking gears or people working together with a bright green checkmark. High-tech analytical style. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Sai: Dùng như Google Tìm kiếm | Đúng: Dùng như Cộng sự suy luận.
Ghi chú dựng video:
Hiệu ứng: Chữ X đỏ và Tick xanh xuất hiện dứt khoát kèm theo âm thanh SFX "deny" và "approve" nhẹ.

Cảnh 5: Nguyên tắc bảo mật & Kiểm chứng
Thời lượng: 20s
Voice-over: Dù Claude từ Anthropic được thiết kế cực kỳ an toàn, quy tắc vàng của chúng ta vẫn không đổi. Đặc biệt với các số liệu kinh doanh, dữ liệu pháp lý hay hồ sơ nội bộ, AI chỉ phân tích và đưa ra bản nháp. Bạn phải luôn là người kiểm chứng chéo và đưa ra quyết định cuối cùng.
Shot list: Biểu tượng ổ khóa bảo mật công nghệ cao, sau đó chuyển sang hình ảnh một chuyên gia đang xem xét lại một bảng dữ liệu phát sáng.
Prompt tạo hình/video: A 3D holographic padlock rotating slowly, transitioning into a close-up of a professional's hand interacting with a glowing data chart on a tablet, symbolizing review and verification. Cyberpunk corporate lighting, highly detailed. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: AI phân tích - Con người kiểm chứng & quyết định.
Ghi chú dựng video:
Nhạc nền: Âm sắc trầm xuống một chút để nhấn mạnh tính nghiêm túc của việc bảo mật.

Cảnh 6: Nhập cuộc thực chiến - Dẫn hướng sang Bài 02
Thời lượng: 20s
Voice-over: Hiểu tư duy về Claude mới chỉ là bước khởi đầu. Để thực sự làm chủ công cụ này, bạn phải biết nó giải quyết được những công việc gì cho bạn. Hãy chuyển sang Bài 02 ngay bây giờ để khám phá 8 nhóm tác vụ thực chiến giúp bạn tối ưu hóa hiệu suất văn phòng. Click vào video tiếp theo!
Shot list: Bảng Checklist tiến độ với dấu tích hoàn thành Bài 01. Màn hình trượt sang hiển thị 8 biểu tượng nhóm tác vụ của Bài 02. Phía dưới là nút CTA nhấp nháy chuyển sang "Bài 02: Claude có thể giúp gì cho bạn" phát sáng rực rỡ.
Prompt tạo hình/video: A sleek educational dashboard with a glowing green checkmark indicating 'Lesson 01 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 02'. Ambient dark tech background with floating icons of 8 key tasks. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Hoàn thành Bài 01 -> Xem tiếp Bài 02: Claude giúp gì cho bạn.
Ghi chú dựng video:
Hiệu ứng: Nút CTA sáng rực lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa vào 4 thế mạnh của Claude (Giao tiếp tự nhiên, Xử lý văn bản dài, Suy luận logic, An toàn & Bảo mật), bạn hãy:
- Xác định 1 thế mạnh mà bạn cảm thấy công việc hiện tại của mình đang "khát" nhất.
- Ghi chú lại lý do tại sao. (Ví dụ: "Tôi chọn Xử lý văn bản dài vì mỗi ngày tôi phải đọc hàng chục hợp đồng phức tạp").

6. Checklist hoàn thành
[ ] Đã hiểu Claude là mô hình AI đề cao tính suy luận và an toàn từ Anthropic.
[ ] Ghi nhớ 4 trụ cột nổi bật của Claude (Giao tiếp, Xử lý văn bản, Suy luận, An toàn).
[ ] Phân biệt được tư duy sai (dùng như Google) và tư duy đúng (dùng như cộng sự).
[ ] Đã hoàn thành Bài tập thực hành (Xác định thế mạnh cần nhất).

7. Cầu nối sang Bài 02
Lời dẫn chuyển tiếp: Hiểu tư duy về Claude mới chỉ là bước khởi đầu. Để thực sự làm chủ công cụ này, bạn phải biết nó giải quyết được những công việc gì cho bạn. Hãy chuyển sang Bài 02 ngay bây giờ để khám phá 8 nhóm tác vụ thực chiến giúp bạn tối ưu hóa hiệu suất văn phòng. Click vào video tiếp theo!\`,`,

  "05": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 02: Claude có thể giúp gì cho bạn

1. Tiêu đề video
Bài 02: Claude có thể giúp gì cho bạn

2. Mô tả video
Khám phá 8 nhóm tác vụ cốt lõi mà Claude có thể hỗ trợ trôi chảy trong công việc hằng ngày của bạn, từ soạn thảo nội dung, tóm tắt tài liệu cho đến phân tích số liệu và hỗ trợ lập trình.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Từ thấu hiểu đến hành động
Thời lượng: 20s
Voice-over: Sau khi đã làm quen với "người cộng sự" Claude ở bài trước, câu hỏi tiếp theo chắc chắn là: Làm sao để biến sức mạnh của nó thành hiệu suất thực tế mỗi ngày? Hôm nay, chúng ta sẽ cùng khám phá 8 nhóm tác vụ cốt lõi mà Claude có thể giải quyết trôi chảy, giúp bạn nâng cấp năng suất làm việc vượt trội.
Shot list: Sơ đồ cây bài học phát sáng, nhánh "Nền tảng" sáng lên và zoom vào Bài 05. Giao diện làm việc của Claude mở ra với 8 ô ứng dụng 3D trực quan đang tự động chuyển động.
Prompt tạo hình/video: A high-tech digital workspace with 8 glowing 3D cards arranged in a grid, each representing a core AI capability. Neon cyan and orange highlights on a premium dark mode dashboard. Dynamic corporate UI, sharp details. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Claude = Giải pháp thực chiến cho 8 nhóm tác vụ hằng ngày.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, mang tính khám phá.

Cảnh 2: Nhóm 1 đến 4 - Văn bản, Tóm tắt, Phân tích và Code
Thời lượng: 25s
Voice-over: Bốn ứng dụng đầu tiên bao gồm: Thứ nhất: Viết lách chuyên nghiệp – soạn thảo email, content truyền thông chuẩn mực. Thứ hai: Tóm tắt siêu tốc – chắt lọc tinh hoa từ các công văn, tài liệu hàng trăm trang. Thứ ba: Phân tích dữ liệu – biến các bảng số liệu thô thành insight điều hành. Và thứ tư: Lập trình cơ bản – giải thích code, viết script tự động hóa công việc.
Shot list: Màn hình chia làm 4 phần tương tác nhanh. File văn bản tự sinh chữ, một cuốn tài liệu dày co lại thành 1 trang, biểu đồ số liệu phát sáng, và các dòng code chạy mượt mà.
Prompt tạo hình/video: A professional 4-quadrant infographic display on a dark interface. Quadrant 1: A writing pen icon drafting text. Quadrant 2: A document collapsing into a neat outline. Quadrant 3: A glowing bar chart. Quadrant 4: Clean code syntax. Neon yellow and cyan accents, sleek design. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Viết content - Tóm tắt văn bản - Phân tích dữ liệu - Hỗ trợ lập trình.
Ghi chú dựng video:
Âm thanh: Tiếng "Ping" công nghệ thanh thoát mỗi khi một icon sáng lên.

Cảnh 3: Nhóm 5 đến 8 - Học tập, Kế hoạch, Dịch thuật và Brainstorm
Thời lượng: 25s
Voice-over: Bốn ứng dụng tiếp theo là: Thứ năm: Gia sư học tập – giải thích mọi khái niệm phức tạp một cách dễ hiểu. Thứ sáu: Lập kế hoạch dự án – chia nhỏ công việc, SOP và dự báo rủi ro. Thứ bảy: Dịch thuật đa ngôn ngữ – chuyển hóa tài liệu chính xác theo ngữ cảnh văn hóa. Và thứ tám: Brainstorm ý tưởng – khai phá các góc nhìn đột phá cho chiến dịch của bạn.
Shot list: Màn hình hiển thị các thẻ công việc di chuyển ngang: Một bảng kế hoạch dự án, biểu tượng chuyển đổi ngôn ngữ, và những bóng đèn ý tưởng sáng lên liên tục.
Prompt tạo hình/video: A dynamic horizontal scrolling dashboard with sleek futuristic cards. Card 1: Holographic book. Card 2: Minimalist gantt chart. Card 3: Two floating speech bubbles with globe icon. Card 4: Glowing neon lightbulbs. Deep blue and cyan colors. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Gia sư học tập - Lập kế hoạch - Dịch thuật - Brainstorm ý tưởng.
Ghi chú dựng video:
Hiệu ứng: Slide thẻ bài mượt mà, đồng bộ với nhịp đọc.

Cảnh 4: Ứng dụng thực tế theo 3 đối tượng mục tiêu
Thời lượng: 20s
Voice-over: Claude sẽ hiển thị sức mạnh khác nhau tùy thuộc vào vai trò của bạn. Cán bộ hành chính dùng Claude để soạn tờ trình, tóm tắt nghị định. Dân văn phòng viết email khách hàng, làm slide thuyết trình. Còn với lãnh đạo doanh nghiệp, Claude hỗ trợ xây dựng playbook vận hành và kịch bản chăm sóc khách hàng tự động.
Shot list: Màn hình hiển thị 3 cột biểu tượng đại diện cho: Huy hiệu công sở (Hành chính), Laptop & Cốc cafe (Văn phòng), và Cán cân tài chính/Bảng điều hành (Lãnh đạo).
Prompt tạo hình/video: Minimalist 3-column UI card layout on a dark tech background. Column 1: A secure shield badge icon. Column 2: A sleek laptop with coffee cup icon. Column 3: A financial bar chart with executive tie icon. Glassmorphism, neon cyan accents. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Hành chính: Tờ trình & Tóm tắt | Văn phòng: Email & Thuyết trình | SME: Playbook & Vận hành.
Ghi chú dựng video:
Hiệu ứng: Các cột sáng lên lần lượt theo giọng đọc.

Cảnh 5: Nguyên tắc "Bản nháp" và An toàn thông tin
Thời lượng: 20s
Voice-over: Mặc dù đa năng, quy tắc cốt lõi của Claude Mastery vẫn luôn bất biến. AI chỉ giúp bạn chuẩn bị "Bản nháp". Bạn là người kiểm chứng chéo toàn bộ dữ liệu, ẩn danh thông tin bảo mật và đưa ra quyết định duyệt cuối cùng để đảm bảo tính pháp lý và an toàn dữ liệu.
Shot list: Một bàn tay chuyên gia nhấp chuột phê duyệt một bản nháp tài liệu có dấu đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục bên cạnh biểu tượng ổ khóa bảo mật.
Prompt tạo hình/video: A futuristic holographic document with a bright green 'APPROVED' stamp next to a glowing security padlock. Cyberpunk corporate desk lighting, highly focused macro shot. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: AI chuẩn bị bản nháp -> Con người kiểm duyệt và quyết định.
Ghi chú dựng video:
Nhạc nền: Âm sắc trầm xuống một chút để nhấn mạnh tính bảo mật.

Cảnh 6: Làm chủ không gian thao tác - Dẫn hướng sang Bài 03
Thời lượng: 20s
Voice-over: Bạn đã nắm rõ những việc Claude có thể giải quyết. Bước tiếp theo để bắt tay vào làm việc thật là làm chủ "bản doanh" của nó. Hãy chuyển sang Bài 03 ngay lập tức để làm quen với giao diện và thiết lập 5 khu vực chức năng cốt lõi giúp bạn tăng tốc thao tác hằng ngày. Click vào video Bài 03!
Shot list: Bảng checklist hiển thị dấu tích xanh Bài 02 hoàn thành, phía dưới xuất hiện nút bấm phát sáng "Bài tiếp theo: Bài 03 - Các thành tố trong ứng dụng" phát sáng rực rỡ, hiển thị mô hình giao diện Claude 3D thu nhỏ.
Prompt tạo hình/video: High-tech educational portal interface. A glowing green checkmark showing 'Lesson 02 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 03'. Sleek dark ambient background with a glowing 3D software dashboard. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Hoàn thành Bài 02 -> Xem tiếp Bài 03: Giao diện & Các thành tố.
Ghi chú dựng video:
Hiệu ứng: Nút CTA nhấp nháy sáng rực ở những giây cuối.

5. Bài tập thực hành
Dựa trên 8 nhóm tác vụ đã học, bạn hãy:
- Chọn ra 1 nhóm tác vụ mà công việc của bạn đang cần tự động hóa hoặc tối ưu hóa nhất.
- Ghi lại lý do cụ thể và 1 đầu ra mong đợi từ nhóm tác vụ đó. (Ví dụ: "Tôi chọn Tóm tắt tài liệu vì mỗi ngày tôi phải đọc và tổng hợp khoảng 5-6 báo cáo tiến độ dài").

6. Checklist hoàn thành
[ ] Nhận diện đầy đủ 8 nhóm ứng dụng cốt lõi của Claude.
[ ] Nắm được cách áp dụng thực tế theo 3 nhóm ngành (Hành chính, Văn phòng, SME).
[ ] Hiểu rõ và cam kết tuân thủ quy tắc "Kiểm chứng bản nháp" trước khi duyệt đầu ra.
[ ] Hoàn thành bài tập thực hành chọn nhóm tác vụ cần thiết nhất.

7. Cầu nối sang Bài 03
Lời dẫn chuyển tiếp: Bạn đã nắm rõ những việc Claude có thể giải quyết. Bước tiếp theo để bắt tay vào làm việc thật là làm chủ "bản doanh" của nó. Hãy chuyển sang Bài 03 ngay lập tức để làm quen với giao diện và thiết lập 5 khu vực chức năng cốt lõi giúp bạn tăng tốc thao tác hằng ngày. Click vào video Bài 03!\`,`,

  "06": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 03: Các thành tố trong ứng dụng

1. Tiêu đề video
Bài 03: Các thành tố trong ứng dụng

2. Mô tả video
Khám phá 5 thành phần cốt lõi trong giao diện Claude, từ Thanh bên (Sidebar), Khu vực trò chuyện đến Project và Cài đặt cá nhân. Hiệu chỉnh giao diện giúp bạn tối ưu hóa thao tác và làm việc mượt mà hơn mỗi ngày.

3. Tổng thời lượng đề xuất
2 phút 15 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Làm chủ bản doanh của bạn
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 03. Khi làm việc với một trợ lý AI mạnh mẽ như Claude, việc hiểu rõ các thành phần trên màn hình là chìa khóa để bạn thao tác nhanh và không bị bối rối. Hãy cùng khám phá 5 khu vực chức năng cốt lõi trên giao diện làm việc của Claude để biến nó thành một "bản doanh" hiệu suất cao của riêng bạn.
Shot list: Giao diện Claude mở ra với các vùng chức năng được quét màu nổi bật. Các đường nối công nghệ chỉ vào Sidebar, Chat Box, và Model Selector. Bố cục tối giản, sắc nét.
Prompt tạo hình/video: A clean, futuristic software dashboard UI on a dark screen. Highlighted areas like sidebar, chat box, and model selector are illuminated with glowing neon cyan borders. Subtle digital scanlines, modern tech aesthetic, 3D render. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Làm chủ giao diện = Tăng tốc thao tác và Hiệu suất làm việc.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, mang tính khám phá.
Hiệu ứng: Quét sáng (glow) vùng giao diện khi voice-over nhắc tên.

Cảnh 2: Thanh bên (Sidebar) & Quản lý tri thức
Thời lượng: 25s
Voice-over: Đầu tiên là Sidebar - Thanh bên ở góc trái. Đây là trung tâm điều khiển giúp bạn tạo cuộc hội thoại mới bằng nút New Chat, quản lý lịch sử trò chuyện gần đây, và chuyển đổi nhanh giữa các Project. Ở góc dưới cùng là mục Settings để bạn cài đặt tài khoản và tùy chỉnh cá nhân.
Shot list: Góc nhìn cận cảnh vào Sidebar bên trái của Claude. Nút "New Chat" sáng lên và lịch sử chat cuộn mượt mà. Ở góc dưới, menu Settings mở ra hiển thị các tab cài đặt.
Prompt tạo hình/video: Close-up of a sleek left sidebar on a software interface, dark mode, glowing neon orange buttons. A list of chat histories scrolls smoothly. Futuristic gear icon for settings glows at the bottom. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Sidebar: New Chat · Lịch sử hội thoại · Cài đặt tài khoản.
Ghi chú dựng video:
Âm thanh: Tiếng click nhẹ kèm hiệu ứng chuyển động trượt mượt mà.

Cảnh 3: Khu vực Trò chuyện & Thanh công cụ đính kèm
Thời lượng: 25s
Voice-over: Tiếp theo là Khu vực trò chuyện ở chính giữa. Đây là nơi bạn nhập yêu cầu vào ô chat, và đặc biệt là thanh công cụ đính kèm ở góc dưới - cho phép bạn tải lên các tệp dữ liệu như PDF, Word, Excel, CSV hoặc hình ảnh. Claude có thể ghi nhớ toàn bộ mạch hội thoại để suy luận sâu sắc cùng bạn.
Shot list: Khung nhập văn bản ở giữa màn hình. Biểu tượng kẹp giấy (đính kèm) phát sáng và một tệp tài liệu PDF ảo bay vào ô chat, tự động trích xuất các luồng dữ liệu phát sáng.
Prompt tạo hình/video: A glowing text input area on a digital chat screen. A virtual paperclip icon pulses with light as a holographic document file slides into the text field, radiating code and data points. Neon yellow accents. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Khu vực trò chuyện: Nhập prompt · Đính kèm tài liệu · Ghi nhớ ngữ cảnh.
Ghi chú dựng video:
Âm thanh: Tiếng "whoosh" nhẹ khi tệp tài liệu bay vào ô chat.

Cảnh 4: Trình chọn Mô hình & Trình duyệt Project/Artifact
Thời lượng: 20s
Voice-over: Đừng bỏ qua thanh chọn mô hình ở trên cùng. Bạn có thể dễ dàng chuyển đổi giữa Claude Sonnet cho công việc hằng ngày, Haiku cho tốc độ tối ưu, hoặc Claude Opus 4.8 mới nhất cho các bài toán suy luận phức tạp. Khi Claude tạo code hoặc tài liệu dài, cửa sổ Artifact sẽ mở ra bên phải giúp bạn xem trực quan kết quả.
Shot list: Một menu thả xuống hiển thị 3 model: Claude 3.5 Sonnet, Haiku, Claude Opus 4.8. Khi click vào Sonnet, màn hình bên phải mở ra một cửa sổ Artifact hiển thị một trang web mini tương tác đang tự động viết code.
Prompt tạo hình/video: Split screen showing a model dropdown menu (Sonnet, Haiku, Opus 4.8) on the left, and a slide-out dashboard container representing 'Artifacts' showing live interactive web code rendering on the right. Modern UI. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Chọn model phù hợp | Artifacts: Xem trước code & tài liệu trực quan.
Ghi chú dựng video:
Âm thanh: Tiếng "ping" thanh thoát khi cửa sổ Artifact trượt ra.

Cảnh 5: Nguyên tắc an toàn dữ liệu khi upload file
Thời lượng: 20s
Voice-over: Một lưu ý cực kỳ quan trọng khi làm việc với file và hình ảnh: để đảm bảo an toàn thông tin, hãy luôn ẩn danh các dữ liệu nhạy cảm, số định danh cá nhân hoặc tài liệu mật trước khi đính kèm. AI là cộng sự đắc lực, nhưng bạn phải luôn là người kiểm duyệt thông tin đầu ra cuối cùng.
Shot list: Một trang tài liệu ảo xuất hiện. Các dòng chữ nhạy cảm (như tên riêng, số tài khoản) được tô đen và ẩn đi dưới một kính lọc quét màu xanh bảo mật. Bên cạnh là biểu tượng chiếc khiên xanh lục.
Prompt tạo hình/video: A digital document scanning process. A security scanner beam blacks out sensitive sections of text on the paper. A green shield emblem appears in the background. Secure database environment theme. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Ẩn danh dữ liệu nhạy cảm · Con người kiểm chứng đầu ra.
Ghi chú dựng video:
Hiệu ứng: Tiếng rà quét bảo mật (scanner sound) và mờ phần chữ nhạy cảm.

Cảnh 6: Sở hữu tài khoản và thiết lập an toàn - Dẫn hướng sang Bài 04
Thời lượng: 20s
Voice-over: Bạn đã có bản đồ giao diện trong tay, nhưng hành trình thực hành sẽ không thể bắt đầu nếu bạn chưa có tài khoản. Hãy chuyển sang Bài 04 ngay để tự tay đăng ký và thiết lập các lớp bảo mật an toàn nhất cho tài khoản Claude của mình. Click vào video Bài 04 để bắt đầu!
Shot list: Bảng checklist hiển thị dấu tích xanh Bài 03 hoàn thành. Phía dưới xuất hiện nút bấm phát sáng "Bài tiếp theo: Bài 04 - Đăng ký, đăng nhập và bảo mật" với mô hình chiếc chìa khóa và ổ khóa bảo mật 3D lấp lánh neon.
Prompt tạo hình/video: Educational UI dashboard showing a green checkbox tick for 'Lesson 03 Completed'. Below, a pulsing CTA button with neon cyan text 'Next: Bài 04'. Sleek dark mode ambient background with a glowing 3D security lock icon. (Note: Text/caption sẽ thêm ở bước dựng video).
Caption overlay: Hoàn thành Bài 03 -> Xem tiếp Bài 04: Đăng ký & Bảo mật.
Ghi chú dựng video:
Hiệu ứng: Nút CTA sáng rực rỡ ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa vào giao diện Claude, bạn hãy:
- Mở một hội thoại mới (New Chat) và chuyển đổi qua lại giữa các model (Sonnet, Haiku).
- Tập đính kèm một file bất kỳ (đã ẩn danh thông tin cá nhân) vào ô chat và ghi chú lại sự phản hồi của giao diện.

6. Checklist hoàn thành
[ ] Hiểu rõ 5 khu vực chức năng chính trên giao diện Claude.
[ ] Nắm được cách chuyển đổi model và công cụ đính kèm file.
[ ] Cam kết tuân thủ quy tắc ẩn danh thông tin nhạy cảm khi tải file lên AI.
[ ] Đã chạy thử New Chat và đính kèm file mẫu thành công.

7. Cầu nối sang Bài 04
Lời dẫn chuyển tiếp: Bạn đã có bản đồ giao diện trong tay, nhưng hành trình thực hành sẽ không thể bắt đầu nếu bạn chưa có tài khoản. Hãy chuyển sang Bài 04 ngay để tự tay đăng ký và thiết lập các lớp bảo mật an toàn nhất cho tài khoản Claude của mình. Click vào video Bài 04 để bắt đầu!\`,`,

  "07": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 04: Đăng ký, đăng nhập và bảo mật tài khoản Claude

1. Tiêu đề video
Bài 04: Đăng ký, đăng nhập và bảo mật tài khoản Claude

2. Mô tả video
Hướng dẫn từng bước đăng ký tài khoản Claude nhanh chóng và thiết lập các lớp bảo mật an toàn như xác thực 2 yếu tố (2FA) để bảo vệ thông tin công việc của bạn.

3. Tổng thời lượng đề xuất
2 phút 15 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của tài khoản an toàn
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 04. Khi bắt đầu ứng dụng AI vào công việc thực tế, điều quan trọng nhất không chỉ là gõ lệnh nhanh, mà là bảo vệ dữ liệu của cơ quan và doanh nghiệp. Hãy cùng bắt đầu bằng việc đăng ký và thiết lập một tài khoản Claude được bảo mật tối đa ngay hôm nay.
Shot list: Giao diện đăng nhập Claude hiện ra với hiệu ứng quét vân tay 3D hoặc khóa bảo mật neon lấp lánh bảo vệ ô nhập email.
Prompt tạo hình/video: A futuristic sign-in screen UI, dark mode, with a glowing holographic padlock and a fingerprint scanner icon in neon blue. Clean layout, security theme, 3D render.
Caption overlay: Tài khoản bảo mật = Nền tảng làm việc an toàn và lâu dài.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (synthwave) nhẹ nhàng, mang tính công nghệ và tin cậy.

Cảnh 2: Quy trình Đăng ký & Đăng nhập
Thời lượng: 25s
Voice-over: Để đăng ký, bạn truy cập website chính thức claude.ai. Bạn có thể sử dụng trực tiếp tài khoản Google, Apple hoặc đăng ký bằng email cá nhân. Sau khi nhập email, hãy mở hòm thư của bạn để lấy liên kết xác thực dùng một lần để đăng nhập an toàn.
Shot list: Trình duyệt mở trang claude.ai. Con trỏ click vào nút Google login, sau đó hiển thị hòm thư Gmail nhận được thư xác nhận từ Anthropic và nhấn link đăng nhập tự động.
Prompt tạo hình/video: Close-up of a web browser address bar showing 'claude.ai'. A cursor clicks a neon-lit 'Continue with Google' button. Seamless transition to a futuristic glassmorphic email inbox showing a verification message glowing with cyan light.
Caption overlay: Đăng ký nhanh qua Google / Apple hoặc Email xác thực 1 lần.
Ghi chú dựng video:
Hiệu ứng: Tiếng bấm click chuột rõ ràng và màn hình chuyển tiếp mượt mà.

Cảnh 3: Quản lý tài khoản và Bảo mật
Thời lượng: 25s
Voice-over: Sau khi đăng nhập, hãy mở menu Settings ở góc trái màn hình để quản lý thông tin cá nhân như tên hiển thị, email và quản lý các gói dịch vụ như Pro hay Team. Hãy kích hoạt ngay bảo mật hai lớp 2FA bằng số điện thoại để đảm bảo không ai có thể xâm nhập trái phép tài khoản của bạn.
Shot list: Màn hình Settings của Claude mở ra, hiển thị các tùy chọn cá nhân. Vùng bảo mật (Security / 2FA) sáng lên, mã OTP hiển thị trên màn hình điện thoại ảo và điền thành công.
Prompt tạo hình/video: Futuristic security settings panel on a dashboard. Highlighting a toggled switch for 2FA. A virtual smartphone nearby displays a glowing SMS authentication code pulsing in bright green. Modern, secure tech aesthetic.
Caption overlay: Quản lý Settings · Kích hoạt bảo mật 2 lớp (2FA) bảo vệ tài khoản.
Ghi chú dựng video:
Hiệu ứng: Tiếng "bíp" bảo mật nhỏ khi công tắc 2FA được bật lên thành công.

Cảnh 4: Ứng dụng thực tế theo vai trò
Thời lượng: 25s
Voice-over: Tài khoản an toàn là tấm khiên cho mọi công việc. Với cán bộ hành chính, đây là điều kiện bắt buộc để thực hiện quy trình bảo mật. Với dân văn phòng, nó bảo vệ dữ liệu khách hàng. Còn với lãnh đạo SME, đây là bước đầu tiên để xây dựng quy tắc AI Governance cho toàn bộ công ty.
Shot list: Màn hình chia ba. Bên trái: chiếc khiên hành chính bảo mật. Ở giữa: sơ đồ bảo vệ dữ liệu khách hàng. Bên phải: tài liệu "AI Governance Playbook" đang được đóng dấu mộc bảo mật xanh lục.
Prompt tạo hình/video: Split screen with three security-themed graphics: a glowing government security shield, a database locked with chains, and a digital playbook labeled 'AI Governance' being stamped with a green verification mark. Cyberpunk security vibes.
Caption overlay: Hành chính: Bảo mật văn vụ | Văn phòng: An toàn CRM | SME: AI Governance.
Ghi chú dựng video:
Hiệu ứng: 3 vùng sáng lên lần lượt theo tiếng đọc voice-over.

Cảnh 5: Prompt thực hành & Bài tập
Thời lượng: 20s
Voice-over: Hãy thực hành ngay bằng cách sử dụng prompt hướng dẫn lập chính sách bảo mật cho chính bạn. Nhiệm vụ của bạn là đăng ký thành công tài khoản, thiết lập 2-step verification, chụp lại màn hình trang Settings đã bảo mật để nộp bài và nhận chứng nhận hoàn thành.
Shot list: Danh sách checklist bài tập hiện ra gồm: Tạo tài khoản, Bật 2FA, Chụp màn hình. Cả 3 mục lần lượt được tick xanh lá cây nổi bật.
Prompt tạo hình/video: A digital checklist UI showing tasks being checked off with a neon green marker. The background is a clean dark mode dashboard with subtle scanlines. 3D checkbox icons.
Caption overlay: Bài tập: Đăng ký tài khoản -> Bật 2FA -> Nộp ảnh chụp Settings.
Ghi chú dựng video:
Hiệu ứng: Âm thanh "chinh phục" (victory sound) ngắn khi mục cuối được tick.

Cảnh 6: Cầu nối dẫn hướng sang Bài 05
Thời lượng: 20s
Voice-over: Bạn đã có một chiếc khiên bảo mật an toàn cho tài khoản của mình. Nhưng làm thế nào để điều khiển và sử dụng Claude hiệu quả nhất? Hãy chuyển sang Bài 05 ngay bây giờ để khám phá toàn bộ bản đồ giao diện, các phím tắt và tính năng Artifacts của Claude nhé. Click vào video tiếp theo!
Shot list: Nút bấm lớn phát sáng "Bài tiếp theo: Bài 05 - Giao diện tổng quan Claude" xuất hiện ở giữa màn hình với sơ đồ điều hướng giao diện 3D thu nhỏ lơ lửng xung quanh.
Prompt tạo hình/video: A glowing call-to-action button with neon orange text 'Next: Bài 05 - Giao diện tổng quan'. A mini 3D holographic wireframe of a software interface floats in the background, rotating slowly. Modern tech aesthetic.
Caption overlay: Hoàn thành Bài 04 -> Xem tiếp Bài 05: Giao diện tổng quan.
Ghi chú dựng video:
Hiệu ứng: Nút CTA nhấp nháy phát sáng rực rỡ ở 3 giây cuối cùng.

5. Bài tập thực hành
Nhiệm vụ của bạn trong bài này:
- Truy cập vào trang chủ claude.ai và hoàn tất đăng ký tài khoản.
- Vào phần Settings và kích hoạt các lớp bảo mật tài khoản (ví dụ: xác thực hai yếu tố).
- Chụp ảnh màn hình trang Settings đã hoàn tất và lưu trữ vào sổ tay học tập của bạn.

6. Checklist hoàn thành
[ ] Đã đăng ký thành công tài khoản Claude cá nhân.
[ ] Nắm rõ cách quản lý tài khoản trong bảng Settings.
[ ] Hiểu tầm quan trọng của việc kích hoạt bảo mật hai lớp (2FA).
[ ] Chụp màn hình Settings làm minh chứng thực hành.

7. Cầu nối sang Bài 05
Lời dẫn chuyển tiếp: Bạn đã có một chiếc khiên bảo mật an toàn cho tài khoản của mình. Nhưng làm thế nào để điều khiển và sử dụng Claude hiệu quả nhất? Hãy chuyển sang Bài 05 ngay bây giờ để khám phá toàn bộ bản đồ giao diện, các phím tắt và tính năng Artifacts của Claude nhé. Click vào video tiếp theo!\`,`,

  "08": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 05: Giao diện tổng quan Claude

1. Tiêu đề video
Bài 05: Giao diện tổng quan Claude

2. Mô tả video
Làm quen với các khu vực chức năng chính trên màn hình Claude, giúp bạn điều hướng mượt mà, đính kèm tài liệu chính xác và khai thác cửa sổ Artifacts để xem trước kết quả trực quan.

3. Tổng thời lượng đề xuất
2 phút 10 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Làm chủ bản đồ giao diện
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 05. Để làm việc hiệu quả với Claude, bạn cần hiểu rõ "bản đồ" không gian làm việc của mình. Tránh việc loay hoay tìm kiếm tính năng hay thất lạc lịch sử chat. Hãy cùng khám phá bố cục giao diện tổng quan của Claude để tối ưu hóa 100% không gian làm việc của bạn.
Shot list: Giao diện tổng thể của Claude mở ra với các đường chỉ dẫn neon hướng vào các vùng chức năng chính: Sidebar, Ô nhập prompt, Trình chọn model và Artifacts.
Prompt tạo hình/video: A clean, high-tech software dashboard UI in dark mode. Illuminated neon paths connect a central hub to sidebar, chat input, and preview panels. Glowing cyan and orange grid system. 3D concept.
Caption overlay: Hiểu rõ giao diện = Tăng tốc điều hướng và Làm việc chuyên nghiệp.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (lo-fi tech) nhịp điệu thư giãn nhưng hiện đại.

Cảnh 2: Hộp thoại Chat, Sidebar và Lịch sử
Thời lượng: 25s
Voice-over: Ở trung tâm là Hộp thoại chat - nơi bạn gõ prompt và nhận phản hồi. Phía bên trái là Sidebar, chứa nút New Chat để bắt đầu hội thoại mới và toàn bộ lịch sử trò chuyện được sắp xếp theo thời gian giúp bạn dễ dàng tìm kiếm và tiếp tục mạch làm việc trước đó.
Shot list: Con trỏ click vào nút "New Chat" phát sáng, lịch sử chat bên trái cuộn lên mượt mà hiển thị các tiêu đề hội thoại có cấu trúc rõ ràng.
Prompt tạo hình/video: Close-up of a sidebar on a modern chat app UI, dark mode. A glowing cursor clicks 'New Chat' button pulsing with neon green light. List of previous conversations scrolls down with smooth fluid animation.
Caption overlay: Sidebar: New Chat · Quản lý lịch sử chat · Truy cập nhanh.
Ghi chú dựng video:
Hiệu ứng: Tiếng trượt cuộn nhẹ nhàng (scroll sound effect) đồng bộ với chuyển động lịch sử.

Cảnh 3: Project, Artifacts và Đính kèm File
Thời lượng: 25s
Voice-over: Phía dưới ô chat là nút đính kèm để bạn tải tài liệu. Điểm đặc biệt của Claude là tính năng Project giúp bạn gom các file tài nguyên vào một không gian riêng biệt, và cửa sổ Artifacts tự động mở ra bên phải khi Claude sinh mã nguồn hoặc tài liệu dài, giúp bạn theo dõi và chỉnh sửa trực quan.
Shot list: Biểu tượng đính kèm kẹp giấy sáng lên. Màn hình chia đôi, bên trái là ô chat viết code, bên phải là cửa sổ Artifacts trượt ra hiển thị giao diện web chạy tương tác trực quan.
Prompt tạo hình/video: Split-screen visual. Left side shows lines of code generating in text field; right side shows a preview container 'Artifact' sliding open, rendering a beautiful responsive chart in neon colors. Futuristic dashboard aesthetic.
Caption overlay: Project: Quản lý tài nguyên | Artifacts: Xem trước code & tài liệu dài.
Ghi chú dựng video:
Hiệu ứng: Tiếng trượt "whoosh" khi cửa sổ Artifact mở ra bên phải.

Cảnh 4: Ứng dụng thực tế theo vai trò
Thời lượng: 25s
Voice-over: Bố cục giao diện này phục vụ đắc lực cho mọi tác vụ. Chuyên viên hành chính dùng Artifacts để rà soát công văn dài. Dân văn phòng dùng Project để gom tài liệu dự án tuần. Còn lãnh đạo SME dùng giao diện này để kiểm duyệt các dashboard chỉ số do AI sinh ra một cách trực quan.
Shot list: 3 thẻ công việc hiển thị: Báo cáo công văn định dạng đẹp trên Artifact (Hành chính), Cây thư mục Project chứa các file Excel/Word (Văn phòng), Biểu đồ hình cột doanh thu sắc nét (SME).
Prompt tạo hình/video: Three stylized cards floating in digital space. Card 1 shows a clean text layout inside a preview window. Card 2 shows organized document files. Card 3 shows a colorful bar chart. High-tech executive look.
Caption overlay: Rà soát công văn (Artifacts) · Gom tài nguyên (Project) · Kiểm duyệt chỉ số.
Ghi chú dựng video:
Hiệu ứng: Ánh sáng quét qua từng thẻ khi voice-over gọi tên vai trò tương ứng.

Cảnh 5: Prompt thực hành & Bài tập
Thời lượng: 20s
Voice-over: Bài tập thực hành của bạn là hãy mở giao diện Claude, đính kèm một file tài liệu bất kỳ đã ẩn danh, yêu cầu Claude tóm tắt và kích hoạt cửa sổ Artifacts để hiển thị kết quả. Hãy chụp lại màn hình toàn bộ giao diện làm việc này của bạn để làm minh chứng.
Shot list: Giao diện Claude thực tế đang chạy. Một file document được kéo thả vào ô chat, sau đó một bài tóm tắt dài xuất hiện đẹp đẽ trong khung Artifacts bên phải.
Prompt tạo hình/video: A drag-and-drop animation of a digital file icon being dropped into a glowing chat input box. A preview sidebar smoothly slides open displaying a neatly formatted summary document.
Caption overlay: Bài tập: Đính kèm file -> Kích hoạt Artifacts -> Chụp ảnh giao diện.
Ghi chú dựng video:
Hiệu ứng: Âm thanh click nộp bài và tiếng máy ảnh chụp tanh tách nhẹ.

Cảnh 6: Cầu nối dẫn hướng sang Bài 06
Thời lượng: 20s
Voice-over: Bạn đã làm chủ bản đồ giao diện bên ngoài của Claude. Nhưng để biến Claude thành một trợ lý mang đậm dấu ấn cá nhân và an toàn nhất, bạn cần biết cách cấu hình sâu bên trong. Hãy chuyển sang Bài 06 để học cách tùy chỉnh cài đặt tài khoản và cài đặt cá nhân nhé. Click vào video tiếp theo!
Shot list: Nút bấm lớn phát sáng "Bài tiếp theo: Bài 06 - Cài đặt và tùy chỉnh cá nhân" xuất hiện kèm hình ảnh bánh răng cài đặt 3D mạ chrome vàng quay đều lấp lánh.
Prompt tạo hình/video: A pulsing call-to-action button with neon yellow text 'Next: Bài 06 - Cài đặt và tùy chỉnh'. A large golden 3D mechanical gear icon rotates smoothly in the background. High contrast dark mode theme.
Caption overlay: Hoàn thành Bài 05 -> Xem tiếp Bài 06: Cài đặt & Tùy chỉnh.
Ghi chú dựng video:
Hiệu ứng: Vòng xoay bánh răng phát sáng lung linh ở những giây cuối.

5. Bài tập thực hành
Nhiệm vụ của bạn trong bài này:
- Mở giao diện Claude, làm quen với thanh Sidebar bên trái và hộp thoại trò chuyện ở giữa.
- Thử kéo thả một file bất kỳ (đã ẩn danh dữ liệu) vào ô đính kèm tài liệu để Claude đọc.
- Viết yêu cầu dài để Claude sinh nội dung trên cửa sổ Artifacts bên phải. Chụp ảnh màn hình giao diện chứa cửa sổ Artifacts đó để lưu lại.

6. Checklist hoàn thành
[ ] Định vị được Sidebar, Ô chat, nút Đính kèm và Trình chọn model.
[ ] Hiểu cách sử dụng tính năng Project để nhóm tài nguyên.
[ ] Kích hoạt và xem trước kết quả trực quan trên màn hình Artifacts thành công.
[ ] Chụp màn hình Artifacts làm minh chứng bài tập.

7. Cầu nối sang Bài 06
Lời dẫn chuyển tiếp: Bạn đã làm chủ bản đồ giao diện bên ngoài của Claude. Nhưng để biến Claude thành một trợ lý mang đậm dấu ấn cá nhân và an toàn nhất, bạn cần biết cách cấu hình sâu bên trong. Hãy chuyển sang Bài 06 để học cách tùy chỉnh cài đặt tài khoản và cài đặt cá nhân nhé. Click vào video tiếp theo!\`,`,

  "09": `
VIDEO SCRIPT / NOTEBOOKLM BRIEFBài 06: Cài đặt và tùy chỉnh cá nhân

1. Tiêu đề video
Bài 06: Cài đặt và tùy chỉnh cá nhân

2. Mô tả video
Tùy biến sâu giao diện, thiết lập ngôn ngữ hiển thị, quản lý quyền bảo mật dữ liệu và tối ưu các tham số hệ thống để tạo ra môi trường làm việc thoải mái, riêng tư nhất.

3. Tổng thời lượng đề xuất
2 phút 15 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Cá nhân hóa người cộng sự AI
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 06. Một người trợ lý tuyệt vời nhất là người được tùy chỉnh riêng theo thói quen và nhu cầu của bạn. Claude cũng vậy. Việc thiết lập đúng các thông số cá nhân và bảo mật dữ liệu sẽ giúp bạn làm việc an tâm và thoải mái hơn rất nhiều. Hãy cùng bắt đầu tối ưu hóa cài đặt cá nhân của bạn.
Shot list: Một bảng điều khiển ảo hiện ra, các công tắc bật tắt tùy biến (Theme, Privacy, Notifications) tự động gạt sang màu xanh lá cây, xung quanh là hiệu ứng ánh sáng lấp lánh.
Prompt tạo hình/video: A futuristic digital control panel. Toggle switches labeled 'Theme', 'Security', and 'Notifications' automatically switch to 'ON' with bright green glowing lights. Sleek micro-interactions, dark mode, high-tech luxury.
Caption overlay: Cá nhân hóa cài đặt = Làm việc an toàn, thoải mái và hiệu quả hơn.
Ghi chú dựng video:
Nhạc nền: Nhạc điện tử (upbeat tech synth) năng động, truyền cảm hứng.

Cảnh 2: Tùy chỉnh Giao diện & Trải nghiệm
Thời lượng: 25s
Voice-over: Đầu tiên, hãy truy cập biểu tượng cá nhân ở góc dưới Sidebar, chọn Settings. Tại tab Appearance, bạn có thể chuyển đổi linh hoạt giữa giao diện Sáng, Tối hoặc đồng bộ theo Hệ thống. Tùy chỉnh này giúp giảm mỏi mắt khi bạn làm việc vào ban đêm hoặc trong không gian thiếu sáng.
Shot list: Con trỏ di chuyển đến avatar ở góc trái dưới, click chọn Settings. Trong bảng hiện ra, chọn "Appearance" và chuyển màn hình từ giao diện trắng sang giao diện tối mờ ảo dịu mắt.
Prompt tạo hình/video: Split screen showing a settings window. A cursor selects 'Appearance'. The screen smoothly transitions from light mode to dark mode, representing comfortable eye-friendly software UI. Glow effects on menus.
Caption overlay: Appearance: Light Mode / Dark Mode · Tiết kiệm pin và bảo vệ mắt.
Ghi chú dựng video:
Màn hình tối sầm lại mượt mà khi đổi theme để người xem thấy sự khác biệt trực quan.

Cảnh 3: Bảo mật, API và Quyền riêng tư dữ liệu
Thời lượng: 25s
Voice-over: Cực kỳ quan trọng là tab Privacy và Security. Tại đây, bạn có thể kiểm soát quyền truy cập API, xóa lịch sử trò chuyện khi cần thiết, và thiết lập các tùy chọn không cho phép nhà phát triển sử dụng dữ liệu hội thoại của bạn để huấn luyện mô hình. Điều này giúp bảo vệ triệt để tri thức của bạn và công ty.
Shot list: Giao diện Settings chuyển qua tab "Privacy & Data". Công tắc "Share data for training" được gạt tắt (OFF) và sáng đèn đỏ cảnh báo an toàn. Biểu tượng lá chắn bảo mật khóa lại.
Prompt tạo hình/video: Close-up of a digital toggle button for 'Data Training Opt-out' being clicked to 'Disabled'. A physical glowing holographic lock closes on a server stack. Cyber security theme, orange warning accents.
Caption overlay: Privacy: Tắt chia sẻ dữ liệu huấn luyện · Bảo vệ tri thức nội bộ.
Ghi chú dựng video:
Âm thanh: Tiếng "clack" dứt khoát khi tắt tùy chọn chia sẻ dữ liệu.

Cảnh 4: Ứng dụng thực tế theo vai trò
Thời lượng: 25s
Voice-over: Những cài đặt này là bắt buộc trong thực tế. Chuyên viên hành chính cần tắt chia sẻ dữ liệu để tránh lộ thông tin nhà nước. Nhân sự văn phòng cài đặt theme tối để làm việc với báo cáo nhiều giờ liền. Còn chủ doanh nghiệp cấu hình bảo mật tài khoản để phân chia quyền lực cho các phòng ban dùng chung.
Shot list: 3 hình ảnh minh họa: Con dấu đỏ "Bảo mật thông tin" (Hành chính), Người nhân viên văn phòng đeo kính làm việc đêm với màn hình tối dịu (Văn phòng), Bản đồ mạng lưới tài khoản phân quyền (SME).
Prompt tạo hình/video: 3-tier grid layout. Grid 1: Red secure stamp on a government folder. Grid 2: A employee working late in a cozy room with dark screen. Grid 3: An organizational tree diagram showing access permissions. Modern clean layout.
Caption overlay: Hành chính: Tắt data training | Văn phòng: Cài đặt Theme tối | SME: Phân quyền.
Ghi chú dựng video:
Hiệu ứng: Zoom nhẹ vào Grid tương ứng khi voice-over đọc đến.

Cảnh 5: Prompt thực hành & Bài tập
Thời lượng: 20s
Voice-over: Bài tập của bạn là hãy truy cập vào mục Settings trên tài khoản Claude, thực hiện đổi theme yêu thích và tắt quyền chia sẻ dữ liệu huấn luyện của bạn. Chụp ảnh màn hình tab Settings này của bạn và dán vào vở ghi chép cá nhân trên web học tập này nhé.
Shot list: Hộp thoại ghi chép cá nhân trên web app hiện ra. Một file ảnh chụp màn hình cài đặt được dán vào, dòng chữ "Đã lưu cài đặt bảo mật" sáng lên ở góc.
Prompt tạo hình/video: A digital note editor interface with an uploaded screenshot showing secure settings toggled. A tiny badge in the corner reads 'Saved and Verified' with a pulsing green light. User-friendly web UI.
Caption overlay: Bài tập: Đổi Theme -> Tắt chia sẻ data -> Chụp ảnh lưu vào Vở ghi chép.
Ghi chú dựng video:
Hiệu ứng: Tiếng bấm máy ảnh và thông báo lưu thành công phát ra nhẹ nhàng.

Cảnh 6: Cầu nối dẫn hướng sang Bài 07
Thời lượng: 20s
Voice-over: Bạn đã thiết lập xong một môi trường làm việc cá nhân hóa và an toàn tuyệt đối. Nhưng Claude có rất nhiều phiên bản mô hình khác nhau. Làm sao để chọn đúng dòng model cho từng công việc cụ thể? Hãy nhấn vào bài tiếp theo để khám phá cách chọn mô hình Claude phù hợp nhé. Click vào video tiếp theo!
Shot list: Bảng checklist bài học tích v xanh Bài 06. Phía dưới xuất hiện nút bấm lớn phát sáng "Bài tiếp theo: Bài 07 - Cách chọn Claude phù hợp cho từng công việc" với biểu tượng 3 mô hình Claude 3D (Haiku, Sonnet, Opus) bay lơ lửng.
Prompt tạo hình/video: Pulsing button with neon green text 'Next: Bài 07 - Chọn Model phù hợp'. Three glowing floating modules representing Haiku (fast), Sonnet (balanced), and Opus (analytical) float in space. Dark tech theme.
Caption overlay: Hoàn thành Bài 06 -> Xem tiếp Bài 07: Chọn Model phù hợp.
Ghi chú dựng video:
Hiệu ứng: Nút CTA phát sáng và các khối model 3D chuyển động xoay tròn nhẹ ở cuối.

5. Bài tập thực hành
Nhiệm vụ của bạn trong bài này:
- Click vào ảnh đại diện cá nhân ở góc dưới bên trái của bạn và mở bảng Settings.
- Chuyển đổi giao diện (Appearance) sang giao diện tối (Dark Mode) hoặc sáng (Light Mode) theo thói quen sử dụng của bạn.
- Vào tab Privacy/Data, tìm và vô hiệu hóa tùy chọn cho phép hệ thống sử dụng dữ liệu của bạn để huấn luyện mô hình (Opt-out data training) để nâng cao bảo mật.
- Chụp ảnh màn hình Settings và lưu trữ lại làm minh chứng bài thực hành.

6. Checklist hoàn thành
[ ] Biết cách mở bảng cài đặt Settings của tài khoản Claude.
[ ] Tự tay tùy biến giao diện sáng/tối bảo vệ mắt.
[ ] Tắt thành công tính năng chia sẻ dữ liệu huấn luyện (Data training sharing) bảo mật thông tin.
[ ] Chụp màn hình tab Settings làm minh chứng.

7. Cầu nối sang Bài 07
Lời dẫn chuyển tiếp: Bạn đã thiết lập xong một môi trường làm việc cá nhân hóa và an toàn tuyệt đối. Nhưng Claude có rất nhiều phiên bản mô hình khác nhau. Làm sao để chọn đúng dòng model cho từng công việc cụ thể? Hãy nhấn vào bài tiếp theo để khám phá cách chọn mô hình Claude phù hợp nhé. Click vào video tiếp theo!\`,`,

  "10": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 07: Bài 07: Cách chọn Claude phù hợp cho từng công việc

1. Tiêu đề video
Bài 07: Bài 07: Cách chọn Claude phù hợp cho từng công việc

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 07: Cách chọn Claude phù hợp cho từng công việc'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 07. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 07: Cách chọn Claude phù hợp cho từng công việc' để giúp bạn chọn đúng model claude theo nội dung, độ khó, tốc độ và mục tiêu công việc. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 07: Cách chọn Claude phù hợp cho từng công việc' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 07: Bài 07: Cách chọn Claude phù hợp cho từng công việc - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Hiểu quy trình Claude xử lý yêu cầu từ prompt đến kết quả., Nhận diện vai trò của ngữ cảnh, chất lượng prompt và mạch hội thoại., Biết cách hỏi lại và yêu cầu Claude tự kiểm tra câu trả lời.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Hiểu quy trình Claude xử lý yêu cầu từ prompt đến kết quả. · Nhận diện vai trò của ngữ cảnh, chất lượng prompt và mạch hội thoại..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Dùng Claude để soạn nháp nhưng tránh đưa thông tin cá nhân hoặc hồ sơ mật.. Với nhân sự văn phòng, nó giúp Nhân viên mở nhiều cuộc hội thoại rời rạc và khó tìm lại kết quả.. Và đối với lãnh đạo SME, đây là chìa khóa để Doanh nghiệp cần quy định nơi lưu prompt, file, kết quả, quyền truy cập và dữ liệu không được đưa vào AI..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Thiết lập môi trường xử lý tài liệu an toàn | Văn phòng: Tối ưu thao tác hằng ngày | SME: Thiết lập workspace AI an toàn cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là thao tác bừa bãi, không quan tâm bảo mật hoặc lưu trữ lịch sử làm việc.. Thay vào đó, tư duy đúng đắn là thiết lập tài khoản an toàn (2fa), ẩn danh dữ liệu và tổ chức project khoa học.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Thao tác bừa bãi, không quan t... | Đúng: Thiết lập tài khoản an toàn (2...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 08 ngay bây giờ để khám phá 'Bài 08: Hiểu cách Claude hoạt động' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 07. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 07 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 08: Hiểu cách Claude hoạt động'. Dark tech background.
Caption overlay: Hoàn thành Bài 07 -> Xem tiếp Bài 08: Bài 08: Hiểu cách Claude hoạt động.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 07.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 08 ngay bây giờ để khám phá 'Bài 08: Hiểu cách Claude hoạt động' nhé. Click vào video tiếp theo!`,

  "11": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 08: Bài 08: Hiểu cách Claude hoạt động

1. Tiêu đề video
Bài 08: Bài 08: Hiểu cách Claude hoạt động

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 08: Hiểu cách Claude hoạt động'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 08. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 08: Hiểu cách Claude hoạt động' để giúp bạn hiểu cách claude xử lý yêu cầu, dùng ngữ cảnh, suy luận và tạo kết quả. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 08: Hiểu cách Claude hoạt động' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 08: Bài 08: Hiểu cách Claude hoạt động - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Nắm công thức prompt chuẩn 5W1H., Tránh lỗi prompt thường gặp như quá mơ hồ, thiếu thông tin, không chỉ định đầu ra., Tạo prompt mẫu rõ vai trò, bối cảnh, dữ liệu, ràng buộc và định dạng.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Nắm công thức prompt chuẩn 5W1H. · Tránh lỗi prompt thường gặp như quá mơ hồ, thiếu thông tin, không chỉ định đầu ra..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Cán bộ mới cần hiểu nhanh một khái niệm trong nghị định, thông tư hoặc quy trình nội bộ.. Với nhân sự văn phòng, nó giúp Nhóm vận hành dùng nhiều thuật ngữ khác nhau khi trao đổi với kinh doanh và kỹ thuật.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần giải thích khái niệm AI/Claude theo ngôn ngữ kinh doanh để đội nhóm hiểu và dùng đúng..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Giải thích văn bản chính sách cho người mới | Văn phòng: Làm rõ thuật ngữ trong tài liệu dự án | SME: Xây dựng tư duy AI-first cho đội ngũ quản lý.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chỉ đọc lý thuyết suông và nghĩ rằng mình đã hiểu mà không tự đặt ví dụ.. Thay vào đó, tư duy đúng đắn là giải thích khái niệm theo 3 mức độ (dễ hiểu, nghiệp vụ, chuyên sâu) kèm ví dụ thật.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chỉ đọc lý thuyết suông và ngh... | Đúng: Giải thích khái niệm theo 3 mứ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 09 ngay bây giờ để khám phá 'Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 08. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 08 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức'. Dark tech background.
Caption overlay: Hoàn thành Bài 08 -> Xem tiếp Bài 09: Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 08.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 09 ngay bây giờ để khám phá 'Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức' nhé. Click vào video tiếp theo!`,

  "12": `VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 09: Bài 09: Viết prompt hiệu quả - Nguyên tắc và công thức

1. Tiêu đề video
Bài 09: Viết prompt hiệu quả - 20 Nguyên tắc Kỹ thuật Prompt

2. Mô tả video
Tìm hiểu 20 Nguyên tắc Kỹ thuật Prompt với Claude chia làm 4 Giai đoạn từ chuẩn bị chất lượng đầu vào, cấu trúc kiểm soát đầu ra, vòng lặp tinh chỉnh, đến tư duy hệ thống để đạt hiệu suất vượt trội và an toàn bảo mật.

3. Tổng thời lượng đề xuất
3 phút 15 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 25s
Voice-over: Chào mừng bạn đến với Bài 09. Trong hành trình làm chủ AI, việc viết prompt hiệu quả không chỉ đơn thuần là gõ câu lệnh, mà là sự thấu hiểu các nguyên tắc kỹ thuật. Hôm nay, chúng ta sẽ cùng khám phá bộ "20 Nguyên tắc Kỹ thuật Prompt với Claude" – chìa khóa vàng tối ưu hóa AI, nâng tầm hiệu quả và giúp bạn dẫn đầu tương lai một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh "Bài 09" sáng bừng rực rỡ với màu xanh cyan neon trên nền tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing 'Bài 09' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 09: 20 Nguyên tắc Kỹ thuật Prompt với Claude - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết - Giai đoạn 1 & Giai đoạn 2
Thời lượng: 45s
Voice-over: Trọng tâm của bài học xoay quanh hai giai đoạn đầu. Giai đoạn 1: chuẩn bị chất lượng đầu vào thông qua việc diễn đạt rõ ràng, trực tiếp, cung cấp đầy đủ ngữ cảnh, dựa trên dữ liệu thực tế, đặt ranh giới và giới hạn rõ ràng, cũng như mô tả chi tiết những gì bạn đã thử nghiệm. Giai đoạn 2 giúp bạn kiểm soát đầu ra bằng cách yêu cầu ví dụ, sử dụng định dạng bảng/code cụ thể, đóng vai nhân vật chuyên gia và chỉ định giọng văn chuyên nghiệp, tránh các yêu cầu mâu thuẫn.
Shot list: Một bảng điều khiển Infographic chia làm hai khu vực (Input & Output Structure) với các biểu tượng tối giản phát sáng.
Prompt tạo hình/video: Clean infographic dashboard layout showing glowing minimalist icons representing prompt inputs and outputs on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Giai đoạn 1: Chất lượng đầu vào | Giai đoạn 2: Cấu trúc kiểm soát đầu ra.
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng nhóm nguyên tắc sáng lên tương ứng với giọng voice-over.

Cảnh 3: Trọng tâm lý thuyết - Giai đoạn 3 & Giai đoạn 4
Thời lượng: 45s
Voice-over: Hai giai đoạn sau nâng tầm kỹ năng của bạn. Giai đoạn 3 là vòng lặp tinh chỉnh sau khi nhận phản hồi: hãy tiếp tục thử thách kết quả, lập lại theo lớp, mời Claude phản biện lại kế hoạch và xác minh nguồn thông tin. Giai đoạn 4 mở rộng tư duy hệ thống: so sánh đánh giá các phương án, sử dụng ràng buộc làm động lực sáng tạo, tách biệt phân tích sâu với tổng hợp kết luận, và kiểm soát giới hạn ngữ cảnh hiệu quả.
Shot list: Một sơ đồ quy trình dạng các vòng tròn đồng tâm liên kết biểu thị vòng lặp tinh chỉnh và hệ thống tư duy phát sáng xanh lục và vàng.
Prompt tạo hình/video: Futuristic digital flowchart with circular nodes showing interconnected loops. Neon green and gold glow, dark background, network connections visualization.
Caption overlay: Giai đoạn 3: Vòng lặp tinh chỉnh | Giai đoạn 4: Tư duy hệ thống.
Ghi chú dựng video: Hiệu ứng chuyển động mượt mà biểu thị dòng chảy tư duy hệ thống.

Cảnh 4: Ứng dụng thực tế theo từng vai trò
Thời lượng: 30s
Voice-over: 20 nguyên tắc này mang lại giá trị thực tiễn vượt trội. Với cán bộ hành chính, nó giúp xây dựng prompt rà soát công văn dự thảo cực kỳ chuẩn xác. Với nhân sự văn phòng, nó tối ưu hóa việc viết email chuyên nghiệp, phản hồi nhanh chóng. Và đối với lãnh đạo SME, đây là nền tảng để chuẩn hóa prompt điều hành, phân tích báo cáo và giao việc hiệu quả cho đội ngũ.
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Rà soát công văn | Văn phòng: Viết email chuyên nghiệp | SME: Chuẩn hóa prompt điều hành.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 5: Tránh sai lầm & Bảo mật thông tin
Thời lượng: 30s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh việc viết prompt quá mơ hồ, thiếu thông tin hoặc yêu cầu quá nhiều tác vụ phức tạp cùng lúc. Đồng thời, hãy luôn tuân thủ nguyên tắc bảo mật tối thượng: ẩn danh dữ liệu nhạy cảm trước khi đưa lên AI, và luôn là người trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ban hành.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục, đối lập với dấu X màu đỏ cảnh báo.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp and a red caution icon. Cyberpunk server room background.
Caption overlay: Tránh prompt mơ hồ · Ẩn danh thông tin · Con người kiểm chứng chéo.
Ghi chú dựng video: Âm thanh SFX nhẹ cảnh báo ở đầu phân cảnh bảo mật để gây chú ý.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Bằng việc làm chủ 20 nguyên tắc vàng này, bạn đã nâng tầm khả năng cộng tác với AI lên mức chuyên gia. Hãy chuyển sang Bài 10 ngay bây giờ để khám phá 'Bài 10: Các loại prompt và cách sử dụng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 09. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 09 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 10: Các loại prompt và cách sử dụng'. Dark tech background.
Caption overlay: Hoàn thành Bài 09 -> Xem tiếp Bài 10: Bài 10: Các loại prompt và cách sử dụng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và bối cảnh công việc của bạn, hãy thực hiện:
- Chọn 1 trong 20 nguyên tắc kỹ thuật prompt từ poster (ví dụ: Mời phản biện - Pushback, Ràng buộc làm động lực sáng tạo, hoặc Đóng vai nhân vật chuyên gia).
- Chuẩn bị một dữ liệu thực tế đã ẩn danh thông tin nhạy cảm. Viết 2 phiên bản prompt: Phiên bản yếu (thiếu nguyên tắc) và Phiên bản mạnh (đầy đủ nguyên tắc) rồi chạy thử trên Claude.
- Chụp ảnh màn hình đối chiếu kết quả đầu ra, rút ra nhận xét về sự khác biệt lớn nhất và lưu lại ghi chép vào Vở ghi chép cá nhân.

6. Checklist hoàn thành
[ ] Hiểu rõ 20 Nguyên tắc Kỹ thuật Prompt với Claude trong cả 4 giai đoạn.
[ ] Biết cách chuyển đổi prompt yếu thành prompt mạnh bằng cách áp dụng bối cảnh, vai trò, dữ liệu và định dạng.
[ ] Cam kết ẩn danh thông tin nhạy cảm và kiểm chứng kết quả của AI trước khi dùng.
[ ] Đã chạy thử bài tập thực hành so sánh prompt yếu/mạnh và lưu lại kết quả trong ghi chú.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 10 ngay bây giờ để khám phá 'Bài 10: Các loại prompt và cách sử dụng' nhé. Click vào video tiếp theo!`,

  "13": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 10: Bài 10: Các loại prompt và cách sử dụng

1. Tiêu đề video
Bài 10: Bài 10: Các loại prompt và cách sử dụng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 10: Các loại prompt và cách sử dụng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 10. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 10: Các loại prompt và cách sử dụng' để giúp bạn phân biệt các loại prompt phổ biến và chọn đúng kiểu prompt cho từng tình huống. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 10: Các loại prompt và cách sử dụng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 10: Bài 10: Các loại prompt và cách sử dụng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Phân biệt các nhóm prompt: hỏi đáp, phân tích, sáng tạo, chỉnh sửa, quy trình., Chọn đúng loại prompt theo mục tiêu công việc., Xây dựng thư viện 5 prompt mẫu theo nhu cầu cá nhân.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Phân biệt các nhóm prompt: hỏi đáp, phân tích, sáng tạo, chỉnh sửa, quy trình. · Chọn đúng loại prompt theo mục tiêu công việc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Kiểm tra công văn trước khi trình ký: mục đích, căn cứ, giọng văn, thiếu sót và tính rõ ràng.. Với nhân sự văn phòng, nó giúp Phản hồi khách hàng hoặc đối tác rõ ràng, lịch sự, đúng trọng tâm.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần prompt mẫu để yêu cầu báo cáo, phân tích, kế hoạch, phản biện phương án và giao việc cho đội ngũ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prompt rà soát công văn dự thảo | Văn phòng: Prompt viết email chuyên nghiệp | SME: Chuẩn hóa prompt điều hành.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là viết prompt quá ngắn, mơ hồ, không có bối cảnh hoặc tiêu chí đầu ra.. Thay vào đó, tư duy đúng đắn là áp dụng công thức 5w1h đầy đủ vai trò, bối cảnh, dữ liệu và định dạng đầu ra.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Viết prompt quá ngắn, mơ hồ, k... | Đúng: Áp dụng công thức 5W1H đầy đủ ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 11 ngay bây giờ để khám phá 'Bài 11: Hỏi đáp và tìm kiếm thông tin' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 10. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 10 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 11: Hỏi đáp và tìm kiếm thông tin'. Dark tech background.
Caption overlay: Hoàn thành Bài 10 -> Xem tiếp Bài 11: Bài 11: Hỏi đáp và tìm kiếm thông tin.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 10.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 11 ngay bây giờ để khám phá 'Bài 11: Hỏi đáp và tìm kiếm thông tin' nhé. Click vào video tiếp theo!`,

  "14": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 11: Bài 11: Hỏi đáp và tìm kiếm thông tin

1. Tiêu đề video
Bài 11: Bài 11: Hỏi đáp và tìm kiếm thông tin

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 11: Hỏi đáp và tìm kiếm thông tin'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 11. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 11: Hỏi đáp và tìm kiếm thông tin' để giúp bạn đặt câu hỏi đúng để claude tìm, tổng hợp và trả lời thông tin chính xác, hữu ích. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 11: Hỏi đáp và tìm kiếm thông tin' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 11: Bài 11: Hỏi đáp và tìm kiếm thông tin - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dùng Claude để hỏi đáp và tìm kiếm thông tin theo hướng có kiểm chứng., Biết đặt câu hỏi tiếp nối để đào sâu vấn đề., Tạo mẫu hỏi đáp cho văn bản hành chính hoặc tài liệu nội bộ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dùng Claude để hỏi đáp và tìm kiếm thông tin theo hướng có kiểm chứng. · Biết đặt câu hỏi tiếp nối để đào sâu vấn đề..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Kiểm tra công văn trước khi trình ký: mục đích, căn cứ, giọng văn, thiếu sót và tính rõ ràng.. Với nhân sự văn phòng, nó giúp Phản hồi khách hàng hoặc đối tác rõ ràng, lịch sự, đúng trọng tâm.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần prompt mẫu để yêu cầu báo cáo, phân tích, kế hoạch, phản biện phương án và giao việc cho đội ngũ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prompt rà soát công văn dự thảo | Văn phòng: Prompt viết email chuyên nghiệp | SME: Chuẩn hóa prompt điều hành.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là viết prompt quá ngắn, mơ hồ, không có bối cảnh hoặc tiêu chí đầu ra.. Thay vào đó, tư duy đúng đắn là áp dụng công thức 5w1h đầy đủ vai trò, bối cảnh, dữ liệu và định dạng đầu ra.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Viết prompt quá ngắn, mơ hồ, k... | Đúng: Áp dụng công thức 5W1H đầy đủ ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 12 ngay bây giờ để khám phá 'Bài 12: Tóm tắt văn bản nhanh chóng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 11. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 11 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 12: Tóm tắt văn bản nhanh chóng'. Dark tech background.
Caption overlay: Hoàn thành Bài 11 -> Xem tiếp Bài 12: Bài 12: Tóm tắt văn bản nhanh chóng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 11.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 12 ngay bây giờ để khám phá 'Bài 12: Tóm tắt văn bản nhanh chóng' nhé. Click vào video tiếp theo!`,

  "15": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 12: Bài 12: Tóm tắt văn bản nhanh chóng

1. Tiêu đề video
Bài 12: Bài 12: Tóm tắt văn bản nhanh chóng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 12: Tóm tắt văn bản nhanh chóng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 12. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 12: Tóm tắt văn bản nhanh chóng' để giúp bạn biến văn bản dài và tài liệu phức tạp thành các ý chính ngắn gọn, dễ hiểu. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 12: Tóm tắt văn bản nhanh chóng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 12: Bài 12: Tóm tắt văn bản nhanh chóng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tóm tắt văn bản theo đúng đối tượng đọc và mục tiêu sử dụng., Tách ý chính, số liệu, việc cần làm và kiến nghị., Tạo mẫu tóm tắt 1 trang cho họp, email hoặc báo cáo.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tóm tắt văn bản theo đúng đối tượng đọc và mục tiêu sử dụng. · Tách ý chính, số liệu, việc cần làm và kiến nghị..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 13 ngay bây giờ để khám phá 'Bài 13: Giải thích khái niệm' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 12. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 12 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 13: Giải thích khái niệm'. Dark tech background.
Caption overlay: Hoàn thành Bài 12 -> Xem tiếp Bài 13: Bài 13: Giải thích khái niệm.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 12.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 13 ngay bây giờ để khám phá 'Bài 13: Giải thích khái niệm' nhé. Click vào video tiếp theo!`,

  "16": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 13: Bài 13: Giải thích khái niệm

1. Tiêu đề video
Bài 13: Bài 13: Giải thích khái niệm

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 13: Giải thích khái niệm'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 13. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 13: Giải thích khái niệm' để giúp bạn dùng claude như gia sư ai để giải thích kiến thức theo nhiều mức độ và ví dụ. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 13: Giải thích khái niệm' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 13: Bài 13: Giải thích khái niệm - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Yêu cầu Claude giải thích khái niệm theo nhiều mức độ., Biến thuật ngữ khó thành ví dụ dễ hiểu., Tạo bản giải thích dùng được cho người mới hoặc đồng nghiệp.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Yêu cầu Claude giải thích khái niệm theo nhiều mức độ. · Biến thuật ngữ khó thành ví dụ dễ hiểu..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 14 ngay bây giờ để khám phá 'Bài 14: Làm việc với văn bản' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 13. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 13 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 14: Làm việc với văn bản'. Dark tech background.
Caption overlay: Hoàn thành Bài 13 -> Xem tiếp Bài 14: Bài 14: Làm việc với văn bản.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 13.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 14 ngay bây giờ để khám phá 'Bài 14: Làm việc với văn bản' nhé. Click vào video tiếp theo!`,

  "17": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 14: Bài 14: Làm việc với văn bản

1. Tiêu đề video
Bài 14: Bài 14: Làm việc với văn bản

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 14: Làm việc với văn bản'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 14. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 14: Làm việc với văn bản' để giúp bạn đọc hiểu, phân tích, tóm tắt và xử lý văn bản dài như sách, báo cáo, hợp đồng. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 14: Làm việc với văn bản' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 14: Bài 14: Làm việc với văn bản - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Biên tập và tái cấu trúc văn bản bằng Claude., Điều chỉnh giọng văn theo đối tượng đọc., Tạo quy trình sửa văn bản gồm bản nháp, góp ý và bản hoàn thiện.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Biên tập và tái cấu trúc văn bản bằng Claude. · Điều chỉnh giọng văn theo đối tượng đọc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 15 ngay bây giờ để khám phá 'Bài 15: Phân tích dữ liệu và báo cáo' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 14. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 14 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 15: Phân tích dữ liệu và báo cáo'. Dark tech background.
Caption overlay: Hoàn thành Bài 14 -> Xem tiếp Bài 15: Bài 15: Phân tích dữ liệu và báo cáo.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 14.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 15 ngay bây giờ để khám phá 'Bài 15: Phân tích dữ liệu và báo cáo' nhé. Click vào video tiếp theo!`,

  "18": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 15: Bài 15: Phân tích dữ liệu và báo cáo

1. Tiêu đề video
Bài 15: Bài 15: Phân tích dữ liệu và báo cáo

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 15: Phân tích dữ liệu và báo cáo'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 15. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 15: Phân tích dữ liệu và báo cáo' để giúp bạn biến dữ liệu thành thông tin giá trị, trực quan hóa và tạo báo cáo hỗ trợ quyết định. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 15: Phân tích dữ liệu và báo cáo' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 15: Bài 15: Phân tích dữ liệu và báo cáo - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Đặt câu hỏi phân tích dữ liệu rõ mục tiêu., Yêu cầu Claude tìm mẫu, bất thường và insight., Tạo bảng phân tích có kết luận, căn cứ và khuyến nghị.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Đặt câu hỏi phân tích dữ liệu rõ mục tiêu. · Yêu cầu Claude tìm mẫu, bất thường và insight..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Nhiều phản ánh cần phân nhóm chủ đề, mức độ ưu tiên và đề xuất hướng xử lý.. Với nhân sự văn phòng, nó giúp Dữ liệu ticket, doanh số hoặc tiến độ cần biến thành insight dễ hành động.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần dùng Claude để đọc báo cáo bán hàng, phản hồi khách hàng, chi phí hoặc tiến độ và rút ra quyết định..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Phân tích phản ánh/kiến nghị của người dân | Văn phòng: Phân tích dữ liệu vận hành | SME: Phân tích dữ liệu để ra quyết định nhanh.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là đưa dữ liệu nhạy cảm chưa ẩn danh vào ai và tin hoàn toàn vào kết luận.. Thay vào đó, tư duy đúng đắn là ẩn danh dữ liệu, đặt câu hỏi phân tích cụ thể và kiểm chứng chéo số liệu.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Đưa dữ liệu nhạy cảm chưa ẩn d... | Đúng: Ẩn danh dữ liệu, đặt câu hỏi p...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 16 ngay bây giờ để khám phá 'Bài 16: Viết content chuẩn chỉnh' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 15. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 15 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 16: Viết content chuẩn chỉnh'. Dark tech background.
Caption overlay: Hoàn thành Bài 15 -> Xem tiếp Bài 16: Bài 16: Viết content chuẩn chỉnh.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 15.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 16 ngay bây giờ để khám phá 'Bài 16: Viết content chuẩn chỉnh' nhé. Click vào video tiếp theo!`,

  "19": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 16: Bài 16: Viết content chuẩn chỉnh

1. Tiêu đề video
Bài 16: Bài 16: Viết content chuẩn chỉnh

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 16: Viết content chuẩn chỉnh'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 16. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 16: Viết content chuẩn chỉnh' để giúp bạn tạo nội dung hấp dẫn, đúng mục tiêu, đúng đối tượng và có thể dùng cho nhiều kênh. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 16: Viết content chuẩn chỉnh' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 16: Bài 16: Viết content chuẩn chỉnh - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Viết content có đối tượng, thông điệp và kênh sử dụng rõ ràng., Tạo nhiều phiên bản nội dung theo giọng văn khác nhau., Xây dựng checklist kiểm tra content trước khi đăng/gửi.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Viết content có đối tượng, thông điệp và kênh sử dụng rõ ràng. · Tạo nhiều phiên bản nội dung theo giọng văn khác nhau..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Biến ghi chú rời rạc thành báo cáo có căn cứ, kết quả, khó khăn và kiến nghị.. Với nhân sự văn phòng, nó giúp Viết hướng dẫn, memo, đề xuất hoặc tài liệu onboarding cho đội nhóm.. Và đối với lãnh đạo SME, đây là chìa khóa để Cần soạn memo, thông báo nội bộ, đề xuất, tài liệu đào tạo hoặc quy định vận hành nhanh nhưng rõ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Soạn dự thảo báo cáo hành chính | Văn phòng: Soạn tài liệu nội bộ | SME: Tăng tốc soạn tài liệu lãnh đạo.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết ngay một bài dài từ đầu mà không xây dựng cấu trúc.. Thay vào đó, tư duy đúng đắn là dựng dàn ý chi tiết trước, viết từng phần và biên tập lại giọng văn phù hợp.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết ngay một bài d... | Đúng: Dựng dàn ý chi tiết trước, viế...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 17 ngay bây giờ để khám phá 'Bài 17: Brainstorm ý tưởng và giải pháp' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 16. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 16 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 17: Brainstorm ý tưởng và giải pháp'. Dark tech background.
Caption overlay: Hoàn thành Bài 16 -> Xem tiếp Bài 17: Bài 17: Brainstorm ý tưởng và giải pháp.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 16.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 17 ngay bây giờ để khám phá 'Bài 17: Brainstorm ý tưởng và giải pháp' nhé. Click vào video tiếp theo!`,

  "20": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 17: Bài 17: Brainstorm ý tưởng và giải pháp

1. Tiêu đề video
Bài 17: Bài 17: Brainstorm ý tưởng và giải pháp

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 17: Brainstorm ý tưởng và giải pháp'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 17. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 17: Brainstorm ý tưởng và giải pháp' để giúp bạn khai phá ý tưởng đột phá, mở rộng lựa chọn và phát triển phương án khả thi. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 17: Brainstorm ý tưởng và giải pháp' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 17: Bài 17: Brainstorm ý tưởng và giải pháp - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dùng Claude để brainstorm nhiều hướng giải pháp., Nhóm và chấm điểm ý tưởng theo tác động và độ khó., Chọn một ý tưởng để chuyển thành kế hoạch thử nghiệm.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dùng Claude để brainstorm nhiều hướng giải pháp. · Nhóm và chấm điểm ý tưởng theo tác động và độ khó..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Giảm bước, giảm thời gian chờ và tăng tính minh bạch trong quy trình.. Với nhân sự văn phòng, nó giúp Cần ý tưởng cho truyền thông nội bộ, đào tạo hoặc cải tiến văn hóa làm việc.. Và đối với lãnh đạo SME, đây là chìa khóa để Doanh nghiệp cần mở rộng ý tưởng sản phẩm, dịch vụ, chiến dịch hoặc mô hình doanh thu với chi phí thử nghiệm thấp..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Brainstorm cải tiến thủ tục | Văn phòng: Brainstorm chiến dịch nội bộ | SME: Brainstorm chiến lược và sản phẩm mới.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chọn ngay ý tưởng đầu tiên ai đưa ra mà không chọn lọc phản biện.. Thay vào đó, tư duy đúng đắn là brainstorm nhiều hướng, nhóm theo ma trận tác động/độ khó và chọn 1 hướng thử.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chọn ngay ý tưởng đầu tiên AI ... | Đúng: Brainstorm nhiều hướng, nhóm t...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 18 ngay bây giờ để khám phá 'Bài 18: Lập kế hoạch' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 17. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 17 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 18: Lập kế hoạch'. Dark tech background.
Caption overlay: Hoàn thành Bài 17 -> Xem tiếp Bài 18: Bài 18: Lập kế hoạch.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 17.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 18 ngay bây giờ để khám phá 'Bài 18: Lập kế hoạch' nhé. Click vào video tiếp theo!`,

  "21": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 18: Bài 18: Lập kế hoạch

1. Tiêu đề video
Bài 18: Bài 18: Lập kế hoạch

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 18: Lập kế hoạch'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 18. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 18: Lập kế hoạch' để giúp bạn xây dựng kế hoạch chi tiết, phân chia việc, timeline, rủi ro và bước hành động. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 18: Lập kế hoạch' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 18: Bài 18: Lập kế hoạch - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Chuyển mục tiêu thành kế hoạch có timeline, nhiệm vụ và người phụ trách., Xác định rủi ro và điểm cần kiểm tra., Tạo mẫu kế hoạch dùng cho công việc tuần hoặc dự án nhỏ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Chuyển mục tiêu thành kế hoạch có timeline, nhiệm vụ và người phụ trách. · Xác định rủi ro và điểm cần kiểm tra..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Xử lý văn thư. Với nhân sự văn phòng, nó giúp Xử lý văn phòng. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần biến định hướng AI thành kế hoạch triển khai có người chịu trách nhiệm, ngân sách và chỉ số..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Soạn thảo văn bản | Văn phòng: Soạn email | SME: Lộ trình AI-first 30-60-90 ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là lập lộ trình chung chung, thiếu mốc hoàn thành hoặc rủi ro phụ thuộc.. Thay vào đó, tư duy đúng đắn là chia chặng chi tiết, xác định hạn hoàn thành và checklist nghiệm thu từng mốc.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Lập lộ trình chung chung, thiế... | Đúng: Chia chặng chi tiết, xác định ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 19 ngay bây giờ để khám phá 'Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 18. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 18 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay'. Dark tech background.
Caption overlay: Hoàn thành Bài 18 -> Xem tiếp Bài 19: Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 18.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 19 ngay bây giờ để khám phá 'Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay' nhé. Click vào video tiếp theo!`,

  "22": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 19: Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay

1. Tiêu đề video
Bài 19: Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 19. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay' để giúp bạn tóm tắt mọi loại văn bản như bài viết, báo cáo, tài liệu, sách thành thông tin dễ dùng. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 19: Bài 19: Tóm tắt văn bản - Hiểu nhanh, nắm gọn, ứng dụng ngay - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Biến công việc lặp lại thành quy trình chuẩn., Mô tả đầu vào, đầu ra, điều kiện dừng và trách nhiệm từng bước., Tạo SOP mẫu cho một quy trình hành chính hoặc văn phòng.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Biến công việc lặp lại thành quy trình chuẩn. · Mô tả đầu vào, đầu ra, điều kiện dừng và trách nhiệm từng bước..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 20 ngay bây giờ để khám phá 'Bài 20: Thuyết trình tự tin và ấn tượng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 19. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 19 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 20: Thuyết trình tự tin và ấn tượng'. Dark tech background.
Caption overlay: Hoàn thành Bài 19 -> Xem tiếp Bài 20: Bài 20: Thuyết trình tự tin và ấn tượng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 19.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 20 ngay bây giờ để khám phá 'Bài 20: Thuyết trình tự tin và ấn tượng' nhé. Click vào video tiếp theo!`,

  "23": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 20: Bài 20: Thuyết trình tự tin và ấn tượng

1. Tiêu đề video
Bài 20: Bài 20: Thuyết trình tự tin và ấn tượng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 20: Thuyết trình tự tin và ấn tượng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 20. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 20: Thuyết trình tự tin và ấn tượng' để giúp bạn chuẩn bị nội dung, cấu trúc slide, luyện tập và cải thiện khả năng thuyết trình. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 20: Thuyết trình tự tin và ấn tượng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 20: Bài 20: Thuyết trình tự tin và ấn tượng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tạo cấu trúc thuyết trình rõ thông điệp chính., Chia nội dung thành slide, luận điểm và phần nói., Tạo outline thuyết trình cho họp giao ban hoặc trình bày nội bộ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tạo cấu trúc thuyết trình rõ thông điệp chính. · Chia nội dung thành slide, luận điểm và phần nói..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 21 ngay bây giờ để khám phá 'Bài 21: Nghiên cứu và phân tích' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 20. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 20 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 21: Nghiên cứu và phân tích'. Dark tech background.
Caption overlay: Hoàn thành Bài 20 -> Xem tiếp Bài 21: Bài 21: Nghiên cứu và phân tích.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 20.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 21 ngay bây giờ để khám phá 'Bài 21: Nghiên cứu và phân tích' nhé. Click vào video tiếp theo!`,

  "24": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 21: Bài 21: Nghiên cứu và phân tích

1. Tiêu đề video
Bài 21: Bài 21: Nghiên cứu và phân tích

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 21: Nghiên cứu và phân tích'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 21. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 21: Nghiên cứu và phân tích' để giúp bạn nghiên cứu thông tin, phân tích dữ liệu, rút insight và hỗ trợ ra quyết định. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 21: Nghiên cứu và phân tích' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 21: Bài 21: Nghiên cứu và phân tích - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Nghiên cứu và phân tích dữ liệu/tài liệu theo câu hỏi cụ thể., Tổng hợp thông tin từ nhiều nguồn thành kết luận có căn cứ., Tạo bảng insight và khuyến nghị cho người ra quyết định.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Nghiên cứu và phân tích dữ liệu/tài liệu theo câu hỏi cụ thể. · Tổng hợp thông tin từ nhiều nguồn thành kết luận có căn cứ..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Nhiều phản ánh cần phân nhóm chủ đề, mức độ ưu tiên và đề xuất hướng xử lý.. Với nhân sự văn phòng, nó giúp Dữ liệu ticket, doanh số hoặc tiến độ cần biến thành insight dễ hành động.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần dùng Claude để đọc báo cáo bán hàng, phản hồi khách hàng, chi phí hoặc tiến độ và rút ra quyết định..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Phân tích phản ánh/kiến nghị của người dân | Văn phòng: Phân tích dữ liệu vận hành | SME: Phân tích dữ liệu để ra quyết định nhanh.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là đưa dữ liệu nhạy cảm chưa ẩn danh vào ai và tin hoàn toàn vào kết luận.. Thay vào đó, tư duy đúng đắn là ẩn danh dữ liệu, đặt câu hỏi phân tích cụ thể và kiểm chứng chéo số liệu.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Đưa dữ liệu nhạy cảm chưa ẩn d... | Đúng: Ẩn danh dữ liệu, đặt câu hỏi p...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 22 ngay bây giờ để khám phá 'Bài 22: Trình bày và tạo slide ấn tượng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 21. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 21 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 22: Trình bày và tạo slide ấn tượng'. Dark tech background.
Caption overlay: Hoàn thành Bài 21 -> Xem tiếp Bài 22: Bài 22: Trình bày và tạo slide ấn tượng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 21.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 22 ngay bây giờ để khám phá 'Bài 22: Trình bày và tạo slide ấn tượng' nhé. Click vào video tiếp theo!`,

  "25": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 22: Bài 22: Trình bày và tạo slide ấn tượng

1. Tiêu đề video
Bài 22: Bài 22: Trình bày và tạo slide ấn tượng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 22: Trình bày và tạo slide ấn tượng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 22. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 22: Trình bày và tạo slide ấn tượng' để giúp bạn tạo slide chuyên nghiệp, bố cục đẹp, nội dung súc tích và truyền tải thuyết phục. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 22: Trình bày và tạo slide ấn tượng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 22: Bài 22: Trình bày và tạo slide ấn tượng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Trình bày kết quả phân tích thành báo cáo dễ đọc., Sắp xếp luận điểm, bằng chứng và khuyến nghị theo thứ tự logic., Tạo mẫu báo cáo ngắn dùng trong cơ quan hoặc doanh nghiệp.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Trình bày kết quả phân tích thành báo cáo dễ đọc. · Sắp xếp luận điểm, bằng chứng và khuyến nghị theo thứ tự logic..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 23 ngay bây giờ để khám phá 'Bài 23: Dựng ý và viết nội dung thuyết phục' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 22. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 22 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 23: Dựng ý và viết nội dung thuyết phục'. Dark tech background.
Caption overlay: Hoàn thành Bài 22 -> Xem tiếp Bài 23: Bài 23: Dựng ý và viết nội dung thuyết phục.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 22.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 23 ngay bây giờ để khám phá 'Bài 23: Dựng ý và viết nội dung thuyết phục' nhé. Click vào video tiếp theo!`,

  "26": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 23: Bài 23: Dựng ý và viết nội dung thuyết phục

1. Tiêu đề video
Bài 23: Bài 23: Dựng ý và viết nội dung thuyết phục

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 23: Dựng ý và viết nội dung thuyết phục'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 23. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 23: Dựng ý và viết nội dung thuyết phục' để giúp bạn xây dựng dàn ý mạch lạc và viết nội dung hấp dẫn, thuyết phục, đúng mục tiêu. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 23: Dựng ý và viết nội dung thuyết phục' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 23: Bài 23: Dựng ý và viết nội dung thuyết phục - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dựng ý trước khi viết nội dung dài., Phát triển luận điểm thành đoạn văn có cấu trúc., Tạo dàn ý và bản nháp đầu tiên cho một tài liệu thật.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dựng ý trước khi viết nội dung dài. · Phát triển luận điểm thành đoạn văn có cấu trúc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Biến ghi chú rời rạc thành báo cáo có căn cứ, kết quả, khó khăn và kiến nghị.. Với nhân sự văn phòng, nó giúp Viết hướng dẫn, memo, đề xuất hoặc tài liệu onboarding cho đội nhóm.. Và đối với lãnh đạo SME, đây là chìa khóa để Cần soạn memo, thông báo nội bộ, đề xuất, tài liệu đào tạo hoặc quy định vận hành nhanh nhưng rõ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Soạn dự thảo báo cáo hành chính | Văn phòng: Soạn tài liệu nội bộ | SME: Tăng tốc soạn tài liệu lãnh đạo.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết ngay một bài dài từ đầu mà không xây dựng cấu trúc.. Thay vào đó, tư duy đúng đắn là dựng dàn ý chi tiết trước, viết từng phần và biên tập lại giọng văn phù hợp.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết ngay một bài d... | Đúng: Dựng dàn ý chi tiết trước, viế...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 24 ngay bây giờ để khám phá 'Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 23. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 23 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp'. Dark tech background.
Caption overlay: Hoàn thành Bài 23 -> Xem tiếp Bài 24: Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 23.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 24 ngay bây giờ để khám phá 'Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp' nhé. Click vào video tiếp theo!`,

  "27": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 24: Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp

1. Tiêu đề video
Bài 24: Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 24. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp' để giúp bạn nâng cấp bản nháp thành nội dung hoàn chỉnh, rõ ràng, mạch lạc và đúng mục tiêu. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 24: Bài 24: Chỉnh sửa và hoàn thiện bài viết chuyên nghiệp - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Chỉnh sửa văn bản để rõ, gọn và nhất quán hơn., Phát hiện lỗi logic, lỗi diễn đạt và phần còn thiếu., Tạo bản hoàn thiện có ghi chú các điểm đã sửa.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Chỉnh sửa văn bản để rõ, gọn và nhất quán hơn. · Phát hiện lỗi logic, lỗi diễn đạt và phần còn thiếu..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Biến ghi chú rời rạc thành báo cáo có căn cứ, kết quả, khó khăn và kiến nghị.. Với nhân sự văn phòng, nó giúp Viết hướng dẫn, memo, đề xuất hoặc tài liệu onboarding cho đội nhóm.. Và đối với lãnh đạo SME, đây là chìa khóa để Cần soạn memo, thông báo nội bộ, đề xuất, tài liệu đào tạo hoặc quy định vận hành nhanh nhưng rõ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Soạn dự thảo báo cáo hành chính | Văn phòng: Soạn tài liệu nội bộ | SME: Tăng tốc soạn tài liệu lãnh đạo.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết ngay một bài dài từ đầu mà không xây dựng cấu trúc.. Thay vào đó, tư duy đúng đắn là dựng dàn ý chi tiết trước, viết từng phần và biên tập lại giọng văn phù hợp.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết ngay một bài d... | Đúng: Dựng dàn ý chi tiết trước, viế...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 25 ngay bây giờ để khám phá 'Bài 25: Làm việc với file và trích xuất thông tin' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 24. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 24 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 25: Làm việc với file và trích xuất thông tin'. Dark tech background.
Caption overlay: Hoàn thành Bài 24 -> Xem tiếp Bài 25: Bài 25: Làm việc với file và trích xuất thông tin.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 24.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 25 ngay bây giờ để khám phá 'Bài 25: Làm việc với file và trích xuất thông tin' nhé. Click vào video tiếp theo!`,

  "28": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 25: Bài 25: Làm việc với file và trích xuất thông tin

1. Tiêu đề video
Bài 25: Bài 25: Làm việc với file và trích xuất thông tin

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 25: Làm việc với file và trích xuất thông tin'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 25. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 25: Làm việc với file và trích xuất thông tin' để giúp bạn tải lên, đọc hiểu, phân tích, trích xuất, tóm tắt và xuất kết quả từ nhiều loại file. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 25: Làm việc với file và trích xuất thông tin' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 25: Bài 25: Làm việc với file và trích xuất thông tin - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Làm việc với file và trích xuất thông tin quan trọng., Yêu cầu Claude chuyển nội dung file thành bảng, tóm tắt hoặc checklist., Tạo quy trình xử lý file an toàn trước khi dùng AI.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Làm việc với file và trích xuất thông tin quan trọng. · Yêu cầu Claude chuyển nội dung file thành bảng, tóm tắt hoặc checklist..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Dùng Claude để soạn nháp nhưng tránh đưa thông tin cá nhân hoặc hồ sơ mật.. Với nhân sự văn phòng, nó giúp Nhân viên mở nhiều cuộc hội thoại rời rạc và khó tìm lại kết quả.. Và đối với lãnh đạo SME, đây là chìa khóa để Doanh nghiệp cần quy định nơi lưu prompt, file, kết quả, quyền truy cập và dữ liệu không được đưa vào AI..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Thiết lập môi trường xử lý tài liệu an toàn | Văn phòng: Tối ưu thao tác hằng ngày | SME: Thiết lập workspace AI an toàn cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là thao tác bừa bãi, không quan tâm bảo mật hoặc lưu trữ lịch sử làm việc.. Thay vào đó, tư duy đúng đắn là thiết lập tài khoản an toàn (2fa), ẩn danh dữ liệu và tổ chức project khoa học.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Thao tác bừa bãi, không quan t... | Đúng: Thiết lập tài khoản an toàn (2...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 26 ngay bây giờ để khám phá 'Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 25. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 25 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin'. Dark tech background.
Caption overlay: Hoàn thành Bài 25 -> Xem tiếp Bài 26: Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 25.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 26 ngay bây giờ để khám phá 'Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin' nhé. Click vào video tiếp theo!`,

  "29": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 26: Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin

1. Tiêu đề video
Bài 26: Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 26. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin' để giúp bạn thu thập, đánh giá, phân tích và tổng hợp thông tin từ nhiều nguồn. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 26: Bài 26: Nghiên cứu, phân tích, thu thập và tổng hợp thông tin - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tổng hợp thông tin từ nhiều nguồn mà không mất ý chính., So sánh điểm giống, khác và mâu thuẫn giữa các nguồn., Tạo bản tổng hợp có kết luận và phần cần kiểm chứng thêm.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tổng hợp thông tin từ nhiều nguồn mà không mất ý chính. · So sánh điểm giống, khác và mâu thuẫn giữa các nguồn..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Nhiều phản ánh cần phân nhóm chủ đề, mức độ ưu tiên và đề xuất hướng xử lý.. Với nhân sự văn phòng, nó giúp Dữ liệu ticket, doanh số hoặc tiến độ cần biến thành insight dễ hành động.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần dùng Claude để đọc báo cáo bán hàng, phản hồi khách hàng, chi phí hoặc tiến độ và rút ra quyết định..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Phân tích phản ánh/kiến nghị của người dân | Văn phòng: Phân tích dữ liệu vận hành | SME: Phân tích dữ liệu để ra quyết định nhanh.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là đưa dữ liệu nhạy cảm chưa ẩn danh vào ai và tin hoàn toàn vào kết luận.. Thay vào đó, tư duy đúng đắn là ẩn danh dữ liệu, đặt câu hỏi phân tích cụ thể và kiểm chứng chéo số liệu.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Đưa dữ liệu nhạy cảm chưa ẩn d... | Đúng: Ẩn danh dữ liệu, đặt câu hỏi p...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 27 ngay bây giờ để khám phá 'Bài 27: Tạo và trình bày presentation chuyên nghiệp' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 26. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 26 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 27: Tạo và trình bày presentation chuyên nghiệp'. Dark tech background.
Caption overlay: Hoàn thành Bài 26 -> Xem tiếp Bài 27: Bài 27: Tạo và trình bày presentation chuyên nghiệp.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 26.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 27 ngay bây giờ để khám phá 'Bài 27: Tạo và trình bày presentation chuyên nghiệp' nhé. Click vào video tiếp theo!`,

  "30": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 27: Bài 27: Tạo và trình bày presentation chuyên nghiệp

1. Tiêu đề video
Bài 27: Bài 27: Tạo và trình bày presentation chuyên nghiệp

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 27: Tạo và trình bày presentation chuyên nghiệp'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 27. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 27: Tạo và trình bày presentation chuyên nghiệp' để giúp bạn biến ý tưởng thành bài trình bày hoàn chỉnh có cấu trúc, nội dung, thiết kế và thông điệp rõ. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 27: Tạo và trình bày presentation chuyên nghiệp' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 27: Bài 27: Tạo và trình bày presentation chuyên nghiệp - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tạo tài liệu có bố cục, tiêu đề và mục tiêu đọc rõ ràng., Trình bày nội dung thành format dễ dùng lại., Tạo một mẫu tài liệu nội bộ hoặc hướng dẫn công việc.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tạo tài liệu có bố cục, tiêu đề và mục tiêu đọc rõ ràng. · Trình bày nội dung thành format dễ dùng lại..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 28 ngay bây giờ để khám phá 'Bài 28: Quản lý dự án và công việc' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 27. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 27 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 28: Quản lý dự án và công việc'. Dark tech background.
Caption overlay: Hoàn thành Bài 27 -> Xem tiếp Bài 28: Bài 28: Quản lý dự án và công việc.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 27.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 28 ngay bây giờ để khám phá 'Bài 28: Quản lý dự án và công việc' nhé. Click vào video tiếp theo!`,

  "31": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 28: Bài 28: Quản lý dự án và công việc

1. Tiêu đề video
Bài 28: Bài 28: Quản lý dự án và công việc

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 28: Quản lý dự án và công việc'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 28. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 28: Quản lý dự án và công việc' để giúp bạn lập kế hoạch, phân công, theo dõi tiến độ, phân tích rủi ro và điều chỉnh dự án. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 28: Quản lý dự án và công việc' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 28: Bài 28: Quản lý dự án và công việc - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Quản lý dự án/công việc bằng danh sách nhiệm vụ và tiến độ., Theo dõi người phụ trách, hạn xử lý và rủi ro., Tạo bảng quản lý việc tuần hoặc kế hoạch triển khai nhỏ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Quản lý dự án/công việc bằng danh sách nhiệm vụ và tiến độ. · Theo dõi người phụ trách, hạn xử lý và rủi ro..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Văn bản đến cần được phân loại, tóm tắt, gợi ý đơn vị xử lý và theo dõi hạn trả lời.. Với nhân sự văn phòng, nó giúp Tổng hợp tiến độ từ nhiều nguồn và gửi báo cáo đều đặn.. Và đối với lãnh đạo SME, đây là chìa khóa để SME cần biến quy trình lặp lại thành playbook có người phụ trách, chỉ số, điểm dùng AI và điểm cần người duyệt..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: SOP xử lý văn bản đến | Văn phòng: Workflow báo cáo tuần | SME: Thiết kế operating playbook AI-first.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chạy quy trình thủ công lặp lại hoặc tự động hóa thiếu bước kiểm soát của con người.. Thay vào đó, tư duy đúng đắn là thiết kế sop rõ ràng, tách biệt bước ai tạo nháp và bước con người duyệt.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chạy quy trình thủ công lặp lạ... | Đúng: Thiết kế SOP rõ ràng, tách biệ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 29 ngay bây giờ để khám phá 'Bài 29: Marketing và truyền thông' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 28. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 28 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 29: Marketing và truyền thông'. Dark tech background.
Caption overlay: Hoàn thành Bài 28 -> Xem tiếp Bài 29: Bài 29: Marketing và truyền thông.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 28.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 29 ngay bây giờ để khám phá 'Bài 29: Marketing và truyền thông' nhé. Click vào video tiếp theo!`,

  "32": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 29: Bài 29: Marketing và truyền thông

1. Tiêu đề video
Bài 29: Bài 29: Marketing và truyền thông

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 29: Marketing và truyền thông'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 29. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 29: Marketing và truyền thông' để giúp bạn nghiên cứu thị trường, xây chiến lược, tạo nội dung, lên kế hoạch truyền thông và đo lường. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 29: Marketing và truyền thông' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 29: Bài 29: Marketing và truyền thông - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Lập kế hoạch marketing/truyền thông bằng Claude., Xác định thông điệp, đối tượng, kênh và lịch đăng., Tạo kế hoạch truyền thông ngắn cho một chiến dịch cụ thể.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Lập kế hoạch marketing/truyền thông bằng Claude. · Xác định thông điệp, đối tượng, kênh và lịch đăng..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một chính sách mới cần được truyền đạt dễ hiểu cho người dân/doanh nghiệp.. Với nhân sự văn phòng, nó giúp Chuẩn hóa phản hồi, phân loại yêu cầu và theo dõi mức độ hài lòng.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo SME muốn dùng Claude cho marketing, sales, CSKH, CRM và tối ưu vận hành tăng trưởng..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Kế hoạch truyền thông chính sách | Văn phòng: Kế hoạch chăm sóc khách hàng | SME: Tạo growth playbook bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là sao chép nguyên văn kịch bản hoặc kế hoạch của ai cho chiến dịch thực tế.. Thay vào đó, tư duy đúng đắn là chấm điểm kế hoạch theo rủi ro, chi phí và chạy thử nghiệm pilot trước.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Sao chép nguyên văn kịch bản h... | Đúng: Chấm điểm kế hoạch theo rủi ro...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 30 ngay bây giờ để khám phá 'Bài 30: Chăm sóc khách hàng và CRM' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 29. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 29 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 30: Chăm sóc khách hàng và CRM'. Dark tech background.
Caption overlay: Hoàn thành Bài 29 -> Xem tiếp Bài 30: Bài 30: Chăm sóc khách hàng và CRM.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 29.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 30 ngay bây giờ để khám phá 'Bài 30: Chăm sóc khách hàng và CRM' nhé. Click vào video tiếp theo!`,

  "33": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 30: Bài 30: Chăm sóc khách hàng và CRM

1. Tiêu đề video
Bài 30: Bài 30: Chăm sóc khách hàng và CRM

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 30: Chăm sóc khách hàng và CRM'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 30. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 30: Chăm sóc khách hàng và CRM' để giúp bạn xây dựng quy trình chăm sóc khách hàng, quản lý thông tin và tạo trải nghiệm khách hàng tốt hơn. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 30: Chăm sóc khách hàng và CRM' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 30: Bài 30: Chăm sóc khách hàng và CRM - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Chuẩn hóa phản hồi chăm sóc khách hàng hoặc CRM., Phân loại vấn đề, mức độ ưu tiên và kịch bản xử lý., Tạo bộ mẫu phản hồi cho tình huống khách hàng thường gặp.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Chuẩn hóa phản hồi chăm sóc khách hàng hoặc CRM. · Phân loại vấn đề, mức độ ưu tiên và kịch bản xử lý..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một chính sách mới cần được truyền đạt dễ hiểu cho người dân/doanh nghiệp.. Với nhân sự văn phòng, nó giúp Chuẩn hóa phản hồi, phân loại yêu cầu và theo dõi mức độ hài lòng.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo SME muốn dùng Claude cho marketing, sales, CSKH, CRM và tối ưu vận hành tăng trưởng..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Kế hoạch truyền thông chính sách | Văn phòng: Kế hoạch chăm sóc khách hàng | SME: Tạo growth playbook bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là sao chép nguyên văn kịch bản hoặc kế hoạch của ai cho chiến dịch thực tế.. Thay vào đó, tư duy đúng đắn là chấm điểm kế hoạch theo rủi ro, chi phí và chạy thử nghiệm pilot trước.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Sao chép nguyên văn kịch bản h... | Đúng: Chấm điểm kế hoạch theo rủi ro...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài CWDH ngay bây giờ để khám phá '[Co-work Định hướng] Claude Co-work tổng quan' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 30. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 30 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: [Co-work Định hướng] Claude Co-work tổng quan'. Dark tech background.
Caption overlay: Hoàn thành Bài 30 -> Xem tiếp Bài CWDH: [Co-work Định hướng] Claude Co-work tổng quan.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 30.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài CWDH ngay bây giờ để khám phá '[Co-work Định hướng] Claude Co-work tổng quan' nhé. Click vào video tiếp theo!`,

  "34": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài CWDH: [Co-work Định hướng] Claude Co-work tổng quan

1. Tiêu đề video
Bài CWDH: [Co-work Định hướng] Claude Co-work tổng quan

2. Mô tả video
Tìm hiểu trọng tâm bài học '[Co-work Định hướng] Claude Co-work tổng quan'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài CWDH. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học '[Co-work Định hướng] Claude Co-work tổng quan' để giúp bạn hiểu cách làm việc cùng claude như một cộng sự ai để tăng năng suất và tạo giá trị. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson '[Co-work Định hướng] Claude Co-work tổng quan' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài CWDH: [Co-work Định hướng] Claude Co-work tổng quan - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Hiểu Claude Co-work như mô hình làm việc với đồng nghiệp AI., Xác định việc nào nên giao Claude trong ngày làm việc., Thiết kế nguyên tắc phối hợp để tăng năng suất mà vẫn kiểm soát chất lượng.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Hiểu Claude Co-work như mô hình làm việc với đồng nghiệp AI. · Xác định việc nào nên giao Claude trong ngày làm việc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Thống nhất cách dùng Claude để đọc văn bản, tổng hợp báo cáo và chuẩn bị nội dung họp.. Với nhân sự văn phòng, nó giúp Gom email, tài liệu, kế hoạch tuần và biên bản thành một quy trình dùng Claude.. Và đối với lãnh đạo SME, đây là chìa khóa để Chủ doanh nghiệp cần nhìn toàn cảnh các năng lực Claude có thể tác động đến bán hàng, vận hành, chăm sóc khách hàng và quản trị..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Chuẩn hóa năng lực dùng AI trong phòng ban | Văn phòng: Thiết lập trợ lý làm việc cá nhân | SME: Thiết kế bản đồ chuyển đổi AI-first cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là học tràn lan, cố nhớ mọi chi tiết ngay lập tức mà không có lộ trình.. Thay vào đó, tư duy đúng đắn là nắm vững sơ đồ tổng quan, chọn nhánh năng lực phù hợp và học theo ngày.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Học tràn lan, cố nhớ mọi chi t... | Đúng: Nắm vững sơ đồ tổng quan, chọn...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 61 ngay bây giờ để khám phá 'Bài 31: Claude Co-work là gì' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài CWDH. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson CWDH Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 31: Claude Co-work là gì'. Dark tech background.
Caption overlay: Hoàn thành Bài CWDH -> Xem tiếp Bài 61: Bài 31: Claude Co-work là gì.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài CWDH.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 61 ngay bây giờ để khám phá 'Bài 31: Claude Co-work là gì' nhé. Click vào video tiếp theo!`,

  "35": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 61: Bài 31: Claude Co-work là gì

1. Tiêu đề video
Bài 61: Bài 31: Claude Co-work là gì

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 31: Claude Co-work là gì'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 61. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 31: Claude Co-work là gì' để giúp bạn nắm mô hình claude co-work và lý do nên làm việc cùng claude như một cộng sự thực thụ. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 31: Claude Co-work là gì' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 61: Bài 31: Claude Co-work là gì - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Thiết lập cách giao việc cho Claude theo vai trò và tiêu chuẩn đầu ra., Tạo khuôn mẫu brief công việc cho Claude., Định nghĩa tiêu chí nghiệm thu khi Claude trả kết quả.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Thiết lập cách giao việc cho Claude theo vai trò và tiêu chuẩn đầu ra. · Tạo khuôn mẫu brief công việc cho Claude..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Thống nhất cách dùng Claude để đọc văn bản, tổng hợp báo cáo và chuẩn bị nội dung họp.. Với nhân sự văn phòng, nó giúp Gom email, tài liệu, kế hoạch tuần và biên bản thành một quy trình dùng Claude.. Và đối với lãnh đạo SME, đây là chìa khóa để Chủ doanh nghiệp cần nhìn toàn cảnh các năng lực Claude có thể tác động đến bán hàng, vận hành, chăm sóc khách hàng và quản trị..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Chuẩn hóa năng lực dùng AI trong phòng ban | Văn phòng: Thiết lập trợ lý làm việc cá nhân | SME: Thiết kế bản đồ chuyển đổi AI-first cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là học tràn lan, cố nhớ mọi chi tiết ngay lập tức mà không có lộ trình.. Thay vào đó, tư duy đúng đắn là nắm vững sơ đồ tổng quan, chọn nhánh năng lực phù hợp và học theo ngày.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Học tràn lan, cố nhớ mọi chi t... | Đúng: Nắm vững sơ đồ tổng quan, chọn...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 62 ngay bây giờ để khám phá 'Bài 32: Trợ lý AI đa năng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 61. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 61 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 32: Trợ lý AI đa năng'. Dark tech background.
Caption overlay: Hoàn thành Bài 61 -> Xem tiếp Bài 62: Bài 32: Trợ lý AI đa năng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 61.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 62 ngay bây giờ để khám phá 'Bài 32: Trợ lý AI đa năng' nhé. Click vào video tiếp theo!`,

  "36": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 62: Bài 32: Trợ lý AI đa năng

1. Tiêu đề video
Bài 62: Bài 32: Trợ lý AI đa năng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 32: Trợ lý AI đa năng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 62. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 32: Trợ lý AI đa năng' để giúp bạn dùng claude như trợ lý ai đa năng hỗ trợ nhiều khía cạnh công việc. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 32: Trợ lý AI đa năng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 62: Bài 32: Trợ lý AI đa năng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dùng Claude như trợ lý đa năng cho nhiều mảng công việc., Biết tách việc lớn thành yêu cầu nhỏ, rõ ràng., Tạo danh sách 10 tác vụ có thể ủy quyền cho Claude.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dùng Claude như trợ lý đa năng cho nhiều mảng công việc. · Biết tách việc lớn thành yêu cầu nhỏ, rõ ràng..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Dùng Claude để soạn nháp nhưng tránh đưa thông tin cá nhân hoặc hồ sơ mật.. Với nhân sự văn phòng, nó giúp Nhân viên mở nhiều cuộc hội thoại rời rạc và khó tìm lại kết quả.. Và đối với lãnh đạo SME, đây là chìa khóa để Doanh nghiệp cần quy định nơi lưu prompt, file, kết quả, quyền truy cập và dữ liệu không được đưa vào AI..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Thiết lập môi trường xử lý tài liệu an toàn | Văn phòng: Tối ưu thao tác hằng ngày | SME: Thiết lập workspace AI an toàn cho SME.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là thao tác bừa bãi, không quan tâm bảo mật hoặc lưu trữ lịch sử làm việc.. Thay vào đó, tư duy đúng đắn là thiết lập tài khoản an toàn (2fa), ẩn danh dữ liệu và tổ chức project khoa học.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Thao tác bừa bãi, không quan t... | Đúng: Thiết lập tài khoản an toàn (2...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 63 ngay bây giờ để khám phá 'Bài 33: Workflow làm việc với Claude' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 62. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 62 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 33: Workflow làm việc với Claude'. Dark tech background.
Caption overlay: Hoàn thành Bài 62 -> Xem tiếp Bài 63: Bài 33: Workflow làm việc với Claude.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 62.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 63 ngay bây giờ để khám phá 'Bài 33: Workflow làm việc với Claude' nhé. Click vào video tiếp theo!`,

  "37": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 63: Bài 33: Workflow làm việc với Claude

1. Tiêu đề video
Bài 63: Bài 33: Workflow làm việc với Claude

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 33: Workflow làm việc với Claude'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 63. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 33: Workflow làm việc với Claude' để giúp bạn áp dụng quy trình 5 bước để giao việc, nhận kết quả, kiểm tra, điều chỉnh và hoàn thiện. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 33: Workflow làm việc với Claude' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 63: Bài 33: Workflow làm việc với Claude - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Thiết kế workflow làm việc với Claude từ nhận việc đến hoàn thiện., Kết hợp bước tạo nháp, phản biện, chỉnh sửa và chốt kết quả., Tạo workflow cá nhân cho một công việc lặp lại hằng tuần.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Thiết kế workflow làm việc với Claude từ nhận việc đến hoàn thiện. · Kết hợp bước tạo nháp, phản biện, chỉnh sửa và chốt kết quả..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Văn bản đến cần được phân loại, tóm tắt, gợi ý đơn vị xử lý và theo dõi hạn trả lời.. Với nhân sự văn phòng, nó giúp Tổng hợp tiến độ từ nhiều nguồn và gửi báo cáo đều đặn.. Và đối với lãnh đạo SME, đây là chìa khóa để SME cần biến quy trình lặp lại thành playbook có người phụ trách, chỉ số, điểm dùng AI và điểm cần người duyệt..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: SOP xử lý văn bản đến | Văn phòng: Workflow báo cáo tuần | SME: Thiết kế operating playbook AI-first.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chạy quy trình thủ công lặp lại hoặc tự động hóa thiếu bước kiểm soát của con người.. Thay vào đó, tư duy đúng đắn là thiết kế sop rõ ràng, tách biệt bước ai tạo nháp và bước con người duyệt.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chạy quy trình thủ công lặp lạ... | Đúng: Thiết kế SOP rõ ràng, tách biệ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 64 ngay bây giờ để khám phá 'Bài 34: Giao việc đúng cho Claude' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 63. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 63 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 34: Giao việc đúng cho Claude'. Dark tech background.
Caption overlay: Hoàn thành Bài 63 -> Xem tiếp Bài 64: Bài 34: Giao việc đúng cho Claude.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 63.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 64 ngay bây giờ để khám phá 'Bài 34: Giao việc đúng cho Claude' nhé. Click vào video tiếp theo!`,

  "38": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 64: Bài 34: Giao việc đúng cho Claude

1. Tiêu đề video
Bài 64: Bài 34: Giao việc đúng cho Claude

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 34: Giao việc đúng cho Claude'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 64. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 34: Giao việc đúng cho Claude' để giúp bạn viết prompt và giao việc rõ ràng để nhận đúng kết quả, đúng mục tiêu. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 34: Giao việc đúng cho Claude' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 64: Bài 34: Giao việc đúng cho Claude - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Giữ mạch giao tiếp và ngữ cảnh khi phối hợp với Claude., Ghi lại quyết định, giả định và yêu cầu thay đổi trong cùng phiên làm việc., Tạo mẫu cập nhật tiến độ hoặc yêu cầu chỉnh sửa cho Claude.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Giữ mạch giao tiếp và ngữ cảnh khi phối hợp với Claude. · Ghi lại quyết định, giả định và yêu cầu thay đổi trong cùng phiên làm việc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Kiểm tra công văn trước khi trình ký: mục đích, căn cứ, giọng văn, thiếu sót và tính rõ ràng.. Với nhân sự văn phòng, nó giúp Phản hồi khách hàng hoặc đối tác rõ ràng, lịch sự, đúng trọng tâm.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần prompt mẫu để yêu cầu báo cáo, phân tích, kế hoạch, phản biện phương án và giao việc cho đội ngũ..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prompt rà soát công văn dự thảo | Văn phòng: Prompt viết email chuyên nghiệp | SME: Chuẩn hóa prompt điều hành.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là viết prompt quá ngắn, mơ hồ, không có bối cảnh hoặc tiêu chí đầu ra.. Thay vào đó, tư duy đúng đắn là áp dụng công thức 5w1h đầy đủ vai trò, bối cảnh, dữ liệu và định dạng đầu ra.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Viết prompt quá ngắn, mơ hồ, k... | Đúng: Áp dụng công thức 5W1H đầy đủ ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 65 ngay bây giờ để khám phá 'Bài 35: Công việc văn phòng' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 64. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 64 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 35: Công việc văn phòng'. Dark tech background.
Caption overlay: Hoàn thành Bài 64 -> Xem tiếp Bài 65: Bài 35: Công việc văn phòng.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 64.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 65 ngay bây giờ để khám phá 'Bài 35: Công việc văn phòng' nhé. Click vào video tiếp theo!`,

  "39": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 65: Bài 35: Công việc văn phòng

1. Tiêu đề video
Bài 65: Bài 35: Công việc văn phòng

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 35: Công việc văn phòng'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 65. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 35: Công việc văn phòng' để giúp bạn xử lý email, ghi chú họp, sop, kế hoạch và checklist trong công việc hằng ngày. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 35: Công việc văn phòng' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 65: Bài 35: Công việc văn phòng - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Ứng dụng Claude vào công việc văn phòng hằng ngày., Xử lý email, ghi chú họp, biên bản và tài liệu nội bộ., Tạo bộ workflow văn phòng gồm nhận việc, xử lý, gửi kết quả.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Ứng dụng Claude vào công việc văn phòng hằng ngày. · Xử lý email, ghi chú họp, biên bản và tài liệu nội bộ..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 66 ngay bây giờ để khám phá 'Bài 36: Phân tích và xử lý dữ liệu' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 65. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 65 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 36: Phân tích và xử lý dữ liệu'. Dark tech background.
Caption overlay: Hoàn thành Bài 65 -> Xem tiếp Bài 66: Bài 36: Phân tích và xử lý dữ liệu.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 65.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 66 ngay bây giờ để khám phá 'Bài 36: Phân tích và xử lý dữ liệu' nhé. Click vào video tiếp theo!`,

  "40": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 66: Bài 36: Phân tích và xử lý dữ liệu

1. Tiêu đề video
Bài 66: Bài 36: Phân tích và xử lý dữ liệu

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 36: Phân tích và xử lý dữ liệu'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 66. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 36: Phân tích và xử lý dữ liệu' để giúp bạn thu thập, làm sạch, phân tích, trực quan hóa dữ liệu và rút insight hành động. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 36: Phân tích và xử lý dữ liệu' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 66: Bài 36: Phân tích và xử lý dữ liệu - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Phân tích và xử lý dữ liệu bằng Claude trong bối cảnh công việc., Chuyển dữ liệu thô thành thông tin có giá trị., Tạo báo cáo phân tích ngắn kèm khuyến nghị hành động.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Phân tích và xử lý dữ liệu bằng Claude trong bối cảnh công việc. · Chuyển dữ liệu thô thành thông tin có giá trị..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Nhiều phản ánh cần phân nhóm chủ đề, mức độ ưu tiên và đề xuất hướng xử lý.. Với nhân sự văn phòng, nó giúp Dữ liệu ticket, doanh số hoặc tiến độ cần biến thành insight dễ hành động.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo cần dùng Claude để đọc báo cáo bán hàng, phản hồi khách hàng, chi phí hoặc tiến độ và rút ra quyết định..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Phân tích phản ánh/kiến nghị của người dân | Văn phòng: Phân tích dữ liệu vận hành | SME: Phân tích dữ liệu để ra quyết định nhanh.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là đưa dữ liệu nhạy cảm chưa ẩn danh vào ai và tin hoàn toàn vào kết luận.. Thay vào đó, tư duy đúng đắn là ẩn danh dữ liệu, đặt câu hỏi phân tích cụ thể và kiểm chứng chéo số liệu.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Đưa dữ liệu nhạy cảm chưa ẩn d... | Đúng: Ẩn danh dữ liệu, đặt câu hỏi p...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 67 ngay bây giờ để khám phá 'Bài 37: Marketing cùng Claude' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 66. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 66 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 37: Marketing cùng Claude'. Dark tech background.
Caption overlay: Hoàn thành Bài 66 -> Xem tiếp Bài 67: Bài 37: Marketing cùng Claude.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 66.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 67 ngay bây giờ để khám phá 'Bài 37: Marketing cùng Claude' nhé. Click vào video tiếp theo!`,

  "41": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 67: Bài 37: Marketing cùng Claude

1. Tiêu đề video
Bài 67: Bài 37: Marketing cùng Claude

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 37: Marketing cùng Claude'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 67. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 37: Marketing cùng Claude' để giúp bạn lên ý tưởng, viết nội dung, phân tích thị trường và tối ưu chiến dịch marketing. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 37: Marketing cùng Claude' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 67: Bài 37: Marketing cùng Claude - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dùng Claude để hỗ trợ marketing và truyền thông., Tạo thông điệp, nội dung và kế hoạch tiếp cận đúng đối tượng., Xây dựng một mini campaign có lịch nội dung và tiêu chí đo lường.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dùng Claude để hỗ trợ marketing và truyền thông. · Tạo thông điệp, nội dung và kế hoạch tiếp cận đúng đối tượng..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một chính sách mới cần được truyền đạt dễ hiểu cho người dân/doanh nghiệp.. Với nhân sự văn phòng, nó giúp Chuẩn hóa phản hồi, phân loại yêu cầu và theo dõi mức độ hài lòng.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo SME muốn dùng Claude cho marketing, sales, CSKH, CRM và tối ưu vận hành tăng trưởng..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Kế hoạch truyền thông chính sách | Văn phòng: Kế hoạch chăm sóc khách hàng | SME: Tạo growth playbook bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là sao chép nguyên văn kịch bản hoặc kế hoạch của ai cho chiến dịch thực tế.. Thay vào đó, tư duy đúng đắn là chấm điểm kế hoạch theo rủi ro, chi phí và chạy thử nghiệm pilot trước.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Sao chép nguyên văn kịch bản h... | Đúng: Chấm điểm kế hoạch theo rủi ro...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 68 ngay bây giờ để khám phá 'Bài 38: Quản lý dự án và làm việc nhóm' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 67. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 67 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 38: Quản lý dự án và làm việc nhóm'. Dark tech background.
Caption overlay: Hoàn thành Bài 67 -> Xem tiếp Bài 68: Bài 38: Quản lý dự án và làm việc nhóm.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 67.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 68 ngay bây giờ để khám phá 'Bài 38: Quản lý dự án và làm việc nhóm' nhé. Click vào video tiếp theo!`,

  "42": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 68: Bài 38: Quản lý dự án và làm việc nhóm

1. Tiêu đề video
Bài 68: Bài 38: Quản lý dự án và làm việc nhóm

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 38: Quản lý dự án và làm việc nhóm'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 68. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 38: Quản lý dự án và làm việc nhóm' để giúp bạn lập kế hoạch, phân công, theo dõi, báo cáo dự án và phối hợp nhóm hiệu quả. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 38: Quản lý dự án và làm việc nhóm' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 68: Bài 38: Quản lý dự án và làm việc nhóm - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Quản lý dự án cùng Claude qua kế hoạch, deadline và trạng thái., Phân rã dự án thành nhiệm vụ có người phụ trách., Tạo bảng theo dõi dự án có rủi ro và bước tiếp theo.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Quản lý dự án cùng Claude qua kế hoạch, deadline và trạng thái. · Phân rã dự án thành nhiệm vụ có người phụ trách..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một chính sách mới cần được truyền đạt dễ hiểu cho người dân/doanh nghiệp.. Với nhân sự văn phòng, nó giúp Chuẩn hóa phản hồi, phân loại yêu cầu và theo dõi mức độ hài lòng.. Và đối với lãnh đạo SME, đây là chìa khóa để Lãnh đạo SME muốn dùng Claude cho marketing, sales, CSKH, CRM và tối ưu vận hành tăng trưởng..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Kế hoạch truyền thông chính sách | Văn phòng: Kế hoạch chăm sóc khách hàng | SME: Tạo growth playbook bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là sao chép nguyên văn kịch bản hoặc kế hoạch của ai cho chiến dịch thực tế.. Thay vào đó, tư duy đúng đắn là chấm điểm kế hoạch theo rủi ro, chi phí và chạy thử nghiệm pilot trước.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Sao chép nguyên văn kịch bản h... | Đúng: Chấm điểm kế hoạch theo rủi ro...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 69 ngay bây giờ để khám phá 'Bài 39: Tự động hóa và tối ưu quy trình' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 68. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 68 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 39: Tự động hóa và tối ưu quy trình'. Dark tech background.
Caption overlay: Hoàn thành Bài 68 -> Xem tiếp Bài 69: Bài 39: Tự động hóa và tối ưu quy trình.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 68.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 69 ngay bây giờ để khám phá 'Bài 39: Tự động hóa và tối ưu quy trình' nhé. Click vào video tiếp theo!`,

  "43": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 69: Bài 39: Tự động hóa và tối ưu quy trình

1. Tiêu đề video
Bài 69: Bài 39: Tự động hóa và tối ưu quy trình

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 39: Tự động hóa và tối ưu quy trình'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 69. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 39: Tự động hóa và tối ưu quy trình' để giúp bạn tự động hóa tác vụ lặp lại, tối ưu quy trình và tập trung vào việc quan trọng. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 39: Tự động hóa và tối ưu quy trình' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 69: Bài 39: Tự động hóa và tối ưu quy trình - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tìm điểm nghẽn trong quy trình vận hành., Đề xuất cải tiến giúp giảm thao tác thủ công., Tạo kế hoạch tối ưu một quy trình cụ thể trong đội nhóm.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tìm điểm nghẽn trong quy trình vận hành. · Đề xuất cải tiến giúp giảm thao tác thủ công..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Văn bản đến cần được phân loại, tóm tắt, gợi ý đơn vị xử lý và theo dõi hạn trả lời.. Với nhân sự văn phòng, nó giúp Tổng hợp tiến độ từ nhiều nguồn và gửi báo cáo đều đặn.. Và đối với lãnh đạo SME, đây là chìa khóa để SME cần biến quy trình lặp lại thành playbook có người phụ trách, chỉ số, điểm dùng AI và điểm cần người duyệt..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: SOP xử lý văn bản đến | Văn phòng: Workflow báo cáo tuần | SME: Thiết kế operating playbook AI-first.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chạy quy trình thủ công lặp lại hoặc tự động hóa thiếu bước kiểm soát của con người.. Thay vào đó, tư duy đúng đắn là thiết kế sop rõ ràng, tách biệt bước ai tạo nháp và bước con người duyệt.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chạy quy trình thủ công lặp lạ... | Đúng: Thiết kế SOP rõ ràng, tách biệ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 70 ngay bây giờ để khám phá 'Bài 40: Tổng kết và lộ trình làm việc cùng Claude' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 69. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 69 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 40: Tổng kết và lộ trình làm việc cùng Claude'. Dark tech background.
Caption overlay: Hoàn thành Bài 69 -> Xem tiếp Bài 70: Bài 40: Tổng kết và lộ trình làm việc cùng Claude.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 69.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 70 ngay bây giờ để khám phá 'Bài 40: Tổng kết và lộ trình làm việc cùng Claude' nhé. Click vào video tiếp theo!`,

  "44": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 70: Bài 40: Tổng kết và lộ trình làm việc cùng Claude

1. Tiêu đề video
Bài 70: Bài 40: Tổng kết và lộ trình làm việc cùng Claude

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 40: Tổng kết và lộ trình làm việc cùng Claude'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 70. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 40: Tổng kết và lộ trình làm việc cùng Claude' để giúp bạn tổng kết hành trình co-work và xây lộ trình ứng dụng ai vào công việc mỗi ngày. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 40: Tổng kết và lộ trình làm việc cùng Claude' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 70: Bài 40: Tổng kết và lộ trình làm việc cùng Claude - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tổng hợp thông tin và viết báo cáo nhanh với Claude., Chuyển ghi chú rời rạc thành báo cáo có cấu trúc., Tạo mẫu báo cáo tuần/tháng dùng lại cho đội nhóm.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tổng hợp thông tin và viết báo cáo nhanh với Claude. · Chuyển ghi chú rời rạc thành báo cáo có cấu trúc..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Một tập tài liệu dài cần rút ra vấn đề chính, việc đã làm, việc tồn đọng và kiến nghị.. Với nhân sự văn phòng, nó giúp Sau cuộc họp, nhóm cần biết ai làm gì, hạn khi nào, phụ thuộc vào ai.. Và đối với lãnh đạo SME, đây là chìa khóa để CEO/manager muốn giảm thời gian xử lý email, báo cáo, biên bản họp, kế hoạch tuần và follow-up..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Tóm tắt hồ sơ phục vụ họp giao ban | Văn phòng: Xử lý biên bản họp thành action items | SME: Tự động hóa tác vụ quản trị hằng ngày.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là phó mặc hoàn toàn cho ai viết nội dung và gửi đi mà không kiểm duyệt.. Thay vào đó, tư duy đúng đắn là dùng ai tạo bản nháp nhanh, sau đó tự rà lại số liệu, tên riêng và deadline.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Phó mặc hoàn toàn cho AI viết ... | Đúng: Dùng AI tạo bản nháp nhanh, sa...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài CWTK ngay bây giờ để khám phá '[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 70. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 70 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: [Co-work Tổng kết] AI Co-work cho công việc và kinh doanh'. Dark tech background.
Caption overlay: Hoàn thành Bài 70 -> Xem tiếp Bài CWTK: [Co-work Tổng kết] AI Co-work cho công việc và kinh doanh.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 70.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài CWTK ngay bây giờ để khám phá '[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh' nhé. Click vào video tiếp theo!`,

  "45": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài CWTK: [Co-work Tổng kết] AI Co-work cho công việc và kinh doanh

1. Tiêu đề video
Bài CWTK: [Co-work Tổng kết] AI Co-work cho công việc và kinh doanh

2. Mô tả video
Tìm hiểu trọng tâm bài học '[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài CWTK. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học '[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh' để giúp bạn làm chủ claude ai để giao việc đúng, xây workflow và tăng năng suất trong công việc, kinh doanh. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson '[Co-work Tổng kết] AI Co-work cho công việc và kinh doanh' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài CWTK: [Co-work Tổng kết] AI Co-work cho công việc và kinh doanh - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Giao việc đúng cho Claude bằng bối cảnh, dữ liệu, tiêu chí và định dạng., Tránh yêu cầu quá chung chung hoặc thiếu căn cứ., Tạo mẫu brief giao việc áp dụng cho cơ quan/văn phòng.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Giao việc đúng cho Claude bằng bối cảnh, dữ liệu, tiêu chí và định dạng. · Tránh yêu cầu quá chung chung hoặc thiếu căn cứ..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Văn bản đến cần được phân loại, tóm tắt, gợi ý đơn vị xử lý và theo dõi hạn trả lời.. Với nhân sự văn phòng, nó giúp Tổng hợp tiến độ từ nhiều nguồn và gửi báo cáo đều đặn.. Và đối với lãnh đạo SME, đây là chìa khóa để SME cần biến quy trình lặp lại thành playbook có người phụ trách, chỉ số, điểm dùng AI và điểm cần người duyệt..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: SOP xử lý văn bản đến | Văn phòng: Workflow báo cáo tuần | SME: Thiết kế operating playbook AI-first.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là chạy quy trình thủ công lặp lại hoặc tự động hóa thiếu bước kiểm soát của con người.. Thay vào đó, tư duy đúng đắn là thiết kế sop rõ ràng, tách biệt bước ai tạo nháp và bước con người duyệt.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Chạy quy trình thủ công lặp lạ... | Đúng: Thiết kế SOP rõ ràng, tách biệ...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 81 ngay bây giờ để khám phá 'Bài 41: Claude Code là gì' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài CWTK. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson CWTK Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 41: Claude Code là gì'. Dark tech background.
Caption overlay: Hoàn thành Bài CWTK -> Xem tiếp Bài 81: Bài 41: Claude Code là gì.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài CWTK.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 81 ngay bây giờ để khám phá 'Bài 41: Claude Code là gì' nhé. Click vào video tiếp theo!`,

  "46": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 81: Bài 41: Claude Code là gì

1. Tiêu đề video
Bài 81: Bài 41: Claude Code là gì

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 41: Claude Code là gì'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 81. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 41: Claude Code là gì' để giúp bạn hiểu claude code là trợ lý lập trình ai hỗ trợ đọc, viết, sửa và hiểu codebase. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 41: Claude Code là gì' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 81: Bài 41: Claude Code là gì - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Hiểu vai trò của Claude Code trong hỗ trợ lập trình., Xác định tác vụ code phù hợp: đọc hiểu, sửa lỗi, refactor, test., Biết giới hạn và trách nhiệm kiểm tra của người dùng khi dùng AI viết code.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Hiểu vai trò của Claude Code trong hỗ trợ lập trình. · Xác định tác vụ code phù hợp: đọc hiểu, sửa lỗi, refactor, test..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 82 ngay bây giờ để khám phá 'Bài 42: Ai phù hợp với Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 81. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 81 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 42: Ai phù hợp với Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 81 -> Xem tiếp Bài 82: Bài 42: Ai phù hợp với Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 81.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 82 ngay bây giờ để khám phá 'Bài 42: Ai phù hợp với Claude Code' nhé. Click vào video tiếp theo!`,

  "47": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 82: Bài 42: Ai phù hợp với Claude Code

1. Tiêu đề video
Bài 82: Bài 42: Ai phù hợp với Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 42: Ai phù hợp với Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 82. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 42: Ai phù hợp với Claude Code' để giúp bạn xác định nhóm người dùng và tình huống phù hợp để dùng claude code hiệu quả. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 42: Ai phù hợp với Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 82: Bài 42: Ai phù hợp với Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Thiết lập tư duy làm việc với code theo phạm vi nhỏ và kiểm chứng được., Viết yêu cầu kỹ thuật rõ file, hành vi và tiêu chí hoàn thành., Tạo checklist trước khi yêu cầu Claude sửa code.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Thiết lập tư duy làm việc với code theo phạm vi nhỏ và kiểm chứng được. · Viết yêu cầu kỹ thuật rõ file, hành vi và tiêu chí hoàn thành..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 83 ngay bây giờ để khám phá 'Bài 43: Cài đặt và bắt đầu với Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 82. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 82 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 43: Cài đặt và bắt đầu với Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 82 -> Xem tiếp Bài 83: Bài 43: Cài đặt và bắt đầu với Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 82.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 83 ngay bây giờ để khám phá 'Bài 43: Cài đặt và bắt đầu với Claude Code' nhé. Click vào video tiếp theo!`,

  "48": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 83: Bài 43: Cài đặt và bắt đầu với Claude Code

1. Tiêu đề video
Bài 83: Bài 43: Cài đặt và bắt đầu với Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 43: Cài đặt và bắt đầu với Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 83. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 43: Cài đặt và bắt đầu với Claude Code' để giúp bạn chuẩn bị môi trường và bắt đầu làm việc với claude code trong terminal hoặc ide. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 43: Cài đặt và bắt đầu với Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 83: Bài 43: Cài đặt và bắt đầu với Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Chuẩn bị môi trường làm việc với trợ lý lập trình AI., Biết các bước cài đặt/cấu hình cần kiểm tra., Tạo hướng dẫn khởi động dự án cho người mới.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Chuẩn bị môi trường làm việc với trợ lý lập trình AI. · Biết các bước cài đặt/cấu hình cần kiểm tra..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 84 ngay bây giờ để khám phá 'Bài 44: Đọc hiểu dự án với Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 83. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 83 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 44: Đọc hiểu dự án với Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 83 -> Xem tiếp Bài 84: Bài 44: Đọc hiểu dự án với Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 83.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 84 ngay bây giờ để khám phá 'Bài 44: Đọc hiểu dự án với Claude Code' nhé. Click vào video tiếp theo!`,

  "49": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 84: Bài 44: Đọc hiểu dự án với Claude Code

1. Tiêu đề video
Bài 84: Bài 44: Đọc hiểu dự án với Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 44: Đọc hiểu dự án với Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 84. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 44: Đọc hiểu dự án với Claude Code' để giúp bạn giúp claude code hiểu codebase, luồng logic và ngữ cảnh dự án trước khi sửa. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 44: Đọc hiểu dự án với Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 84: Bài 44: Đọc hiểu dự án với Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Dùng Claude để đọc hiểu cấu trúc dự án., Yêu cầu giải thích luồng dữ liệu, module và điểm rủi ro., Tạo bản ghi chú kiến trúc ngắn trước khi sửa code.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Dùng Claude để đọc hiểu cấu trúc dự án. · Yêu cầu giải thích luồng dữ liệu, module và điểm rủi ro..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 85 ngay bây giờ để khám phá 'Bài 45: Kết nối API với Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 84. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 84 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 45: Kết nối API với Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 84 -> Xem tiếp Bài 85: Bài 45: Kết nối API với Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 84.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 85 ngay bây giờ để khám phá 'Bài 45: Kết nối API với Claude Code' nhé. Click vào video tiếp theo!`,

  "50": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 85: Bài 45: Kết nối API với Claude Code

1. Tiêu đề video
Bài 85: Bài 45: Kết nối API với Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 45: Kết nối API với Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 85. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 45: Kết nối API với Claude Code' để giúp bạn thiết kế, gọi, xử lý và kiểm tra api an toàn, hiệu quả trong dự án. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 45: Kết nối API với Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 85: Bài 45: Kết nối API với Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Thiết kế và kết nối API có payload, lỗi và tiêu chí test rõ ràng., Yêu cầu Claude tạo hoặc rà soát luồng API., Tạo checklist kiểm tra endpoint trước khi triển khai.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Thiết kế và kết nối API có payload, lỗi và tiêu chí test rõ ràng. · Yêu cầu Claude tạo hoặc rà soát luồng API..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 86 ngay bây giờ để khám phá 'Bài 46: Làm việc với database cùng Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 85. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 85 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 46: Làm việc với database cùng Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 85 -> Xem tiếp Bài 86: Bài 46: Làm việc với database cùng Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 85.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 86 ngay bây giờ để khám phá 'Bài 46: Làm việc với database cùng Claude Code' nhé. Click vào video tiếp theo!`,

  "51": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 86: Bài 46: Làm việc với database cùng Claude Code

1. Tiêu đề video
Bài 86: Bài 46: Làm việc với database cùng Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 46: Làm việc với database cùng Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 86. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 46: Làm việc với database cùng Claude Code' để giúp bạn kết nối, truy vấn và quản lý dữ liệu an toàn, rõ ràng với claude code. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 46: Làm việc với database cùng Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 86: Bài 46: Làm việc với database cùng Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Kết nối web an toàn khi làm việc với dữ liệu và biến môi trường., Nhận diện rủi ro lộ khóa, token hoặc thông tin nhạy cảm., Tạo checklist bảo mật tối thiểu cho tích hợp web.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Kết nối web an toàn khi làm việc với dữ liệu và biến môi trường. · Nhận diện rủi ro lộ khóa, token hoặc thông tin nhạy cảm..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 87 ngay bây giờ để khám phá 'Bài 47: Xây dựng API và backend' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 86. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 86 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 47: Xây dựng API và backend'. Dark tech background.
Caption overlay: Hoàn thành Bài 86 -> Xem tiếp Bài 87: Bài 47: Xây dựng API và backend.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 86.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 87 ngay bây giờ để khám phá 'Bài 47: Xây dựng API và backend' nhé. Click vào video tiếp theo!`,

  "52": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 87: Bài 47: Xây dựng API và backend

1. Tiêu đề video
Bài 87: Bài 47: Xây dựng API và backend

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 47: Xây dựng API và backend'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 87. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 47: Xây dựng API và backend' để giúp bạn thiết kế, viết code và tối ưu backend có cấu trúc, dễ bảo trì và sẵn sàng mở rộng. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 47: Xây dựng API và backend' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 87: Bài 47: Xây dựng API và backend - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Xử lý dữ liệu trong code bằng schema và validate input., Thiết kế chuyển đổi dữ liệu có kiểm soát lỗi., Tạo test case cho dữ liệu hợp lệ, thiếu trường và sai định dạng.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Xử lý dữ liệu trong code bằng schema và validate input. · Thiết kế chuyển đổi dữ liệu có kiểm soát lỗi..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 88 ngay bây giờ để khám phá 'Bài 48: Xử lý xác thực và phân quyền API' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 87. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 87 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 48: Xử lý xác thực và phân quyền API'. Dark tech background.
Caption overlay: Hoàn thành Bài 87 -> Xem tiếp Bài 88: Bài 48: Xử lý xác thực và phân quyền API.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 87.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 88 ngay bây giờ để khám phá 'Bài 48: Xử lý xác thực và phân quyền API' nhé. Click vào video tiếp theo!`,

  "53": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 88: Bài 48: Xử lý xác thực và phân quyền API

1. Tiêu đề video
Bài 88: Bài 48: Xử lý xác thực và phân quyền API

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 48: Xử lý xác thực và phân quyền API'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 88. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 48: Xử lý xác thực và phân quyền API' để giúp bạn bảo vệ api, kiểm tra đúng người, đúng quyền và đúng dữ liệu. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 48: Xử lý xác thực và phân quyền API' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 88: Bài 48: Xử lý xác thực và phân quyền API - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Hiểu yêu cầu xác thực và phân quyền trong ứng dụng., Thiết kế luồng kiểm tra quyền và xử lý lỗi truy cập., Tạo checklist rà soát bảo mật cho chức năng đăng nhập/phân quyền.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Hiểu yêu cầu xác thực và phân quyền trong ứng dụng. · Thiết kế luồng kiểm tra quyền và xử lý lỗi truy cập..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 89 ngay bây giờ để khám phá 'Bài 49: Test và tối ưu hiệu suất' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 88. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 88 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 49: Test và tối ưu hiệu suất'. Dark tech background.
Caption overlay: Hoàn thành Bài 88 -> Xem tiếp Bài 89: Bài 49: Test và tối ưu hiệu suất.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 88.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 89 ngay bây giờ để khám phá 'Bài 49: Test và tối ưu hiệu suất' nhé. Click vào video tiếp theo!`,

  "54": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 89: Bài 49: Test và tối ưu hiệu suất

1. Tiêu đề video
Bài 89: Bài 49: Test và tối ưu hiệu suất

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 49: Test và tối ưu hiệu suất'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 89. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 49: Test và tối ưu hiệu suất' để giúp bạn viết test, đo hiệu suất, tìm bottleneck và tối ưu hệ thống. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 49: Test và tối ưu hiệu suất' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 89: Bài 49: Test và tối ưu hiệu suất - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Viết test trọng điểm trước khi tối ưu hoặc refactor., Đo và xác định điểm nghẽn hiệu suất., Tạo kế hoạch tối ưu có tiêu chí so sánh trước/sau.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Viết test trọng điểm trước khi tối ưu hoặc refactor. · Đo và xác định điểm nghẽn hiệu suất..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Hãy chuyển sang Bài 90 ngay bây giờ để khám phá 'Bài 50: Tổng kết và triển khai dự án với Claude Code' nhé. Click vào video tiếp theo!
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 89. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: Educational UI dashboard showing a green checkmark indicating 'Lesson 89 Completed'. Below, a futuristic pulsing button with neon cyan text 'Next: Bài 50: Tổng kết và triển khai dự án với Claude Code'. Dark tech background.
Caption overlay: Hoàn thành Bài 89 -> Xem tiếp Bài 90: Bài 50: Tổng kết và triển khai dự án với Claude Code.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 89.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Hãy chuyển sang Bài 90 ngay bây giờ để khám phá 'Bài 50: Tổng kết và triển khai dự án với Claude Code' nhé. Click vào video tiếp theo!`,

  "55": `
VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài 90: Bài 50: Tổng kết và triển khai dự án với Claude Code

1. Tiêu đề video
Bài 90: Bài 50: Tổng kết và triển khai dự án với Claude Code

2. Mô tả video
Tìm hiểu trọng tâm bài học 'Bài 50: Tổng kết và triển khai dự án với Claude Code'. Hướng dẫn người học áp dụng vào thực tế công việc hành chính, văn phòng và doanh nghiệp để đạt hiệu quả cao và an toàn thông tin.

3. Tổng thời lượng đề xuất
2 phút 20 giây

4. Bảng kịch bản phân cảnh chi tiết (6 cảnh)
Cảnh 1: Hook mở đầu - Tầm quan trọng của bài học
Thời lượng: 20s
Voice-over: Chào mừng bạn đến với Bài 90. Trong công việc hằng ngày, việc thiếu phương pháp tiếp cận đúng đắn thường khiến chúng ta mất nhiều thời gian và công sức. Hôm nay, chúng ta sẽ cùng khám phá bài học 'Bài 50: Tổng kết và triển khai dự án với Claude Code' để giúp bạn đóng gói, test, tối ưu và deploy ứng dụng hoàn chỉnh với claude code. một cách chuyên nghiệp nhất.
Shot list: Một sơ đồ cây bài học phát sáng dưới dạng holographic 3D, nhánh liên quan đến bài học này sáng bừng lên giữa màn hình tối.
Prompt tạo hình/video: A holographic 3D roadmap tree glowing in digital space. One node representing the lesson 'Bài 50: Tổng kết và triển khai dự án với Claude Code' pulses with bright neon cyan light. Deep blue dark mode theme, tech aesthetic.
Caption overlay: Bài 90: Bài 50: Tổng kết và triển khai dự án với Claude Code - Giải pháp tối ưu hiệu suất.
Ghi chú dựng video: Nhạc nền: Nhạc điện tử (synthwave) nhịp độ vừa phải, tạo cảm hứng khám phá.

Cảnh 2: Trọng tâm lý thuyết và Kiến thức cốt lõi
Thời lượng: 25s
Voice-over: Trọng tâm của bài học này xoay quanh các kỹ năng chính: Tổng kết quy trình dùng Claude Code từ yêu cầu đến triển khai., Chuẩn bị checklist đóng gói và kiểm tra cuối., Tạo kế hoạch triển khai an toàn cho một prototype hoặc công cụ nhỏ.. Việc nắm vững kiến thức này giúp bạn xây dựng nền tảng vững chắc để tự tin giải quyết công việc mà không phụ thuộc vào các giải pháp thủ công lỗi thời.
Shot list: Một bảng điều khiển Infographic hiển thị các biểu tượng trực quan tương ứng với các kiến thức cốt lõi của bài học.
Prompt tạo hình/video: Clean infographic dashboard layout showing 3 key minimalist icons representing analytical concepts on a dark screen. Neon orange and yellow highlights, futuristic workspace interface.
Caption overlay: Kiến thức cốt lõi: Tổng kết quy trình dùng Claude Code từ yêu cầu đến triển khai. · Chuẩn bị checklist đóng gói và kiểm tra cuối..
Ghi chú dựng video: Tiếng "Ping" công nghệ nhẹ nhàng xuất hiện khi từng icon sáng lên tương ứng với giọng voice-over.

Cảnh 3: Ứng dụng thực tế theo từng vai trò
Thời lượng: 25s
Voice-over: Claude mang lại giá trị thực tiễn vượt trội cho từng đối tượng. Đối với cán bộ hành chính, bài học giúp Tạo bản thử nghiệm tìm kiếm văn bản, biểu mẫu hoặc quy trình cho cán bộ sử dụng.. Với nhân sự văn phòng, nó giúp Dữ liệu định kỳ cần được làm sạch, tổng hợp và xuất báo cáo.. Và đối với lãnh đạo SME, đây là chìa khóa để SME muốn tạo công cụ nhỏ để tự động hóa báo cáo, tra cứu, nhập liệu hoặc kết nối API mà không cần đội kỹ thuật lớn..
Shot list: Màn hình chia làm 3 cột hiển thị các biểu tượng của 3 vai trò: Huy hiệu công sở (Hành chính), Laptop và cốc cà phê (Văn phòng), và Sơ đồ KPI tăng trưởng (SME).
Prompt tạo hình/video: 3-column minimalist layout card designs showing a glowing government badge, a sleek laptop mockup, and a vibrant financial bar chart. Dark mode background with neon cyan outlines.
Caption overlay: Hành chính: Prototype công cụ tra cứu nội bộ | Văn phòng: Tự động hóa báo cáo bằng script | SME: Prototype công cụ nội bộ bằng AI.
Ghi chú dựng video: Chuyển động slide trượt mượt mà giữa các cột ứng dụng để người xem dễ theo dõi.

Cảnh 4: Tránh sai lầm & Tối ưu hóa tư duy
Thời lượng: 20s
Voice-over: Để đạt hiệu quả cao nhất, hãy tránh sai lầm phổ biến là yêu cầu ai viết và sửa một lượng lớn code cùng lúc mà không kiểm thử.. Thay vào đó, tư duy đúng đắn là chia nhỏ task, sửa code phạm vi hẹp nhất, viết unit test và kiểm tra hiệu năng.. Điều này giúp bạn làm việc thông minh và hiệu quả hơn rất nhiều.
Shot list: Một cán cân đồ họa. Bên trái hiển thị dấu X đỏ (Sai lầm), bên phải hiển thị dấu tick xanh lá cây (Đúng đắn) phát sáng.
Prompt tạo hình/video: A digital balancing scale graphic. Left side features a subtle red glowing 'X' mark. Right side features a bright green neon tick checkmark. Futuristic analytical dark theme.
Caption overlay: Tránh: Yêu cầu AI viết và sửa một lượ... | Đúng: Chia nhỏ task, sửa code phạm v...
Ghi chú dựng video: Âm thanh hiệu ứng SFX "deny" và "approve" nhẹ tương ứng với hai bên cán cân.

Cảnh 5: Nguyên tắc bảo mật dữ liệu & Kiểm chứng thông tin
Thời lượng: 20s
Voice-over: Hãy nhớ nguyên tắc bảo mật tối thượng của chúng ta. AI chỉ đóng vai trò hỗ trợ tạo ra bản nháp. Bạn phải luôn là người ẩn danh dữ liệu nhạy cảm trước khi tải lên và trực tiếp kiểm chứng chéo số liệu, thông tin pháp lý trước khi ký duyệt.
Shot list: Một ổ khóa bảo mật holographic 3D xoay chậm bên cạnh tài liệu số có đóng mộc "ĐÃ DUYỆT" phát sáng xanh lục.
Prompt tạo hình/video: A glowing 3D security padlock rotating slowly beside a holographic document marked with a bright green 'VERIFIED' stamp. Cyberpunk server room background.
Caption overlay: Bảo mật thông tin · Con người kiểm duyệt và chịu trách nhiệm.
Ghi chú dựng video: Nhạc nền trầm xuống một chút để nhấn mạnh tầm quan trọng của việc an toàn dữ liệu.

Cảnh 6: Kết bài và Cầu nối sang bài tiếp theo
Thời lượng: 20s
Voice-over: Học xong bài này, bạn đã tiến thêm một bước trên hành trình làm chủ AI. Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ lộ trình khóa học! Hãy nhấn nút Đặt lại tiến độ hoặc xuất chứng nhận để ghi nhận thành quả học tập của mình nhé.
Shot list: Bảng checklist hiển thị dấu tích xanh hoàn thành Bài 90. Nút bấm chuyển bài tiếp theo nhấp nháy phát sáng neon rực rỡ ở phía dưới.
Prompt tạo hình/video: A grand 3D futuristic trophy glowing in bright golden and cyan lights on a dark digital stage, particle effects, graduation celebration. Premium look.
Caption overlay: Chúc mừng! Bạn đã hoàn thành toàn bộ khóa học Claude Mastery.
Ghi chú dựng video: Nút CTA sáng rực rỡ lên ở 3 giây cuối cùng.

5. Bài tập thực hành
Dựa trên kiến thức bài học và các bối cảnh ứng dụng, bạn hãy:
- Chọn 1 tình huống thực tế trong công việc hiện tại của bạn cần áp dụng kỹ năng này.
- Chuẩn bị dữ liệu đầu vào đã ẩn danh, viết prompt theo đúng công thức và chạy thử trên Claude.
- Chụp ảnh màn hình kết quả và ghi lại 3 điểm bạn đã cải tiến được so với cách làm thủ công.

6. Checklist hoàn thành
[ ] Hiểu rõ kiến thức cốt lõi và mục tiêu của Bài 90.
[ ] Nắm được cách áp dụng thực tế cho vai trò công việc của mình.
[ ] Cam kết tuân thủ việc ẩn danh dữ liệu và tự kiểm duyệt kết quả đầu ra.
[ ] Đã chạy thử prompt thực hành và lưu lại kết quả.

7. Cầu nối sang Bài tiếp theo
Lời dẫn chuyển tiếp: Chúc mừng bạn đã hoàn thành xuất sắc toàn bộ lộ trình khóa học! Hãy nhấn nút Đặt lại tiến độ hoặc xuất chứng nhận để ghi nhận thành quả học tập của mình nhé.`
};;

let activeLessonId = safeGetLocalStorage("claude-active-lesson", "01");
let activePathId = safeGetLocalStorage("claude-active-path", "all");
let activeWorkflowRoleId = safeGetLocalStorage("claude-workflow-role", "public-admin");
let completed = new Set();
try {
  const savedCompleted = safeGetLocalStorage("claude-completed-lessons");
  if (savedCompleted) {
    const parsed = JSON.parse(savedCompleted);
    if (Array.isArray(parsed)) {
      completed = new Set(parsed);
    }
  }
} catch (e) {
  console.error("Failed to load completed lessons from localStorage:", e);
}

const moduleNav = document.getElementById("moduleNav");
const pathTabs = document.getElementById("pathTabs");
const milestoneBoard = document.getElementById("milestoneBoard");
const pathSummary = document.getElementById("pathSummary");
const agentToolkit = document.getElementById("agentToolkit");
const proTabs = document.getElementById("proTabs");
const proContent = document.getElementById("proContent");
const treeMap = document.getElementById("treeMap");
const searchInput = document.getElementById("searchInput");
const searchStatus = document.getElementById("searchStatus");
const progressLabel = document.getElementById("progressLabel");
const progressBar = document.getElementById("progressBar");
const lessonModule = document.getElementById("lessonModule");
const lessonTitle = document.getElementById("lessonTitle");
const lessonMeta = document.getElementById("lessonMeta");
const lessonGoals = document.getElementById("lessonGoals");
const lessonFlowList = document.getElementById("lessonFlow");
const lessonDeliverables = document.getElementById("lessonDeliverables");
const ipoBox = document.getElementById("ipoBox");
const caseStudies = document.getElementById("caseStudies");
const workflowCards = document.getElementById("workflowCards");
const lessonPractice = document.getElementById("lessonPractice");
const videoPack = document.getElementById("videoPack");
const tutorBox = document.getElementById("tutorBox");
const quizBox = document.getElementById("quizBox");
const assignmentBox = document.getElementById("assignmentBox");
const lessonChecklist = document.getElementById("lessonChecklist");
const qualityGate = document.getElementById("qualityGate");
const completeBtn = document.getElementById("completeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const continueBtn = document.getElementById("continueBtn");
const resetBtn = document.getElementById("resetBtn");
const pageImage = document.getElementById("pageImage");
const pageSummary = document.getElementById("pageSummary");
const sourceLink = document.getElementById("sourceLink");

let activeProToolId = safeGetLocalStorage("claude-pro-tool", "superpowers");

const skillsTabs = document.getElementById("skillsTabs");
const skillsContent = document.getElementById("skillsContent");
const bonusAgentContent = document.getElementById("bonusAgentContent");
let activeSkillChapterId = safeGetLocalStorage("claude-active-skill-chapter", "chap1");

function renderModules() {
  moduleNav.innerHTML = modules
    .map((module) => {
      const done = module.lessons.filter(([id]) => completed.has(id)).length;
      return `<button class="module-link" type="button" data-module="${module.id}">
        <strong>${module.title}</strong>
        <span>${done}/${module.lessons.length} | ${module.range}</span>
      </button>`;
    })
    .join("");
}

function getActivePath() {
  return learningPaths.find((path) => path.id === activePathId) || learningPaths[0];
}

function getActiveRoleProfile() {
  return roleProfiles[activePathId] || roleProfiles.all;
}

function getWorkflowRoleProfile() {
  return roleProfiles[activeWorkflowRoleId] || roleProfiles["public-admin"];
}

function getRoleApplication(lesson, roleId = activePathId) {
  const apps = getApplications(lesson);
  const roleAudience = {
    "public-admin": "Hành chính nhà nước",
    office: "Dân văn phòng",
    "sme-ai-first": "Lãnh đạo SME AI-first",
    code: "Lãnh đạo SME AI-first",
  }[roleId];
  return apps.find(([audience]) => audience === roleAudience) || apps[0];
}

function getLessonScenario(lesson, roleId = activePathId) {
  const app = getRoleApplication(lesson, roleId);
  return {
    audience: app?.[0] || (roleProfiles[roleId] || getActiveRoleProfile()).title,
    title: app?.[1] || lesson.title,
    context: app?.[2] || lesson.summary,
    output: app?.[3] || (roleProfiles[roleId] || getActiveRoleProfile()).output,
  };
}

function getVisibleLessons() {
  const path = getActivePath();
  if (!path.lessons) return flatLessons;
  const allowed = new Set(path.lessons);
  return flatLessons.filter((lesson) => allowed.has(lesson.id));
}


// ==========================================================================
// Competency Framework (Ajay Upadhyay Style) - All Paths Dynamic Integration
// ==========================================================================
let activeAdminPromptIndex = 0;
const rolePrompts = {
  "all": [
    {
      level: 1,
      title: "1. Prompt 5W1H chuẩn",
      desc: "Tạo prompt đa năng đầy đủ bối cảnh, vai trò, dữ liệu và tiêu chí nghiệm thu.",
      content: `Vai trò: Chuyên gia Prompt Engineering.
Bối cảnh: Tôi cần tạo một prompt chất lượng cao để giải quyết công việc.
Nhiệm vụ: Hãy chuyển đổi yêu cầu thô dưới đây thành một prompt chuẩn công thức 5W1H gồm:
- Vai trò (Who)
- Bối cảnh/Dữ liệu đầu vào (Context/Data)
- Nhiệm vụ cụ thể (What)
- Ràng buộc/Tiêu chí chất lượng (Constraints)
- Định dạng đầu ra (Output format)

YÊU CẦU THÔ:
[Nhập yêu cầu của bạn tại đây]`
    },
    {
      level: 1,
      title: "2. Soạn văn bản đa dạng",
      desc: "Viết lại văn bản theo nhiều phong cách và đối tượng người đọc khác nhau.",
      content: `Bạn là biên tập viên nội dung đa năng. Hãy đọc văn bản gốc dưới đây và viết lại thành 3 phiên bản:
1. Trang trọng & Học thuật: Phù hợp cho báo cáo hoặc trình bày nghiên cứu.
2. Ngắn gọn & Súc tích: Phù hợp cho tin nhắn Slack/Teams hoặc tóm tắt nhanh.
3. Thuyết phục & Truyền cảm hứng: Phù hợp cho email kêu gọi hành động hoặc giới thiệu giải pháp.

VĂN BẢN GỐC:
[Nhập văn bản gốc tại đây]`
    },
    {
      level: 1,
      title: "3. Phân tích dữ liệu thô",
      desc: "Đọc hiểu dữ liệu, tìm xu hướng, bất thường và đề xuất giải pháp.",
      content: `Bạn là Chuyên gia phân tích dữ liệu. Tôi sẽ cung cấp một bảng dữ liệu dạng text dưới đây. Hãy:
1. Tìm ra 3 xu hướng/quy luật nổi bật nhất trong dữ liệu.
2. Phát hiện bất kỳ điểm bất thường hoặc sai lệch nào cần lưu ý.
3. Đề xuất 3 hành động cụ thể để cải thiện các chỉ số dựa trên phân tích trên.

DỮ LIỆU CẦN PHÂN TÍCH:
[Dán dữ liệu bảng hoặc CSV tại đây]`
    },
    {
      level: 2,
      title: "4. Phản biện ý tưởng",
      desc: "Đóng vai phản biện (Devil's Advocate) để tìm ra kẽ hở và rủi ro trong kế hoạch.",
      content: `Bạn là một Cố vấn phản biện khó tính (Devil's Advocate). Hãy đọc kỹ kế hoạch dưới đây của tôi, phân tích và chỉ ra:
1. 3 điểm yếu lớn nhất có thể khiến kế hoạch này thất bại.
2. Những rủi ro tiềm ẩn chưa được tính toán kỹ về nguồn lực, thời gian hoặc dữ liệu.
3. Đề xuất cách khắc phục hoặc giải pháp dự phòng cho từng rủi ro đó.

KẾ HOẠCH DỰ KIẾN:
[Nhập kế hoạch của bạn tại đây]`
    },
    {
      level: 2,
      title: "5. Thiết kế SOP chuẩn",
      desc: "Chuyển chuỗi công việc thủ công phức tạp thành quy trình vận hành chuẩn SOP.",
      content: `Bạn là Chuyên gia tối ưu hóa quy trình vận hành. Hãy chuyển đổi công việc thủ công dưới đây thành một quy trình chuẩn SOP (Standard Operating Procedure).
Yêu cầu đầu ra gồm:
- Mục tiêu quy trình
- Điều kiện bắt đầu & Điều kiện kết thúc
- Các bước thực hiện chi tiết (tách rõ người làm, hành động và công cụ hỗ trợ)
- Checklist kiểm tra chất lượng (Quality Gate) ở cuối.

MÔ TẢ CÔNG VIỆC:
[Nhập mô tả công việc của bạn tại đây]`
    },
    {
      level: 2,
      title: "6. Chuyên gia lập kế hoạch dự án",
      desc: "Lập kế hoạch triển khai dự án chi tiết, phân rã công việc WBS và xác định mốc quan trọng.",
      content: `Bạn là Quản lý dự án chuyên nghiệp (PMP). Hãy thiết lập kế hoạch triển khai dự án dựa trên thông tin mô tả dưới đây.
Yêu cầu đầu ra bao gồm:
1. Mục tiêu dự án (Smart Goals) và phạm vi công việc.
2. Cấu trúc phân rã công việc (Work Breakdown Structure - WBS) chia thành các giai đoạn chính.
3. Danh sách các cột mốc quan trọng (Milestones) và thời hạn bàn giao tương ứng.
4. Đánh giá rủi ro (Risk Log) và phương án xử lý tương ứng cho 3 rủi ro lớn nhất.

MÔ TẢ DỰ ÁN & THỜI HẠN:
[Nhập thông tin dự án tại đây]`
    },
    {
      level: 3,
      title: "7. Chuỗi Prompt liên hoàn (Chain)",
      desc: "Tối ưu hóa bài toán phức tạp bằng cách thực hiện chuỗi lệnh phân tích và tạo dựng.",
      content: `Bạn là Chuyên gia thiết kế hệ thống Prompt. Hãy thiết kế một chuỗi các Prompt (Prompt Chain) gồm 3 bước liên hoàn để giải quyết bài toán phức tạp dưới đây.
Đầu ra bao gồm:
- Bước 1 (Phân tích dữ liệu & Bối cảnh): Mục tiêu prompt, nội dung prompt và định dạng JSON xuất ra.
- Bước 2 (Lập giải pháp chi tiết): Nhận đầu ra của Bước 1, mục tiêu prompt, nội dung prompt và tiêu chí đánh giá.
- Bước 3 (Tối ưu & Đóng gói sản phẩm): Nhận kết quả Bước 2, mục tiêu prompt, nội dung prompt và cấu trúc bản mẫu cuối cùng.

MÔ TẢ BÀI TOÁN PHỨC TẠP:
[Nhập mô tả bài toán tại đây]`
    },
    {
      level: 3,
      title: "8. Thẩm định văn bản pháp lý",
      desc: "Phân tích, rà soát tính hợp pháp và phát hiện rủi ro trong các điều khoản hợp đồng/văn bản pháp luật.",
      content: `Bạn là Chuyên gia thẩm định pháp lý và Luật sư tư vấn doanh nghiệp. Hãy rà soát kỹ văn bản thỏa thuận/hợp đồng dưới đây để:
1. Phát hiện 3 điều khoản mập mờ, thiếu chặt chẽ có thể gây bất lợi hoặc rủi ro pháp lý cho chúng tôi.
2. Đề xuất câu chữ sửa đổi (Alternative clauses) chi tiết cho từng điều khoản bị phát hiện để đảm bảo an toàn tuyệt đối.
3. Liệt kê các danh mục luật áp dụng liên quan cần tham chiếu thêm.

NỘI DUNG VĂN BẢN/HỢP ĐỒNG:
[Dán nội dung văn bản tại đây]`
    }
  ],
  "public-admin": [
    {
      level: 1,
      title: "1. Ẩn danh dữ liệu",
      desc: "Ẩn danh tài liệu hành chính trước khi nạp vào AI để đảm bảo an toàn thông tin.",
      content: `Bạn là chuyên gia an toàn thông tin hành chính. Hãy quét đoạn văn bản công vụ dưới đây và ẩn danh toàn bộ các thông tin nhạy cảm theo quy tắc:
- Tên riêng cơ quan/cán bộ -> thay thế bằng [TÊN_CƠ_QUAN_X], [CÁN_BỘ_Y]
- Số điện thoại, Email -> thay thế bằng [SĐT_ẨN], [EMAIL_ẨN]
- Số tiền, số tài khoản, mã số văn bản mật -> thay thế bằng [SỐ_TIỀN_ẨN], [MÃ_VĂN_BẢN_ẨN]
Đầu ra chỉ trả về văn bản đã được ẩn danh sạch sẽ, sẵn sàng để gửi lên AI.

VĂN BẢN CẦN XỬ LÝ:
[Nhập văn bản của bạn tại đây]`
    },
    {
      level: 1,
      title: "2. Soạn dự thảo báo cáo",
      desc: "Soạn thảo dự thảo báo cáo tổng hợp từ dữ liệu thô chuẩn giọng văn công chức tham mưu.",
      content: `Bạn là Chuyên viên tổng hợp tại cơ quan hành chính nhà nước. Hãy soạn thảo một bản dự thảo báo cáo tổng hợp kết quả công tác dựa trên các thông tin thô dưới đây.
Yêu cầu văn phong: Chuẩn mực, trang trọng, khách quan, súc tích (đúng Nghị định 30/2020/NĐ-CP).
Cấu trúc báo cáo gồm:
I. Kết quả đạt được (chi tiết chỉ số, số liệu)
II. Khó khăn, vướng mắc (chỉ rõ nguyên nhân chủ quan, khách quan)
III. Kiến nghị, đề xuất phương án xử lý (có người phụ trách và hạn hoàn thành)

DỮ LIỆU THÔ:
[Nhập ghi chú hoặc dữ liệu thô tại đây]`
    },
    {
      level: 2,
      title: "3. Rà soát & Biên tập văn bản",
      desc: "Rà soát lỗi chính tả, ngữ pháp, giọng văn và tính pháp lý của dự thảo công văn.",
      content: `Bạn là Thư ký hội đồng thẩm định văn bản hành chính. Hãy kiểm tra và tối ưu bản dự thảo công văn dưới đây theo các tiêu chí:
1. Đúng thể thức văn bản hành chính (Nghị định 30/2020/NĐ-CP).
2. Giọng văn trang trọng, rõ ràng, không trùng lặp ý, mạch lạc.
3. Chỉ ra các lỗi chính tả, ngữ pháp (nếu có) và đề xuất câu từ thay thế tối ưu hơn.
4. Đưa ra danh sách các căn cứ pháp lý hoặc số liệu cần kiểm chứng lại trước khi trình ký.

BẢN DỰ THẢO CÔNG VĂN:
[Nhập nội dung công văn tại đây]`
    },
    {
      level: 2,
      title: "4. Tóm tắt hồ sơ họp",
      desc: "Tóm tắt nhanh văn bản dài thành 1 trang A4 phục vụ lãnh đạo trước cuộc họp giao ban.",
      content: `Bạn là Trợ lý tham mưu đắc lực cho Lãnh đạo cơ quan. Hãy tóm tắt văn bản/hồ sơ dài dưới đây thành một bản tổng hợp ngắn gọn dưới 400 từ để lãnh đạo đọc nhanh trước cuộc họp.
Yêu cầu làm rõ:
1. Vấn đề cốt lõi/mục tiêu của văn bản.
2. Các điểm vướng mắc chính cần xin ý kiến chỉ đạo.
3. Đề xuất 3 phương án giải quyết (kèm ưu/nhược điểm từng phương án).
4. Các mốc thời gian quan trọng cần quyết định.

VĂN BẢN NGUỒN:
[Nhập văn bản dài tại đây]`
    },
    {
      level: 2,
      title: "5. Soạn Tờ trình xin chủ trương",
      desc: "Soạn thảo tờ trình đề xuất chủ trương triển khai dự án hoặc kế hoạch công tác mới trình Lãnh đạo phê duyệt.",
      content: `Bạn là Chuyên viên tham mưu chính sách. Hãy soạn thảo bản dự thảo Tờ trình xin chủ trương triển khai công việc/dự án dưới đây.
Đảm bảo kết cấu tờ trình chuẩn gồm:
1. Căn cứ pháp lý và thực tiễn (Tại sao cần làm).
2. Nội dung đề xuất chi tiết (Làm cái gì, quy mô, kinh phí dự kiến, thời gian).
3. Đánh giá tác động (Hiệu quả xã hội, kinh tế, quản lý nhà nước).
4. Đề xuất kiến nghị cụ thể gửi cấp có thẩm quyền phê duyệt.
Văn phong trang trọng, chuẩn chỉ công vụ hành chính.

MÔ TẢ ĐỀ XUẤT/DỰ ÁN THÔ:
[Nhập bối cảnh và ý tưởng dự án thô tại đây]`
    },
    {
      level: 3,
      title: "6. Lập Checklist & SOP đôn đốc",
      desc: "Biến kết luận cuộc họp thành bảng phân công công việc cụ thể và SOP vận hành.",
      content: `Bạn là Chuyên viên theo dõi đôn đốc nhiệm vụ. Từ biên bản kết luận cuộc họp dưới đây, hãy lập bảng phân công công việc chi tiết.
Yêu cầu đầu ra gồm:
1. Bảng phân công (STT, Tên nhiệm vụ, Bộ phận chủ trì, Bộ phận phối hợp, Hạn hoàn thành, Tiêu chí nghiệm thu).
2. Thiết lập quy trình 3 bước (SOP) để đôn đốc việc thực hiện.
3. Đề xuất mẫu email nhắc nhở tiến độ gửi các phòng ban.

BIÊN BẢN HỌP:
[Nhập nội dung kết luận họp tại đây]`
    },
    {
      level: 3,
      title: "7. Quy trình xử lý đơn thư khiếu nại",
      desc: "Tự động phân loại đơn thư khiếu nại, phản ánh và đề xuất dự thảo công văn phản hồi đúng hạn định.",
      content: `Bạn là Trưởng phòng Tiếp dân và xử lý đơn thư khiếu nại tố cáo. Hãy đọc nội dung đơn thư dưới đây và thực hiện:
1. Phân loại đơn thư (Khiếu nại, tố cáo, kiến nghị, phản ánh) và xác định thẩm quyền giải quyết theo luật định.
2. Trích xuất các yêu cầu/nội dung cốt lõi của người dân.
3. Lập sơ đồ các bước xử lý (kèm thời hạn tối đa cho từng bước theo quy định pháp luật).
4. Soạn thảo dự thảo Công văn trả lời người dân hoặc Phiếu chuyển đơn thư đến đúng cơ quan thẩm quyền.

NỘI DUNG ĐƠN THƯ CỦA NGƯỜI DÂN:
[Dán nội dung đơn thư phản ánh tại đây]`
    }
  ],
  "office": [
    {
      level: 1,
      title: "1. Soạn email chuyên nghiệp",
      desc: "Soạn thảo email công việc phản hồi khách hàng hoặc đối tác trang trọng.",
      content: `Bạn là Chuyên viên truyền thông nội bộ và đối ngoại. Hãy soạn thảo một email gửi đến đối tác để xử lý công việc dưới đây.
Yêu cầu email:
- Tiêu đề rõ ràng, thu hút.
- Giọng điệu lịch sự, chuyên nghiệp, đúng chuẩn mực công sở.
- Cấu trúc: Lời chào, Lý do viết thư, Nội dung chính/Yêu cầu giải quyết, Hạn phản hồi mong đợi, Lời cảm ơn và chữ ký mẫu.

NỘI DUNG YÊU CẦU:
[Nhập bối cảnh và yêu cầu email tại đây]`
    },
    {
      level: 1,
      title: "2. Tóm tắt báo cáo nhanh",
      desc: "Biến bài viết dài hoặc tài liệu phức tạp thành các ý chính cực kỳ ngắn gọn.",
      content: `Bạn là Thư ký văn phòng. Hãy tóm tắt văn bản dưới đây thành tối đa 5 ý chính (bullet points) dễ hiểu nhất.
Yêu cầu:
- Rút trích đúng các số liệu, tên riêng, deadline và sự kiện quan trọng.
- Trình bày dạng danh sách gạch đầu dòng, ngôn ngữ ngắn gọn, bỏ qua các diễn giải dài dòng.

TÀI LIỆU NGUỒN:
[Nhập tài liệu/bài viết tại đây]`
    },
    {
      level: 1,
      title: "3. Dàn ý Slide thuyết trình",
      desc: "Chuyển đổi nội dung thô thành dàn ý cấu trúc slide thuyết trình cơ bản.",
      content: `Bạn là Slide Planner. Hãy chuyển đổi nội dung thô dưới đây thành dàn ý slide thuyết trình gồm 5-7 slide.
Yêu cầu mỗi slide ghi rõ:
- Tên slide
- Nội dung chữ chính (tối đa 3 ý ngắn gọn, súc tích)
- Gợi ý bố cục thiết kế tổng thể.

NỘI DUNG THÔ:
[Nhập nội dung thô tại đây]`
    },
    {
      level: 2,
      title: "4. Email đàm phán khó tính",
      desc: "Soạn thảo email phản hồi khách hàng khiếu nại hoặc từ chối đối tác khéo léo.",
      content: `Bạn là Chuyên gia Chăm sóc khách hàng và Đàm phán thương mại. Hãy soạn thảo email phản hồi để xử lý tình huống nhạy cảm dưới đây.
Hãy viết ra 3 tùy chọn phản hồi tương ứng với các mức độ mềm dẻo khác nhau:
1. Phương án Hợp tác & Đền bù tối đa: Nhằm giữ chân khách hàng VIP bằng mọi giá.
2. Phương án Thương lượng & Phân chia trách nhiệm: Đưa ra giải pháp trung hòa lợi ích của cả hai bên.
3. Phương án Từ chối khéo léo & Hỗ trợ thay thế: Từ chối yêu cầu phi lý của đối tác nhưng vẫn giữ quan hệ tốt đẹp lâu dài.

BỐI CẢNH & TÌNH HUỐNG KHÓ KHĂN:
[Nhập chi tiết khiếu nại hoặc bối cảnh từ chối tại đây]`
    },
    {
      level: 2,
      title: "5. Biên bản họp & Action Items",
      desc: "Tạo biên bản cuộc họp khoa học kèm phân công việc rõ người, rõ hạn.",
      content: `Bạn là Thư ký cuộc họp chuyên nghiệp. Hãy đọc các ghi chép họp thô (hoặc bản transcript ghi âm cuộc họp) dưới đây và chuyển hóa thành một Biên bản cuộc họp (Meeting Minutes) chuyên nghiệp.
Yêu cầu biên bản gồm:
1. Thông tin chung (Thời gian, thành phần tham dự, chủ trì).
2. Tóm tắt nội dung thảo luận (Các ý chính phát biểu, các luồng quan điểm đồng ý/phản đối).
3. Bảng phân công Action Items rõ ràng: STT | Nhiệm vụ | Người phụ trách | Hạn hoàn thành | Tiêu chí chất lượng đầu ra.
4. Thời gian và nội dung dự kiến cho cuộc họp tiếp theo (nếu có).

GHI CHÚ HỌP THÔ:
[Nhập ghi chú cuộc họp tại đây]`
    },
    {
      level: 2,
      title: "6. Slide Pitch Deck & Visual Layout",
      desc: "Tạo dàn slide gọi vốn hoặc thuyết trình dự án lớn, chi tiết visual layout và charts cho từng trang.",
      content: `Bạn là Chuyên gia thiết kế slide thuyết trình (Presentation Designer) và Chuyên gia gọi vốn (Pitch Deck Expert). Hãy thiết kế cấu trúc chi tiết cho slide deck gọi vốn/thuyết trình dự án dựa trên nội dung dưới đây.
Đầu ra yêu cầu:
- Tên slide & Thông điệp cốt lõi của trang đó.
- Cấu trúc nội dung chi tiết (Bullet points và câu chữ chắt lọc đắt giá).
- Gợi ý thiết kế trực quan (Visual Concept): Bố cục hình ảnh/chữ, bảng màu đề xuất, loại biểu đồ sử dụng (Pie chart, Bar chart, v.v.), danh sách icon cần chèn.
- Lời thoại nháp cho người thuyết trình (Speaker Notes) ở dưới mỗi slide.

NỘI DUNG DỰ ÁN CHI TIẾT:
[Nhập nội dung dự án/kế hoạch gọi vốn tại đây]`
    },
    {
      level: 2,
      title: "7. Ý tưởng Campaign Marketing",
      desc: "Brainstorm ý tưởng chiến dịch marketing sáng tạo và lập kế hoạch viết content đa kênh.",
      content: `Bạn là Creative Director và Lead Copywriter. Hãy xây dựng ý tưởng chiến dịch Marketing cho sản phẩm dưới đây của chúng tôi.
Yêu cầu đầu ra gồm:
1. Big Idea & Thông điệp chính (Slogan) của chiến dịch.
2. Danh sách 3 góc tiếp cận nội dung (Content Angles) độc đáo đánh trúng nỗi đau khách hàng.
3. Kế hoạch phân phối nội dung đa kênh (Facebook, Email, Tiktok) kèm theo 3 mẫu bài viết demo chi tiết cho từng kênh.

MÔ TẢ SẢN PHẨM & ĐỐI TƯỢNG MỤC TIÊU:
[Nhập thông tin sản phẩm và khách hàng mục tiêu tại đây]`
    },
    {
      level: 3,
      title: "8. Kế hoạch tuần tự động hóa",
      desc: "Lập kế hoạch làm việc tuần khoa học dựa trên danh sách việc cần làm, tối ưu năng suất cá nhân.",
      content: `Bạn là Huấn luyện viên năng suất cá nhân (Productivity Coach). Dưới đây là danh sách các đầu việc tôi cần hoàn thành trong tuần tới. Hãy thiết lập một Bản đồ phân phối công việc tuần tự động hóa 50% thời gian cho tôi.
Yêu cầu lập kế hoạch:
1. Phân loại công việc theo Ma trận Eisenhower (Quan trọng - Khẩn cấp).
2. Sắp xếp lịch làm việc cụ thể từ Thứ 2 đến Thứ 6. Thiết lập các khối thời gian tập trung (Time Blocking - 90 phút/khối) cho các việc quan trọng nhất.
3. Đề xuất các tác vụ có thể bàn giao cho AI xử lý trước (Ví dụ: tổng hợp tài liệu, viết nháp mail) và chỉ rõ bước con người phê duyệt.
4. Đưa ra 3 quy tắc kỷ luật cá nhân để tránh xao nhãng.

DANH SÁCH ĐẦU VIỆC VÀ MỤC TIÊU TUẦN:
[Nhập danh sách việc tại đây]`
    },
    {
      level: 3,
      title: "9. Chaining Báo cáo tuần",
      desc: "Hệ thống liên kết prompt tự động phân tích KPI, đánh giá hiệu suất và viết báo cáo tuần lên cấp trên.",
      content: `Bạn là Trợ lý Phân tích và Báo cáo Hiệu suất. Hãy giúp tôi tạo một quy trình báo cáo tuần tự động bằng cách chạy chuỗi phân tích dưới đây dựa trên số liệu thô của tôi.
Hãy thực hiện các phân tích sau và đóng gói thành báo cáo:
Bước 1: Chuyển dữ liệu hoạt động thô thành bảng tổng hợp chỉ số KPI (Đạt được bao nhiêu %, tăng trưởng thế nào so với tuần trước).
Bước 2: Phân tích nguyên nhân của các chỉ số giảm hoặc chưa đạt mục tiêu. Nhận định khó khăn cốt lõi (do quy trình, do thị trường, hay do cá nhân).
Bước 3: Soạn thảo văn bản báo cáo tuần gửi Quản lý trực tiếp (văn phong chuyên nghiệp, cầu tiến, chủ động đề xuất 3 giải pháp cải tiến tuần tới).

SỐ LIỆU VÀ HOẠT ĐỘNG THỰC TẾ TUẦN QUA:
[Nhập số liệu hoặc ghi chép hoạt động tại đây]`
    },
    {
      level: 3,
      title: "10. Chatbot đối luyện thương lượng",
      desc: "Giả lập chatbot AI đóng vai đối tác/khách hàng khó tính để bạn luyện tập kỹ năng đàm phán giải quyết khủng hoảng.",
      content: `Bạn là một đối tác kinh doanh khó tính, đang vô cùng giận dữ vì sản phẩm/dịch vụ của chúng tôi gặp sự cố nghiêm trọng (trễ tiến độ 2 tuần và có lỗi kỹ thuật). Bạn muốn đền bù hợp đồng và đang có ý định ngừng hợp tác.
Hãy bắt đầu cuộc hội thoại đàm phán bằng một câu chất vấn gay gắt nhất.
Quy tắc tương tác:
- Bạn chỉ nói lời thoại của đối tác đó, phản ứng thực tế theo từng câu trả lời của tôi (nếu tôi giải thích thiếu thuyết phục, bạn sẽ gay gắt hơn; nếu tôi đưa ra hướng xử lý thỏa đáng, bạn sẽ từ từ lắng dịu).
- Giữ câu thoại ngắn gọn dưới 3 câu, thể hiện rõ tâm lý nghi ngờ của đối tác lớn.
- Sau mỗi câu trả lời của tôi, hãy đánh giá nhẹ bằng [ĐIỂM_TÂM_LÝ: 1-10] ở đầu dòng trước khi bắt đầu lời thoại tiếp theo của bạn.

BỐI CẢNH SỰ CỐ DỰ ÁN:
[Mô tả sự cố trễ tiến độ hoặc lỗi kỹ thuật tại đây]`
    },
    {
      level: 3,
      title: "11. Workflow tạo Project Proposal",
      desc: "Chuỗi liên hoàn chuyển ý tưởng sơ bộ thành Đề xuất dự án chi tiết (Project Proposal) hoàn chỉnh.",
      content: `Bạn là Business Analyst kiêm Project Director. Tôi có một ý tưởng kinh doanh/dự án sơ bộ dưới đây. Hãy chuyển hóa nó thành một bản Đề xuất dự án (Project Proposal) hoàn chỉnh, chuyên nghiệp để trình ban giám đốc.
Bản đề xuất cần có đầy đủ các cấu phần:
1. Executive Summary (Tóm tắt dự án trong 1 trang).
2. Tuyên bố vấn đề & Cơ hội thị trường (Problem Statement & Market Opportunity).
3. Mục tiêu dự án chi tiết (S.M.A.R.T).
4. Phương án triển khai & Giải pháp kỹ thuật/nghiệp vụ.
5. Dự toán nguồn lực, ngân sách đầu tư ban đầu và ước tính thời gian hoàn vốn (ROI).
6. Kế hoạch đo lường hiệu quả và quản trị rủi ro dự án.

Ý TƯỞNG DỰ ÁN SƠ BỘ CỦA TÔI:
[Nhập mô tả ý tưởng sơ bộ tại đây]`
    }
  ],
  "sme-ai-first": [
    {
      level: 1,
      title: "1. Soạn Quy tắc AI công ty",
      desc: "Thiết lập quy tắc hướng dẫn nhân viên sử dụng AI an toàn bảo mật.",
      content: `Bạn là Giám đốc vận hành (COO) và chuyên gia an toàn dữ liệu doanh nghiệp. Hãy soạn thảo một bản Quy tắc sử dụng AI (AI Governance Guideline) dành cho toàn thể nhân viên trong công ty SME.
Yêu cầu quy tắc làm rõ:
1. Những loại dữ liệu cấm tải lên AI (Dữ liệu khách hàng cá nhân, báo cáo tài chính nội bộ, mã nguồn độc quyền).
2. Quy tắc bắt buộc ẩn danh dữ liệu trước khi dùng AI.
3. Trách nhiệm kiểm chứng đầu ra của nhân viên (AI tạo nháp - Con người kiểm duyệt và chịu trách nhiệm).

THÔNG TIN DOANH NGHIỆP:
[Nhập lĩnh vực kinh doanh của công ty tại đây]`
    },
    {
      level: 1,
      title: "2. Phân tích báo cáo tài chính",
      desc: "Đọc hiểu báo cáo kinh doanh của SME và đưa ra 3 khuyến nghị hành động nhanh.",
      content: `Bạn là Cố vấn kinh doanh cao cấp cho CEO doanh nghiệp nhỏ. Hãy đọc báo cáo doanh thu/vận hành thô dưới đây của công ty chúng tôi và phân tích:
1. 3 nguyên nhân cốt lõi dẫn đến tình trạng hiện tại (tăng/giảm đột biến).
2. Phát hiện 2 rủi ro hoặc điểm nghẽn nghiêm trọng nhất trong vận hành.
3. Đề xuất 3 hành động cụ thể có thể triển khai ngay trong tuần sau để cải thiện tình hình (kèm ước tính chi phí và nhân lực tối thiểu).

BÁO CÁO KINH DOANH THÔ:
[Dán dữ liệu báo cáo kinh doanh tại đây]`
    },
    {
      level: 2,
      title: "3. Thiết kế Pilot AI 14 ngày",
      desc: "Xây dựng kế hoạch thử nghiệm (pilot) ứng dụng AI vào một phòng ban cụ thể.",
      content: `Bạn là Quản lý dự án Chuyển đổi số. Hãy xây dựng một kế hoạch thử nghiệm (Pilot AI) trong vòng 14 ngày áp dụng Claude vào hoạt động của phòng ban dưới đây.
Yêu cầu kế hoạch gồm:
- Mục tiêu thử nghiệm (Đo lường thời gian/chi phí giảm thiểu).
- Lịch trình hành động chi tiết từ Ngày 1 đến Ngày 14.
- KPI đo lường thành công (Chất lượng đầu ra, thời gian hoàn thành).
- Kế hoạch quản trị rủi ro khi nhân viên chưa quen công cụ.

PHÒNG BAN VÀ QUY TRÌNH THỬ NGHIỆM:
[Nhập tên phòng ban và quy trình muốn ứng dụng AI]`
    },
    {
      level: 2,
      title: "4. Thiết kế chuẩn nghiệm thu AI",
      desc: "Xây dựng chỉ số KPI và ma trận chất lượng nghiệm thu kết quả do AI tạo ra.",
      content: `Bạn là Trưởng bộ phận Đảm bảo chất lượng (QA). Hãy xây dựng bảng ma trận kiểm duyệt chất lượng (Quality Gate) cho sản phẩm công việc do AI tạo ra dưới đây.
Yêu cầu gồm:
- 5 tiêu chí chấm điểm chất lượng (Rõ ràng, Chính xác số liệu, Phù hợp thương hiệu, Tính pháp lý, Tính khả thi).
- Thang điểm đánh giá và hành động tương ứng (Đạt, Cần sửa đổi, Hủy bỏ).
- Quy trình nghiệm thu giữa Nhân viên (Prompt) và Quản lý (Reviewer).

SẢN PHẨM CÔNG VIỆC DO AI TẠO NHÁP:
[Mô tả sản phẩm, ví dụ: Kịch bản marketing, SOP vận hành...]`
    },
    {
      level: 2,
      title: "5. Lập JD tuyển dụng & Quy trình",
      desc: "Soạn thảo bản mô tả công việc (JD) thu hút nhân tài và thiết lập quy trình phỏng vấn chuẩn hóa bằng AI.",
      content: `Bạn là Giám đốc Nhân sự (CHRO). Hãy xây dựng bộ tài liệu tuyển dụng cho vị trí nhân sự dưới đây.
Đầu ra yêu cầu bao gồm:
1. Bản mô tả công việc (JD) chi tiết (Nhiệm vụ, yêu cầu chuyên môn, quyền lợi, văn hóa làm việc).
2. Bộ câu hỏi phỏng vấn gồm 5 câu hỏi tình huống (Behavioral Questions) kèm theo hướng dẫn chấm điểm và câu trả lời kỳ vọng cho người phỏng vấn.
3. Bài test năng lực chuyên môn 30 phút dành cho ứng viên trước vòng phỏng vấn.

VỊ TRÍ CẦN TUYỂN DỤNG & YÊU CẦU ĐẶC THÙ:
[Nhập tên vị trí và yêu cầu kinh nghiệm tại đây]`
    },
    {
      level: 3,
      title: "6. Thiết kế Playbook AI-first",
      desc: "Tái thiết kế quy trình kinh doanh cũ thành workflow AI-first tối ưu hiệu suất.",
      content: `Bạn là Chuyên gia thiết kế mô hình vận hành AI-first. Tôi muốn chuyển đổi một quy trình nghiệp vụ cũ (đang làm thủ công) dưới đây thành quy trình AI-first có sự tham gia của Claude như một trợ lý ảo.
Yêu cầu:
1. Phân tích điểm nghẽn và chi phí thời gian của quy trình cũ.
2. Vẽ quy trình mới (Workflow) chỉ ra rõ: bước nào AI thực hiện (tạo nháp, tóm tắt, dịch), bước nào con người bắt buộc phải phê duyệt.
3. Đề xuất các mẫu prompt cần cấu hình sẵn cho nhân sự thực thi quy trình này.

QUY TRÌNH NGHIỆP VỤ THỦ CÔNG HIỆN TẠI:
[Mô tả quy trình cũ chi tiết]`
    },
    {
      level: 3,
      title: "7. Sơ đồ chiến lược & Quản lý rủi ro",
      desc: "Hoạch định chiến lược kinh doanh cho sản phẩm mới, xây dựng ma trận SWOT và phân tích rủi ro thị trường.",
      content: `Bạn là Chuyên gia Chiến lược doanh nghiệp. Chúng tôi chuẩn bị ra mắt sản phẩm/dịch vụ mới dưới đây tại thị trường Việt Nam. Hãy giúp tôi phân tích chiến lược.
Đầu ra bao gồm:
1. Phân tích ma trận SWOT chi tiết (Điểm mạnh, Điểm yếu, Cơ hội, Thách thức).
2. Định vị phân khúc khách hàng mục tiêu & Đề xuất chiến lược giá cạnh tranh (Pricing strategy).
3. Ma trận Quản lý rủi ro (Risk Matrix) phân tích 3 rủi ro lớn nhất về thị trường hoặc đối thủ, kèm kế hoạch ứng phó chi tiết.
4. Lịch trình triển khai Go-To-Market (GTM) trong 30 ngày đầu tiên.

MÔ TẢ SẢN PHẨM & THỊ TRƯỜNG MỤC TIÊU:
[Nhập mô tả sản phẩm mới và bối cảnh cạnh tranh tại đây]`
    }
  ],
  "code": [
    {
      level: 1,
      title: "1. Đọc hiểu & Khảo sát repo",
      desc: "Yêu cầu Claude Code quét codebase, giải thích kiến trúc và luồng dữ liệu chính.",
      content: `Bạn là Kiến trúc sư phần mềm. Hãy khảo sát codebase của dự án và giải thích cho tôi:
1. Cấu trúc thư mục hiện tại có tuân thủ design pattern nào không? Lợi ích và hạn chế của nó.
2. Luồng đi của dữ liệu từ khi người dùng gửi request (đăng ký/đăng nhập/gọi API) đến khi lưu vào Database.
3. Chỉ ra 3 file quan trọng nhất chứa logic cốt lõi của ứng dụng cần lưu ý khi phát triển tiếp.

MÔ TẢ CÔNG NGHỆ DỰ ÁN:
[Nhập ngôn ngữ, framework, database đang dùng của codebase]`
    },
    {
      level: 1,
      title: "2. Giải thích lỗi & Sửa nhanh",
      desc: "Đọc thông báo lỗi từ trình biên dịch/runtime và hướng dẫn cách sửa đổi code nhanh chóng.",
      content: `Bạn là Kỹ sư hỗ trợ lập trình. Tôi gặp lỗi trong quá trình build/run ứng dụng. Dưới đây là thông báo lỗi và đoạn code có khả năng gây lỗi.
Hãy giúp tôi:
1. Giải thích nguyên nhân lỗi bằng ngôn ngữ dễ hiểu.
2. Đưa ra đoạn code đã được sửa đổi hoàn chỉnh để khắc phục lỗi ngay lập tức.

THÔNG BÁO LỖI:
[Dán thông báo lỗi tại đây]

ĐOẠN CODE LIÊN QUAN:
[Dán đoạn code tại đây]`
    },
    {
      level: 2,
      title: "3. Thiết kế API & Validation",
      desc: "Tạo code backend xử lý API endpoint hoàn chỉnh kèm validate dữ liệu an toàn.",
      content: `Bạn là Backend Developer. Hãy thiết kế một API endpoint xử lý yêu cầu dưới đây.
Yêu cầu mã nguồn:
- Viết bằng ngôn ngữ và framework được chỉ định.
- Validate chặt chẽ dữ liệu đầu vào (kiểm tra kiểu dữ liệu, độ dài, ký tự đặc biệt, SQL injection).
- Xử lý lỗi (try-catch) và trả về mã lỗi HTTP chuẩn (200, 400, 401, 500) kèm JSON thông báo rõ ràng.
- Viết code sạch, có comment giải thích các logic xử lý phức tạp.

YÊU CẦU API:
[Nhập yêu cầu chức năng API, payload đầu vào và response mong muốn]`
    },
    {
      level: 2,
      title: "4. Viết Unit Test tự động",
      desc: "Tạo các kịch bản kiểm thử tự động (Unit Test) cho hàm logic để đảm bảo độ tin cậy.",
      content: `Bạn là Kỹ sư kiểm thử phần mềm (QA Automation). Hãy viết bộ Unit Test hoàn chỉnh cho file logic/hàm backend dưới đây.
Yêu cầu:
- Viết test case cover các trường hợp: dữ liệu đúng chuẩn, dữ liệu thiếu trường, dữ liệu sai định dạng (kiểu biên), và trường hợp hệ thống gặp sự cố (mocking nếu cần).
- Đảm bảo độ bao phủ mã nguồn (Code Coverage) đạt trên 90%.

MÃ NGUỒN CẦN VIẾT TEST:
[Dán mã nguồn hàm logic backend tại đây]`
    },
    {
      level: 2,
      title: "5. Thiết kế Database Schema",
      desc: "Thiết kế cấu trúc bảng cơ sở dữ liệu, mối quan hệ và câu lệnh SQL khởi tạo.",
      content: `Bạn là Database Architect. Hãy thiết kế cấu trúc database cho yêu cầu nghiệp vụ dưới đây.
Yêu cầu đầu ra gồm:
1. Danh sách các bảng (tên bảng, các trường dữ liệu, kiểu dữ liệu, khóa chính PRIMARY KEY, khóa ngoại FOREIGN KEY).
2. Mô tả mối quan hệ giữa các bảng (1-n, n-n, 1-1).
3. Đoạn mã SQL chuẩn để tạo các bảng và thiết lập các khóa ngoại.
4. Ghi chú về tối ưu hóa index hoặc ràng buộc bảo mật dữ liệu.

YÊU CẦU NGHIỆP VỤ:
[Nhập yêu cầu nghiệp vụ database tại đây]`
    },
    {
      level: 3,
      title: "6. Refactor code tối ưu",
      desc: "Cải thiện cấu trúc code hiện có để nâng cao hiệu năng, tính dễ bảo trì và loại bỏ code thừa/bẩn.",
      content: `Bạn là Senior Code Reviewer và Refactoring Expert. Hãy rà soát đoạn mã nguồn dưới đây của tôi để:
1. Chỉ ra 3 điểm hạn chế về hiệu năng hoặc khả năng mở rộng trong đoạn code này.
2. Viết lại đoạn code bằng phiên bản tối ưu hơn (Sử dụng đúng design pattern, tối giản hóa câu lệnh điều kiện, tối ưu hóa truy vấn dữ liệu hoặc tận dụng bộ nhớ cache).
3. So sánh hiệu suất ước tính trước và sau khi refactor.

MÃ NGUỒN CẦN REFACTOR:
[Dán mã nguồn của bạn tại đây]`
    },
    {
      level: 3,
      title: "7. Debug & Sửa lỗi logic phức tạp",
      desc: "Đọc log lỗi hệ thống, xác định nguyên nhân và đưa ra phương án sửa đổi code an toàn.",
      content: `Bạn là Debugging Expert. Hệ thống của tôi gặp sự cố và quăng ra log lỗi dưới đây. Hãy:
1. Phân tích và giải thích nguyên nhân gây ra lỗi này dựa trên log và mã nguồn đính kèm.
2. Đưa ra đoạn code sửa đổi chính xác để khắc phục triệt để lỗi này.
3. Đề xuất giải pháp kiểm tra để đảm bảo lỗi này không lặp lại sau khi deploy.

LOG LỖI HỆ THỐNG:
[Dán log lỗi tại đây]

MÃ NGUỒN LIÊN QUAN:
[Dán mã nguồn liên quan đến lỗi tại đây]`
    }
  ]
};

const competencyFrameworks = {
  "all": {
    title: "TOÀN BỘ KHÓA HỌC",
    quote: "Đừng cố gắng học hết mọi thứ, hãy cố gắng thành thạo những thứ mang lại 80% kết quả.",
    levels: [
      { name: "Level 1 (Tập sự)", req: "≥10 bài", desc: "Làm chủ prompt 5W1H & bảo mật cơ bản" },
      { name: "Level 2 (Chuyên viên)", req: "≥30 bài", desc: "Thành thạo ứng dụng nghiệp vụ nâng cao" },
      { name: "Level 3 (Chuyên gia)", req: "55 bài", desc: "Làm chủ workflow AI-first & Claude Code" }
    ],
    levelLimits: [10, 30, 55],
    table: [
      ["1. Nền tảng", "Khái niệm AI, Giao diện workspace, Công thức prompt 5W1H, Ẩn danh dữ liệu an toàn", "Thư viện prompt cá nhân cơ bản và checklist bảo mật"],
      ["2. Thực chiến", "Nghiệp vụ hành chính, email, báo cáo, phân tích tài liệu, lập kế hoạch, kịch bản marketing", "Bộ portfolio 10 sản phẩm thực hành thực tế"],
      ["3. Tối ưu hóa", "Xây dựng workflow vận hành tự động, Tích hợp Claude Code lập trình backend/database", "Một giải pháp web app/script vận hành tự động hóa thực tế"]
    ]
  },
  "public-admin": {
    title: "HÀNH CHÍNH NHÀ NƯỚC",
    quote: "Đảm bảo công việc nhanh nhưng không vi phạm quy định pháp lý hành chính công.",
    levels: [
      { name: "Level 1 (Tập sự)", req: "≥3 bài", desc: "Ẩn danh dữ liệu & prompt cơ bản" },
      { name: "Level 2 (Chuyên viên)", req: "≥15 bài", desc: "Sở hữu bộ 5 Prompt 'tủ' hành chính" },
      { name: "Level 3 (Chuyên gia)", req: "25 bài", desc: "Thiết lập 01 Workflow tự động hóa" }
    ],
    levelLimits: [3, 15, 25],
    table: [
      ["1. Nền tảng", "Ẩn danh dữ liệu, Hiểu nguyên lý LLM, Thiết lập bảo mật", "Checklist bảo mật & Bản danh mục việc nên/không nên giao AI"],
      ["2. Thực chiến", "Prompt Engineering (Công thức), Phân tích văn bản, Soạn thảo văn bản hành chính", "Bộ prompt chuẩn (SOP) cho công văn, báo cáo, tờ trình"],
      ["3. Tối ưu hóa", "Xây dựng Workflow, Claude Co-work, Quản lý dự án AI", "Bản đồ quy trình xử lý công việc tự động (Workflow) 7 ngày"]
    ]
  },
  "office": {
    title: "DÂN VĂN PHÒNG",
    quote: "Biến AI thành trợ lý cá nhân tăng tốc 80% tác vụ lặp lại hằng ngày.",
    levels: [
      { name: "Level 1 (Tập sự)", req: "≥3 bài", desc: "Ẩn danh & viết prompt cơ bản hằng ngày" },
      { name: "Level 2 (Chuyên viên)", req: "≥15 bài", desc: "Sở hữu bộ prompt xử lý email, họp, slide" },
      { name: "Level 3 (Chuyên gia)", req: "27 bài", desc: "Thiết lập workflow tăng hiệu suất cá nhân" }
    ],
    levelLimits: [3, 15, 27],
    table: [
      ["1. Nền tảng", "Ẩn danh dữ liệu, Quét email & tài liệu, Thiết lập môi trường làm việc cá nhân", "Checklist bảo mật cá nhân & Thư mục template prompt"],
      ["2. Thực chiến", "Soạn email, tóm tắt báo cáo, ghi chú họp, lập bảng việc, brainstorm ý tưởng", "SOP xử lý việc tuần & Bộ form email khách hàng"],
      ["3. Tối ưu hóa", "Thiết lập workflow việc cá nhân lặp lại, đo lường năng suất", "Bản đồ phân phối công việc tuần tự động hóa 50%"]
    ]
  },
  "sme-ai-first": {
    title: "LÃNH ĐẠO SME AI-FIRST",
    quote: "Ứng dụng AI để thiết kế workflow tinh gọn, tối ưu chi phí và tăng trưởng quy mô.",
    levels: [
      { name: "Level 1 (Tập sự)", req: "≥5 bài", desc: "Tư duy AI-first & quản trị rủi ro dữ liệu" },
      { name: "Level 2 (Chuyên viên)", req: "≥20 bài", desc: "Thiết lập dự án thử nghiệm (pilot) AI" },
      { name: "Level 3 (Lãnh đạo)", req: "33 bài", desc: "Xây dựng Playbook vận hành AI-first" }
    ],
    levelLimits: [5, 20, 33],
    table: [
      ["1. Nền tảng", "Xây dựng tư duy AI-first, Thiết lập workspace bảo mật, Phân loại việc", "Quy tắc sử dụng AI (AI Governance) tối thiểu cho SME"],
      ["2. Thực chiến", "Thiết kế prompt điều hành, Đọc báo cáo tài chính/sales, Lập kế hoạch marketing", "01 kế hoạch pilot AI 14 ngày cho phòng ban"],
      ["3. Tối ưu hóa", "Thiết kế Playbook vận hành AI-first, Xây kịch bản CSKH tự động, Tối ưu ROI", "Sơ đồ vận hành doanh nghiệp tự động hóa bằng AI"]
    ]
  },
  "code": {
    title: "CLAUDE CODE",
    quote: "Trở thành lập trình viên AI-first, kiểm soát chất lượng và an toàn codebase.",
    levels: [
      { name: "Level 1 (Tập sự)", req: "≥3 bài", desc: "Thiết lập môi trường & giải thích code" },
      { name: "Level 2 (Chuyên viên)", req: "≥10 bài", desc: "Thiết kế API, database & test case bằng AI" },
      { name: "Level 3 (Kiến trúc sư)", req: "18 bài", desc: "Refactor, debug, tối ưu & deploy hoàn chỉnh" }
    ],
    levelLimits: [3, 10, 18],
    table: [
      ["1. Nền tảng", "Cài đặt terminal/IDE, Đọc hiểu kiến trúc repo, Tránh rủi ro lộ API Key", "Tài liệu giải thích kiến trúc codebase hiện tại"],
      ["2. Thực chiến", "Viết API endpoint, Tạo schema DB, Viết Unit Test tự động", "Bộ Test Suite hoàn chỉnh cho một chức năng cụ thể"],
      ["3. Tối ưu hóa", "Refactor hiệu năng code, Sửa lỗi runtime/logic phức tạp, Đóng gói deploy", "01 phiên bản ứng dụng chạy ổn định và tài liệu deploy"]
    ]
  }
};

function renderCompetencyFramework(done, total) {
  const competencyFramework = document.getElementById("competencyFramework");
  if (!competencyFramework) return;

  const currentPath = activePathId;
  const fw = competencyFrameworks[currentPath] || competencyFrameworks["all"];
  const prompts = rolePrompts[currentPath] || rolePrompts["all"];

  const percent = Math.round((done / total) * 100);
  
  const step1Limit = fw.levelLimits[0];
  const step2Limit = fw.levelLimits[1];
  const step3Limit = fw.levelLimits[2];

  const step1Class = done >= step1Limit ? "completed" : "active";
  const step2Class = done >= step2Limit ? "completed" : (done >= step1Limit ? "active" : "");
  const step3Class = done >= step3Limit ? "completed" : (done >= step2Limit ? "active" : "");

  // Khởi tạo activeLevelForPath nếu chưa có
  if (!window.activeLevelForPath) {
    window.activeLevelForPath = {
      "all": 1,
      "public-admin": 1,
      "office": 1,
      "sme-ai-first": 1,
      "code": 1
    };
  }

  // Nếu là lần đầu chuyển sang path mới, tự động chọn level dựa theo tiến độ thực tế
  if (!window.lastActivePathId || window.lastActivePathId !== currentPath) {
    window.lastActivePathId = currentPath;
    if (done >= step3Limit) {
      window.activeLevelForPath[currentPath] = 3;
    } else if (done >= step2Limit) {
      window.activeLevelForPath[currentPath] = 2;
    } else {
      window.activeLevelForPath[currentPath] = 1;
    }
  }

  const selectedLevel = window.activeLevelForPath[currentPath] || 1;
  const filteredPrompts = prompts.filter(p => p.level === selectedLevel);

  // Tính toán phần trăm mốc mục tiêu yêu cầu của level đang xem
  const targetLimit = fw.levelLimits[selectedLevel - 1] || total;
  const targetPercent = Math.min(100, Math.round((targetLimit / total) * 100));

  if (activeAdminPromptIndex >= filteredPrompts.length) {
    activeAdminPromptIndex = 0;
  }
  const activePrompt = filteredPrompts[activeAdminPromptIndex];

  // Đếm số lượng prompt cho mỗi level
  const countL1 = prompts.filter(p => p.level === 1).length;
  const countL2 = prompts.filter(p => p.level === 2).length;
  const countL3 = prompts.filter(p => p.level === 3).length;

  competencyFramework.innerHTML = `
    <div class="competency-container">
      <!-- Thanh tiến độ cấp độ năng lực -->
      <div class="level-progress-wrapper">
        <div class="level-header">
          <h4>🎯 KHUNG TIẾN ĐỘ NĂNG LỰC AI - ${fw.title}</h4>
          <span class="ajay-quote">"${fw.quote}"</span>
        </div>
        <div class="level-steps">
          <div class="level-step ${step1Class} ${selectedLevel === 1 ? 'selected' : ''}" data-level-btn="1" title="Xem bộ prompt của Level 1">
            <div class="step-icon">${done >= step1Limit ? "✓" : "1"}</div>
            <div class="step-info">
              <strong>${fw.levels[0].name}</strong>
              <span>${fw.levels[0].desc} (${fw.levels[0].req})</span>
            </div>
            <span class="level-prompt-badge">${countL1} prompt</span>
          </div>
          <div class="level-step ${step2Class} ${selectedLevel === 2 ? 'selected' : ''}" data-level-btn="2" title="Xem bộ prompt của Level 2">
            <div class="step-icon">${done >= step2Limit ? "✓" : "2"}</div>
            <div class="step-info">
              <strong>${fw.levels[1].name}</strong>
              <span>${fw.levels[1].desc} (${fw.levels[1].req})</span>
            </div>
            <span class="level-prompt-badge">${countL2} prompt</span>
          </div>
          <div class="level-step ${step3Class} ${selectedLevel === 3 ? 'selected' : ''}" data-level-btn="3" title="Xem bộ prompt của Level 3">
            <div class="step-icon">${done >= step3Limit ? "✓" : "3"}</div>
            <div class="step-info">
              <strong>${fw.levels[2].name}</strong>
              <span>${fw.levels[2].desc} (${fw.levels[2].req})</span>
            </div>
            <span class="level-prompt-badge">${countL3} prompt</span>
          </div>
        </div>
        <div class="level-bar-container">
          <div class="level-bar-target" style="width: ${targetPercent}%"></div>
          <div class="level-bar" style="width: ${percent}%"></div>
        </div>
        <div class="level-bar-markers">
          <div class="bar-marker ${done >= step1Limit ? 'reached' : ''} ${selectedLevel === 1 ? 'viewing' : ''}" style="left: ${Math.round((step1Limit / total) * 100)}%">
            <span class="marker-dot"></span>
            <span class="marker-label">L1 (${step1Limit}b)</span>
          </div>
          <div class="bar-marker ${done >= step2Limit ? 'reached' : ''} ${selectedLevel === 2 ? 'viewing' : ''}" style="left: ${Math.round((step2Limit / total) * 100)}%">
            <span class="marker-dot"></span>
            <span class="marker-label">L2 (${step2Limit}b)</span>
          </div>
          <div class="bar-marker ${done >= step3Limit ? 'reached' : ''} ${selectedLevel === 3 ? 'viewing' : ''}" style="left: 100%">
            <span class="marker-dot"></span>
            <span class="marker-label">L3 (${step3Limit}b)</span>
          </div>
        </div>
      </div>

      <!-- Bản đồ Năng lực AI - Thẻ tương tác động -->
      <div class="framework-table-wrapper">
        <h4>📋 Mục tiêu giai đoạn: ${fw.table[selectedLevel - 1][0]}</h4>
        <div class="competency-card-view">
          <div class="comp-card-column">
            <h5>🎯 Kỹ năng cốt lõi (Skills)</h5>
            <p>${fw.table[selectedLevel - 1][1]}</p>
          </div>
          <div class="comp-card-column">
            <h5>🏆 Kết quả đầu ra (Portfolio)</h5>
            <p>${fw.table[selectedLevel - 1][2]}</p>
          </div>
        </div>
      </div>

      <!-- Bộ Prompt Tủ Section -->
      <div class="prompt-vault-section">
        <div class="prompt-vault-header">
          <h4>🗃️ BỘ PROMPT THỰC CHIẾN - LEVEL ${selectedLevel}</h4>
        </div>
        <div class="prompt-tabs">
          ${filteredPrompts.map((p, idx) => `
            <button class="prompt-tab-btn ${idx === activeAdminPromptIndex ? 'active' : ''}" data-prompt-idx="${idx}">
              ${p.title}
            </button>
          `).join("")}
        </div>
        <div class="prompt-content-box">
          ${activePrompt ? `
            <p style="margin: 0 0 8px 0; font-size: 13px; color: var(--color-text-secondary); font-style: italic;">
              ${activePrompt.desc}
            </p>
            <button class="prompt-copy-btn" id="copyPromptBtn">Sao chép</button>
            <pre><code>${activePrompt.content}</code></pre>
          ` : `
            <p style="margin: 0; color: var(--color-text-secondary); font-style: italic; text-align: center; padding: 20px 0;">
              Nội dung prompt cho cấp độ này đang được cập nhật...
            </p>
          `}
        </div>
      </div>
    </div>
  `;

  // Gắn event listeners cho level steps
  const levelSteps = competencyFramework.querySelectorAll(".level-step");
  levelSteps.forEach(step => {
    step.addEventListener("click", (e) => {
      const clickedLevel = parseInt(e.currentTarget.dataset.levelBtn);
      if (clickedLevel) {
        window.activeLevelForPath[currentPath] = clickedLevel;
        activeAdminPromptIndex = 0; // Reset prompt index khi chuyển level
        renderCompetencyFramework(done, total);
      }
    });
  });

  // Gắn event listeners cho tabs và copy button
  const tabs = competencyFramework.querySelectorAll(".prompt-tab-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", (e) => {
      activeAdminPromptIndex = parseInt(e.target.dataset.promptIdx);
      renderCompetencyFramework(done, total);
    });
  });

  const copyBtn = competencyFramework.querySelector("#copyPromptBtn");
  if (copyBtn && activePrompt) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(activePrompt.content).then(() => {
        copyBtn.textContent = "Đã sao chép!";
        copyBtn.style.borderColor = "#00ff66";
        copyBtn.style.color = "#00ff66";
        setTimeout(() => {
          copyBtn.textContent = "Sao chép";
          copyBtn.style.borderColor = "";
          copyBtn.style.color = "";
        }, 2000);
      }).catch(err => {
        console.error("Không thể sao chép: ", err);
      });
    });
  }
}

function renderPaths() {
  const path = getActivePath();
  const visible = getVisibleLessons();
  const done = visible.filter((lesson) => completed.has(lesson.id)).length;
  pathTabs.innerHTML = learningPaths
    .map(
      (item) => `<button class="path-tab ${item.id === activePathId ? "active" : ""}" type="button" data-path="${item.id}">
        <strong>${item.title}</strong>
        <span>${item.lessons ? item.lessons.length : flatLessons.length} bài</span>
      </button>`
    )
    .join("");
  pathSummary.textContent = `${path.audience} · ${visible.length} bài · ${done}/${visible.length} đã xong`;

  // Render Competency Framework dynamically for all paths (including 'all')
  const competencyFramework = document.getElementById("competencyFramework");
  if (competencyFramework) {
    competencyFramework.style.display = "block";
    renderCompetencyFramework(done, visible.length);
  }
}

function renderMilestones() {
  const visible = getVisibleLessons();
  milestoneBoard.innerHTML = modules
    .map((module) => {
      const lessons = visible.filter((lesson) => lesson.moduleId === module.id);
      if (!lessons.length) return "";
      const done = lessons.filter((lesson) => completed.has(lesson.id)).length;
      const percent = Math.round((done / lessons.length) * 100);
      return `<article class="milestone-card">
        <div>
          <span>${module.range}</span>
          <strong>${module.title}</strong>
          <p>${done}/${lessons.length} bài hoàn thành</p>
        </div>
        <div class="milestone-ring" style="--value:${percent}%">${percent}%</div>
      </article>`;
    })
    .join("");
}


function getLessonDisplayIndex(lessonId) {
  const page = Number(lessonId);
  if (page === 1) return "DH1";
  if (page === 2) return "DH2";
  if (page === 3) return "DH3";
  if (page >= 4 && page <= 33) {
    const num = page - 3;
    return num < 10 ? "0" + num : String(num);
  }
  if (page === 34) return "CWDH";
  if (page >= 35 && page <= 44) {
    const num = page - 4;
    return String(num + 30);
  }
  if (page === 45) return "CWTK";
  if (page >= 46 && page <= 55) {
    const num = page - 5;
    return String(num + 40);
  }
  return lessonId;
}

function renderTree() {
  const query = normalizeSearch(searchInput.value);
  const visibleLessons = getVisibleLessons();
  const visibleIds = new Set(visibleLessons.map((lesson) => lesson.id));
  const nextUp = visibleLessons.find((lesson) => !completed.has(lesson.id)) || visibleLessons[0];
  const isPathMode = activePathId !== "all";
  let matchCount = 0;
  treeMap.innerHTML = modules
    .map((module) => {
      const lessons = flatLessons.filter((lesson) => {
        if (lesson.moduleId !== module.id) return false;
        if (!visibleIds.has(lesson.id)) return false;
        if (!query) return true;
        return getSearchText(lesson).includes(query);
      });
      if (!lessons.length) return "";
      matchCount += lessons.length;
      const branchSummary = [...new Set(module.lessons.map(([, , , type]) => branchLabels[type] || type))];

      return `<section class="tree-module" id="module-${module.id}">
        <div class="tree-module-label">
          ${module.title}<br>${module.range}
          <small>${branchSummary.join(" / ")}</small>
        </div>
        <div class="lesson-nodes">
          ${lessons
            .map((lesson) => {
              const order = visibleLessons.findIndex((item) => item.id === lesson.id) + 1;
              return `<button class="lesson-node ${lesson.id === activeLessonId ? "active" : ""} ${completed.has(lesson.id) ? "done" : ""} ${isPathMode ? "path-lesson" : ""} ${nextUp?.id === lesson.id ? "next-up" : ""}" type="button" data-lesson="${lesson.id}">
                <span class="node-index">${getLessonDisplayIndex(lesson.id)}</span>
                <span class="node-title">${lesson.title}</span>
                <span class="node-type">${isPathMode ? `#${order}` : branchLabels[lesson.type] || lesson.type}</span>
              </button>`;
            })
            .join("")}
        </div>
      </section>`;
    })
    .join("");
  if (searchStatus) {
    if (!query) {
      searchStatus.textContent = `Đang hiển thị ${visibleLessons.length} bài trong lộ trình hiện tại`;
    } else if (matchCount) {
      searchStatus.textContent = `Tìm thấy ${matchCount}/${visibleLessons.length} bài. Nhấn Enter để mở kết quả đầu tiên.`;
    } else {
      searchStatus.textContent = "Không tìm thấy bài phù hợp trong lộ trình hiện tại";
    }
  }
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("đ", "d")
    .replaceAll("Đ", "D")
    .toLowerCase()
    .trim();
}

function getSearchText(lesson) {
  const labels = [branchLabels[lesson.type], lesson.moduleTitle, lesson.id, `bai ${Number(lesson.id)}`];
  return normalizeSearch([lesson.title, lesson.summary, lesson.type, ...labels].join(" "));
}

function getSearchMatches() {
  const query = normalizeSearch(searchInput.value);
  if (!query) return [];
  const visibleIds = new Set(getVisibleLessons().map((lesson) => lesson.id));
  return flatLessons.filter((lesson) => visibleIds.has(lesson.id) && getSearchText(lesson).includes(query));
}

function renderProgress() {
  const visible = getVisibleLessons();
  const count = visible.filter((lesson) => completed.has(lesson.id)).length;
  progressLabel.textContent = `${count}/${visible.length}`;
  progressBar.style.width = `${Math.round((count / visible.length) * 100)}%`;
  
  // Show celebration banner if 100% complete
  checkCelebration(count, visible.length);
}

// Variable to store active lesson tab (retains state across lessons)
let activeLessonTab = safeGetLocalStorage("claude-active-lesson-tab", "foundation");

function setupLessonTabs() {
  const tabContainer = document.querySelector(".lesson-tabs");
  if (!tabContainer) return;

  // Set active tab status initially
  const tabs = tabContainer.querySelectorAll(".lesson-tab");
  tabs.forEach((tab) => {
    const tabName = tab.dataset.tab;
    if (tabName === activeLessonTab) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
    } else {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    }
  });

  const panels = document.querySelectorAll(".tab-panel");
  panels.forEach((panel) => {
    if (panel.id === `tabPanel-${activeLessonTab}`) {
      panel.classList.add("active");
    } else {
      panel.classList.remove("active");
    }
  });

  // Attach event listener (if not already attached)
  if (!tabContainer.dataset.listened) {
    tabContainer.dataset.listened = "true";
    tabContainer.addEventListener("click", (event) => {
      const button = event.target.closest(".lesson-tab");
      if (!button) return;

      activeLessonTab = button.dataset.tab;
      safeSetLocalStorage("claude-active-lesson-tab", activeLessonTab);
      
      // Update UI smoothly
      setupLessonTabs();
    });
  }
}

// Global notes vault logic
function loadLessonNote(lessonId) {
  const lessonNotesTextarea = document.getElementById("lessonNotesTextarea");
  const noteSaveStatus = document.getElementById("noteSaveStatus");
  if (!lessonNotesTextarea) return;

  const savedNote = safeGetLocalStorage(`claude-lesson-note-${lessonId}`, "");
  lessonNotesTextarea.value = savedNote;
  
  if (noteSaveStatus) {
    noteSaveStatus.innerHTML = `Đã sẵn sàng`;
    noteSaveStatus.className = "note-save-status";
  }
}

function setupNotesVault(lessonId) {
  const lessonNotesTextarea = document.getElementById("lessonNotesTextarea");
  const noteSaveStatus = document.getElementById("noteSaveStatus");
  if (!lessonNotesTextarea) return;

  // Handle typing & autosave
  lessonNotesTextarea.oninput = () => {
    if (noteSaveStatus) {
      noteSaveStatus.innerHTML = `<i class="dot-blink typing"></i>Đang lưu...`;
      noteSaveStatus.className = "note-save-status typing";
    }

    safeSetLocalStorage(`claude-lesson-note-${lessonId}`, lessonNotesTextarea.value);

    // Subtle feedback lag for natural feel
    if (window.notesSaveTimeout) clearTimeout(window.notesSaveTimeout);
    window.notesSaveTimeout = setTimeout(() => {
      if (noteSaveStatus) {
        noteSaveStatus.innerHTML = `<i class="dot-blink"></i>Đã lưu tự động`;
        noteSaveStatus.className = "note-save-status saved";
      }
    }, 600);
  };
}

async function renderLesson() {
  const lesson = flatLessons.find((item) => item.id === activeLessonId) || flatLessons[0];
  const goals = getLessonGoals(lesson);
  const checklist = [
    `Tôi giải thích được mục tiêu của bài "${lesson.title}".`,
    "Tôi đã xem trang gốc và ghi lại điểm chính.",
    "Tôi đã tạo ít nhất một đầu ra thực hành.",
    "Tôi biết bài tiếp theo cần học là gì.",
  ];

  lessonModule.textContent = `${lesson.moduleTitle} | Trang ${lesson.page}`;
  lessonTitle.textContent = lesson.title;
  lessonMeta.innerHTML = renderLessonMeta(lesson);
  lessonGoals.innerHTML = goals.map((goal) => `<li>${goal}</li>`).join("");
  lessonFlowList.innerHTML = getLessonFlow(lesson).map((step) => `<li>${step}</li>`).join("");
  lessonDeliverables.innerHTML = renderDeliverables(lesson);
  ipoBox.innerHTML = renderIPO(lesson);
  caseStudies.innerHTML = renderCaseStudies(lesson);
  workflowCards.innerHTML = renderWorkflowCards(lesson);
  lessonPractice.textContent = buildPracticePrompt(lesson);
  videoPack.innerHTML = renderVideoPack(lesson);
  tutorBox.innerHTML = renderTutorBox(lesson);
  quizBox.innerHTML = renderQuiz(lesson);
  assignmentBox.innerHTML = renderAssignment(lesson);
  lessonChecklist.innerHTML = checklist.map((item) => `<li>${item}</li>`).join("");
  qualityGate.innerHTML = renderQualityGate();
  completeBtn.textContent = completed.has(lesson.id) ? "Bỏ đánh dấu" : "Đánh dấu xong";

  // Check locking status
  const isPremium = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  const isLocked = !isPremium && parseInt(lesson.id, 10) > 5;

  if (isLocked) {
    pageImage.src = "assets/locked-placeholder.png"; // Placeholder path
    pageImage.alt = "Nội dung Premium đã bị khóa";
    sourceLink.href = "#";
    sourceLink.innerHTML = "🔒 Đăng nhập Premium để xem trang gốc";
    sourceLink.onclick = (e) => {
      e.preventDefault();
      if (typeof showPaymentModal === "function") showPaymentModal();
    };

    pageSummary.innerHTML = `
      <div class="locked-card" style="padding: 24px; text-align: center; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px dashed rgba(255,255,255,0.1);">
        <span style="font-size: 32px; display: block; margin-bottom: 12px;">🔒</span>
        <h4 style="color: #f5c84c; margin: 0 0 8px 0;">Nội dung Premium bị khóa</h4>
        <p style="color: #a1a1aa; font-size: 11px; line-height: 1.4; margin: 0 0 16px 0;">Vui lòng đăng nhập và nâng cấp tài khoản Premium để xem tài liệu OCR và mở khóa 55 bài giảng đầy đủ.</p>
        <button class="btn btn-primary btn-glowing-gold" style="padding: 6px 12px; font-size: 11px;" onclick="if(typeof showPaymentModal === 'function') showPaymentModal();">Kích hoạt ngay</button>
      </div>
    `;
    
    if (bonusAgentContent) {
      bonusAgentContent.innerHTML = `
        <div style="text-align: center; padding: 30px; color: #a1a1aa; font-size: 13px;">
          <span>🔒 Hãy kích hoạt Premium để mở khóa Bonus Agent Skills nâng cao cho bài học này.</span>
        </div>
      `;
    }
  } else {
    pageImage.src = lesson.image;
    pageImage.alt = `Trang ${lesson.page}: ${lesson.title}`;
    sourceLink.href = lesson.image;
    sourceLink.innerHTML = "Mở trang gốc";
    sourceLink.onclick = null;

    // Load dynamic premium contents if Supabase is active
    if (typeof fetchPremiumLessonContent === "function") {
      const premiumData = await fetchPremiumLessonContent(lesson.id);
      if (premiumData) {
        // If Supabase returned custom OCR text, render using it
        pageSummary.innerHTML = renderPageSummary(lesson, premiumData.ocr_content);
        if (premiumData.bonus_agent_content) {
          if (bonusAgentContent) bonusAgentContent.innerHTML = premiumData.bonus_agent_content;
        } else {
          if (typeof renderBonusAgent === "function") renderBonusAgent(lesson);
        }
      } else {
        pageSummary.innerHTML = renderPageSummary(lesson);
        if (typeof renderBonusAgent === "function") renderBonusAgent(lesson);
      }
    } else {
      pageSummary.innerHTML = renderPageSummary(lesson);
      if (typeof renderBonusAgent === "function") renderBonusAgent(lesson);
    }
  }

  safeSetLocalStorage("claude-active-lesson", lesson.id);
  updatePrevNextState();
  renderAgentToolkit(lesson);
  
  // Set up and synchronize lesson tabs smoothly
  setupLessonTabs();

  // Load study notes dynamically
  loadLessonNote(lesson.id);
  setupNotesVault(lesson.id);
}

function getLessonGoals(lesson) {
  const baseGoals = lessonSpecificGoals[lesson.id] || typeGoals[lesson.type] || typeGoals.task;
  const profile = getActiveRoleProfile();
  const scenario = getLessonScenario(lesson);
  return [
    `Nắm đúng trọng tâm bài "${lesson.title}": ${lesson.summary}`,
    `Áp dụng vào tình huống "${scenario.title}" cho nhóm ${scenario.audience}.`,
    `Tạo được đầu ra cụ thể: ${scenario.output}`,
    `Biết kiểm tra chất lượng bài này bằng tiêu chí: ${baseGoals[0] || profile.outcome}`,
    `[${profile.title}] ${profile.goal}`,
  ];
}

function renderLessonMeta(lesson) {
  const path = getActivePath();
  let html = `<span>${branchLabels[lesson.type] || lesson.type}</span><span>20-35 phút</span><span>${path.title}</span>`;
  if (lesson.id === "10") {
    html += `<a href="../Claude_Fable5_Mythos5_TechBrief.md" target="_blank" class="tech-update-badge" style="background: rgba(139, 92, 246, 0.2); border: 1px solid #7c3aed; color: #a78bfa; padding: 2px 8px; border-radius: 99px; font-size: 11px; text-decoration: none; font-weight: 700; margin-left: 8px; display: inline-flex; align-items: center; gap: 4px;">⚡ Cập nhật Fable 5 & Mythos 5 (Tháng 6/2026)</a>`;
  }
  return html;
}

function renderPageSummary(lesson, ocrTextOverride) {
  const scenario = getLessonScenario(lesson, activeWorkflowRoleId);
  const profile = getWorkflowRoleProfile();
  const apps = getApplications(lesson);
  
  // Format the 3 applications with roles beautifully
  const appItems = apps.map((app) => {
    // app is [audience, title, context, output]
    return `
      <div class="summary-app-item">
        <strong>${escapeHtml(app[0])}</strong>
        <p>${escapeHtml(app[1])}</p>
      </div>
    `;
  }).join("");

  const summaryText = ocrTextOverride || lesson.summary;

  return `<article class="summary-slide">
    <div class="summary-kicker">Trang ${lesson.page} · ${escapeHtml(branchLabels[lesson.type] || lesson.type)}</div>
    <h3>${escapeHtml(lesson.title)}</h3>
    <p class="summary-desc" style="white-space: pre-line;">${escapeHtml(summaryText)}</p>
    
    <div class="summary-columns">
      <section class="summary-context-card">
        <span>Bối cảnh thực thi</span>
        <div class="context-detail">
          <strong>Vai trò:</strong> ${escapeHtml(profile.title)}<br>
          <strong>Tình huống:</strong> ${escapeHtml(scenario.title)}<br>
          <strong>Dữ liệu:</strong> ${escapeHtml(scenario.context.length > 80 ? scenario.context.slice(0, 80) + '...' : scenario.context)}
        </div>
      </section>
      
      <section class="summary-output-card">
        <span>Sản phẩm kỳ vọng</span>
        <div class="output-detail">
          <strong>Đầu ra mong muốn:</strong><br>
          <div class="output-text-highlight">${escapeHtml(scenario.output)}</div>
        </div>
      </section>
    </div>

    <div class="summary-app-paths">
      <span>3 hướng áp dụng thực chiến</span>
      <div class="summary-app-grid">
        ${appItems}
      </div>
    </div>
    
    <div class="summary-warning">
      <strong>⚠️ AN TOÀN DỮ LIỆU:</strong> Luôn kiểm chứng nguồn, số liệu, căn cứ pháp lý và ẩn danh thông tin nhạy cảm trước khi dùng.
    </div>
  </article>`;
}

function getLessonFlow(lesson) {
  const baseFlow = flowByType[lesson.type] || lessonFlow;
  const profile = getActiveRoleProfile();
  const scenario = getLessonScenario(lesson);
  const roleFlow = getRoleLessonFlow(lesson, scenario, profile);
  return [
    ...roleFlow,
    `Đối chiếu lại với nguyên tắc bài học: ${baseFlow[0] || lesson.summary}`,
    `Chốt phiên bản cuối, ghi lại prompt tốt nhất và điều kiện dùng lại cho lần sau.`,
  ];
}

function getRoleLessonFlow(lesson, scenario, profile) {
  if (activePathId === "public-admin") {
    return [
      `Xác định bài "${lesson.title}" sẽ hỗ trợ việc hành chính nào: ${scenario.title}.`,
      `Chuẩn bị văn bản/hồ sơ đã ẩn danh, tách rõ dữ kiện gốc, giả định và phần cần xin ý kiến.`,
      `Dùng Claude tạo bản nháp theo giọng văn hành chính, có mục đích, căn cứ cần kiểm chứng và bước xử lý tiếp theo.`,
      `Rà lại thẩm quyền, số liệu, căn cứ pháp lý, tên đơn vị và thông tin nhạy cảm trước khi dùng.`,
      `Biến kết quả thành ${scenario.output}`,
    ];
  }

  if (activePathId === "office") {
    return [
      `Chọn một việc văn phòng thật liên quan đến "${lesson.title}": ${scenario.title}.`,
      `Gom đầu vào tối thiểu: người nhận, mục tiêu, dữ liệu, deadline, tone-of-voice và format mong muốn.`,
      `Chạy prompt để tạo bản nháp nhanh, sau đó yêu cầu AI tự bắt lỗi thiếu ý, sai giọng văn hoặc thiếu action items.`,
      `Chỉnh lại bản cuối để có thể gửi cho đồng nghiệp, khách hàng hoặc quản lý mà không cần giải thích thêm.`,
      `Lưu thành template dùng lại: prompt, mẫu đầu ra, checklist và ví dụ đã hoàn thiện.`,
    ];
  }

  if (activePathId === "sme-ai-first") {
    return [
      `Gắn bài "${lesson.title}" với một quy trình có tác động kinh doanh: ${scenario.title}.`,
      `Xác định owner, dữ liệu đầu vào, chi phí/thời gian hiện tại, điểm nghẽn và KPI cần cải thiện.`,
      `Dùng AI phác thảo workflow trước/sau, vai trò con người, bước phê duyệt và rủi ro vận hành.`,
      `Chọn một pilot 7-14 ngày đủ nhỏ để thử nhưng đủ rõ để đo kết quả.`,
      `Kết thúc bằng quyết định: triển khai, hoãn, bỏ, hoặc cần bổ sung dữ liệu trước khi làm.`,
    ];
  }

  if (activePathId === "code") {
    return [
      `Chuyển bài "${lesson.title}" thành một task kỹ thuật nhỏ, có file liên quan và tiêu chí hoàn thành rõ.`,
      `Đọc cấu trúc project/log/lỗi trước khi yêu cầu AI sửa, không mở rộng phạm vi nếu chưa có lý do.`,
      `Yêu cầu AI đề xuất phương án, rủi ro, test case rồi mới sửa từng phần.`,
      `Chạy kiểm tra sau khi sửa: dữ liệu đúng, dữ liệu sai, lỗi biên, bảo mật và hiệu năng nếu liên quan.`,
      `Ghi lại diff, test đã chạy, rủi ro còn lại và bước deploy hoặc rollback.`,
    ];
  }

  return [
    `Đọc bài "${lesson.title}" và chọn một tình huống thật để áp dụng: ${scenario.title}.`,
    profile.flow,
    `Tạo bản nháp đầu tiên bằng AI, sau đó yêu cầu AI tự phản biện theo tiêu chí của bài.`,
    `Sửa bản nháp thành một đầu ra có thể dùng, có owner, deadline và tiêu chí nghiệm thu.`,
    `Lưu lại phiên bản prompt tốt nhất và lỗi cần tránh cho lần sau.`,
  ];
}

function buildPracticePrompt(lesson) {
  const profile = getWorkflowRoleProfile();
  const scenario = getLessonScenario(lesson, activeWorkflowRoleId);
  return `Prompt thực hành:
Tôi đang học bài "${lesson.title}" trong module "${lesson.moduleTitle}".
Nhánh năng lực: ${branchLabels[lesson.type] || lesson.type}.
Vai trò áp dụng: ${profile.title}.
Tình huống cần xử lý: ${scenario.title}.
Bối cảnh: ${scenario.context}
Mục tiêu đầu ra: ${scenario.output}

Hãy hướng dẫn tôi áp dụng bài này vào đúng bối cảnh trên. Trả về theo cấu trúc:
1. Mục tiêu công việc cụ thể.
2. Dữ liệu đầu vào cần chuẩn bị và phần phải ẩn danh.
3. Các bước làm theo workflow.
4. Prompt mẫu có thể copy dùng ngay.
5. Biểu mẫu đầu ra cuối cùng.
6. Checklist kiểm tra trước khi dùng.
7. Lỗi thường gặp và cách sửa.

Yêu cầu bắt buộc: không bịa căn cứ pháp lý, số liệu hoặc nguồn; phần quan trọng phải ghi rõ "cần kiểm chứng".`;
}

function buildCleanSourceText(lesson) {
  const goals = getLessonGoals(lesson);
  const deliverables = getLessonDeliverables(lesson);
  return `<section>
    <h4>${escapeHtml(lesson.title)}</h4>
    <p>${escapeHtml(lesson.summary)}</p>
  </section>
  <section>
    <h5>Kiến thức trọng tâm</h5>
    <ul>${goals.map((goal) => `<li>${escapeHtml(goal)}</li>`).join("")}</ul>
  </section>
  <section>
    <h5>Ứng dụng theo bài</h5>
    <ul>
      ${getApplications(lesson).map((app) => `<li>${escapeHtml(app[1])}: ${escapeHtml(app[2])}</li>`).join("")}
    </ul>
  </section>
  <section>
    <h5>Sản phẩm sau bài học</h5>
    <ul>${deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
  </section>`;
}

function renderDeliverables(lesson) {
  return getLessonDeliverables(lesson).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function getLessonDeliverables(lesson) {
  const baseItems = deliverablesByType[lesson.type] || deliverablesByType.task;
  const scenario = getLessonScenario(lesson);
  const profile = getActiveRoleProfile();
  return [
    `${scenario.output}`,
    `Prompt hoàn chỉnh cho bài "${lesson.title}" trong tình huống "${scenario.title}".`,
    `Checklist nghiệm thu riêng cho bài này: dữ liệu đầu vào, format, người duyệt, rủi ro và bước tiếp theo.`,
    `${baseItems[0]}`,
    `[${profile.title}] ${profile.output}`,
  ];
}

function renderIPO(lesson) {
  const goals = getLessonGoals(lesson);
  const deliverables = getLessonDeliverables(lesson);
  const profile = getActiveRoleProfile();
  const scenario = getLessonScenario(lesson);
  const inputItems = [
    `Trang gốc số ${lesson.page} và bản đọc sạch của bài "${lesson.title}".`,
    `Tình huống áp dụng: ${scenario.title}.`,
    `Bối cảnh thực tế: ${scenario.context}`,
    "Dữ liệu/tài liệu đã ẩn danh nếu có yếu tố nhạy cảm.",
    `[${profile.title}] ${profile.input}`,
  ];
  const processItems = [
    `Dùng bài "${lesson.title}" để chuyển bối cảnh thành yêu cầu AI rõ vai trò, dữ liệu, ràng buộc và format.`,
    `Tạo bản nháp hướng tới đầu ra: ${scenario.output}`,
    "Rà lại bằng quality gate: nguồn, dữ liệu, kiểm chứng, người duyệt và bước tiếp theo.",
    `[${profile.title}] ${profile.process}`,
  ];
  return `
    <article class="ipo-card">
      <span>Input</span>
      <ul>${inputItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
    <article class="ipo-card">
      <span>Process</span>
      <ul>${processItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
    <article class="ipo-card">
      <span>Output</span>
      <ul>${deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>
    <article class="ipo-card">
      <span>Learning outcome</span>
      <ul>${goals.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </article>`;
}

function buildVideoScript(lesson) {
  if (customVideoScripts[lesson.id]) {
    return customVideoScripts[lesson.id];
  }
  const goals = getLessonGoals(lesson);
  const deliverables = getLessonDeliverables(lesson);
  return `VIDEO SCRIPT / NOTEBOOKLM BRIEF
Bài: ${lesson.title}
Module: ${lesson.moduleTitle}
Nhánh năng lực: ${branchLabels[lesson.type] || lesson.type}
Thời lượng đề xuất: 4-6 phút

1. Hook mở đầu:
Trong bài này, người học sẽ biết cách áp dụng "${lesson.title}" vào công việc thật, đặc biệt cho hành chính nhà nước và dân văn phòng.

2. Mục tiêu học:
${goals.map((goal, index) => `${index + 1}. ${goal}`).join("\n")}

3. Giải thích ngắn:
${lesson.summary}

4. Case study:
- Hành chính nhà nước: ${getApplications(lesson)[0]?.[1] || "Áp dụng vào xử lý hồ sơ/tài liệu"}.
- Dân văn phòng: ${getApplications(lesson)[1]?.[1] || "Áp dụng vào công việc văn phòng hằng ngày"}.
- Lãnh đạo SME AI-first: ${getApplications(lesson)[2]?.[1] || "Áp dụng vào vận hành và tăng trưởng doanh nghiệp"}.

5. Thực hành:
Người học chọn một tình huống thật, nhập dữ liệu đã ẩn danh, chạy prompt, rồi rà lại kết quả theo quality gate.

6. Đầu ra cần nộp:
${deliverables.map((item, index) => `${index + 1}. ${item}`).join("\n")}

7. Kết bài:
Nhắc người học lưu prompt tốt nhất, ghi lại lỗi thường gặp và đánh dấu hoàn thành bài học.`;
}

function renderVideoPack(lesson) {
  const script = buildVideoScript(lesson);
  // Fetch from localStorage (admin custom override) or default preset config database
  const savedUrl = safeGetLocalStorage(`claude-lesson-notebooklm-${lesson.id}`, defaultNotebooklmUrls[lesson.id] || "");
  
  let vaultHtml = "";
  if (savedUrl) {
    vaultHtml = `
      <div class="notebooklm-vault active">
        <span class="vault-badge">📻 BÀI GIẢNG ÂM THANH SẴN SÀNG</span>
        <div class="vault-meta">
          <strong>Nghe tóm tắt và thảo luận sâu về bài học được phát triển bởi AI thông minh</strong>
        </div>
        <div class="vault-actions">
          <a class="listen-cert-btn" href="${escapeHtml(savedUrl)}" target="_blank" rel="noreferrer">📻 Nghe Audio bài học</a>
          ${isAdminMode ? `<button class="btn btn-ghost delete-notebooklm-btn" type="button" style="margin-left: 8px;">Xóa liên kết (Admin)</button>` : ""}
        </div>
      </div>
    `;
  } else if (isAdminMode) {
    // Show input box only in Admin Mode
    vaultHtml = `
      <div class="notebooklm-vault">
        <span class="vault-badge info">🔗 TÍCH HỢP AUDIO OVERVIEW (CHẾ ĐỘ ADMIN)</span>
        <div class="vault-meta">
          <p>Bạn đã tạo audio/video từ NotebookLM cho bài này? Hãy dán link chia sẻ để tích hợp trực tiếp vào bài học cho mọi người dùng:</p>
        </div>
        <div class="vault-input-group">
          <input type="text" class="notebooklm-input" placeholder="Dán link chia sẻ NotebookLM tại đây...">
          <button class="btn btn-primary save-notebooklm-btn" type="button">Lưu link</button>
        </div>
      </div>
    `;
  }

  // If there's an audio link, collapse the generator brief under a neat accordion. Otherwise, show it open by default.
  if (savedUrl) {
    return `
      ${vaultHtml}
      <div class="video-brief-accordion" style="margin-top: 14px;">
        <button class="brief-toggle-btn" type="button" aria-expanded="false">
          <span>📄 Xem kịch bản tạo video/audio (Brief Source)</span>
          <span class="toggle-icon">▼</span>
        </button>
        <div class="brief-content" style="display: none;">
          <div class="tool-card video-card-notebooklm" style="margin-top: 0; border: none; background: transparent; box-shadow: none; padding: 6px 0 0;">
            <div>
              <span>NotebookLM ready</span>
              <strong>Brief tạo video/audio cho bài "${escapeHtml(lesson.title)}"</strong>
              <p>Dùng khối này làm nguồn cho NotebookLM để sinh audio deep dive hoặc kịch bản video.</p>
            </div>
            <button class="btn btn-outline copy-btn" type="button" data-copy="${escapeHtml(script)}">Copy brief</button>
            <pre>${escapeHtml(script)}</pre>
          </div>
        </div>
      </div>
    `;
  } else {
    // If no link, and not admin, we just show the generator brief by default (so they can see the brief if they want to study/copy it)
    return `
      <div class="tool-card video-card-notebooklm">
        <div>
          <span>NotebookLM ready</span>
          <strong>Brief tạo video/audio cho bài "${escapeHtml(lesson.title)}"</strong>
          <p>Dùng khối này làm nguồn cho NotebookLM hoặc công cụ tạo video để sinh audio overview, video giải thích, Q&A hoặc bản tóm tắt.</p>
        </div>
        <button class="btn btn-outline copy-btn" type="button" data-copy="${escapeHtml(script)}">Copy brief</button>
        <pre>${escapeHtml(script)}</pre>
      </div>
      ${vaultHtml}
    `;
  }
}

function buildCourseGptsPrompt() {
  const roadmap = modules
    .map((module) => {
      const lessons = module.lessons
        .map(([code, , title]) => `- Bài ${code}: ${title}`)
        .join("\n");
      return `${module.title} (${module.range})\n${lessons}`;
    })
    .join("\n\n");

  return `TÊN GPTs:
Claude Mastery Coach - Trợ giảng tinh thông 55 bài Claude AI

MÔ TẢ NGẮN:
Trợ giảng chuyên sâu cho khóa Claude Mastery 55 bài, hỗ trợ học viên hiểu bài, luyện prompt, áp dụng vào công việc hành chính nhà nước, dân văn phòng và lãnh đạo SME AI-first.

VAI TRÒ:
Bạn là trợ giảng cao cấp của khóa học "Claude Mastery - 55 bài ứng dụng thực chiến". Bạn hiểu toàn bộ lộ trình 55 bài, biết dẫn người học đi đúng thứ tự, biết biến từng bài thành đầu ra thực tế, và luôn giữ nguyên tắc: AI tạo bản nháp, con người kiểm chứng và chịu trách nhiệm cuối cùng.

ĐỐI TƯỢNG NGƯỜI HỌC:
1. Hành chính nhà nước: xử lý công văn, báo cáo, kế hoạch, tổng hợp văn bản, rà soát nội dung.
2. Dân văn phòng: email, biên bản họp, báo cáo, slide, quản lý công việc, phân tích dữ liệu.
3. Lãnh đạo SME AI-first: tư duy AI-first, tối ưu vận hành, xây workflow, phân quyền, đo hiệu suất, ứng dụng Claude Code.

NHIỆM VỤ CHÍNH:
1. Hỏi nhanh 3 câu để xác định vai trò, mục tiêu và dữ liệu công việc của người học.
2. Giải thích bài học theo 3 mức: dễ hiểu, thực chiến, chuyên sâu.
3. Dẫn người học học đúng lộ trình 55 bài, không nhảy cóc khi thiếu nền tảng.
4. Tạo prompt mẫu phù hợp từng bối cảnh công việc.
5. Hướng dẫn người học tạo đầu ra theo chuẩn IPO: Input - Process - Output.
6. Chấm bài nộp bằng rubric: bám nguồn, rõ mục tiêu, đúng cấu trúc, dùng được trong việc thật, an toàn dữ liệu.
7. Gợi ý cách biến kết quả thành template, SOP, checklist, báo cáo, slide hoặc workflow dùng lại.
8. Nhắc người học kiểm chứng số liệu, căn cứ pháp lý, thông tin nhạy cảm và quyết định quan trọng.

TÀI LIỆU NÊN UPLOAD VÀO KNOWLEDGE CỦA GPTs:
1. File notebooklm-video-prompts-55-bai.md.
2. 55 ảnh bài học từ 1.png đến 55.png hoặc bộ ảnh page_001.png đến page_055.png.
3. Nếu có, upload thêm transcript video NotebookLM sau khi tạo xong từng bài.
4. Nếu dùng cho nội bộ cơ quan/doanh nghiệp, upload thêm quy định, mẫu biểu, SOP hoặc văn phong nội bộ đã được phép chia sẻ.

NGUYÊN TẮC TRẢ LỜI:
- Trả lời bằng tiếng Việt rõ ràng, trực tiếp, thực tế.
- Ưu tiên đầu ra có thể dùng ngay trong công việc.
- Không bịa luật, văn bản, số liệu, nguồn dẫn hoặc kết luận chuyên môn.
- Nếu thiếu dữ liệu, phải hỏi lại hoặc ghi rõ giả định.
- Luôn tách rõ: dữ kiện người học cung cấp, phần AI suy luận, phần cần con người kiểm chứng.
- Không chỉ giảng lý thuyết; mỗi câu trả lời nên có bước hành động tiếp theo.

QUY TRÌNH KHI NGƯỜI HỌC HỎI:
1. Xác định người học đang ở bài nào trong 55 bài.
2. Xác định người học thuộc nhóm nào: hành chính, văn phòng, SME hoặc kỹ thuật/code.
3. Tóm tắt mục tiêu bài trong 3-5 dòng.
4. Đưa ví dụ sát công việc.
5. Tạo prompt thực hành.
6. Đưa checklist kiểm chứng.
7. Đề xuất bài tiếp theo trong lộ trình.

LỘ TRÌNH 55 BÀI:
${roadmap}

CÂU MỞ ĐẦU NÊN HỎI NGƯỜI HỌC:
Bạn đang học bài số mấy, thuộc nhóm công việc nào, và muốn tạo đầu ra gì sau buổi học này?`;
}

function renderTutorBox() {
  const prompt = buildCourseGptsPrompt();
  return `<div class="tool-card tutor-card">
    <div>
      <span>Custom GPTs prompt</span>
      <strong>Tạo một GPTs tinh thông toàn bộ khóa 55 bài</strong>
      <p>Dùng prompt này để tạo GPTs/Custom GPT làm trợ giảng trung tâm cho toàn khóa: hỏi đáp, kèm thực hành, chấm bài, dẫn lộ trình và kiểm soát chất lượng đầu ra.</p>
    </div>
    <button class="btn btn-outline copy-btn" type="button" data-copy="${escapeHtml(prompt)}">Copy GPTs prompt</button>
    <pre>${escapeHtml(prompt)}</pre>
  </div>`;
}

function renderQualityGate() {
  return qualityGates
    .map(
      ([label, text]) => `<div class="quality-item">
        <span>${label}</span>
        <p>${text}</p>
      </div>`
    )
    .join("");
}

function renderQuiz(lesson) {
  const questions = quizData[lesson.type] || quizData.task;
  return questions.map((q, qIndex) => {
    const optionsHtml = q.options.map((opt, optIndex) => `
      <label class="quiz-option-label">
        <input type="radio" name="quiz-${lesson.id}-${qIndex}" value="${optIndex}" data-correct="${q.answer === optIndex}">
        <span class="quiz-option-text">${escapeHtml(opt)}</span>
      </label>
    `).join("");

    return `
      <article class="quiz-card-interactive" data-question-index="${qIndex}">
        <h4 class="quiz-question">Câu ${qIndex + 1}: ${escapeHtml(q.q)}</h4>
        <div class="quiz-options">
          ${optionsHtml}
        </div>
        <div class="quiz-feedback-box" style="display: none;">
          <span class="feedback-badge"></span>
          <p class="feedback-explain">${escapeHtml(q.explain)}</p>
        </div>
        <button class="btn btn-outline quiz-check-btn" type="button">Kiểm tra đáp án</button>
      </article>
    `;
  }).join("");
}

function renderAssignment(lesson) {
  const path = getActivePath();
  return `<div class="assignment-brief">
    <strong>Bài nộp</strong>
    <p>Tạo một đầu ra hoàn chỉnh cho bài "${lesson.title}" trong bối cảnh "${path.title}". Đầu ra phải dùng được sau khi đã ẩn danh dữ liệu nhạy cảm và kiểm chứng thông tin quan trọng.</p>
  </div>
  <div class="rubric-grid">
    ${rubricRows
      .map(
        ([label, text]) => `<div class="rubric-item">
          <span>${label}</span>
          <p>${text}</p>
        </div>`
      )
      .join("")}
  </div>`;
}

function buildAgentPrompts(lesson) {
  const path = getActivePath();
  const goals = getLessonGoals(lesson);
  const deliverables = getLessonDeliverables(lesson);
  const lessonContext = `THÔNG TIN BÀI HỌC
- Bài: ${lesson.id} - ${lesson.title}
- Module: ${lesson.moduleTitle}
- Lộ trình: ${path.title}

Mục tiêu chính:
${goals.map((goal) => `- ${goal}`).join("\n")}

Đầu ra cần có:
${deliverables.map((item) => `- ${item}`).join("\n")}

⚡ LƯU Ý THẾ HỆ 5 (Fable 5 / Mythos 5):
- Prompt không cần giải thích dài dòng bước cơ bản — tập trung Output Schema và bối cảnh nghiệp vụ.
- Hạn chế lạm dụng bullet points — ưu tiên văn xuôi tự nhiên (prose).
- Nếu chạm vùng nhạy cảm, kết quả có thể đến từ Opus 4.8 qua Fallback Routing.`;

  return [
    {
      label: "Agent học bài",
      title: "Biến bài này thành buổi học có thực hành",
      body: `VAI TRÒ: AI Tutor cá nhân.
MỤC TIÊU: Dạy tôi hiểu bài, hỏi đúng bối cảnh, rồi dẫn tôi làm một bài thực hành nhỏ.
PHONG CÁCH: Ngắn gọn, từng bước, hỏi trước khi kết luận.

${lessonContext}

Hãy hướng dẫn tôi học bài này theo 5 bước:
1. Giải thích ngắn, dễ hiểu, không lan man.
2. Hỏi tôi 3 câu để lấy bối cảnh công việc thật.
3. Tạo một bài thực hành dùng được ngay.
4. Chấm đầu ra theo tiêu chí: bám nguồn, rõ cấu trúc, có khả năng áp dụng, an toàn dữ liệu.
5. Đề xuất bước học tiếp theo trong lộ trình.

Nếu thiếu thông tin, hãy hỏi lại trước khi tạo bản cuối.`,
    },
    {
      label: "Agent làm việc",
      title: "Áp dụng bài học vào công việc thật",
      body: `VAI TRÒ: Chuyên gia thiết kế workflow AI cho công việc.
MỤC TIÊU: Biến bài học thành quy trình làm việc thật, có bước, người phụ trách, rủi ro và KPI.
PHONG CÁCH: Thực dụng, ưu tiên đầu ra có thể dùng ngay.

${lessonContext}

Tình huống tôi muốn áp dụng: [mô tả công việc/dự án của tôi].

Yêu cầu đầu ra:
- Bản đồ quy trình hiện tại.
- Điểm có thể dùng AI để giảm thao tác hoặc tăng chất lượng.
- Prompt mẫu để chạy việc.
- Checklist kiểm tra trước khi dùng kết quả.
- Rủi ro dữ liệu, pháp lý hoặc nghiệp vụ cần tránh.
- Kế hoạch pilot trong 7 ngày.`,
    },
    {
      label: "Agent code",
      title: "Dùng Codex/Antigravity để sửa hoặc tạo project",
      body: `Hãy làm như một coding agent cẩn trọng trong workspace hiện tại.

Bối cảnh học liên quan:
${lessonContext}

Nhiệm vụ kỹ thuật: [mô tả app/script/file cần tạo hoặc sửa].

Quy tắc làm việc:
- Đọc cấu trúc project và file liên quan trước khi sửa.
- Giữ phạm vi thay đổi nhỏ, không refactor ngoài yêu cầu.
- Không xóa file, reset git, đổi cấu hình deploy hoặc đụng dữ liệu nhạy cảm nếu chưa hỏi.
- Sau khi sửa, chạy kiểm tra phù hợp và báo rõ kết quả.
- Nếu là web/app, khởi động local server và đưa URL để mở.`,
    },
    {
      label: "Agent kiểm tra",
      title: "Review đầu ra trước khi dùng",
      body: `VAI TRÒ: Reviewer chất lượng đầu ra AI.
MỤC TIÊU: Bắt lỗi mơ hồ, thiếu căn cứ, sai format, rủi ro dữ liệu và đề xuất bản sửa tốt hơn.
PHONG CÁCH: Thẳng, cụ thể, ưu tiên lỗi quan trọng trước.

${lessonContext}

Đầu ra cần review:
[dán đầu ra của tôi]

Kiểm tra theo thứ tự:
1. Có bám đúng mục tiêu bài học không?
2. Có phần nào mơ hồ, thiếu dữ liệu, hoặc dễ hiểu sai không?
3. Có rủi ro lộ thông tin, sai pháp lý, sai số liệu hoặc suy luận quá mức không?
4. Cần sửa câu chữ, cấu trúc, format thế nào?
5. Viết lại phiên bản tốt hơn nhưng vẫn giữ ý chính của tôi.`,
    },
  ];
}

function renderAgentToolkit(lesson) {
  if (!agentToolkit) return;
  const isPremium = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  if (!isPremium) {
    agentToolkit.innerHTML = `
      <div class="locked-card" style="grid-column: 1 / -1; padding: 32px; text-align: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 8px;">
        <span style="font-size: 32px; display: block; margin-bottom: 12px;">🔒</span>
        <h4 style="color: #f5c84c; margin: 0 0 8px 0;">AI Agent Toolkit (Premium Only)</h4>
        <p style="color: #a1a1aa; font-size: 11px; max-width: 450px; margin: 0 auto 16px auto; line-height: 1.4;">Bộ lệnh prompt chuyên nghiệp kết nối tác tử AI theo bài học đang bị khóa. Vui lòng nâng cấp tài khoản Premium để mở khóa và sao chép.</p>
        <button class="btn btn-primary btn-glowing-gold" style="padding: 6px 12px; font-size: 11px;" onclick="if(typeof showPaymentModal === 'function') showPaymentModal();">Kích hoạt ngay</button>
      </div>
    `;
    return;
  }
  agentToolkit.innerHTML = buildAgentPrompts(lesson)
    .map(
      (prompt) => `<article class="agent-card">
        <div>
          <span>${escapeHtml(prompt.label)}</span>
          <strong>${escapeHtml(prompt.title)}</strong>
        </div>
        <button class="btn btn-outline copy-btn" type="button" data-copy="${escapeHtml(prompt.body)}">Copy prompt</button>
        <pre>${escapeHtml(prompt.body)}</pre>
      </article>`
    )
    .join("");
}

function renderProStack() {
  if (!proTabs || !proContent) return;
  const isPremium = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  if (!isPremium) {
    proTabs.innerHTML = "";
    proContent.innerHTML = `
      <div class="locked-card" style="padding: 40px 24px; text-align: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 8px; width: 100%;">
        <span style="font-size: 36px; display: block; margin-bottom: 12px;">🔒</span>
        <h3 style="color: #f5c84c; margin: 0 0 8px 0;">Claude Code Pro Stack (Premium Only)</h3>
        <p style="color: #a1a1aa; font-size: 13px; max-width: 500px; margin: 0 auto 20px auto; line-height: 1.5;">Bộ 6 repo mẫu cao cấp giúp Claude Code lập kế hoạch, viết spec, quản lý ngữ cảnh và lập trình chuyên nghiệp.</p>
        <button class="btn btn-primary btn-glowing-gold" style="padding: 8px 16px; font-size: 12px;" onclick="if(typeof showPaymentModal === 'function') showPaymentModal();">Kích hoạt mở khóa toàn bộ</button>
      </div>
    `;
    return;
  }
  const activeTool = proTools.find((tool) => tool.id === activeProToolId) || proTools[0];
  activeProToolId = activeTool.id;

  proTabs.innerHTML = proTools
    .map(
      (tool) => `<button class="pro-tab ${tool.id === activeProToolId ? "active" : ""}" type="button" role="tab" aria-selected="${tool.id === activeProToolId}" data-pro-tool="${tool.id}">
        <span>${tool.index}</span>
        <strong>${escapeHtml(tool.name)}</strong>
        <small>${escapeHtml(tool.label)}</small>
      </button>`
    )
    .join("");

  proContent.innerHTML = `<article class="pro-detail">
    <div class="pro-hero">
      <div class="pro-icon" aria-hidden="true">${activeTool.icon}</div>
      <div>
        <span class="eyebrow">Repo ${activeTool.index} / Pro capability</span>
        <h3>${escapeHtml(activeTool.name)} <em>${escapeHtml(activeTool.label)}</em></h3>
        <p>${escapeHtml(activeTool.tagline)}</p>
        <a class="github-link" href="${escapeHtml(activeTool.githubUrl)}" target="_blank" rel="noreferrer">Mở GitHub repo</a>
      </div>
    </div>
    <div class="pro-grid">
      <section>
        <h4>Điểm mạnh</h4>
        <ul>${activeTool.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
      <section>
        <h4>Lý tưởng cho</h4>
        <p>${escapeHtml(activeTool.useFor)}</p>
      </section>
      <section>
        <h4>Cài đặt / kiểm tra</h4>
        <code>${escapeHtml(activeTool.install)}</code>
      </section>
      <section>
        <h4>Đầu ra cao cấp</h4>
        <p>${escapeHtml(activeTool.proOutcome)}</p>
      </section>
    </div>
    <div class="pro-warning">
      <strong>Nguyên tắc an toàn:</strong>
      <span>${escapeHtml(activeTool.caution)}</span>
    </div>
  </article>
  <article class="pro-summary">
    <strong>Thông điệp khóa học</strong>
    <p>6 repo này không thay thế tư duy kỹ thuật. Chúng giúp người học chuyển từ “AI chạy lệnh” sang “AI làm việc có kế hoạch”: biết hỏi lại, lập spec, chia vai trò, thiết kế, ghi nhớ, test và giữ kỷ luật code.</p>
  </article>`;
}

function renderSkillsHandbook() {
  if (!skillsTabs || !skillsContent) return;
  const isPremium = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  if (!isPremium) {
    skillsTabs.innerHTML = "";
    skillsContent.innerHTML = `
      <div class="locked-card" style="padding: 40px 24px; text-align: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 8px; width: 100%;">
        <span style="font-size: 36px; display: block; margin-bottom: 12px;">🔒</span>
        <h3 style="color: #f5c84c; margin: 0 0 8px 0;">Cẩm nang Agent Skills nâng cao (Premium Only)</h3>
        <p style="color: #a1a1aa; font-size: 13px; max-width: 500px; margin: 0 auto 20px auto; line-height: 1.5;">Hướng dẫn chi tiết cách thiết kế, phát triển và đóng gói Agent Skills chuyên nghiệp trên Claude CLI & SDK.</p>
        <button class="btn btn-primary btn-glowing-gold" style="padding: 8px 16px; font-size: 12px;" onclick="if(typeof showPaymentModal === 'function') showPaymentModal();">Kích hoạt mở khóa toàn bộ</button>
      </div>
    `;
    return;
  }
  const activeChapter = skillsHandbook.find((chap) => chap.id === activeSkillChapterId) || skillsHandbook[0];
  activeSkillChapterId = activeChapter.id;

  skillsTabs.innerHTML = skillsHandbook
    .map(
      (chap) => `<button class="skills-tab ${chap.id === activeSkillChapterId ? "active" : ""}" type="button" role="tab" aria-selected="${chap.id === activeSkillChapterId}" data-skill-chapter="${chap.id}">
        <span>${chap.index}</span>
        <strong>${escapeHtml(chap.name)}</strong>
        <small>${escapeHtml(chap.label)}</small>
      </button>`
    )
    .join("");

  skillsContent.innerHTML = `<article class="skills-detail">
    <div class="skills-hero">
      <div class="skills-icon" aria-hidden="true">${activeChapter.icon}</div>
      <div>
        <span class="eyebrow">Chương ${activeChapter.index} / Advanced Skills</span>
        <h3>${escapeHtml(activeChapter.name)} <em>${escapeHtml(activeChapter.label)}</em></h3>
        <p>${escapeHtml(activeChapter.tagline)}</p>
      </div>
    </div>
    <div class="skills-body">
      ${activeChapter.content}
    </div>
  </article>
  <article class="skills-summary">
    <h4>Tóm tắt cốt lõi</h4>
    ${activeChapter.summaryItems.map((item) => `<div class="skills-summary-item">
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.desc)}</p>
    </div>`).join("")}
    <div class="skills-summary-item" style="margin-top: auto; padding-top: 12px; border-top: 1px solid var(--color-border);">
      <a class="btn btn-outline" href="../Cam_Nang_Xay_Dung_Skill_Claude_Updated.md" target="_blank" rel="noreferrer" style="width: 100%; text-align: center; display: inline-block;">Mở bản Markdown cập nhật</a>
    </div>
  </article>`;
}

function renderBonusAgent(lesson) {
  if (!bonusAgentContent) return;
  
  let contentHtml = "";
  const lessonId = lesson.id;
  const lessonType = lesson.type;
  
  // Custom bonus generation based on lesson types & specific IDs
  if (lessonType === "code") {
    contentHtml = `
      <div class="bonus-agent-grid">
        <div class="bonus-agent-card">
          <div class="bonus-badge">Claude Code CLI Spec</div>
          <h4>🛠️ Cấu hình Skill tự động kiểm thử độc lập</h4>
          <p>Đối với các bài code, bạn có thể tạo một file <code>.claude/skills/test-runner/SKILL.md</code> sử dụng chế độ <strong>Context Forking</strong> để chạy sub-agent tự động viết test và debug độc lập.</p>
          <pre><code>---
name: test-runner
description: Runs unit tests for changed files. Use when a code file is modified or user asks to "run test".
allowed-tools:
  - "Bash(npm run test)"
  - "Read"
context: fork
agent: tester-subagent
---</code><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.previousSibling.innerText); this.textContent='Đã copy'; setTimeout(()=>this.textContent='Copy', 1200);">Copy</button></pre>
        </div>
        <div class="bonus-agent-card">
          <div class="bonus-badge">FrontierCode Benchmark</div>
          <h4>⚡ Kỷ lục di trú 50 triệu dòng của Stripe</h4>
          <p>Fable 5 đạt điểm benchmark cao nhất về độ tự trị. Áp dụng quy tắc Karpathy (chia nhỏ file, chạy test sau mỗi 10 dòng code mới) để tránh agent bị lẩn quẩn và tiết kiệm token.</p>
        </div>
      </div>
    `;
  } else if (lessonType === "workflow" || lessonId === "35" || lessonId === "37") {
    contentHtml = `
      <div class="bonus-agent-grid">
        <div class="bonus-agent-card">
          <div class="bonus-badge">Claude Cowork Desktop</div>
          <h4>🤖 Tự động hóa với Chrome & Excel Beta Agents</h4>
          <p>Tận dụng tính năng <strong>computer use</strong> của Claude Cowork để lập kế hoạch dài hạn. Ví dụ, điều hướng Chrome Agent duyệt trang quản lý, Excel Agent tổng hợp báo cáo và lưu trực tiếp vào thư mục cục bộ.</p>
          <pre><code>---
name: monthly-report-sync
description: Collects metrics from web and syncs with Excel. Use when user asks to "sync monthly report".
allowed-tools:
  - "WebFetch"
  - "Bash(python sync_excel.py)"
disable-model-invocation: true
user-invocable: true
---</code><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.previousSibling.innerText); this.textContent='Đã copy'; setTimeout(()=>this.textContent='Copy', 1200);">Copy</button></pre>
        </div>
        <div class="bonus-agent-card">
          <div class="bonus-badge">Tác vụ theo lịch</div>
          <h4>📅 Lên lịch chạy ngầm định kỳ</h4>
          <p>Bạn có thể cấu hình Task Scheduler cho Cowork chạy định kỳ (Ví dụ: 8h sáng thứ Hai) để tự động quét Gmail chưa đọc và Asana task rồi chuẩn bị sẵn file Markdown tổng hợp trên Desktop.</p>
        </div>
      </div>
    `;
  } else if (lessonType === "prompt" || lessonId === "11") {
    contentHtml = `
      <div class="bonus-agent-grid">
        <div class="bonus-agent-card">
          <div class="bonus-badge">Prompt Gen 5 (Fable/Mythos)</div>
          <h4>✍️ Nguyên tắc viết prompt văn xuôi (Prose)</h4>
          <p>Các mô hình Claude thế hệ 5 ưu tiên văn phong tự nhiên, súc tích hơn là các định dạng bullet points rập khuôn. Khi viết prompt từ chối lịch thiệp hoặc giải thích logic, hãy yêu cầu Claude viết dạng văn xuôi tự nhiên.</p>
          <div class="info-card" style="margin-top: 10px; border-left-color: var(--path-gold);">
            <strong>Quy tắc Output Schema:</strong> Thay vì ghi "hãy định dạng đẹp", hãy ghi rõ JSON schema hoặc Markdown structure mong muốn.
          </div>
        </div>
        <div class="bonus-agent-card">
          <div class="bonus-badge">YAML Frontmatter Spec</div>
          <h4>🚫 Tránh prompt injection & Lỗi cú pháp Allowed Tools</h4>
          <p>Khi định nghĩa <code>allowed-tools</code>, không dùng khoảng trắng phân tách. Luôn dùng dấu phẩy hoặc mảng YAML chuẩn. Tránh bọc chuỗi bằng các thẻ XML <code>&lt; &gt;</code> trong frontmatter.</p>
        </div>
      </div>
    `;
  } else if (lessonId === "04" || lessonId === "08" || lessonId === "09" || lessonId === "10") {
    contentHtml = `
      <div class="bonus-agent-grid">
        <div class="bonus-agent-card">
          <div class="bonus-badge">Safety Fallback Routing</div>
          <h4>🔒 Cơ chế tự định tuyến an toàn của Fable 5</h4>
          <p>Fable 5 sở hữu bộ lọc an toàn tích hợp sẵn. Khi người dùng hỏi về các chủ đề cực kỳ nhạy cảm (an ninh mạng, sinh hóa học), bộ định tuyến sẽ tự động chuyển tiếp truy vấn sang mô hình **Opus 4.8** để xử lý thay vì từ chối cứng nhắc.</p>
        </div>
        <div class="bonus-agent-card">
          <div class="bonus-badge">Model API Strings</div>
          <h4>📡 Model Strings API chính thức</h4>
          <p>Sử dụng các model string sau khi gọi qua API hoặc SDK:</p>
          <ul style="margin-top: 8px; padding-left: 20px;">
            <li><code>claude-fable-5</code> (Mạnh nhất, thương mại)</li>
            <li><code>claude-opus-4-8</code> (Siêu suy luận & bảo mật)</li>
            <li><code>claude-sonnet-4-6</code> (Cân bằng tốc độ/hiệu năng)</li>
            <li><code>claude-haiku-4-5-20251001</code> (Siêu nhanh)</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    contentHtml = `
      <div class="bonus-agent-grid">
        <div class="bonus-agent-card">
          <div class="bonus-badge">Đóng gói Kỹ năng (Agent Skill)</div>
          <h4>📦 Tự động hóa bài học này thành một Kỹ năng</h4>
          <p>Bạn có thể đóng gói bối cảnh và sản phẩm đầu ra của bài học <strong>"${lesson.title}"</strong> thành một file <code>SKILL.md</code> để Claude tự động sử dụng trong công việc hàng ngày của bạn.</p>
          <pre><code>---
name: skill-${lesson.id}
description: Handles tasks related to ${lesson.title}. Use when user asks for ${lesson.summary.toLowerCase()}.
disable-model-invocation: false
user-invocable: true
---</code><button class="prompt-copy-btn" onclick="navigator.clipboard.writeText(this.previousSibling.innerText); this.textContent='Đã copy'; setTimeout(()=>this.textContent='Copy', 1200);">Copy</button></pre>
        </div>
        <div class="bonus-agent-card">
          <div class="bonus-badge">Mẹo thực hành tốt</div>
          <h4>💡 Progressive Disclosure</h4>
          <p>Đặt tài liệu hướng dẫn nâng cao của bài này vào thư mục <code>references/</code>. Claude sẽ chỉ đọc nó khi thực sự có tác vụ yêu cầu, giúp bạn tiết kiệm 90% chi phí token trong quá trình học và làm việc.</p>
        </div>
      </div>
    `;
  }

  bonusAgentContent.innerHTML = contentHtml;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCaseStudies(lesson) {
  const apps = getApplications(lesson);
  return apps
    .map(
      ([audience, title, context, output]) => `<article class="case-card">
        <span>${audience}</span>
        <strong>${title}</strong>
        <p>${context}</p>
        <em>Đầu ra: ${output}</em>
      </article>`
    )
    .join("");
}

function renderWorkflowCards(lesson) {
  const cards = [
    ["public-admin", "Hành chính nhà nước", workflowTemplates.publicAdmin],
    ["office", "Dân văn phòng", workflowTemplates.office],
    ["sme-ai-first", "Lãnh đạo SME AI-first", workflowTemplates.smeLeader],
  ];
  const workflowPrompt = buildWorkflowPrompt(lesson);
  return `
    ${cards
      .map(
        ([id, label, steps]) => `<button class="workflow-card ${id === activeWorkflowRoleId ? "active" : ""}" type="button" data-workflow-role="${id}">
          <span>${label}</span>
          <ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        </button>`
      )
      .join("")}
    <article class="workflow-card prompt-card">
      <span>Prompt mẫu</span>
      <pre>${workflowPrompt}</pre>
    </article>
  `;
}

function buildWorkflowPrompt(lesson) {
  const profile = getWorkflowRoleProfile();
  const scenario = getLessonScenario(lesson, activeWorkflowRoleId);
  const roleInstructions = {
    "public-admin": `Vai trò: chuyên viên/nhân sự hành chính nhà nước làm việc cẩn trọng với văn bản, hồ sơ và quy trình phê duyệt.
Nhiệm vụ: áp dụng bài "${lesson.title}" để xử lý tình huống "${scenario.title}".
Yêu cầu đầu ra: bản nháp có mục tiêu, dữ liệu đầu vào đã ẩn danh, phần căn cứ cần kiểm chứng, bước xử lý, người phụ trách, rủi ro và checklist trước khi trình/duyệt.`,
    office: `Vai trò: nhân sự văn phòng cần tăng năng suất nhưng vẫn giữ chất lượng đầu ra.
Nhiệm vụ: áp dụng bài "${lesson.title}" để xử lý tình huống "${scenario.title}".
Yêu cầu đầu ra: bản nháp/tài liệu/template dùng được ngay, có tone phù hợp, deadline, người nhận, action items, checklist kiểm tra và phiên bản prompt lưu lại.`,
    "sme-ai-first": `Vai trò: lãnh đạo SME có tư duy AI-first.
Nhiệm vụ: áp dụng bài "${lesson.title}" để xử lý tình huống "${scenario.title}".
Yêu cầu đầu ra: bản đồ quy trình, cơ hội AI hóa, owner, dữ liệu cần có, rủi ro, KPI, ROI sơ bộ và kế hoạch pilot 7-14 ngày.`,
  };
  return `Mẫu prompt workflow:
${roleInstructions[activeWorkflowRoleId] || roleInstructions["public-admin"]}
Bối cảnh chi tiết: ${scenario.context}
Đầu ra mong muốn: ${scenario.output}
Nguyên tắc: AI chỉ tạo bản nháp; con người kiểm chứng số liệu, căn cứ, dữ liệu nhạy cảm và quyết định cuối cùng.`;
}

function getApplications(lesson) {
  const base = typeApplications[lesson.type] || typeApplications.task;
  const sme = smeApplicationsByType[lesson.type] || smeApplicationsByType.task;
  return [...base, ["Lãnh đạo SME AI-first", ...sme]];
}

function setActiveLesson(id) {
  activeLessonId = id;
  if (typeof hideDashboard === "function") {
    hideDashboard();
  }
  renderTree();
  renderLesson();
}

function updatePrevNextState() {
  const visible = getVisibleLessons();
  const index = visible.findIndex((lesson) => lesson.id === activeLessonId);
  prevBtn.disabled = index <= 0;
  nextBtn.disabled = index < 0 || index >= visible.length - 1;
}

function ensureActiveLessonVisible() {
  const visible = getVisibleLessons();
  if (!visible.some((lesson) => lesson.id === activeLessonId)) {
    activeLessonId = visible[0]?.id || "01";
  }
}

function saveCompleted() {
  safeSetLocalStorage("claude-completed-lessons", JSON.stringify([...completed]));
}

function checkCelebration(count, total) {
  const banner = document.getElementById("celebrationBanner");
  if (!banner) return;

  if (count > 0 && count === total) {
    const path = getActivePath();
    banner.style.display = "block";
    banner.innerHTML = `
      <article class="celebration-card">
        <div class="celebration-glow"></div>
        <span class="celebration-badge">🏆 TỐT NGHIỆP LỘ TRÌNH</span>
        <h3>Chúc mừng bạn đã hoàn thành 100% lộ trình: ${escapeHtml(path.title)}!</h3>
        <p>Bạn đã hoàn thành xuất sắc ${count}/${total} bài học thực chiến. Hãy điền tên của bạn dưới đây để nhận chứng nhận tốt nghiệp chính thức từ Claude Mastery!</p>
        
        <div class="celebration-actions">
          <input type="text" id="certStudentName" class="cert-input" placeholder="Nhập Họ và Tên của bạn..." value="${safeGetLocalStorage("claude-student-name", "")}">
          <button id="generateCertBtn" class="btn btn-primary" type="button">Tạo & Tải Chứng nhận</button>
        </div>
        <canvas id="certCanvas" width="800" height="560" style="display:none;"></canvas>
        <div id="certPreviewContainer" class="cert-preview-container" style="display: none;">
          <img id="certPreviewImg" src="" alt="Chứng nhận tốt nghiệp của bạn">
          <small>Nhấp chuột phải vào ảnh trên và chọn "Lưu hình ảnh thành..." nếu việc tải xuống tự động bị chặn.</small>
        </div>
      </article>
    `;
    
    // Attach listener for certificate generation
    const genBtn = document.getElementById("generateCertBtn");
    const nameInput = document.getElementById("certStudentName");
    const previewContainer = document.getElementById("certPreviewContainer");
    const previewImg = document.getElementById("certPreviewImg");
    
    if (genBtn && nameInput) {
      genBtn.onclick = () => {
        const studentName = nameInput.value.trim();
        if (!studentName) {
          alert("Vui lòng điền họ và tên của bạn!");
          return;
        }
        safeSetLocalStorage("claude-student-name", studentName);
        
        // Draw to canvas
        drawCertificate(studentName, path.title);
        
        // Generate download
        const canvas = document.getElementById("certCanvas");
        const dataUrl = canvas.toDataURL("image/png");
        
        // Show preview
        previewImg.src = dataUrl;
        previewContainer.style.display = "block";
        
        // Trigger auto-download
        const link = document.createElement("a");
        link.download = `Claude-Mastery-Certificate-${studentName.replace(/\s+/g, '-')}.png`;
        link.href = dataUrl;
        link.click();
        
        genBtn.textContent = "✓ Đã tải xuống";
        setTimeout(() => {
          genBtn.textContent = "Tạo & Tải lại Chứng nhận";
        }, 3000);
      };
    }
  } else {
    banner.style.display = "none";
    banner.innerHTML = "";
  }
}

function drawCertificate(studentName, pathTitle) {
  const canvas = document.getElementById("certCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  
  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "#05080f";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Decorative border (gold)
  ctx.strokeStyle = "#f5c84c";
  ctx.lineWidth = 10;
  ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

  ctx.strokeStyle = "#ffffff11";
  ctx.lineWidth = 1;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  // Title "CHỨNG NHẬN HOÀN THÀNH"
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 34px 'Inter', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("CHỨNG NHẬN TỐT NGHIỆP", canvas.width / 2, 100);

  // Subtitle
  ctx.fillStyle = "#999999";
  ctx.font = "italic 16px 'Inter', sans-serif";
  ctx.fillText("Chứng chỉ này được trao tặng cho", canvas.width / 2, 160);

  // Student Name
  ctx.fillStyle = "#f5c84c";
  ctx.font = "bold 38px 'Inter', sans-serif";
  ctx.fillText(studentName.toUpperCase(), canvas.width / 2, 230);

  // Text
  ctx.fillStyle = "#f9fafb";
  ctx.font = "16px 'Inter', sans-serif";
  ctx.fillText("Vì đã xuất sắc hoàn thành xuất sắc lộ trình đào tạo ứng dụng AI", canvas.width / 2, 300);
  
  ctx.fillStyle = "#f5c84c";
  ctx.font = "bold 18px 'Inter', sans-serif";
  ctx.fillText(`LỘ TRÌNH: ${pathTitle.toUpperCase()}`, canvas.width / 2, 340);

  ctx.fillStyle = "#999999";
  ctx.font = "14px 'Inter', sans-serif";
  ctx.fillText("Làm chủ năng lực lập kế hoạch, prompt thực chiến và workflow tự động hóa cùng Claude AI", canvas.width / 2, 380);

  // Date & Signature lines
  const dateStr = new Date().toLocaleDateString("vi-VN");
  
  // Date
  ctx.fillStyle = "#ffffff";
  ctx.font = "14px 'Inter', sans-serif";
  ctx.fillText(`Ngày cấp: ${dateStr}`, canvas.width / 2, 440);

  // Seal / Stamp
  ctx.fillStyle = "rgba(245, 200, 76, 0.08)";
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 440, 50, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(245, 200, 76, 0.35)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, 440, 46, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = "#f5c84c";
  ctx.font = "bold 11px 'Inter', sans-serif";
  ctx.fillText("ALPHA AI", canvas.width / 2, 435);
  ctx.fillText("VERIFIED", canvas.width / 2, 452);

  // Footer / Authority
  ctx.fillStyle = "#f5c84c";
  ctx.font = "bold 14px 'Inter', sans-serif";
  ctx.fillText("TRUNGVT - CLAUDE MASTERY COACH", canvas.width / 2, 510);
}

/* ==========================================================================
   STUDENT DASHBOARD CONTROLLER & VIEWS
   ========================================================================== */
function logTrace(msg) {
  try {
    const traces = JSON.parse(localStorage.getItem("debug-traces") || "[]");
    traces.push(new Date().toISOString().split("T")[1] + ": " + msg);
    localStorage.setItem("debug-traces", JSON.stringify(traces));
  } catch (e) {}
}

// Render debug traces from previous runs if any (only if debug mode is active)
try {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('debug') === 'true') {
    localStorage.setItem("show-debug-traces", "true");
  } else if (urlParams.get('debug') === 'false') {
    localStorage.removeItem("show-debug-traces");
  }
  
  const showDebug = localStorage.getItem("show-debug-traces") === "true";
  const traces = JSON.parse(localStorage.getItem("debug-traces") || "[]");
  if (showDebug && traces.length > 0) {
    const overlay = document.createElement("div");
    overlay.id = "debugTraceOverlay";
    overlay.style.cssText = "position:fixed;top:10px;right:10px;z-index:999999;background:rgba(0,0,0,0.95);color:#00ff66;font-family:monospace;font-size:11px;padding:10px;border:1px solid #00ff66;max-height:80vh;width:400px;overflow-y:auto;pointer-events:auto;box-shadow:0 0 10px rgba(0,255,102,0.5);";
    overlay.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #00ff66;padding-bottom:4px;margin-bottom:8px;">
        <h4 style="margin:0;color:#00ff66;">Debug Traces (${traces.length}):</h4>
        <button onclick="document.getElementById('debugTraceOverlay').remove(); localStorage.removeItem('show-debug-traces');" style="background:transparent;border:none;color:#ff3333;font-weight:bold;cursor:pointer;padding:2px 6px;font-size:12px;">[X] Đóng</button>
      </div>
      ${traces.map(t => `<div style="margin-bottom:4px;white-space:pre-wrap;">${t}</div>`).join("")}
    `;
    document.documentElement.appendChild(overlay);
  }
} catch(e) {}

// Initialize/Reset traces
try {
  localStorage.setItem("debug-traces", "[]");
} catch(e) {}

let isDashboardActive = false;
let dashboardTab = "profile"; // "profile" | "courses" | "resources" | "settings"

function showDashboard() {
  console.log("DB_TRACE: showDashboard start");
  logTrace("showDashboard start");
  const session = (typeof window.getCurrentSession === "function") ? window.getCurrentSession() : null;
  console.log("DB_TRACE: showDashboard session fetched: " + (!!session));
  logTrace("showDashboard session fetched: " + (!!session));
  if (!session) {
    alert("Vui lòng đăng nhập tài khoản để xem trang cá nhân!");
    return;
  }

  isDashboardActive = true;
  console.log("DB_TRACE: showDashboard setting isDashboardActive = true");
  logTrace("showDashboard isDashboardActive set to true");

  // Hide landing / lesson layout components
  console.log("DB_TRACE: showDashboard hiding elements start");
  logTrace("showDashboard hiding elements start");
  document.querySelector(".hero")?.setAttribute("style", "display: none !important;");
  console.log("DB_TRACE: showDashboard hero hidden");
  const pathPanel = document.querySelector(".path-panel");
  if (pathPanel) pathPanel.style.display = "none";
  console.log("DB_TRACE: showDashboard pathPanel hidden");
  const workspace = document.querySelector(".workspace");
  if (workspace) workspace.style.display = "none";
  console.log("DB_TRACE: showDashboard workspace hidden");
  const agentPanel = document.querySelector(".agent-panel");
  if (agentPanel) agentPanel.style.display = "none";
  console.log("DB_TRACE: showDashboard agentPanel hidden");
  const proPanel = document.querySelector(".pro-panel");
  if (proPanel) proPanel.style.display = "none";
  console.log("DB_TRACE: showDashboard proPanel hidden");
  const skillsPanel = document.getElementById("skillsPanel");
  if (skillsPanel) skillsPanel.style.display = "none";
  console.log("DB_TRACE: showDashboard skillsPanel hidden");
  logTrace("showDashboard hiding elements end");

  // Show account dashboard section
  const dashboardSec = document.getElementById("accountDashboard");
  console.log("DB_TRACE: showDashboard accountDashboard found: " + (!!dashboardSec));
  if (dashboardSec) {
    dashboardSec.style.display = "flex";
  }
  console.log("DB_TRACE: showDashboard accountDashboard displayed");
  logTrace("showDashboard dashboardSec displayed");

  console.log("DB_TRACE: showDashboard calling renderDashboard");
  logTrace("showDashboard calling renderDashboard");
  renderDashboard();
  console.log("DB_TRACE: showDashboard renderDashboard finished");
  logTrace("showDashboard renderDashboard finished");
}

function hideDashboard() {
  logTrace("hideDashboard start");
  isDashboardActive = false;

  // Hide account dashboard section
  const dashboardSec = document.getElementById("accountDashboard");
  if (dashboardSec) {
    dashboardSec.style.display = "none";
  }

  // Restore landing / lesson layout components
  document.querySelector(".hero")?.removeAttribute("style");
  const pathPanel = document.querySelector(".path-panel");
  if (pathPanel) pathPanel.removeAttribute("style");
  const workspace = document.querySelector(".workspace");
  if (workspace) workspace.removeAttribute("style");
  const agentPanel = document.querySelector(".agent-panel");
  if (agentPanel) agentPanel.removeAttribute("style");
  const proPanel = document.querySelector(".pro-panel");
  if (proPanel) proPanel.removeAttribute("style");
  const skillsPanel = document.getElementById("skillsPanel");
  if (skillsPanel) skillsPanel.removeAttribute("style");

  // Re-run normal UI state update
  updateAll();
  logTrace("hideDashboard finished");
}

// Expose navigation globally for sidebar calls
window.showDashboard = showDashboard;
window.hideDashboard = hideDashboard;

function renderDashboard() {
  console.log("DB_TRACE: renderDashboard start");
  logTrace("renderDashboard start");
  const container = document.getElementById("accountDashboard");
  if (!container) {
    console.log("DB_TRACE: renderDashboard container not found");
    logTrace("renderDashboard container not found");
    return;
  }

  const session = (typeof window.getCurrentSession === "function") ? window.getCurrentSession() : null;
  const profile = (typeof window.getCurrentUserProfile === "function") ? window.getCurrentUserProfile() : null;
  console.log("DB_TRACE: renderDashboard session/profile fetched: ", { session: !!session, profile: !!profile });

  if (!session) {
    logTrace("renderDashboard no session");
    container.innerHTML = "";
    return;
  }

  const email = session.user.email;
  const isPremium = (typeof window.checkPremiumStatus === "function") ? window.checkPremiumStatus() : false;
  logTrace("renderDashboard variables fetched: email = " + email + ", isPremium = " + isPremium);

  // Format joined date
  const joinedDate = session.user.created_at ? new Date(session.user.created_at) : new Date();
  const joinedStr = `tháng ${joinedDate.getMonth() + 1} năm ${joinedDate.getFullYear()}`;

  // Get display name or default to email prefix
  const profileName = (profile && profile.full_name) || email.split("@")[0];
  const initialLetter = profileName.charAt(0).toUpperCase();
  const avatarUrl = profile?.avatar_url;
  const avatarHTML = avatarUrl 
    ? `<img src="${avatarUrl}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
    : initialLetter;

  const tabs = [
    { id: "profile", label: "👤 Hồ sơ" },
    { id: "courses", label: "📚 Khóa học" },
    { id: "resources", label: "📁 Tài nguyên" },
    { id: "settings", label: "⚙️ Cài đặt" }
  ];

  let tabsHTML = tabs.map(tab => `
    <button class="dashboard-tab-trigger ${dashboardTab === tab.id ? 'active' : ''}" data-dash-tab="${tab.id}">
      ${tab.label}
    </button>
  `).join("");

  let panelHTML = "";
  if (dashboardTab === "profile") {
    panelHTML = `
      <div class="dashboard-panel-card">
        <h4 class="dashboard-panel-title">Thông tin cá nhân</h4>
        
        <!-- Ảnh đại diện và Upload -->
        <div class="avatar-upload-container" style="display: flex; align-items: center; margin-bottom: 24px; gap: 16px;">
          <div class="avatar-preview-box" id="avatarPreviewBox" style="width: 80px; height: 80px; border-radius: 50%; background: rgba(255,255,255,0.05); border: 2px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: bold; overflow: hidden; position: relative;">
            ${profile?.avatar_url ? `<img src="${profile.avatar_url}" style="width:100%;height:100%;object-fit:cover;">` : initialLetter}
          </div>
          <div class="avatar-upload-actions">
            <button class="dashboard-save-btn" id="selectAvatarBtn" type="button" style="padding: 6px 12px; font-size: 13px; margin: 0; width: auto;">Chọn ảnh đại diện</button>
            <input type="file" id="avatarFileInput" accept="image/*" style="display: none;">
            <p style="margin: 6px 0 0; font-size: 11px; color: #a1a1aa;">Định dạng PNG, JPG. Dung lượng tối đa 2MB.</p>
          </div>
        </div>

        <div class="dashboard-form-stack">
          <div class="dashboard-form-group">
            <label>Họ và tên</label>
            <input type="text" id="dbFullName" value="${profile?.full_name || ''}" placeholder="Chưa cập nhật họ tên">
          </div>
          <div class="dashboard-form-group">
            <label>Địa chỉ Email</label>
            <input type="email" value="${email}" disabled>
          </div>
          <div class="dashboard-form-group">
            <label>Trạng thái tài khoản</label>
            <div>
              <span class="dashboard-status-badge">✓ Đã xác minh</span>
            </div>
          </div>
          <div class="dashboard-form-group">
            <label>Thành viên từ</label>
            <input type="text" value="${joinedStr}" disabled>
          </div>
          <button class="dashboard-save-btn" id="dbSaveProfileBtn">Cập nhật thông tin</button>
          <div id="dbProfileStatusMsg" style="margin-top: 8px; font-size: 13px; display: none;"></div>
        </div>
      </div>
    `;
  } else if (dashboardTab === "courses") {
    const totalLessons = 55;
    const completedCount = completed ? completed.size : 0;
    const progressPercent = Math.round((completedCount / totalLessons) * 100);

    panelHTML = `
      <div class="dashboard-panel-card">
        <h4 class="dashboard-panel-title">Khóa học của bạn</h4>
        <div class="dashboard-courses-grid">
          
          <div class="dashboard-course-card active">
            <span class="course-card-badge active">Đang học</span>
            <div>
              <h4>Claude Mastery: Tự học Claude A-Z trong 50 poster</h4>
              <p>Lộ trình từ nền tảng prompt, thiết kế workflow, tối ưu kỹ năng cộng tác đến lập trình nâng cao với Claude Code và terminal agents.</p>
            </div>
            <div>
              <div class="course-progress-container">
                <div class="course-progress-info">
                  <span>Tiến độ học</span>
                  <strong>${completedCount}/${totalLessons} bài (${progressPercent}%)</strong>
                </div>
                <div class="course-progress-track">
                  <div class="course-progress-fill-bar" style="width: ${progressPercent}%;"></div>
                </div>
              </div>
              <button class="course-action-trigger" id="resumeLearningBtn">
                🚀 Học tiếp
              </button>
            </div>
          </div>
          
          <div class="dashboard-course-card">
            <span class="course-card-badge future">Sắp ra mắt</span>
            <div>
              <h4>Claude Code & Agentic Coding Advanced</h4>
              <p>Chuyên sâu phát triển phần mềm, xây dựng công cụ tùy chỉnh (custom skills), tích hợp API và vận hành robot code tự động.</p>
            </div>
            <div>
              <button class="course-action-trigger" disabled style="opacity: 0.6; cursor: not-allowed;">
                🔒 Chưa mở đăng ký
              </button>
            </div>
          </div>

          <div class="dashboard-course-card">
            <span class="course-card-badge future">Sắp ra mắt</span>
            <div>
              <h4>AI-First Business Automation with Claude & Zapier</h4>
              <p>Xây dựng hệ thống tự động hóa văn phòng và kinh doanh sử dụng các mô hình ngôn ngữ lớn làm lõi điều phối công việc.</p>
            </div>
            <div>
              <button class="course-action-trigger" disabled style="opacity: 0.6; cursor: not-allowed;">
                🔒 Chưa mở đăng ký
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  } else if (dashboardTab === "resources") {
    panelHTML = `
      <div class="dashboard-panel-card ${!isPremium ? 'resources-locked' : ''}">
        <h4 class="dashboard-panel-title">Tài nguyên học tập cao cấp</h4>
        
        <div class="resources-vault-stack">
          <div class="resource-download-row">
            <div class="resource-row-left">
              <div class="resource-icon-box">📘</div>
              <div class="resource-meta-details">
                <span class="resource-title-name">Sổ tay Học tập Claude Mastery</span>
                <span class="resource-file-info">Định dạng Markdown · 11 KB</span>
              </div>
            </div>
            <a class="resource-download-button" href="../study-guide-handbook.md?v=20260530-1100" download>Tải xuống</a>
          </div>

          <div class="resource-download-row">
            <div class="resource-row-left">
              <div class="resource-icon-box">🖼️</div>
              <div class="resource-meta-details">
                <span class="resource-title-name">Trọn bộ 55 ảnh bài giảng Claude Mastery OCR</span>
                <span class="resource-file-info">Định dạng ZIP · 102.5 MB</span>
              </div>
            </div>
            <a class="resource-download-button" href="../claude-55-pages.zip?v=20260528-1441" download>Tải xuống</a>
          </div>

          <div class="resource-download-row">
            <div class="resource-row-left">
              <div class="resource-icon-box">📝</div>
              <div class="resource-meta-details">
                <span class="resource-title-name">NotebookLM Video Prompts & Packs (55 bài)</span>
                <span class="resource-file-info">Định dạng Markdown · 173.5 KB</span>
              </div>
            </div>
            <a class="resource-download-button" href="../notebooklm-video-prompts-55-bai.md?v=20260528-1516" download>Tải xuống</a>
          </div>
        </div>

        ${!isPremium ? `
          <div class="resources-lock-glass-overlay">
            <div class="resources-lock-box">
              <span class="lock-shield-gold">🔒</span>
              <h4>QUYỀN LỢI PREMIUM HỘI VIÊN</h4>
              <p>Trọn bộ tài liệu học tập cao cấp (Sổ tay hướng dẫn, ảnh gốc 55 trang sách và file NotebookLM packs) chỉ dành cho học viên Premium.</p>
              <button class="lock-upgrade-action-btn" id="dbUpgradePremiumBtn">👑 Kích hoạt Premium</button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  } else if (dashboardTab === "settings") {
    panelHTML = `
      <div class="dashboard-panel-card">
        <h4 class="dashboard-panel-title">Cài đặt tài khoản</h4>
        <div class="settings-forms-grid">
          
          <div class="settings-sub-card">
            <h5>Cập nhật tên hiển thị</h5>
            <div class="dashboard-form-stack">
              <div class="dashboard-form-group">
                <label>Họ và tên</label>
                <input type="text" id="settingFullName" value="${profile?.full_name || ''}" placeholder="Nhập họ và tên mới">
              </div>
              <button class="dashboard-save-btn" id="settingSaveBtn">Lưu thay đổi</button>
              <div id="settingInfoStatusMsg" style="margin-top: 8px; font-size: 13px; display: none;"></div>
            </div>
          </div>

          <div class="settings-sub-card">
            <h5>Đổi mật khẩu mới</h5>
            <div class="dashboard-form-stack">
              <div class="dashboard-form-group">
                <label>Mật khẩu mới (Tối thiểu 6 ký tự)</label>
                <input type="password" id="settingNewPass" placeholder="Nhập mật khẩu mới">
              </div>
              <div class="dashboard-form-group">
                <label>Xác nhận mật khẩu</label>
                <input type="password" id="settingConfirmPass" placeholder="Nhập lại mật khẩu mới">
              </div>
              <button class="dashboard-save-btn" id="settingPassBtn">Đổi mật khẩu</button>
              <div id="settingPassStatusMsg" style="margin-top: 8px; font-size: 13px; display: none;"></div>
            </div>
          </div>

        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="dashboard-header-card">
      <div class="dashboard-header-left">
        <div class="dashboard-avatar-large" style="width: 68px; height: 68px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: linear-gradient(135deg, #e65c00, #f5c84c);">${avatarHTML}</div>
        <div class="dashboard-user-meta">
          <h3 class="dashboard-user-name">${profileName}</h3>
          <span class="dashboard-user-joined">Học viên từ: <strong>${joinedStr}</strong></span>
        </div>
      </div>
      <div class="dashboard-header-right">
        <button class="dashboard-back-btn" id="dbBackToCourseBtn">➔ Vào Học</button>
        <button class="dashboard-signout-btn" id="dbSignOutBtn">
          <svg style="width:16px;height:16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Đăng xuất
        </button>
      </div>
    </div>

    <div class="dashboard-tabs-nav">
      ${tabsHTML}
    </div>

    <div id="dashboardActivePanel">
      ${panelHTML}
    </div>
  `;

  // Hook tab triggers
  container.querySelectorAll("[data-dash-tab]").forEach(btn => {
    btn.onclick = () => {
      dashboardTab = btn.dataset.dashTab;
      renderDashboard();
    };
  });

  // Hook Header actions
  document.getElementById("dbBackToCourseBtn").onclick = () => {
    hideDashboard();
  };

  document.getElementById("dbSignOutBtn").onclick = async () => {
    if (window.supabaseClientInstance && window.supabaseClientInstance.auth) {
      await window.supabaseClientInstance.auth.signOut();
    }
  };

  // Tab-specific hooks
  if (dashboardTab === "profile") {
    const saveBtn = document.getElementById("dbSaveProfileBtn");
    const nameInput = document.getElementById("dbFullName");
    const statusMsg = document.getElementById("dbProfileStatusMsg");

    // Hook tải ảnh đại diện
    const selectAvatarBtn = document.getElementById("selectAvatarBtn");
    const avatarFileInput = document.getElementById("avatarFileInput");
    const avatarPreviewBox = document.getElementById("avatarPreviewBox");

    if (selectAvatarBtn && avatarFileInput) {
      selectAvatarBtn.onclick = () => avatarFileInput.click();
      
      avatarFileInput.onchange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (file.size > 2 * 1024 * 1024) {
          alert("Dung lượng ảnh vượt quá 2MB!");
          return;
        }

        selectAvatarBtn.disabled = true;
        selectAvatarBtn.textContent = "Đang tải...";
        statusMsg.style.display = "none";

        try {
          const sess = window.getCurrentSession();
          if (!sess) throw new Error("Chưa đăng nhập!");

          const fileExt = file.name.split('.').pop();
          const fileName = `${sess.user.id}-${Date.now()}.${fileExt}`;
          const filePath = `${fileName}`;

          const { error: uploadError } = await window.supabaseClientInstance.storage
            .from("avatars")
            .upload(filePath, file, { cacheControl: '3600', upsert: true });

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = window.supabaseClientInstance.storage
            .from("avatars")
            .getPublicUrl(filePath);

          const { error: updateError } = await window.supabaseClientInstance
            .from("profiles")
            .update({ avatar_url: publicUrl })
            .eq("id", sess.user.id);

          if (updateError) throw updateError;

          avatarPreviewBox.innerHTML = `<img src="${publicUrl}" style="width:100%;height:100%;object-fit:cover;">`;
          
          statusMsg.style.color = "#34d399";
          statusMsg.textContent = "✓ Tải ảnh đại diện thành công!";
          statusMsg.style.display = "block";

          if (typeof fetchUserProfile === "function") {
            await fetchUserProfile(sess.user);
            renderAuthUI();
            renderDashboard();
          }
        } catch (err) {
          console.error("Error uploading avatar:", err);
          statusMsg.style.color = "#f87171";
          statusMsg.textContent = "✗ Lỗi tải ảnh: " + (err.message || err);
          statusMsg.style.display = "block";
        } finally {
          selectAvatarBtn.disabled = false;
          selectAvatarBtn.textContent = "Chọn ảnh đại diện";
        }
      };
    }

    saveBtn.onclick = async () => {
      const newName = nameInput.value.trim();
      if (!newName) {
        alert("Vui lòng điền họ tên!");
        return;
      }

      saveBtn.disabled = true;
      saveBtn.textContent = "Đang lưu...";
      statusMsg.style.display = "none";

      const success = await saveProfileName(newName);
      if (success) {
        statusMsg.style.color = "#34d399";
        statusMsg.textContent = "✓ Cập nhật họ tên thành công!";
        statusMsg.style.display = "block";
        
        setTimeout(() => {
          const sess = window.getCurrentSession();
          if (sess && typeof fetchUserProfile === "function") {
            fetchUserProfile(sess.user).then(() => {
              renderAuthUI();
              renderDashboard();
            });
          }
        }, 1000);
      } else {
        statusMsg.style.color = "#f87171";
        statusMsg.textContent = "✗ Lỗi khi lưu dữ liệu lên Supabase.";
        statusMsg.style.display = "block";
        saveBtn.disabled = false;
        saveBtn.textContent = "Cập nhật thông tin";
      }
    };
  } else if (dashboardTab === "courses") {
    document.getElementById("resumeLearningBtn").onclick = () => {
      hideDashboard();
      document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth" });
    };
  } else if (dashboardTab === "resources") {
    const upgradeBtn = document.getElementById("dbUpgradePremiumBtn");
    if (upgradeBtn) {
      upgradeBtn.onclick = () => {
        if (typeof showPaymentModal === "function") {
          showPaymentModal();
        }
      };
    }
  } else if (dashboardTab === "settings") {
    const infoSaveBtn = document.getElementById("settingSaveBtn");
    const infoNameInput = document.getElementById("settingFullName");
    const infoStatusMsg = document.getElementById("settingInfoStatusMsg");

    infoSaveBtn.onclick = async () => {
      const newName = infoNameInput.value.trim();
      if (!newName) {
        alert("Vui lòng nhập họ và tên!");
        return;
      }

      infoSaveBtn.disabled = true;
      infoSaveBtn.textContent = "Đang lưu...";
      infoStatusMsg.style.display = "none";

      const success = await saveProfileName(newName);
      if (success) {
        infoStatusMsg.style.color = "#34d399";
        infoStatusMsg.textContent = "✓ Cập nhật tên hiển thị thành công!";
        infoStatusMsg.style.display = "block";
        setTimeout(() => {
          const sess = window.getCurrentSession();
          if (sess && typeof fetchUserProfile === "function") {
            fetchUserProfile(sess.user).then(() => {
              renderAuthUI();
              renderDashboard();
            });
          }
        }, 1000);
      } else {
        infoStatusMsg.style.color = "#f87171";
        infoStatusMsg.textContent = "✗ Lỗi lưu thông tin.";
        infoStatusMsg.style.display = "block";
        infoSaveBtn.disabled = false;
        infoSaveBtn.textContent = "Lưu thay đổi";
      }
    };

    const passBtn = document.getElementById("settingPassBtn");
    const newPassInput = document.getElementById("settingNewPass");
    const confirmPassInput = document.getElementById("settingConfirmPass");
    const passStatusMsg = document.getElementById("settingPassStatusMsg");

    passBtn.onclick = async () => {
      const newPass = newPassInput.value.trim();
      const confirmPass = confirmPassInput.value.trim();

      if (!newPass || !confirmPass) {
        alert("Vui lòng điền đầy đủ thông tin mật khẩu!");
        return;
      }
      if (newPass.length < 6) {
        alert("Mật khẩu mới phải chứa ít nhất 6 ký tự!");
        return;
      }
      if (newPass !== confirmPass) {
        alert("Hai mật khẩu không khớp nhau. Vui lòng kiểm tra lại!");
        return;
      }

      passBtn.disabled = true;
      passBtn.textContent = "Đang cập nhật...";
      passStatusMsg.style.display = "none";

      const success = await updateAccountPassword(newPass);
      if (success) {
        passStatusMsg.style.color = "#34d399";
        passStatusMsg.textContent = "✓ Đổi mật khẩu thành công!";
        passStatusMsg.style.display = "block";
        newPassInput.value = "";
        confirmPassInput.value = "";
      } else {
        passStatusMsg.style.color = "#f87171";
        passStatusMsg.textContent = "✗ Lỗi khi cập nhật mật khẩu mới.";
        passStatusMsg.style.display = "block";
      }
      passBtn.disabled = false;
      passBtn.textContent = "Đổi mật khẩu";
    };
  }
}

async function saveProfileName(fullName) {
  const session = (typeof window.getCurrentSession === "function") ? window.getCurrentSession() : null;
  if (!session || !window.supabaseClientInstance) return false;

  try {
    const { error } = await window.supabaseClientInstance
      .from("profiles")
      .upsert({ 
        id: session.user.id, 
        email: session.user.email,
        full_name: fullName 
      }, { onConflict: 'id' });

    if (error) {
      console.error("Error updating/upserting profile in db:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Exception updating/upserting profile name:", err);
    return false;
  }
}

async function updateAccountPassword(newPassword) {
  if (!window.supabaseClientInstance) return false;

  try {
    const { error } = await window.supabaseClientInstance.auth.updateUser({
      password: newPassword
    });
    if (error) {
      console.error("Error updating user password:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Exception updating user password:", err);
    return false;
  }
}

let _updateAllRunning = false;
let _updateAllScheduled = false;

function updateAll() {
  logTrace("updateAll start");
  console.log("updateAll call stack: " + new Error().stack);
  // Prevent re-entrant calls that cause infinite loops
  if (_updateAllRunning) {
    logTrace("updateAll is already running. Scheduling deferred update.");
    _updateAllScheduled = true;
    return;
  }
  _updateAllRunning = true;

  try {
    const session = (typeof window.getCurrentSession === "function") ? window.getCurrentSession() : null;
    if (!session && isDashboardActive) {
      logTrace("updateAll: isDashboardActive but no session. Deactivating.");
      isDashboardActive = false;
      const dashboardSec = document.getElementById("accountDashboard");
      if (dashboardSec) dashboardSec.style.display = "none";

      document.querySelector(".hero")?.removeAttribute("style");
      const pathPanel = document.querySelector(".path-panel");
      if (pathPanel) pathPanel.removeAttribute("style");
      const workspace = document.querySelector(".workspace");
      if (workspace) workspace.removeAttribute("style");
      const agentPanel = document.querySelector(".agent-panel");
      if (agentPanel) agentPanel.removeAttribute("style");
      const proPanel = document.querySelector(".pro-panel");
      if (proPanel) proPanel.removeAttribute("style");
      const skillsPanel = document.getElementById("skillsPanel");
      if (skillsPanel) skillsPanel.removeAttribute("style");
    }

    console.log("DB_TRACE: updateAll calling ensureActiveLessonVisible");
    ensureActiveLessonVisible();
    console.log("DB_TRACE: updateAll calling renderPaths");
    renderPaths();
    console.log("DB_TRACE: updateAll calling renderModules");
    renderModules();
    console.log("DB_TRACE: updateAll calling renderMilestones");
    renderMilestones();
    console.log("DB_TRACE: updateAll calling renderTree");
    renderTree();
    console.log("DB_TRACE: updateAll calling renderProgress");
    renderProgress();
    console.log("DB_TRACE: updateAll calling renderLesson");
    renderLesson();
    console.log("DB_TRACE: updateAll calling renderProStack");
    renderProStack();
    console.log("DB_TRACE: updateAll calling renderSkillsHandbook");
    renderSkillsHandbook();
    console.log("DB_TRACE: updateAll finished all render functions");

    if (isDashboardActive) {
      logTrace("updateAll: calling renderDashboard inside updateAll");
      renderDashboard();
    }
  } finally {
    logTrace("updateAll finally block: _updateAllRunning set to false, _updateAllScheduled = " + _updateAllScheduled);
    _updateAllRunning = false;
    // If another call was requested while we were running, schedule ONE deferred update
    if (_updateAllScheduled) {
      logTrace("updateAll finally block: scheduling deferred updateAll via requestAnimationFrame");
      _updateAllScheduled = false;
      requestAnimationFrame(() => updateAll());
    }
  }
}

// Global click handler for interactive quizzes
document.addEventListener("click", (event) => {
  const checkBtn = event.target.closest(".quiz-check-btn");
  if (!checkBtn) return;

  const card = checkBtn.closest(".quiz-card-interactive");
  if (!card) return;

  const selectedInput = card.querySelector("input[type='radio']:checked");
  if (!selectedInput) {
    alert("Vui lòng chọn một đáp án trước khi kiểm tra!");
    return;
  }

  const isCorrect = selectedInput.getAttribute("data-correct") === "true";
  const feedbackBox = card.querySelector(".quiz-feedback-box");
  const badge = feedbackBox.querySelector(".feedback-badge");
  
  feedbackBox.style.display = "block";
  if (isCorrect) {
    feedbackBox.className = "quiz-feedback-box correct";
    badge.textContent = "✓ ĐÁP ÁN ĐÚNG!";
    card.classList.add("answered-correct");
    card.classList.remove("answered-incorrect");
  } else {
    feedbackBox.className = "quiz-feedback-box incorrect";
    badge.textContent = "✗ CHƯA CHÍNH XÁC!";
    card.classList.add("answered-incorrect");
    card.classList.remove("answered-correct");
  }

  // Disable inputs after checking
  card.querySelectorAll("input[type='radio']").forEach(input => input.disabled = true);
  checkBtn.style.display = "none";
});

pathTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-path]");
  if (!button) return;
  activePathId = button.dataset.path;
  safeSetLocalStorage("claude-active-path", activePathId);
  const visible = getVisibleLessons();
  const firstIncomplete = visible.find((lesson) => !completed.has(lesson.id));
  activeLessonId = firstIncomplete?.id || visible[0]?.id || "01";
  updateAll();
  document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth" });
});

proTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pro-tool]");
  if (!button) return;
  activeProToolId = button.dataset.proTool;
  safeSetLocalStorage("claude-pro-tool", activeProToolId);
  renderProStack();
});

skillsTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-skill-chapter]");
  if (!button) return;
  activeSkillChapterId = button.dataset.skillChapter;
  safeSetLocalStorage("claude-active-skill-chapter", activeSkillChapterId);
  renderSkillsHandbook();
});

moduleNav.addEventListener("click", (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  if (typeof hideDashboard === "function") {
    hideDashboard();
  }
  document.getElementById(`module-${button.dataset.module}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
});

treeMap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson]");
  if (!button) return;
  setActiveLesson(button.dataset.lesson);
});

workflowCards.addEventListener("click", (event) => {
  const button = event.target.closest("[data-workflow-role]");
  if (!button) return;
  activeWorkflowRoleId = button.dataset.workflowRole;
  safeSetLocalStorage("claude-workflow-role", activeWorkflowRoleId);
  const lesson = flatLessons.find((item) => item.id === activeLessonId);
  if (!lesson) return;
  workflowCards.innerHTML = renderWorkflowCards(lesson);
  lessonPractice.textContent = buildPracticePrompt(lesson);
  pageSummary.innerHTML = renderPageSummary(lesson);
});

document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const text = button.dataset.copy || "";
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      fallbackCopy(text);
    }
    const original = button.textContent;
    button.textContent = "Đã copy";
    setTimeout(() => {
      button.textContent = original;
    }, 1200);
  } catch {
    button.textContent = "Copy lỗi";
  }
});

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

searchInput.addEventListener("input", () => {
  renderTree();
  if (searchInput.value.trim()) {
    document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const firstMatch = getSearchMatches()[0];
  if (!firstMatch) return;
  setActiveLesson(firstMatch.id);
  document.querySelector(".lesson-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

completeBtn.addEventListener("click", () => {
  if (completed.has(activeLessonId)) {
    completed.delete(activeLessonId);
  } else {
    completed.add(activeLessonId);
  }
  saveCompleted();
  updateAll();
});

prevBtn.addEventListener("click", () => {
  const visible = getVisibleLessons();
  const index = visible.findIndex((lesson) => lesson.id === activeLessonId);
  if (index > 0) setActiveLesson(visible[index - 1].id);
});

nextBtn.addEventListener("click", () => {
  const visible = getVisibleLessons();
  const index = visible.findIndex((lesson) => lesson.id === activeLessonId);
  if (index >= 0 && index < visible.length - 1) setActiveLesson(visible[index + 1].id);
});

continueBtn.addEventListener("click", () => {
  const visible = getVisibleLessons();
  const next = visible.find((lesson) => !completed.has(lesson.id)) || visible[0];
  setActiveLesson(next.id);
  document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  completed = new Set();
  saveCompleted();
  updateAll();
});

// Global click handler for NotebookLM vault integration
document.addEventListener("click", (event) => {
  const saveBtn = event.target.closest(".save-notebooklm-btn");
  if (saveBtn) {
    const vault = saveBtn.closest(".notebooklm-vault");
    if (!vault) return;
    const input = vault.querySelector(".notebooklm-input");
    if (!input) return;
    const value = input.value.trim();
    if (!value) {
      alert("Vui lòng dán link chia sẻ NotebookLM trước khi lưu!");
      return;
    }
    
    // Simple URL validation
    if (!value.startsWith("http://") && !value.startsWith("https://")) {
      alert("Vui lòng nhập đường dẫn liên kết URL hợp lệ!");
      return;
    }

    safeSetLocalStorage(`claude-lesson-notebooklm-${activeLessonId}`, value);
    renderLesson();
    return;
  }

  const deleteBtn = event.target.closest(".delete-notebooklm-btn");
  if (deleteBtn) {
    if (confirm("Bạn có chắc chắn muốn gỡ liên kết NotebookLM này không?")) {
      safeRemoveLocalStorage(`claude-lesson-notebooklm-${activeLessonId}`);
      renderLesson();
    }
    return;
  }

  const toggleBtn = event.target.closest(".brief-toggle-btn");
  if (toggleBtn) {
    const container = toggleBtn.closest(".video-brief-accordion");
    if (!container) return;
    const content = container.querySelector(".brief-content");
    const icon = container.querySelector(".toggle-icon");
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    
    if (isExpanded) {
      toggleBtn.setAttribute("aria-expanded", "false");
      content.style.display = "none";
      icon.textContent = "▼";
    } else {
      toggleBtn.setAttribute("aria-expanded", "true");
      content.style.display = "block";
      icon.textContent = "▲";
    }
  }
});

// Intercept downloads for non-premium users
document.addEventListener("click", (event) => {
  const downloadBtn = event.target.closest(".download-btn");
  if (!downloadBtn) return;
  
  const isPremium = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  if (!isPremium) {
    event.preventDefault();
    if (typeof showPaymentModal === "function") {
      showPaymentModal();
    } else {
      alert("Tính năng tải tài nguyên học tập chỉ dành cho tài khoản Premium đã kích hoạt!");
    }
  }
});

// ==========================================================================
// Diagnostic Survey Modal Logic
// ==========================================================================
let currentSurveyStep = 1;
let surveyAnswers = {
  role: null,
  goal: null,
  tech: null
};

function goToSurveyStep(step) {
  currentSurveyStep = step;
  const surveyModal = document.getElementById("surveyModal");
  const surveySlides = document.querySelectorAll(".survey-slide");
  const progressDots = document.querySelectorAll(".survey-progress-dots .dot");
  const surveyBackBtn = document.getElementById("surveyBackBtn");
  const surveyNextBtn = document.getElementById("surveyNextBtn");

  if (!surveyModal) return;
  
  // Show active slide
  surveySlides.forEach(slide => {
    if (parseInt(slide.dataset.step) === step) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  // Update progress dots
  progressDots.forEach((dot, index) => {
    if (index + 1 === step) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });

  // Update footer buttons visibility & state
  if (step === 1) {
    surveyBackBtn.style.visibility = "hidden";
  } else {
    surveyBackBtn.style.visibility = "visible";
  }

  if (step === 4) {
    surveyNextBtn.style.display = "none";
    surveyBackBtn.style.visibility = "hidden";
    progressDots.forEach(dot => dot.style.display = "none");
  } else {
    surveyNextBtn.style.display = "block";
    surveyNextBtn.textContent = step === 3 ? "Xem gợi ý" : "Tiếp tục";
    progressDots.forEach(dot => dot.style.display = "block");
    
    // Enable/disable Next button based on answer presence
    const currentQuestionKey = ["", "role", "goal", "tech"][step];
    surveyNextBtn.disabled = !surveyAnswers[currentQuestionKey];
  }
}

function calculateAndShowRecommendation() {
  let recommendedPathId = "all";
  let reason = "";
  let icon = "🎯";

  const role = surveyAnswers.role;
  const goal = surveyAnswers.goal;
  const tech = surveyAnswers.tech;

  // Recommendation Algorithm:
  if (role === "code" || goal === "coding" || tech === "advanced") {
    recommendedPathId = "code";
    icon = "💻";
    reason = "Vì bạn có định hướng lập trình hoặc muốn tối ưu hóa mã nguồn bằng Claude Code. Lộ trình này sẽ tập trung vào môi trường Terminal, cấu trúc Codebase, kiểm thử nâng cao và kết nối API/Database.";
  } else if (role === "sme-ai-first" || goal === "automation") {
    recommendedPathId = "sme-ai-first";
    icon = "📈";
    reason = "Vì bạn là nhà quản lý, chủ doanh nghiệp hoặc có nhu cầu tự động hóa quy trình nghiệp vụ (Workflow AI-first). Lộ trình này trang bị tư duy điều phối tác tử, quản trị dự án, tối ưu hóa năng suất và thiết kế SOP.";
  } else if (role === "public-admin") {
    recommendedPathId = "public-admin";
    icon = "🏛️";
    reason = "Vì bạn làm việc trong cơ quan nhà nước hoặc hành chính công. Lộ trình này được tối ưu hóa đặc biệt cho các tác vụ tổng hợp, soạn thảo văn bản quy phạm, công văn, tham mưu và quản lý hồ sơ dưới các tiêu chí bảo mật cực kỳ nghiêm ngặt.";
  } else if (role === "office" || goal === "document") {
    recommendedPathId = "office";
    icon = "💼";
    reason = "Vì bạn làm việc trong môi trường văn phòng năng động (Nhân sự, Marketing, Sales, Trợ lý...). Lộ trình này giúp bạn giải phóng 80% thời gian xử lý email, biên tập nội dung, phân tích dữ liệu nhỏ và brainstorm ý tưởng.";
  } else {
    recommendedPathId = "all";
    icon = "🎯";
    reason = "Vì bạn muốn nắm bắt toàn bộ tiềm năng của Claude từ A-Z. Lộ trình này sẽ dẫn bạn đi qua đầy đủ 55 poster bài học, bao quát từ khái niệm căn bản, kỹ thuật Prompt chuẩn cho đến ứng dụng Co-work và Code.";
  }

  // Fetch outcomes dynamically from learningPaths array
  const pathData = learningPaths.find(p => p.id === recommendedPathId);
  const outcomes = pathData ? pathData.outcomes : [];

  // Render suggestion screen
  document.getElementById("surveyResultIcon").textContent = icon;
  document.getElementById("surveyResultTitle").textContent = pathData ? pathData.title : "Lộ trình gợi ý";
  document.getElementById("surveyResultReason").textContent = reason;
  
  const outcomesUl = document.getElementById("surveyResultOutcomes");
  outcomesUl.innerHTML = outcomes.map(o => `<li>${o}</li>`).join("");
  
  // Save recommended path ID to button dataset
  document.getElementById("startSuggestedPathBtn").dataset.pathId = recommendedPathId;

  // Go to step 4
  goToSurveyStep(4);
}

function openSurveyModal() {
  const surveyModal = document.getElementById("surveyModal");
  if (!surveyModal) return;
  surveyModal.style.display = "flex";
  
  // Reset survey state
  currentSurveyStep = 1;
  surveyAnswers = {
    role: null,
    goal: null,
    tech: null
  };
  
  // Deselect all cards
  const optionCards = document.querySelectorAll(".survey-option-card");
  optionCards.forEach(c => c.classList.remove("selected"));
  
  // Reset slide step rendering
  goToSurveyStep(1);
}

function closeSurveyModal() {
  const surveyModal = document.getElementById("surveyModal");
  if (surveyModal) {
    surveyModal.style.display = "none";
  }
}

function initSurvey() {
  const surveyModal = document.getElementById("surveyModal");
  const takeSurveyBtn = document.getElementById("takeSurveyBtn");
  const surveyCloseBtn = document.getElementById("surveyCloseBtn");
  const surveyBackBtn = document.getElementById("surveyBackBtn");
  const surveyNextBtn = document.getElementById("surveyNextBtn");
  const startSuggestedPathBtn = document.getElementById("startSuggestedPathBtn");

  if (!surveyModal) return;

  // Add click listeners to option cards
  const optionCards = document.querySelectorAll(".survey-option-card");
  optionCards.forEach(card => {
    card.addEventListener("click", () => {
      const question = card.dataset.question;
      const value = card.dataset.value;
      
      // Deselect all cards for this question
      const groupCards = document.querySelectorAll(`.survey-option-card[data-question="${question}"]`);
      groupCards.forEach(c => c.classList.remove("selected"));
      
      // Select clicked card
      card.classList.add("selected");
      surveyAnswers[question] = value;
      
      // Enable Next button
      surveyNextBtn.disabled = false;
    });
  });

  // Next Button Click
  surveyNextBtn.addEventListener("click", () => {
    if (currentSurveyStep < 3) {
      goToSurveyStep(currentSurveyStep + 1);
    } else if (currentSurveyStep === 3) {
      calculateAndShowRecommendation();
    }
  });

  // Back Button Click
  surveyBackBtn.addEventListener("click", () => {
    if (currentSurveyStep > 1) {
      goToSurveyStep(currentSurveyStep - 1);
    }
  });

  // Close Button Click
  surveyCloseBtn.addEventListener("click", () => {
    closeSurveyModal();
  });

  // Take Survey Trigger from Hero
  if (takeSurveyBtn) {
    takeSurveyBtn.addEventListener("click", () => {
      openSurveyModal();
    });
  }

  // Start Suggested Path
  if (startSuggestedPathBtn) {
    startSuggestedPathBtn.addEventListener("click", () => {
      const suggestedPathId = startSuggestedPathBtn.dataset.pathId;
      if (suggestedPathId) {
        // Find corresponding path tab button and trigger click
        const pathTabButton = document.querySelector(`.path-tab[data-path="${suggestedPathId}"]`);
        if (pathTabButton) {
          pathTabButton.click();
        } else {
          // Fallback if elements not fully rendered
          activePathId = suggestedPathId;
          safeSetLocalStorage("claude-active-path", activePathId);
          updateAll();
        }
        
        // Scroll to roadmap area
        document.querySelector(".path-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      
      // Mark survey as completed
      safeSetLocalStorage("claude-survey-completed", "true");
      closeSurveyModal();
    });
  }

  // Check if first-time user
  const surveyCompleted = safeGetLocalStorage("claude-survey-completed");
  if (!surveyCompleted) {
    setTimeout(() => {
      openSurveyModal();
    }, 1500);
  }
}

// Call initSurvey and updateAll
initSurvey();
updateAll();

