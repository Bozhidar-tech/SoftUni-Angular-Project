
export interface User {
  _id: string;
  tel: string;
  email: string;
  username: string;
  password: string;
  created_at: string;
}

export interface UserForAuth {
  firstName: string;
  email: string;
  phoneNumber: string;
  password: string;
  id: string;
}
