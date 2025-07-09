import express from "express";
import { JobController } from "./job.controller";
import validateZodRequest from "../../middlewares/validateZodRequest";
import { JobValidation } from "./job.validation";
const routes = express.Router();

routes.get("/",
    JobController.getJob
);

routes.post("/create-job",
    validateZodRequest(JobValidation.jobValidationSchema),
    JobController.createJob
);



export const JobsRoutes = routes;

