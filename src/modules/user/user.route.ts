import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middlewares/auth';

const routers = express.Router();

routers.post("/create-user", UserController.createUser)

routers.get('/me', auth(), UserController.getMe);


export const UserRoute = routers;