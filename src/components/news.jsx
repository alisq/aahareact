import pressData from '../news-press.json'
import PressItem from './pressItem'

function News({lang}) {

    const getPressItems = (item, i) =>
    <PressItem
      item={item}
      lang={lang}
      key={i} />

    return(
        <table>
          <tbody>
          {pressData.map(getPressItems)}
          </tbody>
        </table>
    )
}


export default News