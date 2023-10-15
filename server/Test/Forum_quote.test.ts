import request from 'supertest';
import express, { Express } from 'express';
import { createRoute } from '../middleware/requestRouter'; // Import the module that defines your route handlers

describe('Express Route Tests', () => {
  let app: Express;

  beforeAll(() => {
    app = express();
    app.use(express.json()); // Use JSON parsing middleware if needed
    app.use('/api', createRoute()); // Use your route handlers

    // Add any other necessary setup for your app
  });

  it('should test /api/Forum_quote', async () => {
    const response = await request(app).get('/api/Forum_quote');

    // Write your expectations based on the response
    expect(response.status).toBe(200); // Adjust status code as needed
    expect(response.body).toEqual({  
    name: "John Smith",
    userID: "1",
    address1: "123 Main St",
    address2: "Apt 1",
    city: "Houston",
    state: "TX",
    zipcode: 77001,
    suggestedPrice: 1.5,
    hasHistory: true,});
  });

  it('should test /api/add_fuel_quote', async () => {
    const response = await request(app).post('/api/add_fuel_quote')
      .send({
        userID: "1", // Provide a valid clientID
        gallonsRequested: 4,
        deliveryDate: "2023-10-21",
        suggestedPrice: 1.5,
        totalPrice: 123,
        address1: "123 Main St",
        address2: "Apt 1",
        city: "Houston",
        state: "TX",
        zipcode: 77001,
        hasHistory: true,
      });
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Data received successfully",
    });
  });

  it('should test /api/quotes', async () => {
    const response = await request(app).get('/api/quotes');
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "John Smith",
      userid: "1",
      client_address: "123 Main St Apt 1 Houston TX 77001",
      quotes: [
        {
          address1: "123 Main St",
          address2: "Apt 1",
          city: "Houston",
          clientID: "1",
          deliveryDate: "2023-10-21",
          gallonsRequested: 4,
          state: "TX",
          suggestedPrice: 1.5,
          totalPrice: 123,
          zipcode: 77001,
        },
      ],
    });
  });
});
