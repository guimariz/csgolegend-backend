import mongoose from 'mongoose';

export default class Mongo {
  constructor() {}

  connect() {
    mongoose.connect(
      'mongodb+srv://db_user:H0yW1nvjdzEwlZGl@clustercsgolegends.kxzhc.mongodb.net/csgolegends?retryWrites=true&w=majority',
      { useNewUrlPaser: true }
    );
    mongoose.Promise = global.Promise;
  }

  createUser(schema, user) {
    this.connect();

    let Schema = mongoose.Schema;
    let User = new Schema(schema);

    let UsersModel = mongoose.model('newUser', User);
    let newUser = new UsersModel(user);

    newUser.create((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(result, null, 4));
      }
    });
  }
}
