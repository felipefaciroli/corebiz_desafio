import styled from 'styled-components';

export const Container = styled.div`
  width: 718px;
  position: relative;

  > input {
    display: block;
    width: 100%;
    padding: 0 0 10px 10px;
    color: #7A7A7A;
    font-size: 13px;
    font-weight: 400;
    border-bottom: 1px solid #7A7A7A;
  }

  > button {
    position: absolute;
    top: 5px;
    right: 3px;
  }
`;