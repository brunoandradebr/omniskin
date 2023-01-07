import styled from 'styled-components'

export const Container = styled.div`
  & {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 20px;
  }

  @media only screen and (max-width: 1330px) {
    & {
      justify-content: center;
    }
  }

  @media only screen and (max-width: 536px) {
    & {
      justify-content: flex-start;
    }
  }
`
