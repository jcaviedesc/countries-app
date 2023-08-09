import { BasicCountry } from "./types/restcountries.types";

const REST_COUNTRIES_HOST = process.env.REST_COUNTRIES_HOST;
const REST_COUNTRIES_VERSION = process.env.REST_COUNTRIES_VERSION;

const REST_COUNTRIES_URL = `${REST_COUNTRIES_HOST}/${REST_COUNTRIES_VERSION}`;

const defaultFiels = ["name", "population", "region", "capital", "flags"];

type GetAllContriesProps = {
  /**
   * see https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
   */
  fields?: string[];
};

export async function getAllContries({
  fields = defaultFiels,
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
