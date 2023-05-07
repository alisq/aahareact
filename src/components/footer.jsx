// import { useState } from 'react'
// import demands from '../demands.json'
// import pageData from '../pages.json'
// import MenuLink from './menuLink'

import { forwardRef } from 'react'
// import { ReactComponent as LogoCCA } from '../svg/LogoCCA.svg'
// import { ReactComponent as LogoBiennale } from '../svg/LogoBiennale.svg'
// import { ReactComponent as LogoSALA } from '../svg/LogoSALA.svg'
// import { ReactComponent as LogoUW } from '../svg/LogoUW.svg'
// import { ReactComponent as LogoRAIC } from '../svg/LogoRAIC.svg'
// import { ReactComponent as LogoOAA } from '../svg/LogoOAA.svg'
// import { ReactComponent as LogoAFBC } from '../svg/LogoAFBC.svg'
// import { ReactComponent as LogoFed } from '../svg/LogoFed.svg'



const Footer = forwardRef(({ lang }, ref) => {

    return (
        <section id="contact" className="inverse" ref={ref}>
            <div className="container">
                <div className="row">
                    <div className="four columns">

                        {lang === 'en' ? (
                            <>
                                <h3>Not for Sale!</h3>
                                <p>We are Architects Against Housing Alienation and we believe the current housing system in c\a\n\a\d\a must be abolished!
                                    </p>


                            </>
                        ) : (
                            <><h3>Pas à vendre!</h3>
                                <p>Nous sommes Architects Against Housing Alienation (AAHA) et nous croyons que le système du logement actuel au c\a\n\a\d\a doit être aboli!</p>
                               
                            </>
                        )}


                    </div>

                    <div className="four columns">

                    <h3><a href="mailto:info@aaha.ca">info@aaha.ca</a></h3>
                    <br />
                        <div className="socials">
                            <a href="https://www.tiktok.com/@aaha.ca" target="_blank"><i className="fa-brands fa-tiktok"></i></a>&nbsp;&nbsp;
                            <a href="https://www.instagram.com/aaha.ca" target="_blank"><i className="fa-brands fa-instagram"></i></a>

                        </div>
                        <br /><br />

                        
                        

                        {/* Download the press kit here. */}



                    </div>
                    <div className="four columns">

                        
                    {lang === 'en' ? (
                    <ul className="footerList">
                    
                    <a href="/en/">DEMANDS</a><br />
                    <a href="/en/page/aaha-manifesto">MANIFESTO</a><br />
                    <a href="/en/page/collective">COLLECTIVE</a><br />
                    <a href="/en/page/exhibition">EXHIBITION</a>
                    <br /><br />
                        2023, Architects Against Housing Alienation
   </ul>
   
) : (
    <span className="aaha-text">
    
    <a href="/fr/">DEMANDES</a><br />
    <a href="/fr/page/aaha-manifesto">MANIFESTE</a><br />
    <a href="/fr/page/collective">COLLECTIF</a><br />
    <a href="/fr/page/exhibition">EXHIBITION</a>
    <br /><br />
                        2023, Architects Against Housing Alienation
   </span>
) }         
                    {/* <a href="https://www.labiennale.org/en/architecture/2023" target="_blank">
                        <LogoBiennale className="footerLogo" id="logoBiennale" />
                    </a>
                        <a href="https://canadacouncil.ca/" target="_blank">
                            <LogoCCA className="footerLogo" id="logoCCA"/>
                        </a>

                        <a href="https://sala.ubc.ca/" target="_blank">
                            <LogoSALA className="footerLogo" id="logoSALA"/>
                        </a>
                        <a href="https://uwaterloo.ca/architecture/" target="_blank">
                            <LogoUW className="footerLogo" id="logoUW"/>
                        </a>
                        <a href="https://raic.org/" target="_blank">
                            <LogoRAIC className="footerLogo" id="logoRAIC"/>
                        </a>

                        <div className="thirds">
                            <div>
                                <a href="https://www.oaa.on.ca/" target="_blank">
                                    <LogoOAA className="footerLogo" id="logoOAA"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://www.architecturefoundationbc.ca/" target="_blank">
                                    <LogoAFBC className="footerLogo" id="logoAFBC"/>
                                </a>
                            </div>
                            <div>
                                <a href="https://canadacouncil.ca/" target="_blank">
                                    <LogoFed className="footerLogo" id="logoFed"/>
                                </a>
                            </div>
                        </div>
 */}

                    </div>
                </div>



            </div>
        </section>

    )
})

export default Footer