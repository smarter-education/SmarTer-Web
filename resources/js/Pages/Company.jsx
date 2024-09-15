import React from "react";
import { Link, Head } from "@inertiajs/react";
// Layout
import Dotline from "@/Components/Dotline";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";

// Image
import { raihan, rayina, guntur, oatse, nabil, thoriq } from "@/Helper/Images";
const Company = (props) => {
    return (
        <>
            <Head title={props.title} />
            <header className="relative">
                <div className="bg-smarter1">
                    <Header />
                    <div className="flex justify-center  py-10 ">
                        <div className="bg-white w-[85%] h-40 flex flex-col justify-center items-center">
                            <h4 className="bg-gradient-to-b from-smarter5 to-smarter7 bg-clip-text text-transparent text-3xl font-semibold">
                                “Achieve your dreams and reach your goals”
                            </h4>
                            <p className="text-black">SmarTer Motto</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly content-center pb-10">
                        <div className="w-[400px] h-50">
                            <h5 className="bg-gradient-to-b from-smarter5 to-smarter7 bg-clip-text text-transparent text-4xl font-semibold">
                                Visi
                            </h5>
                            <div class=" w-[400px]  border-2 border-smarter7"></div>
                            <p className="text-black font-light text-[15px] mt-2">
                                Menjadi Platform pendidikan terpercaya dalam
                                menyediakan pendidikan berkualitas yang
                                terjangkau bagi setiap pelajar di Indonesia
                                serta menjadi wadah untuk berkembang dan
                                tumbuhnya anak-anak muda di Indonesia
                            </p>
                        </div>
                        <div className="w-[400px] h-50">
                            <h5 className="bg-gradient-to-b from-smarter5 to-smarter7 bg-clip-text text-transparent text-4xl font-semibold">
                                Misi
                            </h5>
                            <div class=" w-[400px]  border-2 border-smarter7"></div>
                            <p className="text-black font-light text-[15px] mt-2">
                                SmarTer menghadirkan solusi pendidikan inovatif
                                dan terjangkau melalui teknologi informasi,
                                membantu setiap pelajar mencapai potensi
                                akademis dan menggapai impian mereka dengan
                                percaya diri.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <svg
                        viewBox="0 0 71 218"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[400px] w-[40px] left-0"
                    >
                        <ellipse
                            cy="186.5"
                            rx="30"
                            ry="31.5"
                            transform="rotate(-180 0 186.5)"
                            fill="url(#paint0_linear_331_541)"
                        />
                        <ellipse
                            cx="-12"
                            cy="86.5"
                            rx="83"
                            ry="86.5"
                            transform="rotate(-180 -12 86.5)"
                            fill="url(#paint1_linear_331_541)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_331_541"
                                x1="0"
                                y1="155"
                                x2="0"
                                y2="218"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#765878" />
                                <stop offset="0.5" stop-color="#A87DAB" />
                                <stop offset="1" stop-color="#DAA3DE" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_331_541"
                                x1="-33.5896"
                                y1="15.5"
                                x2="-10.1811"
                                y2="172.729"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        viewBox="0 0 60 63"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-[20px] right-[90px] top-[400px] "
                    >
                        <ellipse
                            cx="30"
                            cy="31.5"
                            rx="30"
                            ry="31.5"
                            transform="rotate(-180 30 31.5)"
                            fill="url(#paint0_linear_62_1918)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_62_1918"
                                x1="30"
                                y1="0"
                                x2="30"
                                y2="63"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#765878" />
                                <stop offset="0.5" stop-color="#A87DAB" />
                                <stop offset="1" stop-color="#DAA3DE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </header>
            <main className="bg-white relative ">
                <Dotline />
                <div class="bg-white">
                    <div className="text-center h-20 my-10">
                        <h4 className="font-medium text-[40px] leading-[80px] bg-gradient-to-r from-smarter7 to-smarter5 bg-clip-text text-transparent">
                            Team
                        </h4>
                    </div>
                    {/* card image */}
                    <div>
                        <div className="flex justify-center gap-[80px] pb-16 flex-wrap">
                            <div className="flex flex-col justify-center items-center">
                                <img
                                    className="h-[250px]"
                                    src={raihan}
                                    alt=""
                                />
                                <p className="text-black font-semibold">
                                    Muhammad Raihan
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    CEO & Founder
                                </p>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <img
                                    className="h-[250px]"
                                    src={guntur}
                                    alt=""
                                />
                                <p className="text-black font-semibold">
                                    Dr. Guntur Eka Saputra, S.T., M.M.S.I
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    Dosen Pendamping
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-[80px] pb-16 flex-wrap">
                            <div className=" flex flex-col justify-center items-center">
                                <img
                                    className="h-[250px]"
                                    src={rayina}
                                    alt=""
                                />
                                <p className="text-black font-semibold">
                                    Rayina Ilham
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    Head Product & CPO
                                </p>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <img className="h-[250px]" src={oatse} alt="" />
                                <p className="text-black font-semibold">
                                    Oatse Rizqy Hendarto
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    Head Marketing & CMO
                                </p>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <img className="h-[250px]" src={nabil} alt="" />
                                <p className="text-black font-semibold">
                                    Nabil Al Faros
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    Head Editorial & Co-Founder
                                </p>
                            </div>
                            <div className=" flex flex-col justify-center items-center">
                                <img
                                    className="h-[250px]"
                                    src={thoriq}
                                    alt=""
                                />
                                <p className="text-black font-semibold">
                                    Mikail Thoriq K. B
                                </p>
                                <p className="text-black font-light mt-[-6px] text-[14px]">
                                    Head Marketing & CTO
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Svg */}
                <svg
                    viewBox="0 0 48 167"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-[33px] right-0 top-[500px]    "
                >
                    <ellipse
                        cx="87"
                        cy="83.5"
                        rx="83"
                        ry="86.5"
                        transform="rotate(90 87 83.5)"
                        fill="url(#paint0_linear_62_1924)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_62_1924"
                            x1="65.4104"
                            y1="12.5"
                            x2="88.8189"
                            y2="169.729"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F2DFE8" />
                            <stop offset="0.5" stop-color="#8074A1" />
                            <stop offset="1" stop-color="#5F2D47" />
                        </linearGradient>
                    </defs>
                </svg>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Company;
