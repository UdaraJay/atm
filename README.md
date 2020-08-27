# doki

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/doki.svg)](https://npmjs.org/package/doki)
[![Downloads/week](https://img.shields.io/npm/dw/doki.svg)](https://npmjs.org/package/doki)
[![License](https://img.shields.io/npm/l/doki.svg)](https://github.com/UdaraJay/doki/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g doki
$ doki COMMAND
running command...
$ doki (-v|--version|version)
doki/0.1.0 darwin-x64 node-v10.16.0
$ doki --help [COMMAND]
USAGE
  $ doki COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`doki help [COMMAND]`](#doki-help-command)
- [`doki log`](#doki-log)
- [`doki review [TIMESPAN]`](#doki-review-timespan)

## `doki help [COMMAND]`

display help for doki

```
USAGE
  $ doki help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `doki log`

Add a new log

```
USAGE
  $ doki log

OPTIONS
  -m, --message=message  message
  -t, --type=type        type
```

_See code: [src/commands/log.js](https://github.com/UdaraJay/doki/blob/v0.1.0/src/commands/log.js)_

## `doki review [TIMESPAN]`

A summary of your logs

```
USAGE
  $ doki review [TIMESPAN]
```

_See code: [src/commands/review.js](https://github.com/UdaraJay/doki/blob/v0.1.0/src/commands/review.js)_

<!-- commandsstop -->
