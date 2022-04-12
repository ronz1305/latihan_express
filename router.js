import express from "express";
import {mainRoute, withBody, withParam, withCek, withBio, withId}  from './controller/basicController.js'
import {basicMiddleware} from './middleware/basicMiddleware.js'
import {checkAutKey} from './middleware/checkKey.js'
// import {get as getProduct, create as createProduct, update as updateProduct, destroy as deleteProduct, find as findProduct} from './controller/productController.js'
import productApi from './api/productApi.js'

const router = express.Router()

router.get('/', basicMiddleware, mainRoute)
router.get('/with-param', withParam) 
router.post('/body', withBody) 
router.get('/check-health', withCek)
router.get('/bio',checkAutKey, withBio)
router.get('/:id', withId)
router.use('/product', productApi)

// router.get('/product/list', getProduct)
// router.get('/product/crete', createProduct)
// router.get('/product/list', updateProduct)
// router.get('/product/list', deleteProduct)
// router.get('/product/list', findProduct)

export default router ;