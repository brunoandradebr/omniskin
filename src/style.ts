import styled, { createGlobalStyle } from 'styled-components'

const backgroundAvatarList = [
   'https://cdn.hellcase.com/warbreak/img/agent/operator-fbi-swat.png',
   'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/sas_g.png?v=2',
   'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/gendarm_d.png?v=2',
   'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/gendarm_c.png?v=3',
   'https://cdn.akamai.steamstatic.com/apps/csgo/images/operationriptide/agents/jungleraider_d.png',
   'https://static.invenglobal.com/upload/image/2021/09/22/i1632291793365468.png',
   'https://static.invenglobal.com/upload/image/2021/09/22/i1632291802144837.png',
   'https://static.invenglobal.com/upload/image/2021/09/22/i1632291803617247.png',
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

   body {
      font-size: 1.6rem;
      color: #ddd;
      text-shadow: 1px 2px 1px #000;
      padding-bottom: 100px;
      background: url(${backgroundAvatar}) no-repeat 103% bottom #242529;
      background-attachment: fixed;
      background-size: 25%;
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
