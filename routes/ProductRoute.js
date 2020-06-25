const express = require('express');

const router = express.Router();

const Product = require('../models/ProductModel')

router.get('/', async (req,res) => {

   const products = await Product.find({})

   try{
    res.send(products)

    // products.map(product=>{
    //     console.log("Name: " + product.name)
    //     console.log("SP: " + product.sellingPrice)
    //     console.log("CP: " + product.costPrice)
    // })

   }catch(err){
        res.status(500).send(err)
   }
})

router.get('/:id',(req,res) => {
    res.send("Specific Product!")
})

router.post('/', (req,res) => {

    const product = new Product({
        name: req.body.title,
        costPrice: req.body.costPrice,
        sellingPrice: req.body.sellingPrice,
        company: req.body.company
    })

    product
        .save()
        .then(data =>{
            res.json(data)
            res.statusCode = 200;
        })
        .catch(err=>{
            res.json({message: err})
        })   
})

module.exports = router;