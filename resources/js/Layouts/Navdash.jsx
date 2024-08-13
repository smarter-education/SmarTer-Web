import React from "react";
import dashlogo from "../assets/image/others/dashlogo.png";

const Navdash = () => {
    return (
        <nav>
            <div className="bg-smarter7 h-[46px] flex justify-between">
                <div className="flex justify-center items-center">
                    <img src={dashlogo} alt="" className="pt-4" />
                    <div>
                        <ul className="flex gap-[33px] text-white">
                            <li>Home</li>
                            <li>Belajar</li>
                            <li>Tentang Kami</li>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </nav>
    );
};

export default Navdash;
