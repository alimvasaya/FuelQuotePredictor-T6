import { registerUser } from '../microservices/Users/registerUser';
import { completeProfile } from '../microservices/Users/completeProfile';
import { viewProfile } from '../microservices/Users/viewProfile';
import { editProfile } from '../microservices/Users/editProfile';

// import { fillQuote } from '../microservices/FuelQuote/fillQuote';
// import { addQuote } from '../microservices/FuelQuote/addQuote';
// import { viewQuotes } from '../microservices/FuelQuote/viewQuotes';

import express, { Request, Response } from 'express';

const router = express.Router();

export const createRoute = () => {
  // User profile
  router.post('/signUp', (req: Request, res: Response) => {
    registerUser(req, res); // Handle registering new user
  });

  router.post('/completeProfile', (req: Request, res: Response) => {
    completeProfile(req, res); // Handle new profile completion for new user
  });

  router.get('/viewProfile/:userId', (req: Request, res: Response) => {
    viewProfile(req, res); // Handle registering new user
  });

  router.post('/editProfile/:userId', (req: Request, res: Response) => {
    editProfile(req, res); // Handle registering new user
  });

  // Quote interactions
  // router.post('/fillQuote', (req: Request, res: Response) => {
  //   fillQuote(req, res); // Handle retrieving pre-fill quote info
  // });

  // router.post('/addQuote', (req: Request, res: Response) => {
  //   addQuote(req, res); // Handle creating new fuel quotes
  // });

  // router.post('/viewQuotes', (req: Request, res: Response) => {
  //   viewQuotes(req, res); // Handle viewing existing fuel quotes
  // });
  return router;
};

export const processResponse = (info: any, res: Response) => {
  res.send(info);
};
