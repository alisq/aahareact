

function Member({ member, content, title }) {
 
        
     const hasBio = content.bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = content.role !== ""
     const hasTitle = content.title !== ""
     const hasOrg = content.organization !== ""
     const hasLink = member.links !== ""
     
    

     
    return (
            <>

                {
                (member.category === "committee") ? (
                    
                    <tr>
                    <td className="sidebearing"></td>
                    <td className="hideText"><h5><a href={member.links[0]} target="_blank">{member.name}</a></h5> <div className="longText">{content.bio}</div></td>
                    <td className="sidebearing"></td>
                    </tr>
                    
                    
                ) : (
                    <tr>
                    <td className="sidebearing"></td>    
                    <td><strong>{member.name}</strong></td>
                    {hasTitle && ( <td><label>{content.title}</label></td> )}
                    {hasRole && ( <td className="smallHalf"><label>{content.role}</label></td> )}
                    {hasTeam && ( <td className="smallHalf">{content.team}</td> )}
                    
                    {hasOrg && ( <td>{content.organization}</td> )}
                    {hasBio && ( <td>{content.bio}</td> )}
                    <td className="sidebearing"></td>
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default Member