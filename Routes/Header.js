const express = require('express')
const { VerifyUserAuth, verifyIsAdmin } = require('../Middlewares/Auth')
const { handleHeaderImageUpload, getMensHeaderImages, getWomensHeaderImages, getKidsHeaderImages, getAccessoriesHeaderImages, deleteHeaderImage, getAllHeaderImages, getHomeHeaderImages } = require('../Controllers/HeaderController')
const router = express.Router()

router.post('/postHeaderImage', VerifyUserAuth,verifyIsAdmin, handleHeaderImageUpload)
router.get('/getMensImages', getMensHeaderImages)
router.get('/getWomensImages', getWomensHeaderImages)
router.get('/getKidsImages', getKidsHeaderImages)
router.get('/getAccessoriesImages', VerifyUserAuth, getAccessoriesHeaderImages)
router.delete('/deleteHeaderImage/:id', VerifyUserAuth,verifyIsAdmin, deleteHeaderImage)
router.get('/getAllHeaderImages', VerifyUserAuth, verifyIsAdmin, getAllHeaderImages)
router.get('/getHomeHeaderImages', getHomeHeaderImages)

module.exports = router