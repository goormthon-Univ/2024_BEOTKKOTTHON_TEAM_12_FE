import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--nav-size);
  padding: 24px;
  box-sizing: border-box;
  border-top: 1px solid var(--grey-3);

  & > svg {
    margin-right: 24px;
  }

  .price {
    border-left: 1px solid var(--grey-3);
    padding: 0 13px;
    font-size: 20px;
    font-weight: bold;
    color: var(--grey-7);
  }

  & > button {
    margin-left: auto;
    font-size: 15px;
    font-weight: bold;
  }
`;
