export const fetchPlanets = async () => {
  const res = await fetch("http://swapi.dev/api/planets/");
  return res.json();
};

export const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};
