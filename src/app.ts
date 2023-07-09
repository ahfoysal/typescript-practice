import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
import { User } from "./modules/user/user.model"
////Routes
import userRoutes from "./modules/user/user.route"

const app: Application = express()

///cors
app.use(cors())

///body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", userRoutes)

export default app
