import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { JobsRoutes } from '../modules/job/job.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        router: UserRoute,
    },
    {
        path: '/auth',
        router: AuthRoutes,
    },
    {
        path: '/job',
        router: JobsRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
