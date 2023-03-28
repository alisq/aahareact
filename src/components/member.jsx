function Member({ member, content, title }) {

    const hasBio = content.Bio !== undefined

    return (
        <>
            <tr>
                <td>{member.Name}</td>
                <td>{title}</td>
                <td>{content.Role}</td>
                <td>{content.Organization}</td>
                <td>{hasBio && "read more"}</td>
            </tr>

            {
                hasBio &&
                <tr>
                    <td colSpan='5'>{content.Bio}</td>
                </tr>
            }
        </>
    )

}

export default Member