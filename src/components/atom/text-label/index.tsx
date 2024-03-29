import React from 'react';
import styled from 'styled-components';

interface TextLabelProps {
  text: string;
  size: number;
  $weight?: number;
  color?: string;
  className?: string;
  $textAlign?: string;
  onClick?: () => void;
}

const TextLabelWrapper = styled.div<{
  size: number;
  $weight?: number;
  color?: string;
  $textAlign?: string;
}>`
  color: ${({ color }) => color || 'var(--grey-7)'};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ $weight }) => $weight || 500};
  font-family: 'Noto Sans KR', sans-serif;
  text-align: ${({ $textAlign }) => $textAlign || 'left'};
  white-space: pre-line;
  line-height: 130%;
  letter-spacing: -0.28px;
  /*드래그 방지 */
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const TextLabel: React.FC<TextLabelProps> = ({
  text,
  size,
  $weight,
  color,
  className,
  onClick,
  $textAlign,
}) => {
  return (
    <TextLabelWrapper
      className={className}
      size={size}
      $weight={$weight}
      color={color}
      onClick={onClick}
      $textAlign={$textAlign}
    >
      {text}
    </TextLabelWrapper>
  );
};

export default TextLabel;
