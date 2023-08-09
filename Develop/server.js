const express = require('express');
const path = require("path")
const fs = require("fs")
const dataBase = require ("./db/db.json")

const PORT = process.env.PORT || 3001;  
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  
app.use(express.static('public'));  
//connects to index file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//Connects to notes file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.get('/api/notes', (req, res) => {
    res.json(dataBase.slice(1))
})

app.post('/api/notes', (req, res) => {
    const newNote = createNote(req.body, dataBase)
    res.json(newNote)
})