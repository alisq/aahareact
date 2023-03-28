
import { forwardRef } from 'react'
import Action from './action'

const DemandBody = forwardRef(({ lang, demand_id, banner }, ref) => {
  document.title = "AAHA | " + lang.title

  console.log(lang)
  
  return (
    <section id={demand_id} className='demand' ref={ref}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            
            <h2>{lang.title}</h2>

            <p>
              {lang.field_long_summary}
            </p>


            <label>{ lang.lang === "en" ? "REGION" : "Région"}:</label> {lang.field_region}
            <br /><br />
            <label>{ lang.lang === "en" ? "Activist" : "Activiste"}:</label> {lang.activist}
            <br /><br />
            <label>{ lang.lang === "en" ? "Advocate" : "Intervenant"}:</label> {lang.advocate}
            Parkdale Neighborhood Land Trust
            <br /><br />
            <label>{ lang.lang === "en" ? "Architect" : "Architecte"}:</label> {lang.architect}
            Levitt Goodman Associates

          </div>
          <div className='six columns'>

            <img src={'/img/banners/' + banner} />

            <div dangerouslySetInnerHTML={{ __html: lang.field_content }}></div>

            {/* <div className='main-carousel'>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_3cc.jpg?itok=BppEniI5' />
                <p className='caption'>example caption</p>
              </div>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_2cc.jpg?itok=pPtOD-xP' />
                <p className='caption'>example caption</p>
              </div>
              <div className='carousel-cell'>
                <img src='https://server-aaha.codepanel.in/web/sites/default/files/2022-12/AAHA_unit_1cc.jpg?itok=8t0Is5R_' />
                <p className='caption'>example caption</p>
              </div>
            </div> */}
          </div>
          <div className='action-bar three columns sticky-bottom white-bg'>
            <h3>TAKE ACTION</h3>


            <ul className='actions'>


              <Action />
                          </ul>



          </div>
        </div>
      </div>
    </section >
  )
})

export default DemandBody