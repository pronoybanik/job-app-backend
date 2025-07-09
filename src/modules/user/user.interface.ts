import { Model } from "mongoose";

export interface TUser {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'user';
  status: 'in-progress' | 'blocked';
  passwordChangedAt?: Date;
  isDeleted?: boolean; // if you are using this field
}

export interface UserModel extends Model<TUser> {
  isUserExistsByEmail(email: string): Promise<TUser | null>;
  isUserExistsByCustomId(id: string): Promise<TUser | null>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}
