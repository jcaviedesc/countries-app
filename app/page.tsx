import { getAllContries } from "../services/restcountries";
import { CountryCard } from "@/components/country-card";

export default async function Home() {
  const countries = await getAllContries();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
      {countries.map(({ flags, name, capital, ...restCountryData }) => (
        <CountryCard
          key={`${name}`}
          flag={flags.png}
          name={name.common}
          capital={capital?.length > 0 ? capital[0] : ""}
          {...restCountryData}
        />
      ))}
    </div>
  );
}
