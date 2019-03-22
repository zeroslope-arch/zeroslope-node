/**
 * @swagger
 * definitions:
 *   TokenRequest:
 *     properties:
 *       client_id:
 *         type: string
 *       secret:
 *         type: string
 */
class TokenRequest {
  constructor() {
    this.client_id = "";
    this.secret = "";
  }
}
module.exports = TokenRequest;
