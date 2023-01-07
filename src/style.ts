import styled, { createGlobalStyle } from 'styled-components'

import agent2 from './assets/images/agents/agent2.webp'
import agent7 from './assets/images/agents/agent7.webp'
import agent8 from './assets/images/agents/agent8.webp'
import agent9 from './assets/images/agents/agent9.webp'
import agent12 from './assets/images/agents/agent12.webp'
import agent13 from './assets/images/agents/agent13.webp'
import agent14 from './assets/images/agents/agent14.webp'
import agent15 from './assets/images/agents/agent15.webp'
import agent16 from './assets/images/agents/agent16.webp'
import agent18 from './assets/images/agents/agent18.webp'
import agent19 from './assets/images/agents/agent19.webp'
import agent21 from './assets/images/agents/agent21.webp'
import agent22 from './assets/images/agents/agent22.webp'
import agent23 from './assets/images/agents/agent23.webp'
import agent26 from './assets/images/agents/agent26.webp'
import agent27 from './assets/images/agents/agent27.webp'
import agent28 from './assets/images/agents/agent28.webp'
import agent29 from './assets/images/agents/agent29.webp'
import agent31 from './assets/images/agents/agent31.webp'
import agent32 from './assets/images/agents/agent32.webp'
import agent34 from './assets/images/agents/agent34.webp'
import agent35 from './assets/images/agents/agent35.webp'
import agent36 from './assets/images/agents/agent36.webp'
import agent37 from './assets/images/agents/agent37.webp'
import agent38 from './assets/images/agents/agent38.webp'
import agent39 from './assets/images/agents/agent39.webp'
import agent40 from './assets/images/agents/agent40.webp'
import agent41 from './assets/images/agents/agent41.webp'
import agent42 from './assets/images/agents/agent42.webp'

const backgroundAvatarList = [
  agent2,
  agent7,
  agent8,
  agent9,
  agent12,
  agent13,
  agent14,
  agent15,
  agent16,
  agent18,
  agent19,
  agent21,
  agent22,
  agent23,
  agent26,
  agent27,
  agent28,
  agent29,
  agent31,
  agent32,
  agent34,
  agent35,
  agent36,
  agent37,
  agent38,
  agent39,
  agent40,
  agent41,
  agent42,
  'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/gendarm_d.png?v=2',
  'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/gendarm_c.png?v=3',
  'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/swat_k.png?v=2',
]

const rndIndex = Math.round(Math.random() * (backgroundAvatarList.length - 1))
const backgroundAvatar = backgroundAvatarList[rndIndex]

export const Container = styled.div`
  & {
    display: flex;
    flex-direction: column;
    max-width: 1336px;
    margin: 0 auto;
    padding: 20px;
    align-items: flex-start;
  }

  @media only screen and (max-width: 1894px) {
    & {
      max-width: 80%;
    }
  }

  @media only screen and (max-width: 1770px) {
    & {
      max-width: 75%;
    }
  }

  @media only screen and (max-width: 1460px) {
    & {
      max-width: 65%;
    }
  }

  @media only screen and (max-width: 1242px) {
    & {
      max-width: fit-content;
    }
  }
`

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }

   html {
      font-size: 62.5%;
   }

   input {
      font-size: 1.6rem;
      color: #ddd;
      padding: 10px 20px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      transition: all .3s;
   }

   input:hover,
   input:focus {
      border-color: #4b37d2;
      outline: none;
   }

   button {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      user-select: none;
      gap: 5px;
      cursor: pointer;
      color: #ddd;
      padding: 10px;
      padding-bottom: 15px;
      border: none;
      border-radius: 10px;
      background-color: #4b37d2;
      text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.8);
      box-shadow: 0px -2px 0px 1px rgba(0, 0, 0, 0.3) inset,
      0px 2px 2px 2px rgba(0, 0, 0, 0.3);
      transition: all .2s;
   }
   
   button:hover {
      background-color: #4330bc;      
   }
   
   button:active {
      box-shadow: 0px -1px 0px 1px rgba(0, 0, 0, 0.3) inset,
      0px 0px 2px 0px rgba(0, 0, 0, 0.3);
      transition: none;
      transform: translateY(1px);
   }

   button:disabled {
      pointer-events: none;
      text-shadow: none;
      box-shadow: none;
      filter: grayscale();
   }

   body {
      font-size: 1.6rem;
      color: #ddd;
      text-shadow: 1px 2px 1px #000;
      padding-bottom: 100px;
      background: url(${backgroundAvatar}) no-repeat 103% bottom #242529;
      background-attachment: fixed;
      background-size: 21%;
   }

   @media only screen and (max-width: 1242px) {
      body {
         background-image: none;
      }
   }

   ::-webkit-scrollbar {
      width: 12px;
   }

   ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
   }

   ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 12px;
   }

   ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.3);
   }

   @keyframes loading {
      0% {
         background-position: 0% 0%;
      }
      100% {
         background-position: 100% 100%;
      }
   }

   &.--is-loading {
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 20%,  rgba(0, 0, 0, 0.1) 40%,  rgba(255, 255, 255, 0.1) 40%,  rgba(0, 0, 0, 0.1) 30%);
      background-size: 480% 200%;
      animation: loading 2s ease infinite;
   }

`
