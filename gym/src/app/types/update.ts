export interface UpdateUser {
    userId: string; 
    fullName?: string;
    email: string;
    phoneNumber?: string;
    password?: string;
    repeatPassword?: string;
  }