import React from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Apple */}
        <div className="relative mb-8">
          <div className="apple-container">
            {/* Apple Body */}
            <div className="apple-body"></div>
            {/* Apple Leaf */}
            <div className="apple-leaf"></div>
            {/* Apple Stem */}
            <div className="apple-stem"></div>
            {/* Shine Effect */}
            <div className="apple-shine"></div>
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in-up">
          Calories Calculator
        </h1>
        <p className="text-gray-600 animate-fade-in-up animation-delay-300">
          Your fitness journey starts here
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="loading-dot"></div>
          <div className="loading-dot animation-delay-200"></div>
          <div className="loading-dot animation-delay-400"></div>
        </div>
      </div>

      <style jsx>{`
        .apple-container {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto;
          animation: bounce 2s ease-in-out infinite;
        }

        .apple-body {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, #22c55e 0%, #16a34a 50%, #15803d 100%);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          position: absolute;
          top: 10px;
          left: 10px;
          box-shadow: 
            inset -10px -10px 20px rgba(0, 0, 0, 0.1),
            inset 10px 10px 20px rgba(255, 255, 255, 0.3),
            0 10px 30px rgba(34, 197, 94, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }

        .apple-leaf {
          width: 25px;
          height: 15px;
          background: linear-gradient(45deg, #16a34a, #22c55e);
          border-radius: 0 100% 0 100%;
          position: absolute;
          top: 5px;
          right: 25px;
          transform: rotate(-30deg);
          animation: leaf-sway 3s ease-in-out infinite;
        }

        .apple-stem {
          width: 4px;
          height: 12px;
          background: #92400e;
          border-radius: 2px;
          position: absolute;
          top: 0;
          left: 58px;
        }

        .apple-shine {
          width: 20px;
          height: 30px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.2) 100%);
          border-radius: 50%;
          position: absolute;
          top: 20px;
          left: 25px;
          animation: shine 2s ease-in-out infinite;
        }

        .loading-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: loading-bounce 1.4s ease-in-out infinite both;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-20px) scale(1.05);
          }
          60% {
            transform: translateY(-10px) scale(1.02);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes leaf-sway {
          0%, 100% {
            transform: rotate(-30deg);
          }
          50% {
            transform: rotate(-20deg);
          }
        }

        @keyframes shine {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.1);
          }
        }

        @keyframes loading-bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
};