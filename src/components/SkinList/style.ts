import styled from 'styled-components'

export const Container = styled.div`
  & {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1242px) {
    & {
      justify-content: center;
    }
  }

  .list-separator {
    position: relative;
    width: 100%;
    height: 2px;
    margin: 20px 0px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
  }
  .list-separator:before {
    content: 'new content';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    padding-bottom: 8px;
    border-radius: 20px;
    text-shadow: none;
    background-color: #4b37d2;
  }

  .list-separator.--is-end:before {
    content: 'no more content';
    background-color: #1d1e21;
  }

  button {
    width: 100%;
  }
`
