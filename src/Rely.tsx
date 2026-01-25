import React from 'react';
import { useEffect, useRef } from 'react';

const Rely: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Video plays when 50% visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div style={{
      backgroundColor: "#F6EFD2",
      minHeight: "100vh",
      padding: "60px 40px",
      boxSizing: "border-box"
    }}>
      <div style={{
        margin: "0 auto"
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: "bold",
          marginBottom: "60px",
          textAlign: "center",
          color: "#333",
          lineHeight: "1.4"
        }}>
          Opening this door turns financial secrets into collective understanding.
        </h1>

        {/* Project Image */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px"
        }}>
          <img 
            src="/Picture14.png" 
            alt="Rely Project" 
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              borderRadius: "10px"
            }}
          />
        </div>

        {/* Video */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <video 
            ref={videoRef}
            controls
            loop
            muted
            playsInline
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "auto",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              borderRadius: "10px"
            }}
          >
            <source src="/Video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Footer */}
        <footer style={{
          textAlign: "center",
          marginTop: "60px"
        }}>
          <p style={{color: "#555"}}>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Rely;