#!/usr/bin/env node

import { program } from "commander";
import genDiff from "../src/index.js"


program
  .version('1.0.1')
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1 filepath2>')
  .option('-f, --format <type>','output format')
  .action((filepath1, filepath2)=>{
    console.log(genDiff(filepath1, filepath2, program.command))
  })
  .parse(process.argv);