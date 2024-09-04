import InputError from "@/Components/InputError";
import InputLabel from "@/Components/auth/register/InputLabel";

import TextInput from "@/Components/auth/register/TextInput";
import { Head, Link, useForm, router } from "@inertiajs/react";
import anime from "animejs";

import "animate.css";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import { Button } from "flowbite-react";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",

        password: "",
        rememberme: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    const handleAnimation = (e) => {
        e.preventDefault();

        anime
            .timeline({
                duration: 400, // Durasi animasi (dalam milidetik)
                loop: false,
                easing: "easeInOutQuad", // Efek transisi
            })

            .add({
                targets: ".first",

                left: "-50%",
            })
            .add({
                targets: ".second",
                delay: 400,
                left: "-50%",
            })
            .add(
                {
                    targets: ".third",

                    right: "-50%",
                },
                "-=400"
            )
            .add(
                {
                    targets: ".fourth",

                    top: "-50%",
                    complete: () => {
                        // Setelah animasi selesai, arahkan ke halaman baru
                        router.visit("/login");
                    },
                },
                "-=400"
            );
    };

    useEffect(() => {
        anime
            .timeline({
                duration: 400, // Durasi animasi (dalam milidetik)
                easing: "easeInOutQuad", // Efek transisi
            })
            .add({
                targets: ".player ",
                right: "10%",
            })
            .add({
                targets: ".player ",
                right: "15%",
            });
    }, []);

    return (
        <>
            <Head title="Register" />

            <main className="bg-white min-h-screen relative overflow-x-hidden">
                <img
                    src="/auth/dot-up.png"
                    className="fourth absolute z-10 right-0 top-0 animate__animated animate__slideInDown"
                    alt=""
                />
                <img
                    src="/auth/left-cloud.png"
                    className="first absolute z-20 opacity-100 transition-all left-0 top-0 animate__animated animate__slideInLeft animate__delay-1s w-[30%] h-screen"
                    alt=""
                />
                <img
                    src="/auth/dot-left.png"
                    className="second transition-all absolute z-10 left-0 h-screen animate__animated animate__slideInLeft"
                    alt=""
                />
                <img
                    src="/auth/cloud-right-top.png"
                    alt=""
                    className="third absolute z-10 right-0 top-0 animate__animated h-[80%] animate__slideInRight animate__delay-1s"
                />
                <img
                    src="/auth/cloud-right-bot.png"
                    alt=""
                    className="third absolute z-10 right-0 bottom-0 animate__animated h-[40%] animate__slideInRight animate__delay-1s"
                />
                <section className="flex      text-smarter10   ">
                    <div className="w-[526px] third player fixed top-10 -right-[50%] ">
                        <h1 className="font-semibold text-7xl">Sign up</h1>
                        <h2 className="font-normal mt-2 text-2xl">
                            Welcome Back
                        </h2>
                        <p>
                            Have an account?{" "}
                            <Link onClick={handleAnimation} href="/login">
                                Sign in
                            </Link>
                        </p>
                        <p>It takes less than a minute.</p>
                        <form onSubmit={submit}>
                            <div className="mt-5">
                                <InputLabel htmlFor="name" value="Name" />
                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-2 block max-w-[586px] w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-5">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-2 block max-w-[586px] w-full"
                                    autoComplete="password"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-5 flex items-center gap-2">
                                <Checkbox
                                    name={"rememberme"}
                                    id="rememberme"
                                    value={data.rememberme}
                                    onChange={(e) =>
                                        setData("rememberme", e.target.value)
                                    }
                                    className="rounded-full"
                                />
                                <InputLabel
                                    htmlFor="rememberme"
                                    className="text-base"
                                    value="Remember Me"
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-5">
                                <button className="bg-[#6A5898] w-full text-white text-center rounded-[20px] p-3">
                                    Sign Up
                                </button>
                            </div>
                            <div className="mt-5 flex gap-3 items-center">
                                <div className="border  border-t-black w-full h-0" />
                                <span>or</span>
                                <div className="border  border-t-black w-full h-0" />
                            </div>
                            <div className="mt-5">
                                <button className=" border border-black w-full   text-center rounded-[20px] p-3">
                                    <img
                                        src="/google-icon.png"
                                        className="mx-auto"
                                    />
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
