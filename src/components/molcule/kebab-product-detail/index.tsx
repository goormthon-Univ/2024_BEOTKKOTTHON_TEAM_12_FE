import BoxKebabList from 'components/atom/box-kebab-list';
import { USER_ID } from 'constants/shared';
import { useHideMutation } from 'queries/products/useHideMutation';
import { useOnSaleMutation } from 'queries/products/useOnSaleMutation';
import { Link } from 'react-router-dom';
import ModalProduct from '../modal-product';
import { useDeleteMutation } from 'queries/products/useDeleteMutation';
import { useProduct } from 'store/product';
import { ProductDetailItem } from 'types/productType';
import { useBlockUserMutation } from 'queries/products/useBlockUserMutation';
import { useToggle } from 'hooks/useToggle';

interface KebabProductDetailProps {
  id: string;
}

const KebabProductDetail = ({ id }: KebabProductDetailProps) => {
  const product = useProduct();
  const [isOpenModal, togleOpenModal] = useToggle(false);

  const { mutate: onSaleMutation } = useOnSaleMutation(id, product as ProductDetailItem);
  const { mutate: hideMutation } = useHideMutation(id);
  const { mutate: deleteMutation } = useDeleteMutation(id);
  const { mutate: blockMutation } = useBlockUserMutation(product?.seller.id as number);

  if (!product) return null;

  return (
    <>
      {product.seller?.id !== USER_ID ? (
        <BoxKebabList>
          <p onClick={() => blockMutation()}>차단하기</p>
          <p className="red">신고하기</p>
        </BoxKebabList>
      ) : (
        <BoxKebabList>
          <p>
            <Link to={`/product/edit/${id}`}>수정하기</Link>
          </p>

          <p onClick={() => onSaleMutation()}>
            {product.post_status === 'onSale' ? '판매 완료로 변경' : '판매 중으로 변경'}
          </p>

          <p onClick={() => hideMutation()}>{product.is_private ? '글 숨김 취소' : '글 숨기기'}</p>

          <p className="red" onClick={togleOpenModal}>
            삭제
          </p>
        </BoxKebabList>
      )}

      {isOpenModal && (
        <ModalProduct
          select1="취소"
          select2="삭제"
          isOpenModal={isOpenModal}
          togleOpenModal={togleOpenModal}
          id={id as string}
          onClick={() => deleteMutation()}
        >
          <p>게시글을 삭제하시겠어요?</p>
        </ModalProduct>
      )}
    </>
  );
};

export default KebabProductDetail;
