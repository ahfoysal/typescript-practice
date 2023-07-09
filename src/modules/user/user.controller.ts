import { NextFunction, Request, Response } from "express"
import { addUserToDb } from "./user.service"

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await addUserToDb()
  console.log(user)
  res.status(200).json({
    status: "success",
    data: user,
  })
}
