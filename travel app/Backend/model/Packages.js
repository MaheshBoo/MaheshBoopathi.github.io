const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    img:String,
    name: String,
    price: String,
    days: String,
    people:Number,
    loc: String,
    page:String,
    catogory:String
})

const packageModel = mongoose.model("packages",packageSchema);
module.exports=packageModel
