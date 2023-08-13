const fs = require("fs");
const _ = require("lodash");
const message = require("./contant");

function deleteFile(req, res) {
  const { bucketName, id, fileName } = _.get(req, "body", {});

  let filePath = `${bucketName}-${id}/${fileName}`;
  let dir = `${message.s3Name}/${filePath}`;
  fs.unlink(dir, (err) => {
    if (err) {
      return res.status(402).json({ error: message.fileNotFound });
    }
    return res.status(200).send({
      message: "File deleted " + _.get(req, "body.fileName", "undefined"),
    });
  });
}

module.exports = deleteFile;
