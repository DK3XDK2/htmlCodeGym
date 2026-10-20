# [Bài tập] Xây dựng Landing Page CodeGym Career theo phong cách Material Design

## 1. Giới thiệu & Mục tiêu dự án
Dự án xây dựng một **Landing Page hoàn chỉnh** cho chương trình **CodeGym Career** dựa trên nội dung thực tế từ [codegym.vn/codegym-career/](https://codegym.vn/codegym-career/), được tái thiết kế và hiện đại hóa toàn diện theo phong cách **Material Design (Google Material Design System)** thông qua thư viện **Bootstrap Material Design (MDBootstrap)**.

---

## 2. Công nghệ sử dụng
- **HTML5 & Semantic Markup**: Cấu trúc rõ ràng theo các thẻ ngữ nghĩa `header`, `nav`, `section`, `article`, `footer`.
- **CSS3 & Material Design System**:
  - **MDBootstrap 4.19.1** & **Bootstrap 4.5.0**: Khung lưới responsive 12 cột, hệ thống component chuẩn Material.
  - **Google Fonts (Roboto)**: Font chữ chính thức của chuẩn thiết kế Material Design.
  - **Font Awesome 5**: Bộ icon đa dạng cho các khối tính năng, chỉ số và danh mục.
- **JavaScript & jQuery**:
  - Hiệu ứng sóng nước tương tác khi chạm/click (`Waves Ripple Effect`).
  - Thanh điều hướng thông minh (Sticky Navbar) tự động tăng độ sâu bóng đổ khi cuộn trang (`z-depth-2`).
  - Hiệu ứng cuộn mượt (Smooth Scrolling) cho các liên kết nội trang.
  - Bộ đếm số tự động (Number Counter Animation) khi người dùng cuộn đến vùng thống kê.
  - Xử lý gửi biểu mẫu và hiển thị **Material Modal** phản hồi ngay lập tức.

---

## 3. Kiến trúc & Các thành phần Material Design đã triển khai

| Khu vực (Section) | Thành phần Material Design | Mô tả chi tiết & Điểm nhấn UX/UI |
| :--- | :--- | :--- |
| **1. Navbar** | `navbar-custom fixed-top` | Thanh menu cố định, logo SVG sắc nét, badge `Career`, nút CTA bo tròn `waves-effect`. |
| **2. Hero Section** | `hero-section`, `z-depth-3` | Nền gradient sâu với hiệu ứng ánh sáng radial, thông điệp cam kết việc làm, thẻ preview tính năng nổi bật. |
| **3. Stats Strip** | `stats-strip z-depth-2` | Dải thống kê nổi (-45px margin) với 4 con số ấn tượng (100% việc làm, 20 tuần, 80% non-IT, 200+ DN đối tác). |
| **4. Lợi ích Bootcamp** | `material-card`, `card-icon-box` | 4 thẻ Card Material nổi bật với biểu tượng màu sắc, hiệu ứng nâng cao khi hover (`transform translateY(-6px)`). |
| **5. Lộ trình 20 tuần** | `curriculum-module` | Khối timeline 5 module chuyên sâu từ nền tảng đến Full-stack, viền nhấn màu cyan và cam nổi bật. |
| **6. Dịch vụ việc làm** | `service-step-card` | 4 bước chuẩn bị sự nghiệp với số thứ tự tròn Material và thẻ cam kết hoàn 100% học phí bằng hợp đồng. |
| **7. Doanh nghiệp đối tác** | `partner-logo-pill` | Lưới 12 thương hiệu công nghệ tuyển dụng uy tín (FPT, Viettel, VNPT, VNPAY, RikkeiSoft, GMO,...). |
| **8. Cựu học viên** | `testimonial-card z-depth-1` | 3 thẻ cảm nhận thực tế từ các học viên chuyển ngành từ Cơ khí, Ngoại ngữ, Kế toán sang Developer. |
| **9. Form đăng ký** | `registration-box`, `md-form` | Form Material với icon prefix, nhãn nổi (floating labels), dropdown tùy chỉnh và nút submit cam rực rỡ. |
| **10. Modal thông báo** | `modal-notify modal-success` | Hộp thoại thông báo đăng ký thành công chuẩn Material với biểu tượng check-circle xanh. |
| **11. FAB Button** | `fab-consultation z-depth-3` | Nút hành động nổi ở góc màn hình giúp người dùng nhanh chóng đăng ký tư vấn tại bất kỳ vị trí nào. |
| **12. Footer** | `page-footer font-small` | Chân trang đa cột đầy đủ pháp nhân, chứng nhận GDNN, địa chỉ chi nhánh Hà Nội, Đà Nẵng, Hotline và mạng xã hội. |

---

## 4. Bảng màu chủ đạo (Color Palette)
- **Primary Color (`#00ADEE`)**: Màu xanh Cyan nhận diện thương hiệu CodeGym.
- **Primary Dark (`#0087BA`)**: Trạng thái hover và đường viền đậm.
- **Secondary / Deep Navy (`#0B2545`)**: Nền Hero, tiêu đề lớn và chân trang tạo độ tương phản cao và uy tín.
- **Accent Orange (`#FF6F00`)**: Nút kêu gọi hành động (Call to Action) kích thích tỷ lệ chuyển đổi.
- **Success Green (`#00C851`)**: Huy hiệu cam kết bảo hành việc làm và modal thành công.

---

## 5. Hướng dẫn xem trang
Mở trực tiếp file `index.html` trong trình duyệt hoặc chạy qua live server:
```bash
# Xem trực tiếp trên máy chủ cục bộ port 5500
http://localhost:5500/20-landing-page-material/index.html
```
Trang được tối ưu hiển thị hoàn hảo trên màn hình máy tính (Desktop), máy tính bảng (Tablet) và điện thoại di động (Mobile).
