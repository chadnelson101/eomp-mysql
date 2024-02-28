import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import productsRouter from './routes/products.js'
import usersRouter from './routes/users.js'
config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());    

app.use(express.json()); 
app.use(express.static('public'))
app.use('/products',productsRouter)
app.use('/users',usersRouter)

// app.post('/user', async (req, res) => {
//         const { FirstName, lastName, userAge, Gender, userRole, emailAdd, userPass } = req.body;
//         bcrypt.hash(userPass, 10, async(err,hash) => {
//             if (err) throw err;
//             await addUser(FirstName, lastName, userAge, Gender, userRole, emailAdd, hash);
//             res.status(201).json({ message: 'you have created a account'});
//         })
// });

// app

// app.delete('/users', async (req, res) => {
//     try {
//         const { firstName } = req.body;
//         await deleteUserByName(firstName);
//         res.status(200).json({ message: 'you successfully deleted your account' });
//     } catch (error) {
//         console.error('Error deleting account:', error);
//         res.status(500).json({ error: 'Error deleting your account' });
//     }
// });

// const auth = async (req, res, next) => {
//         const { firstName, userPass } = req.body;
//         // Retrieve hashed password from the database based on the username (firstName)
//         const hashedPassword = await loginUser(firstName);
//         // Compare the provided password with the hashed password
//         bcrypt.compare(userPass, hashedPassword, (err, result) => {
//             if (err) {
//                 throw err;
//             }
//             if (result === true) {
//                 // Passwords match, user logged in successfully
//                 res.send({
//                     msg: 'You have logged in successfully'
//                 });
//                 next();
//             } else {
//                 // Passwords do not match, login failed
//                 res.send({
//                     msg: 'The username or password is incorrect'
//                 });
//             }
//         })
// };

// app.post('/login', auth, (req, res) => {
// });



// app.get('/products',async (req, res) => {
//     try{

//         res.send(await getProducts())
//     }catch(error) {
//         console.error('Error fetching products', error);
//         res.status(500).json({ error: 'Error fetching products' });
//     }
// })

// app.get('/products/:Id', async (req, res) => {
//     try {
//         const prodID = req.params.Id;
//         const product = await getProductByID(prodID);
//         if (!product) {
//             res.status(404).json({ error: 'Product not found' });
//             return;
//         }
//         res.json(product);
//     } catch (error) {
//         console.error('Error fetching product:', error);
//         res.status(500).json({ error: 'Error fetching product' });
//     }
// });


// app.post('/products',async (req, res) => {
//     try{
//         const {productName,quantity,amount,Category,productUrl} = req.body
//         await addProduct(productName, quantity, amount, Category, productUrl)
//         res.send(await getProducts())
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ error: 'Error adding product' });
//     }
// })
 
// app.delete('/products/:id', async (req, res) => {
//     try {
//         const productId = req.params.id;
//         await deleteProduct(productId);
//         const products = await getProducts();
//         res.json({ message: 'Product deleted successfully', products });
//     } catch (err) {
//         console.error('Error deleting product:', err);
//         res.status(500).json({ error: 'Error deleting product' });
//     }
// });

// app.patch('/products/:id', async (req, res) => {
//     try {
//         const [product] = await getProducts(+req.params.id);
//         const { productName, quantity, amount, Category, productUrl } = req.body;

//         const updatedProductName = productName || product.productName;
//         const updatedQuantity = quantity || product.quantity;
//         const updatedAmount = amount || product.amount;
//         const updatedCategory = Category || product.Category;
//         const updatedProductUrl = productUrl || product.productUrl;

//         await updatedProduct(updatedProductName, updatedQuantity, updatedAmount, updatedCategory, updatedProductUrl, +req.params.id);
//         res.json(await getProducts());
//     } catch (error) {
//         console.error('Error updating product:', error);
//         res.status(500).json({ error: 'Error updating product' });
//     }
// });


app.listen(PORT, () =>{
    console.log(`http://localhost:`+PORT);
})