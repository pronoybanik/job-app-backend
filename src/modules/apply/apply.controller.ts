import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponst";
import httpStatus from 'http-status';
import { ApplyServices } from "./apply.service";
import { JwtPayload } from "jsonwebtoken";

const createJobApplication = catchAsync(async (req, res) => {

    const result = await ApplyServices.createJobApplicationIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Application submit successfully!',
        data: result,
    });
});

const getJobApplications = catchAsync(async (req, res) => {
    const { userId } = req.user as JwtPayload;

    const result = await ApplyServices.getJobApplications(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Get All Application retrieved successfully!',
        data: result,
    });
});

export const ApplyController = {
    createJobApplication,
    getJobApplications
};
