const mongoose =require("mongoose");

const mentorSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    roll:{
        type:String,
        required: true,
        unique:true,
    },
    class:{
        type:String,
        required: true
    },
    subjects:{
        type:[String],
        required: true
    },
    gender:{
        type:String,
        required: true
    },
   
});
var mentordata = mongoose.model('mentordata',mentorSchema);
module.exports=mentordata;