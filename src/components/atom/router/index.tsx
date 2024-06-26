import { Route, Routes } from 'react-router-dom';
import MyPageMain from 'pages/myPagePage/main';
import ProductMain from 'pages/productPage/main';
import SalesHistory from 'pages/myPagePage/sales-history';
import SearchPage from 'pages/productPage/search';
import SearchResult from 'pages/productPage/search-result';
import PurchaseHistory from 'pages/myPagePage/purchase-history';
import ProductNew from 'pages/productPage/product-new';
import AccountInfo from 'pages/myPagePage/account-info';
import UserProfileEdit from 'pages/myPagePage/user-profile-edit';
import BlockedUsers from 'pages/myPagePage/blocked-users';
import ProductDetail from 'pages/productPage/product-detail';
import ChattingMain from 'pages/chatttingPage/main';
import ProductEdit from 'pages/productPage/product-edit';
import ChattingDetail from 'pages/chatttingPage/chatting-detail';
import MagazineMain from 'pages/magazinePage/main';
import QuizPage from 'pages/magazinePage/quiz/quiz';
import Login from 'pages/auth/login';
import SignUp from 'pages/auth/signup';
import Onboarding from 'pages/onboarding';
import StudentCertification from 'pages/auth/student-certification';
import DonationMain from 'pages/donationPage/main';
import DonationHistory from 'pages/myPagePage/donation-history';
import LevelInfo from 'pages/myPagePage/level-info';
import DonationInpersonVisit from 'pages/donationPage/inperson-visit';
import DonationHomeless from 'pages/donationPage/homeless';
import DonationHomelessMap from 'pages/donationPage/homeless-map';
import WishList from 'pages/myPagePage/wish-list';
import DonationRequest from 'pages/donationPage/donation-request';

const Router = () => {
  return (
    <Routes>
      {/*로그인 회원가입*/}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/*재학생 인증 페이지 */}
      <Route path="/student-certification" element={<StudentCertification />} />

      {/* 온보딩 */}
      <Route path="/" element={<Onboarding />} />

      {/* 중고 거래 */}
      <Route path="/product" element={<ProductMain />} />
      <Route path="/product/new" element={<ProductNew />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/product/edit/:id" element={<ProductEdit />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/search/result" element={<SearchResult />} />

      {/* 마이페이지 */}
      <Route path="/mypage" element={<MyPageMain />} />
      <Route path="/mypage/sales-history" element={<SalesHistory />} />
      <Route path="/mypage/purchase-history" element={<PurchaseHistory />} />
      <Route path="/mypage/account-info" element={<AccountInfo />} />
      <Route path="/mypage/profile-edit" element={<UserProfileEdit />} />
      <Route path="/mypage/blocked-users" element={<BlockedUsers />} />
      <Route path="/mypage/profile-edit" element={<UserProfileEdit />} />
      <Route path="/mypage/blocked-users" element={<BlockedUsers />} />
      <Route path="/mypage/donation-history" element={<DonationHistory />} />
      <Route path="/mypage/level-info" element={<LevelInfo />} />
      <Route path="/mypage/wish-list" element={<WishList />} />

      {/* 채팅 */}
      <Route path="/chat-home" element={<ChattingMain />} />
      <Route path="/chat/room/:id" element={<ChattingDetail />} />

      {/* 매거진 */}
      <Route path="magazine" element={<MagazineMain />} />
      <Route path="magazine/quiz" element={<QuizPage />} />

      {/* 기부 */}
      <Route path="/donation" element={<DonationMain />} />
      <Route path="/donation/request" element={<DonationRequest />} />
      <Route path="/donation/visit" element={<DonationInpersonVisit />} />
      <Route path="/donation/homeless" element={<DonationHomeless />} />
      <Route path="/donation/homeless/map" element={<DonationHomelessMap />} />

      {/* <Routes path="*" element={<div>Not Found</div>} /> */}
    </Routes>
  );
};

export default Router;
