import express from "express"
import { createUser, getUser } from "./user.controller"

const router = express.Router()

router.get("/user", getUser)
router.post("/user", createUser)


export default router
