import React,{useEffect,useState} from 'react';
import SideBar from './Components/Sidebar/SideBar'
import './App.css';
import Home from './Pages/Home.js'
import Cart from './Pages/Cart.js'
import {Router,Route} from 'react-router'
import Stock from './Pages/Stock.js'
import {useDispatch,connect} from 'react-redux'
import {data} from './Data/Data.js'
import {getalldata} from './Features/GetAllData.js'

function App(props) {
  const dispatch=useDispatch()
  const [dsta,setdsta]=useState({})
  useEffect(()=>{
    dispatch(getalldata(data))
  },[])
  const totaldata=props.datt
  console.log(totaldata)
  return (
    <div className="Ap">
      <SideBar/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Cart" component={Cart}/>
      {totaldata!==undefined && totaldata.map(val=>
          <Route exact path={`/${val.slug}`} key={val.slug}>
            <Stock Data={val} />
          </Route>
          
          )}

    </div>
  );
}

function mapStateToProps({getAllData}){
  return{
    datt:getAllData.getalldata.data,
  }
}
export default connect(mapStateToProps)(App);
