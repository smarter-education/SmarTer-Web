import React from "react";
import { pp } from "@/Helper/Images";
import { AiFillHome } from "react-icons/ai";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";

const Sidebar = () => {
    return (
        <>
            <div className="w-[210px] h-screen  bg-smarter1">
                <div className="flex justify-center pt-[35px] ">
                    <div className="">
                        <img
                            src={pp}
                            alt=""
                            className="object-cover w-[120px] h-[120px] rounded-full"
                        />
                        <div className="text-center pt-2">
                            <p className="text-[16px] font-bold text-black">
                                Kevin Choiiche
                            </p>
                            <p className="text-[12px] font-normal text-black">
                                Kota Depok
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center mt-16 gap-3">
                        <div className="flex justify-center items-center w-[125px] h-[35px] bg-white rounded-lg shadow-lg ">
                            <p className="flex justify-center items-center gap-1 text-smarter4 ">
                                <AiFillHome />
                                Dashboard
                            </p>
                        </div>{" "}
                        <div className="flex justify-center items-center w-[125px] h-[35px] rounded-lg ">
                            <p className="flex justify-center items-center gap-1 text-smarter8 ">
                                <HiMiniSquare3Stack3D />
                                Kelas Saya
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
