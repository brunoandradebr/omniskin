import styled from 'styled-components'

export const Container = styled.div`
   & {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
   }

   @media only screen and (max-width: 1335px) {
      & {
         grid-template-columns: repeat(4, 1fr);
      }
   }

   @media only screen and (max-width: 1059px) {
      & {
         grid-template-columns: repeat(3, 1fr);
      }
   }

   @media only screen and (max-width: 797px) {
      & {
         grid-template-columns: repeat(2, 1fr);
      }
   }

   @media only screen and (max-width: 536px) {
      & {
         grid-template-columns: repeat(1, 1fr);
      }
   }
`
