import express from "express";
import todoController from "../controller/ToDoController.js"

var router = express.Router();
var Controller = new todoController();

router.get("/todo", Controller.getToDo);
router.post("/todo", Controller.createToDo);
router.put("/todo/:id", Controller.updateToDo);
router.delete("/todo/:id", Controller.deleteToDo);
router.put("/done/todo/:id", Controller.updateDone);

export default router;