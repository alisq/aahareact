function Filter({ name, list, placeholder, handleFilter }) {
  return (
    <select name={name} className='filter-section' onChange={handleFilter}>
      <option value=''>{placeholder}</option>
      {list && list.map((item, i) =>
        <option key={i} value={item}>{item}</option>)}
    </select>

  )
}

export default Filter