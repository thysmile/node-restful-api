const express = require('express');
const router = express.Router();
const productData = require('../productData');

router.get('/all-products' , (req,res,next)=>{
    return res.json({productData});
});
router.get('/clothes',(req,res,next)=>{
    const getClothes = productData.filter(product=>product.category==='clothes');
    return res.json({getClothes})
})
router.get('/jeans',(req,res,next)=>{
    const getJeans = productData.filter(product=>product.category==='jeans');
    return res.json({getJeans})
})
router.get('/jackets',(req,res,next)=>{
    const getJackets = productData.filter(product=>product.category==='jackets');
    return res.json({getJackets})
})
router.get('/single-product/:pid', (req,res,next)=>{
    const getSingleProduct = productData.find(product=>product.id==req.params.pid);
    console.log(req.params.pid)
    return res.json({getSingleProduct})
})

module.exports = router;