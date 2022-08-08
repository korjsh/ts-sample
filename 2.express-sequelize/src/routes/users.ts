import express from "express";
const router = express.Router();

interface User {
  id: number;
  userId: string;
  password: string;
  name?: string;
}
let datastore: User[] = [];

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(datastore);
});

export { router };
