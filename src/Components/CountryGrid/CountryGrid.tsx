import CountryCard from "../CountryCard/CoutryCard";
import type { ICountry } from "../../Interfaces/ICountry";
import "./CountryGrid.scss";

interface CountryGridProps {
  countries: ICountry[];
}

const CountryGrid = ({ countries }: CountryGridProps) => {
  return (
    <section>
      <ul className="country-grid">
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </ul>
    </section>
  );
};

export default CountryGrid;
