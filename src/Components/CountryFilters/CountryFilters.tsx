import SearchInput from "../SearchInput/SearchInput";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import { Globe, Languages } from "lucide-react";
import "./CountryFilters.scss";

interface CountryFiltersProps {
  continents: string[];
  languages: string[];
  countryName: string;
  selectedContinents: string[];
  selectedLanguages: string[];
  onCountryNameChange: (value: string) => void;
  onContinentToggle: (continent: string) => void;
  onLanguageToggle: (language: string) => void;
}

const CountryFilters = ({
  continents,
  languages,
  countryName,
  selectedContinents,
  selectedLanguages,
  onCountryNameChange,
  onContinentToggle,
  onLanguageToggle,
}: CountryFiltersProps) => {
  return (
    <section className="country-filters" aria-labelledby="filters-heading">
      <h2 id="filters-heading">Filters</h2>
      <p>Search and filter countries by region and language</p>

      <div className="filter-controls">
        <SearchInput value={countryName} onChange={onCountryNameChange} />
        <SelectDropdown
          id="continents-dropdown"
          label="Continents"
          options={continents}
          selectedOptions={selectedContinents}
          Icon={Globe}
          onOptionToggle={onContinentToggle}
        />
        <SelectDropdown
          id="languages-dropdown"
          label="Languages"
          options={languages}
          selectedOptions={selectedLanguages}
          Icon={Languages}
          onOptionToggle={onLanguageToggle}
        />
      </div>
    </section>
  );
};

export default CountryFilters;
