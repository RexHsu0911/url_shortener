// Express app
const express = require('express')
const app = express()
const port = 3000

// Serving static files(public) in Express
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect('/shortURL')
})

app.get('/shortURL', (req, res) =>{
  res.send('url_shortener')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})