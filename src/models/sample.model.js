/**
 * @swagger
 * definitions:
 *   SampleResponse:
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *   SampleRequest:
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 */
class Sample {
  constructor() {
    this.id = "";
    this.name = "";
    this.description = "";
  }
}
module.exports = Sample;
