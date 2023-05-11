
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2,
    draggable: false,
    wrapAround:true,
    pageDots:false
    // prevNextButtons: false
}

function Carousel({lang, carouselImages}) {

    console.log(carouselImages)

    const getImages = (image, i) => 
    
    <div className="slide" key={i}>
        <img src={image.uri} key={i} alt={image.en.alt} />
        <p className="caption text-center">{image.en.caption}</p>
    </div>

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