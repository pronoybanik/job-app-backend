import { Schema, model } from 'mongoose';
import { TJob } from './job.interface';

const jobSchema = new Schema<TJob>(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    contractType: {
      type: String,
      enum: ['full-time', 'part-time'],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Job = model<TJob>('Job', jobSchema);

