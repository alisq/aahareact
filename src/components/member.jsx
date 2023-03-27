function Member({member, lang}) {
    
    const hasBio =member[lang]["Bio"] !== null

    

    return (
        <>
        <tr>
            
            <td>{member["Name"]}</td>
            <td>{member["Team"]}</td>
            <td>{member[lang]["Role"]}</td>
            <td>{member[lang]["Organization"]}</td>
      </tr>

{
    hasBio && <tr>
            
    <td colspan='4'>{member[lang]["Bio"]}</td>
    </tr>
}
</>
    )
    
}

export default Member;