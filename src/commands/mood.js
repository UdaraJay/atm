const { Command } = require("@oclif/command");
const fileAccessor = require("../utils/file");
const inquirer = require("inquirer");

class MoodCommand extends Command {
  async run() {
    const filePath = fileAccessor.getCurrentFilePath();

    let responses = await inquirer.prompt([
      {
        name: "mood",
        message: "Name the feeling? (Pick the first you relate to atm)",
        type: "list",
        choices: [
          "Happy/Aliveness",
          "Despair/Sad",
          "Accepting/Content",
          "Angry/Annoyed",
          "Connected/Loving",
          "Courageous/Powerful",
          "Curious",
          "Disconnected/Numb",
          "Embarrased/Shame",
          "Fear",
          "Fragile",
          "Grateful",
          "Guilt",
          "Hopeful",
          "Powerless",
          "Stressed/Tense",
          "Tender/Reflective",
          "Unsettled/Doubt",
        ],
      },
      {
        name: "what",
        message: "What caused this feeling?",
        type: "input",
      },
      {
        name: "actions",
        message: "Behaviors or actions this feeling caused me to take?",
        type: "input",
      },
      {
        name: "isAppropriate",
        message: "Is this feeling appropriate to the situation?",
        type: "input",
      },
      {
        name: "fix",
        message:
          "What can I do to improve/fix it? (Remember to be kind to yourself)",
        type: "input",
      },
    ]);

    const time = fileAccessor.timeStamp();
    const meta = `what:${responses.what}, actions:${responses.actions}, isAppropriate:${responses.isAppropriate}, fix:${responses.fix}`;
    const line = `${time} | mood | ${meta} | ${responses.mood}`;

    fileAccessor.writeLineToCurrentFile(line);
  }
}

MoodCommand.description = "";

module.exports = MoodCommand;
