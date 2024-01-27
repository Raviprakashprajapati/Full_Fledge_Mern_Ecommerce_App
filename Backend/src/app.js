import express from 'express';
import cors from "cors"
import cookieParser from 'cookie-parser';
const app = express();

import { trafficMiddleware } from './middlewares/traffic.middleware.js';
app.use(trafficMiddleware)
app.use(cors({
    origin:process.env.CORS_ORIGIN
}))


//accept these files and request
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookieParser())


//routes
import userRouter from './routes/user.routes.js'
import productRouter from "./routes/product.routes.js"
import orderRouter from "./routes/order.routes.js"

//routes declaration
app.use("/api/v1/users",userRouter) //http://locahost:8000/api/v1/users/*
app.use("/api/v1/products",productRouter) //http://locahost:8000/api/v1/products/*
app.use("/api/v1/orders",orderRouter) 



export {app}