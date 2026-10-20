import React from 'react'

const Cart = ({ cart, removeFromCart }) => {
    const totalAmount = cart.reduce((sum, product) => {
        return sum + product.price * product.quantity
    }, 0)

    return (

        <section className="min-h-screen bg-pink-50 p-6">
            <h1 className="mb-6 text-3xl font-bold text-pink-800">
                My Shopping Cart 🛍️
            </h1>

            {cart.length === 0 ? (
                <p>Your cart is empty. Go and select your favourite hair.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cart.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-2xl bg-white shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-4">
                                <p className="font-semibold text-gray-800">
                                    {product.name}
                                </p>

                                <p className="mt-2 font-bold text-pink-700">
                                    ₦{product.price.toLocaleString()}
                                </p>

                                <p>Quantity: {product.quantity}</p>
                            </div>
                            <button onClick={() => removeFromCart(product.id)}
                                className="w-full mt-4 rounded-full bg-pink-600 py-2 font-medium text-white hover:bg-pink-700">
                                remove from cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-8 rounded-xl bg-pink-100 p-6">
                <h2 className="text-xl font-bold">
                    Total Amount
                </h2>

                <p className="mt-2 text-2xl font-bold text-pink-700">
                    ₦{totalAmount.toLocaleString()}
                </p>
            </div>
        </section>
    )
}

export default Cart