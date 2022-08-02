const express = require('express');
const router = require("express").Router();
const categoryRoutes = require("./categoryRoutes")
const productRoutes = require("./productRoutes")
const productTagRoutes = require("./productTagRoutes")
const tagRoutes = require("./tagRoutes")

router.get('/',(req,res)=>{
    res.send('inside api folder');
})

router.use('/categories',categoryRoutes)
router.use('/products',productRoutes)
router.use('/product-tags',productTagRoutes)
router.use('/tags',tagRoutes)

module.exports = router;