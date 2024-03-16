import React from 'react';
import { ChatRoom } from 'src/types/types';

import * as S from './style';

interface ChatListItemProps {
  chatRooms: ChatRoom[];
}
const ChatListItem: React.FC<ChatListItemProps> = ({ chatRooms }) => {
  return (
    <div>
      {chatRooms.map((chat) => (
        <S.ChatItem key={chat.id}>
          <S.ChatImage src={chat.imageUrl} alt="Profile" />
          <S.ChatDetails>
            <S.SenderName>{chat.senderName}</S.SenderName>
            <S.LastMessage>{chat.lastMessage}</S.LastMessage>
          </S.ChatDetails>
          <S.ChatRightContainer>
            <S.Timestamp>{chat.timestamp}</S.Timestamp>
            {chat.unreadCount > 0 && <S.UnreadCount>{chat.unreadCount}</S.UnreadCount>}
          </S.ChatRightContainer>
        </S.ChatItem>
      ))}
    </div>
  );
};

export default ChatListItem;
