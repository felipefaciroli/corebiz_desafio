import styled from 'styled-components';

export const Content = styled.div`
  display: none;
  margin-bottom: 25px;

  @media(max-width: 768px) {
    display: block;
  }

  > img {
    display: block;
    width: 100%;
  }
`;