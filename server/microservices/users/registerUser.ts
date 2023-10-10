// connect with db
import { Request } from "express";
import { processResponse } from "../../middleware/requestRouter";

export const registerUser = async (req: Request, res: any) => {
  console.log("registerUser: request received");
  const user = await { email: req.body.email, password: req.body.password };
  if (user != null) {
    processResponse(user, res);
  }
};
