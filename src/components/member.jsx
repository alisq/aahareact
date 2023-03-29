function Member({ member, content, title }) {
// console.log(member)
    
     const hasBio = content.bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = content.role !== ""
     const hasTitle = member.title !== ""
     const hasOrg = content.organization !== ""

     console.log(hasTeam)
    return (
        <tr>

                {
                (member.category === "committee") ? (
                    <td><strong>{member.name}</strong> {content.bio}</td>
                ) : (
                    <>
                    <td>{member.name}</td>
                    {hasTitle && ( <td>{member.title}</td> )}
                    {hasTeam && ( <td>{member.team_id}</td> )}
                    {hasRole && ( <td>{content.role}</td> )}
                    {hasOrg && ( <td>{content.organization}</td> )}
                    
                    </>
                )
            }
                

                
        </tr>
    )

}

export default Member