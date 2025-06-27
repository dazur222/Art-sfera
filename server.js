const express = require('express')
let promptProccessor = require("./promptProccessor")

const app = express()
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/register.html'));
});

app.get('/mapa', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/mapa.html'));
});
app.get("/sendPrompt", async (req, res) => {
    let prompt = req.query.prompt
    console.log("entramos ")
    console.log(prompt)
    let response =  await promptProccessor(prompt)

    console.log("la respuesta del parser es",response)

    let data = {response : response}

    res.json(data)

})

app.listen(3000, () => {
    console.log()
})