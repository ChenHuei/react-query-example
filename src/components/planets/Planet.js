const Planet = (props) => {
  const { name, population, terrain } = props;

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Population - {population}</p>
      <p>Terrain - {terrain}</p>
    </div>
  );
};

export default Planet;
