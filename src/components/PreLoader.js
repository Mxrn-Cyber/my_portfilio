import React from "react";

function PreLoader(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className="preloader-content">
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="spinner-ring"></div>
        </div>
        <div className="loading-text">
          <span>Loading</span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        #preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 999999;
          background: linear-gradient(
            135deg,
            rgb(255, 255, 255) 0%,
            rgb(239, 239, 239) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          visibility: visible;
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        #preloader-none {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 999999;
          background: (rgb(150, 150, 150) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transform: scale(1.1);
          transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .preloader-content {
          text-align: center;
          color: white;
          animation: slideUp 0.8s ease-out;
        }

        .spinner-container {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto 30px;
        }

        .spinner {
          width: 80px;
          height: 80px;
          border: 4px solid rgba(0, 0, 0, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .spinner-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 100px;
          height: 100px;
          border: 2px solid transparent;
          border-top: 2px solid rgba(0, 0, 0, 0.6);
          border-radius: 50%;
          animation: spin 2s linear infinite reverse;
        }

        .loading-text {
          font-family: "Arial", sans-serif;
          font-size: 18px;
          font-weight: 600;
          display: flex;
          color: black;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .dots {
          display: flex;
          gap: 4px;
          color: black;
        }

        .dots span {
          width: 6px;
          height: 6px;
          background-color: black;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }

        .dots span:nth-child(1) {
          animation-delay: -0.32s;
        }

        .dots span:nth-child(2) {
          animation-delay: -0.16s;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        #no-scroll {
          overflow: hidden;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default PreLoader;
