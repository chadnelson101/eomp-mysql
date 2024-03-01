import { loginUser } from '../models/users.js';

export default{
 auth: async (req, res, next) => {
        const { emailAdd, userPass } = req.body;
        // Retrieve hashed password from the database based on the username (firstName)
        const hashedPassword = await loginUser(emailAdd);
        // Compare the provided password with the hashed password
        bcrypt.compare(userPass, hashedPassword, (err, result) => {
            if (err) {
                throw err;
            }
            if (result === true) {
                // Passwords match, user logged in successfully
                res.send({
                    msg: 'You have logged in successfully'
                });
                next();
            } else {
                // Passwords do not match, login failed
                res.send({
                    msg: 'The username or password is incorrect'
                });
            }
        })
}
}