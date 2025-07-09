import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt';
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            default: 'user'
        },
        needsPasswordChange: {
            type: Boolean,
            default: true
        },
        status: {
            type: String,
            enum: ['in-progress', 'blocked'],
            default: 'in-progress'
        },
        passwordChangedAt: {
            type: Date
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true,
    }
);

// Pre-save password hashing
userSchema.pre('save', async function (next) {
    const user = this;
    // hashing password and save into DB
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// Static methods
userSchema.statics.isUserExistsByEmail = async function (email: string) {
    return await this.findOne({ email }).select('+password');
};

userSchema.statics.isUserExistsByCustomId = async function (id: string) {
    return await this.findById(id).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
    plainTextPassword: string,
    hashedPassword: string
) {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
) {
    return passwordChangedTimestamp.getTime() / 1000 > jwtIssuedTimestamp;
};

// Final model export using UserModel interface
export const User = model<TUser, UserModel>("User", userSchema);
