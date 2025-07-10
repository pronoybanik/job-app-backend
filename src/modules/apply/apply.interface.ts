import { Types } from "mongoose";

export interface TJobApplication {
  userId: Types.ObjectId;
  jobId: Types.ObjectId;
  appliedAt?: Date;
}
