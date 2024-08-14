import React from "react";
import Navdash from "@/Layouts/Navdash";
import Sidebar from "@/Layouts/Sidebar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
} from "flowbite-react";

const Dash = () => {
    return (
        <>
            <nav>
                <Navdash />
            </nav>
            <main className="bg-smarter8">
                <div className="flex">
                    {/* ===== Side Bar */}
                    <Sidebar />
                    <div className="flex px-10 py-5 gap-4">
                        {/* Kelas */}
                        <div className="bg-smarter1 w-[500px] h-[851px] rounded-[20px] border-2 border-slate-400 p-4 ">
                            <h6 className="font-semibold text-black text-[20px] mb-[12px] ">
                                Kelas Saya
                            </h6>
                            <div className="border-t border-2 border-gray-300 w-[460px]  mb-[13px]"></div>
                            <div className="flex flex-col gap-4 ">
                                <div className="bg-white w-[460px] rounded-xl py-[22px] pl-[12px]">
                                    <h2 className="text-[14px] font-semibold text-black pb-2">
                                        Biologi
                                    </h2>
                                    <p className="text-[14px] w-[430px] text-black mb-5">
                                        Modul Biologi
                                    </p>

                                    <a
                                        href="https://drive.google.com/file/d/1xhNBo71pBtyg9ezSxCEECz-vG3kzneGc/view?usp=drive_link"
                                        target="_blank"
                                        className="text-white bg-gradient-to-r from-smarter5 to-smarter7  font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Read More
                                    </a>
                                </div>
                                <div className="bg-white w-[460px] rounded-xl py-[22px] pl-[12px]">
                                    <h2 className="text-[14px] font-semibold text-black pb-2">
                                        Pemahaman Bacaan Dan Menulis
                                    </h2>
                                    <p className="text-[14px] w-[430px] text-black mb-5">
                                        Modul Pemahaman Bacaan Dan Menulis
                                    </p>

                                    <a
                                        href="https://drive.google.com/drive/folders/1eoJrKXR4dVBmI9dknXiQZe-JlSTwTT0-?usp=drive_link"
                                        target="_blank"
                                        className="text-white bg-gradient-to-r from-smarter5 to-smarter7  font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Read More
                                    </a>
                                </div>
                                <div className="bg-white w-[460px] rounded-xl py-[22px] pl-[12px]">
                                    <h2 className="text-[14px] font-semibold text-black pb-2">
                                        Penalaran Umum
                                    </h2>
                                    <p className="text-[14px] w-[430px] text-black mb-5">
                                        Modul Penalaran Umum
                                    </p>

                                    <a
                                        href="https://drive.google.com/drive/folders/1GdjW_Ig6h-Y5vfCGY983bnbUpPzo4bIB?usp=drive_link"
                                        target="_blank"
                                        className="text-white bg-gradient-to-r from-smarter5 to-smarter7  font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Read More
                                    </a>
                                </div>
                                <div className="bg-white w-[460px] rounded-xl py-[22px] pl-[12px]">
                                    <h2 className="text-[14px] font-semibold text-black pb-2">
                                        Pengetahuan dan Pemahaman Umum
                                    </h2>
                                    <p className="text-[14px] w-[430px] text-black mb-5">
                                        Modul Pengetahuan dan Pemahaman Umum
                                    </p>

                                    <a
                                        href="https://drive.google.com/drive/folders/1d8ieO4i84JqH3T3BF1hPy8Be3NBfnpb2?usp=drive_link"
                                        target="_blank"
                                        className="text-white bg-gradient-to-r from-smarter5 to-smarter7  font-medium rounded-lg text-sm px-5 py-2.5"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Aktivitas */}
                        <div className="flex flex-col gap-5">
                            <div className="bg-smarter1 w-[500px] h-[313px] rounded-[20px] border-2 border-slate-400 p-[17px]">
                                <h6 className="font-semibold text-black text-[20px] mb-[12px] ">
                                    Aktivitas
                                </h6>
                                <div className="border-t border-2 border-gray-300 w-[460px] mx-auto mb-[13px]"></div>
                                <div className="flex justify-around flex-wrap gap-3">
                                    <div className="bg-white w-[200px] h-[95px] flex flex-col justify-center items-center text-black font-semibold rounded-xl">
                                        <h6>Days Studied</h6>
                                        <p>12</p>
                                    </div>
                                    <div className="bg-white w-[200px] h-[95px] flex flex-col justify-center items-center text-black font-semibold rounded-xl">
                                        <h6>Study Streak</h6>
                                        <p>12</p>
                                    </div>
                                    <div className="bg-white w-[200px] h-[95px] flex flex-col justify-center items-center text-black font-semibold rounded-xl">
                                        <h6>Last Session</h6>
                                        <p>2</p>
                                    </div>
                                    <div className="bg-white w-[200px] h-[95px] flex flex-col justify-center items-center text-black font-semibold rounded-xl">
                                        <h6>Total item Studied</h6>
                                        <p>12</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-smarter1 w-[500px] h-full rounded-[20px] border-2 border-slate-400 p-[17px]">
                                <h6 className="font-semibold text-black text-[20px] mb-[12px] ">
                                    Riwayat Transaksi
                                </h6>
                                <div className="border-t border-2 border-gray-300 w-[460px] mx-auto mb-[13px]"></div>
                                <div className="overflow-x-auto">
                                    <Table>
                                        <TableHead>
                                            <TableHeadCell>Nama</TableHeadCell>
                                            <TableHeadCell>ID</TableHeadCell>
                                            <TableHeadCell>
                                                Tanggal
                                            </TableHeadCell>
                                            <TableHeadCell>
                                                Status
                                            </TableHeadCell>
                                        </TableHead>
                                        <TableBody className="divide-y">
                                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {"Algoritma"}
                                                </TableCell>
                                                <TableCell>#678wewew</TableCell>
                                                <TableCell>
                                                    02 juni 2024 14:00
                                                </TableCell>
                                                <TableCell>Selesai</TableCell>
                                            </TableRow>{" "}
                                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {"Algoritma"}
                                                </TableCell>
                                                <TableCell>#678wewew</TableCell>
                                                <TableCell>
                                                    02 juni 2024 14:00
                                                </TableCell>
                                                <TableCell>Selesai</TableCell>
                                            </TableRow>{" "}
                                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                                    {"Algoritma"}
                                                </TableCell>
                                                <TableCell>#678wewew</TableCell>
                                                <TableCell>
                                                    02 juni 2024 14:00
                                                </TableCell>
                                                <TableCell>Selesai</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dash;
