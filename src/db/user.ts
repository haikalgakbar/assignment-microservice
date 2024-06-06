export interface IUser {
  _id: number;
  username: string;
  password: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  bio: string;
  payment_details: string;
}

export interface IFecthUser {
  data: IUser;
}

export const user: IUser = {
  _id: 1,
  username: "user1",
  password: "123",
  email: "user1@mail.com",
  created_at: new Date(),
  updated_at: new Date(),
  first_name: "John",
  last_name: "Doe",
  bio: "I am user1",
  payment_details: "123456789",
};
