import React from "react";

import { pp, smarterlogo } from "@/Helper/Images";

const Navdash = () => {
    return (
        <nav>
            <div className="bg-white h-[46px] flex justify-between border-b-2">
                <div className="flex justify-center items-center">
                    <img src={smarterlogo} alt="" className="w-[150px]" />
                    <div className="ml-10">
                        <ul className="flex gap-[33px] text-black">
                            <li className="">Home</li>
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
                    <p className="text-black font-bold text-[12px] text-center">
                        Kevin Choiiche
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navdash;
