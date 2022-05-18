export interface IUserCreate {
  name: string;
  email: string;
  user_name: string;
  birth_date: string;
  password: string;
}

export interface IUserLogin {
  email?: string;
  user_name?: string;
  password: string;
}

export interface UserDataParams {
  id: string;
}

export interface UserDataParamsUp {
  id: string;
  name: string;
  email: string;
  user_name: string;
  birth_date: string;
  password: string;
}
