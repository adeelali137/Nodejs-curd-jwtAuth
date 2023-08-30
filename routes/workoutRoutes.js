const express = require('express');
const router = express.Router();
const {
    getAllWorkouts,
    createWorkout,
    delteWorkout,
    getWorkoutById,
    updateWorkout
} = require('../controller/workoutController')

router.get('/', getAllWorkouts)

router.get('/:id', getWorkoutById)

router.post('/createworkout', createWorkout)

router.post('/:id', updateWorkout)

router.delete('/:id', delteWorkout)



module.exports = router