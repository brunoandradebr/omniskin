import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
   & {
      display: flex;
      flex-direction: column;
      max-width: 1336px;
      margin: 0 auto;
      padding: 20px;
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
      border-radius: 20px;
      transition: all .3s;
   }

   input:hover,
   input:focus {
      border-color: royalblue;
      outline: none;
   }

   body {
      font-size: 1.6rem;
      background-color: #242529;
      color: #ddd;
      text-shadow: 1px 2px 1px #000;
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
