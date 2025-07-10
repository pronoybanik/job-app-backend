import { TUser } from "./user.interface";
import { User } from "./user.module";

const createUserIntoDB = async (payload: TUser) => {
    let finalPayload = { ...payload };

    // Automatically assign admin role if email domain is arnifi.com
    const emailParts = payload.email.split("@");
    if (emailParts[1] === "arnifi.com") {
        finalPayload.role = "admin";
    } else {
        finalPayload.role = "user";
    }

    const result = await User.create(finalPayload);

    return result;
};

const getMe = async (userId: string) => {
    const result = await User.findOne({ _id: userId });
    return result;
};


export const UserServices = {
    createUserIntoDB,
    getMe
};
