import * as S from './style';
import { ProfileAvatar, ProfileButton, TextLabel } from '../../index';

import arrow from 'assets/icons/arrow.svg';
import { levelUrlArr } from 'utils/levelUrlArr';
import { useNavigate } from 'react-router-dom';
import { MypageUserType } from 'types/userType';

interface ProfileCardProps {
  userData: MypageUserType;
}

const ProfileCard = ({ userData }: ProfileCardProps) => {
  const navigate = useNavigate();

  const onModifyProfile = () => {
    navigate('/mypage/profile-edit');
  };

  return (
    <S.ProfileCardWrapper>
      <ProfileAvatar imageUrl={userData.profile_image[0]} />

      <S.MiddleContainer>
        <S.UserNameWrapper>
          <TextLabel size={16} color="var(--grey-7)">
            {userData.user_name}
          </TextLabel>
          <img src={levelUrlArr(userData.level)} alt="profile level" width="11px" height="11px" />
        </S.UserNameWrapper>
        <TextLabel size={14} color="var(--grey-5)">
          {userData.university_name}
        </TextLabel>

        <S.ButtonContainer>
          {userData.style.map((style, index) => (
            <ProfileButton key={index}>{style}</ProfileButton>
          ))}
        </S.ButtonContainer>
      </S.MiddleContainer>

      <S.BtnArrow src={arrow} alt="프로필 수정" onClick={onModifyProfile} />
    </S.ProfileCardWrapper>
  );
};

export default ProfileCard;
