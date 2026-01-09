"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import lipair1 from "../images/LipaAir 1.jpg"
import lipair2 from "../images/LipaAir 2.jpg"
import lipair3 from "../images/LipaAir 3.jpg"
import lipair4 from "../images/LipaAir 4.jpg"
import lipair5 from "../images/LipaAir 5.jpg"
import invent1 from "../images/Inventory 1.jpg"
import invent2 from "../images/Inventory 2.jpg"
import invent3 from "../images/Inventory 3.jpg"
import invent4 from "../images/Inventory 4.jpg"
import invent5 from "../images/Inventory 5.jpg"
import invent6 from "../images/Inventory 6.jpg"
import invent7 from "../images/Inventory 7.jpg"
import invent8 from "../images/Inventory 8.jpg"
import invent9 from "../images/Inventory 9.jpg"
import eat1 from "../images/Eat 1.jpg"
import eat2 from "../images/Eat 2.jpg"
import eat3 from "../images/Eat 3.jpg"
import eat4 from "../images/Eat 4.jpg"
import eat5 from "../images/Eat 5.jpg"
import eat6 from "../images/Eat 6.jpg"
import eat7 from "../images/Eat 7.jpg"
import eat8 from "../images/Eat 8.jpg"
import resort1 from "../images/Resort 1.png"
import resort2 from "../images/Resort 2.png"
import resort3 from "../images/Resort 3.png"
import resort4 from "../images/Resort 4.png"
import immed from "../images/Immed.jpg"
import apply from "../images/Apply.jpg"
import volunteer from "../images/Vol.jpg"
import sampleImg from "../images/sample.png"
import ImageModal from "./ImageModal"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "LIPAiR CAST",
      description:
        "IoT-based air quality monitoring and volcanic smog forecasting system developed as an undergraduate thesis. Led front-end development and UI/UX design for the real-time dashboard, integrating sensor data visualization and LSTM-powered predictions.",
      images: [
        lipair1,
        lipair2,
        lipair3,
        lipair4,
        lipair5,
      ],
      tags: ["React", "Firebase", "IoT", "LSTM", "UI/UX"],
    },
    {
      id: 2,
      title: "IMMEDIAID",
      description:
        "Community-based disaster risk management and preparedness mobile app. Built complete front-end with React Native featuring real-time disaster updates, GPS-based evacuation center locator, emergency hotlines, and SOS alerts with live location sharing.",
      images: [
        immed,
      ],
      tags: ["React Native", "GPS", "Real-time Updates", "Mobile App"],
    },
    {
      id: 3,
      title: "iApply",
      description:
        "Job finder mobile application built with React Native, integrating real-time job listings from API job sources. Features smooth navigation for job browsing, detailed job information viewing, and streamlined application submission process.",
      images: [
        apply,
      ],
      tags: ["React Native", "API", "Mobile App"],
    },
    {
      id: 4,
      title: "iVolunteer",
      description:
        "Role-based volunteer management platform built with React Native. Supports full CRUD operations for volunteer profiles, events, and attendance tracking with real-time notifications for organizers and secure access control for admins and volunteers.",
      images: [
        volunteer
      ],
      tags: ["React Native", "CRUD", "Real-time Notifications", "Mobile App"],
    },
    {
      id: 5,
      title: "SavorEat",
      description:
        "Full-stack restaurant reservation system built with React.js featuring role-based access for admins and users. Includes authentication, password recovery, table availability lookup, and comprehensive reservation management with mobile-friendly UI design.",
      images: [
        eat1, 
        eat2, 
        eat3, 
        eat4, 
        eat5, 
        eat6, 
        eat7,
        eat8,
      ],
      tags: ["React.js", "Node.js", "MySQL", "Authentication"],
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "Complete inventory tracking solution built with React.js supporting full CRUD operations for items, category filtering, advanced searching, and sorting. Features low-stock detection alerts, comprehensive form validations, and modular component architecture.",
      images: [
        invent9,
        invent1, 
        invent2,
        invent3,
        invent4,
        invent5,
        invent6,
        invent7,
        invent8,
      ],
      tags: ["React.js", "State Management", "Data Filtering"],
    },
    {
      id: 7,
      title: "Madonna's Resort Booking",
      description:
        "Database-driven resort booking website built with PHP and MySQL. Provides seamless room availability lookup, reservation management, and booking verification with separate user and admin panels for comprehensive resort management capabilities.",
      images: [
        resort1, 
        resort2, 
        resort3, 
        resort4
      ],
      tags: ["PHP", "MySQL", "Web Development"],
    },
  ]

  return (
    <>
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  )
}

function ProjectCard({ project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStartIndex, setModalStartIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <>
      <div className="project-card">
      <div className="project-carousel">
        <img
          src={project.images[currentImageIndex] || sampleImg}
          alt={`${project.title} - slide ${currentImageIndex + 1}`}
          className="carousel-image"
          onClick={() => {
            setModalStartIndex(currentImageIndex)
            setModalOpen(true)
          }}
          style={{ cursor: "pointer" }}
        />
        <button onClick={prevImage} className="carousel-nav carousel-prev" aria-label="Previous image">
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>
        <button onClick={nextImage} className="carousel-nav carousel-next" aria-label="Next image">
          <ChevronRight size={20} strokeWidth={1.5} />
        </button>
        <div className="carousel-indicators">
          {project.images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      </div>
      {modalOpen && (
      <ImageModal
        images={project.images.length ? project.images : [sampleImg]}
        initialIndex={modalStartIndex}
        onClose={() => setModalOpen(false)}
      />
      )}
    </>
  )
}
