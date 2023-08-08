import { useNavigate } from "react-router-dom";
import { useInputValidation } from "../utils/useInputValidation";

const SignIn = () => {
  const navigate = useNavigate();

  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInputValidation("", emailValidation);
  const passwordInput = useInputValidation("", passwordValidation);

  const handleSignIn = () => {
    navigate("/todo");
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          data-testid="email-input"
          value={emailInput.value}
          onChange={(e) => emailInput.handleChange(e.target.value)}
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          data-testid="password-input"
          value={passwordInput.value}
          onChange={(e) => passwordInput.handleChange(e.target.value)}
        />
        <button
          type="submit"
          data-testid="signin-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
