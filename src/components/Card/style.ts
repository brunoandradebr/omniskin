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
      border: 1px solid #111;
      box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
   }

   &.--is-loading {
      height: 435px;
   }

   @media only screen and (max-width: 536px) {
      & {
         width: 320px;
      }
   }

   &:hover {
      border: 1px solid #333;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
      background-color: #333;
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

   .skin-imageContainer .skin-image {
      width: inherit;
      padding: 40px;
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
      background-color: #0e0e0e;
      border-radius: inherit;
   }

   .skin-description {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   .skin-name {
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
   }

   .skin-quality,
   .skin-pattern,
   .skin-price {
      border-bottom: 1px solid #111;
      border-bottom-left-radius: 14px;
   }

   .skin-quality span,
   .skin-pattern span,
   .skin-price span {
      display: inline-block;
      width: 80px;
      padding: 3px 14px;
      border-radius: inherit;
      background-color: #000;
   }
`
