
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}

function Carousel({lang}) {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <img src="https://placeimg.com/640/480/animals"/>
      <img src="https://placeimg.com/640/480/nature"/>
      <img src="https://placeimg.com/640/480/architecture"/>
    </Flickity>
  )
}

export default Carousel