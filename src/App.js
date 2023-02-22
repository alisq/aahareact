import './App.css'
import DemandHeader from './components/demandHeader'

function App() {
  const headerData = [
    {
      name: 'land-back',
      num: '¹',
      domText: 'Land Back!'
    },
    {
      name: 'collective-ownership',
      num: '²',
      domText: <>Collective<br />Ownership!</>
    },
    {
      name: 'on-the-land-housing',
      num: '³',
      domText: 'On the Land Housing',
      exMark: 'exAlt2'
    },
    {
      name: 'home-building-lodges',
      num: '⁴',
      domText: <>Home <br /> Building Lodges</>,
      exMark: 'exAlt2'
    },
    {
      name: 'reparative-planning',
      num: '⁵',
      domText: 'Reparative Planning',
      exMark: 'exAlt1'
    },
    {
      name: 'intentional-communities-for-unhoused',
      num: '⁶',
      domText: <>Intentional Communities for Unhoused <br />People! </>
    },
    {
      name: 'the-unearned-increment',
      num: '⁷',
      domText: 'The Unearned Increment',
      exMark: 'exAlt2'
    },
    {
      name: 'mutual-aid-housing',
      num: '⁸',
      domText: <>Mutual <br />Aid Housing! </>
    },
    {
      name: 'ambient-ecosystems',
      num: '⁹',
      domText: <>Ambient Ecosystems <br />Commons!</>
    },
    {
      name: 'surplus-properties-for-housing',
      num: '¹⁰',
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
          {headerData.map((header, i) => <DemandHeader {...header} key={i} />)}
        </div>
      </section>
    </>
  )
}

export default App
