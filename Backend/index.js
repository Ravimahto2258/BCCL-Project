const { on } = require('events');
const express = require('express')
var mongoose = require('mongoose');
const { type } = require('os');
const path = require('path')
const port = 3000;


const app= express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/RegistrationData')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection is successful")
})

const userSchema = new mongoose.Schema({
    fullname:String,
    mothername:String,
    fathername:String,
    dob:Date,
    email: {
        type:String,
        unique:true
    },
    phoneno:{
        type:Number,
        unique:true
    },
    gender:String,
    category:String,
    country:String,
    state:String,
    city:String,
    district:String,
    pincode:{
        type:Number
    },
    hobbies:String,
    matriculation:String,
    Intermediate:String,
    matriculationrollno:Array,
    matriculationYear:Array,
    matriculationpercent:Array,
    Intermediaterollno:Array,
    IntermediateYear:Array,
    Intermediatepercent:Array,
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.post('/post',async (req,res)=>{
    const{fullname, mothername, fathername, email, phoneno, dob, gender, category, country, state, district, pincode, hobbies, matriculationYear,IntermediateYear,Intermediaterollno, Intermediatepercent, Intermediate, matriculationpercent,matriculationrollno,} = req.body
    const user = new Users({
        fullname,
        mothername,
        fathername,
        dob,
        email,
        phoneno,
        gender,
        category,
        country,
        state,
        district,
        pincode,
        hobbies,
        matriculationYear,
        matriculationpercent,
        matriculationrollno,
        Intermediate,
        IntermediateYear,
        Intermediatepercent,
        Intermediaterollno,
    })
    await user.save()
    console.log(user)
    res.send("Form submitted successfully")
})

app.listen(port,()=>{
    console.log("Server started")
})