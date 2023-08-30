const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/workoutRoutes')
const userRoutes = require('./routes/userRoute')


const app = express();
app.use(express.json())

app.use('/api/workouts', routes)
app.use('/api/user', userRoutes)



mongoose.connect('mongodb+srv://adeelismailaalogics:123456789Adeel@nodeapi.vsym75z.mongodb.net/workOutAPI?retryWrites=true&w=majority')
.then(() => {
    app.listen(8000, () =>{
        console.log("APP is running on 8000")
    })
    console.log("MongoDB Connected")
}).catch((error) => {
    console.log(error)
})