const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    img:String,
    name: String,
    price: String,
    days: String,
    people:Number,
    loc: String,
    page:String,
    catogory:String
})

const UserModel = mongoose.model("users",UserSchema);
module.exports=UserModel
