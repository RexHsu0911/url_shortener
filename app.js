const express = require('express')
// run Express Handlebars in Express
const { engine } = require('express-handlebars')
// run app in Express
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Serving static files(public) in Express
app.use(express.static('public'))

// homepage
// res.redirect 要求重新導向
app.get('/', (req, res) => {
  res.redirect('/shortURL')
})

// render index 
// res.render 呈現瀏覽器的畫面
app.get('/shortURL', (req, res) =>{
  res.render('index')
})

// start server and listen port
app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})