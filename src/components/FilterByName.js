const FilterByName = props =>{
    const handleChange = (e) =>{
      //props.handleFilter('name',e.target.value);
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
        <div className='filters__form--item'>
        <label className='filters__form--label' htmlFor="name">
          Name:
        </label>
        <input className='filters__form--input' type="text" name="name" id="name" onChange={handleChange} placeholder="Ej.: Abradolf Linkler..."/>
        </div>
    )
  }
  export default FilterByName;
  