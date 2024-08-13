import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";


/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
import flowbite from "flowbite-react/tailwind";
=======
const flowbite = require("flowbite-react/tailwind");
>>>>>>> 1df6a75 (test carousel)
export default {
    content: [
<<<<<<< HEAD
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        flowbite.content(),
=======
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "node_modules/flowbite-react/lib/esm/**/*.js",
<<<<<<< HEAD
>>>>>>> 09bcb87 (homepage 80%)
=======
        flowbite.content(),
>>>>>>> 1df6a75 (test carousel)
    ],

    theme: {
        extend: {
            fontFamily: {
                display: ["Poppins"],
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                smarter1: "#F6F8FB",
                smarter2: "#DAA3DE",
                smarter3: "#B8ADD6",
                smarter4: "#8074A1",
                smarter5: "#6A5898",
                smarter6: "#765878",
                smarter7: "#5F2D47",
                smarter8: "#6D6D6D",
                smarter9: "#4D4D4D",
                smarter10: "#2F2F2F",
            },
        },
    },

<<<<<<< HEAD
<<<<<<< HEAD
    plugins: [
        forms,
        require('flowbite/plugin'),
        require('daisyui'),
        flowbite.plugin(),
    ],
=======
    plugins: [forms, require("flowbite/plugin"), require("daisyui")],
>>>>>>> 09bcb87 (homepage 80%)
=======
    plugins: [
        forms,
        require("flowbite/plugin"),
        require("daisyui"),
        flowbite.plugin(),
    ],
>>>>>>> 1df6a75 (test carousel)
};
