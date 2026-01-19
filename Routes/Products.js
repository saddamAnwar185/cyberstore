const express = require('express')
const { VerifyUserAuth, verifyIsAdmin } = require('../Middlewares/Auth')
const { handleProductUpload, handleDeleteProduct, handleShowAllPrducts, handleUpdateProduct } = require('../Controllers/ProductsController')
const router = express.Router()

router.get('/showProducts', handleShowAllPrducts)
router.post('/uploadProduct', VerifyUserAuth, verifyIsAdmin,handleProductUpload)
router.post('/updateProduct/:id', VerifyUserAuth, verifyIsAdmin ,handleUpdateProduct)
router.delete('/deleteProduct/:id', VerifyUserAuth, verifyIsAdmin , handleDeleteProduct)

module.exports = router