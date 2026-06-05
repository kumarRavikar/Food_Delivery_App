import express from "express"
import { login, logout, registerUser } from "../controller/auth.controller.js"

//creating router 
const router = express.Router()

// router for register user
router.post("/user/register",registerUser)
router.post("/user/login",login)
router.get("/user/logout",logout)
export default router