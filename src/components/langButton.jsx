function LangButton({ lang, isActive, handleClick }) {

  return (
    <div
      className={isActive ? 'active' : ''}
      onClick={handleClick} >
      {lang.toLocaleUpperCase()}
    </div>

  )
}

export default LangButton