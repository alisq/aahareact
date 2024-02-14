import { enFr } from '../utils/languageUtil'
import parse from 'html-react-parser'

function Action({ lang, action }) {
  console.log(action)
  return (
    
    enFr(lang,
      (
        <li>
          <a href={action.link} target="_blank"><label className='label--red'>{action.label}</label></a>
          {parse(action.body)}
        </li>
      ), (
      <li>
        <label className='label--red'>{action.label}</label>
        {parse(action.body)}
      </li>
    )
    ))
}

export default Action