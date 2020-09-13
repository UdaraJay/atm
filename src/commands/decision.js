const { Command, flags } = require("@oclif/command");
const fileAccessor = require("../utils/file");
const inquirer = require("inquirer");

class DecisionCommand extends Command {
  async run() {
    let responses = await inquirer.prompt([
      {
        name: "decision",
        message: "The decision you made:",
        type: "input",
      },
      {
        name: "mood",
        message: "Mental/Physical state:",
        type: "list",
        choices: [
          "Energized",
          "Focused",
          "Relaxed",
          "Confident",
          "Tired",
          "Accepting",
          "Accomodating",
          "Anxious",
          "Resigned",
          "Frustrated",
          "Angry",
        ],
      },
      {
        name: "context",
        message: "Situation/Context:",
        type: "input",
      },
      {
        name: "problem",
        message: "The problem statement or frame:",
        type: "input",
      },
    ]);

    const time = fileAccessor.timeStamp();
    const meta = `mood:${responses.mood}, context:${responses.context}, problem:${responses.problem}`;
    const line = `${time} | decision | ${meta} | ${responses.decision}`;

    fileAccessor.writeLineToCurrentFile(line);
  }
}

DecisionCommand.description = "Decision journal";

module.exports = DecisionCommand;
