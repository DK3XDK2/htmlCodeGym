# BÁO CÁO TÁI CẤU TRÚC MÃ NGUỒN CSS SANG SASS

Dự án gốc: [codegym-vn/responsive-grid](https://github.com/codegym-vn/responsive-grid)

## 1. Vấn đề của mã nguồn ban đầu
- Sử dụng quá nhiều thuộc tính CSS nội dòng (`inline styles`) lặp đi lặp lại.
- Giá trị màu sắc, kích thước chiều cao và độ rộng được gán cố định (`hardcoded`), rất khó bảo trì.
- Các cột được tính toán thủ công (`8.33%`, `25%`, `100%`) thay vì dùng hệ thống lưới tự động.

## 2. Các kỹ thuật SASS đã áp dụng để tái cấu trúc
1. **SASS Variables (`_variables.scss`):**
   - Đặt biến cho số lượng cột lưới: `$grid-columns: 12;`.
   - Đặt biến cho các mã màu: `$header-bg`, `$footer-bg`, `$item-bg`, `$white`, `$border-grid`.
2. **SASS Mixins (`_mixins.scss`):**
   - Sử dụng mixin `@mixin clearfix` để tự động xử lý tràn float.
3. **Vòng lặp SASS Loops (`_grid.scss`):**
   - Sử dụng vòng lặp `@for $i from 1 through $grid-columns` để tự động sinh ra 12 class cột `.col-1` đến `.col-12`.
4. **SASS Nesting & Modularity (`styles.scss`):**
   - Tổ chức code theo mô hình phân cấp rõ ràng (`.layout-overlay`, `.header-wrapper`, `.body-wrapper`, v.v.).
   - Loại bỏ 100% các đoạn inline styles trong file HTML, chuyển về các class SCSS ngữ nghĩa và gọn gàng.
