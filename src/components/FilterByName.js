const FilterByName = props =>{
    const handleChange = (e) =>{
      //props.handleFilter('name',e.target.value);
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
        <>
        <label htmlFor="name">
          Filtrar personajes por nombre:
        </label>
        <input type="text" name="name" id="name" onChange={handleChange}/>
        </>
    )
  }
  export default FilterByName;
  