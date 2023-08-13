const multer = require("multer");
const fs = require("fs");
const path = require("path");
const message = require("./contant");

const uploadToStorage = multer.diskStorage({
  destination: async (req, file, cb) => {
    let folderName = `${req.query.bucketName}-${req.query.id}`;
    let dir = `${message.s3Name}/${folderName}`;
    fs.access(dir, fs.constants.F_OK, (err) => {
      if (err) {
        return cb(message.directoryNotExist, false);
      } else {
        cb(null, dir);
      }
    });
  },
  filename: (req, file, cb) => {
    let customName = file.originalname.replace(/\s/g, "");
    cb(null, customName);
  },
});

module.exports.upload = multer({ storage: uploadToStorage });
