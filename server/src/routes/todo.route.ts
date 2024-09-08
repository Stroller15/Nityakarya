import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getAllTodos,
  updateTodoById,
} from "../controllers/todo.controller";

const router = Router();

router.post("/", createTodo);
router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodo);

export default router;
