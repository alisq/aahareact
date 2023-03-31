
import { forwardRef } from 'react'
import Action from './action'
import HighlightedText from './highlightedText'

import contributorData from '../contributors.json'
import Member from './member'

const DemandBody = forwardRef(({ content, demand_id, banner }, ref) => {


  
  const teamMembers = contributorData.filter(function (m) {
    return m.team_id === demand_id;
  });
  

  const hasBanner = banner !== ""

  document.title = "AAHA | " + content.title
  

  
  const getMember = (member, i) => 
  <Member
    member={member}
    content={member[content.lang]}
    // title={demandTitleData[member.team_id - 1][lang]}
    key={i} />
  
  return (
    <section id={demand_id} className='demand' ref={ref}>
      
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>

            <h2>{content.title}</h2>

            <p>
              <HighlightedText>
                {content.field_long_summary}
              </HighlightedText>
            </p>
            <p>
            <label>{content.lang === "en" ? "REGION" : "Région"}:</label>
            {content.field_region}
            </p>
            <p>
            <label>{content.lang === "en" ? "Activist" : "Activiste"}:</label> {content.activist}
            </p>
            <p>
            <label>{content.lang === "en" ? "Advocate" : "Intervenant"}:</label> {content.advocate}
            </p>
            <p>
            <label>{content.lang === "en" ? "Architect" : "Architecte"}:</label> {content.architect}
            </p>

          </div>
          <div className='six columns'>

          <img src={'/img/banners/' + banner} />
            <p className='caption'>{content.banner_caption}</p>

            <div dangerouslySetInnerHTML={{ __html: content.field_content }}></div>

            {/* <div className='main-carousel'>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_3cc.jpg?itok=BppEniI5' />
                <p className='caption'>example caption</p>
              </div>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_2cc.jpg?itok=pPtOD-xP' />
                <p className='caption'>example caption</p>
              </div>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_1cc.jpg?itok=8t0Is5R_' />
                <p className='caption'>example caption</p>
              </div>
            </div> */}
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>
            <h3>TAKE ACTION</h3>
            <ul className='actions'>
              <Action lang={content.lang}/>
            </ul>
          </div>
        </div>
      </div>
      <br /><br />
      <h3 className="textCenter">Team Members</h3>
      <br />
      <table className="members"><tbody>{teamMembers.map(getMember)}</tbody></table>   
    </section>
  )
})

export default DemandBody