import React, { useState } from 'react';
import japanFlag from './300ppi/japan_flag.webp';
import mapWave from './300ppi/map_wave.webp';
import pinImg from './300ppi/pin.webp';

const JapanMapPage = () => {
  const [hoveredPin, setHoveredPin] = useState(null);
  const [clickedPin, setClickedPin] = useState(null);

  // 각 핀의 위치와 접속자 수 데이터
  const pins = [
    { id: 1, x: 25, y: 15, visitors: 127, name: '홋카이도' },
    { id: 2, x: 35, y: 35, visitors: 89, name: '도호쿠' },
    { id: 3, x: 42, y: 52, visitors: 234, name: '도쿄' },
    { id: 4, x: 38, y: 58, visitors: 156, name: '나고야' },
    { id: 5, x: 32, y: 65, visitors: 198, name: '오사카' },
    { id: 6, x: 22, y: 82, visitors: 143, name: '후쿠오카' }
  ];

  const handlePinClick = (pinId) => {
    setClickedPin(pinId);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#60c1f1' }}>

      {/* 블러 오버레이 */}
      {hoveredPin && (
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10 transition-all duration-300" />
      )}

      {/* 일본 국기 이미지 */}
      <img
        src={japanFlag}
        alt="Japan Flag"
        className="absolute top-16 left-16 w-40 h-auto z-20 shadow-lg"
      />

      {/* 물결 이미지들 (플로팅 애니메이션) */}
      <img
        src={mapWave}
        alt="Wave"
        className="absolute animate-float-slow opacity-70"
        style={{ top: '25%', left: '35%', width: '60px' }}
      />
      <img
        src={mapWave}
        alt="Wave"
        className="absolute animate-float-slow opacity-70"
        style={{ top: '40%', left: '50%', width: '80px', animationDelay: '1s' }}
      />
      <img
        src={mapWave}
        alt="Wave"
        className="absolute animate-float-slow opacity-70"
        style={{ top: '55%', left: '25%', width: '60px', animationDelay: '2s' }}
      />
      <img
        src={mapWave}
        alt="Wave"
        className="absolute animate-float-slow opacity-70"
        style={{ bottom: '20%', right: '15%', width: '80px', animationDelay: '1.5s' }}
      />
      <img
        src={mapWave}
        alt="Wave"
        className="absolute animate-float-slow opacity-70"
        style={{ bottom: '35%', left: '15%', width: '60px', animationDelay: '0.5s' }}
      />

      {/* 핀들 */}
      {pins.map((pin) => (
        <div
          key={pin.id}
          className="absolute z-30 transition-all duration-300"
          style={{ 
            left: `${pin.x}%`, 
            top: `${pin.y}%`,
            transform: hoveredPin === pin.id ? 'scale(1.3)' : 'scale(1)'
          }}
          onMouseEnter={() => setHoveredPin(pin.id)}
          onMouseLeave={() => setHoveredPin(null)}
          onClick={() => handlePinClick(pin.id)}
        >
          <img
            src={pinImg}
            alt={`Pin ${pin.id}`}
            className="w-10 h-10 cursor-pointer drop-shadow-lg transition-all"
            style={{
              filter: clickedPin === pin.id ? 'brightness(0.8) saturate(1.5)' : 'brightness(1)'
            }}
          />
          
          {/* 접속자 수 툴팁 */}
          {hoveredPin === pin.id && (
            <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 whitespace-nowrap animate-fade-in">
              <div className="text-sm font-bold text-gray-800">{pin.name}</div>
              <div className="text-xs text-gray-600 mt-1">
                접속자: <span className="font-semibold text-blue-600">{pin.visitors}명</span>
              </div>
              <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
            </div>
          )}
        </div>
      ))}

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default JapanMapPage;