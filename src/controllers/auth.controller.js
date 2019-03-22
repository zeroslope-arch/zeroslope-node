var _service = require("../services/auth.service");
const router = require("express").Router();

/**
 * @swagger
 * /auth/authenticate:
 *    post:
 *      tags:
 *        - Authentication
 *      summary: Generates a JWT token
 *      produces:
 *          - application/json
 *      parameters:
 *          - name: Model
 *            description: Token Request
 *            in: body
 *            required: true
 *            schema:
 *              $ref: '#/definitions/TokenRequest'
 *      responses:
 *          200:
 *              description: Returns a valid JWT token
 */
router.post("/auth/authenticate", (req, res, next) =>
  _service
    .generate(req.body)
    .then(data => res.send(data))
    .catch(next)
);

/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Authentication endpoints for user management
 */
module.exports = router;
