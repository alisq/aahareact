
import { useEffect, useRef, useState } from 'react'
import Flickity from 'react-flickity-component'

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
    imgRefs.current.push(Img)
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

  return (
    <>
      {typeof zoomedImgIndex === 'number' &&
        <div className='slide-fullscreen' onClick={() => setZoomImgIndex(null)}>
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
        {carouselImages.map(getImages)}

      </Flickity>
    </>
  )
}

export default CarouselDemand