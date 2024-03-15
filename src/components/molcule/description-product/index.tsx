import { Product } from 'src/types/types';
import * as S from './style';
import stategrey from '@assets/icons/state_grey.svg';
import stategreen from '@assets/icons/state_green.svg';
import { useEffect } from 'react';

interface DescriptionProductProps {
  product: Product;
}

// product를 사용하는 것이 아닌 서버에서 보내온 정보를 사용

const DescriptionProduct = ({ product }: DescriptionProductProps) => {
  const circleUrl = product.state === '아주 좋아요' ? stategreen : stategrey;

  useEffect(() =>
    // 서버에서 해당 상품에 대한 정보 불러오기
    {}, []);

  return (
    <S.Container>
      <p className="name">{product.name}</p>

      <S.SubTitle>
        <img src={circleUrl} alt="none-trade" />

        <p className="state">상품 상태 : {product.state}</p>
        <p className="time">{product.time}</p>
      </S.SubTitle>

      <p className="description">{product.description}</p>

      <p className="place">
        성균관 대학교<span>{product.place}</span>에서 만나요!
      </p>
    </S.Container>
  );
};

export default DescriptionProduct;
