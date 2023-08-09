import Image from "next/image";
import styles from "./styles.module.css";

type CountryCardProps = {
  /**
   * url with the flag country
   */
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
};

function CountryCard({
  flag,
  name,
  population,
  region,
  capital,
}: CountryCardProps) {
  return (
    <div className={styles.country_card}>
      <div className="h-36 overflow-hidden">
        <Image
          src={flag}
          alt={name}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className={styles.country_card_body}>
        <h2 className={styles.country_card_name}>{name}</h2>
        <div className={styles.country_card_bodydata}>
          <p>
            <b>Population:</b> {population}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
