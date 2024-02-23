import mysql from 'mysql2';
import { config } from 'dotenv';
config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}).promise();

const getProducts = async()=>{
    const [products] = await pool.query(`SELECT * FROM products`) 
    return products
};

const addProduct = async(productName,quantity,amount,Category,productUrl)=>{
    const [products] = await pool.query(`INSERT INTO products (productName,quantity,amount,Category,productUrl) VALUES (?,?,?,?,?) `,[productName,quantity,amount,Category,productUrl])
    return getProducts  
}

const deleteProduct = async(prodID)=>{
    await pool.query(`DELETE FROM products WHERE prodID = ?`,[prodID]) 
    return getProducts
}

const updatedProduct = async (prodID,productName, quantity, amount, Category, productUrl) => {
    await pool.query(`
        UPDATE products SET productName = ?, quantity = ?, amount = ?, Category = ?, productUrl = ? WHERE prodID = ?`,
        [prodID,productName, quantity, amount, Category, productUrl]
    );
};

export{getProducts,deleteProduct,addProduct,updatedProduct}