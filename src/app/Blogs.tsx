import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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


export const Blogs = () => {

  return (
    <div className="container mx-auto px-6">

      {/* Blogs List */}
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Blogs</h2>
      {
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
      }
    </div>
  );
};

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

        <div className="sm:flex">

          <div className="basis-40 sm:basis-56" >
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
                className="block px-5 py-3 text-center text-xs font-bold uppercase 
              bg-gradient-to-r from-purple-500 via-indigo-600 to-pink-500 text-white hover:from-purple-600 hover:via-indigo-700 hover:to-pink-600
              rounded-l group relative items-center overflow-hidden"
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
        </div>
      </article>
    </motion.div>
  )
}