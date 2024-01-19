
import './App.css'
import './components/ItemListConteiner/ItemListConteiner'
import { NavBar } from './components/Navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './components/not-found/NotFound'
import { Inicio } from './components/Inicio/Inicio'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartProvider } from './Context/CartContext'
import { CartView } from './components/CartView/CartView'
import { UserProvider } from './Context/UserContext'
import Checkout from './components/Checkout/Checkout'


function App() {

  return (

    <div className='px-7'>

      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/menu" element={<ItemListConteiner />} />
              <Route path="/menu/:categoryId" element={<ItemListConteiner />} />
              <Route path="/item/:itemId" element={<ItemDetailConteiner />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  )
}

export default App
