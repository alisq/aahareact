

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
                    <td>{member.name}</td>
                    {hasTitle && ( <td>{member.title}</td> )}
                    {hasTeam && ( 
                        <td>{content.team}</td> 
                        )}
                    {hasRole && ( <td>{content.role}</td> )}
                    {hasOrg && ( <td>{content.organization}</td> )}
                    {hasBio && ( <td>{content.bio}</td> )}
                    
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default Member