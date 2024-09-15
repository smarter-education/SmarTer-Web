import React from "react";
// icon
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { sponsor } from "@/Helper/Images";
const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-smarter7 to-smarter4 h-full ">
            <div className="p-10 px-16 flex ">
                <div className="flex  flex-col lg:flex-row">
                    <div className="flex justify-start flex-col mr-[300px]">
                        <p className="text-white my-2">SmarTer</p>
                        <div className="flex gap-3">
                            <div class="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                                <a href="" target="_blank">
                                    <FaFacebookF
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            textAlign: "center",
                                            boxSizing: "border-box",
                                            color: "white",
                                        }}
                                    />
                                </a>
                            </div>
                            <div class="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                                <a href="" target="_blank">
                                    <FaTiktok
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            textAlign: "center",
                                            boxSizing: "border-box",
                                            color: "white",
                                        }}
                                    />
                                </a>
                            </div>
                            <div class="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                                <a href="" target="_blank">
                                    <FaLinkedinIn
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            textAlign: "center",
                                            boxSizing: "border-box",
                                            color: "white",
                                        }}
                                    />
                                </a>
                            </div>
                            <div class="w-11 h-11 rounded-full border border-white flex items-center justify-center">
                                <a href="" target="_blank" a>
                                    <FaYoutube
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                            textAlign: "center",
                                            boxSizing: "border-box",
                                            color: "white",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex ">
                        <div class="h-full border-l border-gray-300 mx-4"></div>
                        <div>
                            <p className="text-[13px]  text-white">
                                Nomor Induk Berusaha: 0403240102979
                            </p>
                            <p className="text-[13px] text-white w-[360px]">
                                Alamat: RT 07 RW 09 Kp. Kelapa Dua, Kelurahan
                                Tugu, Kec. Cimanggis, Kota Depok 16451, rumah
                                no. 48
                            </p>
                            <div className="pt-10 text-[13px] text-white">
                                <p>Funded by : Kemahasiswa.Dikti</p>
                                <p>Supported by : Gunadarma</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-300 my-4 mt-[-10px]"></div>
            <div className="flex justify-end">
                <img src={sponsor} alt="" className="w-80 pb-2 pr-10" />
            </div>
        </footer>
    );
};

export default Footer;
