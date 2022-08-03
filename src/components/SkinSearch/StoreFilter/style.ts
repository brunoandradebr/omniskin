import styled from 'styled-components'

export const Container = styled.div`
   .store-list {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   .store {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.3);
      padding-inline: 20px;
      padding-block: 5px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      border-right: 0;
      filter: grayscale(1);
      transition: all 0.3s;
   }

   @keyframes effect {
      0% {
         filter: brightness(1);
      }
      50% {
         filter: brightness(1.4);
      }
      100% {
         filter: brightness(1);
      }
   }

   .store.store.--is-active,
   .store.store:hover {
      animation: effect 2.5s ease-in-out infinite;
   }

   .store.--is-active,
   .store:hover {
      box-shadow: 0px 0px 30px 0px rgba(50, 50, 255, 0.7) inset;
   }

   .store.--is-active:hover {
      box-shadow: 0px 0px 30px 0px rgba(50, 50, 255, 0) inset;
   }

   .store:first-of-type {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
   }
   .store:last-of-type {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-right: 2px solid rgba(0, 0, 0, 0.3);
   }

   .store img {
      width: 32px;
   }

   .store.csmoney img,
   .store.dmarket img {
      padding: 3px;
   }
`
