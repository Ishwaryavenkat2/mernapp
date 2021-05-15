const mongoose = require('mongoose');

//mongo connection
mongoose.connect('mongodb://localhost:27017/EmployeDb',  { useUnifiedTopology: true,useNewUrlParser: true } ,
(err) => {  
if (err) return console.error(err)
  console.log('Connected to Database')
})
module.exports = mongoose;
