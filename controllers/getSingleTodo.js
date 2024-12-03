//import the model
const todoSchema = require("../models/todoSchema");

exports.getSingleTodo = async(req,res) => {

    try{

        // Extract the ID from request parameters
        const id  = req.params.id; 

        // Find the ToDo item by ID
        const response = await todoSchema.findById(id); 
    
        if (!response) {
          return res.status(404).json({
            success: false,
            data: null,
            message: "ToDo item not found",
          });
        }
    
        res.status(200).json({
          success: true,
          data: response,
          message: "Data fetched successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          data: null ,
          message: error.message,
        });
      }
};