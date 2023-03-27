function Member(member) {
    console.log(member)
    return (
        <tr>

<td>
       {member["Name"]}
       </td>
            <td>
            {member["Team"]}
            </td>
            <td>
            {member["Role"]}
            </td>
       <td>
       {member["Organization"]}
       </td>
      </tr>

    )
    
}

export default Member;