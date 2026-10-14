import { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation,
} from "react-router-dom";

import AOS from "aos";

import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Navbar({ cartCount }) {
  return (
    <header className="site-header">
      <nav className="site-navbar">
        <Link to="/" className="site-logo">
          INTERIO<span>.</span>
        </Link>

        <div className="site-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">
            Cart ({cartCount})
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link to="/" className="site-logo footer-logo">
            INTERIO<span>.</span>
          </Link>
          <p>
            Thoughtful furniture and timeless pieces
            for beautiful everyday living.
          </p>
        </div>

        <div className="footer-navigation">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/collection">Collection</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Get in touch</h4>
          <p>hello@interio.example</p>
          <p>Designed for better living.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} INTERIO. All rights reserved.</p>
      </div>
    </footer>
  );
}

function PageEffects() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <PageEffects />

      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/collection"
            element={<Collection addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}