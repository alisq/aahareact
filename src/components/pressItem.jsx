
function PressItem ({item, lang}) {
    
    return(
        <tr>
            <td className='sidebearing'></td>
            
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
            <td className='sidebearing'></td>
        </tr>
    )
}

export default PressItem