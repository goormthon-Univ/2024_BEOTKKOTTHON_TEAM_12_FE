import { Header, TextLabel, TextInput, ButtonBack, Loading, BoxError } from 'components/index';
import * as S from './style';
import { useState } from 'react';
import { useAccountInfoQuery } from 'queries/user/useAccountInfoQuery';
import { useChangeAccountMutation } from 'queries/user/useChangeAccountMutation';
import { AccountInfoType } from 'types/userType';

const AccountInfo = () => {
  const { mutate: changeAccountInfo } = useChangeAccountMutation();
  const [accountInfo, setAccountInfo] = useState<AccountInfoType>({
    user_name: '',
    university_name: '',
    university_email: '',
  });

  const { status } = useAccountInfoQuery(setAccountInfo);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfo({ ...accountInfo, user_name: e.target.value });
  };

  if (status === 'pending') return <Loading $height="100svh" />;

  return (
    <>
      <Header>
        <TextLabel size={18} $weight={700}>
          계정 정보
        </TextLabel>
        <ButtonBack className="left" />
        <TextLabel
          className="right"
          onClick={() => changeAccountInfo(accountInfo)}
          size={18}
          $weight={700}
          color="var(--grey-5)"
        >
          저장
        </TextLabel>
      </Header>

      {status === 'error' && (
        <BoxError $height="calc(100svh - var(--header-size))">
          계정을 불러오는 중에 오류가 발생했습니다.
        </BoxError>
      )}

      {status === 'success' && (
        <S.InputWrapper>
          <TextInput
            label="이름"
            name="user_name"
            labelSize={16}
            value={accountInfo.user_name}
            onChange={onChangeInput}
          />
          <TextInput
            label="학교"
            name="university_name"
            labelSize={16}
            value={accountInfo.university_name}
            readonly={true}
          />
          <TextInput
            label="이메일"
            name="university_email"
            labelSize={16}
            value={accountInfo.university_email}
            readonly={true}
          />
          <S.Link>학교 변경하기</S.Link>
        </S.InputWrapper>
      )}
    </>
  );
};

export default AccountInfo;
