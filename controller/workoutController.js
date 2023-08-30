const workouts = require('../model/workoutModel')



const getAllWorkouts = async(req,res) => {
    try {
        const workout = await workouts.find();
        res.status(200).json({workout})
    } catch (error) {
        res.status(400).json({msg : error})
    }

}

const getWorkoutById = async(req,res)=>{
    try {
        const {id} = req.params;
        const workout = await workouts.findById(id);
        if(!workout){
            return res.status(400).json({error: "Not Found ID"})
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

const createWorkout =async (req, res) => { 
    const {name, sets, reps} = req.body

    let emptyFields = []
  
    if (!name) {
      emptyFields.push('name')
    }
    if (!sets) {
      emptyFields.push('sets')
    }
    if (!reps) {
      emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }
    try {
      const workout = await workouts.create({ name, sets, reps })
      res.status(200).json(workout)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
}

const delteWorkout = async(req,res) => {
    try {
        const {id} = req.params; 
        const deleteWorkout = await workouts.findOneAndDelete(id);
        if(!deleteWorkout){
            return res.status(400).json({error: "Not Found ID"})
        }
        res.status(200).json({deleteWorkout})
    } catch (error) {
        res.status(400).json({msg: error.nessage})
    }
}

const updateWorkout = async(req,res) => {
    const {id} = req.params;
    try {
        const workout = await workout.findOneAndUpdate({id}, {...req.body})
        res.status(200).json({workout})        
    } catch (error) {
        res.status(400).json({error})
    }
}


module.exports = {
    getAllWorkouts,
    createWorkout,
    delteWorkout,
    getWorkoutById,
    updateWorkout
}