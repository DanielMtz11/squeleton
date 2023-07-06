const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const initModels = require('./models/initModels');
const db = require('./utils/database');



const app = express(); //instancia de express que vamos a utilizar en server.js
const authRoutes = require("./routes/auth.routes");

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));


initModels();
db.authenticate()
.then(()=>console.log("base de datos autentificada"))
.catch((e)=> console.log(e));

db.sync({force: false})
.then(()=>console.log("base de datos sincronizada"))
.catch((e)=>console.log(e));


app.get('/', (req, res)=>{
    res.json({message: "welcome to my server"});
});

app.use("/api/v1/auth",authRoutes);

module.exports = app;