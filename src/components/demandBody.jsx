
import { forwardRef } from 'react'
import parse from 'html-react-parser'
import Action from './action'
import HighlightedText from './highlightedText'
import CarouselDemand from './carouselDemand'

import contributorData from '../contributors.json'
import MemberDemand from './memberDemand'
import { enFr } from '../utils/languageUtil'

const DemandBody = forwardRef(({ content, demand_id, banner, gallery }, ref) => {
  
  
  const { title, lang, field_long_summary, field_region, activist, architect, advocate, banner_caption, field_content } = content
  const teamMembers = contributorData.filter(member => member.team_id === demand_id)
 
  // const hasBanner = banner !== ''

  document.title = `AAHA | ${title}`

  console.log(content.actions);


  return (
    <section id={demand_id} className='demand' ref={ref}>

      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            <h2>{enFr(lang, 'We Demand', 'Nous demandons ')} {title}</h2>
            <p>
              {/* disabled highlight text as it can't be applied to main body,
              since parsing react element is too involved */}
              {field_long_summary}
              {/* <HighlightedText>
              </HighlightedText> */}
            </p>
            <p>
              <label>{enFr(lang, 'REGION:', 'Région : ')} </label> {field_region}
            </p>
            {activist &&
              <p>
                <label>{enFr(lang, 'Activist:', 'Activiste : ')} </label> {activist}
              </p>}
            {architect && <p>
              <label>{enFr(lang, 'Architect:', 'Architecte : ')} </label> {architect}
            </p>}
            {advocate &&
              <p>
                <label>{enFr(lang, 'Advocate:', 'Défenseur : ')} </label> {advocate}
              </p>}

          </div>
          <div className='six columns'>
            <img src={'/img/banners/' + banner} alt='' />
            <p className='caption'>{banner_caption}</p>
            <div>
              {parse(field_content)}
            </div>
            <div>
            
          <CarouselDemand
            carouselImages={gallery}
            lang={lang}
            
            />
            
            </div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>
            <h3>{enFr(lang, 'TAKE ACTION:', "PASSONS À L'ACTION : ")}</h3>
            <ul className='actions'>
              {/* <Action lang={lang} /> */}

              
            {content.actions.map((action, i) =>
          <Action
            
            lang={lang}
            action={action}
           
            key={i} />)}

</ul>
          </div>
        </div>
      </div>
      <br /><br />
      <h3 className='textCenter'>{enFr(lang, 'TEAM MEMBERS', 'MEMBRES DE L’ÉQUIPE')}</h3>
      <br />
      <table className='members'>
        <thead>
          <tr>
            <td className='sidebearing'></td>
            <td><label className='red'>{enFr(lang, 'name', 'Nom')}</label></td>
            <td><label className='red'>{enFr(lang, 'organizations', 'Organisme')}</label></td>
            <td><label className='red'>{enFr(lang, 'role', 'Rôle')}</label></td>
            
            <td className='sidebearing'></td>
          </tr>
        </thead>
        <tbody>{teamMembers.map((member, i) =>
          <MemberDemand
            member={member}
            lang={lang}
            // title={demandTitleData[member.team_id - 1][lang]}
            key={i} />)}</tbody>
      </table>
    </section>
  )
})

export default DemandBody