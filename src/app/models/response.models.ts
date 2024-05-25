import { QuestionItem } from "../components/category/category.component.config";

export interface Response<T> {
  data: T;
  error?: string;
}

export interface ResponseArray<T> {
  data: T[];
  error?: string;
}

export interface UserRegisterResponse {
  accessToken: string;
  user: User;
}

export interface UserLoginResponse extends UserRegisterResponse {}

export interface CategoryResponse {
  id: number;
  categoryId: number;
  name: string;
  questions: QuestionItem[];
}

export interface User {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
