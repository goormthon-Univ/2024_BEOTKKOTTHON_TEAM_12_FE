import {
  BoxInput,
  FormGroup,
  FormRadio,
  ListImage,
  ListTradeForm,
  ListTag,
} from 'components/index';
import * as S from './style';
import { placeList, priceList } from 'data/shared';
import Button from 'components/atom/button-trade';
import { useLocation, useNavigate } from 'react-router-dom';
import { transformPrice } from 'utils/transformPrice';
import { useFormData, useFormDataActions, useShowImages } from 'store/formData';
import { instance } from 'apis';

const FormTrade = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = useFormData();
  const showImages = useShowImages();
  const { setFormData, resetFormData } = useFormDataActions();

  const isEdit = location.pathname.includes('edit');
  const userId = 1;

  const disabled = !(
    formData.product_name &&
    formData.category &&
    formData.product_status &&
    formData.product_content &&
    formData.price &&
    formData.place
  );

  // useEffect(() => {
  //   resetFormData();

  //   if (isEdit) {

  //     // edit 페이지
  //     // 서버에서 데이터 받아와서 receivedData에 저장
  //     receiveData(salesData[Number(id) - 1]);
  //   }
  // }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const sendData = {
      product_image: formData.product_image,
      product_name: formData.product_name,
      category_name: formData.category,
      product_status: formData.product_status,
      product_content: formData.product_content,
      price: formData.price,
      place: formData.place,
    };

    await instance
      .post(`/products/new/${userId}`, sendData)
      .then((res) => {
        console.log('폼 전송 성공', res);
      })
      .catch((e) => console.log('폼 전송 실패', e))
      .finally(() => console.log({ ...sendData }));
    resetFormData();
    navigate('/product');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup $imglen={showImages.length}>
        <p className="label">
          이미지 업로드 (<span className="sub">{showImages.length}</span>/5)
        </p>
        <ListImage />
      </FormGroup>

      <FormGroup>
        <p className="label">제목</p>
        <BoxInput>
          <input
            name="product_name"
            value={formData.product_name}
            onChange={(e) => setFormData('product_name', e.target.value)}
            placeholder="제목을 입력해주세요."
          />
        </BoxInput>
      </FormGroup>

      <FormGroup>
        <p className="label">분류</p>
        <ListTag isform={true} />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 상태</p>
        <FormRadio />
      </FormGroup>

      <FormGroup>
        <p className="label">상품 설명</p>
        <S.TextArea
          name="product_content"
          value={formData.product_content}
          placeholder="상품에 대한 설명을 써주세요."
          onChange={(e) => setFormData('product_content', e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <p className="label">판매 가격</p>
        <S.InputNum>
          <input
            name="price"
            value={transformPrice(formData.price as number)}
            onChange={(e) => setFormData('price', Number(e.target.value.replace(/,/g, '')))}
          />
          <p>원</p>
        </S.InputNum>
        <ListTradeForm list={priceList} type={'price'} />
      </FormGroup>

      <FormGroup>
        <p className="label">거래 장소</p>
        <BoxInput>
          <input
            name="place"
            value={formData.place}
            placeholder="위치를 입력해주세요."
            onChange={(e) => setFormData('place', e.target.value)}
          />
        </BoxInput>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListTradeForm list={placeList} type={'place'} />
      </FormGroup>

      {isEdit ? (
        <Button color={disabled ? '' : 'primary'} disabled={disabled}>
          수정 완료
        </Button>
      ) : (
        <Button color={disabled ? '' : 'primary'} disabled={disabled}>
          등록하기
        </Button>
      )}
    </form>
  );
};

export default FormTrade;
