#!/usr/bin/env node
import greetUser from '../src/cli.js';
import playGame from '../src/index.js';
import brainPrime from '../games/brain-prime.js';

const userName = greetUser();
playGame(brainPrime, userName);
