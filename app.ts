import cors from 'cors'
import express from 'express'
import compression from 'compression'

import { env } from 'utils'
import { Db } from 'config'
import { ExampleRouter } from "routes";

class App {
  public express: any

  constructor() {
    this.express = express()

    Db.connect().then(() => {
      this.#setConfiguration();
      this.#setRoute();
    });

    this.#getMemoryUsage()
  }

  #getMemoryUsage() {
    const used = process.memoryUsage()
    for (let key in used) {
      console.log(
        `${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`
      )
    }
  }

  #setConfiguration() {
    this.express.use(express.json({ limit: '10mb' }))
    this.express.use(
      cors({
        credentials: true,
        origin: String(env.CORS_ORIGIN)
      })
    )
    this.express.use(compression())
    this.express.use(express.urlencoded({ extended: true }))
  }

  #setRoute() {
    this.express.use('/example', ExampleRouter)
  }
}

export default new App().express
