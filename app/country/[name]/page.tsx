type CountryPageProps = {
  params: {
    name: string;
  };
};

export default function CountryPage({ params: { name } }: CountryPageProps) {
  return (
    <div>
      <h1>country page {name}</h1>
    </div>
  );
}
