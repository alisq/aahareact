

function MemberDemand({ member, title, lang }) {
 
        
     const hasBio = member[lang].bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = member[lang].role !== ""
     const hasTitle = member.title !== ""
     const hasOrg = member[lang].organization !== ""
     const hasLink = member.links !== ""
     
     
    

     
    return (
            <>

                {
                (member.category === "committee") ? (
                    
                    <tr>
                        <td className="sidebearing"></td>
                    <td><strong>{member.name}</strong> {member[lang].bio}<br />
                    <a href={member.links[0]}>{member.links[0]}</a></td>
                    <td className="sidebearing"></td>
                    </tr>
                    
                    
                ) : (
                    <tr>
                        <td className="sidebearing"></td>
                    <td><strong>{member.name}</strong></td>
                    {hasTitle && ( <td><label>{member.title}</label></td> )}
                    {hasRole && ( <td className="smallHalf"><label>{member[lang].role}</label></td> )}
                    
                    
                    {hasOrg && ( <td>{member[lang].organization}</td> )}
                    {hasBio && ( <td>{member[lang].bio}</td> )}
                    <td className="sidebearing"></td>
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default MemberDemand