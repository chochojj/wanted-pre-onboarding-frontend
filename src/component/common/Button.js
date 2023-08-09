import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  color: white;
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
