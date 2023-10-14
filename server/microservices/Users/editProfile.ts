// connect with db
import { Request } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { findUser } from "./findUser";

export const editProfile = async (req: Request, res: any) => {
  try {
    const incoming = req.body;
    const user = await findUser(incoming.email);

    if (user != null) {
      if (incoming.name !== "") {
        user.name = incoming.name;
      }
      if (incoming.address1 !== "") {
        user.address1 = incoming.address1;
      }
      if (incoming.city !== "") {
        user.city = incoming.city;
      }
      if (incoming.state !== "") {
        user.state = incoming.state;
      }
      if (incoming.zipcode !== "") {
        user.zipcode = incoming.zipcode;
      }
      if (incoming.address2 !== "") {
        user.address2 = incoming.address2;
      }

      processResponse(user, res);
    } else {
      console.error("Server error: editProfile");
    }
  } catch (err) {
    console.error("Server error: editProfile");
  }
};
