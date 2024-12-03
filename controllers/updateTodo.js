//import the model
const todoSchema = require("../models/todoSchema");
const router = require("../routes/toDo");

exports.updateTodo = async(req,res) => {

    try {

        const {id} = req.params;

        const {title , description} = req.body;
        const response = await todoSchema.findByIdAndUpdate(id , {
            title , 
            description , 
            updatedAt : Date.now(),
        })

        if (!response) {
            return res.status(404).json({
              success: false,
              data : null ,
              message: "id not found",
            });
          }
      
          res.status(200).json({
            success: true,
            data: response,
            message: "Data updated successfully",
          });
  
      } catch (error) {
          console.error(error);
          res.status(500).json({
            success: false,
            data : null , 
            message: error.message,
          });
        }
}