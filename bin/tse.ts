#!/usr/bin/env node

import * as commander from 'commander'
import { copy, config } from '../src/index'
const pg = require(`../../package.json`)

const program = new commander.Command()
program.version(pg.version)

program.option('-c, --copy', 'copy file')

program.parse(process.argv)

if (program.copy) {
  const cfg = config()
  copy(cfg.src, cfg.dest, cfg.extendions)
} else program.help()
