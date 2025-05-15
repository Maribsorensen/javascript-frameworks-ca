import { FormInputs } from "../components/form/FormInputs";

export function ContactPage() {
  return (
    <div>
      <div>
        <h1>Contact Us!</h1>
        <form>
          <FormInputs
            label="Full Name"
            value={fullName}
            />
          <FormInputs
            label="Email"
            value={email}
            />
          <FormInputs
            label="Subject"
            value={subject}
            />
        </form>
      </div>
    </div>
  );
}