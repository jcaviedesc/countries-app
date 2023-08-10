import { CountryCard } from "../../components";
import { searchCountriesByName } from "../../services/restcountries";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { q: searchValue } = searchParams as { [key: string]: string };

  const countries = await searchCountriesByName(searchValue);
  const resultsText = countries.length > 1 ? "results" : "result";

  return (
    <>
      {searchValue ? (
        <p className="mb-4">
          {countries.length === 0
            ? "There are no countries that match "
            : `Showing ${countries.length} ${resultsText} for `}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      ) : null}
      {countries.length > 0 && (
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
      )}
    </>
  );
}
