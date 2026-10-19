# BÁO CÁO THỰC HÀNH CÀI ĐẶT VÀ SỬ DỤNG SASS CLI

## 1. Kiểm tra môi trường Node.js và npm
- **Phiên bản Node.js:** `v22.20.0`
- **Phiên bản npm:** `10.9.3`

```bash
node -v
npm -v
```

## 2. Cài đặt SASS toàn cục qua npm
Đã tiến hành cài đặt SASS toàn cục qua lệnh:
```bash
npm install -g sass
```
Kiểm tra phiên bản SASS đã cài đặt:
```bash
sass --version
# Kết quả: 1.105.2 compiled with dart2js 3.13.5
```

## 3. Cấu trúc thư mục dự án SASS
```
14-sass/
├── index.html        # Trang HTML sử dụng file css/main.css đã biên dịch
├── scss/             # Thư mục mã nguồn SCSS
│   ├── _variables.scss  # Định nghĩa các biến toàn cục (colors, fonts, border-radius)
│   └── main.scss        # SCSS chính: lồng nhau (nesting), functions, imports
├── css/              # Thư mục chứa CSS được tạo tự động sau biên dịch
│   ├── main.css
│   └── main.css.map
└── README.md
```

## 4. Các lệnh biên dịch SASS CLI đã thực hành

### 4.1 Biên dịch đơn lẻ
```bash
sass scss/main.scss css/main.css
```

### 4.2 Biên dịch đồng loạt từ thư mục input sang output
```bash
sass 14-sass/scss:14-sass/css
```

### 4.3 Kích hoạt chế độ tự động theo dõi (Watch Mode)
```bash
sass 14-sass/scss:14-sass/css --watch
```
Lệnh trên cho phép trình biên dịch SASS tự động cập nhật lại các file CSS trong thư mục `css/` mỗi khi file `.scss` được chỉnh sửa và lưu lại.
