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
    const result = await JobServices.getJobIntoDB(req.query)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Job retrieved successfully.",
        meta: result.meta,
        data: result.result,
    });
});

const getSingleJobs = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await JobServices.getSingleJobIntoDB(id);

    sendResponse(res, {
        success: true,
        message: 'get single Job successfully',
        statusCode: httpStatus.OK,
        data: result,
    });
});


const updateJobRequest = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await JobServices.updateJobRequestIntoDB(id, req.body);

    sendResponse(res, {
        success: true,
        message: 'Job updated successfully',
        statusCode: httpStatus.OK,
        data: result,
    });
});

const deleteJob = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await JobServices.deleteJobIntoDB(id);

    sendResponse(res, {
        success: true,
        message: 'Job deleted successfully',
        statusCode: httpStatus.OK,
        data: result,
    });
});

export const JobController = {
    createJob,
    getJob,
    updateJobRequest,
    deleteJob,
    getSingleJobs
};
