var morgan = require("morgan"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser");

module.exports = app =>
  new Promise((resolve, reject) => {
    try {
      app.set("trust proxy", 1);

      app.use(
        bodyParser.urlencoded({
          extended: false
        })
      );

      app.use(bodyParser.json());

      app.use("/*", cookieParser());

      app.use(
        morgan((tokens, req, res) => {
          `${tokens.method(req, res)} ${tokens.status(req, res)} - ${tokens.url(
            req,
            res
          )} - ${tokens["response-time"](req, res)}ms`;
        })
      );

      resolve(app);
    } catch (err) {
      reject(err);
    }
  });
