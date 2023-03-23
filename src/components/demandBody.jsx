import { useEffect } from 'react'
import { Action } from './action'

function DemandBody({ lang, demand_id, sectionRef }) {

  document.title = "AAHA | " + lang.title

  useEffect(() => {
    if (sectionRef && sectionRef.current)
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [sectionRef, lang])

  return (
    <section id={demand_id} className='demand' ref={sectionRef}>
      <div className='container'>
        <div className='row'>
          <div className='three columns sticky'>
            <h5>To decomodify housing in c/a/n/a/d/a we demand</h5>
            <h2>{lang.title}</h2>

            <p>
              {lang.field_long_summary}
            </p>
            <label>region:</label> {lang.field_region}
            <br />
            <label>Activist:</label> Gentrification Tax Action
            <br />
            <label>Advocate:</label>
            Parkdale Neighborhood Land Trust
            <br />
            <label>Architect:</label>
            Levitt Goodman Associates

          </div>
          <div className='six columns'>

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
              <li>
                <label className='label--red'>donate</label><br />
                Learn more about the campaign to for a gentrification tax
                in Toronto by visiting <label>this page.</label>
                <br />
                <label>PAY THE VOLUNTARY TAX</label>
              </li>
              <li>
                <label className='label--red'>donate</label><br />
                Learn more about the campaign to for a gentrification tax
                in Toronto by visiting <label>this page.</label>
                <br />
                <label>PAY THE VOLUNTARY TAX</label>
              </li>
              <li>
                <label className='label--red'>donate</label><br />
                Learn more about the campaign to for a gentrification tax
                in Toronto by visiting <label>this page.</label>
                <br />
                <label>PAY THE VOLUNTARY TAX</label>
              </li>
              <li>
                <label className='label--red'>donate</label><br />
                Learn more about the campaign to for a gentrification tax
                in Toronto by visiting <label>this page.</label>
                <br />
                <label>PAY THE VOLUNTARY TAX</label>
              </li>

              <li>
                <label className='label--red'>Sign</label><br />
                Advocate for taxing the unearned incremenet at city hall by signing the petition below:
                <br />
                <label>Sign here</label>
              </li>

              <li>
                <label className='label--red'>participate</label><br />
                Attend one of the forthcoming Parkdale Community Information Sessions hosted by PNLT
                <label>RSVP FOR AN INFORMATION SESSION</label>
              </li>
            </ul>



          </div>
        </div>
      </div>
    </section >
  )
}

export default DemandBody