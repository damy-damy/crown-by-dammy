import { useState } from 'react'

export default function useCart() {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart((oldCart) => {
            const found = oldCart.find((item) => item.id === product.id)

            if (found) {
                return oldCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...oldCart, { ...product, quantity: 1 }]
        })
    }

    function removeFromCart(id) {
        setCart((oldCart) =>
            oldCart
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        )
    }

    return { cart, addToCart, removeFromCart }
}