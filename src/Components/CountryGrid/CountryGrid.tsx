import CountryCard from "../CountryCard/CountryCard";
import type { ICountry } from "../../Interfaces/ICountry";
import "./CountryGrid.scss";

interface CountryGridProps {
  countries: ICountry[];
}

const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <section>
      <h1>Countries</h1>
      {countries.length === 0 ? (
        <div className="no-results-card">
          <h1>No Results</h1>
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
