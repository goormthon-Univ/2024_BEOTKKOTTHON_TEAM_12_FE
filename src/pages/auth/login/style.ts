import styled from 'styled-components';

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100svh;
  padding: 20px;
  font-family: 'Noto Sans KR';

  .logo {
    width: 199px;
    height: 62px;
    margin: 0 auto;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin-top: 90px;
  gap: 7px;
  font-family: 'Noto Sans KR';
`;

export const LoginInput = styled.input`
  display: flex;
  width: 335px;
  height: 51px;
  padding: 16px 12px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid var(--grey-3);
  box-sizing: border-box;
  font-size: 16px;
  caret-color: var(--green-primary);

  &::placeholder {
    font-size: 16px;
    font-weight: 500;
    color: var(--grey-4);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--green-primary);
  }
`;
export const Divider = styled.span`
  color: var(--grey-4);
  margin: 0 8px;
`;

export const Link = styled.span`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: var(--grey-5);

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 15px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  max-width: 335px;
  margin-bottom: 60px;
  gap: 7px;
`;

export const LoginMessage = styled.div`
  margin-top: 80px;

  & span {
    color: var(--grey-5);
  }
`;
