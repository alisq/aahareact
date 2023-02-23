function DemandHeader({ name, num, domText, exMark }) {
  const handleClick = (msg) => { alert(msg) }

  return (
    <h2 onClick={() => handleClick(name)}><span className="num">{num}</span>{domText}<span className={exMark}></span> </h2>
  )
}

export default DemandHeader