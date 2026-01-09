import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-section">
            <h3>About</h3>
            <p>
              Creative developer who enjoys building user-focused digital experiences and 
              collaborating with teams to bring ideas to life
            </p>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={18} />
                <span>(+63) 920 565 1158</span>
              </div>
              <div className="contact-item">
                <MapPin size={18} />
                <span>Lipa City, Batangas, Philippines, 4217</span>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <a href="mailto:ilao.elishagrace04@gmail.com">ilao.elishagrace04@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#certificates">Certificates</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="https://github.com/elishailao" className="social-icon" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ilao-elisha-grace/" className="social-icon" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/elishagrace.ilao/" className="social-icon" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://mail.google.com/mail/u/4/#inbox" className="social-icon" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider">
          <p>&copy; 2026 Elisha Ilao. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
