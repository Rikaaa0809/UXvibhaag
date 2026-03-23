import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.BASE_URL;
const Picture25 = `${BASE_URL}Picture25.png`;
const Picture26 = `${BASE_URL}Picture26.png`;
const Picture27 = `${BASE_URL}Picture27.png`;
const Picture28 = `${BASE_URL}Picture28.png`;
const Picture29 = `${BASE_URL}Picture29.png`;
const Picture30 = `${BASE_URL}Picture30.png`;

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [hoveredBox, setHoveredBox] = useState<number | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  React.useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:niharikasharrma332244@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  // Individual project links - update these with actual project URLs
  const projects = [
    { image: Picture25, link: "/Ample", internal: true, title: "Mobile Application Design" },
    { image: Picture26, link: "https://www.behance.net/gallery/235581487/Hexa-Smart-Groceries-Assistant", internal: false, title: "System Design" },
    { image: Picture27, link: "https://www.behance.net/gallery/168101295/Redefining-Netflix-UIUX-and-Product", internal: false, title: "System Design" },
    { image: Picture28, link: "/Animation", internal: true, title: "3D Animation" },
    { image: Picture29, link: "https://www.behance.net/gallery/198885491/Product-Design-Portfolio", internal: false, title: "Product Design" },
    { image: Picture30, link: "/VideoProduction", internal: true, title: "Video Storytelling" }
  ];

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "auto",
      position: "fixed",
      top: 0,
      left: 0
    }}>
      <div style={{
        backgroundColor: "#F6EFD2",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: isTouchDevice ? "column" : "row",
        margin: 0,
        padding: isTouchDevice ? "20px 0 0 0" : 0,
        overflow: isTouchDevice ? "auto" : "hidden",
        boxSizing: "border-box"
      }}>
      {/* ===================== MOBILE LAYOUT ===================== */}
      {isTouchDevice && (
        <div style={{
          width: "100%",
          padding: "0 16px",
          boxSizing: "border-box"
        }}>
          {/* Mobile Container */}
          <div style={{
            backgroundColor: "#fff",
            borderRadius: "24px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            overflow: "hidden",
            width: "100%"
          }}>
            {/* Contact Section — reduced padding and gap for compact height */}
            <div style={{
              backgroundColor: "#F6EFD2",
              padding: "20px 20px 18px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <h1 style={{
                fontSize: "clamp(20px, 4vw, 30px)",
                marginBottom: "-24px",
                color: "#333",
                textAlign: "center"
              }}>
                Wanted to find out what happens next?
              </h1>

              <h2 style={{
                fontSize: "clamp(26px, 6vw, 42px)",
                fontWeight: "bold",
                marginBottom: "6px",
                color: "#000",
                letterSpacing: "2px",
                textAlign: "center"
              }}>
                WE WORK TOGETHER!
              </h2>

              <p style={{
                fontSize: "clamp(14px, 2.5vw, 18px)",
                marginBottom: "16px",
                color: "#555",
                textAlign: "center"
              }}>
                and continue this story
              </p>

              {/* Form — compact padding and gap */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                border: "3px solid black",
                width: "100%",
                boxSizing: "border-box"
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    border: "2px solid #333",
                    borderRadius: "5px",
                    outline: "none"
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    border: "2px solid #333",
                    borderRadius: "5px",
                    outline: "none"
                  }}
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    padding: "10px 15px",
                    fontSize: "16px",
                    border: "2px solid #333",
                    borderRadius: "5px",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit"
                  }}
                />

                <button
                  onClick={handleSubmit}
                  style={{
                    padding: "12px 30px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s"
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </div>

            {/* Projects Section — carousel */}
            <div style={{
              backgroundColor: "#000",
              padding: "28px 0 36px"
            }}>
              <h2 style={{
                fontSize: "36px",
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginBottom: "20px"
              }}>
                PROJECTS
              </h2>

              {/* Horizontal scrollable carousel */}
              <div style={{
                display: "flex",
                overflowX: "auto",
                gap: "14px",
                paddingLeft: "20px",
                paddingRight: "20px",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "none",
                scrollbarWidth: "none"
              }}>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => project.internal ? navigate(project.link) : window.open(project.link, "_blank")}
                    style={{
                      position: "relative",
                      flexShrink: 0,
                      width: "65vw",
                      maxWidth: "260px",
                      aspectRatio: "1/1",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      scrollSnapAlign: "start"
                    }}
                  >
                    <img
                      src={project.image}
                      alt={`Project ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        opacity: 0.6
                      }}
                    />
                    {/* Project title overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      right: "10px",
                      fontSize: "13px",
                      fontWeight: "bold",
                      color: "#fff",
                      textShadow: "0 1px 4px rgba(0,0,0,0.7)"
                    }}>
                      {project.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={{ marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>
            <p style={{ color: "#555", margin: 0 }}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
          </footer>
        </div>
      )}

      {/* ===================== DESKTOP LAYOUT ===================== */}
      {!isTouchDevice && (
        <>
          {/* Left Side - Contact Form */}
          <div style={{
            width: "50%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            overflowY: "auto"
          }}>
            {/* Headings - centered horizontally and vertically, no spacing */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px"
            }}>
              <h1 style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                margin: 0,
                color: "#333",
                textAlign: "center"
              }}>
                Wanted to find out what happens next?
              </h1>

              <h2 style={{
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: "bold",
                margin: 0,
                color: "#000",
                letterSpacing: "2px",
                textAlign: "center"
              }}>
                WE WORK TOGETHER!
              </h2>

              <p style={{
                fontSize: "clamp(16px, 2.5vw, 20px)",
                margin: 0,
                color: "#555",
                textAlign: "center"
              }}>
                and continue this story
              </p>
            </div>

            {/* Contact Form - no border, no padding, no margin */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
              maxWidth: "500px"
            }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "15px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "0",
                  outline: "none"
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "15px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "0",
                  outline: "none"
                }}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  padding: "15px",
                  fontSize: "16px",
                  border: "none",
                  borderRadius: "0",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit"
                }}
              />

              <button
                onClick={handleSubmit}
                style={{
                  padding: "15px 30px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  borderRadius: "0",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#555"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#333"}
              >
                SUBMIT
              </button>
            </div>

            {/* Footer - desktop */}
            <footer style={{ marginTop: "30px", textAlign: "center" }}>
              <p style={{ color: "#555", margin: 0 }}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
            </footer>
          </div>

          {/* Right Side - Projects Grid */}
          <div style={{
            width: "50%",
            height: "100vh",
            backgroundColor: "#000",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0"
          }}>
            {/* PROJECTS Heading - Desktop: centered overlay */}
            <h2 style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "white",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              pointerEvents: "none",
              textAlign: "center"
            }}>
              PROJECTS
            </h2>

            {/* Grid of Project Images */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              width: "100%",
              height: "100%",
              gap: "0"
            }}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => project.internal ? navigate(project.link) : window.open(project.link, "_blank")}
                  onMouseEnter={() => setHoveredBox(index)}
                  onMouseLeave={() => setHoveredBox(null)}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer"
                  }}
                >
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  {/* Dark overlay */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    opacity: hoveredBox === index ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none"
                  }}></div>
                  {/* Project Title */}
                  <div style={{
                    position: "absolute",
                    bottom: "8px",
                    [index % 2 === 0 ? "left" : "right"]: "8px",
                    fontSize: "12px",
                    color: "#fff",
                    opacity: hoveredBox === index ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                    whiteSpace: "nowrap"
                  }}>
                    {project.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default Contact;