import { Route, Routes } from 'react-router-dom';
import MyPage from '@pages/mypage';
import MainPage from '@pages/main-page';
import SearchPage from '@pages/search-page';
import SearchResultPage from '@pages/search-result-page';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/result" element={<SearchResultPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;
