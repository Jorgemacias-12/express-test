const express = require('express')
const colors = require('colors')
const path = require('path')

const app = express();

app.use('/public', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'))

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(80, () => {
    console.log("Backend on!".green.inverse);
})
