import React from "react";
import pp from "../assets/image/others/pp.png";

const Sidebar = () => {
    return (
        <div className="w-[250px] h-screen bg-smarter1">
            <div>
                <div className="w-[200px] h-[200px]   mx-auto mt-14">
                    <div className="w-[160px] h-[160px]  rounded-full m-auto ">
                        <img
                            src={pp}
                            alt=""
                            className="object-fill w-[160px] h-[160px]"
                        />
                        <div className="text-center mt-3">
                            <p className="text-xl text-black font-semibold">
                                Kevin Choiiche
                            </p>
                            <p className="text-black text-md leading-normal">
                                Kota Depok
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
