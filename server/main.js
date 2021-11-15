const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser());

const port = process.env.PORT ? process.env.PORT: 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cookie', (req, res) => {
  const cookieVal = req.params['cookie'] ? req.params['cookie'] : 'foo'
  res.cookie('ThisIsMyCookie', randomNumber, { maxAge: 900000, httpOnly: true });
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
