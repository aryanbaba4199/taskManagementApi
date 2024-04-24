const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/taskRoutes');


const app = express();

require('dotenv').config();

app.use(express.json());

// ----------Connecting to Database ----------
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser : true,
   
}).then(()=> console.log('Connected to database'))
.catch(err => console.error('Database Connection Failed', err));


// ----------Middleware ----------
app.use('/api/tasks', routes);

// ---Defining Port ----------
const PORT = process.env.PORT || 3000;


// -------Starting the server ----------
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

