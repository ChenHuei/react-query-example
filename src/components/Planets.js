import { useQuery } from "react-query";

// api
import { fetchPlanets } from "../api";

// components
import Planet from "./planets/xPlanet";

// constants
import { API_KEY } from "../constants";

const Planets = () => {
  const { data, isLoading, isError } = useQuery(API_KEY.planets, fetchPlanets);

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
