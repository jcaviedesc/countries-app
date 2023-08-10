import Image from "next/image";
import { getCountyByName } from "../../../services/restcountries";
import styles from "./styles.module.css";

type CountryPageProps = {
  params: {
    name: string;
  };
};

export default async function CountryPage({
  params: { name },
}: CountryPageProps) {
  const countryData = await getCountyByName(name);

  const currencies = Object.values(countryData.currencies)
    .map((currency) => currency.name)
    .join(", ");
  const languages = Object.values(countryData.languages).join(", ");

  return (
    <div
      className={`mt-16 flex flex-row justify-between lg:gap-32 ${styles.country_page}`}
    >
      <div>
        <Image
          src={countryData.flags.png}
          width={500}
          height={400}
          alt={countryData.name.common}
        />
      </div>

      <div className={styles.country_data}>
        <h1 className="text-black text-2xl font-extrabold my-8 capitalize dark:text-white">
          {countryData.name.common}
        </h1>
        <div className="flex flex-row justify-between flex-wrap">
          <div>
            <p>
              <b>Native name:</b> Todo
            </p>
            <p>
              <b>Population:</b> {countryData.population}
            </p>
            <p>
              <b>Region:</b> {countryData.region}
            </p>
            <p>
              <b>Sub Region:</b> {countryData.subregion}
            </p>
            <p>
              <b>Capital:</b> {countryData.capital.join(", ")}
            </p>
          </div>

          <div className={styles.secundary_data}>
            <p>
              <b>Top Level Domain:</b> {countryData.capital.join(", ")}
            </p>
            <p>
              <b>Currencies:</b> {currencies}
            </p>
            <p>
              <b>Languages:</b> {languages}
            </p>
          </div>
        </div>

        <div className={styles.border_countries}>
          <b className="mr-4 mb-6">Border Countries:</b>
          <div className="flex flex-wrap gap-2">
            {countryData.borders.map((borderCountry) => (
              <div
                key={borderCountry}
                className="flex items-center space-x-2 bg-white shadow-md px-4 py-1 rounded dark:bg-dark-blue"
              >
                <span>{borderCountry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
