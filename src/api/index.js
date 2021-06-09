export const fetchPlanets = (page) => {
  return fetch(`http://swapi.dev/api/planets?page=${page}`).then((res) =>
    res.json()
  );
};

export const fetchPeople = (page) => {
  return fetch(`http://swapi.dev/api/people?page=${page}`).then((res) =>
    res.json()
  );
};
