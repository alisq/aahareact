import React from 'react'

function LanguageButton({ lang, isActive, handleClick }) {
  return (
    <div
      className={isActive ? 'active' : ''}
      onClick={handleClick} >
      {lang.toLocaleUpperCase()}
    </div>
  )
}

export default LanguageButton