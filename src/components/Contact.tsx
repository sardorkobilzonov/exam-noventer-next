import React from "react"

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-3">Biz bilan aloqa</h2>
        <p className="text-gray-300 text-center mb-16">
          Loyihangizni qanday realizatsiya qilish haqida batafsil suhbatlashamiz
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team section */}
          <div className="bg-[#1a1129] rounded-lg p-6 border border-purple-800/20">
            <h3 className="text-white text-2xl font-bold mb-6">Bizning jamoa haqida</h3>
            <div className="grid grid-cols-3 gap-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-[#31283e] p-3 rounded-lg">
                  <div className="w-full aspect-square bg-white rounded-md mb-2"></div>
                  <p className="text-white text-sm font-medium">Xusanov Alibek</p>
                  <p className="text-gray-400 text-xs">Developer</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation form */}
          <div className="bg-[#1a1129] rounded-lg p-6 border border-purple-800/20">
            <h3 className="text-white text-2xl font-bold mb-4">Bepul konsultatsiya</h3>
            <p className="text-gray-300 text-sm mb-6">
              Loyihangiz bo'yicha boshlang'ich bepul konsultatsiya uchun ma'lumotingizni qoldiring.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full bg-[#31283e] text-white p-3 rounded-md border border-purple-800/30 placeholder-gray-400"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Telefon raqamingiz"
                  className="w-full bg-[#31283e] text-white p-3 rounded-md border border-purple-800/30 placeholder-gray-400"
                />
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition font-medium">
                Jo'natish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
