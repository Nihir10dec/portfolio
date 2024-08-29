import { CardBody, CardContainer, CardItem } from "@/components/Card/3DCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Tag } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Enhancing React Projects with AWS Cognito",
    excerpt: "We’ll cover how to actually integrate it into your React project and the functions we can use to make it functional.",
    date: "2023-10-11",
    readTime: "2 min read",
    image: "/cognito-react.avif",
    link: "https://blogs.demandhelm.com/enhancing-react-projects-with-aws-cognito-interation/"
  },
  {
    id: 2,
    title: "AWS Cognito User Pool Creation: Step-by-Step Guide",
    excerpt: "We will delve into the process of creating a User Pool in AWS Cognito",
    date: "2023-10-06",
    readTime: "4 min read",
    image: "/user-pool.png",
    link: "https://blogs.demandhelm.com/aws-cognito-user-pool-creation/"
  },
  {
    id: 3,
    title: "AWS Cognito -Advantages, Pricing and Insights",
    excerpt: "Amazon Cognito, a serverless authentication service for our applications. With Cognito, there’s no need to manage any databases or servers to handle user data and authentication workflows",
    date: "2023-09-22",
    readTime: "4 min read",
    image: "/amazon-cognito.jpg",
    link: "https://blogs.demandhelm.com/aws-cognito-advantages-pricing-insights/"
  },
  {
    id: 4,
    title: "Microsoft Clarity: A Game Changer for UX Research and Customer Experience",
    excerpt: "Microsoft Clarity, a free, data-driven, and powerful analytics tool",
    date: "2023-05-15",
    readTime: "7 min read",
    image: "/clarity.png",
    link: "https://blogs.demandhelm.com/microsoft-clarity/"
  },
  {
    id: 5,
    title: "Indian “Lok Sabha” Candidate Analysis",
    excerpt: "This is not just an analysis which party has won or lost but focuses on some basic personal details of the candidates stood in Lok Sabha 2019 Elections like",
    date: "2020-10-11",
    readTime: "10 min read",
    image: "/loksabha.webp",
    link: "https://medium.com/@nihir_shah/lok-sabha-2019-candidate-analysis-e56f1f37ac76"
  },
  {
    id: 6,
    title: "Managing Azure Instances With Telegram Bot Using Python-Part 2",
    excerpt: "Just send a command to your Telegram Bot to control your Azure Instance",
    date: "2020-08-24",
    readTime: "8 min read",
    image: "https://nihirshah.netlify.app/img/portfolio/azure/azure.jpg",
    link: "https://medium.com/@nihir_shah/managing-azure-instances-with-telegram-bot-using-python-part-2-f9a19923132d"
  },
];

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
    tags: ["HTML", "CSS",],
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

export const ProjectBlogs = () => {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="container mx-auto px-6">
      {/* <h2 className="text-4xl font-bold mb-12 text-center text-indigo-800">Projects & Blogs</h2> */}

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <nav className="inline-flex rounded-md shadow-sm" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${activeTab === 'projects'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('blogs')}
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${activeTab === 'blogs'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-50'
              }`}
          >
            Blogs
          </button>
        </nav>
      </div>

      {/* Projects Grid */}
      {activeTab === 'projects' && (
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
      )}

      {/* Blogs List */}
      {activeTab === 'blogs' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </motion.div>
      )}
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
            className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex"
    >

      <article className="flex bg-white transition hover:shadow-xl">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
          >
            <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric' })}</span>
            <span className="w-px flex-1 bg-gray-900/10"></span>
            <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <Image
            alt={blog.title}
            src={blog.image}
            className="aspect-square h-full w-full object-contain"
            width='100'
            height='100'
            unoptimized={true}
          />
        </div>

        <div className="flex flex-1 flex-col justify-between w-full">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <Link href={blog.link} target="_blank" rel="noopener noreferrer">
              <h3 className="font-bold uppercase text-gray-900">
                {blog.title}
              </h3>
            </Link>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
              {blog.excerpt}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-between">
            <span className="mt-2 pl-4 pb-2 text-sm/relaxed text-gray-500 flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {blog.readTime}
            </span>
            <Link
              className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400 rounded-l group relative items-center overflow-hidden"
              href={blog.link} target="_blank"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              <span className="text-sm font-medium transition-all group-hover:me-4"> Read Blog </span>
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  )
}