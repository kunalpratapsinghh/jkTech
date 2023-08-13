const message = require("./contant");

function uploadToUserBucket(req, res) {
  let file = req.file;
  if (!file) {
    return res.status(400).json({ error: message.fileNotUploaded });
  }
  res.status(200).send({ message: message.successfullUpload });
}

module.exports = uploadToUserBucket;
