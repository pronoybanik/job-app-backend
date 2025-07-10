import { Router } from 'express';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { JobsRoutes } from '../modules/job/job.route';
import { ApplyRoutes } from '../modules/apply/apply.routes';

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
    {
        path: '/apply',
        router: ApplyRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
