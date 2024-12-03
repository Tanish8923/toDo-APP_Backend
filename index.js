const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/toDo");
//mount(append) the todo API routes
app.use("/api/v1" , todoRoutes);

//     BASE_URL(http://localhost:port/)    +   api/v1/    +   todoRoutes

//server start
app.listen(PORT , () => {

    console.log(`Server started at port ${PORT}`);
    
})

//connect to the database

const dbConnect = require("./config/database")
dbConnect();

//default Route

app.get("/" , (req,res) =>{
    res.send(`<h1>This is homepage</h1>`)
} )