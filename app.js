const express = require('express');
const app = express();
const router = require('express').Router();
require('./config/mongoconect')

const recursoRouter = require("./routes/recursoRoute");
const userRouter = require("./routes/userRoute");


const PORT = process.env.PORT || 3000



app.use(userRouter);
app.use(recursoRouter);



app.use(express.json())  

app.use(express.urlencoded({ extended: true }))
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}
);
app.use(router)