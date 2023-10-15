// connect with db
import { Request } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { findUser } from "./findUser";

export const completeProfile = async (req: Request, res: any) => {
  try {
    const user = await findUser(req.body.email);

    if (user != null) {
      user.name = req.body.name;
      user.address1 = req.body.address1;
      user.city = req.body.city;
      user.state = req.body.state;
      user.zipcode = req.body.zipcode;
      user.address2 = req.body.address2;
      user.isNew = false;

      processResponse(user, res);
    } else {
      console.error("Server error: completeProfile");
    }
  } catch (err) {
    console.error("Server error: completeProfile");
  }
};
