import React from 'react';
import './App.css';

function App() {
  const openSideMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeSideMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div class="grid-container">
      <header class="header">
        <div class="brand">
          <button onClick={openSideMenu}>
            &#9776;
        </button>
          <a href="index.html">Digi Shop</a>
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
          <ul class="products">
            <li>
              <div class="product">
                <img class="product-image" 
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSVtaBWuIUFquygSbIUiiSc9Y3uUVOtYPkj8XpXalE3xFRjU0-U6heWfsfE3mqwD_N5dXRxRCq9W74Jjex94xTWoF-O7-HUGQ&usqp=CAE" 
                  alt="product" />
                <div class="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div class="product-brand">Zodiac</div>
                <div class="product-price">Rs. 500</div>
                <div class="product-rating">4.2 Stars (10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer class="footer">
        Footer Here
    </footer>
    </div>
  );
}

export default App;
