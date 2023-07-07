
function Member({ member, lang }) {
    let orgList = member[lang].organization.map((org, i) =>
        <li key={i}><a target='_blank' href={member[lang].organization_links[i]}>{org}</a></li>)
    return member.category === 'collaborator' ?
        <tr>
            <td className='sidebearing'></td>
            <td><strong>{member.name}</strong></td>
            <td><label>{member[lang].title}</label></td>
            <td>{member[lang].bio}</td>
            <td className='sidebearing'></td>
        </tr> :
        <tr>
            <td className='sidebearing'></td>
            <td><strong>{member.name}</strong></td>
            {member[lang].title && (<td><label>{member[lang].title}</label></td>)}
            <td><ul className='orgLinks'>{orgList}</ul></td>
            
            {member.team_id && (<td className='smallHalf'><a className='teamTitle' href={'/' + lang + '/demand/' + member.team_id}>{member[lang].team}</a></td>)}
            {member[lang].role && (<td className='smallHalf'><label>{member[lang].role}</label></td>)}
            
            {member[lang].bio && (<td>{member[lang].bio}</td>)}
            <td className='sidebearing'></td>
        </tr>
}

export default Member