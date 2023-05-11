import Pavilion from './pavilion'
import Logos from './logos'
import { enFr } from '../utils/languageUtil'
import Carousel from './carousel'

const carouselImages = [
  "/img/b4f/land-back.jpg",
  "/img/b4f/land-housing.jpg",
  "/img/b4f/home-building-lodges.jpg",
  "/img/b4f/reparative-architecture.jpg",
  "/img/b4f/gentrification-tax.jpg",
  "/img/b4f/surplus-properties-housing.jpg",
  "/img/b4f/intentional-communities-unhoused-people.jpg",
  "/img/b4f/collective-ownership.jpg",
  "/img/b4f/mutual-aid-housing.jpg",
  "/img/b4f/ambient-ecosystems-commons.jpg",
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
          <Carousel 
            lang={lang}
            carouselImages={carouselImages}
          />
          <p className='caption text-center'>Pavilion layout for Not For Sale exhibition in Venice, Italy.</p>

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