

function Member({ member, content, title }) {
 
        
     const hasBio = content.bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = content.role !== ""
     const hasTitle = content.title !== ""
     const hasOrg = content.organization !== ""
     const hasLink = member.links !== ""
     
     console.log("content")
     console.log(content)
     
    

     
    return (
            <>

                {
                (member.category === "committee") ? (
                    
                    <tr>
                    <td class="sidebearing"></td>
                    <td><h5><a href={member.links[0]} target="_blank">{member.name}</a></h5> {content.bio}<br /></td>
                    <td class="sidebearing"></td>
                    </tr>
                    
                    
                ) : (
                    <tr>
                    <td class="sidebearing"></td>    
                    <td><strong>{member.name}</strong></td>
                    {hasTitle && ( <td><label>{content.title}</label></td> )}
                    {hasRole && ( <td className="smallHalf"><label>{content.role}</label></td> )}
                    {hasTeam && ( <td className="smallHalf">{content.team}</td> )}
                    
                    {hasOrg && ( <td>{content.organization}</td> )}
                    {hasBio && ( <td>{content.bio}</td> )}
                    <td class="sidebearing"></td>
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default Member