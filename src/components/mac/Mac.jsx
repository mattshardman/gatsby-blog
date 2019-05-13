import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  width: ${({ cw }) => `${cw}px`};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 800px;

  @media (max-width: 600px){
    display: none;
  }
`;

const ScreenSection = styled.div`
  height: ${({ screenHeight }) => `${screenHeight}px`};
  width: ${({ screenWidth }) => `${screenWidth}px`};
  background: black;
  border-radius: 15px 15px 5px 5px;
  border-top: 2px #1e1e1e solid;
  border-left: 2px #1e1e1e solid;
  border-right: 2px #1e1e1e solid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19),
    0 0 0 3px #7d7d7d;
`;
const Screen = styled.div`
  position: relative;
  width: 96%;
  height: 89%;
  background: linear-gradient(100deg, red, purple);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mac = ({ isMobile, children }) => {
  const cw = 750;
  const screenHeight = cw * 0.47;
  const screenWidth = cw * 0.7;
  const baseWidth = cw * 0.88;
  const baseHeight = cw * 0.025;

  const cameraSectionHeight = cw * 0.01;
  const cameraSectionWidth = cw * 0.025;
  const cameraLensSize = cw * 0.005;
  const innerCameraLensSize = cw * 0.005;

  const notchWidth = cw * 0.08;
  const notchHeight = cw * 0.01;

  const baseUnderSideHeight = cw * 0.01;

  return (
    <Background cw={cw}>
      <ScreenSection screenWidth={screenWidth} screenHeight={screenHeight}>
        <div className="camera-section">
          <div className="camera-lens">
            <div className="inner-camera-lens" />
          </div>
        </div>
        <Screen>{children}</Screen>
        <div className="bottom-screen-section" />
      </ScreenSection>

      <div className="base">
        <div className="notch" />
        <div className="base-underside" />
      </div>
      <style jsx>
        {`
          .camera-section {
            margin-top: 4px;
            height: ${cameraSectionHeight}px;
            width: ${cameraSectionWidth}px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .camera-lens {
            background: rgb(20, 20, 20);
            border-radius: 50%;
            height: ${cameraLensSize}px;
            width: ${cameraLensSize}px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .inner-camera-lens {
            width: ${innerCameraLensSize}px;
            height: ${innerCameraLensSize}px;
            border-radius: 50%;
            background: rgb(30, 30, 30);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bottom-screen-section {
            width: 100%;
            background: rgb(30, 30, 30);
            height: 3%;
            justify-self: end;
          }

          .base {
            width: ${baseWidth}px;
            height: ${baseHeight}px;
            background: linear-gradient(
              90deg,
              #7d7d7d,
              #323233 3%,
              #7d7d7d,
              #323233 97%,
              #7d7d7d
            );
            border-bottom-left-radius: 30%;
            border-bottom-right-radius: 30%;
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
            box-shadow: 0 15px 60px 0 rgba(0, 0, 0, 0.4);
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
            z-index: 10;
          }

          .notch {
            width: ${notchWidth}px;
            height: ${notchHeight}px;
            background: linear-gradient(180deg, #323233, #7d7d7d 90%, #323233);
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
          }

          .base-underside {
            width: 100%;
            height: ${baseUnderSideHeight}px;
            background: linear-gradient(180deg, #323233, black);
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
          }
        `}
      </style>
    </Background>
  );
};

export default Mac;
