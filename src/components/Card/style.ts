import styled from 'styled-components'

export const Container = styled.div`
   & {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      color: inherit;
      width: 240px;
      padding: 20px;
      padding-top: 0;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.3);
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
   }

   &.--is-loading {
      height: 435px;
   }

   @media only screen and (max-width: 536px) {
      &.--is-loading {
         height: 202px;
      }
   }

   @media only screen and (max-width: 536px) {
      & {
         flex-direction: row;
         gap: 10px;
         width: 100%;
         padding: 0px;
         padding-right: 10px;
      }
   }

   &:hover {
      border: 1px solid #333;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
      background-color: rgba(74, 74, 74, 0.39);
      transform: translateY(-5px);
      filter: saturate(1.3);
   }

   .skin-imageContainer {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: inherit;
      height: 200px;
      border-radius: inherit;
      border-bottom-left-radius: 20px;
      margin-bottom: 20px;
      background: radial-gradient(transparent 27%, #121212 120%);
      transition: all 0.3s;
   }

   @media only screen and (max-width: 536px) {
      .skin-imageContainer {
         flex: 1;
         margin: 0;
         border-radius: inherit;
         border-top-right-radius: 0;
         border-bottom-right-radius: 0;
         padding-inline: 5px;
         height: 222px;
      }
   }

   .skin-imageContainer .skin-image,
   .skin-imageContainer .skin-imageShadow {
      width: inherit;
      padding: 40px;
      filter: drop-shadow(-15px 5px 6px rgba(0, 0, 0, 0.5));
      transition: all 0.3s;
   }
   .skin-imageContainer .skin-imageShadow {
      position: absolute;
      top: 66px;
      left: 0px;
      z-index: -1;
      transform: rotateX(117deg);
      filter: blur(3px) opacity(0.1);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, transparent 33%);
      background-position-y: -60px;
   }
   &:hover .skin-imageShadow {
      filter: blur(7px) opacity(0.5);
   }

   &:hover .skin-image {
      filter: none;
   }

   @media only screen and (max-width: 536px) {
      .skin-imageContainer .skin-image,
      .skin-imageContainer .skin-imageShadow {
         width: 100px;
         padding: 0px;
      }

      .skin-imageContainer .skin-imageShadow {
         position: absolute;
         top: 80%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }

   .skin-lock {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      background-color: #ffe394;
      text-shadow: none;
      padding: 2px 10px;
      border-radius: 20px;
   }

   @media only screen and (max-width: 536px) {
      .skin-lock {
         position: absolute;
         top: auto;
         left: auto;
         bottom: 10px;
         right: 5px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }

   .skin-lock svg {
      margin-right: 5px;
   }

   .skin-imageContainer .skin-store {
      position: absolute;
      top: 4px;
      right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: inherit;
      border-bottom-left-radius: 20px;
   }

   .skin-imageContainer .skin-inspectGame,
   .skin-imageContainer .skin-inspectServer {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      font-size: 1.8rem;
      padding: 10px;
      color: inherit;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
   }

   .skin-imageContainer .skin-link {
      width: inherit;
   }

   .skin-imageContainer .skin-inspectGame {
      bottom: 10px;
      left: 10px;
   }
   .skin-imageContainer .skin-inspectServer {
      right: 10px;
   }

   .skin-imageContainer .skin-inspectServer {
      bottom: 10px;
      right: 10px;
   }

   .skin-imageContainer .skin-inspectGame:hover,
   .skin-imageContainer .skin-inspectServer:hover {
      background-color: #4b37d2;
   }

   @media only screen and (max-width: 536px) {
      .skin-imageContainer .skin-inspectGame,
      .skin-imageContainer .skin-inspectServer {
         visibility: hidden;
      }
   }

   .skin-description {
      display: flex;
      flex-direction: column;
      gap: 5px;
      width: 100%;
   }

   .skin-name {
      height: 80px;
      padding-bottom: 20px;
      margin-bottom: 10px;
   }

   .skin-quality,
   .skin-pattern,
   .skin-price {
      display: flex;
      align-items: center;
      gap: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      border-bottom-left-radius: 14px;
   }

   .skin-quality span,
   .skin-pattern span,
   .skin-price span {
      display: inline-block;
      width: 80px;
      padding: 3px 14px;
      border-radius: inherit;
      background-color: rgba(0, 0, 0, 0.8);
   }

   .skin-quality b,
   .skin-pattern b,
   .skin-price b {
      position: relative;
      margin-right: 5px;
   }

   .skin-quality b::after,
   .skin-pattern b::after,
   .skin-price b::after {
      position: absolute;
      content: '/';
      color: #ddd;
      right: -10px;
   }

   .FN {
      color: #4169e1;
   }
   .FT {
      color: #dfc04a;
   }
   .MW {
      color: #84b235;
   }
   .WW {
      color: #ef8641;
   }
   .BS {
      color: #eb5757;
   }
`
