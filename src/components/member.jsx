function Member({member, lang}) {
    
    const demandTitles = [{},
        {"en":"Land Back", "fr":"La restitution des terres ancestrales"},
        {"en":"On the Land Housing", "fr":"Des logements sur le territoire"},
        {"en":"First Nations Home Building Lodges", "fr":"Pavillons pour la construction d’habitations au sein des Premières Nations"},
        {"en":"Reparative Architecture", "fr":"Une architecture réparatrice"},
        {"en":"A Gentrification Tax", "fr":"Une taxe sur l’embourgeoisement"},
        {"en":"Surplus Properties for Housing", "fr":"Des propriétés excédentaires pour le logement "},
        {"en":"Intentional Communities for Unhoused People", "fr":"Des communautés intentionnelles pour les personnes sans logement"},
        {"en":"Collective Ownership", "fr":"La propriété collective"},
        {"en":"Mutual Aid Housing", "fr":"Habitat solidaire"},
        {"en":"Ambient Ecosystem Commons", "fr":"Écosystèmes ambiants communs"}
        ]

    const hasBio =member[lang]["Bio"] !== undefined

    

    return (
        <>
        <tr>
            
            <td>{member["Name"]}</td>
            <td>{demandTitles[member["team_id"]][lang]}</td>
            <td>{member[lang]["Role"]}</td>
            <td>{member[lang]["Organization"]}</td>
            <td>{ hasBio && "read more" }</td>
      </tr>

{
    hasBio && <tr>
            
    <td colSpan='5'>{member[lang]["Bio"]}</td>
    </tr>
}
</>
    )
    
}

export default Member;