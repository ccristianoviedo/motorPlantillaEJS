const express = require('express');
const app = express();
const router = require('./routes/routes')

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('views', './views');
app.set('view engine', 'ejs');

app.use("/",router)

app.listen(8080, () => console.log('Servidor funcionando'))