import Footer from "../components/Footer";
import Header from "../components/Header";

import { Linkedin, Github } from "lucide-react";

export default function Gallery() {
  return (
    <div className="flex flex-col items-center w-full bg-[#FCF1F3]">
      <Header />

      {/* Servicios */}
      <section className="flex flex-col items-center mb-10 mt-16 w-[90%]">
        {/* <h1 className="text-3xl sm:text-4xl md:text-6xl text-pink-600 font-bold text-center mt-8 mb-8">
          Nuestros Trabajos
        </h1> */}
        

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-10 text-center">
        
        {/* Renach */}
        <div className="flex flex-col justify-start items-center w-full min-h-72">
            <div className="w-52 h-52 rounded-full border-2 border-pink-600 bg-white">
            </div>
            <h2 className="text text-pink-600 mt-8 text-4xl font-bold">Renata Neyra</h2>
            <p className="text text-pink-600/90 italilc mt-4 text-2xl">Nail Artist</p>
        </div>
        {/* Yop */}
        <div className="flex flex-col justify-start items-center w-full min-h-72">
            <div className="w-52 h-52 rounded-full border-2 border-pink-600 bg-white">
            </div>
            <h2 className="text text-pink-600 mt-8 text-4xl font-bold">Lucía Saint Martin</h2>
            <p className="text text-pink-600/90 italilc mt-4 text-2xl">Web Developer</p>
            <div className="flex flex-row justify-center items-center text-pink-600 text-medium mt-4">
                <Linkedin className="h-5 w-5 mr-2"/><a href="https://www.linkedin.com/in/lucia-saint-martin">https://www.linkedin.com/in/lucia-saint-martin</a>
            </div>
            <div className="flex flex-row justify-center items-center text-pink-600 text-medium mt-2">
                <Github className="h-5 w-5 mr-2"/><a href="https://github.com/LuStMartin03">https://github.com/LuStMartin03</a>
            </div>
                
        </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}