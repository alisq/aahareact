
import { useEffect, useRef, useState } from 'react'
import Flickity from 'react-flickity-component'
import parse from 'html-react-parser'

const flickityOptions = {
  initialIndex: 0,
  draggable: true,
  wrapAround: true,
  pageDots: false
  // prevNextButtons: false
}

function CarouselDemand({ lang, carouselImages }) {
  const [zoomedImgIndex, setZoomImgIndex] = useState(null)

  const imgRefs = useRef([])

  useEffect(() => {
    document.body.style.overflowY = zoomedImgIndex ? 'hidden' : 'initial'
  }, [zoomedImgIndex])

  const getImages = (image, i) => {
    const Img = <img src={"http://server-aaha.codepanel.in/" + image.uri} key={i} alt={image[lang].alt} />
    const Caption = <div className="caption">{parse(image[lang].caption)}</div>

    imgRefs.current.push(<>{Img}{Caption}</>)
    return (
      <div className="slide" key={i} >
        <div className="demand-slide">
          {Img}
        </div>
        {image[lang].caption !== "" &&
          <div className="caption text-center">{image[lang].caption.replace(/(<([^>]+)>)/gi, "")}</div>}
      </div>
    )
  }
  
  const renderImages = carouselImages => {
    imgRefs.current = []
    return carouselImages.map(getImages)
  }



  return (
    <>
      {typeof zoomedImgIndex === 'number' &&
        <div className='slide-fullscreen' onClick={() => setZoomImgIndex(null)} >
          <div className="close" onClick={() => setZoomImgIndex(null)}>&times;</div>

          {imgRefs.current[zoomedImgIndex]}
        </div>}
      <Flickity
        flickityRef={ref => ref.on('staticClick', (_, __, ___, i) => setZoomImgIndex(i))}
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate={false} // default false
        static={false} // default false
      >
        {renderImages(carouselImages)}

      </Flickity>
    </>
  )
}

export default CarouselDemand