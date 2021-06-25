
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'


import HomeScreen from './components/screens/HomeScreen'
import ProductScreen from './components/screens/ProductScreen'
import CartScreen from './components/screens/CartScreen'
import NavBar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'
import { useState } from 'react';

function App() {
  const [sideToggle, setSideToggle ] = useState(false)

  return (
    <BrowserRouter>
      <NavBar click={() => setSideToggle(true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop click={() => setSideToggle(false)} show={sideToggle}/>
      
    
      <main>
        <Switch>
          <Route exact path='/' component={HomeScreen}></Route>
          <Route exact path='/product/:id' component={ProductScreen}></Route>
          <Route exact path='/cart' component={CartScreen}></Route>
        </Switch>
      </main>
    
    </BrowserRouter>
  );
}

export default App;
