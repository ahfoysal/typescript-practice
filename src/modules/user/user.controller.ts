import { NextFunction, Request, Response } from "express"
import { addUserToDb, getUserFromDb } from "./user.service"

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body
  const user = await addUserToDb(data)
  console.log(user)
  res.status(200).json({
    status: "success",
    data: user,
  })
}
export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await getUserFromDb()
   res.status(200).json({
    status: "success",
    data: user,
  })
}
