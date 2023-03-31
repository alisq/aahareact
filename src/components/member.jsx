

function Member({ member, content, title }) {
 
        
     const hasBio = content.bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = content.role !== ""
     const hasTitle = member.title !== ""
     const hasOrg = content.organization !== ""
     const hasLink = member.links !== ""
     
     
    

     
    return (
            <>

                {
                (member.category === "committee") ? (
                    
                    <tr>
                    <td><strong>{member.name}</strong> {content.bio}<br />
                    <a href={member.links[0]}>{member.links[0]}</a></td>
                    </tr>
                    
                    
                ) : (
                    <tr>
                    <td><strong>{member.name}</strong></td>
                    {hasTitle && ( <td><label>{member.title}</label></td> )}
                    {hasRole && ( <td className="smallHalf"><label>{content.role}</label></td> )}
                    {hasTeam && ( <td className="smallHalf">{content.team}</td> )}
                    
                    {hasOrg && ( <td>{content.organization}</td> )}
                    {hasBio && ( <td>{content.bio}</td> )}
                    
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default Member