/* General Idea of Middleware and Microservice:
frontend -> microservice (encapsulation)
middleware accepts all requests from client side
route request to a microservice associated with its route
each microservice has one purpose of its own
*/

import { registerUser } from "../microservices/users/registerUser";
import express, { Request, Response } from "express";

const router = express.Router();

export const createRoute = () => {
  router.post("/signUp", (req: Request, res: Response) => {
    registerUser(req, res);
  });

  return router;
};

export const processResponse = (user: any, res: any) => {
  res.send(user);
  console.log("processResponse: ", user);
};
