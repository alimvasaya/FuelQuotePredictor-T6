import { Request } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { clientInfo } from "../../models/UsersModel/ClientData.model";
import { findUser } from "./findUser";

export const registerUser = async (req: Request, res: any) => {
  try {
    const user = await findUser(req.body.email);

    if (user != null) {
      throw new Error("Email already exists");
    } else {
      const newUser = {
        userID: clientInfo.length.toString(),
        email: req.body.email,
        password: req.body.password, // use bcrypt
        name: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: 0,
        isNew: true,
      };

      clientInfo.push(newUser);
      processResponse(newUser, res);
    }
  } catch (err) {
    console.error("Server error: registerUser");
  }
};
