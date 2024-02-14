const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());

//GET***********************************/
app.get('/customers', async (req, res) => {
    try {
        const result = await db.pool.query("select * from customers");
        res.send(result);
    } catch (err) {
        next(err)
    }
})

//POST***************************************/
app.post('/customers', async (req, res, next) => {
    const customer = req.body;
    try {
        await db.pool.query("insert into customers(customername,contactname,address,city,postalcode,country) values(?,?,?,?,?,?)", [
            customer.customerName,
            customer.contactName,
            customer.address,
            customer.city,
            customer.postalCode,
            customer.country
        ])
        res.status(201).json("Created");
    } catch (err) {
        next(err)
    }
})


//PUT***********************************************************/

app.put('/customers/:id', async (req, res, next) => {
    const customer = req.body;
    try {
        await db.pool.query("update customers set customerName=? where customerId=?", [
            customer.customerName,
            req.params.id
        ])
        res.status(201).json({ message: "Updated" })
    } catch (ex) {
        next(ex)
    }
})

//DELETE *********************************************************************/
app.delete('/customers/:id', async (req, res, next) => {
    const id = req.params.id
    try {
        await db.pool.query("delete from customers where customerId= ? ", [id])
        res.status(200).json({ message: "Deleted" })
    } catch (ex) {
        next(ex)
    }
})


app.use((error, req, res, next) => {
    if (error) {
        res.status(500).json({ message: "something went wrong" })
    }
})

app.listen(3000, () => {
    console.log("App is listening 3000 port");
})