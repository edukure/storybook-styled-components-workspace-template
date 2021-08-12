import React from 'react';
import styled from 'styled-components';

export interface Props {
  disabled?: boolean;
  textColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button<Props>`
  color: ${({ textColor }) => textColor};
  background: ${({ backgroundColor }) => backgroundColor};
  padding: 4px 8px;
`;

const Button = ({
  disabled = false,
  textColor = 'black',
  backgroundColor = 'lightseagreen',
  children,
}: Props) => {
  return (
    <StyledButton disabled={disabled} textColor={textColor} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
