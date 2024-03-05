import { User } from "../model/interfaces"

export interface UserProfile extends Omit<User, "email" | "password" | "id"> {}
