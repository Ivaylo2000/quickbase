import SearchInput from "../SearchInput/SearchInput";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import { Globe, Languages } from "lucide-react";
import "./CountryFilters.scss";

interface CountryFiltersProps {
  continents: string[];
  languages: string[];
}

const CountryFilters = ({ continents, languages }: CountryFiltersProps) => {
  return (
    <section className="country-filters" aria-labelledby="filters-heading">
      <h2 id="filters-heading">Filter countries</h2>
      <p>Search and filter countries by region and language</p>

      <form className="filter-controls">
        <SearchInput />
        <SelectDropdown
          id="continents-dropdown"
          label="Continents"
          options={continents}
          Icon={Globe}
        />
        <SelectDropdown
          id="languages-dropdown"
          label="Languages"
          options={languages}
          Icon={Languages}
        />
      </form>
    </section>
  );
};

export default CountryFilters;
