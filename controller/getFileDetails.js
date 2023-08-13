const fs = require("fs");
const _ = require("lodash");
const message = require("./contant");
const moment = require("moment");

function getFileDetails(req, res) {
  const { bucketName, id } = _.get(req, "query", {});
  const fileName = _.get(req, "params.fileName");

  let filePath = `${bucketName}-${id}/${fileName}`;
  let dir = `${message.s3Name}/${filePath}`;

  // Check if file exists
  fs.stat(dir, (err, stats) => {
    if (err) {
      return res.status(404).json({ error: message.fileNotFound });
    }
    res.status(200).json({
      fileName: req.params.fileName,
      path: `${__dirname}/${message.s3Name}/${filePath}`,
      fileSize: stats.size,
      createdAt: utcToLocal(stats.birthtime),
      modifiedAt: utcToLocal(stats.mtime),
    });
  });
}
module.exports = getFileDetails;

function utcToLocal(timeStamp) {
  return moment.utc(timeStamp).local().format("DD MMM YYYY hh:mm:ss A dddd");
}
