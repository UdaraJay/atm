# atm – at the moment.

### A personal logging and tracking CLI.

A straightforward command-line interface for logging anything about your day and reviewing it later.

## Inspiration

Think software log files, but for you. They're versatile, easy to backup and are straightforward parse. I got frustrated with having to use multiple apps for logging my daily activities, mood, food etc. The data gets fragment across all these different apps and you get no flexibility around how you get to view and analyse that data later.

## How it works

**atm** is simple. It writes logs into your user folder (`$user/atm_log`). One log file per day (`dd-mm-yyyy.txt`). One line per log in each file. All of it's stored locally, you can backup these log file and use them however you like.

## Installation

<!-- usage -->

```sh-session
$ npm install -g @udarajay/atm
$ atm COMMAND
running command...
$ atm (-v|--version|version)
@udarajay/atm/0.1.2 darwin-x64 node-v10.16.0
$ atm --help [COMMAND]
USAGE
  $ atm COMMAND
...
```

<!-- usagestop -->

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

$ atm review
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│   log   │   1    │
│  drank  │   1    │
└─────────┴────────┘
Average sentiment: 3
Median sentiment:  3
```

## Features
