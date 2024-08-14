import "./bootstrap";
import "../css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME;

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
<<<<<<< HEAD
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
=======
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx');
        return resolvePageComponent(`./Pages/${name}.jsx`, pages);
    },
>>>>>>> f5dda85 (benerin oauth google)
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
