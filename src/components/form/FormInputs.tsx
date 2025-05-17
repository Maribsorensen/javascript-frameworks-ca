import React from "react";

type FormInputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInputs = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, ...inputProps }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="font-body">{label}</label>
        <input className="border-1 rounded-md mb-3 shadow-md/20" ref={ref} {...inputProps} />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    );
  }
);