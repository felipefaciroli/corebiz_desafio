import styled from 'styled-components';

export const Content = styled.div`
  
`;

export const Container = styled.div`
  width: ${props => props.theme.container};
  margin: 0 auto;
  padding: 0 15px;
  
  > h2 {
    display: block;
    font-size: 20px;
    font-weight: 900;
    color: #000;
    padding-bottom: 6px;
    margin-bottom: 26px;

    &:after {
      content: '';
      display: block;
      width: 65px;
      height: 4px;
      background-color: #C0C0C0;
    }
  }
`;

export const ListProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductItem = styled.div`
  width: 216px;
  margin-bottom: 20px;
  
  > a {
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      button {
        visibility: visible;
      }
    }
  }
`;

export const ProductImage = styled.div`
  margin-bottom: 7px;

  > img {
    display: block;
    width: 100%;
  }
`;

export const ProductName = styled.h3`
  display: block;
  margin-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  color: #7A7A7A;
`;

export const ProductRating = styled.div`
`;

export const ProductPricing = styled.div`
  .listPrice {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16px;
    font-size: 12px;
    color: #7A7A7A;

    > em {
      font-style: normal;
      padding-right: 5px;
    }
  }

  .price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    padding: 5px 0;

    > em {
      font-style: normal;
      padding-right: 5px;
    }
  }
`;

export const ProductButton = styled.button`
  display: block;
  visibility: hidden;
  width: 125px;
  height: 32px;
  line-height: 32px;
  background-color: #000;
  border-radius: 5px;
  text-align: center;
  color: #FFF;
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
`;