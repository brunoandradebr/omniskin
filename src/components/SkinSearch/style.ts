import styled from 'styled-components'

export const Container = styled.div`
   & {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      gap: 20px;
   }

   @media only screen and (max-width: 1309px) {
      & {
         justify-content: center;
      }
   }
`
