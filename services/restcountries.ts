import { BasicCountry, Country } from "./types/restcountries.types";

const REST_COUNTRIES_HOST = process.env.REST_COUNTRIES_HOST;
const REST_COUNTRIES_VERSION = process.env.REST_COUNTRIES_VERSION;

const REST_COUNTRIES_URL = `${REST_COUNTRIES_HOST}/${REST_COUNTRIES_VERSION}`;

const DEFAULT_LIST_FIELDS = [
  "name",
  "flags",
  "capital",
  "region",
  "population",
];
const DEFAULT_COUNTRY_FIELDS = [
  ...DEFAULT_LIST_FIELDS,
  "subregion",
  "currencies",
  "tld",
  "borders",
  "languages",
];

type GetAllContriesProps = {
  /**
   * see https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
   */
  fields?: string[];
};

export async function getAllContries({
  fields = DEFAULT_LIST_FIELDS,
}: GetAllContriesProps = {}): Promise<BasicCountry[]> {
  const res = await fetch(
    `${REST_COUNTRIES_URL}/all?fields=${fields.join(",")}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch countries data");
  }

  return res.json();
}

export async function getCountyByName(
  name: string,
  fields: GetAllContriesProps["fields"] = DEFAULT_COUNTRY_FIELDS
): Promise<Country> {
  const res = await fetch(
    `${REST_COUNTRIES_URL}/name/${name}?fields=${fields.join(",")}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch country detail data with name ${name}`);
  }
  const [data] = await res.json();

  return data;
}

type SearchCountriesParams = {
  name?: string;
  region?: string;
};

const SEARCH_ENDPOINT = {
  name: `${REST_COUNTRIES_URL}/name`,
  region: `${REST_COUNTRIES_URL}/region`,
  all: `${REST_COUNTRIES_URL}/all`,
};

function buidlSearchEndpint({ name, region }: SearchCountriesParams) {
  if (name) {
    return `${SEARCH_ENDPOINT.name}/${name}`;
  }

  if (region) {
    return `${SEARCH_ENDPOINT.region}/${region}`;
  }

  return SEARCH_ENDPOINT.all;
}

export async function searchCountries({
  name,
  region,
}: SearchCountriesParams): Promise<BasicCountry[]> {
  const endpint = `${buidlSearchEndpint({
    name,
    region,
  })}?fields=${DEFAULT_LIST_FIELDS.join(",")}`;

  console.log(endpint);

  const res = await fetch(endpint);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch search countries data with name ${name}`);
  }

  let countries = (await res.json()) as BasicCountry[];
  // there is no endpint to filter by name and region in restcountries
  if (region) {
    countries = countries.filter((country) => country.region === region);
  }

  return countries;
}
