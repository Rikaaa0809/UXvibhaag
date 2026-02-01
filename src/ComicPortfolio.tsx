import React, { useState, useRef, useEffect } from 'react';

// Import all images at the top
const BASE_URL = import.meta.env.BASE_URL;
  const Picture1 = `${BASE_URL}Picture1.png`;
  const Picture2 = `${BASE_URL}Picture2.png`;
  const Picture3 = `${BASE_URL}Picture3.png`;
  const Picture4 = `${BASE_URL}Picture4.png`;
  const Picture5 = `${BASE_URL}Picture5.png`;
  const Picture6 = `${BASE_URL}Picture6.png`;
  const Picture7 = `${BASE_URL}Picture7.png`;
  const Picture8 = `${BASE_URL}Picture8.png`;
  const Picture9 = `${BASE_URL}Picture9.png`;
  const Picture10 = `${BASE_URL}Picture10.png`;
  const Picture11 = `${BASE_URL}Picture11.png`;
  const Picture12 = `${BASE_URL}Picture12.png`;
  const Picture13 = `${BASE_URL}Picture13.png`;
  const Picture16 = `${BASE_URL}Picture16.png`;
  const Picture17 = `${BASE_URL}Picture17.png`;
  const Picture18 = `${BASE_URL}Picture18.png`;
  const Picture19 = `${BASE_URL}Picture19.png`;
  const Picture20 = `${BASE_URL}Picture20.png`;
  const Picture21 = `${BASE_URL}Picture21.png`;
  const Picture22 = `${BASE_URL}Picture22.png`;
  
  const Picture24 = `${BASE_URL}Picture24.png`;

  

