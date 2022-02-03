import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  installments: [Installments];
}

type Installments = {
  quantity: number;
  value: number;
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1115 10.1416L3.3212 0.351461C3.09476 0.124845 2.79249 0 2.47018 0C2.14788 0 1.8456 0.124845 1.61917 0.351461L0.89818 1.07227C0.42903 1.54195 0.42903 2.30533 0.89818 2.7743L9.11932 10.9954L0.889058 19.2257C0.662621 19.4523 0.537598 19.7544 0.537598 20.0765C0.537598 20.399 0.662621 20.7011 0.889058 20.9279L1.61004 21.6485C1.83666 21.8752 2.13876 22 2.46106 22C2.78337 22 3.08564 21.8752 3.31208 21.6485L13.1115 11.8495C13.3385 11.6222 13.4631 11.3186 13.4624 10.996C13.4631 10.6721 13.3385 10.3687 13.1115 10.1416Z" fill="black" />
      </svg>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.88085 11.0047L13.111 2.77415C13.3376 2.54806 13.4623 2.24579 13.4623 1.92348C13.4623 1.60099 13.3376 1.29889 13.111 1.07246L12.3898 0.351642C12.1636 0.124846 11.8611 0 11.5388 0C11.2165 0 10.9144 0.124846 10.688 0.351642L0.888651 10.1508C0.661318 10.3779 0.53683 10.6814 0.537725 11.0041C0.53683 11.3282 0.661139 11.6314 0.888651 11.8587L10.6788 21.6484C10.9053 21.8752 11.2074 22 11.5299 22C11.8522 22 12.1543 21.8752 12.3809 21.6484L13.1019 20.9275C13.571 20.4584 13.571 19.6946 13.1019 19.2257L4.88085 11.0047Z" fill="black" />
      </svg>
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    }
  ]
};

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
          <Slider {...settings}>
            {products && products.length > 0 && products.map((product) => (
              <ProductItem key={product.productId}>
                <ProductImage>
                  <a href="https://www.corebiz.ag">
                    <img src={product.imageUrl} alt={product.productName} />
                  </a>

                  {product.listPrice && (
                    <div className="flag-discount">
                      <svg width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.8053 44.5355L0.405296 -2.67029e-05L50.8053 -2.67029e-05L50.8053 44.5355Z" fill="#F8475F" />
                        <path d="M29.2323 17.651C28.5657 17.651 27.9857 17.5043 27.4923 17.211C27.0057 16.9177 26.629 16.501 26.3623 15.961C26.0957 15.421 25.9623 14.7843 25.9623 14.051C25.9623 13.311 26.0923 12.671 26.3523 12.131C26.619 11.5843 26.999 11.1677 27.4923 10.881C27.9857 10.5877 28.5657 10.441 29.2323 10.441C29.9057 10.441 30.489 10.5877 30.9823 10.881C31.4757 11.1677 31.8523 11.5843 32.1123 12.131C32.379 12.671 32.5123 13.3077 32.5123 14.041C32.5123 14.7743 32.379 15.4143 32.1123 15.961C31.8523 16.501 31.4757 16.9177 30.9823 17.211C30.489 17.5043 29.9057 17.651 29.2323 17.651ZM29.2323 16.811C29.939 16.811 30.489 16.571 30.8823 16.091C31.2757 15.611 31.4723 14.9277 31.4723 14.041C31.4723 13.1543 31.2757 12.4743 30.8823 12.001C30.4957 11.521 29.9457 11.281 29.2323 11.281C28.5323 11.281 27.9857 11.521 27.5923 12.001C27.2057 12.4743 27.0123 13.1543 27.0123 14.041C27.0123 14.9277 27.2057 15.611 27.5923 16.091C27.9857 16.571 28.5323 16.811 29.2323 16.811ZM34.4272 17.621C34.2738 17.621 34.1505 17.5743 34.0572 17.481C33.9638 17.381 33.9172 17.2543 33.9172 17.101V11.021C33.9172 10.8677 33.9605 10.7477 34.0472 10.661C34.1405 10.5677 34.2672 10.521 34.4272 10.521H38.0072C38.3272 10.521 38.4872 10.661 38.4872 10.941C38.4872 11.221 38.3272 11.361 38.0072 11.361H34.9372V13.571H37.8072C38.1272 13.571 38.2872 13.711 38.2872 13.991C38.2872 14.271 38.1272 14.411 37.8072 14.411H34.9372V17.101C34.9372 17.261 34.8905 17.3877 34.7972 17.481C34.7105 17.5743 34.5872 17.621 34.4272 17.621ZM40.0326 17.621C39.8793 17.621 39.756 17.5743 39.6626 17.481C39.5693 17.381 39.5226 17.2543 39.5226 17.101V11.021C39.5226 10.8677 39.566 10.7477 39.6526 10.661C39.746 10.5677 39.8726 10.521 40.0326 10.521H43.6126C43.9326 10.521 44.0926 10.661 44.0926 10.941C44.0926 11.221 43.9326 11.361 43.6126 11.361H40.5426V13.571H43.4126C43.7326 13.571 43.8926 13.711 43.8926 13.991C43.8926 14.271 43.7326 14.411 43.4126 14.411H40.5426V17.101C40.5426 17.261 40.496 17.3877 40.4026 17.481C40.316 17.5743 40.1926 17.621 40.0326 17.621Z" fill="white" />
                      </svg>
                    </div>
                  )}
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
                    <div className="installments">
                      {product.installments.map((inst, i) => (
                        <span key={i}>ou em {product.installments[0].quantity}x de {formatCurrency(product.installments[0].value / 100)}</span>
                      ))}
                    </div>
                  </ProductPricing>

                  <ProductButton onClick={() => addToCart(product)}>Comprar</ProductButton>
                </ProductInfo>
              </ProductItem>
            ))}
          </Slider>
        </ListProducts>
      </Container>
    </Content>
  )
}

export default Shelf;