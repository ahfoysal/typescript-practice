import { User } from "./user.model"

export const addUserToDb = async () => {
  const user = await new User({
    id: "19",
    role: "student",
    password: "<PASSWORD>",
    name: "New Student",
    email: "<EMAIL>",
    phone: "0987654321",
  })
  const result = await user.save()

  return result
}
