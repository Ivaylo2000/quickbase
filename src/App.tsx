import CountryGrid from "./Components/CountryGrid/CountryGrid";
import countries from "./data/countries.json";

function App() {
  return (
    <main>
      <h1>Test</h1>
      <section className="countries-section">
        <CountryGrid countries={countries} />
      </section>
    </main>
  );
}

export default App;
