import { Link, Head } from "@inertiajs/react";
import { Carousel } from "flowbite-react";
// page
import Dotline from "@/Components/Dotline";
import Homesvg from "@/Components/Homesvg";
import Header from "@/Layouts/Header";
import Footer from "@/Layouts/Footer";
// Images
import {
    bg1,
    bg2,
    hero,
    course2,
    course1,
    vt,
    vb,
    circle,
    circle2,
    circlebot,
    banner1,
    banner2,
    banner3,
    lamp,
} from "@/Helper/Images";
import Paket from "@/Components/Paket";

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            {/* ===== Hero Section ===== */}
            <section className="bg-[#FBF3FF] h-screen relative">
                <nav className="bg-transparent">
                    <div className="container mx-auto flex items-center justify-between bg-transparent absolute">
                        {/* Logo */}
                        <div className="flex items-center space-x-2  mx-6">
                            <img
                                src={lamp}
                                alt="SmarTer Logo"
                                className="h-8 w-8"
                            />
                            <span className="text-xl font-bold text-smarter5">
                                SmarTer
                            </span>
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 mx-6">
                            <input
                                type="text"
                                placeholder="Cari kursus pembelajaran"
                                className="w-full px-4 py-2 text-sm text-gray-900  border border-gray-300 rounded-full focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex space-x-12 bg-transparent ">
                            <a
                                href="#"
                                className="text-black w hover:text-purple-900"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="text-black w hover:text-purple-900"
                            >
                                Product
                            </a>
                            <a
                                href="#"
                                className="text-black w hover:text-purple-900"
                            >
                                Learning Path
                            </a>
                            <a
                                href="#"
                                className="text-black w hover:text-purple-900"
                            >
                                About Us
                            </a>
                        </div>

                        <div>
                            <button className=" mx-6 py-1 w-40 text-sm font-semibold text-purple-700 bg-white border border-purple-700 rounded-full hover:bg-purple-100">
                                Log in
                            </button>
                        </div>
                    </div>
                </nav>
                {/* ===== Background =====*/}
                <div className="flex justify-between h-screen ">
                    <div className="flex items-end ">
                        <img src={bg2} className="h-[300px]" />
                    </div>
                    <div>
                        <img src={bg1} className="h-screen w-[789px] " />
                    </div>
                </div>
                {/* Hero */}
                <div className="flex absolute top-[200px]">
                    <div className="w-[450px] ml-20">
                        <div className="text-smarter5 font-semibold w-[600px] text-[60px] leading-none pb-2">
                            Belajar Tanpa Batas dengan SmarTer
                        </div>
                        <div className="text-smarter4 font-light w-[350px] text-[12px]">
                            Persiapkan Diri untuk Masa Depan yang Cemerlang
                            dengan Program Pendidikan Berkualitas dari SmarTer.
                        </div>
                    </div>
                    <div>
                        <img
                            src={hero}
                            className="w-[350px] ml-48 select-none"
                        />
                    </div>
                </div>
                <div>
                    <Homesvg />
                </div>
            </section>
            {/* ===== Program Section ===== */}
            <section className="bg-smarter1 h-screen py-5">
                <div className="mb-10">
                    <Dotline />
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-start justify-between">
                        <div className="md:w-1/3 mb-6 md:mb-0">
                            <h4 className="text-2xl font-medium text-smarter6 mb-2">
                                Program terbaru kami
                            </h4>
                            <p className="text-sm text-smarter5 font-medium max-w-xs">
                                Program terbaru kami Bekerja sama dengan
                                partner, kami menyelenggarakan beberapa program
                                untuk mendukung anak muda di Indonesia.
                            </p>
                        </div>
                        <div className="md:w-9/12 ">
                            <div className="relative">
                                <Carousel
                                    slideInterval={2000}
                                    className="rounded-lg overflow-hidden h-52"
                                >
                                    <img src={banner1} alt="..." />
                                    <img src={banner2} alt="..." />
                                    <img src={banner3} alt="..." />
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white mt-5">
                    <div className="mb-10">
                        <h2 className="text-smarter5 font-semibold text-3xl ml-20 pt-6">
                            Paket Populer
                        </h2>
                        <div className="">
                            <Paket />
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== Course Section ===== */}
            <section className="bg-smarter1 relative">
                <div className="pb-10 pt-28 text-center">
                    <h1 className="font-bold text-[32px] text-smarter6">
                        Pilih Mata Pelajaran
                    </h1>
                </div>
                <div className="bg-white w-[800px]  mx-auto rounded-2xl border-4  ">
                    <div className="flex flex-wrap justify-evenly p-10">
                        <div className="rounded-lg bg-smarter1 w-[190px] h-[240px] border-2 border-slate mb-4">
                            <figure>
                                <img src={course1} />
                            </figure>
                            <div className="p-2">
                                <h2 className="text-center text-black font-semibold text-xl">
                                    Matematika
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg bg-smarter1 w-[190px] h-[240px] border-2 border-slate">
                            <figure>
                                <img src={course2} />
                            </figure>
                            <div className="p-2">
                                <h2 className="text-center text-black font-semibold text-xl">
                                    Biologi
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg bg-smarter1 w-[190px] h-[240px] border-2 border-slate">
                            <figure>
                                <img src={course1} />
                            </figure>
                            <div className="p-2">
                                <h2 className="text-center text-black font-semibold text-xl">
                                    Fisika
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg bg-smarter1 w-[190px] h-[240px] border-2 border-slate">
                            <figure>
                                <img src={course1} />
                            </figure>
                            <div className="p-2">
                                <h2 className="text-center text-black font-semibold text-xl">
                                    Kimia
                                </h2>
                            </div>
                        </div>
                        <div className="rounded-lg bg-smarter1 w-[190px] h-[240px] border-2 border-slate">
                            <figure>
                                <img src={course1} />
                            </figure>
                            <div className="p-2">
                                <h2 className="text-center text-black font-semibold text-xl">
                                    Bahasa Inggris
                                </h2>
                            </div>
                        </div>
                        <div className="flex justify-center items-center rounded-lg bg-gradient-to-b from-smarter5 to-smarter7 w-[190px] h-[240px] border-2 border-slate">
                            <div className="">
                                <h2 className="text-2xl text-white">
                                    Lihat Semua
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===== SVG ===== */}
                <div>
                    <svg
                        viewBox="0 0 62 79"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-14 h-14 left-14 bottom "
                    >
                        <ellipse
                            cx="26.1578"
                            cy="52.3057"
                            rx="25.2568"
                            ry="26.324"
                            transform="rotate(-180 26.1578 52.3057)"
                            fill="url(#paint0_linear_119_531)"
                        />
                        <ellipse
                            cx="48.9245"
                            cy="13.1754"
                            rx="12.4505"
                            ry="12.8062"
                            transform="rotate(-180 48.9245 13.1754)"
                            fill="url(#paint1_linear_119_531)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_119_531"
                                x1="26.1578"
                                y1="25.9817"
                                x2="26.1578"
                                y2="78.6296"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_119_531"
                                x1="48.9245"
                                y1="0.36919"
                                x2="48.9245"
                                y2="25.9817"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        viewBox="0 0 51 156"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[30px] absolute bottom-[40px] z-10"
                    >
                        <ellipse
                            cy="132.846"
                            rx="21.3438"
                            ry="22.4109"
                            transform="rotate(-180 0 132.846)"
                            fill="url(#paint0_linear_119_532)"
                        />
                        <ellipse
                            cx="-8.53737"
                            cy="61.7001"
                            rx="59.051"
                            ry="61.5411"
                            transform="rotate(-180 -8.53737 61.7001)"
                            fill="url(#paint1_linear_119_532)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_119_532"
                                x1="0"
                                y1="110.435"
                                x2="0"
                                y2="155.257"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#765878" />
                                <stop offset="0.5" stop-color="#A87DAB" />
                                <stop offset="1" stop-color="#DAA3DE" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_119_532"
                                x1="-23.8975"
                                y1="11.1865"
                                x2="-7.24331"
                                y2="123.049"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <img
                        src={vt}
                        alt=""
                        className="absolute left-0 top-0 w-[380px]"
                    />
                    <img
                        src={circle2}
                        alt=""
                        className="absolute right-0 top-0 w-[200px]"
                    />
                    <img
                        src={circle}
                        className="absolute top-0 right-10 w-[100px]"
                    />
                    <img
                        src={vb}
                        alt=""
                        className="absolute right-0 bottom-[240px] w-[300px]"
                    />
                    <svg
                        viewBox="0 0 84 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 bottom-[230px] z-10 w-[70px]"
                    >
                        <ellipse
                            cx="59.8103"
                            cy="61.7167"
                            rx="59.051"
                            ry="61.5411"
                            transform="rotate(-180 59.8103 61.7167)"
                            fill="url(#paint0_linear_109_1482)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_109_1482"
                                x1="44.4502"
                                y1="11.2031"
                                x2="61.1043"
                                y2="123.065"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="mb-32"></div>
                <div className="bg-smarter1 pb-10">
                    <Header />
                </div>
            </section>
            {/* ===== Layanan Section ===== */}
            <section className="bg-smarter1 relative">
                <div>
                    <Dotline />
                </div>
                <div className="bg-white mt-10 mx-5 rounded-[30px] ">
                    <div>
                        <h3 className="text-center text-[45px] bg-gradient-to-r from-smarter5 to-smarter7 bg-clip-text text-transparent font-semibold ">
                            Layanan Kami
                        </h3>
                    </div>
                    <div className="p-10 flex flex-wrap gap-10 justify-center items-center">
                        <div className="flex gap-6 w-[500px] h-[151px] bg-smarter1 text-smarter5 rounded-xl">
                            <div className="flex justify-center items-center pl-3">
                                <div className="w-[80px] h-[80px] border-4 border-smarter5 flex justify-center items-center text-6xl p-7 rounded-xl">
                                    1
                                </div>
                            </div>
                            <div>
                                <h6 className="pb-1 text-[24px] font-semibold pt-6">
                                    Kursus Pembelajaran Online
                                </h6>
                                <p className="text-[13px]">
                                    SmarTer menyediakan beragam kursus online
                                    yang mencakup berbagai topik, dirancang oleh
                                    para ahli, dengan penyajian yang mudah
                                    dipahami dan biaya terjangkau.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 w-[500px] h-[151px] bg-smarter1 text-smarter5 rounded-xl">
                            <div className="flex justify-center items-center pl-3">
                                <div className="w-[80px] h-[80px] border-4 border-smarter5 flex justify-center items-center text-6xl p-7 rounded-xl">
                                    2
                                </div>
                            </div>
                            <div>
                                <h6 className="pb-1 text-[24px] font-semibold pt-6">
                                    Try Out dan Simulasi Ujian
                                </h6>
                                <p className="text-[13px]">
                                    SmarTer menyediakan try out dan simulasi
                                    ujian, seperti UTBK dan ujian kenaikan
                                    tingkat, untuk mensimulasikan pengalaman
                                    ujian nyata dan membantu pelajar
                                    mengidentifikasi area yang perlu
                                    diperbaiki.s
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 w-[500px] h-[151px] bg-smarter1 text-smarter5 rounded-xl">
                            <div className="flex justify-center items-center pl-3">
                                <div className="w-[80px] h-[80px] border-4 border-smarter5 flex justify-center items-center text-6xl p-7 rounded-xl">
                                    3
                                </div>
                            </div>
                            <div>
                                <h6 className="pb-1 text-[24px] font-semibold pt-6">
                                    Soal Psikotes
                                </h6>
                                <p className="text-[13px]">
                                    SmarTer menyediakan layanan soal psikotes
                                    untuk membantu pelajar memahami profil
                                    psikologis, kekuatan, minat, dan kepribadian
                                    mereka, sehingga dapat membuat keputusan
                                    yang lebih baik dalam merencanakan
                                    pendidikan dan karir di masa depan.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 w-[500px] h-[151px] bg-smarter1 text-smarter5 rounded-xl">
                            <div className="flex justify-center items-center pl-3">
                                <div className="w-[80px] h-[80px] border-4 border-smarter5 flex justify-center items-center text-6xl p-7 rounded-xl">
                                    4
                                </div>
                            </div>
                            <div>
                                <h6 className="pb-1 text-[24px] font-semibold pt-6">
                                    Forum Tanya Jawab
                                </h6>
                                <p className="text-[13px]">
                                    SmarTer menyediakan forum tanya jawab
                                    interaktif bagi pelajar untuk berkonsultasi
                                    dengan ahli, tutor, dan sesama pengguna
                                    mengenai berbagai topik akademis, sehingga
                                    membantu meningkatkan pemahaman materi dan
                                    menjawab pertanyaan secara langsung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ===== SVG ===== */}
                <div>
                    <svg
                        viewBox="0 0 64 123"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[50px] absolute "
                    >
                        <ellipse
                            cx="3.78935"
                            cy="61.4756"
                            rx="59.051"
                            ry="61.5411"
                            transform="rotate(-143.052 3.78935 61.4756)"
                            fill="url(#paint0_linear_109_1442)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_109_1442"
                                x1="-11.5708"
                                y1="10.962"
                                x2="5.08341"
                                y2="122.824"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        width="24"
                        viewBox="0 0 34 119"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-0 bottom-[440px]"
                    >
                        <ellipse
                            cx="61.7469"
                            cy="59.7114"
                            rx="59.051"
                            ry="61.5411"
                            transform="rotate(90 61.7469 59.7114)"
                            fill="url(#paint0_linear_109_1483)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_109_1483"
                                x1="46.3868"
                                y1="9.1979"
                                x2="63.041"
                                y2="121.06"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#F2DFE8" />
                                <stop offset="0.5" stop-color="#8074A1" />
                                <stop offset="1" stop-color="#5F2D47" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg
                        width="43"
                        height="46"
                        viewBox="0 0 43 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute right-[300px] bottom-[250px] -z-[2px]"
                    >
                        <ellipse
                            cx="21.5469"
                            cy="23.0385"
                            rx="21.3438"
                            ry="22.4109"
                            transform="rotate(-180 21.5469 23.0385)"
                            fill="#643652"
                        />
                    </svg>
                    <img
                        src={circlebot}
                        className="absolute right-0 bottom-[270px] w-[200px]"
                    />
                </div>
                <div className="pt-[100px]">
                    <Footer />
                </div>
            </section>
        </>
    );
};

export default Homepage;
