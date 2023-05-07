
function MemberCommittee({ member, title, lang}) {
 
        
    // const hasBio = member[lang].bio !== "";
    // const hasTitle = member[lang].title !== ""
    // const hasOrg = member[lang].organization !== ""
    // const hasLink = member.links !== ""
   
    
    
   return (
           <>

               {
                   
                   <tr>
                   <td className="sidebearing"></td>
                   <td className="hideText"><h5><a href={member.links[0]} target="_blank">{member.name}</a></h5> <div className="longText">{member[lang].bio}</div></td>
                   <td className="sidebearing"></td>
                   </tr>
                   
                   
               
           }
               
               </>
               
       
   )

}

export default MemberCommittee