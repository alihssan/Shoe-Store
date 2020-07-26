import React from 'react';
import SideBar from './Components/Sidebar/SideBar'
import './App.css';
import Home from './Pages/Home.js'
import Cart from './Pages/Cart.js'
import {Router,Route} from 'react-router'
import Stock from './Pages/Stock.js'
import {data} from './Data/Data.js'


function App() {
  return (
    <div className="Ap">
      <SideBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Cart" component={Cart}/>
    {data.map(val=>
          <Route exact path={`/${val.slug}`}>
            <Stock Data={val} />
          </Route>
          
          )}

    </div>
  );
}

export default App;
