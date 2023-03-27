import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import pageData from '../pages.json'

function PageBody({}) {
  const params = useParams()
  const data = pageData.find(page => page.view_node === params.view_node)


  const navigate = useNavigate()
  useEffect(() => {
    if (!data) navigate('/')
  }, [])

  return data && (
    <section id={data.view_node} className='page'>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>

            <h2>{data.title}</h2>

          </div>
          <div className='six columns'>
            <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>

          </div>
        </div>
      </div>
    </section >
  )
}

export default PageBody