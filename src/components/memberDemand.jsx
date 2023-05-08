

function MemberDemand({ member, title, lang }) {
 
        
    const hasBio = member[lang].bio !== "";
    const hasRole = member[lang].role !== ""
    const hasTitle = member[lang].title !== ""
    let orgList = [];
        member[lang].organization.forEach((org, index) => {
            orgList.push(<li key={index}><a target='_blank' href={member[lang].organization_links[index]}>{org}</a></li>);
        });
     
    

     
    return (
            <>

<tr>
                   <td className="sidebearing"></td>    
                   <td><strong>{member.name}</strong></td>
                   
                   {hasRole && ( <td className="smallHalf"><label>{member[lang].role}</label></td> )}
                   
                   
                    <td><ul className="orgLinks">{orgList}</ul></td> 
                   {hasBio && ( <td>{member[lang].bio}</td> )}
                   <td className="sidebearing"></td>
                   </tr>
                
                </>
                
        
    )

}

export default MemberDemand