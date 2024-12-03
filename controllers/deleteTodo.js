//import the model
const todoSchema = require("../models/todoSchema");

//  You are using a named export when you write exports.dbConnect = () => { ... }. 
//  This means that the function dbConnect will be exported with the same name, and 
//  you need to import it with curly braces {} wherever you're importing it.


exports.deleteTodo = async(req,res) => {

    try {
        // Extract the ID from request parameters
        const { id } = req.params; 

        // Find the ToDo item by ID
        const response = await todoSchema.findByIdAndDelete(id); 
    
        if (response === null) {
          return res.status(404).json({
            success: false,
            message: "id not found",
          });
        }
    
        res.status(200).json({
          success: true,
          message: "Data deleted for given id successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
};