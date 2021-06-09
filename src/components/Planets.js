import { useState } from "react";
import { useQuery } from "react-query";

// api
import { fetchPlanets } from "../api";

// components
import Planet from "./planets/Planet";

// constants
import { API_KEY } from "../constants";

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isPreviousData } = useQuery(
    [API_KEY.planets, page],
    () => fetchPlanets(page),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>Planets</h2>
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous Page
        </button>
        <span>Current Page: {page}</span>
        <button
          onClick={() => {
            if (!isPreviousData && data.next) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPreviousData || !data?.next}
        >
          Next Page
        </button>
      </div>
      {data.results.map((planet) => (
        <Planet key={planet.name} {...planet} />
      ))}
    </div>
  );
};

export default Planets;
