import React, { useState, useContext, useEffect } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState([])
    const [qtyInCart, setQtyInCart] = useState(0)
    const [showAlertToast, setShowAlertToast] = useState(false)
    
    const addProduct = (id, quantity, image, name, price, description, stock) => {
        const prod = {
            key: id, 
            id: id,
            image: image,
            name: name,
            price: price, 
            description: description,
            stock: stock, 
            quantity: quantity
        }
        let newCart = []
        
        if (isInCart(id)) {
            let repeatedProduct = isInCart(id)
            if((repeatedProduct.quantity + quantity) > prod.stock) {
                setShowAlertToast(true)
                /* alert('La cantidad del producto que quieres agregar a tu carrito supera la cantidad del stock disponible') */
            } else {
                repeatedProduct.quantity += quantity
                newCart.push(repeatedProduct)
                newCart = [...cart]
                setCart(newCart)
            }
        } else {
            newCart = [...cart]
            newCart.push(prod)
            setCart(newCart)
        }  
    }

    useEffect(()=> {
        setQtyInCart(
            cart
                .map(product => product.quantity)
                .reduce((accu, item) => (accu + item),0)
        )
    }, [cart])

    const clearCart = () => setCart([])

    const isInCart = (id) => cart.find(product => product.id === id)

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{
            cart, setCart,
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            quantity, setQuantity,
            qtyInCart, setQtyInCart,
            showAlertToast, setShowAlertToast
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;