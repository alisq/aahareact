function DemandHeader({ title, field_demand_no, demandRef, field_exmark, view_node }) {
  const handleClick = (msg) => { document.getElementById(msg).scrollIntoView({ behavior: 'smooth' }) }



  return (
    <h2 onClick={() => handleClick(view_node)}><span className="num">{field_demand_no}</span>{title}<span className={field_exmark}></span> </h2>
  )
}

export default DemandHeader