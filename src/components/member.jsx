

function Member({ member, title, lang}) {
 
        
     const hasBio = member[lang].bio !== "";
     const hasTeam = member.team_id !== ""
     const hasRole = member[lang].role !== ""
     const hasTitle = member[lang].title !== ""
     const hasOrg = member[lang].organization.length > 0;

     
     const hasLink = member.links !== ""
    
     
    return (
            <>

                {
                (member.category === "committee") ? (
                    
                    <tr>
                    <td className="sidebearing"></td>
                    <td className="hideText"><h5><a href={member.links[0]} target="_blank">{member.name}</a></h5> <div className="longText">{member[lang].bio}</div></td>
                    <td className="sidebearing"></td>
                    </tr>
                    
                    
                ) : (
                    <tr>
                    <td className="sidebearing"></td>    
                    <td><strong>{member.name}</strong></td>
                    {hasTitle && ( <td><label>{member[lang].title}</label></td> )}
                    {hasRole && ( <td className="smallHalf"><label>{member[lang].role}</label></td> )}
                    {hasTeam && ( <td className="smallHalf"><a href={'/'+lang+"/demand/"+member.team_id}>{member[lang].team}</a></td> )}
                    
                    <td> {hasOrg && (  member[lang].organization[0]   )} </td>
                    {hasBio && ( <td>{member[lang].bio}</td> )}
                    <td className="sidebearing"></td>
                    </tr>
                )
            }
                
                </>
                
        
    )

}

export default Member