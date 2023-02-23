import './App.css'
import DemandHeader from './components/demandHeader'

function App() {
  const superscripts = ['¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹', '¹⁰']

  const headerData = [
    {
      name: 'land-back',
      domText: 'Land Back!'
    },
    {
      name: 'collective-ownership',
      domText: <>Collective<br />Ownership!</>
    },
    {
      name: 'on-the-land-housing',
      domText: 'On the Land Housing',
      exMark: 'exAlt2'
    },
    {
      name: 'home-building-lodges',
      domText: <>Home <br /> Building Lodges</>,
      exMark: 'exAlt2'
    },
    {
      name: 'reparative-planning',
      domText: 'Reparative Planning',
      exMark: 'exAlt1'
    },
    {
      name: 'intentional-communities-for-unhoused',
      domText: <>Intentional Communities for Unhoused <br />People! </>
    },
    {
      name: 'the-unearned-increment',
      domText: 'The Unearned Increment',
      exMark: 'exAlt2'
    },
    {
      name: 'mutual-aid-housing',
      domText: <>Mutual <br />Aid Housing! </>
    },
    {
      name: 'ambient-ecosystems',
      domText: <>Ambient Ecosystems <br />Commons!</>
    },
    {
      name: 'surplus-properties-for-housing',
      domText: 'Surplus Properties for Housing',
      exMark: 'exAlt3'
    }
  ]

  return (
    <>
      <h1>
        <div className="title-top">ARCHITECTS AGAINST HOUSING ALIENATION!</div>
        <div className="title-bottom">ARCHITECTES CONTRE L'ALIENATION AU LOGEMENT!</div>
      </h1>

      <section id="demands">
        <div className="manifesto">

          TO DECOMMODIFY HOUSING IN
          C<span className='red'>\</span>A<span className='red'>\</span>N<span className='red'>\</span>A<span
            className='red'>\</span>D<span className='red'>\</span>A<br />
          WE DEMAND...
          {headerData.map((header, i) => <DemandHeader {...header} num={superscripts[i - 1]} key={i} />)}
        </div>
      </section>
    </>
  )
}

export default App
