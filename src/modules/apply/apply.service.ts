import { Types } from "mongoose";
import JobApplication from "./apply.module";
import { User } from "../user/user.module";
import AppError from "../../middlewares/AppError";
import httpStatus from 'http-status';
import { TJobApplication } from "./apply.interface";
import { Job } from "../job/job.module";


const createJobApplicationIntoDB = async (payload: TJobApplication) => {
    const { userId, jobId } = payload;

    const userIdValue = await User.findById({ _id: userId });

    if (!userIdValue) {
        throw new AppError(httpStatus.NOT_FOUND, "User not found.");
    }

    const isAlreadyApplied = await Job.findById({
        _id: jobId,
    });

    if (!isAlreadyApplied) {
        throw new AppError(httpStatus.NOT_FOUND, "Job not found.");
    }

    const result = await JobApplication.create(payload);
    return result;
};

const getJobApplications = async (userId: string) => {
    const result = await JobApplication.find({ userId: new Types.ObjectId(userId) })
        .populate("jobId")
        .populate("userId");
    return result;
};

export const ApplyServices = {
    createJobApplicationIntoDB,
    getJobApplications
}


