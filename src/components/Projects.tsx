import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Tourmad loyihasi",
      description:
        "Tourmad — O'zbekistonning turli turizm markazlarini maqsadida ishlab chiqilgan bir veb-sayt bo'lib, barcha xizmat turi va boshqa joylarga oid ma'lumotlar mavjud. Bu yerda siz o'zingiz uchun bir necha sayohat rejalarini tuzishingiz, Mashhada sayohat qilish uchun haydovchilar xizmat va boshqa ko'plab xizmatlarni o'z ichiga oladi. Bundan tashqari sayohat qilishdan oldin ma'lumotlar olishingiz mumkin.",
      image: Project1
    },
    {
      id: 2,
      title: "ProRun loyihasi",
      description:
        "ProRun.uz - bu saytda tez-tez bo'lib o'tadigan yugurish bo'yicha musobaqalar bo'lib o'tadi va siz ulardan xabardor bo'lib turish istagan yoki har bir musobaqada qatnashishingiz mumkin. Nima uchun sport qilaman? Musobaqalarda qatnashchilar bo'lgan boshqa odamlar va boshqa qatnashchilarni ro'yxatdan o'tishni oson qilish uchun yangi veb-sayt ishlab chiqildi.",
      image: Project2
    },
    {
      id: 3,
      title: "Xalq trans loyihasi",
      description:
        "Bu yerda esa yana ko'proq ma'lumotlar berilishi kerak. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: Project3
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 bg-gradient-to-b">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-3">Loyihalarimiz</h2>
        <p className="text-gray-300 text-center mb-16">Biz haqimizdagi gaplar</p>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center `}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-lg overflow-hidden border border-purple-800/20">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <button className="bg-purple-900/50 hover:bg-purple-800/50 text-white px-6 py-3 rounded-md transition flex items-center space-x-2 border border-purple-800/30">
                  <span>Loyihani ko'rish</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700 transition">
            Barcha loyihalarni ko'rish
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
