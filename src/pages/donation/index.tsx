import { BoxDonationImg, Nav, Ranking, TextLabel, Header } from '@components/index';
import * as S from './style';
import logo from '@assets/logo/logo.svg';
import notifications from '@assets/icons/notifications.svg';

const Donation = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <img className="right" src={notifications} alt="notifications" />
      </Header>
      <S.Content>
        <section className="ranking">
          <Ranking />
        </section>

        <section className="partner">
          <S.MapWrapper>
            <TextLabel text="함께하는 기부 단체" size={16} $weight={700} color="var(--grey-7)" />
            <TextLabel
              text="총 3개의 기부단체와 함께하고 있어요!"
              size={12}
              $weight={400}
              color="var(--grey-7)"
            />
          </S.MapWrapper>

          <S.ImageWrapper>
            <BoxDonationImg />
          </S.ImageWrapper>
        </section>
      </S.Content>
      <Nav currentTab="기부" />
    </>
  );
};

export default Donation;
