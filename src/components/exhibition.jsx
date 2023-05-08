import Pavilion from './pavilion'
import Logos from './logos'

function Exhibition({lang}) {



    return (
<div className="container">
          <div className="row">
          <div className='three columns'><br /></div>
            <div className='six columns'>
          <br />
          <h3>{(lang === 'fr') ?  "Pas à vendre / Quartier général" : "Not for Sale! Heartquarters"}</h3>
          </div>
            <Pavilion lang={lang} className="img" />
            <div className='three columns'><br /></div>
            <div className='six columns'>
            <p className="caption text-center">Pavilion layout for Not For Sale exhibition in Venice, Italy.</p>
            



            <Logos lang={lang}/>

            
            <h4>
{(lang === 'fr') ? "Le soutien gracieux et la collaboration de : " : "Gracious Support and Collaboration of"}
</h4>
Ron Kellett<br />
Tamara Ross<br />
Tracy Satterfield<br />
Emma Fennell <br />
Maya Przybylski<br />
Julie Dring <br />
Marie McGregor Pitawanakwat <br />
Chinook Song Catchers <br />
Robyn Adams<br /><br />



          </div>
          </div>

          
        </div>

    )
}

export default Exhibition;