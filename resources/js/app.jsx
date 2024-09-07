<<<<<<< HEAD
<<<<<<< HEAD
import "./bootstrap";
import "../css/app.css";

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
=======
import './bootstrap';
import '../css/app.css';
=======
import "./bootstrap";
import "../css/app.css";
>>>>>>> a8318e9 (fix conflict)

import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

<<<<<<< HEAD
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
>>>>>>> 93e4b29 (fix conflict)
=======
const appName = import.meta.env.VITE_APP_NAME || "Laravel";
>>>>>>> a8318e9 (fix conflict)

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx");
        return resolvePageComponent(`./Pages/${name}.jsx`, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
