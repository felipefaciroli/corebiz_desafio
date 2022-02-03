import styled from 'styled-components';

export const Content = styled.div`
  margin-bottom: 25px;

  @media(max-width: 768px) {
    display: none;
  }

  > img {
    display: block;
    width: 100%;
  }
`;