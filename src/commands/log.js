const { Command, flags } = require("@oclif/command");

const Sentiment = require("sentiment");
const fileAccessor = require("../utils/file");

class LogCommand extends Command {
  async run() {
    const time = fileAccessor.timeStamp();

    const { flags } = this.parse(LogCommand);
    const message = flags.message || "null";
    const type = flags.type || "log";

    const sentiment = new Sentiment();
    const sentimentScore = sentiment.analyze(message);

    const composedMessage = `${time} | ${type} | sentiment:${sentimentScore.score} | ${message}`;

    fileAccessor.writeLineToCurrentFile(composedMessage, type);
  }
}

LogCommand.description = "Add a new log";

LogCommand.flags = {
  message: flags.string({ char: "m", description: "message" }),
  type: flags.string({ char: "t", description: "type" }),
};

module.exports = LogCommand;
