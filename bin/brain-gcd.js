#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../src/index.js';
import brainGcd from '../games/brain-gcd.js';

const userName = greetUser();
playGame(brainGcd, userName);
