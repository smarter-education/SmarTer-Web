import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/auth/register/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/auth/register/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import anime from "animejs";
import "animate.css";
import { useEffect } from "react";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    useEffect(() => {
        anime
            .timeline({
                duration: 1000, // Durasi animasi (dalam milidetik)
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
                    className="absolute z-10 right-0 top-0 animate__animated animate__slideInDown"
                    alt=""
                />
                <img
                    src="/auth/left-cloud.png"
                    className="absolute z-20 left-0 top-0 animate__animated animate__slideInLeft animate__delay-1s w-[40%] h-screen"
                    alt=""
                />
                <img
                    src="/auth/dot-left.png"
                    className="absolute z-10 left-0 h-screen animate__animated animate__slideInLeft"
                    alt=""
                />
                <img
                    src="/auth/cloud-right-top.png"
                    alt=""
                    className="absolute z-10 right-0 top-0 animate__animated h-[80%] animate__slideInRight animate__delay-1s"
                />
                <img
                    src="/auth/cloud-right-bot.png"
                    alt=""
                    className="absolute z-10 right-0 bottom-0 animate__animated h-[40%] animate__slideInRight animate__delay-1s"
                />
                <section className="flex      text-smarter10   ">
                    <div className="w-[586px] player fixed top-10 -right-[50%] ">
                        <h1 className="font-semibold text-7xl">Sign up</h1>
                        <h2 className="font-normal mt-2 text-2xl">
                            Welcome Back
                        </h2>
                        <p>
                            Have an account?{" "}
                            <Link href="/auth/login">Sign in</Link>
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
                                <InputLabel htmlFor="name" value="Password" />
                                <TextInput
                                    id="name"
                                    type="password"
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
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
}
