const fs = require("fs");
const _ = require("lodash");
const message = require("./contant");

function listAllUserFiles(req, res) {
  const { bucketName, id } = _.get(req, "query", {});
  let folderName = `${bucketName}-${id}`;
  let dir = `${message.s3Name}/${folderName}`;

  fs.access(dir, (err) => {
    if (err) {
      return res.status(400).json({ error: message.bucketNotExist });
    } else {
      fs.readdir(dir, (err, files) => {
        if (err) {
          return res
            .status(400)
            .json({ error: `${message.fileNotFoundInBucket} ${bucketName}` });
        }
        res.status(200).send({ message: "Files found are", files });
      });
    }
  });
}

module.exports = listAllUserFiles;
