import express from "express"
import controller from "./controller.js"
const router = new express.Router()

router.get('/api/hello', controller.get)

export{router}