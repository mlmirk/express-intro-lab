
// import modules

import express from "express"
import {find} from './data/dogs-db.js'
//create express apps
const app= express()



//confige the app
app.set('view engine', 'ejs')

app.get('/dogs', function(req, res) {
  find({}, function(error, dogs) {
    res.render('./dogs/index', {
      dogs:dogs,
      error:error
    })
  })
})





app.get('/about-us', (req,res)=>{
  res.render('about-us')
})


//mount middleware




// mount routes 




//listen at port 3000


app.listen(3000, ()=>{
  console.log("listening on port 3000!");
})
