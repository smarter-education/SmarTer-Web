import Navdash from "@/Layouts/Dashboard/Navdash";
import Sidebar from "@/Layouts/Dashboard/Sidebar";
import React from "react";

const HomeDash = () => {
    return (
        <>
            <nav>
                <Navdash />
            </nav>
            <section className="flex">
                <aside>
                    <Sidebar />
                </aside>
                <main className="bg-[#e6e5e5] w-screen h-screen overflow-hidden">
                    <div className="p-[17px]">
                        <div className="flex gap-5">
                            <div className="w-[550px] bg-smarter1 border-2 border-solid border-gray-300 p-3 rounded-lg">
                                <h6 className="text-black font-bold mb-1">
                                    Kelas Saya
                                </h6>
                                <div className="border-t border border-gray-300 mb-3"></div>
                                <div className="flex flex-col gap-3 ovrf">
                                    <div className="bg-white w-[525px] rounded-lg ">
                                        <div className="p-3">
                                            <h6 className="font-bold text-black text-[14px]">
                                                Sedang dipelajari
                                            </h6>
                                            <p className="text-black text-[12px]">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit. Ut
                                                et massa mi. Aliquam in
                                                hendrerit urna. Pellentesque sit
                                                amet sapien fringilla, mattis
                                                ligula consectetur, ultrices
                                                mauris.
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
                                                consectetur adipiscing elit. Ut
                                                et massa mi. Aliquam in
                                                hendrerit urna. Pellentesque sit
                                                amet sapien fringilla, mattis
                                                ligula consectetur, ultrices
                                                mauris.
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
                                                consectetur adipiscing elit. Ut
                                                et massa mi. Aliquam in
                                                hendrerit urna. Pellentesque sit
                                                amet sapien fringilla, mattis
                                                ligula consectetur, ultrices
                                                mauris.
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
                                                consectetur adipiscing elit. Ut
                                                et massa mi. Aliquam in
                                                hendrerit urna. Pellentesque sit
                                                amet sapien fringilla, mattis
                                                ligula consectetur, ultrices
                                                mauris.
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
                                                consectetur adipiscing elit. Ut
                                                et massa mi. Aliquam in
                                                hendrerit urna. Pellentesque sit
                                                amet sapien fringilla, mattis
                                                ligula consectetur, ultrices
                                                mauris.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="w-[520px] h-[210px] bg-smarter1 mb-2 border-2 border-solid border-gray-300 p-3 rounded-lg">
                                    <h6 className="text-black font-bold mb-1">
                                        Kelas Saya
                                    </h6>
                                    <div className="border-t border border-gray-300 mb-3"></div>
                                    <div>
                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                            <div className="bg-white w-[180px] h-[70px] rounded-lg flex justify-center items-center">
                                                <div className="text-black flex flex-col items-center">
                                                    <p>Day Studied</p>
                                                    <p>12</p>
                                                </div>
                                            </div>
                                            <div className="bg-white w-[180px] h-[70px] rounded-lg flex justify-center items-center">
                                                <div className="text-black flex flex-col items-center">
                                                    <p>Day Studied</p>
                                                    <p>12</p>
                                                </div>
                                            </div>
                                            <div className="bg-white w-[180px] h-[70px] rounded-lg flex justify-center items-center">
                                                <div className="text-black flex flex-col items-center">
                                                    <p>Day Studied</p>
                                                    <p>12</p>
                                                </div>
                                            </div>
                                            <div className="bg-white w-[180px] h-[70px] rounded-lg flex justify-center items-center">
                                                <div className="text-black flex flex-col items-center">
                                                    <p>Day Studied</p>
                                                    <p>12</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[520px]  bg-smarter1 mb-2 border-2 border-solid border-gray-300 p-3 rounded-lg overflow-scroll">
                                    <h6 className="text-black font-bold mb-1">
                                        Riwayat Transaksi
                                    </h6>
                                    <div className="border-t border border-gray-300 mb-3"></div>
                                    {/* tabel start */}
                                    <div class="overflow-x-auto ">
                                        <table class="min-w-full divide-y divide-gray-300">
                                            <thead class="bg-gray-100">
                                                <tr>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Nama
                                                    </th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        ID
                                                    </th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Tanggal
                                                    </th>
                                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap flex items-center">
                                                        <div class="w-10 h-10 bg-purple-300 rounded-lg mr-4"></div>
                                                        <div>
                                                            <div class="text-sm font-medium text-gray-900">
                                                                Algoritma 1
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                Matematika
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                            #67829we833
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        02 Juni 2024 at 14:04
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                            Selesai
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap flex items-center">
                                                        <div class="w-10 h-10 bg-purple-300 rounded-lg mr-4"></div>
                                                        <div>
                                                            <div class="text-sm font-medium text-gray-900">
                                                                Algoritma 1
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                Matematika
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                            #67829we833
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        02 Juni 2024 at 14:04
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                            Proses
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-nowrap flex items-center">
                                                        <div class="w-10 h-10 bg-purple-300 rounded-lg mr-4"></div>
                                                        <div>
                                                            <div class="text-sm font-medium text-gray-900">
                                                                Algoritma 1
                                                            </div>
                                                            <div class="text-sm text-gray-500">
                                                                Matematika
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                                            #67829we833
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        02 Juni 2024 at 14:04
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-nowrap">
                                                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                            Batal
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* tabel end */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default HomeDash;
