type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};


export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="text-center p-2">
      <input className="bg-primary md:w-2/4 rounded-md text-white placeholder-white font-headings px-2 py-1"
   type="text" value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search for products..." />
    </div>
  );
}