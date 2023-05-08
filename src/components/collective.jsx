import committeeData from '../committee.json'
import collaboratorData from '../collaborators.json'
import contributorData from '../contributors.json'
import Member from './member'
import MemberCommittee from './memberCommittee'


function Collective({lang}) {


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
<h3 id="collective__organizing-committee" className="textCenter">{(lang === 'fr') ? "COMITÉ ORGANISATEUR" : "ORGANIZING COMMITTEE"}</h3>
<table className="members"><tbody>{committeeData.map(getMemberCommittee)}</tbody></table>
<br /><br />
<h3 id="collective__collaborators" className="textCenter">{(lang === 'fr') ? "COLLABORATEURS DE LA CAMPAGNE" : "CAMPAIGN COLLABORATORS"}</h3>
<table className="members">
  <thead>
    <tr>
      <td className="sidebearing"></td>
      <td><label className="red">{(lang === 'fr') ? "Nom" : "name"}</label></td>
      <td><label className="red">{(lang === 'fr') ? "Rôle" : "role"}</label></td>

      <td><label className="red">{(lang === 'fr') ? "Biographie" : "biography"}</label></td>
      <td className="sidebearing"></td>
    </tr>
  </thead>
  <tbody>{collaboratorData.map(getMember)}</tbody>
</table>
<br /><br />
<h3 id="collective__team-members" className="textCenter">{(lang === 'fr') ? "MEMBRES DE L’ÉQUIPE" : "TEAM MEMBERS"}</h3>

<table className="members">
  <thead>
    <tr>
      <td className="sidebearing"></td>
      <td><label className="red">{(lang === 'fr') ? "Nom" : "name"}</label></td>
      <td></td>
      <td><label className="red">{(lang === 'fr') ? "Rôle" : "role"}</label></td>
      <td><label className="red">{(lang === 'fr') ? "equipe" : "team"}</label></td>
      <td><label className="red">{(lang === 'fr') ? "organisme" : "organization"}</label></td>
      <td className="sidebearing"></td>

    </tr>
  </thead>
  <tbody>{contributorData.map(getMember)}</tbody>
</table>

</>

)
}

export default Collective;