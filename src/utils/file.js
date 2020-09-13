const fs = require("fs");
const os = require("os");
const dateFormat = require("dateformat");
const homedir = os.homedir();
const dir = `${homedir}/atm_logs`;

const timeStamp = () => {
  const now = new Date();
  return dateFormat(now, "HH:MM");
};

const writeLineToCurrentFile = (line, type = null) => {
  const lineWithEOL = line + os.EOL;
  const filePath = getCurrentFilePath();

  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) console.log(err);
  });

  if (line) {
    fs.appendFile(filePath, lineWithEOL, function (err) {
      if (err) console.log(`🤖 Something went wrong`);

      console.log(`👏 Logged to ${filePath}`);
      console.log("🧠", getRandomQuote());
    });

    // If it's a quote then also write to a dedicated file
    // for easier access later.
    if (type && type == "quote") {
      fs.appendFile(`${dir}/atm_quotes.txt`, lineWithEOL, function (err) {
        if (err) console.log(`🤖 Something went wrong`);
        console.log(`🧠 I'll also remember this quote for you!`);
      });
    }
  }
};

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

const getRandomQuote = () => {
  const filePath = `${dir}/atm_quotes.txt`;

  if (!fs.existsSync(filePath)) {
    return;
  }
  const rawQuotes = fs.readFileSync(filePath).toString("utf-8");
  const quotes = rawQuotes.split(os.EOL);
  const quoteString = quotes[Math.floor(Math.random() * quotes.length)];
  const quote = quoteString.split("|").pop();

  return quote;
};

exports.getCurrentFilePath = getCurrentFilePath;
exports.getLastXFilePaths = getLastXFilePaths;
exports.writeLineToCurrentFile = writeLineToCurrentFile;
exports.timeStamp = timeStamp;
exports.dir = dir;
