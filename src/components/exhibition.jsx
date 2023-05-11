import Pavilion from './pavilion'
import Logos from './logos'
import { enFr } from '../utils/languageUtil'
import Carousel from './carousel'

const carouselImages = [
  {"uri" : "/img/b4f/mutual-aid-housing.jpg", 
    "en" : {"caption" : "Mutual Aid Housing", "alt" : "Mutual Aid Housing" },
    "fr" : {"caption" : "Habitat solidaire", "alt" : "Habitat solidaire" }
  },
  {"uri" : "/img/b4f/ambient-ecosystems-commons.jpg", 
    "en" : {"caption" : "Ambient Ecosystems Commons", "alt" : "Ambient Ecosystems Commons" },
    "fr" : {"caption" : "Écosystèmes ambiants communs", "alt" : "Écosystèmes ambiants communs" }
  },
  {"uri" : "/img/b4f/land-back.jpg", 
    "en" : {"caption" : "Land Back", "alt" : "Land Back" },
    "fr" : {"caption" : "La restitution des terres ancestrales", "alt" : "La restitution des terres ancestrales" }
  },
  {"uri" : "/img/b4f/land-housing.jpg", 
    "en" : {"caption" : "On the Land Housing", "alt" : "On the Land Housing" },
    "fr" : {"caption" : "Des logements sur le territoire", "alt" : "Des logements sur le territoire" }
  },
  {"uri" : "/img/b4f/home-building-lodges.jpg", 
    "en" : {"caption" : "First Nations Home Building Lodges", "alt" : "First Nations Home Building Lodges" },
    "fr" : {"caption" : "Pavillons pour la construction d’habitations au sein des Premières Nations", "alt" : "Pavillons pour la construction d’habitations au sein des Premières Nations" }
  },
  {"uri" : "/img/b4f/reparative-architecture.jpg", 
    "en" : {"caption" : "Reparative Architecture", "alt" : "Reparative Architecture" },
    "fr" : {"caption" : "Une architecture réparatrice", "alt" : "Une architecture réparatrice" }
  },
  {"uri" : "/img/b4f/gentrification-tax.jpg", 
    "en" : {"caption" : "A Gentrification Tax", "alt" : "A Gentrification Tax" },
    "fr" : {"caption" : "Une taxe sur l’embourgeoisement", "alt" : "Une taxe sur l’embourgeoisement" }
  },
  {"uri" : "/img/b4f/surplus-properties-housing.jpg", 
    "en" : {"caption" : "Surplus Properties for Housing", "alt" : "Surplus Properties for Housing" },
    "fr" : {"caption" : "Des propriétés excédentaires pour le logement", "alt" : "Des propriétés excédentaires pour le logement" }
  },
  {"uri" : "/img/b4f/intentional-communities-unhoused-people.jpg", 
    "en" : {"caption" : "Intentional Communities for Unhoused People", "alt" : "Intentional Communities for Unhoused People" },
    "fr" : {"caption" : "Des communautés intentionnelles pour les personnes sans logement", "alt" : "Des communautés intentionnelles pour les personnes sans logement" }
  },
  {"uri" : "/img/b4f/collective-ownership.jpg", 
    "en" : {"caption" : "Collective Ownership", "alt" : "Collective Ownership" },
    "fr" : {"caption" : "La propriété collective", "alt" : "La propriété collective" },
  }
  
]

function Exhibition({ lang }) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='three columns'><br /></div>
        <div className='six columns'>
          <br />
          <h3>{enFr(lang, 'Not for Sale! Heartquarters', 'Pas à vendre / Quartier général')}</h3>
        </div>
        <Pavilion lang={lang} className='img' />
        <div className='three columns'><br /></div>
        <div className='six columns'>
          
          <p className='caption text-center'>Pavilion layout for Not For Sale exhibition in Venice, Italy.</p>


          <Carousel 
            lang={lang}
            carouselImages={carouselImages}
          />
          <Logos lang={lang} />
          <h4>
            {enFr(lang, 'Gracious Support and Collaboration of', 'Le soutien gracieux et la collaboration de : ')}
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

export default Exhibition