const { Command, flags } = require("@oclif/command");
const fs = require("fs");
const os = require("os");
const dateFormat = require("dateformat");
const Sentiment = require("sentiment");

class LogCommand extends Command {
  async run() {
    const homedir = os.homedir();
    const dir = `${homedir}/doki_logs`;
    const now = new Date();
    const time = dateFormat(now, "HH:MM");
    const fileName = dateFormat(now, "dd-mm-yyyy");
    const filePath = `${dir}/${fileName}.txt`;

    const { flags } = this.parse(LogCommand);
    const message = flags.message || "null";
    const type = flags.type || "log";

    const sentiment = new Sentiment();
    const sentimentScore = sentiment.analyze(message);

    const composedMessage = `${time} | ${type} | score:${sentimentScore.score} | ${message}${os.EOL}`;

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

LogCommand.description = `Describe the command here
...
Extra documentation goes here
`;

LogCommand.flags = {
  message: flags.string({ char: "m", description: "message" }),
  type: flags.string({ char: "t", description: "type" }),
};

module.exports = LogCommand;
