const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "species",
      value: e.target.value,
    });
  };
  return (
    <div className='filters__form--item'>
      <label className='filters__form--itemlabel' htmlFor="species">Especie:</label>
      <select name="species" onChange={handleChange}>
        <option value="">Todas</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
};
export default FilterBySpecies;
