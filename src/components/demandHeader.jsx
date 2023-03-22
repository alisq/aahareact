function DemandHeader({ lang, handleClick, field_demand_no, field_exmark, demand_id }) {
  return (
    <h2 onClick={() => handleClick(demand_id)}><span className='num'>{field_demand_no}</span>{lang.title}<span className={field_exmark}>{field_exmark === '' ? '!' : ''}</span> </h2>
  )
}

export default DemandHeader