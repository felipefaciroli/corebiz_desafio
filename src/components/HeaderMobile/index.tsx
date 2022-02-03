import React from 'react';
import AccountBox from '../AccountBox';
import SearchBox from '../SearchBox';

import {
  Content,
  Container,
  Logo,
  MenuBar,
  HeaderTop
} from './styles';

const HeaderMobile: React.FC = () => {
  return (
    <Content>
      <Container>
        <HeaderTop>
          <MenuBar>
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.0154H22.5V12.5128H0V15.0154ZM0 8.75904H22.5V6.25647H0V8.75904ZM0 0V2.50257H22.5V0H0Z" fill="black" />
            </svg>
          </MenuBar>

          <Logo>
            <a href="/">
              <svg width="181" height="41" viewBox="0 0 181 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M140.158 40.9009H133.817V12.3971H140.158V40.9009Z" fill="black" />
                <path d="M13.7624 18.2415C12.7821 18.228 11.8098 18.4216 10.9083 18.8097C10.0067 19.1979 9.1958 19.772 8.52777 20.495C7.10238 21.9809 6.38968 24.0364 6.38968 26.6366C6.38968 29.2369 7.10238 31.3419 8.55234 32.8525C9.23066 33.5842 10.0533 34.1648 10.9675 34.5572C11.8817 34.9495 12.8672 35.1449 13.8607 35.1308C15.7284 35.1308 17.2276 34.6108 18.358 33.5954C19.409 32.6719 20.1835 31.4712 20.5944 30.1284L26.1977 32.1839C25.4604 34.586 24.035 36.6662 21.9215 38.3997C19.808 40.1332 17.1293 41 13.8607 41C9.92858 41 6.63544 39.638 3.98126 36.8891C1.32709 34.1403 0 30.7228 0 26.6366C0 22.501 1.30251 19.0835 3.93211 16.3842C6.56171 13.6848 9.8057 12.3228 13.7132 12.3228C17.0555 12.3228 19.7834 13.1895 21.8969 14.923C23.9007 16.5099 25.3406 18.7081 26.0011 21.1885L20.2749 23.2934C19.9312 21.9223 19.1964 20.6826 18.1614 19.7274C17.0826 18.7368 15.6326 18.2415 13.7624 18.2415Z" fill="black" />
                <path d="M36.7185 32.7782C37.4251 33.4986 38.2661 34.0711 39.1931 34.4625C40.1202 34.8539 41.1149 35.0566 42.1201 35.0589C43.1252 35.0612 44.1209 34.8631 45.0497 34.4759C45.9785 34.0887 46.8221 33.5202 47.5319 32.803C49.0064 31.2923 49.7437 29.2121 49.7437 26.5128C49.7437 23.863 49.0064 21.8076 47.5319 20.3217C46.0892 18.8933 44.1477 18.093 42.1252 18.093C40.1027 18.093 38.1612 18.8933 36.7185 20.3217C35.244 21.8076 34.5067 23.863 34.5067 26.5128C34.5067 29.1626 35.244 31.2676 36.7185 32.7782ZM42.1252 12.3228C46.2293 12.3228 49.6208 13.6601 52.275 16.3346C54.9291 19.0092 56.2808 22.4019 56.2808 26.5376C56.2808 30.6732 54.9537 34.066 52.275 36.7653C49.5962 39.4646 46.2293 40.8019 42.1252 40.8019C38.0702 40.8019 34.7033 39.4646 32.0246 36.7653C29.3458 34.066 28.0188 30.6485 28.0188 26.5376C28.0188 22.4267 29.3458 19.0339 32.0246 16.3346C34.7033 13.6353 38.0456 12.3228 42.1252 12.3228Z" fill="black" />
                <path d="M72.8202 12.4961V19.0092C72.1288 18.9023 71.4308 18.8443 70.7313 18.8358C65.9145 18.8358 63.5306 21.2132 63.5306 26.488V40.8019H57.141V12.3971H63.3586V16.9537C63.9699 15.5195 65.032 14.3274 66.3814 13.561C67.8207 12.7198 69.461 12.2916 71.1245 12.3228C71.6944 12.3179 72.263 12.376 72.8202 12.4961Z" fill="black" />
                <path d="M81.5446 23.6154H95.7739C95.7513 22.8139 95.5676 22.0254 95.2339 21.2975C94.9002 20.5696 94.4234 19.9175 93.8325 19.3807C92.6283 18.2415 90.8834 17.6719 88.6224 17.6719C86.5581 17.6719 84.8869 18.2663 83.6335 19.4549C82.3802 20.6436 81.6675 22.0403 81.5446 23.6154ZM96.5358 30.5989L102.36 32.3077C101.525 34.7594 99.9764 36.7901 97.6908 38.3997C95.4053 40.0094 92.6037 40.8019 89.2614 40.8019C85.1327 40.8019 81.6429 39.4894 78.7676 36.8891C75.8922 34.2888 74.4422 30.7971 74.4422 26.4137C74.4422 22.3029 75.8431 18.9101 78.6447 16.2851C81.3006 13.7035 84.8588 12.28 88.5487 12.3228C92.9969 12.3228 96.4621 13.5858 98.9688 16.087C101.476 18.5882 102.726 21.9809 102.726 26.2503C102.726 27.3895 102.677 28.0581 102.554 28.281H81.3701C81.3967 29.2392 81.6252 30.1808 82.0404 31.0432C82.4556 31.9057 83.0481 32.6693 83.7785 33.2834C85.3092 34.6038 87.2691 35.3091 89.2835 35.2646C92.9969 35.2794 95.4299 33.7193 96.5358 30.5989Z" fill="black" />
                <path d="M110.569 40.9009H104.081V0H110.618V16.4683C111.306 15.3292 112.436 14.3634 114.009 13.5957C115.698 12.7926 117.549 12.3942 119.416 12.4317C123.471 12.4317 126.641 13.7443 128.927 16.3941C131.212 19.0438 132.343 22.4118 132.343 26.5227C132.343 30.7079 131.138 34.1254 128.755 36.8247C126.371 39.524 123.176 40.8365 119.195 40.8365C115.213 40.8365 112.338 39.425 110.569 36.5771V40.9009ZM123.52 32.803C124.921 31.2676 125.609 29.1874 125.609 26.5623C125.609 23.9373 124.921 21.8819 123.544 20.3712C122.168 18.8606 120.35 18.1177 118.089 18.1177C115.901 18.1177 114.107 18.8606 112.682 20.3712C111.257 21.8819 110.569 23.9373 110.569 26.5623C110.569 29.1874 111.281 31.218 112.682 32.7782C114.083 34.3384 115.901 35.1061 118.089 35.1061C120.325 35.1061 122.119 34.3384 123.52 32.803Z" fill="black" />
                <path d="M170.14 40.8762H142.173V35.2794L159.843 18.0434H141.878V12.3971H170.091V17.8304L152.2 35.215H170.14V40.8861V40.8762Z" fill="black" />
                <path d="M173.26 39.6905C172.836 39.2763 172.501 38.7798 172.276 38.2315C172.051 37.6832 171.94 37.0946 171.951 36.502C171.94 35.9058 172.05 35.3136 172.275 34.7614C172.501 34.2091 172.836 33.7084 173.26 33.2896C173.669 32.8562 174.164 32.5135 174.714 32.284C175.263 32.0544 175.855 31.943 176.451 31.9571C177.657 31.9583 178.813 32.4376 179.665 33.2896C180.518 34.1417 180.998 35.297 180.999 36.502C181.013 37.0972 180.901 37.6887 180.672 38.2381C180.442 38.7874 180.099 39.2823 179.665 39.6905C179.245 40.1132 178.744 40.4469 178.191 40.6718C177.639 40.8966 177.047 41.008 176.451 40.9993C175.858 41.01 175.269 40.8995 174.72 40.6744C174.172 40.4493 173.675 40.1145 173.26 39.6905Z" fill="#BFBFBF" />
              </svg>
            </a>
          </Logo>

          <AccountBox />
        </HeaderTop>

        <SearchBox />
      </Container>
    </Content>
  )
}

export default HeaderMobile;