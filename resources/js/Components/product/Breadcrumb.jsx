import React from "react";
import { Link, usePage } from "@inertiajs/react";

const Breadcrumb = () => {
    const { url } = usePage();
    const pathnames = url.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb" className="bg-gray-100 p-3 rounded">
            <ol className="list-reset flex text-gray-700">
                <li className="mr-2">
                    <Link href="/" className="text-blue-600 hover:underline">
                        Matematika
                    </Link>
                    <span className="mx-2">{">"}</span>
                </li>
                {pathnames.map((value, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <li
                            key={to}
                            className="breadcrumb-item active text-gray-500"
                            aria-current="page"
                        >
                            {value}
                        </li>
                    ) : (
                        <li key={to} className="mr-2">
                            <Link
                                href={to}
                                className="text-blue-600 hover:underline"
                            >
                                {value}
                            </Link>
                            <span className="mx-2">{">"}</span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
