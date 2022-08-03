import styled from 'styled-components'

import logo from './assets/images/omniskin-logo.png'

export const Container = styled.div`
   & {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
   }

   .logo {
      width: 153px;
      height: 35px;
      background: url(${logo}) no-repeat center center;
      background-size: contain;
   }
`
