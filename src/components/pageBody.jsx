import { forwardRef } from 'react'
import contributorData from '../contributors.json'
import orgData from '../orgs.json'
import demandTitleData from '../demandTitle.json'
import Member from './member'

const PageBody = forwardRef(({ page_id, body, title, lang }, ref) => {
  const getMember = (member, i) => <Member
    member={member}
    content={member[lang]}
    title={demandTitleData[member.team_id - 1][lang]}
    key={i} />

  return (
    <section id={page_id} className='page' ref={ref}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            <h2>{title}</h2>
          </div>
          <div className='six columns'>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>

          </div>
        </div>
      </div>
      {page_id === 'collective' &&
        <table>
          <tbody>
            {orgData.map(getMember)}
            {contributorData.map(getMember)}
          </tbody>
        </table>
      }
    </section >
  )
})

export default PageBody