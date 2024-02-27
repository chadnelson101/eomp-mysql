import { addUser,deleteUserByID,loginUser,getUserByID,getUsers,editUser} from '../models/users.js';
import bcrypt from 'bcrypt';

export default{
 addUser: async (req, res) => {
    try {
        const { FirstName, lastName, userAge, Gender, userRole, emailAdd, userPass } = req.body;
        bcrypt.hash(userPass, 10, async(err, hash) => {
            if (err) throw err;
            await addUser(FirstName, lastName, userAge, Gender, userRole, emailAdd, hash);
            res.status(200).json({ message: 'You have created an account'});
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
},

getUsers: async (req, res) => {
    try {
        const users = await getUsers();
        res.send(users);
    } catch (error) {
        console.error('Error fetching users', error);
        res.status(500).json({ error: 'Error fetching users' });
    }
},

    getUserByID: async (req, res) => {
        try {
            const userId = +req.params.id; // Assuming the parameter is named 'id' in the route
            const user = await getUserByID(userId);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            res.status(500).json({ error: 'Error fetching user' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const userId = +req.params.id; // Assuming the parameter is named 'id' in the route
            await deleteUserByID(userId);
            res.status(200).json({ message: 'You successfully deleted your account' });
        } catch (error) {
            console.error('Error deleting account:', error);
            res.status(500).json({ error: 'Error deleting your account' });
        }
    },

    
    loginUser: async (req, res, next) => {
        try {
            const { email, userPass } = req.body;
            const hashedPassword = await loginUser(email);

            bcrypt.compare(userPass, hashedPassword, (err, result) => {
                if (err) {
                    throw err;
                }
                if (result === true) {
                    res.send({
                        msg: 'You have logged in successfully'
                    });
                    next();
                } else {
                    res.status(401).json({
                        msg: 'The email or password is incorrect'
                    });
                }
            });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ error: 'Error logging in' });
        }
    },
    editUser: async (req, res) => {
        try{
            const [user] = await getUsers(+req.params.id);
            const {FirstName, lastName, userAge, Gender, userRole, emailAdd}=req.body

            const editFirstName = FirstName || user.firstName 
            const editLastName = lastName || user.lastName
            const editUserAge = userAge || user.userAge
            const editGender = Gender || user.Gender
            const editUserRole = userRole || user.userRole
            const editEmailAdd = emailAdd || user.emailAdd
            await editUser(editFirstName, editLastName, editUserAge, editGender, editUserRole, editEmailAdd, +req.params.id);
            res.json(await getUsers())
        }catch(error){
            console.error('Error editing user:',error);
            res.status(404).json({error:'Error editing user'});
        }
    }
}