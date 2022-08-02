import styled from 'styled-components'

export const Container = styled.div`
   & {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
   }

   .list-separator {
      width: 100%;
      height: 2px;
      background-color: rgba(0, 0, 0, 0.3);
      box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
   }
`
