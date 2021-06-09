import { useQuery } from "react-query";

// components
import Planet from "./planets/Planet";

const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};
const Planets = () => {
  const { data, isLoading, isError } = useQuery("planets", fetchPlanets);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>Planets</h2>
      {data.results.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </div>
  );
};

export default Planets;
