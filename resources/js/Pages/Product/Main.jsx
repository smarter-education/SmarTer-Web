import React, { useState } from "react";

import Navdash from "@/Layouts/Dashboard/Navdash";
import DropdownButton from "@/Components/product/DropdownButton";
import SearchBar from "@/Components/product/SearchBar";
import Card from "@/Components/product/Card";
import Footer from "@/Components/Footer";

const Main = () => {
    const [formValues, setFormValues] = useState({
        mapel: "",
        kelas: "",
        search: "",
    });

    const handleMapelChange = (value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            mapel: value,
        }));
    };
    const handleKelasChange = (value) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            kelas: value,
        }));
    };

    const updateFormValues = (newValues) => {
        setFormValues({ ...formValues, ...newValues });
    };

    return (
        <>
            <Navdash />
            <section className="bg-white min-h-screen  py-8 px-12">
                {/* <Breadcrumb /> */}
                <h1 className="text-4xl font-bold text-[#474747]">
                    Bentuk Masa Depanmu, Hari Ini!
                </h1>
                <p className="text-[#4F4E4E]">
                    Pilih dari berbagai modul yang akan membantumu mengembangkan
                    keterampilan dan pengetahuan untuk meraih impianmu
                </p>
                <div className="flex justify-between  mt-6 items-center">
                    <div className="flex gap-4 items-center">
                        <DropdownButton
                            onChange={handleMapelChange}
                            className={"w-44"}
                            name={"Mata Pelajaran"}
                            options={[
                                { value: "Matematika" },
                                { value: "IPA" },
                            ]}
                        />
                        <DropdownButton
                            onChange={handleKelasChange}
                            name={"Kelas"}
                            className={"w-24"}
                            options={[{ value: "2IA19" }, { value: "3IA01" }]}
                        />
                    </div>
                    <SearchBar
                        formValues={formValues}
                        updateFormValues={updateFormValues}
                    />
                </div>
                <div className="grid mt-5 border-y-2 py-6 grid-cols-4 gap-4">
                    {new Array(8).fill(0).map(() => {
                        return <Card />;
                    })}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Main;
