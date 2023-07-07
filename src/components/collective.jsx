import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import demandData from '../demands.json'
import committeeData from '../committee.json'
import collaboratorData from '../collaborators.json'
import contributorData from '../contributors.json'
import Member from './member'
import MemberCommittee from './memberCommittee'
import { enFr } from '../utils/languageUtil'
import { noop } from '../utils/general'
import Filter from './filter'


function Collective({ lang }) {
  const location = useLocation()
  const [collaboratorFilters, setCollaboratorFilters] = useState({ role: '' })
  const [teamMemberFilters, setTeamMemberFilters] = useState({ role: '', team: '', organization: '' })

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

  const getCommitteeMember = (member, i) =>
    <MemberCommittee
      lang={lang}
      member={member}
      key={i} />

  const getCollaborator = (member, i) => {
    const { role } = collaboratorFilters
    if (!role || role.toLocaleLowerCase() === member[lang].title.toLocaleLowerCase())
      return <Member
        lang={lang}
        member={member}
        key={i} />
  }

  const getTeamMember = (member, i) => {
    const { role, team, organization } = teamMemberFilters
    const memberData = member[lang]

    if (
      (!role || role.toLocaleLowerCase() === memberData.role.toLocaleLowerCase()) &&
      (!team || team.toLocaleLowerCase() === memberData.team.toLocaleLowerCase()) &&
      (!organization || memberData.organization.find(org => org.toLocaleLowerCase()
        === organization.toLocaleLowerCase()))
    )
      return <Member
        lang={lang}
        member={member}
        key={i} />
  }

  const handleFilter = (target, filterState, setFilterState, filterName) => {
    console.log(target)
    setFilterState({ ...filterState, [filterName]: target.value })
  }

  // const getCollaboratorRole = language => [...new Set(collaboratorData.map(collaborator => collaborator[language].title).flat())]
  // const getOrgNames = language => [...new Set(contributorData.map(contributor => contributor[language].organization).flat())]

  return (
    <>
      <br /><br />
      <h3 ref={sectionRefs['collective__organizing-committee']} className='textCenter'>{enFr(lang, 'ORGANIZING COMMITTEE', 'COMITÉ ORGANISATEUR')}</h3>
      <table className='members'><tbody>{committeeData.map(getCommitteeMember)}</tbody></table>
      <br /><br />
      <h3 ref={sectionRefs['collective__collaborators']} className='textCenter'>{enFr(lang, 'CAMPAIGN COLLABORATORS', 'COLLABORATEURS DE LA CAMPAGNE')}</h3>
    
      <table className='members'>
        <thead>
          <tr>
            <td className='sidebearing'></td>
            <td><label className='red'>{enFr(lang, 'NAME', 'NOM')}</label></td>
            <td><label className='red'>{enFr(lang, 'ROLE', 'RÔLE')}</label></td>

            <td><label className='red'>{enFr(lang, 'BIOGRAPHY', 'BIOGRAPHIE')}</label></td>
            <td className='sidebearing'></td>
          </tr>
        </thead>
        <tbody>{collaboratorData.map(getCollaborator)}</tbody>
      </table>
      <br /><br />
      <h3 ref={sectionRefs['collective__team-members']} className='textCenter'>{enFr(lang, 'TEAM MEMBERS', 'MEMBRES DE L’ÉQUIPE')}</h3>
      <div className="text-center">
      <Filter
        name='team-members-role'
        placeholder={enFr(lang, 'ROLE', 'RÔLE')}
        list={enFr(lang,
          ['ACTIVIST', 'ADVOCATE', 'ARCHITECT'],
          ['ACTIVISTE', 'DÉFENSEUR', 'ARCHITECTE'])}
        handleFilter={({ target }) =>
          handleFilter(target, teamMemberFilters, setTeamMemberFilters, 'role')} />
      <Filter
        name='team-members-team'
        placeholder={enFr(lang, 'TEAM', 'EQUIPE')}
        list={enFr(lang,
          demandData.map(demand => demand.en.title),
          demandData.map(demand => demand.fr.title))}
        handleFilter={({ target }) =>
          handleFilter(target, teamMemberFilters, setTeamMemberFilters, 'team')} />
      </div>

      
      <table className='members'>
        <thead>
          <tr>
            <td className='sidebearing'></td>
            <td><label className='red'>{enFr(lang, 'NAME', 'NOM')}</label></td>
            
            
            <td><label className='red'>{enFr(lang, 'ORGANIZATION', 'ORGANISME')}</label></td>
            <td><label className='red'>{enFr(lang, 'TEAM', 'EQUIPE')}</label></td>
            <td><label className='red'>{enFr(lang, 'ROLE', 'RÔLE')}</label></td>
            <td className='sidebearing'></td>

          </tr>
        </thead>
        <tbody>{contributorData.map(getTeamMember)}</tbody>
      </table>
    </>
  )
}

export default Collective