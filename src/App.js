import './App.css'

function App() {



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
          <h2 data-demand="land-back"><span className="num">¹</span>Land Back!</h2>
          <h2 data-demand="collective-ownership"><span className="num">²</span>Collective<br />
            Ownership!</h2>
          <h2 data-demand="on-the-land-housing"><span className="num">³</span>On the Land Housing<span
            className="exAlt2"></span></h2>
          <h2 data-demand="home-building-lodges"><span className="num">⁴</span>Home <br />
            Building Lodges<span className="exAlt2"></span> </h2>
          <h2 data-demand="reparative-planning"><span className="num">⁵</span>Reparative Planning<span
            className="exAlt1"></span> </h2><br />

          <h2 data-demand="intentional-communities-for-unhoused"><span className="num">⁶</span>Intentional Communities
            for Unhoused <br />
            People! </h2>
          <h2 data-demand="the-unearned-increment"><span className="num">⁷</span>The Unearned Increment<span
            className="exAlt2"></span> </h2>
          <h2 data-demand="mutual-aid-housing"><span className="num">⁸</span>Mutual <br />
            Aid Housing! </h2>
          <h2 data-demand="ambient-ecosystems"><span className="num">⁹</span>Ambient Ecosystems <br />
            Commons!</h2>
          <h2 data-demand="surplus-properties-for-housing"><span className="num">¹⁰ </span>Surplus Properties for
            Housing<span className="exAlt3"></span></h2>
        </div>
      </section>
    </>
  )
}

export default App
