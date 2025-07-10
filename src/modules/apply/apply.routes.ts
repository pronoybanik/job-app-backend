import express from 'express';
import { ApplyController } from './apply.controller';
import auth from '../../middlewares/auth';

const router = express.Router();


router.post(
    '/',
    ApplyController.createJobApplication,
);

router.get(
    '/',
    auth(),
    ApplyController.getJobApplications,
);

export const ApplyRoutes = router;

