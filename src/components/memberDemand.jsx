function MemberDemand({ member, lang }) {
    let orgList = member[lang].organization.map((org, i) =>
        <li key={i}><a target='_blank' href={member[lang].organization_links[i]}>{org}</a></li>)
    return (
        <tr>
            <td className='sidebearing'></td>
            <td><strong>{member.name}</strong></td>

            <td><ul className='orgLinks'>{orgList}</ul></td>
            <td className='smallHalf'><label>{member[lang].role}</label></td>

            <td className='sidebearing'></td>
        </tr>
    )

}

export default MemberDemand