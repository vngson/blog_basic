const express = require('express') // Nạp thư viên express vào bằng lệnh require
const app = express()// Tạo ra biến app, gán app = express(), express() sẽ trả về 1 đối tượng 
//tượng trưng cho ứng dụng của ta, app sẽ được dùng để cấu hình và xử lý những yêu ầu HTTP trong ứng dụng
const port = 3000 // Định nghĩa số cổng mà ứng dụng sẽ lắng nghe để tiếp nhận các yêu cầu HTTP từ trình duyệt web hoặc ứng dụng khác

app.get('/', (req, res) => {//Định nghĩa 1 route "/"
  res.send('Hello World!')// Gửi 1 phản hồi đơn giản "Hello World!" đến trình duyệt, điều này sẽ làm cho
  //trình duyệt hiện lên chuỗi "Hello World!" khi có truy cập vào đường dẫn gốc
}) // Cấu hình cho phương thức GET dẫn đến path "/" (đường dẫn gốc), khi có 1 yêu cầu đến đường dẫn gốc
// hàm callback trong ngoặc sẽ được gọi với 2 biến req, res tương ứng với yêu cầu và phản hồi

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})// Phương thức listen để lắng nghe các kết nối đến cổng port
// khi máy chủ express đuợc khởi chạy và bắt đầu lắng nghe trên cổng này thì hàm callback trong ngoặc sẽ
// được chạy và trả về thông báo `Example app listening on port ${port}`