import mongoose from "mongoose";
import express from 'express';
import cors from 'cors';

import { env } from '@server/utils';
import { AuthRoute, MailRoute, TokenRoute, UserRoute } from "@server/routes";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setDatabase();
    this.setConfiguration();
    this.setRoutes();
  }

  setDatabase() {
    mongoose.connect(String(env.MONGODB_URI), {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    const databaseConnection = mongoose.connection
    databaseConnection.on('error', console.error.bind(console, 'MongoDB Connection error'))
  }

  setConfiguration() {
    this.express.use(cors())
    this.express.use(express.json({ limit: "10mb" }))
    this.express.use(express.urlencoded({ extended: true }))
  }

  setRoutes() {
    this.express.use('/auth', AuthRoute)
    this.express.use('/mails', MailRoute)
    this.express.use('/tokens', TokenRoute)
    this.express.use('/users', UserRoute)
  }
}

export default new App().express