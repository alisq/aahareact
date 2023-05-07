
function Member({ member, title, lang}) {
 
        
    const hasBio = member[lang].bio !== "";
    const hasTeam = member.team_id !== ""
    const hasRole = member[lang].role !== ""
    const hasTitle = member[lang].title !== ""
    const hasOrg = member[lang].organization > 0
    const hasLink = member.links !== ""
    
        let orgList = [];

        member[lang].organization.forEach((org, index) => {
            orgList.push(<li key={index}><a target='_blank' href={member[lang].organization_links[index]}>{org}</a></li>);
        });
    
   return (
           <>

               {
               (member.category === "collaborator") ? (
                   
                <tr>
                <td className="sidebearing">col</td>    
                <td><strong>{member.name}</strong></td>
                <td><label>{member[lang].title}</label></td> 
                <td>{member[lang].bio}</td> 
                <td className="sidebearing"></td>
                </tr>
                   
                   
               ) : (
                   <tr>
                   <td className="sidebearing"></td>    
                   <td><strong>{member.name}</strong></td>
                   {hasTitle && ( <td><label>{member[lang].title}</label></td> )}
                   {hasRole && ( <td className="smallHalf"><label>{member[lang].role}</label></td> )}
                   {hasTeam && ( <td className="smallHalf"><a href={'/'+lang+"/demand/"+member.team_id}>{member[lang].team}</a></td> )}
                   
                    <td><ul>{orgList}</ul></td> 
                   {hasBio && ( <td>{member[lang].bio}</td> )}
                   <td className="sidebearing"></td>
                   </tr>
               )
           }
               
               </>
               
       
   )

}

export default Member