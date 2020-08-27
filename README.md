## atm – at the moment.

### A personal logging and tracking CLI.

A straightforward command-line interface for logging anything you want and reviewing it later. Log anything about your day via command-line.

## Inspiration

Think software log files, but for you. They're versatile, easy to backup and parse. I got frustrated by having to use multiple apps for logging my daily activities, mood etc. The data gets fragment across all these different apps and you get no flexibility around how you get to view and analyse that data later.

`atm` is simple. It create a log file in your `user` folder for everyday you log. One line per log.

# Installation

<!-- usage -->

```sh-session
$ npm install -g @udarajay/atm
```

<!-- usagestop -->

## Usage

## `atm log`

Accepts a `-m` flag for the `message` and `-t` flag for `type`.

Example:

```sh-session
$ atm log -m "Good morning"
👏 Logged to /Users/user/atm_logs/27-08-2020.txt

$ atm log -m "Published first version of atm" -t done
👏 Logged to /Users/user/atm_logs/27-08-2020.txt

$ atm log -m smoothie -t drank
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
