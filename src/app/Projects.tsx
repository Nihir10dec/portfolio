import { CardBody, CardContainer, CardItem } from "@/components/Card/3DCard";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio",
    description: "Old Portfolio project",
    image: "/portfolio-old.gif",
    tags: ["HTML", "CSS", "Portfolio"],
    link: "https://nihirshah.netlify.app/"
  },
  {
    id: 2,
    title: "Managing Azure VM with Telegram Bot ",
    description: "Real Time rates of the Top 100 Crypto-Currency",
    image: "https://nihirshah.netlify.app/img/portfolio/azure/azure.jpg",
    tags: ["Microsoft Azure", "Python", "Telegram", "pyTelegramBotAPI",],
    link: "https://medium.com/@nihir_shah/managing-azure-instances-with-telegram-bot-using-python-part-2-f9a19923132d"
  },
  {
    id: 3,
    title: "Currency Exchange Rates",
    description: "A simple website for checking currency exchange rates.",
    image: "https://nihirshah.netlify.app/img/portfolio/currex/currex.png",
    tags: ["React JS", "Material UI", "AlphaVantage API"],
    link: "https://currencyexchangerates.netlify.app/"
  },
  {
    id: 4,
    title: "Lok Sabha 2019 Candidate Analysis",
    description: "Analysis on personal information of Lok Sabha 2019 Candidates",
    image: "https://nihirshah.netlify.app/img/portfolio/loksabha/loksabha.jpeg",
    tags: ["Python", "Pandas", "Numpy", "MatlplotLib", "Seaborn"],
    link: "https://jovian.ml/nihir10dec/lok-sabha-2019-candidates-analysis"
  },
  {
    id: 5,
    title: "Top 100 Crypto-Currency",
    description: "Real Time rates of the Top 100 Crypto-Currency",
    image: "https://nihirshah.netlify.app/img/portfolio/topcrypto/topcrypto.png",
    tags: ["Vue JS", "VueX", "Vuetify"],
    link: "https://github.com/Nihir10dec/top100crypto"
  },
  {
    id: 6,
    title: "Time For Quiz",
    description: "A Quiz website with variety of questions and difficulty level.",
    image: "https://nihirshah.netlify.app/img/portfolio/quiz/quiz.jpg",
    tags: ["Vue JS", "BootStrap", "OpenTDB API"],
    link: "https://github.com/Nihir10dec/quiz/"
  }
]

export const Projects = () => {

  return (
    <div className="container mx-auto px-6">

      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Projects</h2>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>

    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={project.title}
            unoptimized={project.image.endsWith('gif')}
          />
        </CardItem>
        <div className="flex flex-wrap gap-2 mt-10">
          {project.tags.map((tag: string, index: number) => (
            <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end items-center mt-10">
          <CardItem
            translateZ={20}
            as="button"
            onClick={() => window.open(project.link)}
            className="px-4 py-2 rounded-xl text-xs font-bold
            bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 text-white hover:from-purple-600 hover:via-indigo-700 hover:to-pink-600"
          >
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}