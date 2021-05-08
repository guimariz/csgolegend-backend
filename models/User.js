import Mongo from '../database/index.js';
import bcrypt from 'bcryptjs';

export default class User {
  constructor() {}

  createUser(body) {
    let UserSchema = {
      name: {
        type: String,
        require: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    };

    UserSchema.pre('save', async (next) => {
      const hash = await bcrypt.has(this.password, 10);
      this.password = hash;

      next();
    });

    return new Mongo().createUser(UserSchema, body);
  }
}
