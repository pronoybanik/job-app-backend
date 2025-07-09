import z from "zod";

const jobValidationSchema = z.object({
    body: z.object({
        companyName: z.string({
            required_error: 'Company name is required.',
        }),
        position: z.string({
            required_error: 'Position is required.',
        }),
        contractType: z.enum(['full-time', 'part-time'], {
            required_error: 'Contract type is required and must be either "full-time" or "part-time".',
        }),
        location: z.string({
            required_error: 'Location is required.',
        }),
    }),
});

export const JobValidation = {
    jobValidationSchema 
};

