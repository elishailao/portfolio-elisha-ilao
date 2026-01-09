"use client"

import profileImg from "../images/profile.jpg"

export default function Hero() {
  const scrollToFooter = () => {
    const footer = document.querySelector("footer")
    footer?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    const about = document.getElementById("about")
    about?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="hero-title-highlight">Elisha Ilao</span>
            </h1>
            <p>Computer Science student driven to build impactful digital solutions through development, design, and collaboration.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={scrollToFooter}>
                Get in Touch
              </button>
              <button className="btn-secondary" onClick={scrollToAbout}>
                Learn About Me</button>
            </div>
          </div>

          <div className="hero-image">
            <img src={profileImg} alt="Elisha's profile" className="profile-image" />
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  )
}
