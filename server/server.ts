import express, { Request, Response } from "express";
import cors from "cors";
import { createRoute } from "./middleware/requestRouter";

const PORT = 8000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
  const route = createRoute();
  app.use("/api", route);
});
