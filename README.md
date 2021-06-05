# MIKUFU
**Môn học:** Xử lý tiếng nói

**Dự án**: Mikufu - Tìm kiếm nhạc

**Thành viên:**
 1. 18021113 - Nguyễn Thị Minh Tâm
 2. 18020889 - Đàm Tuấn Minh

## Mô tả dự án

Đôi khi chúng ta tình cờ nghe được một đoạn nhạc rất hay nhưng không tìm được tên bài nhạc để lưu lại, trang web Mikufu có thể giúp tìm kiếm bài nhạc đó bằng một đoạn ghi âm .

## Các công nghệ sử dụng

 - **Ngôn ngữ:** Python
 - **Web:** Node.js
 - **CSDL:** MySQL
 - **Nguồn tham khảo:** 
    - Tài liệu lý thuyết:  [willdrevo/Audio Fingerprint Identifying](https://willdrevo.com/fingerprinting-and-audio-recognition-with-python/)
    - Mã nguồn: [itspoma(github)/Audio Fingerprint Identifying](https://github.com/itspoma/audio-fingerprint-identifying-python)

## Giải pháp hoạt động

 1. Xử lý và lưu trữ bản nhạc trên CSDL:
- Trích xuất Spectrogram của bản nhạc.
-  Lấy ra những điểm có giá trị cao hơn hẳn so với những điểm xung quanh làm đặc trưng của bản nhạc (peaks).
- Mã hóa peaks và khoảng thời gian giữa mỗi peak với nhau, lưu đoạn mã hóa vào CSDL.
 3. Nhận diện bản nhạc từ đoạn ghi âm:
- Sau khi nhận input vào là bản ghi âm, đoạn ghi âm được xử lý giống phía trên và đưa vào so sánh với dữ liệu đã được lưu trong CSDL.
- Đoạn mã đã được xử lý sẽ được tính toán sự khác biệt và cho ra đoạn mã có độ tương tự cao nhất trong dữ liệu đã được lưu.

 ## Kết quả hiện tại
 - Có thể tìm kiếm bằng các đoạn nhạc từ 6-7s trong môi trường có tiếng ồn vừa phải.
 - Bài nhạc cần tìm cần có trong CSDL (phù hợp cho các phần mềm nội bộ hoặc các trang web sở hữu lượng nhạc lớn).
 - Nếu bài nhạc cần tìm không có trong CSDL, một bài nhạc có đoạn nhạc với độ tương quan lớn nhất với đoạn ghi âm sẽ được sử dụng để gợi ý.

## Tương lai
- Làm giàu thêm CSDL.
- Ứng dụng thêm api để trích xuất lời để tìm kiếm với những đoạn ghi âm không sử dụng nhạc nguyên bản và tìm kiếm trực tuyến.
- Thêm danh sách gợi ý với những bản nhạc có độ tương tự cao với đoạn ghi âm.

## Hướng dẫn sử dụng Web
Khởi chạy

    $ nodemon app.js
Hoặc

    $ yarn run nodemon app.js

Địa chỉ local web: [localhost:8080](localhost:8080)
- Chọn nút thu âm (bên trái) để thu âm đoạn nhạc cần nhận diện.
- Chọn nút dừng (bên phải) để dừng thu âm và nhận kết quả trả về tên bài hát.
