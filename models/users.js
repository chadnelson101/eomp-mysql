import {pool} from '../config/config.js'

const getUsers = async () => {
    try {
        const [users] = await pool.query('SELECT * FROM users');
        return users;
    } catch (error) {
        throw error; // Re-throw the error to be caught by the caller
    }
};

const addUser = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass) => {
    await pool.query(`
        INSERT INTO users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass]
    );
};

const deleteUserByID = async (userID) => {
    try {
        await pool.query('DELETE FROM users WHERE userID = ?', [userID]);
    } catch (error) {
        throw error; // Re-throw the error to be caught by the caller
    }
};

const getUserByID = async (userID) => {
    try {
        const [user] = await pool.query('SELECT * FROM users WHERE userID = ?', [userID]);
        return user;
    } catch (error) {
        throw error; // Re-throw the error to be caught by the caller
    }
};


const loginUser = async (emailAdd) => {
    const [[{ userPass }]] = await pool.query('SELECT userPass FROM users WHERE Email = ?', [emailAdd]);
    return userPass;
};

const editUser = async(firstName, lastName, userAge, Gender, userRole, emailAdd,userID) => {
    await pool.query(`UPDATE users SET firstName =?, lastName =?, userAge =?, Gender =?, userRole =?, emailAdd =? WHERE userID =? `,
        [firstName, lastName, userAge, Gender, userRole, emailAdd,userID]
    );
    return editUser;
}
// console.log(await editUser());

export { addUser, deleteUserByID, loginUser,getUserByID,getUsers,editUser};
