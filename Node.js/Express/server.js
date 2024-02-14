const express = require('express');
const app = express();
app.use(express.json())

const data = [{
    id: 1,
    name: 'Thapa',
    age: '25',
    city: "Jorhat",
    salary: "15000"
},
{
    id: 2,
    name: 'Anuska',
    age: '15',
    city: "KTM",
    salary: null
},
{
    id: 3,
    name: 'Asmita',
    age: '22',
    city: "Sydney",
    salary: "100000"
}
]

//endpoint
//GET***********************************************************/

//app.method("path",handler())  //STRUCTURE.....

// app.use((req, res, next) => {
//     res.send("response stop here")
//	next();					//next() is important to go to next middleware
// })

app.get("/employees", (req, res) => {
    res.status(200).json({ data: data });
})


app.get("/employees/:id", (req, res) => {
    const id = req.params.id;
    let employee = data.find(e => e.id == id);

    if (employee) {
        res.status(200).json({ employee })
    } else {
        res.status(404).json({ message: "Requested Employee does not exist" })
    }
})

// POST **************************************** /

app.post("/employees", (req, res) => {
    let employee = req.body;

    //validating request......
    for (const key in employee) {
        if (key == "id" || key == "name" || key == "age" || key == "city" || key == "salary") {
            continue;
        } else {
            res.status(400).json({ message: "badrequest , Data is incorrect" })
        }
    }

    data.push(employee);
    res.send(201)
})




app.put("/employees/:id", (req, res) => {
    let employee = req.body;
    let ind = data.findIndex(e => e.id == req.params.id);
    data.splice(ind, 1, employee);
    console.log(ind);
    res.send(201)
})

app.delete("/employees/:id", (req, res) => {
    const id = req.params.id;
    const ind = data.findIndex(e => e.id == id)
    if (ind < 0) {
        res.send(404)
    } else {
        data.splice(ind, 1)
        res.send(200)
    }
})
// app.use((req, res, next) => {
//     console.log("last middleware");
//     next();
// })


app.listen(3000, () => {
    console.log("Application is listening to post 3000");
})