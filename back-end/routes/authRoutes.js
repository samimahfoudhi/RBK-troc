const express = require("express");
const passport = require("passport")
const jwt = require("jsonwebtoken")
const authKeys = require("../lib/authkeys")
const admin = require("../models/admin")
const seller = require("../models/seller")
const user = require("../models/user")
const router = express.router()

router.post("/signUp" , (req,res)=>{
const data = req.body;
let test = new Test({
email : data.email,
password : data.password
});

test.save().then(()=>{
    const testDetails = 
    test.type == "seller"
    ?new Seller ({
        id : test._id,
        name :  data.sellerName,
        phone : data.phoneNumber
    })
    : new Product ({
        image : data.i

    })
})





})