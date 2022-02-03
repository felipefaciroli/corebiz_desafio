import styled from 'styled-components';

export const Content = styled.footer`
  background: #000000;
  padding: 30px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.theme.container};
  margin: 0 auto;
  padding: 0 15px;
  color: #FFF;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Locale = styled.div`
  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }

  > h5 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 25px;

    &:after {
      content: '';
      display: block;
      width: 65px;
      height: 4px;
      background-color: #FFFFFF;
      margin-top: 15px;
    }
  }

  > p {
    margin-bottom: 5px;
    font-size: 13px;

    > a {
      color: #FFF;
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }

  > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    height: 38px;
    margin: 10px 0;
    background: #FFF;
    border-radius: 5px;
    padding: 0 10px;
    box-sizing: border-box;

    > svg {
      width: 45px;
      height: 22px;
      margin-right: 10px;
    }

    > span {
      display: block;
      width: 149px;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

export const Tecnologies = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 768px) {
    width: 100%;
    padding: 0 30px;
  }

  > a {
    display: block;
    margin-left: 25px;

    @media(max-width: 768px) {
      margin: 0;
    }

    > span {
      display: block;
      margin-bottom: 5px;
      color: #FFF;
      font-size: 11px;
      font-weight: 400;
    }
  }
`;