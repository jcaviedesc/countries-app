import Image from "next/image";
import { getAllContries } from "../services/restcountries";
import { CountryCard } from "./_components";

export default async function Home() {
  const countries = await getAllContries();
  return (
    <main className="mx-auto max-w-7xl px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
        {countries.map(({ flags, name, capital, ...restCountryData }) => (
          <CountryCard
            key={`${name}`}
            flag={flags.png}
            name={name.official}
            capital={capital?.length > 0 ? capital[0] : ""}
            {...restCountryData}
          />
        ))}
      </div>
    </main>
  );
}
