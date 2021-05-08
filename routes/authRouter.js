import express from 'express';
import AuthController from '../controllers/AuthController.js';

const authRouter = express.Router();

authRouter.post('/register', async (req, res) => {
  try {
    let data = await new AuthController().createUser(req.body);
    return res.send(data);
  } catch (err) {
    console.log(err);
    return res.status(400).send({ error: 'Falha no registro' });
  }
});

export default authRouter;
