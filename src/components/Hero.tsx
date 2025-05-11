import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/Hero.png";
import { Briefcase, LayoutGrid, ShoppingCart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="container bg-custom mx-auto px-4 py-16 md:py-24 flex flex-col  hero">
      <div className="md:w-1/2">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Yuqori sifatdagi <br />
          aniqlikka asoslanib
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-purple-600">istalgan turdagi</span>
        </h2>
        <p className="text-white text-2xl md:text-3xl font-semibold mb-8">
          dasturlarni tayyorlaymiz
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
          Batafsil ma'lumot
        </button>
      </div>
      <div className="container mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-gray-800 p-2 rounded-md mr-3">
              <LayoutGrid className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">7+ yillik</p>
              <p className="text-gray-400 text-sm">tajriba</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-gray-800 p-2 rounded-md mr-3">
              <Users className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">5+</p>
              <p className="text-gray-400 text-sm">mijozlar soni</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-gray-800 p-2 rounded-md mr-3">
              <Briefcase className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">8+</p>
              <p className="text-gray-400 text-sm">loyihalar</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 bg-opacity-60 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="bg-gray-800 p-2 rounded-md mr-3">
              <ShoppingCart className="text-purple-500" size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-gray-400 text-sm">kafolat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
