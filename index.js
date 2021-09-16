const Express = require('express');
const path = require('path');
var favicon = require('serve-favicon')
require('dotenv').config();

//Creanting server
const app = Express();

//Config middlewares and views engine
app.use(Express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('view engine', 'ejs');

//Routes
app.get('/', (req, res) => res.status(301).redirect('index'));
app.get('/index', (req, res) => res.status(200).render('index'));
app.get('/classificacao', (req, res) => res.status(200).render('classificacao'));
app.get('/regressao', (req, res) => res.status(200).render('regressao'));

//Listen server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});