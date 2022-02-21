const express = require('express');
const dotenv = require('dotenv').config()
const goalsRoutes = require('./routes/goalsRoutes');
const PORT = process.env.PORT || 6000;

const app = express();

app.use('/api/goals', goalsRoutes)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});