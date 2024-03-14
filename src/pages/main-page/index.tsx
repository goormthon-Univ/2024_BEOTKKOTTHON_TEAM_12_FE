import { FilterTrade, HeaderLogo, ListTag, ListTradeItems, Search } from '@components/index';
import * as S from './style';

const MainPage = () => {
  return (
    <S.Container>
      <section className="header">
        <HeaderLogo />
      </section>

      <section className="search">
        <Search />
      </section>

      <section className="category">
        <ListTag />
      </section>

      <section className="filter">
        <FilterTrade />
      </section>

      <section className="items">
        <ListTradeItems />
      </section>
    </S.Container>
  );
};

export default MainPage;
