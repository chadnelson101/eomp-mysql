import express from 'express';
import controller from '../controller/users.js';
import authenticate from '../middlewear/authenticate.js'

const router = express.Router();

router
        .route('/:id')
        .get(controller.getUserByID)
        .delete(controller.deleteUser)
        .patch(controller.editUser)


router 
        .route('/')
        .post(controller.addUser)
        .get(controller.getUsers)

router
        .route('/login')
        .post(controller.loginUser);


export default router;
