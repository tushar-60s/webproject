const express = require('express');
const { template } = require('handlebars');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000

// public static path
const static_path=(path.join(__dirname,"../public"));
app.set('view engine', 'hbs')
app.use(express.static(static_path))


const template_path = path.join(__dirname , "../templates/views")
app.set("views", template_path)

const partials_path = path.join(__dirname, "../templates/partials")
hbs.registerPartials(partials_path)




app.get("",(req,res)=>{
    // here we render index.hbs
    res.render("index")

})
app.get("/about",(req,res)=>{
    // here we render about.hbs
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
res.render('error')

})
app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})
