import express, { Request, Response } from "express";
import ccrs from "cors";
import { createRoute } from "./middleware/requestRouter";

const PORT = 8000;

const app = express();
app.use(ccrs());
app.use(express.json());

app.post("/", (req: Request, res: Response) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Server ready on port ${PORT}`);
  const route = createRoute();
  app.use("/api", route);
});
