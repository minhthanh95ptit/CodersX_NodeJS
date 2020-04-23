Môi trường chạy: NodeJS
Ngôn ngữ : Javascript
Framework :Express JS

//Khởi tạo:
1. npm init
2. npm install express--save
3. Tạo File index.js()

//Template engine 
SPA vs MPA
Tempate engine là ngôn ngữ render HTML
- Pug(jade) 
- Mustache
- ejs

1. npm install pug --save
2. Tạo folder views
3. Thêm vào index.js
    - app.set('view engine','pug)
    - app.set('views', ./views)

Web: pughtml.com conver HTML <-> Pug

res.render(path(file_template),key=value)