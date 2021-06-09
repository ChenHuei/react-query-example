import { useQuery } from "react-query";

// api
import { fetchPeople } from "../api";

// components
import Person from "./people/Person";

// constants
import { API_KEY } from "../constants";

const People = () => {
  const { data, isLoading, isError } = useQuery(API_KEY.people, fetchPeople);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h2>People</h2>
      {data.results.map((person) => (
        <Person key={person.name} {...person} />
      ))}
    </div>
  );
};

export default People;
