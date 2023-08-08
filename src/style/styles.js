import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  padding: 30px 40px;
  border-radius: 10px;
  background-color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 8px;
    height: 30px;
  }

  span {
    color: salmon;
    font-size: 14px;
  }

  button {
    margin-top: 8px;
    height: 30px;
    border: none;
    border-radius: 5px;
  }
`;
