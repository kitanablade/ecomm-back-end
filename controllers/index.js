const express = require('express');
const router = express.Router();
const apiRoutes = require("./api")

router.get('/',(req,res)=>{
    res.send('Welcome! This is the home page');
})

router.use("/api",apiRoutes)

module.exports = router;