import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { User } from "./modules/user/user.model";

const app: Application = express();

///cors
app.use(cors());

///body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  //insert a data
  const addUserToDb = async () => {
    const user = new User({
      id: 3,
      role: "student",
      password: "<PASSWORD>",
      name: "<NAME>",
      email: "<EMAIL>",
      phone: "0987654321",
    });
    const result = await user.save();

    console.log(result);
    return res.json(result);
  };
  // addUserToDb()
  res.send("success");
  // next()
});

export default app;
