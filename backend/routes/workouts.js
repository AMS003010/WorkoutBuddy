const express = require('express')
const {
    createWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
    getWorkout
} = require('../controllers/workoutControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/',getWorkouts)

router.get('/:id',getWorkout)

router.post('/', createWorkout)

router.delete('/:id',deleteWorkout)

router.patch('/:id',updateWorkout)

module.exports = router