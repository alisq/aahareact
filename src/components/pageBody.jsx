import { forwardRef } from 'react'
import contributorData from '../contributors.json'
import orgData from '../orgs.json'
import Member from './member'

const PageBody = forwardRef(({ page_id, body, title, lang }, ref) => {
  return (
    <section id={page_id} className='page' ref={ref}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>

            <h2>{lang[title]}</h2>

          </div>
          <div className='six columns'>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>

          </div>
        </div>
      </div>
      <table>
        <tbody>
          {orgData.map((member, i) =>
            <Member member={member} lang={lang} key={i} />
          )}

          {contributorData.map((member, i) =>
            <Member member={member} lang={lang} key={i} />
          )}
        </tbody>
      </table>
    </section >
  )
})

export default PageBody