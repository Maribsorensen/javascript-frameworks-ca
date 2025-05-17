import { useForm } from 'react-hook-form';
import { FormInputs } from '../components/form/FormInputs';
import { Button } from '../components/common/Button';

type FormValues = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);

    reset();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-white md:w-1/2 mx-auto p-2 rounded-md">
        <h1 className="font-headings text-primary mb-4">Contact Us!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInputs
            label="Full Name"
            error={errors.fullName?.message}
            {...register('fullName', { required: 'Full name is required' })}
          />
          <FormInputs
            label="Email"
            error={errors.email?.message}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          <FormInputs
            label="Subject"
            error={errors.subject?.message}
            {...register('subject', { required: 'Subject is required' })}
          />
          <div className="flex flex-col gap-1">
            <label className="font-body">Message</label>
            <textarea
              className="border-1 rounded-md mb-4  shadow-md/20"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p>{errors.message.message}</p>}
          </div>
          <div className="text-center">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
