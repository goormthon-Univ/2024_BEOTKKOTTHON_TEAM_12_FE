import * as S from './style';
import { useBlockUserQuery } from 'hooks/queries/user/useBlockUserQuery';
import { useDeleteBlockUserMutation } from 'hooks/queries/user/useDeleteBlockUserMutation';
import Loading from 'components/atom/loading';
import { Button, ProfileAvatar, TextLabel } from 'components';
import { levelUrlArr } from 'utils/levelUrlArr';
import { BlockedUserType } from 'types/userType';
import { useUnblockMutation } from 'hooks/queries/user/useUnblockMutation';

const ListBlockUser = () => {
  const { data: blockedUserList, isLoading, isError } = useBlockUserQuery();
  const { mutate: unblockMutation } = useUnblockMutation();

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      {isLoading && <Loading />}
      {blockedUserList &&
        blockedUserList.map((blockUser: BlockedUserType, index: number) => (
          <S.BoxUser key={index}>
            <ProfileAvatar imageUrl={blockUser.blocked_user_profile_image} />

            <S.UserName>
              <TextLabel size={16}>{blockUser.blocked_user_nick_name}</TextLabel>
              <img src={levelUrlArr(blockUser.blocked_user_level)} width={11} height={11} />
            </S.UserName>

            <Button
              width="77px"
              $padding="5px 10px"
              $borderRadius="10px"
              $bgcolor="var(--grey-2)"
              fontSize="14px"
              color="var(--grey-5)"
              handleOnClick={() => unblockMutation(blockUser.blocked_user_id)}
            >
              차단해제
            </Button>
          </S.BoxUser>
        ))}
    </S.Container>
  );
};

export default ListBlockUser;
