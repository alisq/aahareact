import { forwardRef } from 'react'
import parse from 'html-react-parser'
import Collective from './collective'
import Exhibition from './exhibition'


const PageBody = forwardRef(({ page_id, body, title, lang }, ref) => {

  return (
    <section id={page_id} className='page' ref={ref}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            <h2>{title}</h2>
          </div>
          <div className='six columns'>
            <div>
              {parse(body)}
            </div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>
          </div>
        </div>
      </div>
      {page_id === 'exhibition' && <Exhibition lang={lang} />}
      {page_id === 'collective' && <Collective lang={lang} />}
    </section >
  )
})

export default PageBody