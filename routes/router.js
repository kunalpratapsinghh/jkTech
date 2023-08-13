var express = require("express");
var router = express.Router();

const { createBucketDto } = require("../payLoadValidation/createBucket");
const { bucketQuery } = require("../payLoadValidation/addFileToBucket");
const createUserBucket = require("../controller/CreateBucket");
const listAllUserFiles = require("../controller/listAllUserFiles");
const getFileDetails = require("../controller/getFileDetails");
const deleteFile = require("../controller/deleteFile");
const uploadToUserBucket = require("../controller/uploadToBucket");
const { upload } = require("../controller/multer");
const { validate } = require("../payLoadValidation/validate");
const { deleteFileDto } = require("../payLoadValidation/deleteFileDto");


//all routes
router.post("/create", createBucketDto(), validate, createUserBucket);

router.put(
  "/upload",
  bucketQuery(),
  validate,
  upload.single("file"),
  uploadToUserBucket
);

router.get("/view/allfile", bucketQuery(), validate, listAllUserFiles);

router.get("/view/:fileName", bucketQuery(), validate, getFileDetails);

router.delete("/delete", deleteFileDto(), validate, deleteFile);

module.exports = router;
