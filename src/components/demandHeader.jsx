
function DemandHeader({ lang, handleClick, field_demand_no, field_exmark, demand_id, tempRef, gallery }) {

  const titleSplit = lang.title.split(' ')
  let brokenString = ''

  for (let i = 1; i < titleSplit.length - 1; i++)
    brokenString += titleSplit[i] + ' '

  const exMark = field_exmark === '' ? '!' : ''

  return (
    <h2 onClick={() => handleClick(demand_id)} ref={tempRef}>
      <span className='noBreak'><span className='num'>{field_demand_no}</span>
        {titleSplit[0]}</span> {brokenString} <span className='noBreak'>{titleSplit[titleSplit.length - 1]}<span className={field_exmark}>{exMark}</span> </span>
    </h2> 
  )
}

export default DemandHeader