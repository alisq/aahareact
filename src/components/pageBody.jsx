import { forwardRef } from 'react'
import committeeData from '../committee.json'
import collaboratorData from '../collaborators.json'
import contributorData from '../contributors.json'
import Member from './member'

const PageBody = forwardRef(({ page_id, body, title, lang }, ref) => {
  
  const getMember = (member, i) => 
  <Member
    member={member}
    content={member[lang]}
    // title={demandTitleData[member.team_id - 1][lang]}
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
      
<>

<br /><br />
      <h3 className="textCenter">{(lang === 'fr') ? "COMITÉ ORGANISATEUR" : "ORGANIZING COMMITTEE"}</h3>      
        <table className="members"><tbody>{committeeData.map(getMember)}</tbody></table>
        <br /><br />
        <h3 className="textCenter">{(lang === 'fr') ? "COLLABORATRICES ET COLLABORATEURS DE LA CAMPAGNE" : "CAMPAIGN COLLABORATORS"}</h3>
        <table className="members"><tbody>{collaboratorData.map(getMember)}</tbody></table>
        <br /><br />
        <h3 className="textCenter">{(lang === 'fr') ? "MEMBRES DE L’ÉQUIPE" : "TEAM CONTRIBUTORS"}</h3>
 
        <table className="members"><tbody>{contributorData.map(getMember)}</tbody></table>   
        
      </>
      }
    </section >
  )
})

export default PageBody