import React, { useState, useEffect } from "react";

const SearchBar = ({ formValues, updateFormValues }) => {
    const [localFormValues, setLocalFormValues] = useState({ ...formValues });

    useEffect(() => {
        setLocalFormValues({ ...formValues });
    }, [formValues]);

    const handleInputChange = (e) => {
        const newValues = { ...localFormValues, search: e.target.value };
        setLocalFormValues(newValues);
        updateFormValues(newValues);
    };

    return (
        <div className="flex items-center border bg-[#F5F5F5] rounded-3xl shadow-sm">
            <input
                type="text"
                value={localFormValues.search}
                onChange={handleInputChange}
                className="flex-grow p-2 rounded-l-lg bg-transparent  outline-none border-none"
                placeholder="Search..."
            />
            <button className="p-2 bg-[#5F2D47] rounded-full text-white m-1">
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
