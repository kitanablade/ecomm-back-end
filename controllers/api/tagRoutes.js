const express = require('express');
const router = express.Router();
const {Category, Product, ProductTag, Tag} = require('../../models');

router.get('/',(req,res)=>{
    Tag.findAll(({include:[{model:Product}]})).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.get("/:id",(req,res)=>{
    Tag.findOne({
        where: {
            id: req.params.id,
        },
        include: [{
            model: Product,
            trough: ProductTag
        }]
        // tag_name:req.body.tag_name
    }).then(data=>{
        res.status(200).json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.post("/",(req,res)=>{
    Tag.create({
        tag_name:req.body.tag_name
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.delete("/:id",(req,res)=>{
    Tag.destroy({
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