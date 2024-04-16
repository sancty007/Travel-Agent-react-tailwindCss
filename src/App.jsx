import { Navbar} from './components/NavBar/navabar.jsx'
import { Header} from './components/Header/header.jsx'
import { Logo } from './components/Logo/Logo.jsx'
import { Product } from './components/Product/Product.jsx'

//import viteLogo from '/vite.svg'
//import './App.css'



//console.log("bonjour le monde",plantList);
function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Logo/>
      <Product/>
    </>
  )
}
  
/* function Main()
{
  const imagePath = require('./img/Header/Subtract.png').default;
  return (
   <>
      <div>
          <h1>Discover your favorite place with us</h1>
      </div>
    </>
  ) 
}
 */


export default App
