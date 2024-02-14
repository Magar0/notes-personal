const studentRoutes = require('./student.js');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use("/student", studentRoutes);


app.listen(4000, () => {
    console.log("App is listening on Port no. 4000");
})