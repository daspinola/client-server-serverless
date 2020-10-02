const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const fetch = require('node-fetch')

const app = express()

app.engine('handlebars', exphbs());

app.set('views', path.join(__dirname, 'private'))
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/client-render.html'))
})

app.get('/server-render', async function(req, res) {
  const welcomeText = 'Welcome to the server render version, this text was added on the server'
  const date = req.query.date === 'true'
    ? new Date()
    : undefined

  const serverlessResponse = await fetch('http://localhost:3000/dev/serverDate')
    .then(res => res.json())

  res.render('server-render', { welcomeText, date, serverlessResponse: serverlessResponse.serverDate })

})

app.listen(7000, function () {
  console.log(`Listening on port ${7000}!`)
})

