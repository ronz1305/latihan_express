import express from "express";
import {mainRoute, withBody, withParam, withCek, withBio, withId}  from './controller/basicController.js'
import {basicMiddleware} from './middleware/basicMiddleware.js'

const router = express.Router()

router.get('/', basicMiddleware, mainRoute)

router.get('/with-param', withParam)
 
router.post('/body', withBody)

router.get('/check-health', withCek)

router.post('/bio', withBio)

router.get('/:id', withId)

export {router} ;