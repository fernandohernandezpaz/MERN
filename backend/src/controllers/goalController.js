const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    });
}

const getGoal = (req, res) => {
    res.status(200).json({
        message: `Got goal ${req.params.id}`
    });
}

const saveGoal = (req, res) => {
    res.status(201).json({
        message: 'Set goal'
    });
}

const updateGoal = (req, res)=> {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    });
}

const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Deleted goal ${req.params.id}`
    });
}

module.exports = {
    getGoals,
    getGoal,
    saveGoal,
    updateGoal,
    deleteGoal
}