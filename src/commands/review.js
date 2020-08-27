const { Command } = require("@oclif/command");
const fs = require("fs");
const fileAccessor = require("../utils/file");
const readEachLineSync = require("read-each-line-sync");

const calculateMedian = (array) => {
  array.sort(function (a, b) {
    return a - b;
  });
  var mid = array.length / 2;
  return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
};

class ReviewCommand extends Command {
  async run() {
    const { args } = this.parse(ReviewCommand);

    const timeUnits = {
      day: 1,
      week: 7,
      month: 30,
    };

    const timeUnit = timeUnits[args.timespan];
    const filePaths = fileAccessor.getLastXFilePaths(timeUnit);
    let types = [];

    // stats
    const sentiments = [];

    filePaths.forEach((filePath) => {
      if (!fs.existsSync(filePath)) {
        return;
      }

      readEachLineSync(filePath, function (line) {
        const a = line.split("|");
        const time = a[0].trim();
        const type = a[1].trim();

        const metaString = a[2].trim();
        const metaStringList = metaString.split(",");
        const metaData = [];

        metaStringList.forEach((meta) => {
          const metaVars = meta.split(":");
          metaData[metaVars[0]] = metaVars[1];
        });

        if (
          !isNaN(parseInt(metaData.sentiment)) &&
          parseInt(metaData.sentiment) != 0
        ) {
          sentiments.push(parseInt(metaData.sentiment));
        }

        isNaN(types[type]) ? (types[type] = 1) : (types[type] += 1);
      });
    });

    const averageSentiment =
      sentiments.reduce((a, b) => a + b, 0) / sentiments.length;

    const median = calculateMedian(sentiments);

    console.table(types);
    console.log("Average sentiment:", Math.round(averageSentiment));
    console.log("Median sentiment: ", Math.round(median));
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

module.exports = ReviewCommand;
