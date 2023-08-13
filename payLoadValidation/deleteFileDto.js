const { body } = require("express-validator");
const deleteFileDto = () => {
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
    body("fileName")
      .exists({ checkFalsy: true })
      .withMessage("fileName is required")
      .isString()
      .withMessage("fileName should be string"),
  ];
};

module.exports = {
    deleteFileDto,
};
