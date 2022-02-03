import styled from 'styled-components';

export const Content = styled.header`
  @media(max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.theme.container};
  margin: 0 auto;
  padding: 16px 15px;
`;

export const Logo = styled.h1`
  
`;