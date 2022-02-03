import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > a {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
    color: #7A7A7A;
    margin-left: 30px;

    @media(max-width: 768px) {
      margin: 0;
    }

    &.user {
      @media(max-width: 768px) {
        display: none;
      }
    }

    > svg {
      margin-right: 5px;
    }
  }
`;

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #7A7A7A;

  > svg {
    margin-right: 5px;
  }
`;

export const Amount = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #F8475F;
  color: #FFF;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  line-height: 14px;
`;