// connect with db
import { Request } from "express";
import { processResponse } from "../../middleware/requestRouter";
import { users } from "../../fakeDB/usersDB";

export const completeProfile = async (req: Request, res: any) => {
  console.log("completeProfile: request received");
  const user = await {
    email: req.body.email,
    fullName: req.body.fullName,
    address1: req.body.address1,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    address2: req.body.address2,
  };

  if (user != null) {
    for (const u of users) {
      if (u.email === user.email) {
        u.fullName = user.fullName;
        u.address1 = user.address1;
        u.city = user.city;
        u.state = user.state;
        u.zipcode = user.zipcode;
        u.address2 = user.address2;
        u.isNew = false;
      }
      console.log(u);
    }
    processResponse(user, res);
  }
};