const ComicPortfolio: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  // Scratch progress for touch devices
  const [scratchProgress5, setScratchProgress5] = useState(0);
  const [scratchProgress8, setScratchProgress8] = useState(0);
  
  // Heartbeat animation states
  const [showHeartbeat5, setShowHeartbeat5] = useState(false);
  const [showHeartbeat8, setShowHeartbeat8] = useState(false);
  
  const canvasRef5 = useRef<HTMLCanvasElement>(null);
  const canvasRef8 = useRef<HTMLCanvasElement>(null);

  // Detect touch device
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  // Initialize scratch canvas
  useEffect(() => {
    if (!isTouchDevice) return;

    const initCanvas = (
      canvas: HTMLCanvasElement, 
      imgSrc: string
    ) => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the B&W image on canvas
        ctx.drawImage(img, 0, 0);
      };
    };

    if (canvasRef5.current) {
      initCanvas(canvasRef5.current, Picture21); // Mobile uses Picture21
    }

    if (canvasRef8.current) {
      initCanvas(canvasRef8.current, Picture8); // Mobile uses Picture8
    }
  }, [isTouchDevice]);

  

  // Scratch effect handler
  const handleScratch = (
    e: React.TouchEvent<HTMLCanvasElement>,
    canvasRef: React.RefObject<HTMLCanvasElement | null>,
    setProgress: (progress: number) => void,
    setShowHeartbeat: (show: boolean) => void
  ) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (touch.clientX - rect.left) * scaleX;
    const y = (touch.clientY - rect.top) * scaleY;

    // Erase the B&W overlay where user touches to reveal color underneath
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 160, 0, Math.PI * 2);
    ctx.fill();

    // Calculate scratch progress
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    let transparent = 0;
    
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 128) transparent++;
    }
    
    const progress = (transparent / (pixels.length / 4)) * 100;
    setProgress(progress);

    // Trigger heartbeat animation at 60%
    if (progress >= 60) {
      setShowHeartbeat(true);
    }
  };

  const handleDownloadResume = () => {
    const ResumeUrl = `${import.meta.env.BASE_URL}Resume.pdf`;
    const link = document.createElement('a');
    link.href = ResumeUrl;
    link.download = 'Resume.pdf';
    link.click();
  };

  const handleBeginStory = () => {
    setShowPopup(false);
  };

  const handleContactClick = () => {
    window.location.href = '#/contact';
  };

  const handleRelyClick = () => {
    window.location.href = '#/Rely';
  };

  const handleSelfCheckoutClick = () => {
    window.location.href = '#/SelfCheckout';
  };

  return (
    <div style={{position: "relative"}}>
      {/* Popup Overlay */}
      {showPopup && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(8px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "white",
            padding: "40px 60px",
            borderRadius: "15px",
            textAlign: "center",
            maxWidth: "500px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)"
          }}>
            <h1 style={{
              fontSize: "32px",
              marginBottom: "20px",
              fontWeight: "bold",
              color: "#333"
            }}>
              How to Explore This Story
            </h1>
            <p style={{
              fontSize: "18px",
              lineHeight: "1.6",
              marginBottom: "30px",
              color: "#555"
            }}>
              This comic is my portfolio. Some frames reveal my projects, others move the story forward. Follow the frames, {isTouchDevice ? 'swipe to discover' : 'hover to discover'}, and click to explore.
            </p>
            <button 
              onClick={handleBeginStory}
              style={{
                backgroundColor: "#333",
                color: "white",
                padding: "15px 40px",
                fontSize: "18px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#555"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#333"}
            >
              Begin the Story
            </button>
          </div>
        </div>
      )}

      {/* Desktop Container Wrapper */}
      <div style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        position: "fixed",
        top: 0,
        left: 0
      }}>
        {/* Main Content */}
        <div style={{
          backgroundColor: "#F6EFD2", 
          padding: "30px", 
          overflowX: "hidden",
          width: "100%",
          boxSizing: "border-box"
        }}>
        
        <div>
          {/* Row 1 */}
          <div style={{
            display: "flex", 
            marginBottom: "20px",
            flexDirection: isTouchDevice ? "column" : "row",
            gap: isTouchDevice ? "20px" : "0"
          }}>
                <img src={isTouchDevice ? Picture16 : Picture10} alt="Panel 10" style={{height: isTouchDevice ? "auto" : "320px", width: isTouchDevice ? "100%" : "auto"}} />
               <img src={isTouchDevice ? Picture17 : Picture1} alt="Panel 1" style={{height: isTouchDevice ? "auto" : "320px", width: isTouchDevice ? "100%" : "auto"}} />
               <img src={isTouchDevice ? Picture18 : Picture2} alt="Panel 2" style={{height: isTouchDevice ? "auto" : "320px", width: isTouchDevice ? "100%" : "auto"}} />
          </div>

          {/* Row 2 */}
          <div style={{
            display: "flex", 
            marginBottom: "20px",
            flexDirection: isTouchDevice ? "column" : "row",
            gap: isTouchDevice ? "20px" : "0"
          }}>
                <img src={isTouchDevice ? Picture19 : Picture3} alt="Panel 3" style={{borderWidth: "3px", borderColor: "black", height: isTouchDevice ? "auto" : "350px", width: isTouchDevice ? "100%" : "auto", marginRight: isTouchDevice ? "0" : "20px"}} />
                <img src={isTouchDevice ? Picture20 : Picture4} alt="Panel 4" style={{height: isTouchDevice ? "auto" : "350px", width: isTouchDevice ? "100%" : "auto"}}/>
          </div>

          {/* Row 3 */}
          <div style={{
            display: "flex", 
            marginBottom: "20px",
            flexDirection: isTouchDevice ? "column" : "row",
            gap: isTouchDevice ? "20px" : "0",
            position: "relative"
          }}>
            
                {/* Picture 5/21 - Hover or Scratch */}
                <div style={{
                  position: "relative", 
                  height: isTouchDevice ? "auto" : "350px",
                  width: isTouchDevice ? "100%" : "auto"
                }}>
                  {isTouchDevice ? (
                    <>
                      {/* Colored image underneath - Picture24 for mobile */}
                      <img 
                        src={Picture24} 
                        alt="Colored version" 
                        style={{
                          height: "auto",
                          width: "100%",
                          display: "block",
                          animation: showHeartbeat5 ? "heartbeat 1s ease-in-out" : "none"
                        }} 
                      />
                      {/* B&W overlay canvas - Picture21 for mobile */}
                      <canvas
                        ref={canvasRef5}
                        onTouchMove={(e) => handleScratch(e, canvasRef5, setScratchProgress5, setShowHeartbeat5)}
                        onTouchStart={(e) => handleScratch(e, canvasRef5, setScratchProgress5, setShowHeartbeat5)}
                        onClick={scratchProgress5 > 50 ? handleSelfCheckoutClick : undefined}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          cursor: scratchProgress5 > 50 ? "pointer" : "default",
                          touchAction: "none",
                          opacity: showHeartbeat5 ? 0 : 1,
                          transition: "opacity 0.5s ease-out"
                        }}
                      />
                    </>
                  ) : (
                    <img
                      src={isHovered ? Picture11 : Picture5}
                      alt="Hover to change"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      onClick={handleSelfCheckoutClick}
                      style={{height:"350px", cursor: "pointer"}}
                    />
                  )}
                </div>
                
                <img src={isTouchDevice ? Picture22 : Picture6} alt="Panel 6" style={{
                  height: isTouchDevice ? "auto" : "350px",
                  width: isTouchDevice ? "100%" : "auto",
                  marginLeft: isTouchDevice ? "0" : "-50px"
                }} />
                {!isTouchDevice && (
                  <img src={Picture9} alt="Panel 9" style={{
                    height: "300px",
                    width: "auto",
                    marginLeft: "20px", 
                    marginTop: "30px"
                  }} />
                )}
                <button className="download-btn" onClick={handleDownloadResume} style={{
                  marginLeft: isTouchDevice ? "0" : "-240px", 
                  height: isTouchDevice ? "auto" : "300px", 
                  width: isTouchDevice ? "100%" : "230px", 
                  marginTop: isTouchDevice ? "0" : "10px", 
                  borderColor:"black", 
                  borderWidth: "3px",
                  padding: isTouchDevice ? "20px" : "0"
                }} >
                  DOWNLOAD<br />RESUME
                </button>
                 
          </div>

          {/* Row 4 */}
          <div style={{
            display: "flex",
            flexDirection: isTouchDevice ? "column" : "row",
            gap: isTouchDevice ? "20px" : "0"
          }}>
            
                <img src={Picture7} alt="Panel 7" style={{
                  height: isTouchDevice ? "auto" : "450px",
                  width: isTouchDevice ? "100%" : "auto",
                  marginRight: isTouchDevice ? "0" : "20px"
                }} />
                
                {/* Picture 8/23 - Hover or Scratch */}
                <div style={{
                  position: "relative", 
                  height: isTouchDevice ? "auto" : "450px",
                  width: isTouchDevice ? "100%" : "auto",
                  marginRight: isTouchDevice ? "0" : "20px"
                }}>
                  {isTouchDevice ? (
                    <>
                      {/* Colored image underneath - Picture12 for mobile */}
                      <img 
                        src={Picture12} 
                        alt="Colored version" 
                        style={{
                          height: "auto",
                          width: "100%",
                          display: "block",
                          animation: showHeartbeat8 ? "heartbeat 1s ease-in-out" : "none"
                        }} 
                      />
                      {/* B&W overlay canvas - Picture23 for mobile */}
                      <canvas
                        ref={canvasRef8}
                        onTouchMove={(e) => handleScratch(e, canvasRef8, setScratchProgress8, setShowHeartbeat8)}
                        onTouchStart={(e) => handleScratch(e, canvasRef8, setScratchProgress8, setShowHeartbeat8)}
                        onClick={scratchProgress8 > 50 ? handleRelyClick : undefined}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          cursor: scratchProgress8 > 50 ? "pointer" : "default",
                          touchAction: "none",
                          opacity: showHeartbeat8 ? 0 : 1,
                          transition: "opacity 0.5s ease-out"
                        }}
                      />
                    </>
                  ) : (
                    <img 
                      src={isHovered8 ? Picture12 : Picture8} 
                      alt="Panel 8" 
                      onMouseEnter={() => setIsHovered8(true)}
                      onMouseLeave={() => setIsHovered8(false)}
                      onClick={handleRelyClick}
                      style={{height: "450px", cursor: "pointer"}}
                    />
                  )}
                </div>
                
              <img src={Picture13} alt="Panel 13" style={{
                height: isTouchDevice ? "auto" : "450px",
                width: isTouchDevice ? "100%" : "auto"
              }} />
             
          </div>

          {/* Rotating Strip */}
          <div 
            onClick={handleContactClick}
            style={{
            marginTop: "40px",
            marginBottom: "40px",
            overflow: "hidden",
            backgroundColor: "#333",
            padding: "15px 0",
            width: "100%",
            position: "relative",
            cursor: "pointer"
          }}>
            <style>
              {`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                @keyframes heartbeat {
                  0% { transform: scale(1); }
                  14% { transform: scale(1.1); }
                  28% { transform: scale(1); }
                  42% { transform: scale(1.1); }
                  56% { transform: scale(1); }
                  100% { transform: scale(1); }
                }
              `}
            </style>
            <div style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              animation: "scroll 15s linear infinite",
              fontSize: "24px",
              fontWeight: "bold",
              color: "white",
              pointerEvents: "none"
            }}>
              <span style={{paddingRight: "100px"}}>CLICK HERE TO FIND OUT WHAT HAPPENS NEXT</span>
              <span style={{paddingRight: "100px"}}>CLICK HERE TO FIND OUT WHAT HAPPENS NEXT</span>
              <span style={{paddingRight: "100px"}}>CLICK HERE TO FIND OUT WHAT HAPPENS NEXT</span>
              <span style={{paddingRight: "100px"}}>CLICK HERE TO FIND OUT WHAT HAPPENS NEXT</span>
            </div>
          </div>
        </div>

        <footer style={{justifyItems: "center"}}>
          <p>&copy; 2025 Niharika Sharma. All Rights Reserved.</p>
        </footer>
      

      
    </div>
      </div>
    </div>
  );

  

};

export default ComicPortfolio;