const { query } = require("express-validator");
const bucketQuery = () => {
  return [
    query("bucketName")
      .exists({ checkFalsy: true })
      .withMessage("bucketName is required in query params")
      .isString()
      .withMessage("bucketName should be string in query params"),
    query("id")
      .exists({ checkFalsy: true })
      .withMessage("id is required in query params")
      .isString()
      .withMessage("id should be string in query params")]
};

module.exports = {
  bucketQuery,
};
