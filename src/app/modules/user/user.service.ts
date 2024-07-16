import { TUser } from "./user.interface";
import { User } from "./user.model";
const createUserIntoDB = async (payload: TUser) => {
  console.log(payload);
  const result = await User.create(payload);
  return result;
};
const getAllUserIntoDB = async () => {
  // const password=
};
const getSingleUserIntoDB = async () => {
  // const password=
};

export const UserService = {
  createUserIntoDB,
  getAllUserIntoDB,
  getSingleUserIntoDB,
};
