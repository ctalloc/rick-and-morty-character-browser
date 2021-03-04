const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "species",
      value: e.target.value,
    });
  };
  return (
    <>
      <label htmlFor="species">Filtrar personajes por especie:</label>
      <select name="species" onChange={handleChange}>
        <option value="">Todas</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};
export default FilterBySpecies;
