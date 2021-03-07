const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "species",
      value: e.target.value,
    });
  };
  return (
    <div className='filters__form--item'>
      <label className='filters__form--label' htmlFor="species">Species:</label>
      <select className='filters__form--input' name="species" onChange={handleChange}>
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
};
export default FilterBySpecies;
