import React from "react";
import { pembayaran1 } from "@/Helper/Images";
import Footer from "@/Components/Footer";
import Navdash from "@/Layouts/Dashboard/Navdash";

const Pembayarankosong = () => {
    return (
        <>
            <Navdash />
            <section>
                <main className=" bg-white h-screen pt-10  ">
                    <div className="ml-20">
                        <h4 className="text-2xl font-semibold text-black">
                            Keranjang Belanja
                        </h4>
                        <p className="text-black mb-2">
                            0 barang dalam keranjang
                        </p>
                        <div className="w-[1200px] h-[400px] bg-smarter1 flex flex-col justify-center items-center gap-3">
                            <img
                                src={pembayaran1}
                                alt=""
                                className="w-[310px]"
                            />
                            <p className="text-black font-bold text-[13px]">
                                Keranjang kamu kosong. Yuk, jelajahi SmarTer dan
                                temukan kebutuhanmu!
                            </p>
                            <div className="w-[130px] h-11 bg-smarter7 rounded-lg flex justify-center items-center text-[14px] text-white font-bold">
                                Jelajahi Smarter
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </section>
        </>
    );
};

export default Pembayarankosong;
