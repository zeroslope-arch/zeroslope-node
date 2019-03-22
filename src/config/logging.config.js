var winston = require("winston");

module.exports = app =>
  new Promise((resolve, reject) => {
    try {
      app.logger = winston.createLogger({
        level: "info",
        format: winston.format.json(),
        defaultMeta: {
          service: "zeroslope-service"
        },
        transports: [
          new winston.transports.Console()
          // new winston.transports.File({
          //     filename: './logs/zeroslope.errors.log',
          //     level: 'error'
          // }),
          // new winston.transports.File({
          //     filename: './logs/zeroslope.log'
          // }),
        ]
      });

      resolve(app);
    } catch (err) {
      reject(err);
    }
  });
