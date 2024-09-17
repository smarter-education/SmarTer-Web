import React from "react";
import { Link, Head } from "@inertiajs/react";
import { AiFillHome } from "react-icons/ai";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import Navdash from "@/Layouts/Dashboard/Navdash";
import { pp } from "@/Helper/Images";

const Kelas = (props) => {
    return (
        <>
            <Head title={props.title} />
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
                                </div>{" "}
                                <div className="flex justify-center items-center w-[125px] h-[35px] bg-white rounded-lg shadow-lg">
                                    <p className="flex justify-center items-center gap-1 text-smarter4 ">
                                        <HiMiniSquare3Stack3D />
                                        Kelas Saya
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <main className="bg-[#e6e5e5] w-screen h-screen">
                    <div className="p-[17px]">
                        <div className="flex gap-5">
                            <div className="w-full bg-smarter1 border-2 border-solid border-gray-300 p-3 rounded-lg">
                                <h6 className="text-black font-bold mb-1">
                                    Kelas Saya
                                </h6>
                                <div className="flex gap-5">
                                    <div className="flex flex-col gap-3">
                                        <div className="border-t border border-gray-300 mb-3"></div>
                                        <div className="bg-white w-[525px] rounded-lg ">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Sedang dipelajari
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Sedang dipelajari
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Sedang dipelajari
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Sedang dipelajari
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Sedang dipelajari
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="border-t border border-gray-300 mb-3"></div>
                                        <div className="bg-white w-[525px] rounded-lg ">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Belum Di Mulai
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Belum Di Mulai
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Belum Di Mulai
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Belum Di Mulai
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-white w-[525px] rounded-lg">
                                            <div className="p-3">
                                                <h6 className="font-bold text-black text-[14px]">
                                                    Belum Di Mulai
                                                </h6>
                                                <p className="text-black text-[12px]">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.
                                                    Ut et massa mi. Aliquam in
                                                    hendrerit urna. Pellentesque
                                                    sit amet sapien fringilla,
                                                    mattis ligula consectetur,
                                                    ultrices mauris.
                                                </p>
                                            </div>
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

export default Kelas;
