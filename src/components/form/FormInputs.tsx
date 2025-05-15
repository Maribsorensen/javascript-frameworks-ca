type Props = {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function FormInputs({ label, value, onChange, error }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}