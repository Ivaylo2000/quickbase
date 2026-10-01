import CountryCard from "../CountryCard/CountryCard";
import type { ICountry } from "../../Interfaces/ICountry";
import "./CountryGrid.scss";

interface CountryGridProps {
  countries: ICountry[];
}

const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <section className="countries-section">
      {countries.length === 0 ? (
        <div className="no-results-card">
          <h2>No Results</h2>
        </div>
      ) : (
        <ul className="country-grid">
          {countries.map((country, index) => (
            <CountryCard
              key={country.name}
              country={country}
              priority={index < 3}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default CountryGrid;
