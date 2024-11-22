const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set('views', 'views');

app.get('/',(req,res)=>{
    res.render('home',{
        content: 'Home page',
        message:'welcome to Home page'

    })
})


app.get('/about',(req,res)=>{
    res.render('about',{
        content: 'About page',
        message:'welcome to about page',
        array:[1,2,3,4,5]

    })
})

 
 

app.listen(4000,()=>{
    console.log("server is listening on",4000)
})