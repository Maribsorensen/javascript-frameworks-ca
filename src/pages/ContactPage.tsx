import { useForm } from "react-hook-form";
import { FormInputs } from "../components/form/FormInputs";

type FormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const {  register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
  console.log("Form submitted:", data);

  reset();
};

  return (
    <div>
      <div>
        <h1>Contact Us!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInputs
          label="Full Name"
          error={errors.fullName?.message}
          {...register("fullName", { required: "Full name is required" })}
        />
        <FormInputs
          label="Email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
        />
        <FormInputs
          label="Subject"
          error={errors.subject?.message}
          {...register("subject", { required: "Subject is required" })}
        />
        <div>
          <label>Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}