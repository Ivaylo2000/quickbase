import { Search } from "lucide-react";
import "./SearchInput.scss";

// interface SearchInputProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// const SearchInput = ({ value, onChange }: SearchInputProps) => {
const SearchInput = () => {
  return (
    <div className="search-input">
      <Search aria-hidden="true" />

      <input
        id="country-search"
        name="country-search"
        type="search"
        placeholder="Search countries..."
        // value={value}
        // onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
