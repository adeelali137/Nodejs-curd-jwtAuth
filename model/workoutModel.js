const mongoose = require('mongoose');
const workoutSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    reps:{
        type: Number,
        require: true
    },
    sets:{
        type: Number,
        require: true
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('workouts', workoutSchema);