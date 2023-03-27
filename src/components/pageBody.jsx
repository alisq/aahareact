import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

function PageBody({ view_node, body, title }) {
  const location = useLocation()
  const pageRef = useRef(null)

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <section id={view_node} className='page' ref={pageRef}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>

            <h2>{title}</h2>

          </div>
          <div className='six columns'>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>

          </div>
        </div>
      </div>
    </section >
  )
}

export default PageBody