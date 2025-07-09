import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponst";
import { JobServices } from "./job.service";
import httpStatus from 'http-status';

const createJob = catchAsync(async (req, res) => {

    const data = req.body;
    const result = await JobServices.createJobIntoDB(data)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `Job ${result.companyName} created successfully`,
        data: result,
    });
});

const getJob = catchAsync(async (req, res) => {
    const result = await JobServices.getJobIntoDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Job retrieved successfully.",
        data: result,
    });
});

export const JobController = {
    createJob,
    getJob
};
