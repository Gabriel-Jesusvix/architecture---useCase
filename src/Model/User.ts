export type UserDTO = {
  name: string;
  email: string;
  password: string;
};

export class User {
  constructor({name, email, password}: UserDTO) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
