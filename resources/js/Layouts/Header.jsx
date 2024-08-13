import React from "react";
import lamp from "../assets/image/others/lamp.png";

const Header = () => {
    return (
        <header className="relative">
            <div className="bg-gradient-to-r from-smarter5 to-smarter7 rounded-b-[20px]">
                <div>
                    <div className="text-white pl-[115px] pb-[31px]">
                        <div className="text-3xl font-bold py-[12px]">
                            Apa itu SmarTer?
                        </div>
                        <div className="text-[14px] w-[650px] ">
                            SmarTer didirikan pada tanggal 26 Febuari 2024 oleh
                            lima orang mahasiswa Universitas Gunadarma yang
                            mengikuti program P2MW, SmarTer menggambarkan
                            dirinya sebagai sebuah lampu yang siap menerangi
                            jalan pendidikan di Indonesia, Kami bergerak pada
                            sektor Pendidikan dan fokus pada pembinaan dan
                            pengembangan anak-anak muda di Indonesia
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate("/")}>
                <svg
                    viewBox="0 0 56 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute  w-[30px]  left-[40px] top-[40px] "
                >
                    <rect
                        x="54.5"
                        y="46"
                        width="53.5"
                        height="45"
                        rx="22"
                        transform="rotate(-180 54.5 46)"
                        stroke="white"
                        stroke-width="2"
                    />
                    <path
                        d="M18 23.5L25.7778 31M18 23.5L25.7778 16M18 23.5L37.5 23.5"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
            <div>
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute w-[50px] right-[300px] top-[140px]   "
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="50"
                        fill="url(#paint0_linear_288_542)"
                    />
                    <ellipse
                        cx="32"
                        cy="68.5"
                        rx="30"
                        ry="31.5"
                        transform="rotate(-180 32 68.5)"
                        fill="url(#paint1_linear_288_542)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_288_542"
                            x1="50"
                            y1="0"
                            x2="50"
                            y2="100"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#DAA3DE" />
                            <stop offset="0.5" stop-color="#705888" />
                            <stop offset="1" stop-color="#765878" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_288_542"
                            x1="32"
                            y1="37"
                            x2="32"
                            y2="100"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#765878" />
                            <stop offset="0.5" stop-color="#A87DAB" />
                            <stop offset="1" stop-color="#DAA3DE" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    viewBox="0 0 60 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[30px]  absolute left-[40px] top-[0px]"
                >
                    <circle cx="24" cy="10" r="24" fill="#8074A1" />
                    <circle cx="48" cy="12" r="12" fill="#8074A1" />
                </svg>
                <svg
                    width="10"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-[60px]"
                >
                    <circle cy="12" r="12" fill="#8074A1" />
                </svg>
                <svg
                    width="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 righ left-1/2"
                >
                    <circle cx="12" cy="12" r="12" fill="#8074A1" />
                </svg>
                <svg
                    width="44"
                    viewBox="0 0 74 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" absolute top-0  right-[280px] "
                >
                    <circle
                        cx="37"
                        r="37"
                        fill="url(#paint0_linear_60_1729)"
                        fill-opacity="0.3"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_60_1729"
                            x1="27.3757"
                            y1="-30.3699"
                            x2="37"
                            y2="37"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F2DFE8" />
                            <stop offset="0.5" stop-color="#8074A1" />
                            <stop offset="1" stop-color="#5F2D47" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    viewBox="0 0 71 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[41px] absolute right-[230px] top-0"
                >
                    <ellipse
                        cx="35.5"
                        rx="35.5"
                        ry="37"
                        transform="rotate(-180 35.5 0)"
                        fill="url(#paint0_linear_60_1711)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_60_1711"
                            x1="35.5"
                            y1="-37"
                            x2="35.5"
                            y2="37"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F2DFE8" />
                            <stop offset="0.5" stop-color="#8074A1" />
                            <stop offset="1" stop-color="#5F2D47" />
                        </linearGradient>
                    </defs>
                </svg>
                <svg
                    width="41"
                    viewBox="0 0 66 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-0"
                >
                    <circle
                        cx="50"
                        cy="24"
                        r="50"
                        transform="rotate(-180 50 24)"
                        fill="#765878"
                    />
                    <circle cx="12" cy="52" r="12" fill="#8074A1" />
                </svg>
                <svg
                    viewBox="0 0 127 173"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[70px] absolute right-0 top-[120px]"
                >
                    <ellipse
                        cx="83"
                        cy="86.5"
                        rx="83"
                        ry="86.5"
                        transform="rotate(-180 83 86.5)"
                        fill="url(#paint0_linear_60_1709)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_60_1709"
                            x1="61.4104"
                            y1="15.5"
                            x2="84.8189"
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
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[10px] absolute right-[100px] top-[140px]"
                >
                    <circle cx="12" cy="12" r="12" fill="#8074A1" />
                </svg>
            </div>

            <img
                src={lamp}
                alt="Logo Smarter"
                className="w-[100px] absolute top-[40px] right-[110px]  "
            />
        </header>
    );
};

export default Header;
