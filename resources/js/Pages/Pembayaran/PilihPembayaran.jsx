import React from "react";
import Footer from "@/Components/Footer";
import Navdash from "@/Layouts/Dashboard/Navdash";
const PilihPembayaran = () => {
       return (
           <>
               <Navdash />
               <section>
                   <main className=" bg-white h-screen pt-10  ">
                       <div className="ml-20">
                           <h4 className=" mb-6 text-2xl font-semibold text-black">
                               Pilih Pembayaran
                           </h4>

                           <div className="w-[1200px] h-[400px] bg-smarter1 flex flex-col justify-center items-center gap-3">

                           </div>
                       </div>
                   </main>
                   <Footer />
               </section>
           </>
       );
};

export default PilihPembayaran;
