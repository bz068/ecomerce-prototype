const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const path = require('path')
const fileUpload = require('express-fileupload');

const Product = require('../../Models/Product');

// ROUTE GET api/products
router.get('/', (req,res)=>{
    Product.find()
        .then(products => res.json(products));
});

// ROUTE POST api/products
router.post('/', auth, (req,res)=>{
    const newProduct = new Product({
        title : req.body.title,
        price : req.body.price,
        info : req.body.info,
        img : req.body.img
});
   
    newProduct.save().then(product => res.json(product));
});

// Upload image
router.post('/upload',  (req,res)=>{
    if(req.files === null){
        return res.status(400).json({msg: 'no file Uploaded'})
    }
    const file = req.files.file;
    

    file.mv(path.join(__dirname, `../../client/public/images/${file.name}`), err =>{
        if(err){
            console.error(err);
            return res.status(500).send(err);
        }
        res.json({fileName:file.name, filePath: `/uploads/${file.name}`});
        
    })
});

// ROUTE Delete api/products
router.delete('/:id', auth, (req,res)=>{
   Product.findById(req.params.id).then(product => product.remove().then(()=> res.json({success: true})))
   .catch(err => res.status(404).json({success: false}));
});

module.exports = router;