import express from "express";
const router = express.Router();

interface User {
  id: number;
  userId: string;
  password: string;
  name?: string;
}
const datastore: User[] = [];

router.get("/", (req: express.Request, res: express.Response) => {
  res.send(datastore);
});
router.get("/:id", (req: express.Request, res: express.Response) => {
  const id = req.params["id"];
  const user = datastore.find((data) => data.id === +id);
  res.send(user);
});
router.post("/", (req: express.Request, res: express.Response) => {
  const data = {
    userId: req.body["userId"],
    password: req.body["password"],
    name: req.body["name"],
  };
  datastore.push({ id: datastore.length + 1, ...data });
  res.send(data);
});

export { router };
