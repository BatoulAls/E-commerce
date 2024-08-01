import{createContext,useState,useContext} from 'react';
const   CartContext=createContext();

export const useCart=()=>{
    return useContext(CartContext)

}

export const CartProvider=({children})=>{
    const[cart,setcart]=useState([])

    
        

        const addcart = (product) => {
            console.log("Received in addcart:", product);
            
            setcart(prevCart => {
                const ItemIndex = prevCart.findIndex(item => item.id === product.id);
                
                if (ItemIndex !== -1) {
                    // Item exists, update its quantity
                    const updatedCart = prevCart.map((item, index) => 
                        index === ItemIndex 
                            ? { ...item, quantity: item.quantity + product.quantity }
                            : item
                    );
                    console.log("Updated cart:", updatedCart);
                    return updatedCart;
                } else {
                    // New item, add to cart
                    const newCart = [...prevCart, product];
                    console.log("New cart:", newCart);
                    return newCart;
                }
            });
        }
    const removeFromCart=(productId)=>{
        const removeItem = cart.filter(item=>item.id!==productId)
        setcart(removeItem)

    }

    return(

        <CartContext.Provider value={{cart,addcart,removeFromCart}} >
             {children}

        </CartContext.Provider>







    )

    

}