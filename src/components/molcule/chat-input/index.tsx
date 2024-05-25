import { useState } from 'react';
import * as S from './style';
import { GoPlus } from 'react-icons/go';
import { LuSend } from 'react-icons/lu';
import useWebSocket from 'hooks/chatting/useWebsocket';
import { useMessageActions } from 'store/chatData';

interface ChatInputProps {
  chat_room_id: string | undefined;
}

const ChatInput = ({ chat_room_id }: ChatInputProps) => {
  const current_time = new Date();
  const client = useWebSocket(chat_room_id);
  const { sendMessage } = useMessageActions();
  const [inputValue, setInputValue] = useState('');

  const messageObj = {
    sender_id: 2,
    sender_nick_name: '미정',
    profile_image: ['https://i.pinimg.com/564x/f1/0e/82/f10e820b22a9baa8807e4ed75ae6035a.jpg'],
    message: inputValue,
    timestamp: current_time.toLocaleTimeString().slice(0, -3),
    is_mine: true,
    sender_type: 'customer',
  };

  const handleClick = () => {
    if (client.current && client.current.connected) {
      client.current.send(
        `/pub/api/chat/message/${chat_room_id}`,
        { 'Content-Type': 'application/json' },
        JSON.stringify(messageObj)
      );
      sendMessage(messageObj);
    } else {
      console.error('WebSocket is not connected');
    }
  };

  return (
    <S.Footer>
      <GoPlus className="plus" />
      <S.Input
        placeholder="메시지를 입력해주세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="send">
        <LuSend onClick={handleClick} />
      </div>
    </S.Footer>
  );
};

export default ChatInput;
