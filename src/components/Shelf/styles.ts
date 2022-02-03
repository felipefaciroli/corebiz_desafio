import styled from 'styled-components';

export const Content = styled.div`
  
`;

export const Container = styled.div`
  width: ${props => props.theme.container};
  margin: 0 auto;
  padding: 0 15px;

  @media(max-width: 768px) {
    width: 100%;
  }
  
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
  margin-bottom: 40px;

  .slick-dots {
    li {
      &.slick-active {
        button {
          background: #F8475F;
        }
      }

      button {
        width: 10px;
        height: 10px;
        padding: 0;
        background: #BDBDBD;
        border-radius: 50%;

        &:before {
          display: none;
        }
      }
    }
  }
`;

export const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 0 0 20px 0;
  padding: 20px;

  &:hover {
    button {
      visibility: visible;
    }

    > div {
      background-color: #E6E8EA;
    }
  }
`;

export const ProductImage = styled.div`
  margin-bottom: 7px;
  position: relative;

  .flag-discount {
    position: absolute;
    top: 0;
    right: 0;

    > svg {
      width: 90px;
      height: 80px;
    }
  }

  > a {
    display: block;
    > img {
      display: block;
      width: 100%;
    }
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 15px 0;
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

  .installments {
    height: 22px;

    > span {
      display: block;
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