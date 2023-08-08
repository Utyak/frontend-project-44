#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../games/brain-calc.js';

const name = greetUser();
playGame(name);