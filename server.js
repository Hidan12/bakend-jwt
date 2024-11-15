import express from "express"
import 'dotenv/config.js'
import cors from "cors"
import morgan from "morgan"
import "./config/database.js"
import routerIndex from "./router/index.js"
import not_found_handler from "./middleware/not_found_handler.js"
import error_handler from "./middleware/error_handler.js"

const server = express() 
const PORT = process.env.PORT
const ready = ()=>console.log("server ready in port: ", PORT);

server.use(express.json()) 
server.use(express.urlencoded({ extended: true })) 
server.use(cors())
server.use(morgan('dev'))
server.use("/api", routerIndex)
server.use(error_handler)
server.use(not_found_handler)

server.listen(PORT, ready)
