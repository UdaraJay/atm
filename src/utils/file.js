const os = require("os");
const dateFormat = require("dateformat");

const homedir = os.homedir();
const dir = `${homedir}/doki_logs`;

const getLastXFilePaths = (x = 7) => {
  const result = [];

  for (let i = 0; i < x; i++) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const fileName = dateFormat(d, "dd-mm-yyyy");
    const filePath = `${dir}/${fileName}.txt`;

    result.push(filePath);
  }

  return result;
};

const getCurrentFilePath = () => {
  const now = new Date();
  const fileName = dateFormat(now, "dd-mm-yyyy");
  const filePath = `${dir}/${fileName}.txt`;

  return filePath;
};

exports.getCurrentFilePath = getCurrentFilePath;
exports.getLastXFilePaths = getLastXFilePaths;
