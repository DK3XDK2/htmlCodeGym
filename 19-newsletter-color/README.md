# [Bài tập] Phối màu cho Newsletter (Trello Redesign)

## 1. Giới thiệu & Mục tiêu bài tập
Bài tập thực hành kỹ năng phối màu sắc trong thiết kế trải nghiệm người dùng (UX) và giao diện người dùng (UI):
- Sử dụng nguyên lý phối màu từ công cụ **Adobe Color** để tuyển chọn 2 bộ màu sắc hài hòa, có mục đích truyền tải rõ ràng.
- Ứng dụng biến CSS (`:root` CSS Custom Properties) và **Bootstrap 5** để tạo cấu trúc newsletter chuẩn, linh hoạt và đáp ứng tốt trên mọi kích thước màn hình (Responsive Design).
- So sánh tác động tâm lý, cảm xúc và độ nhận diện thương hiệu giữa hai phiên bản newsletter.

---

## 2. Cấu trúc thư mục dự án

```
19-newsletter-color/
├── index.html                   # Trang tổng quan với bộ chuyển đổi theme thời gian thực (Live Preview Switcher)
├── newsletter_version1.html     # Phiên bản 1 độc lập (Trello Ocean & Sunset Coral)
├── newsletter_version2.html     # Phiên bản 2 độc lập (Forest Sage & Warm Amber)
├── css/
│   ├── style1.css               # Bộ biến màu & style cho Phiên bản 1
│   └── style2.css               # Bộ biến màu & style cho Phiên bản 2
└── README.md                    # Tài liệu phân tích phối màu & báo cáo
```

---

## 3. Phân tích chi tiết 2 bộ màu sắc (Adobe Color)

### Phiên bản 1: Trello Ocean & Sunset Coral
*Quy tắc phối màu:* **Complementary / Split-Complementary Accent** (Xanh dương chủ đạo bổ trợ sắc cam san hô).

| Vai trò | Tên màu | Mã HEX | Mục đích & Vị trí ứng dụng |
| :--- | :--- | :--- | :--- |
| **Primary Color** | Trello Classic Blue | `#0079BF` | Logo, dải tiêu đề Hero, tiêu đề bài viết, nút hành động chính |
| **Darker Primary** | Deep Oceanic Blue | `#005A91` | Trạng thái hover của nút bấm, tạo cảm giác nhấn thực tế |
| **Secondary Color** | Midnight Slate | `#091E42` | Tiêu đề phụ, footer, dải màu phụ trách nền tối |
| **Accent Color** | Sunset Coral | `#EB5A46` | Nút đăng ký dùng thử (CTA chính), huy hiệu bài viết nổi bật |
| **Accent Hover** | Burnt Coral | `#CF513D` | Trạng thái tương tác nút CTA |
| **Light Background** | Clean Mist Gray | `#F4F5F7` | Nền body và các khối nội dung phụ trợ |
| **Card / Surface** | Pure White | `#FFFFFF` | Nền thẻ bài viết, viền phân cách |
| **Text Color** | Deep Charcoal | `#172B4D` | Màu chữ toàn văn bản (Độ tương phản > 12:1 trên nền trắng) |

**Tâm lý học màu sắc & Hiệu quả UX:**
- Màu xanh lam gợi lên sự chuyên nghiệp, tin cậy, trật tự và khả năng sắp xếp công việc hiệu quả (rất đặc trưng cho phần mềm quản lý công việc Trello).
- Màu cam san hô (`#EB5A46`) có bước sóng kích thích thị giác mạnh, tạo điểm nhấn hút mắt người đọc ngay lập tức vào nút kêu gọi hành động (Call to Action).

---

### Phiên bản 2: Forest Sage & Warm Amber
*Quy tắc phối màu:* **Analogous + Warm Contrast Accent** (Sắc lục bảo tĩnh lặng kết hợp vàng hổ phách ấm áp).

| Vai trò | Tên màu | Mã HEX | Mục đích & Vị trí ứng dụng |
| :--- | :--- | :--- | :--- |
| **Primary Color** | Brunswick Forest Emerald | `#1B4D3E` | Logo, dải tiêu đề Hero, tiêu đề các khối nội dung |
| **Darker Primary** | Deep Pine | `#12352A` | Trạng thái hover cho nút chính |
| **Secondary Color** | Charcoal Mineral | `#2D3748` | Footer, tiêu đề card, nền phụ trợ |
| **Accent Color** | Warm Harvest Amber | `#E67E22` | Huy hiệu nổi bật, nút dùng thử CTA |
| **Accent Hover** | Burnt Tangerine | `#D35400` | Trạng thái tương tác nút CTA |
| **Light Background** | Soft Herb Mint | `#F4F7F4` | Nền trang tổng thể, tạo cảm giác êm dịu cho mắt |
| **Card / Surface** | Pure White | `#FFFFFF` | Nền card nội dung |
| **Text Color** | Mineral Dark Slate | `#1A202C` | Màu chữ chính (Độ tương phản cao chuẩn WCAG AA) |

**Tâm lý học màu sắc & Hiệu quả UX:**
- Màu xanh ngọc lục bảo sâu (`#1B4D3E`) đem lại sự điềm tĩnh, tươi mới, đại diện cho sự phát triển và tính bền vững. Giúp giảm mỏi mắt cho người đọc khi xem bản tin dài.
- Màu vàng hổ phách (`#E67E22`) mang đến sự ấm áp, thân thiện và giàu năng lượng sáng tạo.

---

## 4. So sánh cảm nhận thị giác giữa 2 phiên bản

| Tiêu chí | Phiên bản 1 (Ocean & Coral) | Phiên bản 2 (Forest Sage & Amber) |
| :--- | :--- | :--- |
| **Cảm giác đầu tiên** | Công nghệ cao, hiện đại, năng động, chuẩn thương hiệu Atlassian. | Tự nhiên, tĩnh lặng, thư thái, cảm hứng sáng tạo. |
| **Độ tập trung thị giác** | Tập trung vào quy trình, hiệu suất công việc và thẻ tác vụ. | Khuyến khích sự tập trung bền vững, không gây căng thẳng thị giác. |
| **Điểm nhấn chuyển đổi** | Màu san hô rực rỡ, tính chuyển đổi cao. | Màu hổ phách ấm cúng, tạo cảm giác tin tưởng nhẹ nhàng. |
| **Bối cảnh sử dụng phù hợp** | Bản tin công nghệ hàng tháng, thông báo tính năng sản phẩm phần mềm. | Bản tin mùa lễ hội, bản tin phong cách làm việc bền vững (Wellness / Work-Life Balance). |

---

## 5. Hướng dẫn xem và kiểm thử
1. **Xem trực tiếp trên trình duyệt:** Mở file `index.html` để sử dụng bộ chuyển đổi giao diện thời gian thực (Theme Switcher).
2. **Xem từng bản tin riêng biệt:**
   - Mở `newsletter_version1.html` để kiểm tra Phiên bản 1.
   - Mở `newsletter_version2.html` để kiểm tra Phiên bản 2.
