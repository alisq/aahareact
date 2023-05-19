import { forwardRef } from 'react'
import { enFr } from '../utils/languageUtil'
import parse from 'html-react-parser'
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
        <section id='contact' className='inverse' ref={ref}>
            <div className='container'>
                <div className='row'>
                    <div className='four columns'>
                        {enFr(lang, (<>
                            <h3>Not for Sale!</h3>
                            <p>We are Architects Against Housing Alienation and we believe the current housing system in c\a\n\a\d\a must be abolished!
                            </p>
                        </>), (<>
                            <h3>Pas à vendre!</h3>
                            <p>Nous sommes Architects Against Housing Alienation (AAHA) et nous croyons que le système du logement actuel au c\a\n\a\d\a doit être aboli!</p>
                        </>))}

                    </div>

                    <div className='four columns text-center'>

                        <h3><a href='mailto:info@aaha.ca'>info@aaha.ca</a></h3>
                        <br />
                        <div className='socials'>
                            <a href='https://www.tiktok.com/@aaha.ca' target='_blank'><i className='fa-brands fa-tiktok'></i></a>&nbsp;&nbsp;
                            <a href='https://www.instagram.com/aaha.ca' target='_blank'><i className='fa-brands fa-instagram'></i></a>

                        </div>
                        

                        <h3>
                        {enFr(lang, parse('<a className="aaha-text" href="https://www.dropbox.com/sh/v45fyvebyivi7g8/AABwz65YK1-10i8TTwmcSdL2a?dl=0" target="_blank">Download Press Kit</a>'),
                                    parse('<a className="aaha-text" href="https://www.dropbox.com/sh/v45fyvebyivi7g8/AABwz65YK1-10i8TTwmcSdL2a?dl=0" target="_blank">Télécharger le dossier de presse.</a>')
                        )}
                        </h3>
                        <br /><br />
                    </div>
                    <div className='four columns text-right'>

                        <span className='aaha-text'>
                            {enFr(lang, (<>
                                <a href='/en/'>DEMANDS</a><br />
                                <a href='/en/page/aaha-manifesto'>MANIFESTO</a><br />
                                <a href='/en/page/collective'>COLLECTIVE</a><br />
                                <a href='/en/page/exhibition'>EXHIBITION</a>
                                <br /><br />
                                2023, Architects Against Housing Alienation
                            </>), (<>
                                <a href='/fr/'>DEMANDES</a><br />
                                <a href='/fr/page/aaha-manifesto'>MANIFESTE</a><br />
                                <a href='/fr/page/collective'>COLLECTIF</a><br />
                                <a href='/fr/page/exhibition'>EXHIBITION</a>
                                <br /><br />
                                2023, Architects Against Housing Alienation
                            </>))}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Footer