import { Search } from "lucide-react";
import "./SearchInput.scss";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="search-input">
      <Search aria-hidden="true" />

      <input
        id="country-search"
        name="country-search"
        type="search"
        placeholder="Search countries..."
        value={value}
        aria-label="Search countries by name"
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
