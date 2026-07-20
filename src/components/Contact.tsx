import { MdArrowOutward, MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper section-container">

        <div className="contact-inner">
          {/* Left */}
          <div className="contact-left">
            <span className="section-label">Contact</span>
            <h2 className="contact-title title">
              Let's Build<br />
              <span className="display-font contact-title-italic">Something</span>
            </h2>
            <div className="section-divider"></div>
            <p className="contact-tagline">
              Open to data science internships, freelance analytics projects and AI/ML collaborations.
              Let's connect!
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <MdEmail className="contact-info-icon" />
                <a href="mailto:ujjwalvermauv2004@gmail.com" data-cursor="disable">
                  ujjwalvermauv2004@gmail.com
                </a>
              </div>
              <div className="contact-info-item">
                <MdPhone className="contact-info-icon" />
                <span>+91 8802824521</span>
              </div>
              <div className="contact-info-item">
                <MdLocationOn className="contact-info-icon" />
                <span>Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="contact-right">
            <div className="contact-card">
              <h3>Reach Me On</h3>
              <div className="contact-socials">
                <a
                  href="https://github.com/ujjwalvermaaa"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  data-cursor="disable"
                >
                  <FaGithub />
                  <span>GitHub</span>
                  <MdArrowOutward className="social-arrow" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ujjwalvermaaa"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  data-cursor="disable"
                >
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                  <MdArrowOutward className="social-arrow" />
                </a>
                <a
                  href="https://x.com/ujjwalverma05"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  data-cursor="disable"
                >
                  <FaXTwitter />
                  <span>X / Twitter</span>
                  <MdArrowOutward className="social-arrow" />
                </a>
                <a
                  href="https://www.instagram.com/ujjwalvermaaa/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  data-cursor="disable"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                  <MdArrowOutward className="social-arrow" />
                </a>
              </div>
            </div>

            <div className="contact-card contact-edu-card">
              <h3>Education</h3>
              <div className="edu-item">
                <span className="edu-degree">
                  B.Tech — Computer Science & Engineering (Data Science)
                </span>
                <span className="edu-school">
                  Bhagwan Parshuram Institute of Technology, GGSIPU
                </span>
                <div className="edu-meta">
                  <span className="edu-year">2023 – 2027</span>
                  <span className="edu-cgpa">CGPA: 9.1 / 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <span>© 2025 Ujjwal Verma · Delhi, India</span>
          <span>Designed & Built by Ujjwal Verma</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;
