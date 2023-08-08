#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../src/index.js';
import brainEven from '../games/brain-even.js';

const userName = greetUser();
playGame(brainEven, userName);
