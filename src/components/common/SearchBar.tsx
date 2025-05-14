type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};


export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <input type="text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search for products..." />
    </div>
  );
}