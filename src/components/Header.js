"use client"

import { useState } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Header({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsOpen(false)
    }
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
  ]

  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="logo">Portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-menu" style={{ display: window.innerWidth >= 768 ? "flex" : "none" }}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ display: window.innerWidth < 768 ? "flex" : "none" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <button
          onClick={toggleDarkMode}
          className="dark-mode-toggle"
          aria-label="Toggle dark mode"
          title={darkMode ? "Light mode" : "Dark mode"}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-items">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mobile-menu-item ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
