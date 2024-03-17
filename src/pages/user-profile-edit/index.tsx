import * as S from './style';
import arrow from '@assets/icons/arrow.svg';
import { Header, TextLabel, TextInput, ImageInput, TagInput } from '@components/index';
import { useNavigate } from 'react-router-dom';

import useStore from '../../store/userData';

const UserProfileEdit = () => {
  const navigate = useNavigate();
  const { userProfileInfo, updateUserProfileInfo } = useStore();

  const styleTags = [
    '심플베이직',
    '캐주얼',
    '모던시크',
    '러블리',
    '로맨틱',
    '유니크',
    '빈티지',
    '페미닌',
    '오피스룩',
    '캠퍼스룩',
    '스트릿',
    '섹시글램',
    '아메카지',
  ];
  const postChangeAccountInfo = () => {
    updateUserProfileInfo(userProfileInfo);
    console.log(userProfileInfo);
  };

  return (
    <>
      <Header>
        <TextLabel text="내 프로필" size={18} weight={700} />
        <S.BackIcon className="left" src={arrow} alt="go back" onClick={() => navigate(-1)} />
        <TextLabel
          className="right "
          onClick={postChangeAccountInfo}
          text="저장"
          size={18}
          weight={700}
          color="var(--grey-5)"
        />
      </Header>
      <TextInput label="닉네임" value={userProfileInfo.nickName} labelSize={16} />
      <ImageInput image={userProfileInfo.image} />
      <TagInput styleTags={styleTags} userStyleTags={userProfileInfo.styleTag} />
    </>
  );
};

export default UserProfileEdit;
