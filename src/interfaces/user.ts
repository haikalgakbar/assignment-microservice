export interface IUser {
  _id: string;
  username: string;
  password: string;
  email: string;
  created_at: Date;
  updated_at: Date;
  first_name: string;
  last_name: string;
  bio: string;
  payment_details: string;
  __v: number;
}
