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

const addUser = async (firstName, lastName, userAge, gender, userRole, emailAdd, userPass) => {
    await pool.query(`
        INSERT INTO users (FirstName, lastName, userAge, Gender, userRole, emailAdd, userPass) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, userAge, gender, userRole, emailAdd, userPass]
    );
}

const deleteUserByName = async (firstName) => {
    await pool.query(`DELETE FROM users WHERE FirstName = ?`,[firstName]
    );
};

const loginUser = async (firstName) => {
    const [[{userPass}]] = await pool.query(`SELECT userPass FROM users WHERE FirstName =?`,
    [firstName])
    return userPass
}


export{getProducts,deleteProduct,addProduct,updatedProduct,addUser,deleteUserByName,loginUser}