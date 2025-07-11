import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponst";
import { UserServices } from "./user.service";
import httpStatus from 'http-status';

const createUser = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await UserServices.createUserIntoDB(data);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `${result.role} created successfully`,
        data: result,
    });
});

const getMe = catchAsync(async (req, res) => {
    const { userId } = req.user as JwtPayload;
    const result = await UserServices.getMe(userId);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: `User is retrieved successfully`,
        data: result,
    });
});

export const UserController = {
    createUser,
    getMe
};