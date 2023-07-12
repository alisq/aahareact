
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 0,
    draggable: true,
    wrapAround:true,
    pageDots:false
    // prevNextButtons: false
}

function CarouselDemand({lang, carouselImages}) {



    const getImages = (image, i) => 
    
    <div className="slide" key={i}>
      <div className="demand-slide">
        <img src={"http://server-aaha.codepanel.in/"+image.uri} key={i} alt={image[lang].alt} />
      </div>
        {image[lang].caption !== "" && <div className="caption text-center">{image[lang].caption.replace(/(<([^>]+)>)/gi, "")}</div>}
    </div>

  return (
    <div>
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static={false}
    >
   {carouselImages.map(getImages)}
    </Flickity>
    </div>
  )
}

export default CarouselDemand