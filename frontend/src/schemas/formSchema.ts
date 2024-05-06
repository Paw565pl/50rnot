import { z } from "zod";

const formSchema = z.object({
  age: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .int("Age must be an integer")
    .nonnegative("Age must be a nonnegative number"),
  workclass: z.string({ required_error: "Workclass is required" }).trim(),
  education: z.string({ required_error: "Education level is required" }).trim(),
  education_num: z
    .number({
      required_error: "Total years of education is required",
      invalid_type_error: "Total years of education must be a number",
    })
    .int("Total years of education must be an integer")
    .nonnegative("Total years of education must be a nonnegative number"),
  marital_status: z
    .string({ required_error: "Marital status is required" })
    .trim(),
  occupation: z.string({ required_error: "Occupation is required" }).trim(),
  relationship: z
    .string({ required_error: "Relationship status is required" })
    .trim(),
  race: z.string({ required_error: "Race is required" }).trim(),
  sex: z.string({ required_error: "Sex is required" }).trim(),
  capital_gain: z
    .number({
      required_error: "Capital gain is required",
      invalid_type_error: "Capital gain must be a number",
    })
    .int("Capital gain must be an integer")
    .nonnegative("Capital gain must be a nonnegative number"),
  capital_loss: z
    .number({
      required_error: "Capital loss is required",
      invalid_type_error: "Capital loss must be a number",
    })
    .int("Capital loss must be an integer")
    .nonnegative("Capital loss must be a nonnegative number"),
  hours_per_week: z
    .number({
      required_error: "Work hours per week is required",
      invalid_type_error: "Work hours per week must be a number",
    })
    .int("Work hours per week must be an integer")
    .nonnegative("Work hours per week must be a nonnegative number"),
  native_country: z
    .string({ required_error: "Native country is required" })
    .trim(),
});

export type FormValues = z.infer<typeof formSchema>;

export default formSchema;
