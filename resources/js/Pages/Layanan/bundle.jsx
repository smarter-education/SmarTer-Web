import { Rating, RatingStar } from "flowbite-react";
import Navdash from "@/Layouts/Dashboard/Navdash";
import React from "react";
import {
    biologi,
    ekonomi,
    geografi,
    kimia,
    matematika,
    fisika,
    sejarah,
    sosiologi,
    time,
} from "@/Helper/Images";
import Footer from "@/Components/Footer";

const bundle = () => {
    return (
        <>
            <Navdash />
            <section className="bg-white h-full">
                <div className="text-center pt-20 text-black flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-[40px] w-[670px] mb-4">
                        Pilih Bundel Layanan Pembelajaran Online
                    </h3>
                    <p className="w-[520px] font-light text-[14px]">
                        Belajar dari tutor-tutor terbaik dan berpengalaman di
                        berbagai bidang studi, dengan jadwal yang fleksibel
                        sesuai kebutuhanmu.
                    </p>
                </div>
                <div className="my-20 mx-[60px]">
                    <p className="font-bold text-black text-[24px] mb-[17px]">
                        Bundle
                    </p>
                    <div className="flex flex-wrap justify-around gap-3">
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="p-4">
                                <p className="font-bold text-[14px]">
                                    Paket MIPA 10
                                </p>
                                <p className="text-[12px]">
                                    Perkuat pemahaman Anda dalam mata pelajaran
                                    MIPA untuk kelas 10.
                                </p>
                                <div className="border-b-2  my-4"></div>
                                <div className="">
                                    <div className="flex mb-1">
                                        <img
                                            src={matematika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px] "
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Matematika Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={fisika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Fisika Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={kimia}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Kimia Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={biologi}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Biologi Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={time}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            180 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b-2 mb-1"></div>
                                <div className="flex p-1 gap-2">
                                    <p className="text-black font-bold text-[14px] ml-1">
                                        Rp 120.000
                                    </p>
                                    <button className="text-[#5B91E8] py-1 px-4 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="p-4">
                                <p className="font-bold text-[14px]">
                                    Paket IPS 10
                                </p>
                                <p className="text-[12px]">
                                    Tingkatkan pengetahuan Anda dalam bidang
                                    ilmu sosial untuk kelas 10
                                </p>
                                <div className="border-b-2  my-4"></div>
                                <div className="">
                                    <div className="flex mb-1">
                                        <img
                                            src={ekonomi}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px] "
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Ekonomi Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={geografi}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Geografi Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={sejarah}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Sejarah Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={sosiologi}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Sosiologi Kelas 10
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={time}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            180 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b-2 mb-1"></div>
                                <div className="flex p-1 gap-2">
                                    <p className="text-black font-bold text-[14px] ml-1">
                                        Rp 120.000
                                    </p>
                                    <button className="text-[#5B91E8] py-1 px-4 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="p-4">
                                <p className="font-bold text-[14px]">
                                    Paket Komprehensif UTBK-SNBT
                                </p>
                                <p className="text-[12px]">
                                    Persiapkan diri Anda secara menyeluruh untuk
                                    menghadapi UTBK-SNBT
                                </p>
                                <div className="border-b-2  my-4"></div>
                                <div className="">
                                    <div className="flex mb-1">
                                        <img
                                            src={matematika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px] "
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Pengetahuan Kuantitatif (UTBK-SNBT)
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={fisika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Penalaran Umum (UTBK-SNBT)
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={kimia}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Pemahaman Pengetahuan Umum
                                            (UTBK-SNBT)
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={biologi}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Pemahaman membaca dan menulis
                                            (UTBK-SNBT)
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={time}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            180 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b-2 mb-1"></div>
                                <div className="flex p-1 gap-2">
                                    <p className="text-black font-bold text-[14px] ml-1">
                                        Rp 120.000
                                    </p>
                                    <button className="text-[#5B91E8] py-1 px-4 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="p-4">
                                <p className="font-bold text-[14px]">
                                    Paket Literasi UTBK-SNBT
                                </p>
                                <p className="text-[12px]">
                                    Fokus pada peningkatan kemampuan literasi
                                    Anda untuk UTBK-SNBT
                                </p>
                                <div className="border-b-2  my-4"></div>
                                <div className="">
                                    <div className="flex mb-1">
                                        <img
                                            src={matematika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px] "
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Literasi Bahasa Indonesia
                                            (UTBK-SNBT)
                                        </p>
                                    </div>
                                    <div className="flex mb-1">
                                        <img
                                            src={fisika}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            Literasi Bahasa Indonesia
                                            (UTBK-SNBT)
                                        </p>
                                    </div>

                                    <div className="flex mb-1">
                                        <img
                                            src={time}
                                            alt=""
                                            className="mr-2 object-cover h-[16.4px] w-[16px]"
                                        />
                                        <p className="text-[12px] font-semibold">
                                            180 Hari
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="border-b-2 mb-1"></div>
                                <div className="flex p-1 gap-2">
                                    <p className="text-black font-bold text-[14px] ml-1">
                                        Rp 120.000
                                    </p>
                                    <button className="text-[#5B91E8] py-1 px-4 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-20 mx-[60px]">
                    <p className="font-bold text-black text-[24px] mb-[17px]">
                        Bundel Mata Pelajaran
                    </p>
                    <div className="pb-10 flex flex-wrap justify-start gap-4 mx-auto">
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={matematika}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Matematika Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Penguasaan Aljabar dan Geometri
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 25.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={fisika}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Fisika Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Dasar-dasar Mekanika dan Termodinamika
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 25.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={kimia}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Kimia Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Eksplorasi Struktur Atom dan Reaksi
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 25.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={biologi}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Biologi Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Mengenal Keanekaragaman Hayati
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 35.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={ekonomi}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Ekonomi Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Konsep Dasar Mikro dan Makroekonomi
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 35.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={geografi}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Geografi Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Menjelajahi Bumi dan Fenomenanya
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 40.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={sejarah}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Sejarah Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Perjalanan Peradaban Manusia
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 30.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                        <div className="border-2 border-slate-200 w-[293px] h-full rounded-lg text-black">
                            <div className="flex justify-between p-[10px] ">
                                <div className="flex ">
                                    <img
                                        src={sosiologi}
                                        alt=""
                                        className="object-cover h-[24.4px] w-[26.21px]"
                                    />
                                    <p className="font-bold text-[14px] ml-1 mt-[2px]">
                                        Sosiologi Kelas 10
                                    </p>
                                </div>
                                <div className="text-slate-300 flex text-[11px] gap-1 mt-1">
                                    <p>|</p>
                                    <p className="">180 Hari</p>
                                </div>
                            </div>
                            <div className="px-[10px] -mt-2 mb-10">
                                <p className="text-[12px]">
                                    Memahami Masyarakat dan Interaksinya
                                </p>
                                <Rating className="w-[76px] h-3">
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar />
                                    <RatingStar filled={false} />
                                </Rating>
                            </div>
                            <div className="border-b-2 mb-1"></div>
                            <div className="flex p-1 gap-2">
                                <p className="text-black font-bold text-[14px] ml-1">
                                    Rp 25.000
                                </p>
                                <button className="text-[#5B91E8] py-1 px-5 rounded-lg text-[14px] bg-smarter1 -mt-1">
                                    Buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default bundle;
