import registerApi from "./api";
import express from "express";
import * as bodyParser from "body-parser";
import Knex from "knex";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { Model } from "objection";

const knexConfig = require("../knexfile");
// Initialize knex.
export const knex = Knex(knexConfig.development);
// Create or migrate:
knex.migrate.latest();

//use env variables
dotenv.config(knexConfig);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

//express-promise-router types are borked. Just require():
const router = require("express-promise-router")();
// or use express.Router();

const app: express.Application = express()
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(router)
  .set("json spaces", 2);

// Register our REST API.
registerApi(router);

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
  console.log("Hello dev");
});
