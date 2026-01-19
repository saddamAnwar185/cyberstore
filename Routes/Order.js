const express = require('express')
const { VerifyUserAuth, verifyIsAdmin } = require('../Middlewares/Auth')
const { handlePlaceOrder, handleShowOrders, handleShowALlOrders, handleDeleteOrder, handleChangeStatus, handleCancleOrder } = require('../Controllers/OrderController')
const router = express.Router()

router.post('/placeOrder', VerifyUserAuth, handlePlaceOrder)
router.get('/showOrders/:id', VerifyUserAuth , handleShowOrders)
router.get('/showAllOrders', VerifyUserAuth,verifyIsAdmin ,handleShowALlOrders)
router.delete('/deleteOrder/:id', VerifyUserAuth, verifyIsAdmin , handleDeleteOrder)
router.post('/updateStatus/:id', VerifyUserAuth, verifyIsAdmin,handleChangeStatus)
router.get('/cancleOrder/:id', VerifyUserAuth, handleCancleOrder)

module.exports = router