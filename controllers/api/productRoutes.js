const express = require('express');
const router = express.Router();
const {Category, Product, ProductTag, Tag} = require('../../models');

router.get('/',(req,res)=>{
    Product.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})
// TODO: Ask about syntax on line 16
router.get("/:id",(req,res)=>{
    Product.findByPk(req.params.id,{
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.post("/",(req,res)=>{
    Product.create({
        product_name:req.body.product_name,
        price:req.body.price,
        stock:req.body.stock,
        category_id:req.body.category_id
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.delete("/:id",(req,res)=>{
    Product.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
        //res.status(200).json({msg:`${req.body.product_name} deleted.`})
        }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

module.exports = router;