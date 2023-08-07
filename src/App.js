import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
const Header = lazy(() => import("./component/layout/Header"));
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Todo = lazy(() => import("./pages/Todo"));

function App() {
  return (
    <Contain>
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Contain>
  );
}

export default App;

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
