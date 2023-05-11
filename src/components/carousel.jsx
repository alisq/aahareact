
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}

function Carousel({lang, carouselImages}) {

    console.log({carouselImages})

    const getImages = (image, i) =>
    <img src={image} key={i} />

  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
   {carouselImages.map(getImages)}
   {/* getImages */}
    </Flickity>
  )
}

export default Carousel