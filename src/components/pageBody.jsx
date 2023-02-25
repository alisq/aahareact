import { useRef, useEffect } from 'react'
import useOnScreen from '../hooks/useOnScreen'

function PageBody({ title, view_node, body, onPageRefLoad }) {

  const sectionRef = useRef(null)
  useEffect(() => {
    if (sectionRef.current) onPageRefLoad(sectionRef)
  }, [sectionRef])

  const isVisible = useOnScreen(sectionRef)

  useEffect(() => {

  }, [sectionRef, isVisible])

  return (
    <section id={view_node} className='page' ref={sectionRef}>
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