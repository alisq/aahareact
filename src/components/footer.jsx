import { useState } from 'react'
import Member from './member'
import Action from './action'
import contributorData from '../contributors.json'
import orgData from '../orgs.json'
import pageData from '../pages.json'
import MenuLink from './menuLink'


function Footer({lang}) {
    
    return (

        <section id="contact" className="inverse">
            <div className="container">
                <div className="row">
                    <div className="six columns">
                        A short description of the organization and its founding goes here. With a link to the about page.<br />
                        Below that, here will be the logos from all the of the funding bodies.
                    </div>

                    <div className="three columns">
                        A site map goes here. In essence, the menu:

                        <ul className="label">

                            {pageData.map((page, i) =>
                                <MenuLink 
                                    page={page}
                                    lang={lang}
                                    // navigate={navigate}
                                    // getBodyRef={() => pageRefs.current[i]}
                                    // handleClick={createHandleClick(i, page.view_node)}
                                    key={i} />
                            )}

                        </ul>
                    </div>
                    <div className="three columns">
                        <div className="socials">
                            <i className="fa-brands fa-tiktok"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                        </div>
                        followed by contact details and credits?
                        

                       
                    </div>
                </div>
{/* 
                {orgData.map((member, i) => 
                            <Member member={member} lang={lang} key={i}/>
                        )}
                
                {contributorData.map((member, i) => 
                            <Member member={member} lang={lang} key={i}/>
                        )} */}


            </div>
        </section>

    )
}

export default Footer