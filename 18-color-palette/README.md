# [Thực hành] Sử dụng màu sắc trong trang web (Monochromatic Color Palette)

## 1. Mục tiêu
- Luyện tập kỹ năng phối màu đơn tông (Monochromatic Color Scheme) trên trang web.
- Tái sử dụng bảng màu phân cấp từ màu nhận diện thương hiệu gốc (xanh logo `#00ADEE`) theo các bậc sắc độ từ đậm đến nhạt.
- Kết hợp hài hòa giữa màu chủ đạo, màu nền nhấn, màu phụ trợ và màu chữ (đen/trắng) để tạo giao diện hiện đại, dễ nhìn, độ tương phản cao.

---

## 2. Bảng phân cấp màu đơn tông (Monochromatic Blue Palette)

| Cấp độ | Mã màu Hex | Ứng dụng trên trang web |
| :--- | :--- | :--- |
| **Bậc 1 (Chính)** | `#00ADEE` | Màu logo, nút bấm Cart, thẻ badge ON SALE, PREVIEW title/circle, selection text, link menu |
| **Bậc 2** | `#00B2EF` | Trạng thái hover cho button, các chi tiết tương tác |
| **Bậc 3** | `#00B8F0` | Đường viền vi tính, màu phụ trợ |
| **Bậc 4** | `#00BFF2` | Nền Banner chính (`#banner`) làm nổi bật sản phẩm nổi bật |
| **Bậc 5** | `#21C6F4` | Nền tương tác phụ, hiệu ứng chuyển màu |
| **Bậc 6** | `#57CEF6` | Trạng thái hover nút Newsletter submit |
| **Bậc 7** | `#8DD7F7` | Nền các thẻ danh sách bài nghe thử (`#main .preview li a`) |
| **Bậc 8** | `#A9E0F8` | Nền input / button thứ cấp |
| **Bậc 9** | `#C6E9FA` | Nền phần thông tin chân trang (`#info`) tạo sự tươi sáng, thanh thoát |

---

## 3. Các bước đã triển khai

1. **Bước 1: Xác định màu thương hiệu chính**: Lấy màu xanh logo `#00ADEE` làm tông màu bậc 1, phân rã bảng màu đơn tông 9 cấp độ.
2. **Bước 2: Thay đổi màu nền Banner**: Đổi nền banner `#banner` từ màu đỏ ban đầu (`#c33`) sang màu bậc 4 (`#00BFF2`), chữ chuyển sang màu tối tương phản rõ nét.
3. **Bước 3: Thay đổi màu badge ON SALE / PREVIEW**:
   - Thẻ xoay `ON SALE`: chuyển từ đỏ sang `#00ADEE`.
   - Nút `Add to Cart` và nút đĩa xoay: chuyển sang `#00ADEE` (hover `#00B2EF`).
   - Thẻ `PREVIEW` và vòng tròn play: chuyển từ màu đỏ sang `#00ADEE`.
4. **Bước 4: Đổi màu nền khối nội dung bài hát**:
   - Chuyển nền thẻ nghe thử `.preview li a` từ hồng nhạt (`#fac7d2`) sang màu bậc 7 (`#8DD7F7`).
   - Chữ bên trong giữ màu đen `#000` để đạt độ tương phản tối ưu trên nền xanh nhạt.
5. **Bước 5: Đổi màu nền phần thông tin footer**:
   - Phần `#info` đổi từ màu xám (`#ccc`) sang màu bậc 9 (`#C6E9FA`).
   - Footer bản quyền giữ nền tối `#222` kết hợp hài hòa với tổng thể giao diện.
6. **Bước 6: Màu chữ đồng bộ**: Đảm bảo các đoạn văn, tiêu đề hiển thị màu tối `#222` / `#000` rõ ràng, chuẩn accessibility.
7. **Bước 7 & 8: Kiểm thử và mở rộng**: Trang web đạt chuẩn hiển thị responsive trên cả desktop và thiết bị di động.

---

## 4. Bảng màu đơn tông tham khảo mở rộng (Emerald Green Palette)
Để tạo một phiên bản khác với phong cách thiên nhiên/sinh thái:
- **Bậc 1 (Chính):** `#00A86B`
- **Bậc 2:** `#05B876`
- **Bậc 3:** `#16C784`
- **Bậc 4:** `#2CD594`
- **Bậc 5:** `#4EE0A5`
- **Bậc 6:** `#73EAB6`
- **Bậc 7:** `#9DF2C9`
- **Bậc 8:** `#C2F8DC`
- **Bậc 9:** `#E3FDF0`
