import { Container, Form } from "../style/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinApi } from "../apis/api";
import { useInput } from "../utils/useInput";
import Button from "../component/common/Button";

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInput("", emailValidation);
  const passwordInput = useInput("", passwordValidation);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signinApi(emailInput.value, passwordInput.value);
      localStorage.setItem("token", response.data.access_token);
      navigate("/todo");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={emailInput.value}
          placeholder="@를 포함하여 이메일을 입력해 주세요"
          onChange={(e) => emailInput.handleChange(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={passwordInput.value}
          placeholder="8자 이상 입력해 주세요"
          onChange={(e) => passwordInput.handleChange(e.target.value)}
        />
        {error && <span>{`로그인 에러 :${error}`}</span>}
        <Button
          type="submit"
          data-testid="signin-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
