import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {  useEffect } from 'react'
import {Provider} from 'react-redux'
import store from './store';



// Components
import Nav from './comps/nav/Nav';
import Home from './comps/home/Home';
import Contact from './comps/contact/Contact';
import Footer from './comps/footer/Footer';
import Products from './comps/products/Products';
import ProductInfo from './comps/products/ProductInfo';
import Admin from './comps/admin/Admin';
import Messages from './comps/admin/Messages';
import Register from './comps/admin/auth/Register';
import Login from './comps/admin/auth/Login';
import ErrorComponent from './comps/errors/ErrorComponent';

// Functions
import { loadUser } from "./actions/authActions";



import { ProductProvider } from "./comps/context/ProductContext";


function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, [])
  return (
    <Provider store={store}>
    <ProductProvider>
    <Router>
    <div className="App">
      <Nav/>
    <Switch>
        <Route exact path='/' component={Home}/>
         <Route  path='/contact' component={Contact}/>
         <Route exact  path='/products' component={Products}/>
         <Route  path='/products/product/:id' component={ProductInfo}/>
         <Route exact  path='/admin' component={Admin}/>
         <Route exact  path='/admin/messages' component={Messages}/>
         <Route exact  path='/admin/register' component={Register}/>
         <Route exact  path='/admin/login' component={Login}/>

         <Route  component={ErrorComponent}/>
        </Switch>
       <Footer/>
    
    </div>
    </Router>
    </ProductProvider>
    </Provider>
  );
}

export default App;
