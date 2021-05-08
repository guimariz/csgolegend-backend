import User from '../models/User.js';

export default class AuthController {
  user = new User();
  constructor() {}

  async createUser(data) {
    if (await new User().createUser(data).findOne({ email }))
      return res.status(400).send({ error: 'Usuário já existe' });

    let newUser = await new User().createUser(data);

    newUser.password = undefined;

    return newUser;
  }
}
