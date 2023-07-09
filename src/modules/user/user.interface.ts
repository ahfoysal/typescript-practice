export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: string;
    email: string;
    phone?: string;
  }