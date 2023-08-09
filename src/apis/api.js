import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

const authorizedApi = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

//회원가입
export const signupApi = async (email, password) => {
  try {
    const data = await axiosApi.post("/auth/signup", { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//로그인
export const signinApi = async (email, password) => {
  try {
    const data = await axiosApi.post("/auth/signin", { email, password });
    return data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두작성
export const createTodo = async (todo) => {
  try {
    const response = await authorizedApi.post("/todos", { todo });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두조회
export const getTodos = async () => {
  try {
    const response = await authorizedApi.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두수정
//투두삭제
