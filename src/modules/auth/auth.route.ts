import express from 'express';
import { AuthControllers } from './auth.controller';
import validateZodRequest from '../../middlewares/validateZodRequest';
import { AuthValidation } from './auth.validation';
const router = express.Router();


router.post(
    '/login',
    validateZodRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser,
);


router.post(
    '/refresh-token',
    validateZodRequest(AuthValidation.refreshTokenValidationSchema),
    AuthControllers.refreshToken,
);

export const AuthRoutes = router;

