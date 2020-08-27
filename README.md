# atm

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/atm.svg)](https://npmjs.org/package/atm)
[![Downloads/week](https://img.shields.io/npm/dw/atm.svg)](https://npmjs.org/package/atm)
[![License](https://img.shields.io/npm/l/atm.svg)](https://github.com/UdaraJay/atm/blob/master/package.json)

<!-- toc -->
* [atm](#atm)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @udarajay/atm
$ atm COMMAND
running command...
$ atm (-v|--version|version)
@udarajay/atm/0.1.0 darwin-x64 node-v10.16.0
$ atm --help [COMMAND]
USAGE
  $ atm COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`atm help [COMMAND]`](#atm-help-command)
* [`atm log`](#atm-log)
* [`atm review [TIMESPAN]`](#atm-review-timespan)

## `atm help [COMMAND]`

display help for atm

```
USAGE
  $ atm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `atm log`

Add a new log

```
USAGE
  $ atm log

OPTIONS
  -m, --message=message  message
  -t, --type=type        type
```

_See code: [src/commands/log.js](https://github.com/UdaraJay/atm/blob/v0.1.0/src/commands/log.js)_

## `atm review [TIMESPAN]`

A summary of your logs

```
USAGE
  $ atm review [TIMESPAN]
```

_See code: [src/commands/review.js](https://github.com/UdaraJay/atm/blob/v0.1.0/src/commands/review.js)_
<!-- commandsstop -->
