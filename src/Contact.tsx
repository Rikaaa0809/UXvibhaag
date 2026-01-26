import React, { useState } from 'react';

const BASE_URL = import.meta.env.BASE_URL;
const Picture25 = `${BASE_URL}Picture25.png`;
const Picture26 = `${BASE_URL}Picture26.png`;
const Picture27 = `${BASE_URL}Picture27.png`;
const Picture28 = `${BASE_URL}Picture28.png`;
const Picture29 = `${BASE_URL}Picture29.png`;
const Picture30 = `${BASE_URL}Picture30.png`;

const Contact: React.FC = () => {
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
    { image: Picture25, link: "https://www.behance.net/niharikasharma17" },
    { image: Picture26, link: "https://www.behance.net/niharikasharma17" },
    { image: Picture27, link: "https://www.behance.net/niharikasharma17" },
    { image: Picture28, link: "https://www.behance.net/niharikasharma17" },
    { image: Picture29, link: "https://www.behance.net/niharikasharma17" },
    { image: Picture30, link: "https://www.behance.net/niharikasharma17" }
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
        padding: 0,
        overflow: isTouchDevice ? "auto" : "hidden"
      }}>
      {/* Left Side - Contact Form */}
      <div style={{
        width: isTouchDevice ? "auto" : "50%",
        height: isTouchDevice ? "100%" : "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isTouchDevice ? "40px 40px" : "120px 40px",
        boxSizing: "border-box",
        overflowY: isTouchDevice ? "visible" : "auto"
      }}>
        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(24px, 4vw, 36px)",
          marginBottom:"-30px",
          color: "#333",
          textAlign: "center",
          
        }}>
          Wanted to find out what happens next?
        </h1>
        
        <h2 style={{
          fontSize: "clamp(32px, 6vw, 48px)",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#000",
          letterSpacing: "2px",
          textAlign: "center"
        }}>
          WE WORK TOGETHER!
        </h2>
        
        <p style={{
          fontSize: "clamp(16px, 2.5vw, 20px)",
          marginBottom: "40px",
          color: "#555",
          textAlign: "center"
        }}>
          and continue this story
        </p>

        {/* Contact Form */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "white",
          padding: isTouchDevice ? "30px" : "50px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          border: "3px solid black",
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
              padding: "15px",
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
            rows={6}
            style={{
              padding: "15px",
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
              padding: "15px 30px",
              fontSize: "18px",
              fontWeight: "bold",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#555"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#333"}
          >
            SUBMIT
          </button>
        </div>

        {/* Footer - Only show on mobile */}
        {isTouchDevice && (
          <footer style={{marginTop: "40px", textAlign: "center"}}>
            <p style={{color: "#555"}}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
          </footer>
        )}
      </div>

      {/* Right Side - Projects Grid */}
      <div style={{
        width: isTouchDevice ? "100%" : "50%",
        height: isTouchDevice ? "auto" : "100vh",
        backgroundColor: "#000",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: isTouchDevice ? "flex-start" : "center",
        alignItems: "center",
        padding: isTouchDevice ? "40px 20px" : "0"
      }}>
        {/* PROJECTS Heading */}
        {!isTouchDevice && (
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
        )}

        {isTouchDevice && (
          <h2 style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: "30px"
          }}>
            PROJECTS
          </h2>
        )}

        {/* Grid of Project Images */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isTouchDevice ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
          gridTemplateRows: isTouchDevice ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
          width: "100%",
          height: isTouchDevice ? "auto" : "100%",
          gap: "0"
        }}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => !isTouchDevice && setHoveredBox(index)}
              onMouseLeave={() => !isTouchDevice && setHoveredBox(null)}
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                aspectRatio: isTouchDevice ? "1/1" : "auto"
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
              {/* Dark overlay - only on desktop */}
              {!isTouchDevice && (
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
              )}
            </a>
          ))}
        </div>

        {/* Footer - Only show on desktop */}
        {!isTouchDevice && (
          <footer style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center"
          }}>
            <p style={{color: "#999"}}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
          </footer>
        )}
      </div>
      </div>
    </div>
  );
};

export default Contact;