import React from "react";
import { Link, Head } from "@inertiajs/react";
import { AiFillHome } from "react-icons/ai";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { IoStorefrontOutline } from "react-icons/io5";
import Navdash from "@/Layouts/Dashboard/Navdash";
import { pp } from "@/Helper/Images";
const Product = () => {
    return (
        <>
            <nav>
                <Navdash />
            </nav>
            <section className="flex">
                <aside>
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
                                <div className="flex justify-center items-center w-[125px] h-[35px]  ">
                                    <p className="flex justify-center items-center gap-1 text-smarter8 ">
                                        <AiFillHome />
                                        Dashboard
                                    </p>
                                </div>
                                <div className="flex justify-center items-center w-[125px] h-[35px] rounded-lg">
                                    <p className="flex justify-center items-center gap-1 text-smarter8 ">
                                        <HiMiniSquare3Stack3D />
                                        Kelas Saya
                                    </p>
                                </div>
                                <div className="flex justify-center items-center w-[125px] h-[35px] bg-white rounded-lg shadow-lg">
                                    <p className="flex justify-center items-center gap-1 text-smarter4 ">
                                        <IoStorefrontOutline />
                                        Product
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="bg-white w-screen h-screen">
                    <div className="p-[17px]">
                        <div className="flex gap-5">
                            <div className="w-full ">
                                <div className="flex gap-5">
                                    <div>
                                        <div className="mb-3">
                                            <h6 className="text-black font-bold mb-1">
                                                Kategori
                                            </h6>
                                            <div className="w-[500px] border border-solid border-slate-400 rounded-lg py-3">
                                                <div class="max-w-md mx-auto">
                                                    <label
                                                        class="block text-gray-700 mb-2"
                                                        for="kelas"
                                                    >
                                                        Kelas
                                                    </label>
                                                    <select
                                                        id="kelas"
                                                        class="w-full p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                    >
                                                        <option value="Kelas 10">
                                                            Kelas 10
                                                        </option>
                                                        <option value="Kelas 11">
                                                            Kelas 11
                                                        </option>
                                                        <option value="Kelas 12">
                                                            Kelas 12
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="max-w-md mx-auto">
                                                    <label
                                                        class="block text-gray-700 mb-2"
                                                        for="kelas"
                                                    >
                                                        Pelajaran
                                                    </label>
                                                    <select
                                                        id="kelas"
                                                        class="w-full p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                    >
                                                        <option value="Matematika">
                                                            Matematika
                                                        </option>
                                                        <option value="Fisika">
                                                            Fisika
                                                        </option>
                                                        <option value="Kimia">
                                                            Kimia
                                                        </option>
                                                    </select>
                                                </div>
                                                <div class="max-w-md mx-auto">
                                                    <label
                                                        class="block text-gray-700 mb-2"
                                                        for="kelas"
                                                    >
                                                        Kurikulum
                                                    </label>
                                                    <select
                                                        id="kelas"
                                                        class="w-full p-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
                                                    >
                                                        <option value="Kurikulum-2013">
                                                            Kurikulum 2013
                                                        </option>
                                                        <option value="Fisika">
                                                            Fisika
                                                        </option>
                                                        <option value="Kimia">
                                                            Kimia
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className="text-black font-bold mb-1">
                                                Harga
                                            </h6>
                                            <div className="w-[500px] border border-solid border-slate-400 rounded-lg py-3">
                                                <div class="max-w-md mx-auto">
                                                    <label
                                                        class="block text-gray-700 font-bold mb-2"
                                                        for="harga"
                                                    >
                                                        Harga
                                                    </label>
                                                    <div class="flex items-center border border-gray-300 rounded-md p-1 focus-within:ring-2 focus-within:ring-blue-500">
                                                        <span class="bg-gray-200 px-3 py-2 text-gray-600 rounded-l-md">
                                                            Rp
                                                        </span>
                                                        <input
                                                            type="number"
                                                            id="harga"
                                                            placeholder="Harga"
                                                            class="w-full  focus:border-none border-none rounded-r-md "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full ">
                                <div className="flex gap-5">
                                    <div>
                                        <div className="mb-3">
                                            <h6 className="text-black font-bold mb-1">
                                                Upload Video
                                            </h6>
                                            <div className="w-[500px] border border-solid border-slate-400 rounded-lg py-3">
                                                <div class="max-w-md mx-auto">
                                                    <div class="mb-4">
                                                        <label
                                                            class="block text-gray-700 mb-2"
                                                            for="nama-video"
                                                        >
                                                            Nama Video
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="nama-video"
                                                            placeholder="Jenis Bilangan Segitiga Sigma"
                                                            class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        />
                                                    </div>

                                                    <div class="mb-4">
                                                        <label
                                                            class="block text-gray-700 mb-2"
                                                            for="link-video"
                                                        >
                                                            Link Video
                                                        </label>
                                                        <input
                                                            type="url"
                                                            id="link-video"
                                                            placeholder="Masukkan link video"
                                                            class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <h6 className="text-black font-bold mb-1">
                                                Upload Modul
                                            </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default Product;
