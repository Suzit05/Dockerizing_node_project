const express = require("express")
const { json } = require("express/lib/response")
const app = express()

app.get("/home", (req, res) => {
    res.json({ message: "OK" })
})

app.listen(3000, () => {
    console.log("started the server")
})