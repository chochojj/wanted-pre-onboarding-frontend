import { useInputValidation } from "../utils/useInputValidation";

const SignUp = () => {
  const emailValidation = (email) => email.includes("@");
  const passwordValidation = (password) => password.length >= 8;

  const emailInput = useInputValidation("", emailValidation);
  const passwordInput = useInputValidation("", passwordValidation);

  return (
    <div>
      <form>
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
          data-testid="signup-button"
          disabled={!emailInput.isValid || !passwordInput.isValid}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;
