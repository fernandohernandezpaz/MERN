const express = require('express');
const router = express.Router();
const {getGoals, getGoal, saveGoal, updateGoal, deleteGoal} = require('../controllers/goalController');

router.get('', getGoals);

router.get('/:id', getGoal);

router.post('', saveGoal);

router.put('/:id', updateGoal);

router.delete('/:id', deleteGoal);

module.exports = router;