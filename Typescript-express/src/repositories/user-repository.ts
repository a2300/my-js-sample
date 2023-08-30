import { UserEntity, Users } from '../entities/user.entity';
import fs from "fs";

let users: Users = loadUsers();

function loadUsers () : Users {
    try {
      const data = fs.readFileSync("./users.json", "utf-8")
      return JSON.parse(data)
    } catch (error) {
      console.log(`Error ${error}`)
      return {}
    }
}

export const findAll = async() : Promise<UserEntity[]> => Object.values(users);
export const findOne = async (id : string) : Promise<UserEntity| null > => Object.values(users).filter(e => e.id === id)[0];

