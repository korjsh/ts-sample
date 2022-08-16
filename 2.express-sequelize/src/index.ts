import express from "express";
import { sequelize } from './models';
import { router as Users } from "./routes/users";

const app = express();
const port = 3000;

  sequelize
    .sync({
      force: false,
    })
    .then(() => {
      console.log('Sequelize sync success');
    })
    .catch((err: Error) => {
      console.error(err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

app.use("/users", Users);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
