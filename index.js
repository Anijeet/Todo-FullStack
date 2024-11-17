const express =require('express')
const app=express()
const cors=require('cors')
const auth =require('./routes/auth')
const path = require("path");
const list =require('./routes/list')
require('./connection/connection')
require('./models/list')
app.use(express.json())
app.use(cors());




app.use('/api/v1',auth);
app.use('/api/v2',list);

app.get("/", (req, res) => { app.use(express.static(path.resolve(__dirname, "frontend", "dist"))); res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); });

app.listen(3000,()=>{
    console.log('server started')
})