/**
 * SearchBar component
 * A reusable search bar component for filtering products.
 * It accepts a value and an onChange handler to update the search input.
 * @param {string} value - The current value of the search input.
 * @param {(value: string) => void} onChange - The function to call when the input value changes.
 * @returns {JSX.Element} The SearchBar component.
 */

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="text-center p-2">
      <input
        className="bg-primary md:w-2/4 rounded-md text-white placeholder-white font-headings px-2 py-1"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for products..."
      />
    </div>
  );
}
