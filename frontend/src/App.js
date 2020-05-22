import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

import Home from './Screens/Home'
import ProductDetails from './Screens/ProductDetails'

import './App.css';

function App() {
  const openSideMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSideMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div class="grid-container">
        <header class="header">
          <div class="brand">
            <button onClick={openSideMenu}>
              &#9776;
          </button>
            <Link to='/'></Link>
          </div>
          <div class="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">Sign In</a>
          </div>
        </header>
        <aside class="sidebar">
          <h3>Categories</h3>
          <button class="sidebar-close-button" onClick={closeSideMenu}>x</button>
          <ul>
            <li><a href="index.html">Men</a></li>
            <li><a href="index.html">Women</a></li>
          </ul>
        </aside>
        <main class="main">
          <div class="content">
            <Route path="/" exact component={Home}></Route>
            <Route path="/product/:id" component={ProductDetails}></Route>
          </div>
        </main>
        <footer class="footer">
          Footer Here
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
