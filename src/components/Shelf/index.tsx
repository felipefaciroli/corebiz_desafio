import React, { useEffect, useState } from 'react';

import {
  Content,
  Container,
  ListProducts,
  ProductItem,
  ProductImage,
  ProductName,
  ProductRating,
  ProductPricing,
  ProductButton
} from './styles';
import api from '../../config/api';
import Stars from '../Stars';
import formatCurrency from '../../utils/formatCurrency';

interface IProduct {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number;
  price: number;
  installments: {
    [index: number]: {
      quantity: number;
      value: number;
    }
  };
}

const Shelf: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const { data } = await api.get('/products');

    console.log(data);

    if (data.length > 0) {
      setProducts(data);
    }
  }

  return (
    <Content>
      <Container>
        <h2>Mais Vendidos</h2>

        <ListProducts>
          {products && products.length > 0 && products.map((product) => (
            <ProductItem key={product.productId}>
              <a href="#">
                <ProductImage>
                  <img src={product.imageUrl} alt={product.productName} />
                </ProductImage>

                <ProductName>{product.productName}</ProductName>

                <ProductRating>
                  <Stars quantity={product.stars} />
                </ProductRating>

                <ProductPricing>
                  <div className="listPrice">
                    {product.listPrice && (
                      <>
                        <em>de</em>
                        <span>{formatCurrency(product.listPrice / 100)}</span>
                      </>
                    )}
                  </div>
                  <div className="price">
                    <em>por</em>
                    <span>{formatCurrency(product.price / 100)}</span>
                  </div>
                  {/* {product.installments.map((inst, i) => (
                    <div key={i} className="installments">
                      <span>ou em {product.installments[0].quantity}x de {product.installments[0].value}</span>
                    </div>
                  ))} */}
                </ProductPricing>

                <ProductButton>Comprar</ProductButton>
              </a>
            </ProductItem>
          ))}
        </ListProducts>
      </Container>
    </Content>
  )
}

export default Shelf;