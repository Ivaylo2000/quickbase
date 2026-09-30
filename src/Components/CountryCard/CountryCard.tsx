import { Landmark, Languages, UserGroup, Map } from "lucide-react";
import type { ICountry } from "../../Interfaces/ICountry";
import "./CountryCard.scss";

const CountryCard = ({
  priority,
  country: {
    name,
    image,
    shortInfo,
    continent,
    capital,
    language,
    population,
    totalArea,
  },
}: {
  country: ICountry;
  priority: boolean;
}) => {
  const countryDetails = [
    {
      label: "Capital",
      value: capital,
      Icon: Landmark,
    },
    {
      label: "Language",
      value: language,
      Icon: Languages,
    },
    {
      label: "Population",
      value: population.toLocaleString(),
      Icon: UserGroup,
    },
    {
      label: "Total area",
      value: `${totalArea.toLocaleString()} km²`,
      Icon: Map,
    },
  ];

  return (
    <li className="country-card" data-continent={continent}>
      <img
        src={image}
        alt={`Flag of ${name}`}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
      />
      <div className="content">
        <h2>{name}</h2>

        <div className="badge">
          <span>{continent}</span>
        </div>

        <p>{shortInfo}</p>

        <ul className="country-details">
          {countryDetails.map(({ label, value, Icon }) => (
            <li key={label}>
              <Icon aria-hidden="true" />
              <span>
                <strong>{label}:</strong> {value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default CountryCard;
