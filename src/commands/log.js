const { Command, flags } = require("@oclif/command");
const fs = require("fs");
const os = require("os");
const dateFormat = require("dateformat");
const Sentiment = require("sentiment");
const fileAccessor = require("../utils/file");

class LogCommand extends Command {
  async run() {
    const homedir = os.homedir();
    const dir = `${homedir}/atm_logs`;
    const now = new Date();
    const time = dateFormat(now, "HH:MM");
    const filePath = fileAccessor.getCurrentFilePath();

    const { flags } = this.parse(LogCommand);
    const message = flags.message || "null";
    const type = flags.type || "log";

    const sentiment = new Sentiment();
    const sentimentScore = sentiment.analyze(message);

    const composedMessage = `${time} | ${type} | sentiment:${sentimentScore.score} | ${message}${os.EOL}`;

    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) console.log(err);
    });

    if (composedMessage) {
      fs.appendFile(filePath, composedMessage, function (err) {
        if (err) console.log(`🤖 Something went wrong`);
        console.log(`👏 Logged to ${filePath}`);
      });
    }
  }
}

LogCommand.description = "Add a new log";

LogCommand.flags = {
  message: flags.string({ char: "m", description: "message" }),
  type: flags.string({ char: "t", description: "type" }),
};

module.exports = LogCommand;
