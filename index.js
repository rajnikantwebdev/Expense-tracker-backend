const express = require("express")
const app = express()
const expenseRoutes = require("./routes/expenseRoute")

app.use(express.json())
app.use("/api", expenseRoutes)

app.listen(5000, () => {
    console.log(`server is listening on port 5000`)
})