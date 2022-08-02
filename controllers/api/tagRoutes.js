const express = require('express');
const router = express.Router();
const {Category, Product, ProductTag, Tag} = require('../../models');

router.get('/',(req,res)=>{
    Tag.findAll().then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"An error has occurred: ",err})
    })
})

router.get("/:id",(req,res)=>{
    Tag.findByPk(req.params.id,{
        tag_name:req.body.tag_name
    }).then(data=>{
        res.json(data)
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