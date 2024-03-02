import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

const animateContainer = keyframes({
    '0%': {
        opacity: 0,
        transform: 'scale(0)',
        boxShadow:
            '0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset',
    },
    '25%': {
        opacity: 1,
        transform: 'scale(0.9)',
        boxShadow:
            '0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset',
    },
    '43.75%': {
        transform: 'scale(1.15)',
        boxShadow:
            '0px 0px 0px 43.334px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 65px rgba(255, 255, 255, 0.25) inset',
    },
    '62.5%': {
        transform: 'scale(1)',
        boxShadow:
            '0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 21.667px rgba(255, 255, 255, 0.25) inset',
    },
    '81.25%': {
        boxShadow:
            '0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset',
    },
    '100%': {
        opacity: 1,
        boxShadow:
            '0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset, 0px 0px 0px 0px rgba(255, 255, 255, 0.25) inset',
    },
});

const animateCheck = keyframes`
  from { stroke-dashoffset: 80; }
  to { stroke-dashoffset: 0; }
`;

const MainContainer = styled.div`
    ${({ isVisibleTwo }) =>
        isVisibleTwo
            ? css`
                  animation: ${animateContainer} 0.75s ease-out forwards;
                  display: flex;
                  width: 100%;
                  height: 100%;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              `
            : css`
                  display: none;
              `}
`;

const CheckBackground = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #2565f0, #2463eb);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: scale(0.84);
    animation: ${animateContainer} 0.75s ease-out forwards;
`;

// SVG에 적용할 스타일
const Svg = styled.svg`
    width: 65%;
    transform: translateY(0.25rem);
    stroke-dasharray: 80;
    stroke-dashoffset: 80;
    animation: ${animateCheck} 0.35s forwards 0.75s ease-out;
`;

const heartburst = keyframes`
  0% {
    transform: scale(0);
  }
  30%{
    transform: scale(0.1);
  }
  35%{
    transform: scale(0.5);
  }
  40%{
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const LikeSVGColor = styled.svg`
    width: 65%;
    fill: #f91880;
    z-index: 2;
    animation: ${heartburst} 1s linear;
`;

const circleToOrbit = keyframes`
  0% {
    width: 4%; /* 1px이 25px의 4%에 해당 */
    height: 4%;
    background-color: #DD4588;
  }

  20%{
    width: 24%; /* 6px이 25px의 24%에 해당 */
    height: 24%;
    background-color: #D56AC0;
  }

  25%{
    width: 32%; /* 8px이 25px의 32%에 해당 */
    height: 32%;
    background-color: #D56AC0;
  }

  30%{
    width: 36%; /* 9px이 25px의 36%에 해당 */
    height: 36%;
    background-color: transparent;
    border: 7px solid #CC8EF5;
  }

  35%{
    width: 52%; /* 13px이 25px의 52%에 해당 */
    height: 52%;
    background-color: transparent;
    border: 5px solid #CC8EF5;
  }

  40%{
    width: 80%; /* 20px이 25px의 80%에 해당 */
    height: 80%;
    border: 1px solid #CC8EF5;
  }

  45%{
    width: 88%; /* 22px이 25px의 88%에 해당 */
    height: 88%;
    background-color: #CC8EF5;
    border: none;
  }
  
  100% {
    width: 100%; /* 22px이 25px의 88%에 해당 */
    height: 100%;
    background-color: #F9E3EB;
    border: none;
  }
`;

const Orbit = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%; /* 부모 컨테이너에 대한 너비를 100%로 설정 */
    height: 100%; /* 부모 컨테이너에 대한 너비를 100%로 설정 */
    border-radius: 50%;
    background-color: #f9e3eb;
    animation: ${circleToOrbit} 1s linear;
    transform: translate(-50%, -50%);
`;

const moveOutwards = keyframes`
  0% {
    transform: translateX(0px);
  opacity: 0;
}
  28% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  50% {
    transform: translateX(-2px) 
    scale(0.9);
  }
  75% {
    transform: translateX(-4px) 
    scale(0.7);
  }
  100% {
    transform: translateX(-7px) 
    scale(0);}
`;

const fadeout = keyframes`
  0% { 
    transform: scale(1);
    opacity: 0;
  }
  33%{
    opacity: 0;
  }
  35%{
    opacity: 1;
  }
  50% {
    transform: translateX(-1px)
    scale(0.7);
  }
  75% {
    transform: translateX(-2px)
    scale(0.5);
  }
  85% {
    transform: translateX(-4px)
    scale(0.3);
  }
  90% { transform: scale(0);}
`;

// 궤도 위의 작은 원
const OrbitDot = styled.div`
    position: absolute;
    top: 0;
    left: 25%;
    width: 10%;
    height: 10%;
    opacity: 0;
    background-color: ${(props) => props.color};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${(props) =>
        props.$index % 2 === 0
            ? css`
                  ${moveOutwards} 1.1s linear 0.4s
              `
            : css`
                  ${fadeout} 1.1s linear 0.4s
              `};
`;

const OrbitDotWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) ${(props) => `rotate(${props.$angle}deg)`}
        translateX(-15px);
    transform-origin: 50% 50%;
`;

const SvgContainer = styled.div`
    ${({ isVisibleThree }) =>
        isVisibleThree
            ? css`
                  display: flex;
                  width: 100%;
                  height: 100%;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              `
            : css`
                  display: none;
              `}
`;

export const AnimatedCheckBox = ({ isVisibleTwo }) => {
    return (
        <MainContainer isVisibleTwo={isVisibleTwo}>
            <CheckBackground>
                <Svg
                    viewBox="0 0 65 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M7 25L27.3077 44L58.5 7"
                        stroke="white"
                        strokeWidth="13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </Svg>
            </CheckBackground>
        </MainContainer>
    );
};

export const LikeContainer = ({ isVisibleThree }) => {
    const colors = [
        '#A0D6D8',
        '#92D2FC',
        '#B28FF6',
        '#A0D6D8',
        '#EE91AC',
        '#92D2FC',
    ];
    const angleBetweenPairs = 60;
    const angleOffsetWithinPair = 15;

    const dots = colors.flatMap((color, i) => {
        const firstAngle = i * angleBetweenPairs;
        const secondAngle = firstAngle + angleOffsetWithinPair;

        return [
            <OrbitDotWrapper
                key={`dot-first-${firstAngle}-${i}`}
                $angle={firstAngle}
            >
                <OrbitDot color={color} $index={firstAngle} />
            </OrbitDotWrapper>,
            <OrbitDotWrapper
                key={`dot-second-${secondAngle}-${i}`}
                $angle={secondAngle}
            >
                <OrbitDot color={color} $index={secondAngle} />
            </OrbitDotWrapper>,
        ];
    });

    return (
        <SvgContainer isVisibleThree={isVisibleThree}>
            <Orbit>{dots}</Orbit>
            <LikeSVGColor viewBox="0 0 24 24">
                <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
            </LikeSVGColor>
        </SvgContainer>
    );
};
