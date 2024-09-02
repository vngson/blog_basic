const newsRouter = require('./news')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const meRouter = require('./me')


function route(app){

  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);


  // app.get('/', (req, res) => {
  //     res.render('home');
  // });
  
  // app.get('/', function (req, res) {
  //   res.send('Hello World')// Gửi 1 phản hồi đơn giản "Hello World!" đến trình duyệt, điều này sẽ làm cho
    //trình duyệt hiện lên chuỗi "Hello World!" khi có truy cập vào đường dẫn gốc
  // })// Cấu hình cho phương thức GET dẫn đến path "/" (đường dẫn gốc), khi có 1 yêu cầu đến đường dẫn gốc
  // hàm callback trong ngoặc sẽ được gọi với 2 biến req, res tương ứng với yêu cầu và phản hồi
  //req = reqest, res = response
  // app.get('/news', (req, res) =>{
  //   res.render('news');
  // })

  
  // app.get('/search', (req, res) =>{
  //   //console.log(req.query)
  //   res.render('search');
  // })
  
  // app.post('/search', (req, res) =>{
  //   console.log(req.body)
  //   res.render('search');
  // })
}

module.exports = route;