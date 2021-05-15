const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(__dirname + '/eghtm.html')
 
})
//mongo connection
mongoose.connect('mongodb://localhost:27017/Modecrud', (err) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})