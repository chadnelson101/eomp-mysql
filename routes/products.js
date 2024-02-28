import express from 'express';
import controller from '../controller/products.js'

const router = express.Router();
router
    .route('/')
        .get(controller.getAllProducts)
        .post(controller.createProduct)


router
    .route('/:id') 
        .get(controller.getProductByID)
        .delete(controller.deleteProductById)
        .patch(controller.updateProduct)       

export default router;
