# ⚡ VocabMaster - Web Học Từ Vựng Tiếng Anh (Quizlet Lite)

Ứng dụng web học từ vựng tiếng Anh thông minh, giao diện trực quan, dễ nhìn, tập trung 100% vào việc ghi nhớ và phản xạ từ vựng như Quizlet.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Tính Năng Nổi Bật

### 1. 🎯 4 Chế độ học tập chuyên sâu
- **🔘 Trắc nghiệm 4 đáp án (MCQ):**
  - Tự động lấy 3 đáp án gây nhiễu từ bộ từ vựng.
  - Hỗ trợ phím tắt số `1`, `2`, `3`, `4` để chọn câu trả lời nhanh mà không cần chạm chuột.
  - Phím `Space` để chuyển câu tiếp theo.
- **✍️ Gõ từ / Điền từ (Typing):**
  - Hiện nghĩa tiếng Việt $\to$ Gõ tiếng Anh (hoặc ngược lại).
  - Bấm `Enter` để kiểm tra.
  - Nhận diện linh hoạt các từ đồng nghĩa (ngăn cách bởi dấu phẩy `,` hoặc `/`).
  - Nút **Gợi ý** mở chữ cái đầu khi bí từ.
- **🃏 Thẻ lật 3D Flashcard:**
  - Bấm phím `Space` hoặc nhấp vào thẻ để lật mặt xem nghĩa.
  - Bấm phím mũi tên `←` / `→` để chuyển qua lại các từ.
- **🧩 Ghép thẻ nhanh (Match Game):**
  - Trò chơi nối 6 cặp từ tiếng Anh với nghĩa tiếng Việt.
  - Bấm chọn đúng cặp từ sẽ làm biến mất thẻ, có đồng hồ tính thời gian hoàn thành.

### 2. 🗂️ Quản lý nhiều bộ từ (Deck Management)
- Tạo nhiều bộ từ theo chủ đề: *IELTS, TOEIC, IT & Lập trình, Giao tiếp hằng ngày...*
- Chuyển đổi bộ từ nhanh chóng ngay tại header.
- Tự động lưu dữ liệu vào `localStorage` của trình duyệt (không lo mất dữ liệu khi tắt trình duyệt).

### 3. 🔊 Phát âm & Âm thanh 100% Offline
- Giọng đọc tiếng Anh chuẩn bản xứ qua **Web Speech API**.
- Hiệu ứng âm thanh khi Đúng / Sai được tạo trực tiếp từ **Web Audio API Synthesizer** (chạy mượt mà, không phụ thuộc file âm thanh mạng).

### 4. 📝 Nạp & Sao lưu dữ liệu tiện lợi
- **Dán hàng loạt:** Hỗ trợ định dạng `từ - nghĩa`, `từ : nghĩa`, hoặc copy trực tiếp 2 cột từ **Excel / Google Sheets / Quizlet**.
- **Luyện từ sai:** Sau mỗi lượt học, dễ dàng bấm nút **"Chỉ học lại những từ làm sai"** cho đến khi thuộc toàn bộ.
- **Xuất / Nhập Backup:** Xuất file `.json` để lưu trữ hoặc chuyển sang máy khác.

---

## 🚀 Hướng Dẫn Sử Dụng

### Cách 1: Chạy trực tiếp (Không cần cài đặt)
1. Tải về hoặc clone repository:
   ```bash
   git clone https://github.com/DucHuy-cmd/Study.git
   ```
2. Nhấp đúp vào file `start.bat` (hoặc mở trực tiếp file `index.html` bằng trình duyệt Chrome, Edge, Cốc Cốc...).

---

## ⌨️ Phím Tắt Thao Tác Nhanh

| Phím tắt | Chức năng |
| :--- | :--- |
| `1`, `2`, `3`, `4` | Chọn đáp án trắc nghiệm |
| `Enter` | Kiểm tra câu trả lời / Sang câu tiếp theo |
| `Space` | Lật mặt thẻ Flashcard / Sang câu tiếp theo |
| `←` / `→` | Chuyển từ trước / sau ở chế độ Flashcard |
