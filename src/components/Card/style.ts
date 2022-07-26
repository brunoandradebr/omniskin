import styled from 'styled-components'

export const Container = styled.a`
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
      background-color: rgba(0, 0, 0, 0.3);
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
      }
   }

   .skin-imageContainer .skin-image {
      width: inherit;
      padding: 40px;
   }

   @media only screen and (max-width: 536px) {
      .skin-imageContainer .skin-image {
         width: 100px;
         padding: 0px;
      }
   }

   .skin-imageContainer .skin-store {
      position: absolute;
      top: 0;
      right: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: inherit;
      border-bottom-left-radius: 20px;
   }

   .skin-imageContainer a {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 10px;
      left: 20px;
      font-size: 1.8rem;
      padding: 10px;
      color: inherit;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
   }

   .skin-imageContainer a:hover {
      background-color: royalblue;
   }

   @media only screen and (max-width: 536px) {
      .skin-imageContainer a {
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
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
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
      right: -10px;
   }
`
