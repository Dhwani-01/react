const mongoose = require('mongoose');

const productSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    }
})


module.exports=mongoose.model("Product",productSchema)

