import { Fragment } from 'react'


function HighlightedText({ children }) {
  if (typeof children !== 'string') return children

  const stringToReplace = 'c\\a\\n\\a\\d\\a'
  const baseString = 'canada'
  const splitString = children.split(stringToReplace)
  const StylizedSlash = () => <span className='highlighted'>\</span>
  const StylizedString = () => baseString.split('').map((char, i) =>
    <Fragment key={i}>{char}{i !== baseString.length - 1 && <StylizedSlash />}</Fragment>
  )

  return (
    <>
      {splitString.map((string, i) =>
        <Fragment key={i}>
          {string}{i !== splitString.length - 1 && <StylizedString />}
        </Fragment>)}
    </>
  )
}

export default HighlightedText