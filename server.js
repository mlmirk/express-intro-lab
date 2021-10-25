
// import modules

import express from "express"

//create express apps
const app= express()



//confige the app

app.get('/',(req,res)=>{
  res.send("<h1>hello, worlds</h1>")
})
app.get('/about-us', (req,res)=>{
  res.send("<h1>About us</h1>")
})


//mount middleware




// mount routes 




//listen at port 3000


app.listen(3000, ()=>{
  console.log("listening on port 3000!");
})
