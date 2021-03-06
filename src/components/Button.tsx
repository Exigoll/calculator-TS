import React from "react";
import styled from "styled-components";

export enum ButtonType {
  Number,
  Operation,
  Total,
}

type Props = React.HTMLProps<HTMLButtonElement> & {
  buttonType?: ButtonType;
  label: string;
  position?: [x: number, y: number];
  width?: number;
  height?: number;
};

const StyledButton = styled.button`
  width: 80px;
  height: 80px;
  font-weight: 500;
  font-size: 36px;
  line-height: 70px;
  border-radius: 50%;
  transition: 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  &:active {
    transform: scale(1.1);
  }

  &:nth-child(7) {
    width: 100%;
  }
`;

const Button: React.FC<Props> = ({
  buttonType = ButtonType.Operation,
  label,
  position,
  width,
  height,
  // eslint-disable-next-line react/prop-types
  onClick,
}) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[1] + 1;
  }
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }
  if (buttonType === ButtonType.Total) {
    styles.color = "#2b589a";
    styles.backgroundColor = "#fff";
  } else {
    styles.color = "#fff";
  }

  return (
    <StyledButton onClick={onClick} style={styles}>
      {label}
    </StyledButton>
  );
};

export default Button;
