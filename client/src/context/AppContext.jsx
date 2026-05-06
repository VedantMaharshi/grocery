import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import Products from "../pages/Products";
import toast from "react-hot-toast";

export const AppContext=createContext(null);

const AppContextProvider=({children})=>{
    const navigate=useNavigate();
    const [user,setUser]=useState(null);
    const [isSeller,setIsSeller]=useState(null);
    const [showUserLogin,setShowUserLogin]=useState(false);
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState({});


    //fetch all products data
    const fetchProducts=async()=>{
        setProducts(dummyProducts);
    };
    //add to cart product
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId] += 1;
        } else {
            cartData[itemId]=1;
        }
        setCartItems(cartData);
        toast.success("Added To Cart");
    };
    //update cart item quantity
    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems);
        cartData[itemId]=quantity;
        setCartItems(cartData);
        toast.success("Cart Updated");
    };
    //total cart items
    const cartCount=()=>{
        let totalCount=0;
        for(const item in cartItems){
            totalCount+=cartItems[item]
        }
        return totalCount;
    }
    //total cart amount
    const totalCartAmount=()=>{
        let totalAmount=0;
        for(const items in cartItems){
            let itemInfo=products.find((product)=>product._id===items);
            if(cartItems[items]>0){
                totalAmount+=cartItems[items]*itemInfo.OfferPrice;               
            }
        }
        return Math.floor(totalAmount*1000)/100;
    };
    //remove product from cart
    const removeFromCart=(itemId)=>{
        let cartData=structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]-=1;
            if(cartData[itemId]==0){
                delete cartData[itemId];
            }
            toast.success("Removed from Cart");
            setCartItems(cartData);
        }
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    const value={
        navigate,
        user,
        setUser,
        isSeller,
        setIsSeller,
        showUserLogin,
        setShowUserLogin,
        products,
        addToCart,
        updateCartItem,
        cartCount,
        totalCartAmount,
        removeFromCart,
        cartItems
    };
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;