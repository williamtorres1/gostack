
/**
 * To create a user, need name, email and password
 * @param name string
 * @param email string
 * @param password string
 * @returns user = { name, email, password }
 */
interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData { 
  name?: string;
  email: string; 
  password: string;
  techs: Array<string | TechObject>
}

export default function createUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user
}