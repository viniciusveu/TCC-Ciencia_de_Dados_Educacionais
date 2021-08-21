const Express = require('express');
const cors = require('cors');

//Creanting server
const app = Express();

//Config middlewares and views engine
app.use(Express.static('public'));
app.use(cors);
app.set('view engine', 'ejs');

//Routes
app.get('/index', (req, res) => res.render('index'));
app.get('/classificacao', (req, res) => res.render('classificacao'));
app.get('/regressao', (req, res) => res.render('regressao'));

//Listen server
app.listen(3000, () => {
    console.log('App listen on port 3000');
});