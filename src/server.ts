import registerApi from "./api";
import express from "express";
import * as bodyParser from "body-parser";
import Knex from "knex";
import * as morgan from "morgan";
import * as dotenv from "dotenv";

const knexConfig = require("../config/knexfile");
// Initialize knex.
export const knex = Knex(knexConfig.development);
//use env variables
dotenv.config();

//express-promise-router types are borked. Just require():
const router = require("express-promise-router")();

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
