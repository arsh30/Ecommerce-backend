const express = require('express')
const env = require('dotenv')
const app = express()
const port = 3000
// const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//routes
const authRoutes = require('./routes/auth');  
const adminRoutes = require('./routes/admin/auth');  
const categoryRoutes = require('./routes/category');   // category
// const productRoutes = require('./routes/product');   // category
const productRoutes = require("./routes/product");


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

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
// app.use('api', productRoutes);
app.use("/api", productRoutes);


app.listen(process.env.PORT, () => {  //here we can simple add the port
    console.log(`App listening at http://localhost:${process.env.PORT}`);
})

// create Nested categories eg flipkart men have multiple choices to wear use recursive approach