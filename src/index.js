// import express from 'express';
const handlebars = require('express-handlebars');
const path = require('path');
const express = require('express'); // Nạp thư viên express vào bằng lệnh require
const morgan = require('morgan');
const app = express();// Tạo ra biến app, gán app = express(), express() sẽ trả về 1 đối tượng 
//tượng trưng cho ứng dụng của ta, app sẽ được dùng để cấu hình và xử lý những yêu ầu HTTP trong ứng dụng

const port = 5000 ;// Định nghĩa số cổng mà ứng dụng sẽ lắng nghe để tiếp nhận các yêu cầu HTTP từ trình duyệt web hoặc ứng dụng khác

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));//midleware sử lý data dưới dạng form để chúng ta có thể lấy được giá trị bằng req.body, tức là data sẽ có thể lưu vào body
app.use(express.json({
  extended:true
}));//midleware sử lý data được gửi từ js lên để chúng ta có thể lấy được giá trị bằng req.body, tức là data sẽ có thể lưu vào body


// app.use(morgan('combined'));

const hbs = handlebars.create({extname: '.hbs'});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

//Định nghĩa route "/"

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});// Phương thức listen để lắng nghe các kết nối đến cổng port
// khi máy chủ express đuợc khởi chạy và bắt đầu lắng nghe trên cổng này thì hàm callback trong ngoặc sẽ
// được chạy và trả về thông báo `Example app listening on port ${port}`