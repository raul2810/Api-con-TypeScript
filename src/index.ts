import express from "express" //ESmodules for imports/export actions
//const express = require('express') -> commonjs for for imports/exports actions
import diaryRouter from './routes/diaries'
const app = express()
app.use(express.json()) //aidware que transforma la req.body a un jason

const PORT = 3000

app.get('/ping',(_req, res) =>{
    console.log('someone pinged here!! '+ new Date().toLocaleDateString())
    res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})