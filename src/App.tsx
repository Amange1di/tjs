
import Header from './Header'


// type TypeTabs = {
//   name: string
// }


export interface ITabs{
  name: string
}


const tabs: ITabs[] = [
  {
    name: "Pizza",

  },
  {
    name: "Drinks",

  },
  {
    name: "Deserts",

  },

]


console.log(tabs);
// any, unknown, void,
// <generic type (number, boolean, T,K)>



const App: React.FC = () => {

  return (
    <div>
      < Header tabs={tabs}/>
      
    </div>
  )
}

export default App