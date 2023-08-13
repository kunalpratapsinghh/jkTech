const { body } = require("express-validator");
const createBucketDto = () => {
  return [
    body("bucketName")
      .exists({ checkFalsy: true })
      .withMessage("bucketName is required")
      .isString()
      .withMessage("bucketName should be string"),
    body("id")
      .exists({ checkFalsy: true })
      .withMessage("id is required")
      .isString()
      .withMessage("id should be string"),
  ];
};

module.exports = {
  createBucketDto,
};
