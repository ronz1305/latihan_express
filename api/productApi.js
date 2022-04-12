import express from "express";
import {get, create, update, find, destroy} from "../controller/productController.js";

const router =express.Router()

router.get('/list', get)
router.post('/create', create)
router.put('/update', update)
router.delete('/delete', destroy)
router.post('/find', find)

export default router