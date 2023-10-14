import { clientInfo } from "../../models/UsersModel/ClientData.model";

export const findUser = async (email: any) => {
  for (const user of clientInfo) {
    if (user.email === email) {
      console.log("Found user ", user.email);
      return user;
    }
  }
  console.error("No user found");
  return null;
};
