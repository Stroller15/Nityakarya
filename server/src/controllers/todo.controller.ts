import { Todo, Status } from '@prisma/client';
import { Request, Response } from 'express';
import { prisma } from '../utils/db';

const createTodo = async (req: Request, res: Response) => {
    const {description, status}:{description: string, status?: Status} = req.body;

    try {
        const newTodo: Todo = await prisma.todo.create({
            data: {
                description,
                status: status || 'pending'
            }
        })
        res.status(201).json({
            message: "todo created successfully"
        })
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