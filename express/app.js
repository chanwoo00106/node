const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();


app.set('port', 1000);// 이건 express 내에서 변수같은 느낌으로 사용됨
// port = 1000 이랑 같은 느낌

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log('모든 곳에서 실행');
    next();// 다음으로 넘어가기
});

app.use('/teemo', (req, res, next) => {
    console.log('한 곳에서만 실행');
    next();
});

app.get('/', (req, res) => {
    res.end('<h1>hello</h1>');
});

app.get('/teemo', (req, res) => {
    res.end('<h1>여기는 Teemo url</1h>');
});

app.get('/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.post('/html', (req, res) => {
    res.send(`<h1>이건 post 결과 입니다!</h1>\n<p>${req.body.text}</p>`)
});

//와일드 카드라고 name을 변수로 받아서 사용한다
app.get('/category/:name', (req, res) => {
    res.end(`${req.params.name}`);
});

app.get('/err', () => {
    throw new Error('hahaha');
});

app.use((req, res, next) => {
    res.status(404).send('이건 404 에러!!');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.send('에러입니다!!');
});

app.listen(3100, (err) => {
    if (err) console.error(err);
    console.log('http://localhost:3100');
});