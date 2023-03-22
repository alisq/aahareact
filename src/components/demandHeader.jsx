function DemandHeader({ lang, handleClick, navigate, field_demand_no, getBodyRef, field_exmark, demand_id }) {
  // const handleClick = () => {
  //   // gets the reference to the corresponding body
  //   getBodyRef().current.scrollIntoView({ behavior: 'smooth' })
  //   navigate(`#${demand_id}`)
  // }



  return (


    <h2 onClick={() => handleClick(demand_id)}><span className='num'>{field_demand_no}</span>{lang.title}<span className={field_exmark}>{field_exmark === '' ? '!' : ''}</span> </h2>
  )
}

export default DemandHeader