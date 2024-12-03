const express = require("express");

//Modular Structure: router helps in organizing your routes into different modules/files,
//                   improving code maintainability as your app grows.

const router = express.Router();

//import controller

const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo");
const {getSingleTodo} = require("../controllers/getSingleTodo")
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");

//define API routes

router.post("/createTodo" , createTodo);
router.get("/getTodo" , getTodo);
router.get("/getSingleTodo/:id" , getSingleTodo);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo);

module.exports = router;