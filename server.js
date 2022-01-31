const express = require ('express');
const path = require('path');
const helmet = require('helmet');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next)=>{
    res.send('<h2>Local host 3000 </h2>')
});
app.get('/login', (req, res, next)=>{
    res.render('login', {msg:'Login'})
});
app.post('/process_login', (req, res, next)=>{
    //req.body will parses the http message fro sent data!
    res.json(req.body)
});



app.listen(3000, ()=>console.log('http://localhost:3000'));