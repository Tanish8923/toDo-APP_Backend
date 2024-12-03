//import the model
const todoSchema = require("../models/todoSchema");

exports.getTodo = async(req,res) => {

    try {

        //fetch all todo from database
        const response = await todoSchema.find({});
        if(!response){

            return res.status(404).json(
                {
                    success:false,
                    data:null,
                    message:"No data found"
                }
            );

        }else{
            return res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:"Entire data fetched successfully"
                }
            );
        }

    } catch (error) {

        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:null,
                message:error.message
            }
        );
        
    }
};