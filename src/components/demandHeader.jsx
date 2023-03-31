
function DemandHeader({ lang, handleClick, field_demand_no, field_exmark, demand_id, tempRef }) {

  const t = lang.title.split(" ")
  let l = ""

  for (let i = 1; i < t.length - 1; i++) {
    l += t[i] + " "
  }

  const ex = (field_exmark === "") ? "!" : ""
  
  return (
    <h2 onClick={() => handleClick(demand_id)} ref={tempRef}>
      <span className='noBreak'><span className='num'>{field_demand_no}</span>
        {t[0]}</span> {l} <span className='noBreak'>{t[t.length - 1]}<span className={field_exmark}>{ex}</span> </span>
    </h2>
  )
}

export default DemandHeader