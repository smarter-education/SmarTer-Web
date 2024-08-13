import Navdash from "@/Layouts/Navdash";
import React from "react";

const Dash = () => {
    return (
        <>
            <nav>
                <Navdash />
            </nav>
            <main>
                <div className="bg-smarter1 w-[603px] h-[851px] rounded-[20px] border-2 border-slate-400 p-[17px]">
                    <h6 className="font-semibold text-black text-[20px] mb-[12px] ">
                        Kelas Saya
                    </h6>
                    <div className="border-t border-2 border-gray-300 w-[562px] mx-auto mb-[13px]"></div>
                    <div>
                        <div className="bg-white w-[562px] rounded-xl">
                            <h2 className="text-[16px] font-semibold text-black">Sedang dipelajari</h2>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dash;
