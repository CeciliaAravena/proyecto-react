import './App.css';
import ItemListContainer from './components/Item/ItemListContainer';
import ItemDetailContainer from './components/Item/ItemDetailContainer';
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
    return (
      
        <CartProvider>
            <Router>
                <Navbar />
               
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route
                        path="/category/:id"
                        element={<ItemListContainer />}
                    />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />

                    <Route path="/cart" element={<Cart />} />
                    
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;