import styled from 'styled-components';

export const Content = styled.header`
  display: none;
  @media(max-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 16px 15px;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Logo = styled.h1`
  > a {
    > svg {
      width: 102px;
    }
  }
`;

export const MenuBar = styled.div`
  cursor: pointer;
`;
