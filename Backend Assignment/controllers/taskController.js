let tasks  = [];
let currentId = 1;


//Retrieve all tasks
export const getAlltask = (req,res) =>{
    try {
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

// Retrieve a specific task by ID
export const getTaskById = (req,res) =>{
    const taskId = parseInt(req.params.id,10);
    try {
        const task = tasks.find(task => task.id === taskId);

        if(task){
            res.status(200).json(task);
        }
        else{
            res.status(404).json({message: "Task not found" })
        }
        
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

// Create a new task
export const createTask = (req,res) =>{
    const {title, description} = req.body;
    try {
        if(!title || !description){
            return res.status(400).send({ error: 'Title and description are required' })  
        }
        const newTask = {id:currentId++, title,description};
        tasks.push(newTask);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

// Update an existing task by ID
export const updateTask = (req,res) =>{
       const taskId = parseInt(req.params.id,10);
       const {title, description} = req.body;
       try {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
         if(taskIndex !== -1){
            if (!title || !description) {
                return res.status(400).send({ error: 'Title and description are required' });
            }
            tasks[taskIndex] = { id: taskId, title, description };
            res.status(200).json(tasks[taskIndex]);
         }
         else {
            res.status(404).send({ error: 'Task not found' });
        }
       } catch (error) {
        res.status(500).json({error:error.message});
       }
}

// // Delete a task by ID
export const deleteTask = (req,res) =>{
    const taskId = parseInt(req.params.id,10);
    try {
        const taskIndex = tasks.findIndex(task=> task.id === taskId);
        if(taskIndex !== -1){
            tasks.splice(taskIndex,1);
            res.status(200).json({message: 'Task deleted successfully'});
        }
        else{
            res.status(404).send({error: 'Task not found'});
        }
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}



