
function MemberCommittee({ member, lang }) {
    return (
        <tr>
            <td className='sidebearing'></td>
            <td className='hideText'><h5><a href={member.links[0]} target='_blank'>{member.name}</a></h5></td>
            <td><div className='longText'>{member[lang].bio}</div></td>
            <td className='sidebearing'></td>
        </tr>
    )
}

export default MemberCommittee