'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

import { FloatingDock } from '@/components/FloatingDock'
import { BackgroundBeamsWithCollision } from '@/components/HeroBackground'
import Navbar from './Navbar'
import EducationExperience from './Education-Experience'
import { Projects } from "./Projects";
import Skills from "./Skills";
import { Blogs } from './Blogs'

const links = [
  {
    title: "Mail",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:nihir10dec@gmail.com",
  },

  {
    title: "LinkedIn",
    icon: (
      <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/nihir-shah",
  },
  {
    title: "GitHub",
    icon: (
      <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/nihir10dec",
  },
];

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section id="about" className="min-h-screen pt-16 relative overflow-hidden">

        <BackgroundBeamsWithCollision>
          <h2 className="text-2xl relative z-20 font-bold text-center text-black dark:text-white font-sans tracking-tight">

            <div className="relative mx-auto md:text-4xl lg:text-7xl inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 hover:from-pink-500 hover:via-violet-500 hover:to-purple-500 transition-colors duration-300 ease-in-out [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Nihir Praful Shah</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 hover:from-pink-500 hover:via-violet-500 hover:to-purple-500 transition-colors duration-300 ease-in-out py-4">
                <span className="">Nihir Praful Shah</span>
              </div>
            </div>

            {/* <div className="md:text-2xl lg:text-5xl">Senior Software Engineer</div> */}
            <div className="md:text-2xl lg:text-5xl text-purple-700 dark:text-purple-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 mt-4">Senior Manager at Kotak Securities</div>
            <div className="md:text-xl lg:text-3xl text-indigo-600 dark:text-indigo-300 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-300 mt-2">(React JS, Next JS, Node JS, AWS)</div>


          </h2>
        </BackgroundBeamsWithCollision>

      </section>

      {/* Education & Experience Section */}
      <section id="experience" className="min-h-screen py-8 flex items-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100">
        <EducationExperience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-16 flex items-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
        <Projects />
      </section>
      {/* Blogs Section */}
      <section id="blogs" className="min-h-screen py-16 flex items-center bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100">
        <Blogs />
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-16 flex items-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">

        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Nihir Shah. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <FloatingDock
              items={links}
            />

          </div>
        </div>
      </footer>
    </div>
  )
}

