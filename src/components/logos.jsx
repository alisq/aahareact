import { ReactComponent as LogoCCA } from '../svg/LogoCCA.svg'
import { ReactComponent as LogoSALA } from '../svg/LogoSALA.svg'
import { ReactComponent as LogoUW } from '../svg/LogoUW.svg'
import { ReactComponent as LogoRAIC } from '../svg/LogoRAIC.svg'
import { ReactComponent as LogoOAA } from '../svg/LogoOAA.svg'
import { ReactComponent as LogoAFBC } from '../svg/LogoAFBC.svg'
import { ReactComponent as LogoFed } from '../svg/LogoFed.svg'
import { enFr } from '../utils/languageUtil'

function Logos({ lang }) {

    return (
        <>
        <h3 className='text-center'>{enFr(lang,'Sponsors','Sponsors')}</h3>
        <div className='partners'>
            <h4>{enFr(lang, 'Commissioner ', 'Organisateur')} </h4>
            <a href='https://canadacouncil.ca/' target='_blank'>
                <LogoCCA className='footerLogo' id='logoCCA' />
            </a>

            <h4>{enFr(lang, 'Primary Presenting Sponsor', 'Commanditaire présentateur principal')} </h4>
            <a href='https://sala.ubc.ca/' target='_blank'>
                <LogoSALA className='footerLogo' id='logoSALA' />
            </a>
            <br /><br />
            <h4>{enFr(lang, 'Co-Presenting Sponsor ', 'Commanditaire co-présentateur')} </h4>
            <a href='https://uwaterloo.ca/architecture/' target='_blank'>
                <LogoUW className='footerLogo' id='logoUW' />
            </a>

            <br /><br />
            <h4>{enFr(lang, 'Sponsors', 'Commanditaires')} </h4>

            <a href='https://raic.org/' target='_blank'>
                <LogoRAIC className='footerLogo' id='logoRAIC' />
            </a>
            <div className='thirds'>

                <div>
                    <a href='https://www.oaa.on.ca/' target='_blank'>
                        <LogoOAA className='footerLogo' id='logoOAA' />
                    </a>
                </div>
                <div>
                    <a href='https://www.architecturefoundationbc.ca/' target='_blank'>
                        <LogoAFBC className='footerLogo' id='logoAFBC' />
                    </a>
                </div>
                <div>
                    <a href='https://canadacouncil.ca/' target='_blank'>
                        <LogoFed className='footerLogo' id='logoFed' />
                    </a>
                </div>
            </div>



        </div>
        </>
    )
}

export default Logos