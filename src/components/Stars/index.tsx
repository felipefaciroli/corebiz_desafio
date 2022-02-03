import React, { useState } from 'react';

import {
  Container
} from './styles';

interface IStars {
  quantity: number;
}

const Stars: React.FC<IStars> = ({ quantity }) => {
  const [sts, setSts] = useState([1, 2, 3, 4, 5]);

  return (
    <Container>
      {sts.map((i) => (
        i + 1 <= quantity ? (
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.69478 8.68583L9.21415 10.649L8.28021 6.94899L11.3896 4.45951L7.29501 4.13846L5.69478 0.648987L4.09454 4.13846L0 4.45951L3.10935 6.94899L2.17541 10.649L5.69478 8.68583Z" fill="#F8475F" />
          </svg>
        ) : (
          <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3896 4.4595L7.29501 4.13318L5.69478 0.648972L4.09454 4.13845L0 4.4595L3.10935 6.94897L2.17541 10.649L5.69478 8.68581L9.21415 10.649L8.2859 6.94897L11.3896 4.4595ZM5.69479 7.7016L3.55355 8.89634L4.12303 6.64371L2.23236 5.12792L4.72667 4.92792L5.69479 2.80687L6.66859 4.93318L9.1629 5.13318L7.27224 6.64897L7.84172 8.9016L5.69479 7.7016Z" fill="#F8475F" />
          </svg>
        )
      ))}
    </Container>
  )
}

export default Stars;