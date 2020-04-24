# 0. Môi trường chạy: 
    NodeJS Ngôn ngữ : 
    Javascript Framework :
    Express JS

# 1. Khởi tạo:

    npm init
    npm install express--save
    Tạo File index.js()

# 2. Template engine
    SPA vs MPA Tempate engine là ngôn ngữ render HTML

    Pug(jade)
    Mustache
    ejs

npm install pug --save
Tạo folder views
Thêm vào index.js
    app.set('view engine','pug)
    app.set('views', ./views)
Web: pughtml.com conver HTML <-> Pug

res.render(path(file_template),key=value)

# 3. Query Parameters
 Sau dấu ? và do người dùng nhập vào
 req.body.q => q user.name.indexOf(q) -> -1 là k tồn tại

# 4. POST Method 
 gửi dữ liệu lên server xử lý và lưu lại
 Contentype - kiểu dũ liệu
 
 Để xem được body thì ta install body-parser
 npm install body-parser --save

 Thêm require body-parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

# 5.Nodemon 
Để server tự restart khi có thay đổi
install nodemon --save-dev , trong nội hàm máy mình k úp lên server
Thêm vào srcipt trong package.json
"start": "nodemon index.js",

# 6.lowdb
Database nhỏ dùng cho dự án nhỏ và test
npm install lowdb --save

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
//Khai báo mặc định
db.defaults({users: []})
    .write();
Fix lỗi server restart liên tục
add: nodemon.json
{
    "ignore":['db.json']
}