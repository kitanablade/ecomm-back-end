const express = require('express');
const router = express.Router();
const {Category, Product, ProductTag, Tag} = require('../../models');

router.get('/',(req,res)=>{
    ProductTag.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.get("/:id",(req,res)=>{
    ProductTag.findByPk(req.params.id,{
        include:[{
            model:Product,
            include:[Category]
        }]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.post("/",(req,res)=>{
    ProductTag.create({
        product_id:req.body.product_id,
        tag_id:req.body.tag_id
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.delete("/:id",(req,res)=>{
    ProductTag.destroy({
        where:{
            id:req.params.id
        }
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

module.exports = router;