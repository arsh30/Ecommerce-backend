const express = require('express')
const env = require('dotenv')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');  
const adminRoutes = require('./routes/admin/auth');  

//env variable
env.config();

//mongoDB connection
//mongodb+srv://admin:<password>@cluster0.ttizn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ttizn.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(() => {
    console.log('Database connected');
});

app.use(bodyParser());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})