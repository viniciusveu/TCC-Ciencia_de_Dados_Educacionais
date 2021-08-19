const Express = require('express');

const app = Express();

app.use(Express.static('public'));
app.set('view engine', 'ejs');

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/classificacao', (req, res) => {
    res.render('classificacao');
});

app.get('/regressao', (req, res) => {
    res.render('regressao');
});

app.listen(80, () => {
    console.log('app listen on port 3000');
});