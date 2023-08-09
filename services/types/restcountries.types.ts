interface Ara {
  official: string;
  common: string;
}

interface NativeName {
  ara: Ara;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface Flag {
  png: string;
  svg: string;
  alt: string;
}

export interface BasicCountry {
  flags: Flag;
  name: Name;
  capital: string[];
  region: string;
  population: number;
}
