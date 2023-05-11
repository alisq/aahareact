import Pavilion from './pavilion'
import Logos from './logos'
import { enFr } from '../utils/languageUtil'
import Carousel from './carousel'

const carouselImages = [
  "https://placeimg.com/640/480/animals",
  "https://placeimg.com/640/480/nature",
  "https://placeimg.com/640/480/architecture"
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