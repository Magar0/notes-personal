const express = require("express");
const router = express.Router();

const customerData = [{
    id: 1,
    name: "Thapa",
    orderNo: "123"
},
{
    id: 2,
    name: "Anuska",
    orderNo: "12345"
},
{
    id: 3,
    name: "Asmita",
    orderNo: "345"
}]

router.get("/", (req, res) => {
    res.status(200).json({ customerData })
})

router.get("/:id", (req, res) => {
    res.status(200).json({
        data: customerData.filter(c => c.id == req.params.id)
    })
})

module.exports = router;
