import * as express from "express";
import Issue from "./Models/Issue";

export default (router: express.Router) => {
  router.get("/", function(req, res) {
    Issue.query().then(issue => res.send(issue));
  });
};
