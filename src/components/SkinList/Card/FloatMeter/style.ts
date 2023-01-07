import styled from 'styled-components'

export const Container = styled.div`
   position: relative;
   display: flex;
   width: inherit;
   height: 5px;
   border-radius: 5px;

   .bar {
      display: block;
      height: inherit;
   }
   .bar:first-of-type {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
   }
   .bar:last-of-type {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
   }

   .bar.fn {
      width: 7%;
      background-color: #4169e1;
   }
   .bar.mw {
      width: 8%;
      background-color: #84b235;
   }
   .bar.ft {
      width: 23%;
      background-color: #dfc04a;
   }
   .bar.ww {
      width: 7%;
      background-color: #ef8641;
   }
   .bar.bs {
      width: 55%;
      background-color: #eb5757;
   }

   .bar-indicator {
      position: absolute;
      bottom: 5px;
      transform: rotateZ(180deg);
   }
`
