import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { getProducts,deleteProduct,addProduct,updatedProduct} from './models/database.js'
config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());    

app.use(express.json()); 



app.get('/products',async (req, res) => {
    res.send(await getProducts())
})

app.post('/products',async (req, res) => {
    const {productName,quantity,amount,Category,productUrl} = req.body
    await addProduct(productName, quantity, amount, Category, productUrl)
    res.send(await getProducts())
})
 
app.delete('/products/:id', async (req, res) => {
    const productId = req.params.id;
    await deleteProduct(productId);
    res.send(await getProducts());
});

app.patch('/products/:id', async (req, res) => {
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
        res.status(500).json({ error: 'Error updating product' });
    }
});


app.listen(PORT, () =>{
    console.log(`http://localhost:`+PORT);
})

app.get