import { useEffect, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandingScreen from "./components/LandingScreen";
import './App.css';
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import MyOrders from "./pages/MyOrders";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import AddAddress from "./pages/AddAddress";
import SellerLayout from "./pages/seller/SellerLayout";
import SellerLogin from "./components/seller/SellerLogin";
import AddProduct from "./pages/seller/AddProduct";
import ProductList from "./pages/seller/ProductList";
import Orders from "./pages/seller/Orders";

function LandingApp() {
  const [screen, setScreen] = useState("landing");

  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("main");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {screen === "landing" ? <LandingScreen /> : <App />}
    </div>
  );
}

const App = () => {
  const {isSeller,showUserLogin}=useContext(AppContext);
  const location = useLocation();
  const isSellerPath=location.pathname.includes("seller");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="text-default min-h-screen">
      {isSellerPath ? null: <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <Toaster />
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/add-address" element={<AddAddress />} />

          <Route path="/seller" element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            {isSeller ? (
              <>
                <Route index element={<AddProduct />} />
                <Route path="product-list" element={<ProductList />} />
                <Route path="orders" element={<Orders />} />
              </>
            ) : null}
          </Route>
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default LandingApp;
export { App };

