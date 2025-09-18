import bodyParser from "body-parser";
import express from 'express'
import {configureRoutes} from "./routes.js";
import mongoose from "mongoose";
export const startServer = (app, port) => {
  app.use(bodyParser.json())

  mongoose.connect('mongodb://localhost:27017/kommanda', {
    useNewUrlParser:true,
    useUnifiedTopology:true,})
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log('Error al conectar a MongoDB'));

  app.get('/healthCheck', (req, res) => {
    res.status(200).json({mensaje:'Todo marcha bien!'})
  })

  configureRoutes(app)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  return app;
}