const express = require("express")
const app = express()
const port = 3000
const routers = require("./routes/index.js")

app.use(routers)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})