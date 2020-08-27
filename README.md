# atm – at the moment.

### A personal logging and tracking CLI.

A straightforward command-line interface for logging anything about your day and reviewing it later.

## Inspiration

Think software log files, but for you. They're versatile, easy to backup and are straightforward to parse for any data analysis you want to do. I got frustrated with having to use multiple apps for logging my daily activities, mood, food etc. The data gets fragment across all these different apps and you get no flexibility around how you get to view and analyse that data later.

## How it works

**atm** is simple. It writes logs into a `atm_log` folder in your user directory. One log file per day (`dd-mm-yyyy.txt`). One line per log in each file. All of it's stored locally, you can back them up, and use them however you like.

## Installation

```sh-session
$ npm install -g @udarajay/atm
```

## Usage

### `atm log`

Accepts a `-m` flag for the `message` and an optional `-t` flag for `type`. Type can be absolutely anything you want, but there are some types that `atm` can understand and review for you when you use the review command.

Example:

```sh-session
$ atm log -m "Good morning"
👏 Logged to /Users/user/atm_logs/27-08-2020.txt

$ atm log -m "Published first version of atm" -t done
👏 Logged to /Users/user/atm_logs/27-08-2020.txt

$ atm log -m smoothie -t drank
👏 Logged to /Users/user/atm_logs/27-08-2020.txt
```

### `atm mood`

```sh-session
$ atm mood
? What's your mood? (Use arrow keys)
❯ Happy
  Stressed
  Anxious
  Energized
  Fatigued
  Sad
👏 Logged to /Users/user/atm_logs/27-08-2020.txt
```

### `atm review`

Options:

- `atm review` // Day
- `atm review week`
- `atm review month`

```sh-session
$ atm review
Summary of all logs
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   log   │   7    │
│  done   │   3    │
│  mood   │   2    │
│  quote  │   1    │
└─────────┴────────┘
Mood(s) in timespan
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ Happy   │   3    │
│ Anxious │   1    │
└─────────┴────────┘
Average sentiment: 1
Median sentiment:  2

Sentiment over time period
       4.00 ┤ ╭╮
       3.25 ┤ │╰╮ ╭
       2.50 ┼─╯ │ │
       1.75 ┼   │ │
       1.00 ┤   │ │
       0.25 ┤   │ │
      -0.50 ┤   │ │
      -1.25 ┤   │ │
      -2.00 ┤   ╰─╯
```

## Features

- [x] Sentiment analysis across all logs and moods
- [ ] Sentiment charting
- [ ] View logs from a particular day via the cli
