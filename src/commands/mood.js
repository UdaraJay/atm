const { Command, flags } = require("@oclif/command");
const fileAccessor = require("../utils/file");
const inquirer = require("inquirer");

class MoodCommand extends Command {
  async run() {
    const filePath = fileAccessor.getCurrentFilePath();
    const { flags } = this.parse(MoodCommand);
    let mood = flags.mood;

    const moods = {
      Happy: 3,
      Stressed: -2,
      Anxious: -2,
      Energized: 0,
      Fatigued: -2,
      Sad: -2,
    };

    if (!mood) {
      let responses = await inquirer.prompt([
        {
          name: "mood",
          message: "What's your mood?",
          type: "list",
          choices: [
            { name: "Happy", description: "😊" },
            { name: "Stressed", description: "😖" },
            { name: "Anxious", description: "😓" },
            { name: "Energized", description: "😃" },
            { name: "Fatigued", description: "😴" },
            { name: "Sad", description: "😞" },
          ],
        },
      ]);

      mood = responses.mood;
    }

    const time = fileAccessor.timeStamp();
    const line = `${time} | mood | sentiment:${moods[mood]} | ${mood}`;

    fileAccessor.writeLineToCurrentFile(line);
  }
}

MoodCommand.description = "";

MoodCommand.flags = {
  mood: flags.string({ char: "m", description: "your mood now" }),
};

module.exports = MoodCommand;
