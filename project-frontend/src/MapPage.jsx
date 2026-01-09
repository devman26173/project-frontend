import React from "react";
import japanMap from "../src/300ppi/japan_map.webp";

const JapanMap = () => {
  return (
    <>
      {/* JSX 내부 CSS */}
      <style>
        {`
          .map-container {
            width: 100%;
            padding: 20px;
            display: flex;
            justify-content: center;
          }

          .map-wrapper {
            position: relative;
            width: 100%;
            max-width: 800px;

            /* 리사이즈 시 부드럽게 */
            transition: width 0.25s ease;
            will-change: width;
            backface-visibility: hidden;
          }

          .map-image {
            width: 100%;
            height: auto;
            display: block;

            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

            /* 이미지 스케일 부드럽게 */
            transition: transform 0.25s ease;
            transform: translateZ(0);
          }
        `}
      </style>

      <div className="map-container">
        <div className="map-wrapper">
          <img
            src={japanMap}
            alt="Japan Map"
            className="map-image"
          />
        </div>
      </div>
    </>
  );
};

export default JapanMap;
