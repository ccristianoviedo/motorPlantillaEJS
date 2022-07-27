// Obligatorio para express, pero a diferencia de handlerBars, no se lo requiere
const express = require('express')
const app = express()

//se agregan los midelwears para pasar los datos a json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

const datos = []

app.get('/', (req, res) => {
    res.render('form', {datos});
})
app.get('/tablaEjs', (req, res) => {
    res.render('partials/tabla', {datos});
})
app.post('/personas', (req, res) => {
    datos.push(req.body)
    res.render('form', {datos});
})

app.listen(8080, () => console.log('Servidor funcionando'))