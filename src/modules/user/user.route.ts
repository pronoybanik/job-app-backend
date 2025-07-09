import express from 'express';
import { UserController } from './user.controller';

const routers = express.Router();

routers.post("/create-user", UserController.createUser)

export const UserRoute = routers;