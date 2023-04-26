// import { useState } from 'react'
// import demands from '../demands.json'
// import pageData from '../pages.json'
// import MenuLink from './menuLink'

import { ReactComponent as LogoCCA } from '../svg/LogoCCA.svg'
import { ReactComponent as LogoBiennale } from '../svg/LogoBiennale.svg'
import { ReactComponent as LogoSALA } from '../svg/LogoSALA.svg'
import { ReactComponent as LogoUW } from '../svg/LogoUW.svg'
import { ReactComponent as LogoRAIC } from '../svg/LogoRAIC.svg'
import { ReactComponent as LogoOAA } from '../svg/LogoOAA.svg'
import { ReactComponent as LogoAFBC } from '../svg/LogoAFBC.svg'
import { ReactComponent as LogoFed } from '../svg/LogoFed.svg'


function Footer({ lang, tempRef }) {

    return (

        <section id="contact" className="inverse" ref={tempRef}>
            <div className="container">
                <div className="row">
                    <div className="five columns">
                    
                {lang === 'en' ? (
                    <>
                    <h5>Not for Sale!</h5>
                    <p>Housing in c\a\n\a\d\a is characterized by unaffordability, disrepair, under-housing, precarity, and homelessness. This is housing alienation—the condition of being separated from our fundamental connections to home. It separates us from the land we inhabit, the social world that supports us, and our full creative lives. We are Architects Against Housing Alienation and we believe the current housing system in c\a\n\a\d\a must be abolished!</p>
                    
                    
                    <ul className="">
<li><a href='/en/demand/land-back'>Land Back</a></li>
<li><a href='/en/demand/land-housing'>On the Land Housing</a></li>
<li><a href='/en/demand/home-building-lodges'>First Nations Home Building Lodges</a></li>
<li><a href='/en/demand/reparative-architecture'>Reparative Architecture</a></li>
<li><a href='/en/demand/gentrification-tax'>A Gentrification Tax</a></li>
<li><a href='/en/demand/surplus-properties-housing'>Surplus Properties for Housing</a></li>
<li><a href='/en/demand/intentional-communities-unhoused-people'>Intentional Communities for Unhoused People</a></li>
<li><a href='/en/demand/collective-ownership'>Collective Ownership</a></li>
<li><a href='/en/demand/mutual-aid-housing'>Mutual Aid Housing</a></li>
<li><a href='/en/demand/ambient-ecosystems-commons'>Ambient Ecosystems Commons</a></li>
   </ul>
   </>
) : (
    <><h5>Pas à vendre</h5>
    <p>Le logement au c\a\n\a\d\a se caractérise par l’insuffisance d’habitations abordables, le délabrement, le manque de logements de taille appropriée, la précarité et le sans-abrisme. C’est ce qu’on appelle l’aliénation du logement, c’est-à-dire la rupture des attaches fondamentales à un chez-soi. Ce phénomène nous sépare du territoire que nous habitons, du réseau social qui nous soutient et de l’intégrité de nos vies créatives. Nous sommes Architects Against Housing Alienation (AAHA) et nous croyons que le système du logement actuel au c\a\n\a\d\a doit être aboli!</p>
    <ul className="">
<li><a href='/fr/demand/land-back'>La restitution des terres ancestrales</a></li>
<li><a href='/fr/demand/land-housing'>Des logements sur le territoire</a></li>
<li><a href='/fr/demand/home-building-lodges'>Pavillons pour la construction d’habitations au sein des Premières Nations</a></li>
<li><a href='/fr/demand/reparative-architecture'>Une architecture réparatrice</a></li>
<li><a href='/fr/demand/gentrification-tax'>Une taxe sur l’embourgeoisement</a></li>
<li><a href='/fr/demand/surplus-properties-housing'>Des propriétés excédentaires pour le logement </a></li>
<li><a href='/fr/demand/intentional-communities-unhoused-people'>Des communautés intentionnelles pour les personnes sans logement</a></li>
<li><a href='/fr/demand/collective-ownership'>La propriété collective</a></li>
<li><a href='/fr/demand/mutual-aid-housing'>Habitat solidaire</a></li>
<li><a href='/fr/demand/ambient-ecosystems-commons'>Écosystèmes ambiants communs</a></li> 
   </ul>
   </>
) }                        

                   
                    </div>

                    <div className="four columns">


                    <div className="socials">
                            <a href="https://www.tiktok.com/@aaha.ca" target="_blank"><i className="fa-brands fa-tiktok"></i></a>&nbsp;&nbsp;
                            <a href="https://www.instagram.com/aaha.ca" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            
                        </div>
                        <a href="mailto:info@aaha.ca">info@aaha.ca</a> | <a href="mailto:press@aaha.ca">press@aaha.ca</a><br />
                        <br />


                        
                    {lang === 'en' ? (
                    <><h3></h3>
                    <ul className="">
                    <a href="/en/">DEMANDS</a> | <a href="/en/page/aaha-manifesto">AAHA MANIFESTO</a> | <a href="/en/page/collective">COLLECTIVE</a> | <a href="/en/page/collective">CONTACT</a>
   </ul>
   </>
) : (
    <>
    
    <a href="/fr/">DEMANDES</a> | <a href="/fr/aaha-manifesto">AAHA MANIFESTE</a> | <a href="/fr/collective">COLLECTIF</a> | <a href="/fr/collective">CONTACTE</a>
   </>
) }         
                 
                    </div>
                    <div className="three columns">
                    <a href="https://www.labiennale.org/en/architecture/2023" target="_blank">
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


                    </div>
                </div>
             


            </div>
        </section>

    )
}

export default Footer