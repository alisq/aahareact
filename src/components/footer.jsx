import { useState } from 'react'
import demands from '../demands.json'
import pageData from '../pages.json'
import MenuLink from './menuLink'


function Footer({ lang, tempRef }) {

    return (

        <section id="contact" className="inverse" ref={tempRef}>
            <div className="container">
                <div className="row">
                    <div className="six columns">
                    
                {lang === 'en' ? (
                    <><h3>DEMANDS:</h3>
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
    <><h3>DEMANDES :</h3>
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

                    <div className="three columns">
                        
                    {lang === 'en' ? (
                    <><h3></h3>
                    <ul className="">
                    <li><a href="/en/">DEMANDS</a></li>
                    <li><a href="/en/page/aaha-manifesto">AAHA MANIFESTO</a></li>
                    <li><a href="/en/page/collective">COLLECTIVE</a></li>
                    <li><a href="/en/page/collective">CONTACT</a></li>
   </ul>
   </>
) : (
    <><h3>.</h3>
    <ul className="">
    <li><a href="/fr/">DEMANDES</a></li>
                    <li><a href="/fr/aaha-manifesto">AAHA MANIFESTE</a></li>
                    <li><a href="/fr/collective">COLLECTIF</a></li>
                    <li><a href="/fr/collective">CONTACTE</a></li>
   </ul>
   </>
) }         
                 
                    </div>
                    <div className="three columns">
                        <div className="socials">
                            <a href="https://www.tiktok.com/@aaha.ca" target="_blank"><i className="fa-brands fa-tiktok"></i></a>&nbsp;&nbsp;
                            <a href="https://www.instagram.com/aaha.ca" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            
                        </div>
                        <a href="mailto:info@aaha.ca">info@aaha.ca</a>



                    </div>
                </div>
             


            </div>
        </section>

    )
}

export default Footer