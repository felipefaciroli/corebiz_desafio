import styled from 'styled-components';

export const Content = styled.div`
  padding-bottom: 60px;
  background: #F2F2F2;
  padding-top: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${props => props.theme.container};
  margin: 0 auto;
  padding: 0 15px;

  @media(max-width: 768px) {
    width: 100%;
  }

  > h4 {
    display: block;
    font-size: 22px;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
  }

  > label {
    display: block;
    margin: 0 6px;

    @media(max-width: 768px) {
      margin-bottom: 20px;
    }

    > input {
      width: 280px;
      height: 48px;
      border-radius: 5px;
      padding: 0 0 0 10px;
      border: 1px solid transparent;

      @media(max-width: 768px) {
        width: 288px;
      }

      &.error {
        border-color: #D7182A;
      }
    }

    > span {
      display: block;
      height: 22px;
      padding: 5px 0;
      font-size: 12px;
      color: #D7182A;
    }
  }

  > button {
    display: block;
    width: 140px;
    height: 48px;
    line-height: 48px;
    background-color: #000;
    border-radius: 5px;
    text-align: center;
    color: #FFF;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 22px;

    @media(max-width: 768px) {
      width: 288px;
      font-size: 14px;
    }
  }
`;


export const SuccessNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  > h5 {
    display: block;
    margin: 0 0 5px 0;
    text-align: center;
    color: #000;
    font-size: 22px;
    font-weight: 700;
  }

  > p {
    display: block;
    margin: 0 0 15px 0;
    text-align: center;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }

  > button {
    display: block;
    width: 328px;
    height: 48px;
    line-height: 48px;
    background-color: #000;
    border-radius: 5px;
    text-align: center;
    color: #FFF;
    font-size: 14px;
    font-weight: 700;
  }
`;