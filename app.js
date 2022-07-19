const express=require("express")
const path=require("path");
const app=express();
const bodyparser=require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/signNetflix');
const port=8000;
 
// Define mongoose
 var signuSchema = new mongoose.Schema({
    name: String,
    Phone: String,
    Email : String,
    password: String,
    password: String,
  });
  var signu = mongoose.model('signu', signuSchema);

var signSchema = new mongoose.Schema({
    Email : String,
    Password: String,
  });
  var sign = mongoose.model('sign', signSchema);

//express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views'))
//endpoints
app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params);
})
app.get('/cancel',(req,res)=>{
    const params={}
    res.status(200).render('cancel.pug',params);
})
app.get('/price',(req,res)=>{
    const params={}
    res.status(200).render('price.pug',params);
})
app.get('/watch',(req,res)=>{
    const params={}
    res.status(200).render('watch.pug',params);
})
app.get('/sign',(req,res)=>{
    const params={}
    res.status(200).render('sign.pug',params);
})
app.get('/signu',(req,res)=>{
    const params={}
    res.status(200).render('signu.pug',params);
})
app.post('/sign',(req,res)=>{
    var mydata = new sign(req.body);
    mydata.save().then(()=>{
        res.send("This items had been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item had not saved to the database")
    })
    
})
app.post('/signu',(req,res)=>{
    var mydata = new signu(req.body);
    mydata.save().then(()=>{
        res.send("This item had been saved to the database")
    }).catch(()=>{
        res.status(400).send("Item had not saved to the database")
    })
    
})
app.listen(port,()=>{
    console.log(`The application started sucessfuly on port ${port}`);
})