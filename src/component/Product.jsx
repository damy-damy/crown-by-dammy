import React from 'react'
import products from '../product'
import { useState } from 'react'

const Products = ({ addToCart }) => {

    const [search, setSearch] = useState("")
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    return (

        <section className="bg-white px-6 py-12">

            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search wigs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-xl border border-pink-200 px-4 py-3 outline-none focus:border-pink-500"
                />
            </div>
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-2 text-3xl font-bold text-pink-800">
                    Our Collection
                </h2>



                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className=" relative overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm"
                        ><button className="absolute right-3 top-3 rounded-full bg-white p-2 text-2xl text-pink-600 shadow-md">
                                ♡
                            </button>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-4">
                                <p className="text-sm text-pink-600">
                                    {product.category}
                                </p>

                                <h3 className="mt-1 font-semibold text-gray-800">
                                    {product.name}
                                </h3>

                                <p className="mt-2 text-lg font-bold text-pink-700">
                                    ₦{product.price.toLocaleString()}
                                </p>

                                <button
                                    onClick={() => addToCart(product)}
                                    className="mt-4 w-full rounded-full bg-pink-600 py-3 font-medium text-white hover:bg-pink-700"
                                >
                                    Add to Cart 🛒
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products