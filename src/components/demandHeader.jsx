function DemandHeader({ title, field_demand_no, field_dom_text, field_exmark }) {
  const handleClick = (msg) => { alert(msg) }

  return (
    <h2 onClick={() => handleClick(title)}><span className="num">{field_demand_no}</span>{title}<span className={field_exmark}></span> </h2>
  )
}

export default DemandHeader