function PageBody({ title, getBodyRef, view_node, body }) {

  return (
    <section id={view_node} className='page' ref={getBodyRef}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            
            <h2>{title}</h2>



          </div>
          <div className='six columns'>            
            <div dangerouslySetInnerHTML={ { __html: body } }></div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>
           
          </div>
        </div>
      </div>
    </section >
  )
}

export default PageBody