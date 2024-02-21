const mongoose=require('mongoose');

const bookingSchema=new mongoose.Schema({
    name:String,
    email:String,
    numberOfPeople:Number,
    phoneNumber:Number,
    departureDtae:Date,
    gender:String,
    age:Number
})

const bookingModel = mongoose.model("bookings",bookingSchema);
module.exports=bookingModel