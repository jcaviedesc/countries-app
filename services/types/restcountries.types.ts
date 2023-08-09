interface NameType {
  common: string;
  official: string;
}

type NativeName = Record<string, NameType>;

interface Name extends NameType {
  nativeName: NativeName;
}

interface Flag {
  png: string;
  svg: string;
  alt: string;
}

interface Currency {
  name: string;
  symbol: string;
}
/**
 * see https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
 */
export interface Country {
  name: Name;
  flags: Flag;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  currencies: Record<string, Currency>;
  /**
   * Top level domain
   */
  tld: string[];
  /**
   * border countries with cca3 cioc format
   */
  borders: string[];
  languages: Record<string, string>;
}

export type BasicCountry = Pick<
  Country,
  "flags" | "name" | "capital" | "region" | "population"
>;
