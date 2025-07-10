import { Schema, model } from "mongoose";
import { TJobApplication } from "./apply.interface";

const jobApplicationSchema = new Schema<TJobApplication>(
    {
        userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
        jobId: { type: Schema.Types.ObjectId, ref: "Job", required: true },
        appliedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

const JobApplication = model<TJobApplication>("JobApplication", jobApplicationSchema);

export default JobApplication;
