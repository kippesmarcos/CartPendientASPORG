import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { RanksPage } from './pages/RanksPage';
import { KitsPage } from './pages/KitsPage';
import { KeysPage } from './pages/KeysPage';
import { TokensPage } from './pages/TokensPage';
import { CartPage } from './pages/CartPage';
import { PurchaseHistory } from './pages/PurchaseHistory';
import { Checkout } from './pages/Checkout';
import { PurchaseSuccess } from './pages/PurchaseSuccess';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { PurchaseProvider } from './context/PurchaseContext';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <PurchaseProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/ranks" element={<RanksPage />} />
              <Route path="/kits" element={<KitsPage />} />
              <Route path="/keys" element={<KeysPage />} />
              <Route path="/tokens" element={<TokensPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/purchase-history" element={<PurchaseHistory />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/purchase-success" element={<PurchaseSuccess />} />
            </Routes>
          </Router>
        </PurchaseProvider>
      </CartProvider>
    </AuthProvider>
  );
}