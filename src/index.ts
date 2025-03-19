#!/usr/bin/env node

import { program } from '@commander-js/extra-typings';

program
    .name('pigeoff')
    .description('A HTTP request response cli tool')
    .version('0.0.1');

program.parse(process.argv);
