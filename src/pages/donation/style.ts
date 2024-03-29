import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  height: calc(100svh - var(--nav-size) - var(--header-size));

  background-color: var(--grey-2);
  overflow-y: scroll;
  overflow-x: hidden;
  -ms-overflow-style: none;

  // IE와 Edge를 위한 스크롤바 숨기기
  -ms-overflow-style: none;
  // Firefox를 위한 스크롤바 숨기기
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .ranking {
    margin-top: -14px;
    margin-bottom: 14px;
  }

  .partner-box {
    width: 335px;
    padding: 0px 33px 20px 33px;

    background-color: white;
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  padding: 20px 33px;
  gap: 5px;
  background-color: white;

  .homeless {
    padding: 22px 0;

    & > img {
      width: 100%;
      cursor: pointer;
    }
  }
`;
export const ImageWrapper = styled.div`
  padding: 0px 33px 20px 33px;
  background-color: white;
`;
