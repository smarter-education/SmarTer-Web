import React from "react";
import { smarterlogo, sponsor } from "@/Helper/Images";
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
    return (
        <footer className="bg-smarter1">
            <img src={smarterlogo} alt="" className="w-[300px]" />
            <div className="flex pb-10 justify-around">
                <div className="">
                    <p className="text-black font-bold text-2xl  ">ADDRESS</p>
                    <p className="text-black text-[12px] font-normal w-[400px]  ">
                        Alamat: RT 07 RW 09 Kp. Kelapa Dua, Kelurahan Tugu, Kec.
                        Cimanggis, Kota Depok 16451, rumah no. 48
                    </p>
                    <div className="flex  mt-4 gap-2">
                        <FaFacebookSquare
                            style={{
                                width: "25px",
                                height: "25px",
                                color: "#4F4E4E",
                            }}
                        />
                        <AiFillTikTok
                            style={{
                                width: "25px",
                                height: "25px",
                                color: "#4F4E4E",
                            }}
                        />
                        <FaLinkedin
                            style={{
                                width: "25px",
                                height: "25px",
                                color: "#4F4E4E",
                            }}
                        />
                        <FaYoutube
                            style={{
                                width: "25px",
                                height: "25px",
                                color: "#4F4E4E",
                            }}
                        />
                    </div>
                </div>
                <div>
                    <p className="text-black mb-4">Tentang Kami</p>
                    <p className="text-black mb-4">Hubungi Kami</p>
                    <p className="text-black">FAQ</p>
                </div>
                <div>
                    <p className="text-black ">Funded by : Kemahasiswa.Dikti</p>
                    <p className="text-black">Supported by : Gunadarma</p>
                    <img
                        src={sponsor}
                        alt=""
                        className="w-[200px] h-[30px] mt-4"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
