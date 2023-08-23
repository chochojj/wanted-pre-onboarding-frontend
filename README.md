### 간단한 Todo 기록페이지

회원가입/로그인 기능이 구현된 투두리스트 페이지입니다

### 프로젝트의 실행 방법

`git clone` 후, `npm install & npm start`

### 배포링크

[투두리스트](https://wanted-pre-onboarding-frontend-chocho.netlify.app/)

### 데모 영상

| 로그인/회원가입 | 투두리스트 | 
|:-:| :-:|
|![로그인](https://github.com/chochojj/wanted-pre-onboarding-frontend/assets/104323906/4c308397-6daf-465c-926c-016e08605a2e) | ![투두작성](https://github.com/chochojj/wanted-pre-onboarding-frontend/assets/104323906/3e81e8f9-d8dd-4945-98b4-90c92ba8fb52)|

### 기능 설명

#### 로그인/회원가입

- 이메일 양식은 @ 포함, 비밀번호 양식은 8자 이상입니다
- 이메일과 비밀번호 조건이 충족되지 않을 시 버튼이 활성화 되지 않습니다
- 회원가입 시 자동으로 로그인 화면으로, 로그인 시 자동으로 투두페이지로 이동합니다
- 로컬 스토리지에 토큰이 있는 경우, 로그인/회원가입 페이지 방문 시 자동으로 투두 페이지로 이동합니다
- 로컬 스토리지에 토큰이 없는 경우, 투두 페이지 방문 시 자동으로 로그인 화면으로 이동합니다
#### 투두리스트

- 투두 페이지에서 할 일을 작성하고 작성된 할 일을 조회, 수정, 삭제할 수 있습니다
- 할 일을 작성/수정하고 새로고침을 해도 항목이 그대로 남아있습니다
- 할 일 수정 시 취소버튼을 누르면 취소사항이 초기화되며 수정 모드가 종료됩니다

### 폴더 구조
```
📦src
 ┣ 📂apis
 ┃ ┗ 📜api.js
 ┣ 📂component
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜AuthRoute.js
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┗ 📜Header.jsx
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜AddForm.js
 ┃ ┃ ┣ 📜TodoList.js
 ┃ ┃ ┗ 📜Todos.js
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜SignIn.jsx
 ┃ ┣ 📜SignUp.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂style
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜styles.js
 ┣ 📂utils
 ┃ ┗ 📜useInput.js
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```

### 개발 포인트
#### 로직의 재사용성
- 폼에서 진행되는 유효성 검사 로직을 분리하여 커스텀 훅으로 만들고 재사용
```
import { useState } from "react";

export const useInput = (inputValue, ValidationFunc) => {
  const [value, setValue] = useState(inputValue);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (inputText) => {
    setValue(inputText);
    setIsValid(ValidationFunc(inputText));
  };

  return {
    value,
    isValid,
    handleChange,
  };
};
```
  
#### 관심사 분리
- 비즈니스 로직과 UI를 담당하는 폴더를 최대한 분리하자
  상위의 container를 담당하는 폴더에는 로직을 구성하고 하위 컴포넌트에 props 내려주어 기능 부여
  이로서 상위는 로직 , 하위는 뷰로서 기능하도록 역할 구분
  
  ```
  import { useState, useEffect, useCallback } from "react";
  import AddForm from "./AddForm";
  import Todos from "./Todos";
  import {
    getTodosApi,
    createTodoApi,
    updateTodoApi,
    deleteTodoApi,
  } from "../../apis/api";
  
  const TodoList = () => {
    const [todoList, setTodoList] = useState([]);
  
    useEffect(() => {
      const fetchTodo = async () => {
       //조회 로직
    }, []);
  
    const addTodo = useCallback((value) => {
      const addTodo = async () => {
       //작성 로직
    }, []);
  
    const updateTodo = useCallback(async (id, newTodo, isCompleted) => {
      //수정 로직
    }, []);
  
    const deleteTodo = useCallback(async (id) => {
      //삭제 로직
    }, []);
  
    return (
      <div>
        <AddForm addTodo={addTodo} />
        <Todos
          todoList={todoList}
          setTodoList={setTodoList}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    );
  };
  
  export default TodoList;
 
### 아쉬운 점
- 회원가입과 로그인에서 공통 로직을 분리하지 못한 점
- 모든 컴포넌트에서 일관되게 비즈니스 로직과 뷰를 분리하지 않은 것
