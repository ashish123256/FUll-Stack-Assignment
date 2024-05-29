import express from "express";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes.js"
dotenv.config();


const app = express();

const port = process.env.PORT || 8000;


app.use(express.json());

//routes
app.use("/",taskRoutes);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})