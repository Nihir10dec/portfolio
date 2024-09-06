'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';

interface Skill {
  name: string;
  logo: string;
  level: number;
  color: string;
}

const SkillsList: Skill[] = [
  { name: 'React', logo: '/react.png', level: 90, color: 'text-blue-500' },
  { name: 'JavaScript', logo: '/javascript.png', level: 85, color: 'text-green-500' },
  { name: 'TypeScript', logo: '/typescript.png', level: 80, color: 'text-blue-700' },
  { name: 'Node.js', logo: '/nodejs.png', level: 75, color: 'text-green-600' },
  { name: 'Redux', logo: '/redux.png', level: 70, color: 'text-yellow-500' },
  { name: 'AWS', logo: '/aws.png', level: 55, color: 'text-yellow-600' },

  { name: 'HTML', logo: '/html.png', level: 85, color: 'text-orange-500' },
  { name: 'CSS', logo: '/css.png', level: 80, color: 'text-blue-600' },
  { name: 'Styled Components', logo: '/styled-components.png', level: 80, color: 'text-pink-600' },
  { name: 'Git', logo: '/git.png', level: 75, color: 'text-yellow-500' },
  { name: 'Storybook', logo: '/storybook.png', level: 75, color: 'text-pink-600' },
  { name: 'Figma', logo: '/figma.png', level: 70, color: 'text-red-500' },

  { name: 'Vite', logo: '/vite.png', level: 65, color: 'text-purple-600' },
  { name: 'MySQL', logo: '/mysql.png', level: 70, color: 'text-blue-400' },
  { name: 'Tailwind CSS', logo: '/tailwind.png', level: 55, color: 'text-blue-600' },
  { name: 'Next JS', logo: '/next.png', level: 50, color: 'text-black-400' },
  { name: 'Python', logo: '/python.png', level: 85, color: 'text-yellow-600' },
  { name: 'Express JS', logo: '/express.png', level: 50, color: 'text-black-400' },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  return (
    <section className="min-h-screen py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-8">
          {SkillsList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="relative w-20 h-20 md:w-32 md:h-32 xl:w-44 xl:h-44">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-400"
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className={skill.color}
                    strokeWidth="10"
                    stroke="currentColor"
                    fill="transparent"
                    r="45"
                    cx="50"
                    cy="50"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - skill.level / 100)}`}
                    strokeLinecap="round"
                    style={{
                      transition: 'stroke-dashoffset 0.5s ease-in-out',
                      transform: 'rotate(-90deg)',
                      transformOrigin: 'center'
                    }}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={60}
                    height={60}
                    className="rounded-full bg-white p-2"
                  />
                </div>
                <AnimatePresence>
                  {hoveredSkill === skill && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-full"
                    >
                      <span className="text-white font-bold text-2xl">{skill.level}%</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <span className="mt-2 text-gray-800 font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}