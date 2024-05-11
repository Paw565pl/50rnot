import { z } from "zod";

const zodStringNumber = (fieldName: string) =>
  z
    .string()
    .refine((value) => value.trim().length > 0, `${fieldName} is required`)
    .refine((value) => !isNaN(Number(value)), `${fieldName} must be a number`)
    .transform(Number)
    .refine(
      (value) => Number.isInteger(value),
      `${fieldName} must be an integer`,
    )
    .refine((value) => value >= 0, `${fieldName} must be a nonnegative number`);

const formSchema = z.object({
  age: zodStringNumber("Age"),
  workclass: z.string({ required_error: "Workclass is required" }).trim(),
  education: z.string({ required_error: "Education level is required" }).trim(),
  education_num: zodStringNumber("Total years of education"),
  marital_status: z
    .string({ required_error: "Marital status is required" })
    .trim(),
  occupation: z.string({ required_error: "Occupation is required" }).trim(),
  relationship: z
    .string({ required_error: "Relationship status is required" })
    .trim(),
  race: z.string({ required_error: "Race is required" }).trim(),
  sex: z.string({ required_error: "Sex is required" }).trim(),
  capital_gain: zodStringNumber("Capital gain"),
  capital_loss: zodStringNumber("Capital loss"),
  hours_per_week: zodStringNumber("Work hours per week"),
  native_country: z
    .string({ required_error: "Native country is required" })
    .trim(),
});

export type FormValues = z.infer<typeof formSchema>;

export default formSchema;
