import React, { useState, useRef, useEffect } from 'react';

const BASE_URL = import.meta.env.BASE_URL;
const TFIVideoImage = `${BASE_URL}TFIVideo.png`;
const TFIVideoFile = `${BASE_URL}TFIVideo.mp4`;

const VideoProduction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-hide controls after 3 seconds of no mouse activity
  const resetHideTimer = () => {
    setShowControls(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    resetHideTimer();
    return () => { if (hideTimerRef.current) clearTimeout(hideTimerRef.current); };
  }, []);

  // Update progress bar as video plays
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100 || 0);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percent = clickX / rect.width;
    video.currentTime = percent * video.duration;
  };

  return (
    <div style={{
      backgroundColor: "#F7F7F7",
      minHeight: "100vh",
      width: "100vw",
      overflowX: "hidden",
      margin: 0,
      padding: 0,
      display: "flex",
      justifyContent: "center"
    }}>
      {/* Container */}
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Photo */}
        <img
          src={TFIVideoImage}
          alt="TFIVideo"
          style={{
            width: "100%",
            height: "auto",
            display: "block"
          }}
        />

        {/* Video with Controls - 20px padding */}
        <div style={{
          width: "100%",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              backgroundColor: "#000",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer"
            }}
            onMouseMove={resetHideTimer}
            onMouseEnter={resetHideTimer}
            onClick={togglePlay}
          >
            {/* Video */}
            <video
              ref={videoRef}
              playsInline
              muted
              style={{
                width: "100%",
                display: "block"
              }}
            >
              <source src={TFIVideoFile} type="video/mp4" />
            </video>

            {/* Controls Overlay */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              padding: "40px 16px 14px",
              opacity: showControls ? 1 : 0,
              transition: "opacity 0.3s ease",
              pointerEvents: showControls ? "auto" : "none"
            }}>
              {/* Progress Bar */}
              <div
                onClick={(e) => { e.stopPropagation(); handleProgressClick(e); }}
                style={{
                  width: "100%",
                  height: "6px",
                  backgroundColor: "rgba(255,255,255,0.3)",
                  borderRadius: "3px",
                  cursor: "pointer",
                  marginBottom: "10px",
                  position: "relative"
                }}
              >
                <div style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#fff",
                  borderRadius: "3px",
                  transition: "width 0.1s linear"
                }} />
                {/* Thumb */}
                <div style={{
                  position: "absolute",
                  top: "50%",
                  left: `${progress}%`,
                  transform: "translate(-50%, -50%)",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#fff",
                  borderRadius: "50%"
                }} />
              </div>

              {/* Buttons Row */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px"
              }}>
                {/* Play / Pause */}
                <button
                  onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "22px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    lineHeight: 1
                  }}
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>

                {/* Mute / Unmute */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "20px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    lineHeight: 1
                  }}
                >
                  {isMuted ? "🔇" : "🔊"}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const video = videoRef.current;
                    if (video) video.requestFullscreen();
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#fff",
                    fontSize: "18px",
                    cursor: "pointer",
                    padding: "4px 8px",
                    marginLeft: "auto",
                    lineHeight: 1
                  }}
                >
                  ⛶
                </button>
              </div>
            </div>

            {/* Big Play button in center when paused */}
            {!isPlaying && (
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "60px",
                height: "60px",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pointerEvents: "none"
              }}>
                <span style={{ color: "#fff", fontSize: "24px", marginLeft: "4px" }}>▶</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoProduction;