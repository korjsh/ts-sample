import express from "express";
import { Request, Response } from "express";

const router = express.Router();


router.get("/:param", (req: Request, res: Response) => {
  const id = +req.params['param']
  const result = id + 1
  res.send(`${result}`)
})

// interface User {
//   id: number;
//   userId: string;
//   password: string;
//   name?: string;
// }
// let datastore: User[] = [];

// router.get("/", (req: Request, res: Response) => {
//   res.send(datastore);
// });
// router.get("/:id", (req: Request, res: Response) => {
//   const id = req.params["id"];
//   res.send(getUser(+id));
// });
// router.put("/:id", (req: Request, res: Response) => {
//   const id = req.params["id"];
//   const user = getUser(+id);
//   const data = req.body;
//   deleteUser(+id);
//   datastore.push({ ...user, ...data });
//   res.send(`id ${id} user updated!`);
// });
// router.delete("/:id", (req: Request, res: Response) => {
//   const id = req.params["id"];
//   getUser(+id);
//   deleteUser(+id);
//   res.send(`id ${id} user deleted!`);
// });
// router.post("/", (req: Request, res: Response) => {
//   const data = {
//     userId: req.body["userId"],
//     password: req.body["password"],
//     name: req.body["name"],
//   };
//   datastore.push({ id: datastore.length + 1, ...data });
//   res.send(data);
// });

// const getUser = (id: User["id"]): User => {
//   const user = datastore.find((data) => data.id === +id);
//   if (!user) throw new Error("해당하는 유저가 없음!");
//   return user;
// };
// const deleteUser = (id: User["id"]) => {
//   datastore = datastore.filter((user) => user.id !== id);
// };
export { router };
