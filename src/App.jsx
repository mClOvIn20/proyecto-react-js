
import './App.css'
import './components/ItemListConteiner/ItemListConteiner'
import { NavBar } from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { ItemListConteiner } from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NotFound } from './components/not-found/NotFound'
import { Inicio } from './components/Inicio/Inicio'
import { ItemDetailConteiner } from './components/ItemDetailConteiner/ItemDetailConteiner'
import { CartProvider } from './Context/CartContext'
import { CartView } from './components/CartView/CartView'
import { UserProvider } from './Context/userContext'


function App() {


  return (

    <div className='px-3'>

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