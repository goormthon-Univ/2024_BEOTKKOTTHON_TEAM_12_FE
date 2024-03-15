import { ListImageProps } from 'src/types/types';
import * as S from './style';
import image from '@assets/icons/image.svg';

const BoxUpload = ({ formData, setFormData, setShowImages, showImages }: ListImageProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files as FileList;

    if (files) {
      const imageLists = files;
      let imageUrlLists = [...showImages];
      for (let i = 0; i < imageLists.length; i++) {
        const currentImageUrl = URL.createObjectURL(imageLists[i]);
        imageUrlLists.push(currentImageUrl);
      }
      if (imageUrlLists.length > 5) {
        imageUrlLists = imageUrlLists.slice(0, 5);
      }
      setShowImages(imageUrlLists);
      setFormData({ ...formData, imgs: files });
    }
  };

  return (
    <S.Container>
      <label htmlFor="img">
        <img src={image} alt="img" />
      </label>

      <input type="file" id="img" name="imgs" accept="image/*" multiple onChange={handleChange} />
    </S.Container>
  );
};

export default BoxUpload;