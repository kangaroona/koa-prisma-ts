export interface RESP<T> {
  code: number;
  data: T;
  msg: string;
}
export interface USER {
  id: number;
  email: string;
  posts: POST[];
}
interface POST {
  id: number;
  title: String;
  userId?: String;
  user: USER;
}
