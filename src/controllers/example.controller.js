const router = require("express").Router();
var { ErrorType, HandledError } = require("../errors/error.model");

/**
 * @swagger
 * /exampleerror:
 *    get:
 *      tags:
 *        - Error Example
 *      summary: An example call to show how exceptions are returned
 *      produces:
 *          - application/json
 *      responses:
 *          400:
 *              description: The service shows a validate error
 */
router.get("/exampleerror", (req, res, next) => {
  throw new HandledError(ErrorType.SECURITY, "Oh god an error happened.");
});

/**
 * @swagger
 * tags:
 *   - name: Error Example
 *     description: Shows how exceptions are shown
 */
module.exports = router;
