const express = require('express');
const router = express.Router();
const {Category, Product, ProductTag, Tag} = require('../../models');

router.get('/',(req,res)=>{
    Category.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.get("/:id",(req,res)=>{
    Category.findByPk(req.params.id,{
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.post("/",(req,res)=>{
    Category.create({
        category_name:req.body.category_name
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.delete("/:id",(req,res)=>{
    Category.destroy({
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