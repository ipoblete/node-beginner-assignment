function start() {
  console.log('Request handler start was called.');
  return 'Hello Start';
}

function upload() {
  console.log('Request handled upload was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
