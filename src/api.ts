import * as express from "express";

export default (router: express.Router) => {
  router.get("/", function(req, res) {
    res.send("Hello dev!");
  });
};
