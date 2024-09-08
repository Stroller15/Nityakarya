import express from "express";
import todoRoutes from './routes/todo.route'
import dotenv from 'dotenv'

// server intance
const app = express();

// Middlewares
dotenv.config();
app.use(express.json());


// API Routes
app.get('/api/todos/ping', (req, res) =>{
    res.status(200).json({
        message: "pong"
    })
})

app.use('/api/todos', todoRoutes)




export default app;