import React from 'react';

const SelfCheckout: React.FC = () => {
  return (
    <div style={{
      backgroundColor: "#85AA9C",
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
          color: "#ffff",
          lineHeight: "1.4"
        }}>
          How did Self-Checkout Counter Man save the day?
        </h1>

        {/* Project Image */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img 
            src="/Picture15.png" 
            alt="Self-Checkout Project" 
            style={{
              width: "100%",
              height: "auto",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              borderRadius: "10px"
            }}
          />
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

export default SelfCheckout;