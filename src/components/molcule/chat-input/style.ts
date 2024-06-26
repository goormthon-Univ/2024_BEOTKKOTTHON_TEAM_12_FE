import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  padding: 3px 20px;
  height: 40px;
  background-color: var(--grey-1);
  border: none;
  border-radius: 71px;
  outline: none;
  box-sizing: border-box;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  height: var(--nav-size);
  padding: 16px;
  box-sizing: border-box;

  .plus {
    width: 24px;
    height: 24px;
    color: var(--green-6);
  }

  .send {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 6px;
    background-color: var(--green-6);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    cursor: pointer;
    & > svg {
      transform: translateY(1px);
    }
  }
`;
