import AppError from "../../middlewares/AppError";
import { TJob } from "./job.interface";
import httpStatus from 'http-status';
import { Job } from "./job.module";


const createJobIntoDB = async (payload: TJob) => {

    // if (payload.lenth) {
    //     throw new AppError(httpStatus.NOT_FOUND, 'Data is not found !');
    // }

    const result = await Job.create(payload)
    return result;

};

const getJobIntoDB = async () => {
    const result = await Job.find()
    return result;
};

export const JobServices = {
    createJobIntoDB,
    getJobIntoDB
};
