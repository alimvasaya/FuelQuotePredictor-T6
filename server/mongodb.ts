import mongoose from 'mongoose';

export const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(
      'mongodb+srv://team6:wkZ8P5Rc9ltPtqVb@team6cluster.ypinp8k.mongodb.net/?retryWrites=true&w=majority',
    );

    if (connection.readyState === 1) {
      console.log('Database connected');
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error('Database connection failed');
    return Promise.reject(error);
  }
};

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri =
//   'mongodb+srv://team6:wkZ8P5Rc9ltPtqVb@team6cluster.ypinp8k.mongodb.net/?retryWrites=true&w=majority';

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db('admin').command({ ping: 1 });
//     console.log(
//       'Pinged your deployment. You successfully connected to MongoDB!',
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
