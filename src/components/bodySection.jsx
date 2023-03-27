import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { getUrlParts } from '../utils/urlUtil'

function BodySection(props) {
  const { Component } = props
  const location = useLocation()
  const pageRef = useRef(null)
  const urlPartsRef = useRef(getUrlParts(location))

  useEffect(() => {
    const urlParts = getUrlParts(location)
    if (urlParts.content !== urlPartsRef.current.content)
      pageRef.current.scrollIntoView({ behavior: 'smooth' })
    urlPartsRef.current = urlParts
  }, [location])


  return <Component {...props} ref={pageRef} />

}

export default BodySection