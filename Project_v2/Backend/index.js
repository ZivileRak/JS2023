
import express from "express"
import authRoutes from "./routes/auth.js"
import customerRoutes from "./routes/customers.js"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use("/post", postRoutes)  //atkreipti demesi i si faila
app.use("/auth", authRoutes)  //atkreipti demesi i si faila
app.use("/customer", customerRoutes)



app.listen(5000,() => {
    console.log("Connected")
})


