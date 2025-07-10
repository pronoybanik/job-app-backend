import AppError from "../../middlewares/AppError";
import { TJob } from "./job.interface";
import httpStatus from 'http-status';
import { Job } from "./job.module";
import QueryBuilder from "../../build/QueryBuilder";
import { jobSearchableFields } from "./student.constant";


const createJobIntoDB = async (payload: TJob) => {
    const result = await Job.create(payload)
    return result;

};

const getJobIntoDB = async (query: Record<string, unknown>) => {
    const jobsQuery = new QueryBuilder(
        Job.find(), query
    ).search(jobSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();

    const meta = await jobsQuery.countTotal();
    const result = await jobsQuery.modelQuery;

    return {
        meta,
        result,
    };
};

const getSingleJobIntoDB = async (id: string) => {
    const result = await Job.findById(id);
    return result;
};

const updateJobRequestIntoDB = async (id: string, payload: TJob) => {
    const result = await Job.findOneAndUpdate({ _id: id }, payload, {
        new: true,
        runValidators: true,
    });

    if (!result) {
        throw new AppError(httpStatus.FORBIDDEN, 'Booking Info not found');
    }
    return result;
};

const deleteJobIntoDB = async (id: string) => {
    const result = await Job.deleteOne({ _id: id });
    return result;
};

export const JobServices = {
    createJobIntoDB,
    getJobIntoDB,
    updateJobRequestIntoDB,
    deleteJobIntoDB,
    getSingleJobIntoDB
};
