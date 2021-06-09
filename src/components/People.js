import { useState } from "react";
import { useQuery } from "react-query";

// api
import { fetchPeople } from "../api";

// components
import Person from "./people/Person";

// constants
import { API_KEY } from "../constants";

const People = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isPreviousData } = useQuery(
    [API_KEY.people, page],
    () => fetchPeople(page),
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
      <h2>People</h2>
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
      {data.results.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
};

export default People;
