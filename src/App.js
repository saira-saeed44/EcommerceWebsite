import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import About from './pages/about';
import Contact from './pages/contact';
import BlogPage from './pages/blogPage';
import ProductDetails from './pages/productDetails.jsx';
import CartPage from './pages/cartPage.jsx';
import CheckOutPage from './pages/checkoutPage.jsx';
import ComparisonProduct from './pages/comparisonPage.jsx'; 
import WishList from './pages/wishList.jsx';
import OrderConfirmation from './components/orderConfirmation.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop/:Id" element={<ProductDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/compare" element={<ComparisonProduct />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
