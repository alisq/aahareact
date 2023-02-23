function DemandHeader({ title, navigate, field_demand_no, getBodyRef, field_exmark, demand_id }) {
  const handleClick = () => {
    getBodyRef().scrollIntoView({ behavior: 'smooth' })
    navigate(`#${demand_id}`)
  }

  return (
    <h2 onClick={() => handleClick()}><span className="num">{field_demand_no}</span>{title}<span className={field_exmark}></span> </h2>
  )
}

export default DemandHeader