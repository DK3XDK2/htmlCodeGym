# BÁO CÁO PHÂN TÍCH CẤU TRÚC WEBSITE THỰC TẾ

## 1. Trang web được phân tích: VnExpress (https://vnexpress.net)

### A. Header (Đầu trang)
- **Vị trí:** Nằm ở vị trí trên cùng của toàn bộ trang web.
- **Thành phần:**
  - Logo thương hiệu (VnExpress).
  - Ngày tháng hiện tại và thông tin vị trí / thời tiết.
  - Khu vực tiện ích: Tìm kiếm, Nút đăng nhập, chuông thông báo.
- **Vai trò:** Định danh thương hiệu, tạo ấn tượng ban đầu cho độc giả và cung cấp các tiện ích tra cứu nhanh.

### B. Navigation Menu (Thanh điều hướng)
- **Vị trí:** Đặt ngay dưới Header và cố định (Sticky) khi người dùng cuộn chuột xuống dưới.
- **Thành phần:** Gồm các danh mục chính:
  - Trang chủ
  - Thời sự
  - Kinh doanh
  - Công nghệ
  - Thể thao
  - Giải trí
- **Vai trò:** Hướng dẫn người dùng di chuyển nhanh chóng giữa các chuyên mục nội dung chính của website.

### C. Content Section (Khu vực nội dung chính)
- **Vị trí:** Nằm ở trung tâm của trang web, chiếm diện tích lớn nhất.
- **Bố cục (Layout):** Sử dụng hệ thống 2 cột (Two-column layout):
  - **Cột chính (Main Content - chiếm ~70%):** Hiển thị bài viết tiêu điểm, hình ảnh bài báo lớn, tiêu đề đậm và đoạn tóm tắt bài viết.
  - **Cột phụ (Sidebar - chiếm ~30%):** Chứa danh sách tin đọc nhiều, góc nhìn, tin mới nhất và banner thông tin.
- **Vai trò:** Trình bày nội dung chính mà người dùng quan tâm, tối ưu hóa khả năng đọc và trải nghiệm tiếp nhận thông tin.

### D. Footer (Chân trang)
- **Vị trí:** Nằm ở dưới cùng của trang web.
- **Thành phần:**
  - Bản quyền sở hữu trí tuệ (`Copyright © 2026`).
  - Thông tin giấy phép hoạt động, ban biên tập, địa chỉ tòa soạn.
  - Đường dẫn liên hệ quảng cáo, điều khoản bảo mật và liên kết mạng xã hội.
- **Vai trò:** Cung cấp tính pháp lý, thông tin minh bạch về cơ quan quản lý và các liên kết bổ trợ.

---

## 2. Kế hoạch xây dựng lại bằng HTML & CSS
- Sử dụng cấu trúc HTML semantic: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`.
- Dùng CSS Flexbox / Grid để tạo bố cục 2 cột cho phần Content Section.
- Đảm bảo tính Responsive: Trên Desktop hiển thị 2 cột, trên Mobile hiển thị 1 cột xếp chồng.
