import express from 'express'
import {signupUser, loginUser, verifyEmail}  from '../controller/user-controller.js';
import {saveprofile,getProfile,updateCoins}from '../controller/saveProfile.js'

const router = express.Router()

router.post('/signup', signupUser)
router.post('/emailVerify', verifyEmail)
router.post('/login', loginUser)
router.post('/saveProfile/:_id', saveprofile)
router.get('/getProfile/:_id', getProfile)
router.post('/updateCoins/:_id', updateCoins)



export default router;