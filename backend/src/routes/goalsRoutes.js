const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.status(200).json({
        message: 'Get goals'
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: `Got goal ${req.params.id}`
    });
});

router.post('', (req, res) => {
    res.status(201).json({
        message: 'Set goal'
    });
});

router.put('/:id', (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`
    });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: `Deleted goal ${req.params.id}`
    });
});

module.exports = router;