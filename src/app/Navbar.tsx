'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "../components/Button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
            Nihir Shah
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href}>
                {item.name}
              </NavLink>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink key={item.name} href={item.href} onClick={toggleMenu}>
                {item.name}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

const NavLink: React.FC<{ href: string, onClick?: React.MouseEventHandler<HTMLAnchorElement>, children: React.ReactNode }> = ({ href, children, onClick }) => {
  return (
    <Link
      href={href}
      className={`text-lg font-medium text-gray-600 hover:text-indigo-800 transition-colors`}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}