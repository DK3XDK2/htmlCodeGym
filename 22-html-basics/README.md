# [Thực hành] Sử dụng thẻ HTML cơ bản

## 1. Mục tiêu bài thực hành
- Xây dựng cấu trúc tài liệu HTML5 chuẩn cho một trang web (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Sử dụng thẻ tiêu đề `<h1>` để định nghĩa tiêu đề chính của trang.
- Sử dụng thẻ đoạn văn `<p>` để phân chia các khối nội dung văn bản.
- Sử dụng thẻ `<img>` với đầy đủ các thuộc tính quan trọng (`src`, `alt`, `width`) để chèn hình ảnh minh họa tối ưu cho SEO và khả năng tiếp cận (Accessibility).
- Sử dụng thẻ liên kết `<a>` với thuộc tính `href` để điều hướng người dùng đến liên kết ngoài (Wikipedia).

---

## 2. Chi tiết các thẻ HTML sử dụng trong trang `halong_bay.html`

| Thẻ HTML | Vai trò / Ý nghĩa | Thuộc tính sử dụng |
| :--- | :--- | :--- |
| `<h1>` | Tiêu đề chính quan trọng nhất của trang web (Heading 1). | Thẻ nội dung |
| `<p>` | Đoạn văn bản (Paragraph), tự động có khoảng đệm dòng trên dưới. | Thẻ nội dung |
| `<img>` | Chèn hình ảnh (Self-closing tag). | `src` (đường dẫn ảnh), `alt` (mô tả thay thế cho công cụ tìm kiếm và trình đọc màn hình), `width` (chiều rộng hiển thị) |
| `<a>` | Thẻ siêu liên kết (Anchor tag). | `href` (URL trang đích cần chuyển tới) |

---

## 3. Mã nguồn trang `halong_bay.html`

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vịnh Hạ Long - Kỳ quan Thiên nhiên</title>
</head>
<body>
    <h1>Vịnh Hạ Long - Kỳ quan Thiên nhiên Thế giới</h1>
    
    <p>Vịnh Hạ Long, nằm ở tỉnh Quảng Ninh, Việt Nam, là một trong những điểm đến du lịch nổi tiếng nhất của đất nước. Với hàng nghìn hòn đảo đá vôi và các đảo nhỏ hình thành từ hàng triệu năm, Vịnh Hạ Long tạo nên một cảnh quan ngoạn mục và độc đáo.</p>
    
    <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80" alt="Toàn cảnh Vịnh Hạ Long với nhiều hòn đảo đá vôi" width="600">
    
    <p>Vịnh Hạ Long đã được UNESCO công nhận là Di sản Thế giới vào năm 1994 và 2000. Nơi đây không chỉ nổi tiếng bởi vẻ đẹp tự nhiên mà còn bởi giá trị địa chất, địa mạo và đa dạng sinh học phong phú. Du khách đến đây có thể tham gia các hoạt động như chèo thuyền kayak, thăm hang động, hoặc đơn giản là ngắm cảnh từ du thuyền.</p>
    
    <p>Tìm hiểu thêm về Vịnh Hạ Long trên <a href="https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long">Wikipedia</a>.</p>
</body>
</html>
```

---

## 4. Hướng dẫn kiểm tra trên trình duyệt
1. Mở file `halong_bay.html` trực tiếp bằng trình duyệt Google Chrome, Edge hoặc Firefox.
2. Hoặc xem trực tiếp qua Live Server cục bộ:
   ```
   http://localhost:5500/01-html-basics/halong_bay.html
   http://localhost:5500/22-html-basics/halong_bay.html
   ```
