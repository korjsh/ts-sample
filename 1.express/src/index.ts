import express from "express";
import { Request, Response } from "express";
import { router as Users } from "./routes/users";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("아아아");
});

app.use("/users", Users);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
