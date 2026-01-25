import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <div style={{
      backgroundColor: "#F6EFD2",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "60px",
      boxSizing: "border-box"
    }}>
      <div style={{
        maxWidth: "800px",
        width: "100%",
        textAlign: "center"
      }}>
        {/* Heading */}
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)",
          marginBottom: "10px",
          color: "#333"
        }}>
          Wanted to find out what happens next?
        </h1>
        
        <h2 style={{
          fontSize: "clamp(36px, 7vw, 56px)",
          fontWeight: "bold",
          marginBottom: "10px",
          color: "#000",
          letterSpacing: "2px"
        }}>
          WE WORK TOGETHER!
        </h2>
        
        <p style={{
          fontSize: "clamp(18px, 3vw, 24px)",
          marginBottom: "50px",
          color: "#555"
        }}>
          and continue this story
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          backgroundColor: "white",
          padding: "80px",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          border: "3px solid black",
          boxSizing: "border-box",
          marginRight: "80px",
          marginBottom: "80px"
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
            type="submit"
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
        </form>

        {/* Footer */}
        <footer style={{marginTop: "40px"}}>
          <p style={{color: "#555"}}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;