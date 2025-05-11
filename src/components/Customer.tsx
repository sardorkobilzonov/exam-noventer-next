import { Users } from "lucide-react"
import Image from "next/image"
import Frame from "../assets/Frame 89.png"

const CRMPages = () => {
  return (
    <section className="bg-gradient-to-r from-[#1E0B33] rounded-2xl to-[#2A1245] relative overflow-hidden mx-120">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 p-8 lg:p-16 relative">
            <h2 className="text-white text-4xl font-bold mb-10">CRM Sahifalari</h2>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                  </div>
                  <h3 className="text-white text-xl font-medium">Mijozlar ma'lumotlari</h3>
                </div>
                <p className="text-gray-300 ml-9 text-sm">
                  Mijozlar haqida muhim ma'lumotlarni to'plash va saqlash uchun mo'ljallangan.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                  </div>
                  <h3 className="text-white text-xl font-medium">Mijozlar bilan muloqot</h3>
                </div>
                <p className="text-gray-300 ml-9 text-sm">
                  Mijozlar bilan samarali aloqa o'rnatish va ularni qo'llab-quvvatlashga imkon beradi.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center mr-3">
                    <div className="w-3 h-3 bg-purple-600 rounded-sm"></div>
                  </div>
                  <h3 className="text-white text-xl font-medium">Tahlil</h3>
                </div>
                <p className="text-gray-300 ml-9 text-sm">
                  Mijozlar haqida to'plangan ma'lumotlarni tahlil qilish va qarorlar qabul qilishga yordam beradi.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-2 text-gray-400 text-sm">
              <p>Texnik vazifa tayyorlab berish: 5-10 kun</p>
              <p>Sayt sahifalar soni: 10 yoki undan yuqori</p>
              <p>Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500</p>
            </div>

            <button className="mt-8 bg-white text-purple-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Buyurtma berish
            </button>

            {/* CRM icon in background */}
            <div className="absolute bottom-10 right-10 text-gray-500 opacity-10">
              <Users size={150} />
            </div>
          </div>

          {/* Right side - Image placeholder (not needed as per user request) */}
          <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <Image
                src={Frame}
                alt="Development setup"
                width={220}
                height={150}
                className="w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CRMPages
