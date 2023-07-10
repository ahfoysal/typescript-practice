import { IUser } from "./user.interface";
import { User } from "./user.model";

export const addUserToDb = async (payload : IUser) : Promise <IUser>=> {
  const user = new User(payload);
  
  const result = await user.save();

  return result;
};

export const getUserFromDb = async () => {
  const users = await User.find();
  return users;
};
