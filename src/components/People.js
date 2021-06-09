import { useQuery } from "react-query";

// components
import Person from "./people/Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};
const People = () => {
  const { data, isLoading, isError } = useQuery("people", fetchPeople);

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
