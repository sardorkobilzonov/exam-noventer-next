import Image from 'next/image'
import React from 'react'
import Work from "../assets/Work.png"
import Team from "../assets/Team.png"
import Cofee from "../assets/Coffee.png"

const ServicesGrid = () => {
  return (
    <section className="container bg-custom mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <Image
              src = {Team}
              alt="Service 1"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">Boshlang'ich</h3>
            <p className="text-gray-400 mb-2">Biz - mijozlar bilan ishlashda va qo'llab-quvvatlashda ajoyib</p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <Image
              src={Work}
              alt="Service 2"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">Uzoq muddatli loyihalar</h3>
            <p className="text-gray-400 mb-2">
              Mijozlar bilan uzoq muddatli hamkorlik munosabatlarini o'rnatishga harakat qilamiz
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-6 rounded-lg">
            <Image
              src={Cofee}
              alt="Service 3"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-white text-xl font-bold mb-2">Jamoaviy hamkorlikda</h3>
            <p className="text-gray-400 mb-2">Jamoaviy tajriba va bilimlar boshqalardan farqlanishga yordam beradi</p>
          </div>
        </div>
      </section>
  )
}

export default ServicesGrid