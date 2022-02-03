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

  > input {
    width: 280px;
    height: 48px;
    border-radius: 5px;
    margin: 0 6px;
    padding: 0 0 0 10px;
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
  }
`;