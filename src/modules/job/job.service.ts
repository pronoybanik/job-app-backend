import AppError from "../../middlewares/AppError";
import { TJob } from "./job.interface";
import httpStatus from 'http-status';
import { Job } from "./job.module";


const createJobIntoDB = async (payload: TJob) => {

    // if (payload.lenth) {
    //     throw new AppError(httpStatus.NOT_FOUND, 'Data is not found !');
    // }

    const result = await Job.create(payload)
    return result;

};

const getJobIntoDB = async () => {
    const result = await Job.find()
    return result;
};

const getSingleJobIntoDB = async (id: string) => {
  const result = await Job.findById(id);
  return result;
};

const updateJobRequestIntoDB = async (id: string, payload: TJob) => {
  const result = await Job.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new AppError(httpStatus.FORBIDDEN, 'Booking Info not found');
  }
  return result;
};

const deleteJobIntoDB = async (id: string) => {
  const result = await Job.deleteOne({ _id: id });
  return result;
};

export const JobServices = {
    createJobIntoDB,
    getJobIntoDB,
    updateJobRequestIntoDB,
    deleteJobIntoDB,
    getSingleJobIntoDB
};
