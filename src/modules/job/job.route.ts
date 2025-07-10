import express from "express";
import { JobController } from "./job.controller";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { JobValidation } from "./job.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../user/user.constant";
const routes = express.Router();

routes.get("/",
    JobController.getJob);

routes.get("/:id",
    JobController.getSingleJobs);

routes.post("/create-job",
    auth(USER_ROLE.admin),
    validateZodRequest(JobValidation.jobValidationSchema),
    JobController.createJob);

routes.patch(
    '/:id',
    auth(USER_ROLE.admin),
    JobController.updateJobRequest);

routes.delete('/:id',
    auth(USER_ROLE.admin),
    JobController.deleteJob);

export const JobsRoutes = routes;

