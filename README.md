### 제출자

조지현

### 프로젝트의 실행 방법

`git clone` 후, `npm install & npm start`

### 데모 영상

| 로그인/회원가입 | 
|:-:|
|![로그인](https://github.com/chochojj/wanted-pre-onboarding-frontend/assets/104323906/4c308397-6daf-465c-926c-016e08605a2e) |

- 이메일 양식은 @ 포함, 비밀번호 양식은 8자 이상입니다
- 이메일과 비밀번호 조건이 충족되지 않을 시 버튼이 활성화 되지 않습니다
- 회원가입 시 자동으로 로그인 화면으로 이동합니다
- 로그인 시 자동으로 투두페이지로 이동합니다
- 로컬 스토리지에 토큰이 있는 경우 로그인/회원가입 페이지 방문 시 자동으로 투두 페이지로 이동합니다
- 로컬 스토리지에 토큰이 없는 경우 투두 페이지 방문 시 자동으로 로그인 화면으로 이동합니다

|  투두리스트 | 
|:-:|
| ![투두작성](https://github.com/chochojj/wanted-pre-onboarding-frontend/assets/104323906/3e81e8f9-d8dd-4945-98b4-90c92ba8fb52)|

- 투두 페이지에서 할 일을 작성하고 작성된 할 일을 조회, 수정, 삭제할 수 있습니다
- 할 일을 작성/수정하고 새로고침을 해도 항목이 그대로 남아있습니다
- 할 일 수정 시 취소버튼을 누르면 취소사항이 초기화되며 수정 모드가 종료됩니다
