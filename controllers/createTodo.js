//import the model
const todoSchema = require("../models/todoSchema");

// define router handler
createTodo = async(req,res) => {

    try {

        //extract title and description from request body
        const {title , description} = req.body;
        //create a new Todo obj and insert in db
        const response = await todoSchema.create({title,description});
        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created successfully"
            }
        );
        
    } catch (error) {

        console.error(error);
        res.status(500).json(
            {
                success:false,
                data:"Internal server error",
                message:error.message
            }
        );
        
    }
}

module.exports = {createTodo};