const express = require('express')
const router = express.Router()

const datos = []

router.get("/", (req, res) => {
    res.render('form', {datos});
})
router.get("/tablaEjs", (req, res) => {
    res.render("partials/tabla", {datos});
})
router.post("/personas", (req, res) => {
    datos.push(req.body)
    res.render('form', {datos});
})
 module.exports= router;