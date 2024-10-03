import React from "react";
import { course3 } from "@/Helper/Images";
import { FaFileAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { Rating, RatingStar } from "flowbite-react";


import Footer from "@/Components/Footer";
import Navdash from "@/Layouts/Dashboard/Navdash";

const Pembayaranitem = () => {
    return (
        <>
            <Navdash />
            <section>
                <main className="bg-white pt-10">
                    <div className="ml-20 mb-8">
                        <h4 className="text-2xl font-semibold text-black">
                            Keranjang Belanja
                        </h4>
                        <p className="text-black mb-2">
                            0 barang dalam keranjang
                        </p>
                    </div>
                    <div className="ml-20">
                        <div className="w-[700px] border-b-2 text-black">
                            <input
                                type="checkbox"
                                name=""
                                id=""
                                className="mr-3"
                            />
                            Pilih Semua
                        </div>
                        <div className="flex gap-[100px]">
                            <div>
                                <div className="w-[700px] border-b-2 flex py-3 justify-between">
                                    <div className="flex">
                                        <div className="flex justify-center items-center mr-2">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="bg-[#D9D9D9] w-[155px] h-[85px]"></div>
                                        <div className="ml-8 ">
                                            <h6 className="text-[15px] font-bold text-black mb-2">
                                                Jenis Bilangan
                                            </h6>
                                            <div className="flex gap-2 mb-2">
                                                <div className="bg-smarter7 py-1 px-2 text-white text-[11px]">
                                                    Matematika
                                                </div>
                                                <div className="bg-smarter5 py-1 px-2 text-white text-[11px]">
                                                    Kelas 10
                                                </div>
                                            </div>
                                            <div className="flex font-bold text-black text-[10px] gap-2">
                                                <p>1.5 total jam</p>
                                                <p>|</p>
                                                <p>6 materi</p>
                                                <p>|</p>
                                                <p>1 video</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex font-bold text-black gap-10 text-[15px]">
                                        <button className="flex justify-start hover:text-red-700">
                                            Hapus
                                        </button>
                                        <p>Rp. 5000</p>
                                    </div>
                                </div>
                                <div className="w-[700px] border-b-2 flex py-3 justify-between">
                                    <div className="flex">
                                        <div className="flex justify-center items-center mr-2">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="bg-[#D9D9D9] w-[155px] h-[85px]"></div>
                                        <div className="ml-8 ">
                                            <h6 className="text-[15px] font-bold text-black mb-2">
                                                Jenis Bilangan
                                            </h6>
                                            <div className="flex gap-2 mb-2">
                                                <div className="bg-smarter7 py-1 px-2 text-white text-[11px]">
                                                    Matematika
                                                </div>
                                                <div className="bg-smarter5 py-1 px-2 text-white text-[11px]">
                                                    Kelas 10
                                                </div>
                                            </div>
                                            <div className="flex font-bold text-black text-[10px] gap-2">
                                                <p>1.5 total jam</p>
                                                <p>|</p>
                                                <p>6 materi</p>
                                                <p>|</p>
                                                <p>1 video</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex font-bold text-black gap-10 text-[15px]">
                                        <button className="flex justify-start hover:text-red-700">
                                            Hapus
                                        </button>
                                        <p>Rp. 5000</p>
                                    </div>
                                </div>
                                <div className="w-[700px] border-b-2 flex py-3 justify-between">
                                    <div className="flex">
                                        <div className="flex justify-center items-center mr-2">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="bg-[#D9D9D9] w-[155px] h-[85px]"></div>
                                        <div className="ml-8 ">
                                            <h6 className="text-[15px] font-bold text-black mb-2">
                                                Jenis Bilangan
                                            </h6>
                                            <div className="flex gap-2 mb-2">
                                                <div className="bg-smarter7 py-1 px-2 text-white text-[11px]">
                                                    Matematika
                                                </div>
                                                <div className="bg-smarter5 py-1 px-2 text-white text-[11px]">
                                                    Kelas 10
                                                </div>
                                            </div>
                                            <div className="flex font-bold text-black text-[10px] gap-2">
                                                <p>1.5 total jam</p>
                                                <p>|</p>
                                                <p>6 materi</p>
                                                <p>|</p>
                                                <p>1 video</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex font-bold text-black gap-10 text-[15px]">
                                        <button className="flex justify-start hover:text-red-700">
                                            Hapus
                                        </button>
                                        <p>Rp. 5000</p>
                                    </div>
                                </div>
                                <div className="w-[700px] border-b-2 flex py-3 justify-between">
                                    <div className="flex">
                                        <div className="flex justify-center items-center mr-2">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="bg-[#D9D9D9] w-[155px] h-[85px]"></div>
                                        <div className="ml-8 ">
                                            <h6 className="text-[15px] font-bold text-black mb-2">
                                                Jenis Bilangan
                                            </h6>
                                            <div className="flex gap-2 mb-2">
                                                <div className="bg-smarter7 py-1 px-2 text-white text-[11px]">
                                                    Matematika
                                                </div>
                                                <div className="bg-smarter5 py-1 px-2 text-white text-[11px]">
                                                    Kelas 10
                                                </div>
                                            </div>
                                            <div className="flex font-bold text-black text-[10px] gap-2">
                                                <p>1.5 total jam</p>
                                                <p>|</p>
                                                <p>6 materi</p>
                                                <p>|</p>
                                                <p>1 video</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex font-bold text-black gap-10 text-[15px]">
                                        <button className="flex justify-start hover:text-red-700">
                                            Hapus
                                        </button>
                                        <p>Rp. 5000</p>
                                    </div>
                                </div>
                                <div className="w-[700px] border-b-2 flex py-3 justify-between">
                                    <div className="flex">
                                        <div className="flex justify-center items-center mr-2">
                                            <input
                                                type="checkbox"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="bg-[#D9D9D9] w-[155px] h-[85px]"></div>
                                        <div className="ml-8 ">
                                            <h6 className="text-[15px] font-bold text-black mb-2">
                                                Jenis Bilangan
                                            </h6>
                                            <div className="flex gap-2 mb-2">
                                                <div className="bg-smarter7 py-1 px-2 text-white text-[11px]">
                                                    Matematika
                                                </div>
                                                <div className="bg-smarter5 py-1 px-2 text-white text-[11px]">
                                                    Kelas 10
                                                </div>
                                            </div>
                                            <div className="flex font-bold text-black text-[10px] gap-2">
                                                <p>1.5 total jam</p>
                                                <p>|</p>
                                                <p>6 materi</p>
                                                <p>|</p>
                                                <p>1 video</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex font-bold text-black gap-10 text-[15px]">
                                        <button className="flex justify-start hover:text-red-700">
                                            Hapus
                                        </button>
                                        <p>Rp. 5000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className="w-[400px]  rounded-lg border-2 px-4 py-4 text-black font-bold">
                                    <div>
                                        <h6 className="text-lg">
                                            Ringkasan Belanja
                                        </h6>
                                        <div className="border-b-2 mt-1 mb-2"></div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between">
                                            <h6>Tagihan</h6>
                                            <p className="text-[13px]">
                                                Rp. 25.0000
                                            </p>
                                        </div>
                                        <div className="border-b-2 mt-1 mb-3"></div>
                                    </div>
                                    <div>
                                        <h6>Gunakan Kode Promo</h6>
                                        <div className="border-b-2 mt-1 mb-2"></div>
                                        <div className="flex">
                                            <input
                                                type="text"
                                                className="bg-smarter1 border-slate-300 w-[250px] h-[30px]"
                                            />
                                            <button className="bg-smarter7 py-1 px-2 text-white text-[14px]">
                                                Terapkan
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center items-center mt-8">
                                    <button className="w-[200px] bg-smarter7 px-5 text-center py-2 rounded-full text-white font-bold ">
                                        Pembayaran
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-20 pt-10 ">
                        <h6 className="text-black font-bold text-2xl pb-10">
                            Recommended Classes for You
                        </h6>
                        <div className="pb-[60px] flex justify-evenly flex-wrap">
                            <div className="w-[280px] h-[340px] border rounded-xl shadow-lg">
                                <div>
                                    <img
                                        src={course3}
                                        alt=""
                                        className="object-cover h-[159px] w-full"
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
                                            <p className="text-black text-[13px]">
                                                6 Materi
                                            </p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <IoLogoYoutube
                                                style={{
                                                    width: "13px",
                                                    color: "black",
                                                }}
                                            />
                                            <p className="text-black text-[13px]">
                                                1 Video Materi
                                            </p>
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
                                        <p className="line-through">
                                            Rp 15.000
                                        </p>
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
                            <div className="w-[280px] h-[340px] border rounded-xl shadow-lg">
                                <div>
                                    <img
                                        src={course3}
                                        alt=""
                                        className="object-cover h-[159px] w-full"
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
                                            <p className="text-black text-[13px]">
                                                6 Materi
                                            </p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <IoLogoYoutube
                                                style={{
                                                    width: "13px",
                                                    color: "black",
                                                }}
                                            />
                                            <p className="text-black text-[13px]">
                                                1 Video Materi
                                            </p>
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
                                        <p className="line-through">
                                            Rp 15.000
                                        </p>
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
                            <div className="w-[280px] h-[340px] border rounded-xl shadow-lg">
                                <div>
                                    <img
                                        src={course3}
                                        alt=""
                                        className="object-cover h-[159px] w-full"
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
                                            <p className="text-black text-[13px]">
                                                6 Materi
                                            </p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <IoLogoYoutube
                                                style={{
                                                    width: "13px",
                                                    color: "black",
                                                }}
                                            />
                                            <p className="text-black text-[13px]">
                                                1 Video Materi
                                            </p>
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
                                        <p className="line-through">
                                            Rp 15.000
                                        </p>
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
                            <div className="w-[280px] h-[340px] border rounded-xl shadow-lg">
                                <div>
                                    <img
                                        src={course3}
                                        alt=""
                                        className="object-cover h-[159px] w-full"
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
                                            <p className="text-black text-[13px]">
                                                6 Materi
                                            </p>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <IoLogoYoutube
                                                style={{
                                                    width: "13px",
                                                    color: "black",
                                                }}
                                            />
                                            <p className="text-black text-[13px]">
                                                1 Video Materi
                                            </p>
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
                                        <p className="line-through">
                                            Rp 15.000
                                        </p>
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
                        </div>
                    </div>
                </main>
                <Footer />
            </section>
        </>
    );
};

export default Pembayaranitem;
