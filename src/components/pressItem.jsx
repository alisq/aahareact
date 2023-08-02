import parse from 'html-react-parser'

function PressItem ({item, lang}) {
    console.log(item)
    
    return(
        <tr>
            <td className='sidebearing'></td>
            

            {item.type === "press item" ? (
            <>
                <td>
                <label className="red">press</label>
                </td>
                <td>
                    {item.field_post_date_1}
                </td>
                <td>
                    <h5><a href={item.field_external_link} target="_blank">{item.title}</a></h5>
                </td>
                <td>
                    {item.field_outlet}
                </td>
                <td>
                    <a href={item.field_external_link} target="_blank"><label className="label--red">read&nbsp;more</label></a>
                </td>
            </>) : 
            
            (<>
                  <td>
                <label className="red">news</label>
                </td>
                <td>
                    {item.field_post_date_1}
                </td>
                <td>
                    <h5>{lang === "en" ? item.title : parse(item.field_title_fr) }</h5>
                    
                </td>
                
                <td colSpan="2">
                <p>{parse(item[lang])}</p>
                </td>
            </>)
            
            }
            
            <td className='sidebearing'></td>
        </tr>
    )
}

export default PressItem