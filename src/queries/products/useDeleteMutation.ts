import { useMutation } from '@tanstack/react-query';
import PRODUCT_API from 'apis/productApi';
import { useNavigate } from 'react-router-dom';

export const useDeleteMutation = (productId: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => PRODUCT_API.DELETE.product(productId),
    onSuccess: (res) => {
      console.log('글 삭제 성공', res);
      alert('게시물을 삭제했습니다.');
      navigate('/product');
    },
    onError: (error) => {
      console.log('글 삭제 실패', error);
      alert('게시물을 삭제하지 못했습니다.');
    },
  });
};
