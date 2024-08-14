import React from "react";

const Nav = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-100 to-purple-300 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2 bg-gray-600 mx-6">
                    <img
                        src="/path/to/your/logo.png"
                        alt="SmarTer Logo"
                        className="h-8 w-8"
                    />
                    <span className="text-xl font-bold text-purple-700">
                        SmarTer
                    </span>
                </div>

                {/ Search Bar /}
                <div className="flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Cari kursus pembelajaran"
                        className="w-full px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                {/ Navigation Links /}
                <div className="hidden md:flex space-x-12">
                    <a
                        href="#"
                        className="text-purple-700 w hover:text-purple-900"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="text-purple-700 w hover:text-purple-900"
                    >
                        Product
                    </a>
                    <a
                        href="#"
                        className="text-purple-700 w hover:text-purple-900"
                    >
                        Learning Path
                    </a>
                    <a
                        href="#"
                        className="text-purple-700 w hover:text-purple-900"
                    >
                        About Us
                    </a>
                </div>

                {/ Log in Button */}
                <div>
                    <button className=" mx-6 py-1 w-40 text-sm font-semibold text-purple-700 bg-white border border-purple-700 rounded-full hover:bg-purple-100">
                        Log in
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
