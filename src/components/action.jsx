function Action(lang){

    return (
      lang.lang == 'en' ?
      (

        <li>
        <a href="https://docs.google.com/forms/d/1A4sRDWE8gjoyg1w0XlH9CImhx4BbAv9yCo67JPOkVkc/viewform?edit_requested=true#responses"><label className='label--red'>SIGN UP</label></a><br />
        Check back soon for actions you can take in your area. In the meantime, sign the form below to stay up to date about the campaign:
        <br />
        <label><a href="https://docs.google.com/forms/d/1A4sRDWE8gjoyg1w0XlH9CImhx4BbAv9yCo67JPOkVkc/viewform?edit_requested=true#responses">SIGN HERE</a></label>
        </li>
      ) : (
        <li>
        <a href="https://docs.google.com/forms/d/1A4sRDWE8gjoyg1w0XlH9CImhx4BbAv9yCo67JPOkVkc/viewform?edit_requested=true#responses"><label className='label--red'>S'INSCRIRE</label></a><br />
        Revenez bientôt pour les actions que vous pouvez entreprendre dans votre région. En attendant, signez le formulaire ci-dessous pour rester informé de la campagne :
        <br />
        <label><a href="https://docs.google.com/forms/d/1A4sRDWE8gjoyg1w0XlH9CImhx4BbAv9yCo67JPOkVkc/viewform?edit_requested=true#responses">SIGNEZ ICI</a></label>
        </li>
      )

    )
}

export default Action