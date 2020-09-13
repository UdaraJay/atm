const { Command, flags } = require("@oclif/command");
const fs = require("fs");
const fileAccessor = require("../utils/file");
const readEachLineSync = require("read-each-line-sync");
const { cli } = require("cli-ux");

class ReviewCommand extends Command {
  async run() {
    const { args, flags } = this.parse(ReviewCommand);

    const timeUnits = {
      day: 1,
      week: 7,
      month: 30,
    };

    const timeUnit = timeUnits[args.timespan];
    const filePaths = fileAccessor.getLastXFilePaths(timeUnit);

    let types = [];
    let moods = [];
    const logs = [];

    // Each file == each day
    filePaths.forEach((filePath) => {
      if (!fs.existsSync(filePath)) {
        return;
      }

      readEachLineSync(filePath, function (line) {
        const a = line.split("|");
        const time = a[0].trim();
        const type = a[1] ? a[1].trim() : "log";

        const metaString = a[2] ? a[2].trim() : a[2];
        const metaStringList = metaString ? metaString.split(",") : [];
        const metaData = [];

        const message = a[3] ? a[3].trim() : a[3];

        metaStringList.forEach((meta) => {
          const metaVars = meta.split(":");
          metaData[metaVars[0]] = metaVars[1];
        });

        isNaN(types[type]) ? (types[type] = 1) : (types[type] += 1);

        if (type == "mood") {
          isNaN(moods[message]) ? (moods[message] = 1) : (moods[message] += 1);
        }

        const log = {
          time: time,
          type: type,
          message: message,
          metaData: metaData,
        };

        logs.push(log);
      });
    });

    console.log("Summary of all logs");
    console.table(types);
    console.log("Mood(s) in timespan");
    console.table(moods);

    cli.table(
      logs,
      {
        time: {
          minWidth: 7,
        },
        type: {},
        message: {
          minWidth: 20,
        },
        metaData: {
          extended: true,
        },
      },
      {
        ...flags,
      }
    );
  }
}

ReviewCommand.description = "A summary of your logs";

ReviewCommand.args = [
  {
    name: "timespan",
    default: "day",
    options: ["day", "week", "month"],
  },
];

ReviewCommand.flags = {
  columns: flags.string({
    exclusive: ["additional"],
    description: "only show provided columns (comma-seperated)",
  }),
  sort: flags.string({
    description: "property to sort by (prepend " - " for descending)",
  }),
  filter: flags.string({
    description: "filter property by partial string matching, ex: name=foo",
  }),
  csv: flags.boolean({
    exclusive: ["no-truncate"],
    description: "output is csv format",
  }),
  extended: flags.boolean({ char: "x", description: "show extra columns" }),
  "no-truncate": flags.boolean({
    exclusive: ["csv"],
    description: "do not truncate output to fit screen",
  }),
  "no-header": flags.boolean({
    exclusive: ["csv"],
    description: "hide table header from output",
  }),
};

module.exports = ReviewCommand;
