import committeeData from '../committee.json'
import collaboratorData from '../collaborators.json'
import contributorData from '../contributors.json'
import Member from './member'
import MemberCommittee from './memberCommittee'
import { enFr } from '../utils/languageUtil'
import { useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { noop } from '../utils/general'


function Collective({ lang }) {
  const location = useLocation()
  const sectionRefs = {
    'collective__organizing-committee': useRef(null),
    'collective__collaborators': useRef(null),
    'collective__team-members': useRef(null)
  }

  useEffect(() => {
    if (!location) return noop
    const matchedRef = sectionRefs[location.hash.slice(1)]
    if (!matchedRef || !matchedRef.current) return noop
    setTimeout(() =>
      // 65 is not a responsive value
      window.scrollBy({
        top: matchedRef.current.getBoundingClientRect().top - 65,
        behavior: 'smooth'
      }), 80)
  }, [location, ...Object.values(sectionRefs)])

  const getMemberCommittee = (member, i) =>

    <MemberCommittee
      lang={lang}
      member={member}
      key={i} />

  const getMember = (member, i) =>
    <Member
      lang={lang}
      member={member}
      key={i} />

  return (
    <>
      <br /><br />
      <h3 ref={sectionRefs['collective__organizing-committee']} className='textCenter'>{enFr(lang, 'ORGANIZING COMMITTEE', 'COMITÉ ORGANISATEUR')}</h3>
      <table className='members'><tbody>{committeeData.map(getMemberCommittee)}</tbody></table>
      <br /><br />
      <h3 ref={sectionRefs['collective__collaborators']} className='textCenter'>{enFr(lang, 'CAMPAIGN COLLABORATORS', 'COLLABORATEURS DE LA CAMPAGNE')}</h3>
      <table className='members'>
        <thead>
          <tr>
            <td className='sidebearing'></td>
            <td><label className='red'>{enFr('NAME', 'NOM')}</label></td>
            <td><label className='red'>{enFr('ROLE', 'RÔLE')}</label></td>

            <td><label className='red'>{enFr('BIOGRAPHY', 'BIOGRAPHIE')}</label></td>
            <td className='sidebearing'></td>
          </tr>
        </thead>
        <tbody>{collaboratorData.map(getMember)}</tbody>
      </table>
      <br /><br />
      <h3 ref={sectionRefs['collective__team-members']} className='textCenter'>{enFr(lang, 'TEAM MEMBERS', 'MEMBRES DE L’ÉQUIPE')}</h3>
      <table className='members'>
        <thead>
          <tr>
            <td className='sidebearing'></td>
            <td><label className='red'>{enFr('NAME', 'NOM')}</label></td>
            <td></td>
            <td><label className='red'>{enFr('ROLE', 'RÔLE')}</label></td>
            <td><label className='red'>{enFr('TEAM', 'EQUIPE')}</label></td>
            <td><label className='red'>{enFr('ORGANIZATION', 'ORGANISME')}</label></td>
            <td className='sidebearing'></td>

          </tr>
        </thead>
        <tbody>{contributorData.map(getMember)}</tbody>
      </table>

    </>

  )
}

export default Collective