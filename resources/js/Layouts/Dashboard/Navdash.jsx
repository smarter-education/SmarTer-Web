import React from "react";

import { pp, dashlogo } from "@/Helper/Images";

const Navdash = () => {
    return (
        <nav>
            <div className="bg-smarter7 h-[46px] flex justify-between">
                <div className="flex justify-center items-center">
                    <img src={dashlogo} alt="" className="pt-4" />
                    <div className="ml-10">
                        <ul className="flex gap-[33px] text-white">
                            <li className="underline">Home</li>
                            <li>Belajar</li>
                            <li>Tentang Kami</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2  mr-20 ">
                    <img
                        src={pp}
                        alt=""
                        className="object-cover w-[29px] h-[29px] rounded-full"
                    />
                    <p className="text-white font-bold text-[12px] text-center">
                        Kevin Choiiche
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navdash;
