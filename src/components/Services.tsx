import { ArrowUpRight, Briefcase, FileText, LayoutGrid, ShoppingCart, Users } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <section className="container mx-auto px-4 py-12">
    <h2 className="text-white text-3xl font-bold text-center mb-8">Xizmat turlari</h2>
    <p className="text-gray-400 text-center mb-12">
      Dasturlash sohasidagi eng so'nggi xizmat turlarini taqdim etamiz
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <FileText className="text-purple-500" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Landing sahifalar</h3>
            <p className="text-gray-400">Biznes uchun maqsadli sahifalar, mijozlarni jalb qilishga yordam beradi.</p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <Briefcase className="text-purple-500" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Korporativ veb-sayt</h3>
            <p className="text-gray-400">
              Kompaniyangiz uchun professional ko'rinishli sayt, xizmatlar va mahsulotlar haqida ma'lumot.
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <ShoppingCart className="text-purple-500" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Online do'kon</h3>
            <p className="text-gray-400">
              Mahsulotlar yoki xizmatlarni onlayn sotish uchun, to'lov tizimlari va yetkazib berish xizmatlari bilan.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <Users className="text-purple-500" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">CRM tizimi</h3>
            <p className="text-gray-400">
              Mijozlar bilan munosabatlarni boshqarish va kuzatish uchun, barcha kommunikatsiya jarayonlarini nazorat
              qilish.
            </p>
          </div>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <LayoutGrid className="text-purple-500" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Portfolio saytlari</h3>
            <p className="text-gray-400">
              Shaxsiy yoki kompaniya ishlarini ko'rsatish, Freelancerlar yoki bizneslar uchun.
            </p>
          </div>
          <div className="bg-purple-600 p-8 rounded-lg">
            <div className="bg-purple-700 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <ArrowUpRight className="text-white" size={32} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Alohida loyiha mi?</h3>
            <p className="text-white opacity-80 mb-4">
              Biz bilan bog'laning va loyihangiz haqida gaplashamiz. Har qanday murakkablikdagi loyihalarni amalga
              oshirishga tayyormiz.
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition">
              Bog'lanish
            </button>
          </div>
        </div>
      </section>
  )
}

export default Services