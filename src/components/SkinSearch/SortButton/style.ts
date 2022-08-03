import styled from 'styled-components'

export const Container = styled.div`
   & {
      user-select: none;
   }

   .sort-button {
      cursor: pointer;
      display: flex;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 5px;
      border-radius: 10px;
      border: 2px solid rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
   }
   .sort-button:hover {
      border-color: #4b37d2;
   }

   .sort-fieldIcon {
      font-size: 2.4rem;
      animation: change 0.3s ease;
   }
   .sort-orderIcon {
      font-size: 1.8rem;
      animation: change 0.5s ease;
   }

   @keyframes change {
      from {
         transform: translateY(-100vh);
      }
      to {
         transform: translateY(0);
      }
   }
`
