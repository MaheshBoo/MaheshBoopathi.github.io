const mongoose=require('mongoose');

const detailSchema=new mongoose.Schema({
    catogory:String,
    d1:String,
    d2:String,
    d3:String,
    d4:String,
    d5:String,
    d6:String,
    info:String
})

const detailModel = mongoose.model("details",detailSchema);
module.exports=detailModel