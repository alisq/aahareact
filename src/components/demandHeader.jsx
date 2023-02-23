function DemandHeader({ title, field_demand_no, getBodyRef, field_exmark, view_node }) {
  const handleClick = () => { getBodyRef().scrollIntoView({ behavior: 'smooth' }) }




  return (
    <h2 onClick={() => handleClick()}><span className="num">{field_demand_no}</span>{title}<span className={field_exmark}></span> </h2>
  )
}

export default DemandHeader