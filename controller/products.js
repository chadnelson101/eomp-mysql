import { getProducts, getProductByID, addProduct, deleteProduct, updatedProduct } from '../models/products.js';

export default {
 getAllProducts: async (req, res) => {
    try {
        res.send(await getProducts());
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(404).json({ error: 'Error fetching products' });
    }
},

getProductByID: async (req, res) => {
    try {
        const prodID = +req.params.id; // Adjust the parameter name to lowercase 'id'
        const product = await getProductByID(prodID);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Error fetching product' });
    }
},

 createProduct: async (req, res) => {
    try {
        const { productName, quantity, amount, Category, productUrl } = req.body;
        await addProduct(productName, quantity, amount, Category, productUrl);
        res.send(await getProducts());
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(404).json({ error: 'Error adding product' });
    }
},

 deleteProductById: async (req, res) => {
    try {
        const productId = req.params.id;
        await deleteProduct(productId);
        const products = await getProducts();
        res.json({ message: 'Product deleted successfully', products });
    } catch (err) {
        console.error('Error deleting product:', err);
        res.status(404).json({ error: 'Error deleting product' });
    }
},

 updateProduct: async (req, res) => {
    try {
        const [product] = await getProducts(+req.params.id);
        const { productName, quantity, amount, Category, productUrl } = req.body;

        const updatedProductName = productName || product.productName;
        const updatedQuantity = quantity || product.quantity;
        const updatedAmount = amount || product.amount;
        const updatedCategory = Category || product.Category;
        const updatedProductUrl = productUrl || product.productUrl;

        await updatedProduct(updatedProductName, updatedQuantity, updatedAmount, updatedCategory, updatedProductUrl, +req.params.id);
        res.json(await getProducts());
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(404).json({ error: 'Error updating product' });
    }
    }
}
