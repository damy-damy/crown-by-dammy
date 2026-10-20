import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-pink-50 px-6 py-5">
            <div className="mx-auto max-w-7xl flex items-center justify-between">

                <h1 className="text-2xl font-bold text-pink-700">
                    Crown by Dammy
                </h1>

                <div className="flex items-center gap-6">
                    <a href="/" className="text-pink-700 font-medium">
                        Home
                    </a>

                    <a href="/cart" className="text-gray-600 hover:text-pink-600">
                        Shop
                    </a>

                    <a href="#" className="text-gray-600 hover:text-pink-600">
                        About
                    </a>

                    <a href="#" className="text-gray-600 hover:text-pink-600">
                        Contact
                    </a>
                </div>

                <button className="rounded-full bg-pink-600 px-5 py-2 text-white hover:bg-pink-700">
                    Shop Now
                </button>

            </div>
        </nav>
    )
}

export default Navbar