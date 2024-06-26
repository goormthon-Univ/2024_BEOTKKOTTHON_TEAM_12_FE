import * as S from './style';
import logo from 'assets/logo/logo.svg';
import { Button, ButtonBack, Header, TextInput, TextLabel } from 'components/index';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { instance } from 'apis';

const StudentCertification = () => {
  const navigate = useNavigate();

  /*인증코드 인증 */
  const postVerificationCode = async () => {
    try {
      console.log({
        verificationCode,
      });
      alert('인증이 완료되었습니다.');
      navigate('/signup', { state: { tab: 2 } });
      const response = await instance.post('/university/certifycode', {
        verificationCode,
      });

      console.log(response.data);
    } catch (error) {
      console.error('인증번호 발송 실패', error);
    }
  };

  /*재학생 인증 메일 재발송 */
  const postVerificationEmail = async () => {
    alert('이메일을 재전송했습니다.');
  };

  const [verificationCode, setVerificationCode] = useState('');
  //유효성 확인 후 버튼 색 변경
  const [buttonColor, setButtonColor] = useState({
    $backgroundColor: 'var(--grey-2)',
    color: 'var(--grey-5)',
  });
  /*모든 조건 만족하면 버튼 색 변경 */
  useEffect(() => {
    if (verificationCode.length === 6) {
      setButtonColor({
        $backgroundColor: 'var(--green-primary)',
        color: '#ffffff',
      });
    } else {
      setButtonColor({
        $backgroundColor: 'var(--grey-2)',
        color: 'var(--grey-5)',
      });
    }
  }, [verificationCode]);

  return (
    <>
      <Header>
        <ButtonBack className="left" />
      </Header>
      <S.Container>
        <S.Logo src={logo} alt="logo"></S.Logo>
        <TextLabel size={24} $weight={700} color={'var(--grey-7)'}>
          메일을 확인해주세요!
        </TextLabel>
        <TextLabel size={14} $weight={400} color={'var(--grey-5)'} $textAlign={'center'}>
          <p>대학교 인증 메일이 발송되었습니다.</p>
          <p>발송된 메일을 통해 인증 번호 입력 후 다음 버튼을 눌러주세요.</p>
        </TextLabel>
      </S.Container>

      <TextInput
        label="인증번호"
        name="verificationCode"
        labelSize={16}
        placeholder="인증번호 입력"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />

      <S.LinkWrapper onClick={postVerificationEmail}>이메일 재전송</S.LinkWrapper>
      <S.ButtonWrapper>
        <Button
          handleOnClick={postVerificationCode}
          children="다음"
          width="100%"
          $padding="16px"
          fontSize="18px"
          $bgcolor={buttonColor.$backgroundColor}
          color={buttonColor.color}
        />
      </S.ButtonWrapper>
    </>
  );
};

export default StudentCertification;
