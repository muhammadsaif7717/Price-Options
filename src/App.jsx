import LineChart  from './assets/Components/LineChart/LineChart'
import './App.css'
import Navbar2 from './assets/Components/Navbar/Navbar2'
import PriceOptions from './assets/Components/PriceOptions/PriceOptions'
import Phones from './assets/Components/Phones/Phones'

function App() {
 
  return (
    <main className='w-[90%] mx-auto'>
     <Navbar2></Navbar2>
     <PriceOptions></PriceOptions>
     <LineChart></LineChart>
     <Phones></Phones>
    </main>
  )
}

export default App
