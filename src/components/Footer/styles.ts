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
`;

export const Locale = styled.div`
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

  > a {
    display: block;
    margin-left: 25px;

    > span {
      display: block;
      margin-bottom: 5px;
      color: #FFF;
      font-size: 11px;
      font-weight: 400;
    }
  }
`;