import { course3 } from "@/Helper/Images";
import { FaFileAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Rating, RatingStar } from "flowbite-react";

const Card = () => {
    return (
        <div className=" h-[340px] border rounded-xl overflow-hidden shadow-lg">
            <div>
                <img
                    src={course3}
                    alt=""
                    className="object-cover  h-[159px] w-full"
                />
            </div>
            <div className="px-2 pt-3 flex justify-between">
                <div>
                    <h6 className="text-black font-bold text-lg">
                        Jenis Bilangan
                    </h6>
                    <p className="text-[12px] text-slate-400 -mt-1 mb-1">
                        Matematika
                    </p>
                    <div className="flex gap-1 items-center">
                        <FaFileAlt
                            style={{
                                width: "13px",
                                color: "black",
                            }}
                        />
                        <p className="text-black text-[13px]">6 Materi</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <IoLogoYoutube
                            style={{
                                width: "13px",
                                color: "black",
                            }}
                        />
                        <p className="text-black text-[13px]">1 Video Materi</p>
                    </div>
                </div>
                <div>
                    <Rating>
                        <RatingStar className="w-[18px] mt-1" />
                        <p className="ml-[2px] mt-1 text-[13px] font-normal text-gray-900 dark:text-white">
                            4.95
                        </p>
                    </Rating>
                </div>
            </div>
            <div className="flex justify-between px-2">
                <div className="flex gap-1 text-[12px] mt-2 ">
                    <p className="line-through">Rp 15.000</p>
                    <p className="bg-[#8ABB75] text-white font-bold px-2 rounded-md">
                        33%
                    </p>
                </div>
                <div className="text-red-500 mt-2 font-bold text-[13px]">
                    Rp 5.000
                </div>
            </div>
            <div className="px-3 py-2">
                <button className="w-full bg-smarter7 rounded-xl px-2 py-2 text-center text-white">
                    Buy
                </button>
            </div>
        </div>
    );
};

export default Card;
