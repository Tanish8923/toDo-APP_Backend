// we can create schema using mongoose
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title:{
        type : String , 
        required : true , 
        maxLength : 500 ,
    },

    description:{
        type : String , 
        required : true , 
        maxLength : 500 ,
    },

    createdAt:{
        type : Date,
        required : true,
        default : Date.now(),
    },

    updatedAt:{
       type : Date,
       required : true,
       default : Date.now(),
    }
});

module.exports = mongoose.model("todoSchema" , todoSchema);