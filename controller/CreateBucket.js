const fs = require("fs");
const _ = require("lodash");
const message = require("./contant");

function createUserBucket(req, res) {
  const { bucketName, id } = _.get(req, "body", {});
  let dirName = `${message.s3Name}/${bucketName}-${id}`;

  // Check if bucket already exists
  if (fs.existsSync(dirName)) {
    return res.status(200).json({ message: message.bucketExists });
  } else {
    // Create new bucket directory
    fs.mkdirSync(`${dirName}`);
    return res.status(200).json({ message: message.bucketExists });
  }
}

module.exports = createUserBucket;
