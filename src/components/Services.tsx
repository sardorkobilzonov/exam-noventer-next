"use client"

import {
  ArrowUpRight,
  Briefcase,
  FileText,
  LayoutGrid,
  ShoppingCart,
  Users,
  BookOpen,
  Database,
  CreditCard,
} from "lucide-react"

const Services = () => {
  return (
    <section className="w-full bg-custom py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-4">Xizmat turlari</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Dasturlash sohasidagi eng so'nggi xizmat turlarini taqdim etamiz
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <FileText className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Landing sahifalar</h3>
            <p className="text-gray-400 text-sm">
              Biznes uchun maqsadli sahifalar, mijozlarni jalb qilishga yordam beradi.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <Briefcase className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Korporativ veb-sayt</h3>
            <p className="text-gray-400 text-sm">
              Kompaniyangiz uchun professional ko'rinishli sayt, xizmatlar va mahsulotlar haqida ma'lumot.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <ShoppingCart className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Online do'kon</h3>
            <p className="text-gray-400 text-sm">
              Mahsulotlar yoki xizmatlarni onlayn sotish uchun, to'lov tizimlari va yetkazib berish xizmatlari bilan.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <Users className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">CRM tizimi</h3>
            <p className="text-gray-400 text-sm">
              Mijozlar bilan munosabatlarni boshqarish va kuzatish uchun, barcha kommunikatsiya jarayonlarini nazorat
              qilish.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <LayoutGrid className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Portfolio saytlari</h3>
            <p className="text-gray-400 text-sm">
              Shaxsiy yoki kompaniya ishlarini ko'rsatish, Freelancerlar yoki bizneslar uchun.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <CreditCard className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Blog sahifalari</h3>
            <p className="text-gray-400 text-sm">
              O'z fikrlari, yangiliklarni yoki ma'lumotlarini orthoqlashish. Ma'lumot yetkazish, auditoriyani jalb
              qilish va reklama qilish uchun.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <BookOpen className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Ta'lim platformasi</h3>
            <p className="text-gray-400 text-sm">
              Ta'lim kurslar, videolar, testlar yoki onlayn darslar uchun. O'quv materiallarini saqlash va boshqarish
              uchun.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <div className="bg-gray-800 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <Database className="text-purple-500" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">ERP platformasi</h3>
            <p className="text-gray-400 text-sm">
              ERP platformasi korxona yoki tashkilot ichidagi jarayonlarni boshqarish, logistika, kadrlar hisoboti,
              ta'minotni saqlashning mo'ljallangan, ishlab chiqarish, sotishlarni kuzatish tizimlarini o'z ichiga oladi.
            </p>
          </div>

          <div className="bg-purple-600 rounded-lg p-6">
            <div className="bg-purple-700 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
              <ArrowUpRight className="text-white" size={24} />
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Alohida loyihami?</h3>
            <p className="text-white opacity-80 mb-4">
              Biz bilan bog'laning va loyihangiz haqida gaplashamiz. Har qanday murakkablikdagi loyihalarni amalga
              oshirishga tayyormiz.
            </p>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition">
              Bog'lanish
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
