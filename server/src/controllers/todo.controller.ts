import { Todo, Status } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../utils/db';

const createTodo = async (req: Request, res: Response) => {
    const { description, status }: { description: string; status?: Status } = req.body;
  
    if (!description) {
      return res.status(400).json({ error: "Description is required" });
    }
  
    try {
      const newTodo: Todo = await prisma.todo.create({
        data: {
          description,
          status: status || 'pending',
        },
      });
  
      return res.status(201).json({
        message: "Todo created successfully",
        todo: newTodo, // Send back created todo
      });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "error while creating"
            
        })
    }
  };

const getAllTodos = async () => {
    try {
        
    } catch (error) {
        
    }
}

const getTodoById = async () => {
    try {
        
    } catch (error) {
        
    }
}

const updateTodoById = async () => {
    try {
        
    } catch (error) {
        
    }
}

const deleteTodo = async () => {
    try {
        
    } catch (error) {
        
    }
}


export {
    createTodo,
    getTodoById,
    getAllTodos,
    deleteTodo,
    updateTodoById
}