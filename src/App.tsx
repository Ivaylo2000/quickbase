import CountryFilters from "./Components/CountryFilters/CountryFilters";
import CountryGrid from "./Components/CountryGrid/CountryGrid";
import countries from "./data/countries.json";

function App() {
  const continents = [
    ...new Set(countries.map((country) => country.continent)),
  ];

  const languages = [...new Set(countries.map((country) => country.language))];

  return (
    <main>
      <CountryFilters continents={continents} languages={languages} />

      <CountryGrid countries={countries} />
    </main>
  );
}

export default App;
