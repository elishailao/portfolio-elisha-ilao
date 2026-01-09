export default function About() {
  const technicalSkills = ["React.js", "React Native (Expo)", "JavaScript", "TypeScript", "C++", "Python", "HTML", "CSS", "Node.js", "Firebase", "MongoDB", "UI/UX Implementation", "Web App Development"]
  const designSkills = ["UI Design", "UX Research", "Figma","Canva"]
  const softSkills = ["Communication", "Leadership", "Teamwork", "Problem-Solving", "Adaptability", "Time Management", "Creativity", "Critical Thinking"]

  return (
    <>
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <div className="about-left">
              <h2 className="section-title">About Me</h2>
              <div className="about-text">
                <p>
                  I’m Elisha Grace R. Ilao, a Computer Science student and creative technologist with a strong interest in building meaningful, 
                  functional, and visually engaging digital experiences. I enjoy working across development, design, and collaboration to 
                  transform ideas into user-focused solutions.
                </p>
                <p>
                  My journey in technology began in high school, where a subject project introduced me to website development. 
                  That experience sparked my interest not only in coding, but also in design, usability, and how digital products are planned and structured. 
                  Since then, I’ve continued developing my skills through academic projects, exploring modern web technologies while paying close attention 
                  to user experience and clean, effective design.
                </p>
                <p>
                  Beyond technical work, I enjoy taking on leadership roles in group projects, helping organize tasks, communicate ideas, 
                  and guide teams toward shared goals. I’m motivated by continuous learning, collaboration, and the opportunity to grow as a 
                  versatile professional in the tech industry.
                </p>
              </div>
            </div>

            <div className="about-right">
              <h2 className="skills-title">Skills</h2>
              <div className="skills-grid">
                <div>
                  <h3>Technical Skills</h3>
                  <div className="skill-card">
                    {technicalSkills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>Design</h3>
                  <div className="skill-card">
                    {designSkills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3>Soft Skills</h3>
                  <div className="skill-card">
                    {softSkills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  )
}
