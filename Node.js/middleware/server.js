const uuid = require("uuid")        //used to generate random id
const express = require("express")
const customerRoutes = require("./customer-route")


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use("/customer", customerRoutes);

const employeeRoute = app.route("/Employee");


app.use(express.static("public", { maxAge: 10000 }))

app.use("/student", (req, res, next) => {
    // console.log(req.headers["x-request-id"]);
    if (!req.headers["x-request-id"]) {
        res.setHeader("x-request-id", uuid.v1())
    }
    next();
})


app.get("/student", (req, res, next) => {
    req.firstMiddleware = "first";
    next();
}, (req, res, next) => {
    console.log(req.firstMiddleware);
    res.send("Konnichiwa")
}
);


app.post("/", (req, res) => {
    console.log(req.body);
    res.send("ok")
})

//Error Handling**********************************
app.get("/SyncError", (req, res, next) => {
    // try {
    // throw new Error("Error thrown from Sync Error");
    // }
    // catch (ex) {
    //     // res.status(500).send({ message: ex.message });
    //     next(ex);
    // }
    throw new Error()
})

app.get("/AsyncError", (req, res, next) => {
    setTimeout(() => {
        try {
            throw new Error("Error thrown from Async Error")
        }
        catch (ex) {
            next(ex);
            // res.status(500).json({ message: ex.message })

        }
    }, 1000)
})

app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({ message: "Error thrown from error Middleware" })
    }
})


//Employee Route************************************************************************* */

employeeRoute.get((req, res) => {
    res.send("Sent By Employee Route")
})
//********************************************** */

app.listen(3000, () => {
    console.log("server is listening to port 3000");
})