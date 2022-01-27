const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile("D:/Websites/Backend/Starting out node/index.html")
})

app.get('/hex', (req, res) => {
  res.sendFile("D:/Websites/Backend/Starting out node/hex.html")
})

app.get('/about', (req, res) => {
  res.sendFile("D:/Websites/Backend/Starting out node/about.html")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})