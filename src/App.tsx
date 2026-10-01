import { useEffect, useState } from "react";
import CountryFilters from "./Components/CountryFilters/CountryFilters";
import CountryGrid from "./Components/CountryGrid/CountryGrid";
import Loader from "./Components/Loader/Loader";
import type { ICountry } from "./Interfaces/ICountry";
import ThemePicker from "./Components/ThemePicker/ThemePicker";

const LOADING_DELAY_MS = 2000;

function App() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //Filters
  const [countryName, setCountryName] = useState<string>("");
  const [selectedContinents, setSelectedContinents] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const handleCountryNameChange = (value: string) => {
    setCountryName(value);
  };

  const handleContinentToggle = (continent: string) => {
    setSelectedContinents((currentContinents) =>
      currentContinents.includes(continent)
        ? currentContinents.filter((item) => item !== continent)
        : [...currentContinents, continent],
    );
  };

  const handleLanguageToggle = (language: string) => {
    setSelectedLanguages((currentLanguages) =>
      currentLanguages.includes(language)
        ? currentLanguages.filter((item) => item !== language)
        : [...currentLanguages, language],
    );
  };

  useEffect(() => {
    const controller = new AbortController();

    const loadCountries = async () => {
      try {
        const [response] = await Promise.all([
          fetch("/countries.json", { signal: controller.signal }),
          new Promise<void>((resolve) => setTimeout(resolve, LOADING_DELAY_MS)),
        ]);

        if (!response.ok) {
          throw new Error(`Failed to load countries: ${response.status}`);
        }

        const data: unknown = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid countries data");
        }

        setCountries(data as ICountry[]);
      } catch (requestError: unknown) {
        if (
          requestError instanceof DOMException &&
          requestError.name === "AbortError"
        ) {
          return;
        }

        setError("We couldn't load the countries. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    void loadCountries();

    return () => controller.abort();
  }, []);

  const continents = [
    ...new Set(countries.map((country) => country.continent)),
  ];

  const languages = [...new Set(countries.map((country) => country.language))];

  const filteredCountries = countries
    .filter((country) => {
      const matchesName = country.name
        .toLowerCase()
        .includes(countryName.toLowerCase());

      const matchesContinent =
        selectedContinents.length === 0 ||
        selectedContinents.includes(country.continent);

      const matchesLanguage =
        selectedLanguages.length === 0 ||
        selectedLanguages.includes(country.language);

      return matchesName && matchesContinent && matchesLanguage;
    })
    .slice(0, 12);

  return (
    <main>
      <ThemePicker />

      {(isLoading || error) && (
        <section>
          {isLoading && <Loader />}

          {error && <h1 role="alert">{error}</h1>}
        </section>
      )}
      <h1>Countries</h1>
      {!isLoading && !error && (
        <>
          <CountryFilters
            continents={continents}
            languages={languages}
            countryName={countryName}
            selectedContinents={selectedContinents}
            selectedLanguages={selectedLanguages}
            onCountryNameChange={handleCountryNameChange}
            onContinentToggle={handleContinentToggle}
            onLanguageToggle={handleLanguageToggle}
          />
          <CountryGrid countries={filteredCountries} />
        </>
      )}
    </main>
  );
}

export default App;
