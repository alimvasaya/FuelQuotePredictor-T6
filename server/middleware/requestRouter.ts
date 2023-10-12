/* General Idea of Middleware and Microservice:
frontend -> microservice (encapsulation)
middleware accepts all requests from client side
route request to a microservice associated with its route
each microservice has one purpose of its own
*/

import { registerUser } from "../microservices/users/registerUser";
import { registerUserQuote } from "../microservices/FuelQuote/Forum_quote";
import { Register_Fuel_Quote } from "../microservices/FuelQuote/Fuel_quote";
import { View_Quote } from "../microservices/FuelQuote/quote";
import { completeProfile } from "../microservices/users/completeProfile";

import express, { Request, Response } from "express";

const router = express.Router();

export const createRoute = () => {
  router.post("/completeProfile", (req: Request, res: Response) => {
    completeProfile(req, res);
  });
  router.post("/signUp", (req: Request, res: Response) => {
    registerUser(req, res);
  });

  router.get("/Forum_quote", (req: Request, res: Response) => {
    registerUserQuote(req, res); // Handle retrieving fuel quotes
  });

  router.post("/add_fuel_quote", (req: Request, res: Response) => {
    Register_Fuel_Quote(req, res); // Handle creating new fuel quotes
  });

  router.get("/quotes", (req: Request, res: Response) => {
    View_Quote(req, res); // Handle viewing existing fuel quotes
  });
  return router;
};

export const processResponse = (user: any, res: any) => {
  res.send(user);
  console.log("processResponse: ", user);
};
