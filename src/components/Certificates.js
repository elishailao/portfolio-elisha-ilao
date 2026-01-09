import { useState } from "react"
import cert1 from "../images/Cert 1.jpg"
import cert2 from "../images/Cert 2.jpg"
import cert3 from "../images/Cert 3.png"
import cert5 from "../images/Cert 5.png"
import cert6 from "../images/Cert 6.jpg"
import ImageModal from "./ImageModal"

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "PyTorch Bootcamp",
      issuer: "OpenCV University",
      date: "November 2025",
      image: cert3,
    },
    {
      id: 2,
      name: "Facical Expression Recognition Seminar",
      issuer: "De La Salle Lipa",
      date: "February 2025",
      image: cert6,
    },
    {
      id: 3,
      name: "Elements of AI",
      issuer: "MinnaLearn",
      date: "December 2024",
      image: cert5,
    },
    {
      id: 4,
      name: "Cybersecurity Awareness Seminar",
      issuer: "DCIT, Mapua Malayan Colleges Laguna",
      date: "June 2024",
      image: cert2,
    },
    {
      id: 5,
      name: "Cybersecurity Seminar",
      issuer: "De La Salle Lipa",
      date: "November 2024",
      image: cert1,
    },
  ]

  const [modalOpen, setModalOpen] = useState(false)
  const [modalImages, setModalImages] = useState([])
  const [modalIndex, setModalIndex] = useState(0)

  return (
    <section className="certificates" id="certificates">
      <div className="certificates-container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-card">
              <img
                src={cert.image || "/placeholder.svg"}
                alt={cert.name}
                className="cert-image"
                onClick={() => {
                  setModalImages([cert.image || "/placeholder.svg"])
                  setModalIndex(0)
                  setModalOpen(true)
                }}
                style={{ cursor: "pointer" }}
              />
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">📅 {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <ImageModal images={modalImages} initialIndex={modalIndex} onClose={() => setModalOpen(false)} />
      )}
    </section>
  )
}

