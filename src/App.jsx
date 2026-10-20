import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Cart from './component/cart'
import useCart from './hooks/useCart'

function Shop() {
  const { cart, addToCart, removeFromCart } = useCart()

  return (
    <>
      <Navbar />

      <nav className="flex gap-6 bg-pink-100 p-4">
        <Link to="/">Shop</Link>

        <Link to="/cart">
          Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Product addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Shop />
    </BrowserRouter>
  )
}