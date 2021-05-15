const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(__dirname + '/eghtm.html')
 
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})