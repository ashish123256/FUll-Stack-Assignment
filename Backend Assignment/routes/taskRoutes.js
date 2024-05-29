import express from "express";
import { createTask, deleteTask, getAlltask, getTaskById, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", getAlltask);
router.get("/tasks/:id",getTaskById);
router.post('/tasks',createTask);
router.put("/tasks/:id",updateTask);
router.delete("/tasks/:id",deleteTask);




export default router;