import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://www.pre-onboarding-selection-task.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAuthorizedApi = () => {
  const token = localStorage.getItem("token");

  const authorizedApi = axios.create({
    baseURL: "https://www.pre-onboarding-selection-task.shop",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return authorizedApi;
};

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
export const createTodoApi = async (todo) => {
  try {
    const authorizedApi = getAuthorizedApi();
    const response = await authorizedApi.post("/todos", { todo });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두조회
export const getTodosApi = async () => {
  try {
    const authorizedApi = getAuthorizedApi();
    const response = await authorizedApi.get("/todos");
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두수정
export const updateTodoApi = async (id, todo, isCompleted) => {
  try {
    const authorizedApi = getAuthorizedApi();
    const response = await authorizedApi.put(`/todos/${id}`, {
      todo,
      isCompleted,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//투두삭제
export const deleteTodoApi = async (id) => {
  try {
    const authorizedApi = getAuthorizedApi();
    const response = await authorizedApi.delete(`/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
