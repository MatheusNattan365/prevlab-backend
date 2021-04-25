import bcrypt from "bcrypt";

class Bcrypt {
  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10).then((hash) => hash);
  }
  static async commparePassword(
    password: string,
    userPassword: string
  ): Promise<boolean> {
    return await bcrypt
      .compare(password, userPassword)
      .then((result) => result);
  }
}

export { Bcrypt };
