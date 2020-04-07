const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const routes = require('./routes')

app.use(bodyParser.urlencoded({extended: false})) //captura os dados do formulário e traduz em javascript
app.use(bodyParser.json()) //permite que se leia dados de formulários enviados via json
app.use(routes)

app.listen(3000,()=>{console.log("app runnig in port: 3000!")})