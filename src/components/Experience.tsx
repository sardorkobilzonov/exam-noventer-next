import Image from "next/image"
import Exp1 from "../assets/Exp1.png"
import Exp2 from "../assets/Exp2.png"
import Exp3 from "../assets/Exp3.png"

const Experience = () => {
  return (
    <section className=" py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Tajribamiz davomida
              <br />
              <span className="text-white/80">turli xil hajmdagi</span>
              <br />
              <span className="text-purple-500">IT loyihalarini</span>
              <br />
              ishga tushira oldik
            </h2>
          </div>

          <div className="lg:w-1/2 relative h-[400px]">
            <div className="absolute right-0 top-0 w-[180px] h-[120px] md:w-[220px] md:h-[150px] rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30 border border-purple-800/20">
              <Image
                src={Exp1}
                alt="Workspace"
                width={220}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[180px] h-[120px] md:w-[220px] md:h-[150px] rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30 border border-purple-800/20">
              <Image
                src={Exp2}
                alt="Team meeting"
                width={220}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute right-12 bottom-0 w-[180px] h-[120px] md:w-[220px] md:h-[150px] rounded-2xl overflow-hidden shadow-lg shadow-purple-900/30 border border-purple-800/20">
              <Image
                src={Exp3}
                alt="Development setup"
                width={220}
                height={150}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Purple glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-700/20 blur-[100px]"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
