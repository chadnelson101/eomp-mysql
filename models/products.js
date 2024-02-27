
import {pool} from '../config/config.js'

const getProducts = async () => {
    const [products] = await pool.query(`SELECT * FROM products`);
    return products;
};

const getProductByID = async (prodID) => {
        const [product] = await pool.query(`SELECT * FROM products WHERE prodID = ?`, [prodID]);
        return product[0]; // Return the first element of the array
};


const addProduct = async (productName, quantity, amount, Category, productUrl) => {
    await pool.query(`INSERT INTO products (productName,quantity,amount,Category,productUrl) VALUES (?,?,?,?,?) `,
        [productName, quantity, amount, Category, productUrl]);
    return getProducts();
};

const deleteProduct = async (prodID) => {
    await pool.query(`DELETE FROM products WHERE prodID = ?`, [prodID]);
    return getProducts();
};

const updatedProduct = async (productName,quantity,amount,Category,productUrl,prodID) => {
    await pool.query(`
        UPDATE products SET productName = ?, quantity = ?, amount = ?, Category = ?, productUrl = ? WHERE prodID = ?`,
        [productName, quantity, amount, Category, productUrl, prodID]
    );
};

export { getProducts, deleteProduct, addProduct, updatedProduct, getProductByID };
    