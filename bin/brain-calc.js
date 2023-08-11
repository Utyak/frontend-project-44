#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';

const userName = greetUser();
playGame(brainCalc, userName);
