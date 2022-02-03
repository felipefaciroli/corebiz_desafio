import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import {
  Content,
  Container,
  ListProducts,
  ProductItem,
  ProductImage,
  ProductInfo,
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

    if (data.length > 0) {
      setProducts(data);
    }
  }

  const addToCart = (product: any) => {
    const storageCart = localStorage.getItem('@corebiz:cart') || '';

    var list = [];

    if (storageCart) {
      list = JSON.parse(storageCart);
    }

    if (!list.find((item: any) => item.productId === product.productId)) {
      list.push(product);
      localStorage.setItem('@corebiz:cart', JSON.stringify(list));
    }

    Swal.fire(
      'Parabéns!',
      'Produto adicionado ao carrinho',
      'success'
    ).then(() => {
      window.location.reload();
    })
  }

  return (
    <Content>
      <Container>
        <h2>Mais Vendidos</h2>

        <ListProducts>
          {products && products.length > 0 && products.map((product) => (
            <ProductItem key={product.productId}>
              <ProductImage>
                <a href="#">
                  <img src={product.imageUrl} alt={product.productName} />
                </a>
              </ProductImage>

              <ProductInfo>
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

                <ProductButton onClick={() => addToCart(product)}>Comprar</ProductButton>
              </ProductInfo>
            </ProductItem>
          ))}
        </ListProducts>
      </Container>
    </Content>
  )
}

export default Shelf;