import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: ${(props) => (props.height ? `${props.height}` : "30px")};
  color: white;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? props.bgColor || "grey" : props.bgColor || "#1F485E"};
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Button = ({ children, disabled, bgColor, ...props }) => {
  return (
    <StyledButton disabled={disabled} bgColor={bgColor} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
